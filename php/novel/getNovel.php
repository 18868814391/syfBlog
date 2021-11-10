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

$id=$j['id'];


$search=mysqli_query($connect,"select * from lightnovel where id='$id'");
$row=mysqli_fetch_array($search);

$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>array(
        'title'=>$row['title'],
        'content'=>stripslashes($row['content'])
    )
);
echo urldecode(json_encode($arr));

?>