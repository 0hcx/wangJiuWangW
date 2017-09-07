$(function(){
	$("#userName").blur(function(){
		$.get("../php/checkUser.php",{"userName":this.value},function(str){
			if(str=="1"){
				$("#userMsg").html("该用户已存在，请重新选择");
			}else{
				$("#userMsg").html("√");
			}
//			alert(str);
		});
	});
});