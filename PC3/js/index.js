window.onload=function(){
	// 菜单滑过开始
	var navAll = document.getElementById("shoppingMall");
	var level01 = document.getElementById("menu_leftId");//一级菜单
	var level02 = document.getElementById("ErJiCaiDan");//二级菜单
	var lis = level01.children;
	var divs = level02.children;
	level01.onmouseover = function(){
		level01.style.display = "block";
		level02.style.display = "block";

	}
	
	level01.onmouseleave = function(){
		level02.style.display = "none";
	}
	level02.onmouseleave = function(){
		level02.style.display = "none";
	
	}
	level02.onmouseover = function(){
		level02.style.display = "block";
		level01.style.display = "block";
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
	// 乐享盛宴开始
    var lis = document.getElementById("menu_label J_menuTitleId").getElementsByTagName("li");
	var menu_counts = document.getElementsByClassName("menu_count");
	
	for(var i=0;i<lis.length;i++){
		lis[i].num = i;
		lis[i].onclick = function(){
			//去掉其他lis的样式
			for(var j=0; j<lis.length; j++){
				lis[j].className = "";
			}
			this.className = "active";
			//隐藏其他DIV
			for(var j=0; j<menu_counts.length; j++){
				menu_counts[j].style.display = "none";
			}
			// console.log(this.num);
			menu_counts[this.num].style.display = "block";
		}
	}
	//attachEvent
	document.addEventListener("keypress",function(event){

		if((event.keyCode || event.which) == 9) {
			for(var i=0; i<lis.length; i++){
				if(lis[i].className == "active"){
					if(i < lis.length-1) {
						lis[i+1].onclick();
					} else if(i == lis.length-1){
						lis[0].onclick();
					}
					break;
				}
			}
		}
	}, false);
	// 乐享盛宴结束


	// 顶部栏开始
	window.onscroll = function(){
		var floatSearchS=document.getElementById("floatSearch");
	 	var row_btnIds=document.getElementById("row_btnId");

		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(_scroll >= 109){
			floatSearchS.style.position = "fixed";
			floatSearchS.style.display="block";
		} else {
			floatSearchS.style.position = "absolute";
			floatSearchS.style.display="none";
		}
		

		if(_scroll >= 2000){
	 		row_btnIds.style.display="block";
	 	} else {
	 		row_btnIds.style.display="none";
	 	}
	}
	// 顶部栏结束
};

// 右侧边栏回到顶部开始
var num = 0;
	window.onscroll = function(){
		var up = document.getElementById("J_backtop");
		//当前页面滚动的距离
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
	}
	function goTop(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
// 右侧边栏回到顶部结束

$("#s_countId1 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId1 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId1 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend1ul > li").eq(index).show().siblings().hide(); 
});

$("#s_countId2 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId2 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId2 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend2ul > li").eq(index).show().siblings().hide(); 
});

$("#s_countId3 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId3 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId3 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend3ul > li").eq(index).show().siblings().hide(); 
});

$("#s_countId4 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId4 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId4 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend4ul > li").eq(index).show().siblings().hide(); 
});

$("#s_countId5 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId5 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId5 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend5ul > li").eq(index).show().siblings().hide(); 
});

$("#s_countId6 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId6 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId6 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend6ul > li").eq(index).show().siblings().hide(); 
});

//左侧边栏开始
var index = null;
$(".row").mouseenter(function(){
	$(this).find("p").css({"height":"40px","width":"30px","background":"#a21459", 
		"vertical-align":"middle","color":"#fff", "display":"block"});
});
$(".row").mouseleave(function(){
	$(".row").find("p").css("display","none");
	$(".row").eq(index).find("p").css({"height":"40px","background":"#a21459", 
		"vertical-align":"middle", "color":"#fff", "display":"block"});
});
$(".row").click(function(){
	$(".row").css("background-image","url(../img/row.png)")
	$(".row").find("p").css("display","none");
	$(this).find("p").css({"height":"40px","background":"#a21459", "vertical-align":"middle", 
		"color":"#fff", "display":"block"});
	index = $(".row").index(this);
});
$("#floorClose").click(function () {
	$("#row_btnId").css("display","none");
});
//左侧边栏结束












