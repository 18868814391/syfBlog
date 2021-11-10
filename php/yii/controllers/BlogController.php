<?php

namespace app\controllers;

use Yii;
//use app\Models\Blog;
use app\models\search\BlogSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

use app\models\Blog;//数据模型
use app\models\User;//数据模型

/**
 * BlogController implements the CRUD actions for Blog model.
 */



class BlogController extends Controller
{

    public $enableCsrfValidation = false;
    public function actionMore(){
//        $body = @file_get_contents('php://input');//接受整个请求主体
//        $body=json_decode($body)  ;//反序列化
//        $id=$body->name;//获取欲取参数
//        echo $id;
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new Blog();
        $rest=Blog::find()->where(['title' => $postData['title']])->one();
        if($rest){
            return ['errcode'=>99,'errmsg'=>'存在重名文档'];
            die();
        }
        $model2 = new User();
        $rest2=User::find()->where(['adm' => $postData['adm']])->one();
        if(!$rest2){
            return ['errcode'=>99,'errmsg'=>'不存在该用户'];
            die();
        }
        if($rest2['level']!=1){
            return ['errcode'=>99,'errmsg'=>'用户权限不足'];
            die();
        }
        $model->title = $postData['title'];
        $model->content= $postData['content'];
        $model->updataTime = $postData['updataTime'];
        $model->state= $postData['adm'];
        $model->save();
        return ["errcode"=>0,'errmsg'=>'创建成功',
            'data'=>array(
            'title'=>$postData['title'],
            'content'=>$postData['content']
        )];

    }
    public function actionSearch(){
        // \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new Blog();
        $keyword=$postData['keyword'];
        $result=Blog::find()->where(['or',['like','title',$keyword]])->all();
        $arr=array();
        if($result){
            $result = array_reverse($result);
            for($i=0;$i<count($result);$i++){
                $arr[$i]=array(
                    'id'=>strval($result[$i]['id']),
                    'title'=>$result[$i]['title'],
                );
            }
            return urldecode(json_encode(["errcode"=>0,"errmsg"=>"创建成功113",
            "data"=>$arr],JSON_UNESCAPED_UNICODE));
        }else{
            return ["errcode"=>99,"errmsg"=>"查询不到数据"];
        }
    }
    public function actionTabs(){
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $keyword=$postData['tab'];
        $obj=[];
        foreach ($keyword as &$value) {
            $result=Blog::find()->where(['or',['like','title',$value]])->all();
            $sum=count($result);
            $obj[$value]=$sum;
        }
        return ['errcode'=>0,'errmsg'=>'获取成功',
            'data'=>$obj];
    }
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Blog models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new BlogSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Blog model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Blog model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Blog();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Blog model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Blog model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Blog model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Blog the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Blog::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
