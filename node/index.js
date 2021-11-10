const {app,pool,Result}=require('./connect');
const api=require('./api.js');

app.all('*',(req,res,next)=>{
  next();
})

app.all('/',(req,res)=>{
  pool.getConnection((err,conn)=>{
    res.json({a:'干啥啊，没事别乱调'})
    conn.release();
  })
})

app.use('/node',api);

app.listen(8085,()=>console.log('syf服务启动'))