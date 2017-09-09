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
}


$("#shoppingMall").mouseenter(function(){
	$(".menu_left").css({"display":"block"});
});
//菜单滑过结束