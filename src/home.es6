"use strict";

import './style.css';
import {append} from './hello.es6';

if (module.hot) {
  module.hot.accept('./hello.es6',function(e){
  	console.log('ssssssaaa')
  })
}

var bootstrap = ()=>{
	append('Hello World!');
}

window.addEventListener('DOMContentLoaded',function(e){
	bootstrap();
},false);