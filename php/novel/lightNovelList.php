<?php
header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");

mysqli_query($connect,'SET NAMES UTF8');

$result=mysqli_query($connect,"select * from lightnovel");

$arr=array();
//echo ($result);
for($i=0;$i<mysqli_num_rows($result);$i++){
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    $arr[$i]=array(
        'id'=>urlencode($row['id']),
        'title'=>urlencode($row['title']),
    );
//    $arr[$i]=urlencode($row['title']);
}
$arr2 = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>$arr
);
echo urldecode(json_encode($arr2));
?>