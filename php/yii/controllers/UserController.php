<?php

namespace app\controllers;

use Yii;
//use app\Models\User;
use app\models\search\UserSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

use app\models\Blog;//数据模型
use app\models\User;//数据模型
/**
 * UserController implements the CRUD actions for User model.
 */
class UserController extends Controller
{
    public $enableCsrfValidation = false;
    public function actionRegister()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new User();
        $rest=User::find()->where(['adm' => $postData['admin']])->one();
        if($rest){
            return ['errcode'=>99,'errmsg'=>'用户名重名'];
            die();
        }
        $model->adm = $postData['admin'];
        $model->code= $postData['code'];
        $model->Thename = $postData['Thename'];
        $model->save();
        return ['errcode'=>0,'errmsg'=>'注册成功',
            'data'=>array(
                'adm'=>$postData['admin'],
                'Thename'=>$postData['Thename']
            )];
    }
    public function actionLogin()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new User();
        $rest=User::find()->where(['adm' => $postData['admin']])->one();
        if(!$rest){
            return ['errcode'=>99,'errmsg'=>'不存在该用户'];
            die();
        }
        if($rest['code']==$postData['code']){
            return ['errcode'=>0,'errmsg'=>'登陆成功',
                'data'=>array(
                    'adm'=>$postData['admin'],
                    'Thename'=>$rest['Thename'],
                )];
        }else{
            return ['errcode'=>99,'errmsg'=>'密码错误',
                'data'=>array(
                    'adm'=>$postData['admin'],
                    'Thename'=>$rest['Thename']
                )];
        }
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
     * Lists all User models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new UserSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single User model.
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
     * Creates a new User model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new User();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing User model.
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
     * Deletes an existing User model.
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
     * Finds the User model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return User the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = User::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
