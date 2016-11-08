'use strict';  
import React, {Component} from 'react';
import filter from '../../common/tools.js';

class List extends Component{
    constructor(props){
        super(props);
    }
    renderList(data){
        return data.map((item,i)=>{
            let num = filter(item.num);
            num = num ? <em>{num}</em>:null;
            return (
                <li key={'item-'+i}>
                <a href={item.url}><i></i>{item.name}{num}</a>
                </li>
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