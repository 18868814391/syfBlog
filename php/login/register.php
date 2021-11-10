<?php
// header("Content-Type:text/html;charset=utf-8;");
// $arr = array ('Version_code'=>2,'Version_name'=>'UpdateVersion','Versoin_desc'=>urlencode('更新了地图功能'),'Versoin_path'=>urlencode('http://nnddkj.com/BusIot/APK/BusIot.apk'));
// echo urldecode(json_encode($arr));
header('content-type:text/html;charset=utf-8');
//$conn = new mysqli(‘localhost’, ‘user’, ‘password’,’data_base’);
//$connect=mysql_connect('localhost','root','syf');
$connect =new mysqli("localhost", "root", "syf","syf");
if(!$connect){
   die('数据库连接失败'.mysqli_error());
}else{
//  echo '数据库连接成功';
}
//mysql_select_db('syf');
//$result = $conn -> query( ‘select * from data_base’ );
//$connect -> query( ‘select * from data_base’ );
mysqli_query($connect,'SET NAMES UTF8');

//var_dump($GLOBALS['HTTP_RAW_POST_DATA']);
//var_dump($_POST);
$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);//true,转化成数组
//var_dump($j['admin']);
$admin=$j['admin'];
// if(isset($_POST['phone'])||isset($_POST['submit'])){
//    $phone=$_POST['phone'];
// }else{exit('非法操作');}
$search=mysqli_query($connect,"select * from user where adm='$admin'");

if(mysqli_fetch_array($search)){
//   echo '用户重名';
 $arr = array (
     'errcode'=>99,
     'errmsg'=>urlencode('用户名重名')
 );
 echo urldecode(json_encode($arr));
 die();
}else{
//   echo '用户不重名';
};

$adm=$j['admin'];
$code=$j['code'];
$Thename=$j['Thename'];

mysqli_query($connect,"INSERT INTO user (adm,code,Thename) VALUES ('$adm','$code', '$Thename')");
//echo "INSERT INTO user (adm,code,Thename) VALUES ('$adm','$code', '$Thename')";
//echo $ttt;
//die();

$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('注册成功'),
    'data'=>array(
        'adm'=>$adm,
        'Thename'=>$Thename
    )
);
echo urldecode(json_encode($arr));

?>