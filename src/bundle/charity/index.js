"use strict";
 
import spinner from '../common/spinner';

function bootstrap(){
 
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
