"use strict";

import handleScroll,{scrollToTop} from './scroll';

/**
 * 返回顶部
 */

class GoTop {
    constructor(wrap) {
    	var node = document.createElement('div');
    	wrap = wrap || document.body;
		node.className = 'back-to-top';
		wrap.appendChild(node);
		this.node = node;
		node.addEventListener('click',this,false);
		this.init();
    }
    handleEvent(e){
		scrollToTop();
	}
	show (e){
		this.node.className ='back-to-top active';
	}

	hide (e){
		this.node.className ='back-to-top';
	}

	init (){
		var H = Math.ceil(window.innerHeight*.5);
		var self = this;
		handleScroll(function(scrollTop){
			if(scrollTop>H){
				self.show();
			}else{
				self.hide();
			}
		})
	}
  }

export default GoTop;
 