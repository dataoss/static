/**
 * gotop
 */
Back2top.init();

 /**
 * 图片懒加载
 */   
var showeffect = ""; 
{showeffect = "fadeIn"} 
jQuery(document).ready(function($) { 
$(".loadimg img").lazyload({ 
placeholder: "https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rF7JnibaM4E5crK4fvobI5879Knlgqsxz3A/0.gif", 
effect: showeffect, 
failurelimit: 10 
}) 
});

 /**
 * 搜索和菜单弹出缩进
 */
function change() {
    var divDisp = document.getElementById("search").style.display;
    if (divDisp == "block") {
        document.getElementById("search").style.display = "none";
    } else {
        document.getElementById("search").style.display = "block";
        document.getElementById("menu").style.display = "none";
    }
}
 function change2() {
    var divDisp2 = document.getElementById("menu").style.display;
    if (divDisp2 == "block") {
        document.getElementById("menu").style.display = "none";
    } else {
        document.getElementById("menu").style.display = "block";
        document.getElementById("search").style.display = "none";
    }
}



var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?22a224b9b1e037fb6164f9bf856548d0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//屏蔽右键菜单
document.oncontextmenu = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	}catch (e){
		return false; 
	} 
}


//屏蔽复制
document.oncopy = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	}catch (e){
		return false;
	}
}

//屏蔽剪切
document.oncut = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if(!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	}catch (e){
		return false;
	}
}

//屏蔽选中
document.onselectstart = function (event){
	if(window.event){
		event = window.event;
	}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}
