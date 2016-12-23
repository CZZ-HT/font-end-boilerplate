<?php

header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
//header('Content-Type:text/plain');

$goods = array(
	"id"=>"123",
	"url"=>"goods.html",
	"img"=>"http://youam.yunyiwd.com/user_res/upload/temp/201610/26/492755559509475429.jpg",
	"title"=>"【顺丰全国包邮&nbsp;净重2.3-2.7kg】国家地理标志产品《舌尖上的中国1》推荐&nbsp;湖北洪湖-蔡甸莲藕&nbsp;蔡甸基地现挖直发",
	"price"=>"69.9",
	"market_price"=>"79.8"
);

$list = array();

for ($x=0; $x<=10; $x++) {
	array_push($list, $goods);
} 


echo json_encode($list);