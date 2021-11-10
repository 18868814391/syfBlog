<?php

header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");
if(!$connect){
    die('数据库连接失败'.mysqli_error());
}else{

}

mysqli_query($connect,'SET NAMES UTF8');

$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);

$admin=$j['admin'];
$Thename=$j['Thename'];
$content=$j['content'];
$updatatime=$j['time'];
$talkTo=$j['talkTo'];
$belong=$j['belong'];

mysqli_query($connect,"INSERT INTO footprint (admin,Thename,content,updatatime,talkTo,belong) VALUES ('$admin','$Thename', '$content','$updatatime','$talkTo','$belong')");
    $arr = array (
        'errcode'=>0,
        'errmsg'=>urlencode('创建成功'),
        'data'=>array(
            'content'=>addslashes($content),
        )
    );
    echo urldecode(json_encode($arr));

?>