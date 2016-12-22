"use strict";

function setActiveFoot(index){
	var node = document.querySelector('.nav-bar');
	node.children[index].className='active';
}

export default setActiveFoot;