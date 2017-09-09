//保存
function addCookie(key,value,day){
	var date=new Date();
	date.setDate(date.getDate()+day);
	//document.cookie(key+"="+value+";expires="+date.toGMTString());
	document.cookie=key+"="+escape(value)+";expires="+date.toGMTString();
}
	
//删除
function removeCookie(key){
	addCookie(key,"",-1);
}
//获取
function getCookie(key){
	var str=unescape(document.cookie);
	var arr=str.split("; ");
	var index=-1;
	for(i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			index=i;
			break;
		}
	}
	if(index==-1){
		return "";
	}else{
		return arr[index].substring(key.length+1);
	}
}