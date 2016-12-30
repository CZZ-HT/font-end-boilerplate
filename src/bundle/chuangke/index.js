"use strict";
 
import GoTop from '../../common/gotop';
import Sortplan from './script/sort';
import spinner from '../../common/spinner';
import request from "../../common/request";
import {scrollLoad} from '../../common/scroll';

var lock = false;

function bootstrap(){
	var nav = document.getElementById('sort-nav');
	new Sortplan(nav);
	new GoTop();
	scrollLoad(fetchGoods);
	document.querySelector('.goods-list').onclick=function(){
		location.href="goods.html"
	}
}

function fetchGoods(){
	spinner.show();
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
