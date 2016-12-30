
var list1 = [
	{
		id:'NO20161110124934',
		img:'http://youam.yunyiwd.com/user_res/upload/temp/201611/02/7655136872970692060_thumbnail.jpg',
		status:'待支付',
		title:'【限量100组&nbsp;买一送一】杨记老豆秘制豆辣酱原味买210g送90g&nbsp;味道醇厚&nbsp;席卷味蕾&nbsp;口感鲜香&nbsp;美味开胃&nbsp;包邮',
		price:'13.9',
		num:1,
		totalPrice:'113.99'
	},
	{
		id:'NO20161110124934',
		img:'http://youam.yunyiwd.com/user_res/upload/temp/201611/02/7655136872970692060_thumbnail.jpg',
		status:'待支付',
		title:'杨记老豆秘制豆辣酱原味买210g送90g&nbsp;味道醇厚&nbsp;席卷味蕾&nbsp;口感鲜香&nbsp;美味开胃&nbsp;包邮',
		price:'213.9',
		num:1,
		totalPrice:'213.9'
	}
];

var list2=[
	{
		id:'NO20161110124934',
		img:'http://youam.yunyiwd.com/user_res/upload/temp/201611/02/7655136872970692060_thumbnail.jpg',
		status:'已收货',
		title:'【限量100组&nbsp;买一送一】杨记老豆秘制豆辣酱原味买210g送90g&nbsp;味道醇厚&nbsp;席卷味蕾&nbsp;口感鲜香&nbsp;美味开胃&nbsp;包邮',
		price:'13.9',
		num:1,
		totalPrice:'13.9'
	},
	{
		id:'NO20161110124934',
		img:'http://youam.yunyiwd.com/user_res/upload/temp/201611/02/7655136872970692060_thumbnail.jpg',
		status:'已收货',
		title:'【限量100组&nbsp;买一送一】杨记老豆秘制豆辣酱原味买210g送90g&nbsp;味道醇厚&nbsp;席卷味蕾&nbsp;口感鲜香&nbsp;美味开胃&nbsp;包邮',
		price:'13.9',
		num:1,
		totalPrice:'13.9'
	}

]

var list3 = [
	{
		id:'NO20161110124934',
		img:'http://youam.yunyiwd.com/user_res/upload/temp/201611/02/7655136872970692060_thumbnail.jpg',
		status:'已完成',
		title:'【限量100组&nbsp;买一送一】杨记老豆秘制豆辣酱原味买210g送90g&nbsp;味道醇厚&nbsp;席卷味蕾&nbsp;口感鲜香&nbsp;美味开胃&nbsp;包邮',
		price:'13.9',
		num:1,
		totalPrice:'13.9'
	}

];

var all = [].concat(list1,list2,list3);

module.exports = {
	all:all,
	needpay:list1,
	recived:list2,
	compleat:list3
}