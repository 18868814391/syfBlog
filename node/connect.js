const bodyParser=require('body-parser');//解析参数
const cors=require('cors');//跨域处理
const mysql=require('mysql');//引入msaql操作包
const express=require('express');//引入express
const router=express.Router();
const app=express();
const option={
  host:'118.31.62.251',
  user:'root',
  password:'syf',
  port:'3306',
  database:'syf',
  connectTimeout:5000,
  multipleStatements:false,
}
app.use(cors());
app.use(bodyParser.json());//请求体处理
app.use(bodyParser.urlencoded({extended:false}));//表单请求处理
// app.listen(8085,()=>{console.log('service start')});//开服务
let pool;
repool();

// let conn;
// reconn();
// const conn=mysql.createConnection(option);

// app.get('/',(req,res)=>{
//   // res.json('hello world')
//   res.send('<div style="color:red">hello</div>')
// })
// app.post('/test/:data',(req,res)=>{
//   return res.json({query:req.query,data:req.params,json:req.body})
// })
// app.all('/login',(req,res)=>{
//   // conn.query('SELECT * FROM footprint',(e,r)=>res.json(new Result({data:r})))
//   // pool.query('SELECT * FROM footprint',(e,r)=>res.json(new Result({data:r})))  //和下面这种似乎一样的
//   pool.getConnection((err,conn)=>{
//     conn.query('SELECT * FROM footprint',(e,r)=>res.json(new Result({data:r})));
//     conn.release();
//   })
// });



function Result({code=1,msg="success",data={}}){
  this.code=code;
  this.msg=msg;
  this.data=data;
}

// function reconn(){
//   conn=mysql.createConnection(option);
//   conn.on('error',err=>err.code==='PROTOCOL_CONNECTION_LOST'&&setTimeout(reconn,2000))
// }
function repool(){
  pool=mysql.createPool({
    ...option,
    waitForConnections:true,//当无连接池可用，等待true  断开false
    connectionLimit:100,//连接数限制
    queueLimit:0//最大连接等待数 0不限制
  });//建立连接池
  pool.on('error',err=>err.code==='PROTOCOL_CONNECTION_LOST'&&setTimeout(repool,2000))
}

module.exports={pool,Result,router,app};