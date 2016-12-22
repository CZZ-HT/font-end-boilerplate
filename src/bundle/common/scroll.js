"use strict";

import {rAF,cAF} from './timeout';

var scrollTop = 0;
var docElement;
var timer = null;
var RANGE = 50;

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

export function cacleHeight(obj){
	var body = obj||document.body;
	var height = body.offsetHeight;
	if(body.getBoundingClientRect){
		var offset = body.getBoundingClientRect();
		height = offset.height;
	}
	return Math.round(height);
}

export function scrollLoad(callback){
	var screenHeight = Math.round(window.innerHeight);
	docElement = document.body;
	if(document.documentElement.scrollTop){
		docElement = document.documentElement;
	}
	window.addEventListener('scroll',function(){
		var contentHeight = cacleHeight();
		scrollTop=parseInt(docElement.scrollTop)||0;
		if(contentHeight-RANGE<=scrollTop+screenHeight){
			callback();
		}
	});
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

