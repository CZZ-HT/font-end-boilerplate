"use strict";

import request from "../../../common/request";

class Pages {
	constructor(option){
		this.pageIndex = options.index||1;
		this.pageSize = option.size||10;
		this.pageWrap = document.getElementById(option.id);
	}

	fetchData(pageIndex){
		var url = 'http://192.168.0.95:81/test.php';
		request.get(url,{
			pageIndex:pageIndex
		}).then(function(response){

		}).catch(function(err){

		});
	}

	render(res){
		var wrap = document.createElement('div');
		wrap.className='order-list';
		wrap.innerHTML= `<div class="order-list">
				<div class="order-id">订单号：${res.id}</div>
				<ul>
					<li>
						<a href="orderdetails.html">
							<div class="pic">
								<img src="${res.img}">
								<em>${res.status}</em>
							</div>
							<p class="name">${res.title}</p>
							<p class="txt"></p>
							<p class="pricebox">
								<em class="price">￥${res.price}</em>
								<em class="num">数量：${res.num}</em>
							</p>
						</a>
					</li>
				</ul>
				<div class="totelprice">总价:<em>￥${res.totalPrice}</em></div>
				<div class="viewlogistics"><a href="logistics.html">查看物流</a></div>
			</div>`;
		return wrap;
	}

	renderPage(){
		var data = this.fetchData();
		var oFrag = document.createDocumentFragment();
		data.forEach((item)=>{
			oFrag.appendChild(template.render(item))
		})
		this.pageWrap.innerHTML='';
		this.pageWrap.appendChild(oFrag);
	}
}

export default Pages;