<?php

namespace app\controllers;

use Yii;
//use app\Models\Socketdata;
use app\models\search\SocketdataSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

use app\models\Socketdata;//数据模型
use app\models\User;//数据模型
/**
 * SocketdataController implements the CRUD actions for Socketdata model.
 */
class SocketdataController extends Controller
{
    public $enableCsrfValidation = false;
    public function actionAddmessage()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new Socketdata();
        $model->adm = $postData['admin'];
        $model->content= $postData['content'];
        $model->Thename = $postData['Thename'];
        $model->updataTime = $postData['updataTime'];
        $model->save();
        return ['errcode'=>0,'errmsg'=>'记录成功'];
    }
    public function actionGetmessage()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $model = new Socketdata();
        $rest=Socketdata::findBySql("SELECT * FROM socketdata order by id desc limit 5")->asArray()->all();
        return ['errcode'=>0,'errmsg'=>$rest];
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
     * Lists all Socketdata models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new SocketdataSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Socketdata model.
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
     * Creates a new Socketdata model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Socketdata();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Socketdata model.
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
     * Deletes an existing Socketdata model.
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
     * Finds the Socketdata model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Socketdata the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Socketdata::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
