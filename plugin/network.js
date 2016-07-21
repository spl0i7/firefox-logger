var storage = require('storage.js');
var server = "http://127.0.0.1:8080/submit";
function postdata(jdata){
	var Request = require("sdk/request").Request;
	Request({
		url:server,
		headers: {
           "pragma": "no-cache"
			},
		content:JSON.stringify(jdata),
		contentType: "application/json",
		onComplete:function(response){
		  var status = response.status;
		  if(status === 200){
			storage.localStorage.keys = "";
			storage.localStorage.urls = [];
		  }
		}
	}).post();
}
exports.postdata = postdata;


