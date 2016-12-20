"use strict";

function Collect(tag){
	this.node = tag;
	this.active = 'active';
	this.isActive = tag.className==this.active?true:false;
	tag.addEventListener('click',this,false);
}

Collect.prototype={
	save:function(){
		this.isActive = true;
		this.node.className=this.active;
	},
	cancel:function(){
		this.isActive = false;
		this.node.className='';
	},
	handleEvent:function(e){
		this.isActive ? this.cancel() : this.save();
	}
}

module.exports = Collect;