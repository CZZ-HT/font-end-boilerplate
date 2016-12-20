"use strict";

function Toolbar(tag){
	this.node = tag;
	this.isReady=false;
	this.active='active';
	tag.children[0].addEventListener('click',this,false);
}

Toolbar.prototype = {
	show:function(){
		this.node.className += ' ' + this.active;
		this.isReady=true;
	},
	hide:function(){
		this.node.className='popsize';
		this.isReady = false;
	},
	buy:function(){
		window.location.href='orderdetails.html';
	},
	handleEvent:function(e){
		this.hide();
	}
}

module.exports = Toolbar;