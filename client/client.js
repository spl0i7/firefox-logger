var request = require('request');
var get = {
   uri:'http://127.0.0.1:8080/fetch/all',
   method:'POST',
   json :{
      key:'7thi5i5s0mek3y!!'
   }
};
request(get,(err,res,body)=>{
    if(!err) console.log(body);
});



