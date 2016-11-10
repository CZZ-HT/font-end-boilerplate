import React from 'react';
import ReactDOM from "react-dom";
import App from './app.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
require('../common/responsive.js');
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    console.log(state)
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      }
    default:
      return state
  }
}
 
function bootstrap(){
	const store = createStore(reducer,{id:1,text:'init',completed:false});
 
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
