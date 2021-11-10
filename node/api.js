const {pool,router,Result}=require('./connect.js');
var request = require('request');

router.post('/all',(req,res)=>{
  pool.getConnection((err,conn)=>{
    conn.query('SELECT * FROM footprint',(e,r)=>res.json(new Result({data:r})));
    conn.release();
  })
})


router.post('/mad', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  console.log(req.body)
   request({
       url:'https://www.shenyifan.top/apis/syf/php/yii/web/index.php?r=common/getmad',
       method:'POST',
       headers:{
          'Content-Type': 'application/json',
       },
       body: JSON.stringify({//body中放请求参数
          // "reqType":0,
          // "perception": {
          //     "inputText": {
          //         "text": req.body.info
          //     },
          // },
          // "userInfo": {
          //     "apiKey": "",
          //     "userId": req.body.userid
          // }
      })
   },function (error, response, body) {
                  if (!error&&response.statusCode == 200) {
                      console.error(body);
                      res.send(body);
                  }
              })
     
});

module.exports=router;