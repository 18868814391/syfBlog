
<?php
header('content-type:text/html;charset=utf-8');
//请求url地址
    $appId = 'wx3352249676449b29';
    $appSecret = '97598b593cca4fb58c631a494c6413c7';
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$appSecret;
    $ch = curl_init($url);
    //3.设置参数
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);  // 从证书中检查SSL加密算法是否存在
    //4.调用接口
    $res = curl_exec($ch);
    if(curl_errno($ch)){
        var_dump(curl_error($ch));
    }
    $resArr = json_decode($res,1);
    $accToken=$resArr['access_token'];  //获取到了accessToken
    curl_close($ch);

    $url2="https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$accToken."&type=jsapi";
    $ch2 = curl_init($url2);
    curl_setopt($ch2,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
    curl_setopt($ch2, CURLOPT_SSL_VERIFYHOST, false);  // 从证书中检查SSL加密算法是否存在
    $res2 = curl_exec($ch2);
    $res2 = curl_exec($ch2);
    if(curl_errno($ch2)){
        var_dump(curl_error($ch2));
    }
    $resArr2 = json_decode($res2,1);
    curl_close($ch2);
    $ticket=$resArr2['ticket'];  //获取到了ticket

    $noncestr="syf";
    $jsapi_ticket=$ticket;
    $timestamp=1414587457;
    $url="https://www.shenyifan.top/";
//jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg&noncestr=Wm3WZYTPz0wzccnW&timestamp=1414587457&url=http://mp.weixin.qq.com?params=value
    $string1="jsapi_ticket=".$jsapi_ticket."&noncestr=syf&timestamp=1414587457&url=https://www.shenyifan.top/";
    $signature=sha1($string1);
$arr = array (
    'errcode'=>0,
    'errmsg'=>urlencode('成功'),
    'data'=>array(
        'noncestr'=>$noncestr,
        'timestamp'=>$timestamp,
        'url'=>$url,
        'signature'=>$signature,
        'ticket'=>$jsapi_ticket,
        'access'=>$accToken
    )
);
echo urldecode(json_encode($arr));

?>