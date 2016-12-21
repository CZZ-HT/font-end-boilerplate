"use strict";

require('../common/flexible');
import Sortplan from './script/sort';

function bootstrap(){
	var nav = document.getElementById('sort-nav');
 	new Sortplan(nav);
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
