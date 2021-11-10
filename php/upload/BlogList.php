<?php
header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");

$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);
$start_page=$j['start_page'];
$pages=$j['pages'];

mysqli_query($connect,'SET NAMES UTF8');

$result=mysqli_query($connect,"select * from blog order by id desc");

$arr=array();
//echo ($result);
$total=0;
for($i=0;$i<mysqli_num_rows($result);$i++){
    $total++;
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    $arr[$i]=array(
        'id'=>urlencode($row['id']),
        'title'=>urlencode($row['title']),
    );
//    $arr[$i]=urlencode($row['title']);
}

$arr2=array();
$arr2=array_slice($arr,$start_page*$pages,$pages);

$arr3 = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>$arr2,
    'total_page'=>$total
);
echo urldecode(json_encode($arr3));
?>