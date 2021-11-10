<?php
header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");

mysqli_query($connect,'SET NAMES UTF8');

$result=mysqli_query($connect,"select * from heavynovel");

$arr=array();
//echo ($result);
for($i=0;$i<mysqli_num_rows($result);$i++){
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    if($i>0){
        if(urlencode($row['chapterTitle'])!=$arr[count($arr)-1]){
            array_push($arr,urlencode($row['chapterTitle']));
        }
    }else{
        array_push($arr,urlencode($row['chapterTitle']));
    }
}
$arrTwice=array();
for($k=0;$k<count($arr);$k++){
    $tit=urldecode($arr[$k]);
//    var_dump($tit);
    $arrTwice[$tit]=array();
//    var_dump($arrTwice);
//    die();

    $result=mysqli_query($connect,"select * from heavynovel where chapterTitle='$tit'");
    for($j=0;$j<mysqli_num_rows($result);$j++){
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
        array_push($arrTwice[$tit],urlencode($row['paragraphTitle']));
    }
}
//var_dump($arrTwice);
//echo $arrTwice;
$ar = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>$arrTwice
);
echo urldecode(json_encode($ar));
?>