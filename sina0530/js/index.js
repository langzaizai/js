// JavaScript Document
window.onload = function (){
	//获取
	var oSelect = document.getElementById('selector');
	var oSubNav = document.getElementById('subNav');
	//动作
	oSelect.onmouseover = function(){
		oSubNav.style.display = 'block';
	}
	oSelect.onmouseout = function(){
		oSubNav.style.display = 'none';
	}
	
	
	//搜索框按钮
	//1、获取
	var oTitle = document.getElementById('title');
	var oSubSearch = document.getElementById('subSearch');
	
	//2、事件动作
	oTitle.onclick = function (){
		//oSubSearch.style.display = 'block';
		if(oSubSearch.style.display == 'block'){//一定注意是双等于号
			oSubSearch.style.display = 'none';
		}else{
			oSubSearch.style.display = 'block';
		}
	}
}
