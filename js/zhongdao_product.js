//当浏览器窗口变化时触发，间隔一秒刷新页面
function refurbish(){ 
	window.location.reload(); 
} 
$(window).resize(function(){
    setTimeout("refurbish()",1000);
});
$(function(){
	//展示页面高度
    var height = Math.max(window.innerHeight , document.body.clientHeight , document.documentElement.clientHeight);
    var container = $("#container");
    container.css("height", height).css("background-image","url(image/bgimg.png)"); 
    $(".option").css("height", height)
	var content_li = $(".content").find("li")
	var content_li_length = content_li.length	
	for (var i = 0; i < content_li_length; i ++) {	
		content_li.on('click', function(){		
			var i = $(this).index()
			var num = -i * 100					
			$(this).css("background","#3B6DDE").css("color","#FFFFFF").siblings().css("background","#FFFFFF").css("color","#3B6DDE");
			$(".option").css("left", num + '%');
		})
	}	
	var option_li = $(".option").find("li")
    var option_li_height = Math.max(window.innerHeight , document.body.clientHeight , document.documentElement.clientHeight);
	option_li.css("height", option_li_height)
})

