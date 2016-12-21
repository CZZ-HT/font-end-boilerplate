"use strict";
function footer(index){
	var node = document.querySelector('.nav-bar');
	node.children[index].className='active';
}
module.exports = footer;