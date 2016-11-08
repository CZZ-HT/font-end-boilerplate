'use strict';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import filter from './tools.js';
class Footer extends Component{
	constructor(props){
        super(props);
    }
    componentDidMount(){
        let foot = ReactDOM.findDOMNode(this),
            items = foot.querySelectorAll('a'),
            sub = filter(num),
            num = 2; //test 
        if(sub){
            let dm = document.createElement('em');
            dm.innerText=sub;
            items[2].appendChild(dm);
        }
    }
    renderItem(){
        const nav = ['首页','分类','购物车','我的'];
        const {activeIndex} = this.props;
        return nav.map((item,i)=>{
            let hovered= activeIndex === i ? 'active':null;
            return (
                <li key={'nav-'+i}>
                    <a href="javascript:;" className={hovered}><i></i>{item}</a>
                </li>
            )
        })
    }
  	render() {
	    return (
	    	<footer className="bottom-nav">
                <ul>
                    {this.renderItem()}
                </ul>
            </footer>
	    );
  }
}

Footer.defaultProps = {
    activeIndex:0
}
export default Footer;