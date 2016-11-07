'use strict';
import React, {Component} from 'react';

class Footer extends Component{
	constructor(props){
        super(props);
        this.state = {
            maskActive:false
        }
    }
  	render() {
	    return (
	    	<footer className="bottom-nav">
            <ul>
                <li><a href="#"><i></i>首页</a></li>
                <li><a href="#"><i></i>分类</a></li>
                <li><a href="#"><i></i>购物车<em>99+</em></a></li>
                <li><a className="active" href="#"><i></i>我的</a></li>
            </ul>
        </footer>
	    );
  }
}

export default Footer