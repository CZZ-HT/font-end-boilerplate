"use strict";
 
var append = (str)=>{
	let app = document.getElementById('app');
	let head = document.createElement('header');
	head.innerHTML = str+Date.now()+'';
	head.className = 'qr-code'
	//app.innerHTML = '';
	app.appendChild(head);
	var png = require('./assets/images/1_03.png');
	var img = document.createElement('img');
	img.src = png;
	app.appendChild(img);
}
 

module.exports = {
	append : append
}