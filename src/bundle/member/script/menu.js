"use strict";
import data from './mock.js';
import template from './render.js';
import request from "../../../common/request";

const ALL = 0;
const NEEDPAY = 1;
const NEEDREC = 2;
const COMPLATE = 3;
const REFUSE = 4;

class Menu {
	constructor(name){
		var wrap = document.querySelector(name);
		this.children = wrap.children;
		this.activeItem=null;
		this.activeIndex=0;
		this.activeName='active';
 		this.setActive(wrap.children[0]);
		wrap.addEventListener('click',this,false);
		this.pageWrap = document.getElementById('page-item');
	}

	handleEvent(e){
		var target = e.target;
		var index = this.getIndex(target);
		if(this.activeIndex===index){
			return;
		}
		if(index !== -1){
			this.setActive(target);
			this.activeIndex = index;
			this.renderView();
		}
	}

	getIndex(target){
		var children = this.children;
		var length = children.length;
		for(var i = 0;i<length;i++){
			if(children[i]===target){
				return i;
			}
		}
		return -1;
	}

	setActive(target){
		if(!target) return;
		if(this.activeItem){
			this.activeItem.className='';
		}
		target.className=this.activeName;
		this.activeItem=target;
	}

	pullData(){
		var index = this.activeIndex;
		switch(index){
			case ALL:
				return data.all;
			case NEEDPAY:
				return data.needpay;
			case NEEDREC:
				return data.recived;
			case COMPLATE:
				return data.compleat;
			default:
				return data.recived;
		}
		//this.fetchData();
	}

	fetchData(type){
		var url = 'http://192.168.0.95:81/test.php';
		request.get(url,{id:1}).then(function(response){

		}).catch(function(err){

		});
	}

	

	renderView(){
		var data = this.pullData();
		var oFrag = document.createDocumentFragment();
		data.forEach((item)=>{
			oFrag.appendChild(template.render(item))
		})
		this.pageWrap.innerHTML='';
		this.pageWrap.appendChild(oFrag);
	}
}

export default Menu;