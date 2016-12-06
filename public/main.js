webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//main.js 
	var $ = __webpack_require__(2);
	var greeter = __webpack_require__(3);
	$(document).ready(function(){
		document.getElementById('root').appendChild(greeter());
		console.log(33)
	});

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	// Greeter.js
	module.exports = function() {
		var greet = document.createElement('div');
		greet.textContent = "Hi there and greetings!";
		greet.className = 'box';
		return greet;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=main.js.map