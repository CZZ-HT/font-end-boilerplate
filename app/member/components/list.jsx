'use strict';  
import React, {Component} from 'react';
const data = [
    {id:0,name:"我的收藏",icon:"images/icon_star_03.png"},
    {id:1,name:"我的优惠券",icon:"images/icon_coupon_06.png"},
    {id:2,name:"收货地址",icon:"images/icon_point_08.png"}
];
class List extends Component{
    constructor(props){
        super(props);
    }
    handleClick(id){
        console.log(data[id]);
        alert(data[id].name)
    }
    renderList(){
        return data.map((item,i)=>{
            return (
                <li key={'item-'+i} onClick={this.handleClick.bind(this,item.id)}>
                    <img src={item.icon} />
                    <span>{item.name}</span>
                    <img className="side" src="images/icon_arrow_08.png" />
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="menu-list">
                {this.renderList()}
            </ul>
        );
  }
}

export default List

