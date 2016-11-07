'use strict';  
import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
    }
    renderList(data){
        return data.map((item,i)=>{
            return (
                <li key={'item-'+i}>
                    <img src={item.icon} />
                    <span>{item.name}</span>
                    <img className="side" src={item.src} />
                </li>
            )
        })
    }
    render() {
        const data = [
            {name:"我的收藏",icon:"images/icon_star_03.png",src:"images/icon_arrow_08.png"},
            {name:"我的优惠券",icon:"images/icon_star_06.png",src:"images/icon_arrow_08.png"},
            {name:"收货地址",icon:"images/icon_star_08.png",src:"images/icon_arrow_08.png"}
        ];
        return (
            <ul className="menu-list">
                {this.renderList(data)}
            </ul>
        );
  }
}

export default List

