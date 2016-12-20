"use strict";

require('../common/flexible');
 
import Swiper from  '../../vendor/swiper';
import GoTop from '../common/gotop';
import Sortplan from './script/sort';

function bootstrap(){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true
	});
	new Sortplan(document.getElementById('sort-nav'));
	new GoTop(document.getElementById('gotop'));
	document.querySelector('.goods-list').onclick=function(){
		location.href="goods.html";
	}
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
