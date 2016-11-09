import React from 'react';
import ReactDOM from "react-dom";
import App from './app.jsx';
require('../common/responsive.js');

function bootstrap(){
    ReactDOM.render(<App />,document.getElementById('root'));
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
