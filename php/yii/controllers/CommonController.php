<?php

namespace app\controllers;

use Yii;
use app\models\search\SocketdataSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

use app\models\Dood;//数据模型

class CommonController extends Controller
{
    public $enableCsrfValidation = false;
    public function actionGetwxid()
    {
        header("Content-type: text/html; charset=utf-8");
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $getData = Yii::$app->request->get();
        return $getData['echostr'];
    }
    public function actionGetmad()
    {
        header("Content-type: text/html; charset=utf-8");
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $handler = opendir('./../../../MAD/');//当前目录中的文件夹下的文件夹
        $audioList=array();
        while( ($filename = readdir($handler)) !== false ) {
            if($filename != "." && $filename != ".."){
                $filename = mb_convert_encoding($filename,"UTF-8","GB2312,UTF-8,ASCII,JIS,EUC-JP,SJIS");
                array_push($audioList,$filename);
            }
        }
        closedir($handler);
        sort($audioList);
        return ['errcode'=>0,'errmsg'=>'获取成功','data'=>$audioList];
        die();
    }
    public function actionSavedood()
    {
        header("Content-type: text/html; charset=utf-8");
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new Dood();
        $model->content = $postData['content'];
        $model->msg= $postData['msg'];
        $model->Thename = $postData['Thename'];
        $model->updataTime= $postData['updataTime'];
        $model->save();
        return ['errcode'=>0,'errmsg'=>'创建成功'];
        die();
    }
    public function actionGetdood()
    {
        header("Content-type: text/html; charset=utf-8");
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $postData = Yii::$app->request->post();
        $model = new Dood();
        $rest=Dood::findBySql("SELECT * FROM dood order by id desc")->asArray()->all();
        $result=array();
        $result=array_slice($rest,$postData['start']*4,4);
        return ['errcode'=>0,'errmsg'=>'获取成功','data'=>$result];
    }

}
