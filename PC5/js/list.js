window.onload=function(){
	// 菜单滑过开始
	var navAll = document.getElementById("shoppingMall");
	var level01 = document.getElementById("menu_leftId");//一级菜单
	var level02 = document.getElementById("ErJiCaiDan");//二级菜单
	var lis = level01.children;
	var divs = level02.children;
	level01.style.display = "none";
	level01.onmouseover = function(){
		level01.style.display = "block";
		level02.style.display = "block";

	}
	
	level01.onmouseleave = function(){
		level01.style.display = "none";
		level02.style.display = "none";
	}
	level02.onmouseleave = function(){
		level01.style.display = "none";
		level02.style.display = "none";
	
	}
	level02.onmouseover = function(){
		level02.style.display = "block";
		level01.style.display = "block";
	}
	
	navAll.onmouseover = function(){
		level01.style.display = "block";
	}
	navAll.onmouseleave = function(){
		level01.style.display = "none";
	}
	for(let i=0; i<lis.length; i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			level02.style.display = "block";
			for(var j=0; j<divs.length; j++){
				divs[j].style.display = "none";
			}
			divs[this.index].style.display = "block";
		}

	}

	// 菜单滑过结束
	
//	// 大家都在买开始
//  var lis = document.getElementById("tltId").getElementsByTagName("li");
//	var left02Left = document.getElementsByClassName("left02");
//	
//	for(var i=0;i<lis.length;i++){
//		lis[i].num = i;
//		lis[i].onclick = function(){
//			//去掉其他lis的样式
//			for(var j=0; j<lis.length; j++){
//				lis[j].className = "";
//			}
//			this.className = "active";
//			//隐藏其他DIV
//			for(var j=0; j<left02Left.length; j++){
//				left02Left[j].style.display = "none";
//			}
//			// console.log(this.num);
//			left02Left[this.num].style.display = "block";
//		}
//	}
//	//attachEvent
//	document.addEventListener("keypress",function(event){
//
//		if((event.keyCode || event.which) == 9) {
//			for(var i=0; i<lis.length; i++){
//				if(lis[i].className == "active"){
//					if(i < lis.length-1) {
//						lis[i+1].onclick();
//					} else if(i == lis.length-1){
//						lis[0].onclick();
//					}
//					break;
//				}
//			}
//		}
//	}, false);
//	// 大家都在买结束
}
// 顶部栏开始
window.onscroll = function(){
	var floatSearchS=document.getElementById("floatSearch");
	var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(_scroll >= 109){
		floatSearchS.style.position = "fixed";
		floatSearchS.style.display="block";
	} else {
		floatSearchS.style.position = "absolute";
		floatSearchS.style.display="none";
	}
}
// 顶部栏结束
	

