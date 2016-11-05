import React, {Component} from 'react';
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
            <ul className="middle-nav">
                <li><a href="index.html"><i></i>待付款</a></li>
                <li><a href="polymer.html"><i></i>待发货<em>99+</em></a></li>
                <li><a href="cart.html"><i></i>待收货</a></li>
            </ul>
    	    	<ul className="menu-list">
                <li>
                    <img src="images/icon_star_03.png" />
                    <span>我的收藏</span>
                    <img className="side" src="images/icon_arrow_08.png" />
                </li>
                <li>
                    <img src="images/icon_coupon_06.png" />
                    <span>我的优惠券</span>
                    <img className="side" src="images/icon_arrow_08.png" />
                </li>
                <li>
                    <img src="images/icon_point_08.png" />
                    <span>收货地址</span>
                    <img className="side" src="images/icon_arrow_08.png" />
                </li>
            </ul>
            <Footer />
        </div>
	    );
  }
}

export default App