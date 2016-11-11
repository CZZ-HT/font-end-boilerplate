import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app.jsx';
import reducer from './reducers.jsx';

const initstate = {id:1,text:'init',completed:false};
 
function bootstrap(){
	const store = createStore(reducer,initstate);
 
	ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}

require('../common/responsive.js');