// XMLHttpRequest functions from http://www.quirksmode.org/quirksmode.js
// See http://webcache.googleusercontent.com/search?q=cache:zXev6D5Z530J:www.quirksmode.org/js/xmlhttp.html+&cd=1&hl=en&ct=clnk&gl=us

function sendRequest(url,callback,postData) {
	var req = createXMLHTTPObject();
	if (!req) return;
	var method = (postData) ? "POST" : "GET";
	req.open(method,url,true);
	req.setRequestHeader('User-Agent','XMLHTTP/1.0');
	if (postData)
		req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	req.onreadystatechange = function () {
		if (req.readyState != 4) return;
		if (req.status != 200 && req.status != 304) {
			return;
		}
		callback(req);
	}
	if (req.readyState == 4) return;
	req.send(postData);
}

var XMLHttpFactories = [
	function () {return new XMLHttpRequest()},
	function () {return new ActiveXObject("Msxml2.XMLHTTP")},
	function () {return new ActiveXObject("Msxml3.XMLHTTP")},
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}
];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i=0;i<XMLHttpFactories.length;i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}

var SID_KEY = 'twilio-sid';
var TOKEN_KEY = 'twilio-token';

var sid, token;

sid = localStorage.getItem(SID_KEY);
token = localStorage.getItem(TOKEN_KEY);

if(sid === null || sid === "null") {
  sid = prompt("Enter your Twilio ACCOUNT SID");
}

while (sid === null || sid.length !== 34) {
  sid = prompt("You mistyped your Twilio ACCOUNT SID. Please retype it." +
          " For help, check https://github.com/hackedu/hackedu/tree/master/playbook/workshops/twilio/README.md");
}
localStorage.setItem(SID_KEY, sid);

if(token === undefined || token === null || token === "null") {
  token = prompt("Enter your Twilio AUTH TOKEN");
}

while (token === null || token.length !== 32) {
  token = prompt("You mistyped your Twilio AUTH TOKEN. Please retype it." +
          " For help, check https://github.com/hackedu/hackedu/tree/master/playbook/workshops/twilio/README.md");
}
localStorage.setItem(TOKEN_KEY, token);

<<<<<<< HEAD
// var script = document.createElement('script');
// script.setAttribute('src', '//bit.ly/twilio-basic-v1');
// script.setAttribute('sid', sid);
// script.setAttribute('token', token);
// document.body.appendChild(script);

=======
>>>>>>> 6397abe... Remove commented out code in store_credentials.js
var xhrObj = createXMLHTTPObject();
xhrObj.open('GET', "//cdn.rawgit.com/hackedu/hackedu/70b7170dc71edeca7ab63a448929ac4b1d75ac26/playbook/workshops/twilio/twilio-basic.js/dist/twilio-basic.js", false);
xhrObj.send('');

var script = document.createElement('script');
script.setAttribute('type', "text/javascript");
script.setAttribute('sid', sid);
script.setAttribute('token', token);
script.text = xhrObj.responseText;
document.getElementsByTagName('head')[0].appendChild(script);

setTimeout(function() {
  if (Twilio.INITIALIZED === false) {
    localStorage.removeItem(SID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    alert("Your Twilio ACCOUNT SID and Twilio Token is invalid" +
          "Please try refreshing the page.");
  }
}, 5000);
