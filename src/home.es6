"use strict";

import './style.css';

if (module.hot) {
  //module.hot.accept()
}

var append = (str)=>{
	let app = document.getElementById('app');
	let head = document.createElement('header');
	head.innerHTML = str+Date.now();
	app.appendChild(head);
}

window.addEventListener('DOMContentLoaded',function(e){
	bootstrap();
},false);


var bootstrap = ()=>{
	append('Hello World !')
}