'use strict';
import React, {Component} from 'react';
import Navi from './components/nav.jsx';
import List from './components/list.jsx';
import Footer from '../common/footer.jsx';

class App extends Component{
	  constructor(props){
        super(props);
    }
  	render() {
	    return (
        <div className="content">
            <div className="user-login">
                <a href="#">注 册</a>
                <a href="#">登 陆</a>
            </div>
            <div className="order-list">
                <span>我的订单</span>
                <div className="all">
                    <span>查看全部订单</span>
                    <img src="images/icon_arrow_08.png" />
                </div>
            </div>
            <Navi />
            <List />
            <Footer activeIndex={3}/>
        </div>
	    );
  }
}

export default App