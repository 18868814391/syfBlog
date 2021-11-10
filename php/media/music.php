<?php
header('content-type:text/html;charset=utf-8');
//$command =  isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : file_get_contents("php://input");
//$j =json_decode( $command,true);
//$id=$j['id'];
$handler = opendir('./../../music');//当前目录中的文件夹下的文件夹
$musicList=array();
while( ($filename = readdir($handler)) !== false ) {
    if($filename != "." && $filename != ".."){
//        $filename = iconv('GB2312','UTF-8',$filename);
        $filename = mb_convert_encoding($filename,"UTF-8","GB2312,UTF-8,ASCII,JIS,EUC-JP,SJIS");
        $mp3=strstr($filename,".");
        if($mp3==".mp3"){
            $filename=strstr($filename,".",true);
            array_push($musicList,urlencode($filename));
        }
    }
}
closedir($handler);

$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('获取成功'),
    'data'=>$musicList
);
echo urldecode(json_encode($arr));

?>