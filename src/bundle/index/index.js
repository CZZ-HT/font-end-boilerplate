"use strict";
import request from "../common/request";
import Swiper from  '../common/swiper';
import GoTop from '../common/gotop';
import setActiveFoot from  '../common/footer';
import {scrollLoad} from '../common/scroll';
import spinner from '../common/spinner';
 
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
	spinner.show();
	var url = 'http://192.168.0.95:81/test.php';
	if(lock) return;
	lock = true;
	request.get(url).then(function(response) {
        if(response&&response.length){
        	setGoodsList(response);
        }
        lock = false;
    }).catch(function(err) {
        alert(err);
    });
}

function setGoodsList(data){
	var oFrag = document.createDocumentFragment();
	var container = document.getElementById('goods-list');
	data.forEach(function(item){
		var li = document.createElement('li');
		li.innerHTML= setInnerText(item);
		oFrag.appendChild(li);
	});
	container.appendChild(oFrag);
}

function setInnerText(data){
	return `<a href="${data.url}">
				<span><img src="${data.img}" alt=""></span>
				<p>${data.title}</p>
				<b>￥${data.price}</b>
				<em>￥${data.market_price}</em>
				<i>马上抢</i>
			</a>`;
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}