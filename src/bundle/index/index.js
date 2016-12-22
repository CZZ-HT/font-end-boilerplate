"use strict";

require('../common/flexible');
import request from "../common/request"
import Swiper from  '../../vendor/swiper';
import GoTop from '../common/gotop';
import setActiveFoot from  '../../vendor/footer';
import {scrollLoad} from '../common/scroll';

var lock = false;
 

function bootstrap(){
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true
	});
	new GoTop();
	setActiveFoot(0);
	scrollLoad(fetchGoods);
}

function fetchGoods(){
	var url = 'http://ouyangli.bbc.com/test.php';
	if(lock) return;
	lock = true;

	request.post(url,{id:33}).then(function(response) {
        console.log(response)
        lock = false;
    }).catch(function(err) {
        console.log(err);
    });
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}