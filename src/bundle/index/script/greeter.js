// Greeter.js
import $ from 'jquery';

module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = "Hi there and greetings!";
	greet.className = 'box';
	$(greet).on('click',(e)=>{
		alert(e.target.innerHTML)
	})
	return greet;
};