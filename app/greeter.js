// Greeter.js
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = "Hi there and greetings!";
	greet.className = 'box';
	return greet;
};