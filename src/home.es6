"use strict";

require('./style.css');
import {append} from './hello.es6';

// if (module.hot) {
//   module.hot.accept('./hello.es6',function(e){
//   	console.log('ssssssaaa')
//   })
// }

var bootstrap = ()=>{
	append('Hello World!');
	console.log('ss')
}

window.addEventListener('DOMContentLoaded',function(e){
	bootstrap();
},false);