"use strict";
 
import request from "../common/request";
import Swiper from  '../common/swiper';
import GoTop from '../common/gotop';
import Dialog from '../common/dialog';
import Vue from 'vue';

function bootstrap(){
	const MAX = 9999;
	const MIN = 1;
	var app = new Vue({
	  	el: '#app',
	  	data: {
	    	isFavorite:false,
	    	isActive:false,
	    	buyed:1
	  	},
	  	methods:{
	  		sale:function(){
	  			if(false/*if already in your shop*/){
	  				new Dialog('您的店铺已经售卖该商品',{
	  					onlyConfirm:true
	  				});
	  			}else{
	  				location.href="choose.html";
	  			}
	  		},
	  		favorite:function(){
	  			this.isFavorite = !this.isFavorite;
	  			asyncFavorite(this);
	  		},
	  		buy:function(){
	  			if(this.isActive){
	  				location.href="orderdetails.html";
	  			}else{
	  				this.isActive = true;
	  			}
	  		},
	  		hidebox:function(){
	  			this.isActive = false;
	  		},
	  		minus:function(){
	  			if(this.buyed>MIN){
	  				this.buyed -=1;
	  			}
	  		},
	  		plus:function(){
	  			if(this.buyed<MAX){
	  				this.buyed +=1;
	  			}
	  		}
	  	}
	})
	startSwiper('.swiper-container');
	new GoTop();
}

function startSwiper(name){
	var mySwiper = new Swiper (name, {
	    loop: true
	});
}

function asyncFavorite(vue){
	var url = 'http://192.168.0.95:81/test.php';
	var isFavorite = vue.isFavorite;
	request.post(url).then(function(response) {
        if(response.ok){
        	// success
        }
    }).catch(function(err) {
        vue.isFavorite = !isFavorite;
    });
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}

 