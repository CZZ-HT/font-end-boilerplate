import React from 'react';
import ReactDOM from "react-dom";
import App from './app.jsx';

function bootstrap(){
    ReactDOM.render(<App />,document.getElementById('root'));
    require('../common/responsive.js');
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
