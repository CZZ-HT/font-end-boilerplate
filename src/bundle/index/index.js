"use strict";

require('../common/flexible');
 
import Swiper from  '../../vendor/swiper';
import GoTop from '../common/gotop';

function bootstrap(){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true
	});

	new GoTop(document.getElementById('gotop'));
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
