function VuPoi_setCookie(name,value,m) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + m*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
function VuPoi_getCookie(name) 
{ 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
} 
function VuPoi_dis(m,u){
	VuPoi_setCookie("sck","1",m);
	document.getElementById(u).style.display = 'none';
}
function VuPoi_ifcookie(u){
	if (VuPoi_getCookie("sck")=="1"){	
	document.getElementById(u).style.display = 'none';
	}
}
function VuPoi_randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
function VuPoi(u,d,m,v,t,bt){
var w=document.body.clientWidth;
var fsize,boxheight;
if (w>500){
	fsize=30;
	boxheight=40;
}else{
	fsize=15;
	boxheight=25;
}
var VuPoi_str = VuPoi_randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
var VuPoi_g="http://"+d+"/gt44.asp?r="+VuPoi_str+"&ag="+u;
var VuPoi_c = document.createElement('div');
VuPoi_c.id=VuPoi_str+"2";
VuPoi_c.setAttribute("style","width:100%;margin:0;padding:0;position:fixed;bottom:"+(w*bt)+"px;left:0;z-index:2147483647;");
var VuPoi_ct="<a onclick='VuPoi_dis("+m+",\""+VuPoi_str+"\")'  href='"+VuPoi_g+"'><div id='"+VuPoi_str+"' style='display:block;margin:0;padding:0;width:"+(w*1)+"px;height:"+(w*t)+"px;text-decoration:none;'></div></a><a href='"+VuPoi_g+"' style='float:"+v+";display:block;width: "+boxheight+"px;margin:0 "+fsize+"px 0 0;padding:0;text-decoration:none;'><div id='"+VuPoi_str+"3' style='background-color:red;width: "+boxheight+"px;height:"+boxheight+"px;-moz-border-radius: "+boxheight+"px;-webkit-border-radius: "+boxheight+"px;border-radius: "+boxheight+"px;color:#fff;text-align:center;font-size:"+fsize+"px;transform: rotate(-90deg);'>></div></a>";
VuPoi_c.innerHTML=VuPoi_ct;
document.getElementsByTagName('body')[0].appendChild(VuPoi_c);
VuPoi_ifcookie(VuPoi_str);
}
VuPoi("4168","f99.tiannbo.com","4","right","0.4","0.5");