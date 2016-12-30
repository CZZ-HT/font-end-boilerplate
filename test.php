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

if(isset($_POST['id'])){
	echo json_encode($list);
}

if(isset($_FILES["file"])){
	getName();
}

function getName (){

if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 2000000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    //echo "Type: " . $_FILES["file"]["type"] . "<br />";
    //echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    //echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

    if (file_exists("upload/" . $_FILES["file"]["name"]))
      {
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $_FILES["file"]["name"]);
      echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
      }
    }
  }
else
  {
  echo "Invalid file";
  }
 
}