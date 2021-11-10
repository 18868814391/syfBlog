<?php
if ($_FILES["file"]["error"] > 0)
{
    echo "Error: " . $_FILES["file"]["error"] . "<br />";
}
else
{
    $fileName = $_FILES["file"]["name"];
    $type = $_FILES["file"]["type"];
    $size = ($_FILES["file"]["size"] / 1024)." kb" ;
    $tmp_name =  $_FILES["file"]["tmp_name"] ;

    if(!move_uploaded_file($tmp_name,"upload/" .$fileName)){
        echo "An error has occurred moving the uploaded file.<BR>";
        echo "Please ensure that if safe_mode is on that the " . "UID PHP is using matches the file.";
        exit;
    }else{
        $arr = array (
            'errcode'=>0,
            'errmsg'=>urlencode('上传成功'),
            'data'=>array(
                'fileName'=>$fileName,
                'Type'=>$type,
                'Size'=>$size,
                'Stored_in'=>$tmp_name,

            )
        );
        echo urldecode(json_encode($arr));
    }
}
?>
