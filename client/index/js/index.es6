"use strict";
 
import $ from 'jquery';
import Gotop from './goToTop.es6';

$(document).ready(function(){
	initSwiper();
	new Gotop(document.getElementById('gotop'));

})

function initSwiper(){
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true
  })      
}