//页面加载时触发函数
$(document).ready(function() {  
	//锚点链接平滑过渡
    $('a[href*=#]').click(function() {  
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {  
            var $target = $(this.hash);  
            if ($target.length) {  
                var targetOffset = $target.offset().top;  
                $('html,body').animate({  
                    scrollTop: targetOffset  
                },  
                750);  
                return false;  
            }  
        }  
    });
}); 
//当浏览器窗口变化时触发，间隔一秒刷新页面
function refurbish(){ 
		window.location.reload(); 
	} 
$(window).resize(function(){
    setTimeout("refurbish()",1000);
});
 $(function() {  
	        $("img.lazy").lazyload({effect: "fadeIn", threshold : 100});  
}); 

$(function(){
	//展示页面高度
    var height = Math.max(window.innerHeight , document.body.clientHeight , document.documentElement.clientHeight , 900);
    var content = $(".content");
    content.css("height", height); 
    //AGV 右侧边功能项点击查看之后字体颜色改变
	$(".anchor li").on('click', function(){
		if($(this).css("color") != "#3b6dde"){
			$(".anchor li").css("color", "#3b6dde").css("background", "#FFFFFF");
		}
		$(this).css("color", "#FFFFFF").css("background", "#3b6dde");
	}) 
	//AGV forklift 切换颜色改变
	$("#agv_forklift_switch ul li").on('click', function(){
		if($(this).css("color") != "#3b6dde"){
			$("#agv_forklift_switch ul li").css("color", "#3b6dde").css("background", "#FFFFFF");
		}
		$(this).css("color", "#FFFFFF").css("background", "#3b6dde");
	})
	//点击切换 
	$("#agv").on('click', function(){
		setTimeout(function () {
			if($("#forklift_container").css("display") != "none"){
				$("#forklift_container").css("display", "none");
				$("#agv_container").css("display", "block");
			}
		}, 300)
	})
	$("#forklift").on('click', function(){
		setTimeout(function(){			
			$("#forklift_container").css("display", "block");
			$("#agv_container").css("display", "none");
		}, 300)
	})
	var scrollTop = $(window).scrollTop();



})
	

