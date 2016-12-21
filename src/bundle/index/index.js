"use strict";

require('../common/flexible');
 
import Swiper from  '../../vendor/swiper';
import GoTop from '../common/gotop';
import footer from  '../../vendor/footer';

function bootstrap(){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true
	});

	new GoTop();

	footer(0);
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}

