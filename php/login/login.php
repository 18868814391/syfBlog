<?php
header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");
if(!$connect){
    die('数据库连接失败'.mysqli_error());
}
mysqli_query($connect,'SET NAMES UTF8');

$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);//true,转化成数组
$adm=$j['admin'];
$code=$j['code'];

$search=mysqli_query($connect,"select * from user where adm='$adm' and code='$code'");

if(mysqli_fetch_array($search)){
    $result = mysqli_query($connect,"SELECT * FROM user WHERE adm='$adm'");
    $row = mysqli_fetch_array($result);
    $Thename=$row['Thename'];
    $arr = array (
        'errcode'=>0,
        'errmsg'=>urlencode('登陆成功'),
        'data'=>array(
            'adm'=>$j['admin'],
            'Thename'=>$Thename,
        )
    );
    echo urldecode(json_encode($arr));
    die();
}else{
    $arr = array (
        'errcode'=>99,
        'errmsg'=>urlencode('没有该用户,或者密码输入错误'),
        'data'=>array(
            'adm'=>$j['admin']
        )
    );
    echo urldecode(json_encode($arr));
    die();
}

?>