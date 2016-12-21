"use strict";

import {rAF,cAF} from './timeout';

var scrollTop = 0;
var docElement;
var timer = null;

function step(){
	var  speed=Math.floor(-scrollTop/10);
	if(scrollTop==0){
		cAF(timer);
	}else{
		timer = rAF(step);
	}
	docElement.scrollTop=scrollTop+speed;
}

export function scrollToTop(){
	timer && cAF(timer);
	timer = rAF(step);
}

export default function bindEvent(fn) {
	docElement = document.body;
	if(document.documentElement.scrollTop){
		docElement = document.documentElement;
	}
	window.addEventListener('scroll',function(){
		scrollTop=parseInt(docElement.scrollTop)||0;
		fn(scrollTop);
	});
};

