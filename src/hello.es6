"use strict";
 
var append = (str)=>{
	let app = document.getElementById('app');
	let head = document.createElement('header');
	head.innerHTML = str+Date.now()+'';
	//app.innerHTML = '';
	app.appendChild(head);
}
 

module.exports = {
	append : append
}