'use strict';  
import React, {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
    }
    filter(num){
        let rs = '';
        if(num&&num>0){
            rs = num > 99 ? '99+':num;
        }
        return rs ? <em>{rs}</em> : '';
    }
    renderList(data){
        return data.map((item,i)=>{
            return (
                <li key={'item-'+i}><a href={item.url}><i></i>{item.name}{this.filter(item.num)}</a></li>
            )
        })
    }
    render() {
        const data = [
            {name:"待付款",url:"#"},
            {name:"待发货",url:"#",num:999},
            {name:"待收货",url:"#"}
        ];
        return (
            <ul className="middle-nav">
                {this.renderList(data)}
            </ul>
        );
  }
}

export default List;