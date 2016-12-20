"use strict";

require('../common/flexible');
 
 
 

function bootstrap(){
	 
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
