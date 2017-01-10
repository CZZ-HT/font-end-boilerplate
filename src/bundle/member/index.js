"use strict";
 
import setActiveFoot from  '../common/footer';
import spinner from '../common/spinner';
import Menu from './script/menu';
import {scrollLoad} from '../common/scroll';

function bootstrap(){
	setActiveFoot(3);
	spinner.show();
	var m = new Menu('.order-nav');
	scrollLoad(function(){
		console.log(m)
	});
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
