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
$title=$j['title'];

$search=mysqli_query($connect,"select * from lightnovel where title='$title'");

if(mysqli_fetch_array($search)){
    $arr = array (
        'errcode'=>99,
        'errmsg'=>urlencode('重名')
    );
    echo urldecode(json_encode($arr));
    die();
}else{

};

$title=$j['title'];
$content=$j['content'];
$updataTime=$j['updataTime'];
$chapterTitle=$j['chapterTitle'];
$paragraphTitle=$j['paragraphTitle'];

if($chapterTitle){
    mysqli_query($connect,"INSERT INTO heavynovel (content,updataTime,chapterTitle,paragraphTitle) VALUES ('$content', '$updataTime','$chapterTitle','$paragraphTitle')");

    $arr = array (
        'errcode'=>0,
        'errmsg'=>urlencode('创建成功'),
        'data'=>array(
            'title'=>$title,
            'content'=>addslashes($content),
        )
    );
    echo urldecode(json_encode($arr));
}else{
    mysqli_query($connect,"INSERT INTO lightnovel (title,content,updataTime) VALUES ('$title','$content', '$updataTime')");

    $arr = array (
        'errcode'=>0,
        'errmsg'=>urlencode('创建成功'),
        'data'=>array(
            'title'=>$title,
            'content'=>addslashes($content),
        )
    );
    echo urldecode(json_encode($arr));
}


?>