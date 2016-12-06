//main.js 
var $ = require('jquery');
var greeter = require('./greeter.js');
$(document).ready(function(){
	document.getElementById('root').appendChild(greeter());
	console.log(33)
});