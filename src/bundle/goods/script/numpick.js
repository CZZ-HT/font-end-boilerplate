"use strict";

function NumberPicker(tag){
	var node = tag;
	var btns = node.children;
	this.node = node;
	this.buyed = 1;
	this.plus = btns[0];
	this.input = btns[1];
	this.minus = btns[2];
	this.max = 1000;
	this.min = 1;
	this.bindEvent();
}

NumberPicker.prototype={
	bindEvent:function(){
		var self = this;
		this.node.addEventListener('click',function(e){
			if(e.target.value==='+'){
				self.handlePlus();
			}else if(e.target.value==='-'){
				self.handleMinus();
			}
		});
	},
	handlePlus:function(){
		if(this.buyed>=this.max){
			return;
		}
		var buyed = this.buyed+1;
		this.input.value=buyed;
		this.buyed = buyed;
	},
	handleMinus:function(){
		if(this.buyed<=this.min){
			return;
		}
		var buyed = this.buyed-1;
		this.input.value=buyed;
		this.buyed = buyed;
	}
}

module.exports = NumberPicker;