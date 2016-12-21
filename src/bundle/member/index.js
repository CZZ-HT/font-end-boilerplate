"use strict";

require('../common/flexible');
import footer from  '../../vendor/footer';
 
function bootstrap(){
	footer(3);
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
