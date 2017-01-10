
module.exports = {
	render:function(res){
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
}