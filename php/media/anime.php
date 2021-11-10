<?php
header('content-type:text/html;charset=utf-8');
$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
$j =json_decode( $command,true);
$id=$j['id'];
if(!$id){//获取总目录列表
    $handler = opendir('./../../video');//当前目录中的文件夹下的文件夹
    $audioList=array();
    while( ($filename = readdir($handler)) !== false ) {
        if($filename != "." && $filename != ".."){
//        $filename = iconv('GB2312','UTF-8',$filename);
            $filename = mb_convert_encoding($filename,"UTF-8","GB2312,UTF-8,ASCII,JIS,EUC-JP,SJIS");
            $jpg=strstr($filename,".");
            if($jpg!=".jpg"){
                array_push($audioList,urlencode($filename));
            }
        }
    }
    closedir($handler);
}else{//获取详情集
    $handler = opendir('./../../video/'.$id);//当前目录中的文件夹下的文件夹
    $audioList=array();
    while( ($filename = readdir($handler)) !== false ) {
        if($filename != "." && $filename != ".."){
            $filename = mb_convert_encoding($filename,"UTF-8","GB2312,UTF-8,ASCII,JIS,EUC-JP,SJIS");
            array_push($audioList,urlencode($filename));
        }
    }
    closedir($handler);
    sort($audioList);
}


$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>$audioList
);
echo urldecode(json_encode($arr));

?>