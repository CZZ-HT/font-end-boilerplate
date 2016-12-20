"use strict";

require('../common/flexible');
 
import Swiper from  '../../vendor/swiper';
import GoTop from '../common/gotop';
import NumberPicker from './script/numpick';
import Toolbar from './script/toolbar';
import Collect from './script/collect';

function bootstrap(){
	new GoTop(document.getElementById('gotop'));
	
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true
	});

	var icon = document.getElementById('collect');
	var bar = document.getElementById('pops-box');
	var numbox = document.getElementById('number-box');
	var buy = document.getElementById('buy');
	var toolbar = new Toolbar(bar);
	var collect = new Collect(icon);
	var numberpicker = new NumberPicker(numbox);
	buy.addEventListener('click',function(e){
		if(toolbar.isReady){
			toolbar.hide();
			toolbar.buy();
		}else{
			toolbar.show();
		}
	})
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}

 