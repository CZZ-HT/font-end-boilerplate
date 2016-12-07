//main.js 
import $ from 'jquery';

var greeter = require('./script/greeter.js');
$(document).ready(function(){
	document.getElementById('root').appendChild(greeter());
	console.log(33)
});