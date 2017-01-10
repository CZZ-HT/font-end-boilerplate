"use strict";
 
import Dialog from '../common/dialog'
var files = {};

function bootstrap(){
	 var input_user = document.getElementById('upload-user-image');
	 var input_back = document.getElementById('upload-back-image');
	 input_user.addEventListener('change',function(e){
	 	uploadFile('user',e.target.value);
	 });
	 input_back.addEventListener('change',function(e){
	 	uploadFile('back',e.target.value);
	 });
	 var submit = document.getElementById('submit');
	 submit.addEventListener('click',function(){
	 	handleSubmit(submit);
	 });
}

function uploadFile(type,src){
	console.log(src);
	files[type]=src;
	
}

function handleSubmit(submit){
	var name = document.getElementById('shop-name').value;
	var uid = document.getElementById('user-id').value;
	var desc = document.getElementById('desc').value;
	var phone = document.getElementById('phone').value;
	var loadicon = document.getElementById('spinner');
	var userimage=files.user;
	var backimg = files.back;
	var pass = checkValide([name,uid,desc,phone,userimage,backimg]);
 
	if(!pass){
		new Dialog('表单填写不完整',{
			onlyConfirm:true
		})
		return;
	}
	submit.style.backgroundColor='gray';
	loadicon.style.display='block';
}

function checkValide(arr){
	var pass = true;
	for(var i =0;i<arr.length;i++){
		console.log(arr[i])
		if(!arr[i]){
			pass = false;
			break;
		}
	}
	return pass;
}
 
if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
