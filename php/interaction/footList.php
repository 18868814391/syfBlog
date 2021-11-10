<?php
header('content-type:text/html;charset=utf-8');
$connect =new mysqli("localhost", "root", "syf","syf");

$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);
$start_page=$j['start_page'];
$pages=$j['pages'];

mysqli_query($connect,'SET NAMES UTF8');

$result=mysqli_query($connect,"select * from footprint order by id desc");

$arr=array();
$childList=array();
//echo ($result);
$total=0;
for($i=0;$i<mysqli_num_rows($result);$i++){
    $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
    if(!($row['belong'])){
        $total++;
        $child=array();
        $arr[$i]=array(
            'id'=>urlencode($row['id']),
            'admin'=>urlencode($row['admin']),
            'Thename'=>urlencode($row['Thename']),
            'content'=>urlencode($row['content']),
            'talkTo'=>urlencode($row['talkTo']),
            'belong'=>urlencode($row['belong']),
            'state'=>urlencode($row['state']),
            'state1'=>urlencode($row['state1']),
            'state2'=>urlencode($row['state2']),
            'updataTime'=>urlencode($row['updataTime']),
            'child'=>$child,
        );
    }else{
        $childList[$i]=array(
            'id'=>urlencode($row['id']),
            'admin'=>urlencode($row['admin']),
            'Thename'=>urlencode($row['Thename']),
            'content'=>urlencode($row['content']),
            'talkTo'=>urlencode($row['talkTo']),
            'belong'=>urlencode($row['belong']),
            'state'=>urlencode($row['state']),
            'state1'=>urlencode($row['state1']),
            'state2'=>urlencode($row['state2']),
            'updataTime'=>urlencode($row['updataTime']),
        );
    }
}
foreach ($childList as $key => $item) {
    $belongID=$item['belong'];
    foreach ($arr as $key1 => $value1) {
        if($value1['id']==$belongID){
            array_push($arr[$key1]['child'], $item);
//            $arr[$key1]['child']=$item;
        }
    }
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