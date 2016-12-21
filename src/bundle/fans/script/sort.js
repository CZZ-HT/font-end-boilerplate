"use strict";

var ASC = 'asc';
var DESC = 'desc';
var NONE = 'none';

/**
 * 排序指示器
 * @param {Element} element 
 */
function Sortplan(element){
	this.node = element;
	this.type = ASC;
	this.classNames = {};
	this.classNames[ASC] = 'icon-arrow-down';
	this.classNames[DESC]= 'icon-arrow-up';
 	this.classNames[NONE] = 'icon-arrow';
	this.init();
}

Sortplan.prototype.init=function(){
	var node = this.node.children[1];
	var icon = node.querySelector('i');
	var type = this.type;
	icon.className = this.classNames[type];
	this.icon = icon;
	this.node.addEventListener('click',this,false);
}

/**
 * 事件监听
 */
Sortplan.prototype.handleEvent=function(e){
	var node = e.target;
	var icon = node.querySelector('i');
	if(!icon){
		return;
	}
	this.icon.className = this.classNames[NONE];
	this.icon = icon;
	if(this.type === ASC){
		this.filterByDesc();
	}else if(this.type===DESC){
		this.filterByAsc();
	}
}

/**
 * 降序
 */
Sortplan.prototype.filterByDesc=function(){
	this.icon.className = this.classNames[DESC];
	this.type = DESC;
}

/**
 * 升序
 */
Sortplan.prototype.filterByAsc=function(){
	this.icon.className = this.classNames[ASC];
	this.type = ASC;
}

module.exports = Sortplan;