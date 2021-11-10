<?php
class WS {
    var $master;
    var $sockets = array();
    var $debug = false;//true为调试模式，输出log日志
    var $handshake = array();

    function __construct($address, $port){
        $this->master=socket_create(AF_INET, SOCK_STREAM, SOL_TCP)     or die("socket_create() failed");
        socket_set_option($this->master, SOL_SOCKET, SO_REUSEADDR, 1)  or die("socket_option() failed");//1表示接受所有的数据包
        socket_bind($this->master, $address, $port)                    or die("socket_bind() failed");
        socket_listen($this->master,20)                                or die("socket_listen() failed");

        $this->sockets[] = $this->master;
        $this->say("Server Started : ".date('Y-m-d H:i:s'));
        $this->say("Listening on   : ".$address." port ".$port);
        $this->say("Master socket  : ".$this->master."\n");

        while(true){//死循环，直到socket断开
            $socketArr = $this->sockets;
            $write = NULL;
            $except = NULL;
            /*
            //这个函数是同时接受多个连接的关键，我的理解它是为了阻塞程序继续往下执行。
            socket_select ($sockets, $write = NULL, $except = NULL, NULL);
            $sockets可以理解为一个数组，这个数组中存放的是文件描述符。当它有变化（就是有新消息到或者有客户端连接/断开）时，socket_select函数才会返回，继续往下执行。
            $write是监听是否有客户端写数据，传入NULL是不关心是否有写变化。
            $except是$sockets里面要被排除的元素，传入NULL是”监听”全部。
            最后一个参数是超时时间
            如果为0：则立即结束
            如果为n>1: 则最多在n秒后结束，如遇某一个连接有新动态，则提前返回
            如果为null：如遇某一个连接有新动态，则返回
            */
            socket_select($socketArr, $write, $except, NULL);  //自动选择来消息的socket 如果是握手 自动选择主机
            foreach ($socketArr as $socket){
                //如果有新的client连接进来，则
                if ($socket == $this->master){  //主机
                    //接受一个socket连接
                    $client = socket_accept($this->master);
                    if ($client < 0){
                        $this->log("socket_accept() failed");
                        continue;
                    } else{
                        $this->connect($client);
                    }
                } else {//否则1.为client断开socket连接，2.client发送信息
                    $bytes = @socket_recv($socket,$buffer,2048,0);
                    if ($bytes == 0){
                        $this->disConnect($socket);
                    }
                    else{
                        $key = array_search($socket, $this->sockets);
                        if (empty($this->handshake) || !isset($this->handshake[$key]) || !$this->handshake[$key]){
                            $this->doHandShake($socket, $buffer, $key);
                        }
                        else{
                            $buffer = $this->decode($buffer);
                            echo $buffer.PHP_EOL;
                            $key = array_search($socket, $this->sockets);
                            $arr = $this->sockets;
//                            array_splice($arr, $key, 1); //剔除自身后进行广播
                            array_shift($arr);
                            foreach ($arr as $s){ //对池子里剩下所有人依次广播
                                $this->send($s, $buffer);
                                $this->send($s, count($arr));
                            }
                        }
                    }
                }
            }
        }
    }

    function send($client, $msg){
        $msg = $this->frame($msg);
        socket_write($client, $msg, strlen($msg));
    }
    function connect($socket){
        array_push($this->sockets, $socket);
        $this->say("\n" . $socket . " CONNECTED!");
        $this->say(date("Y-n-d H:i:s"));
    }
    function disConnect($socket){
        $index = array_search($socket, $this->sockets);
        socket_close($socket);
        $this->say($socket . " DISCONNECTED!");
        if ($index >= 0){
            echo 'unset index is:'.PHP_EOL;
            unset($this->sockets[$index]);
        }
    }
    function doHandShake($socket, $buffer, $handKey){
        $this->log("\nRequesting handshake...");
        $this->log($buffer);
        list($resource, $host, $origin, $key) = $this->getHeaders($buffer);
        $this->log("Handshaking...");
        $upgrade  = "HTTP/1.1 101 Switching Protocol\r\n" .
            "Upgrade: websocket\r\n" . //告诉服务器现在发送的是WebSocket协议
            "Connection: Upgrade\r\n" .
            "Sec-WebSocket-Accept: " . $this->calcKey($key) . "\r\n\r\n";  //必须以两个回车结尾
        $this->log($upgrade);
        $sent = socket_write($socket, $upgrade, strlen($upgrade));
        $this->handshake[$handKey]=true;
        $this->log("Done handshaking...");
        return true;
    }

    function getHeaders($req){
        $r = $h = $o = $key = null;
        if (preg_match("/GET (.*) HTTP/"              ,$req,$match)) { $r = $match[1]; }
        if (preg_match("/Host: (.*)\r\n/"             ,$req,$match)) { $h = $match[1]; }
        if (preg_match("/Origin: (.*)\r\n/"           ,$req,$match)) { $o = $match[1]; }
        if (preg_match("/Sec-WebSocket-Key: (.*)\r\n/",$req,$match)) { $key = $match[1]; }
        return array($r, $h, $o, $key);
    }

    function calcKey($key){
        //基于websocket version 13
        $accept = base64_encode(sha1($key . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11', true));
        return $accept;
    }

    function decode($buffer) {
        $len = $masks = $data = $decoded = null;
        $len = ord($buffer[1]) & 127;

        if ($len === 126) {
            $masks = substr($buffer, 4, 4);
            $data = substr($buffer, 8);
        }
        else if ($len === 127) {
            $masks = substr($buffer, 10, 4);
            $data = substr($buffer, 14);
        }
        else {
            $masks = substr($buffer, 2, 4);
            $data = substr($buffer, 6);
        }
        for ($index = 0; $index < strlen($data); $index++) {
            $decoded .= $data[$index] ^ $masks[$index % 4];
        }
        return $decoded;
    }

    function frame($s){
        $len=strlen($s);
        if($len<=125){
            return "\x81".chr($len).$s;
        }else if($len<=65535){
            return "\x81".chr(126).pack("n",$len).$s;
        }else{
            return "\x81".chr(127).pack("xxxxN",$len).$s;
        }
//        $a = str_split($s, 125);
//        if (count($a) == 1){
//            return "\x81" . chr(strlen($a[0])) . $a[0];
//        }
//        $ns = "";
//        foreach ($a as $o){
//            $ns .= "\x81" . chr(strlen($o)) . $o;
//        }
//        return $ns;
    }


    function say($msg = ""){
        echo $msg . "\n";
    }
    function log($msg = ""){
        if ($this->debug){
            echo $msg . "\n";
        }
    }
}


new WS('172.16.15.8', 4000);
