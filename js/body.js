$(function(){ 		
        var a=$(".article-body").outerHeight(); 
        var arr =document.location.pathname.split("/");
        var arrLen =arr.length;
          var styleEle='<style type="text/css">'+
        '.article-body{position:relative;height:1000px;overflow:hidden;}'+
        '.teles{position:absolute;left:0; bottom:0;display:block; width:100%; height: 84px;color:#ff9c00; text-align: center;  font-size:14px; background: linear-gradient(to bottom , rgba(255,255,255,0) , #fff 60%);}'+
        '.teles i{display: inline-block; line-height:28px; font-size:18px; background-size:18px auto; padding-top:32px;padding-bottom:20px; }'+
        '.teles i:after {content:"";position:absolute;bottom:4px;left: 50%;width:33px;height: 16px;background-repeat: no-repeat; -webkit-background-size: 100% 100%;background-size: 100% 100%;background-image:url(https://cdn.jsdelivr.net/gh/dataoss/static/images/arrow.png);-webkit-animation: arrow 400ms ease-out alternate infinite;animation: arrow 400ms ease-out alternate infinite;margin-left: -6px;}'+	   
        '@-webkit-keyframes arrow{from{-webkit-transform:translate3d(-webkit-calc(-50% + 6px),5px,0);transform:translate3d(calc(-50% + 6px),5px,0)}to{-webkit-transform:translate3d(-webkit-calc(-50% + 6px),0,0);transform:translate3d(calc(-50% + 6px),0,0)}}'+
        '@keyframes arrow{from{-webkit-transform:translate3d(-webkit-calc(-50% + 6px),5px,0);transform:translate3d(calc(-50% + 6px),5px,0)}to{-webkit-transform:translate3d(-webkit-calc(-50% + 6px),0,0);transform:translate3d(calc(-50% + 6px),0,0)}}'+
        '</style>';
        $("body").prepend(styleEle);
        var b=$(".article-body").outerHeight();  
        var sheight=100-Math.ceil(b/a*100);	
        if(sheight>0 && arr[arrLen-1].indexOf("_") < 0 ){
            $(".article-body").append('<div class="teles"><i>展开剩余的'+ sheight+"%"+'</i></div>');
            $(".teles").on("click",function(){
                 $(".article-body").animate({height:a},function(){$(".article-body").height('auto')});
                 $(this).hide();
                 return false;
            })
            
        }else{	
        
            $(".article-body").css("height",'auto');		
        
        }			
    })