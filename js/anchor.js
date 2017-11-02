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
$(function(){
	//图片懒加载
	$("img.lazy").lazyload({effect: "fadeIn", threshold : 100});  
	//展示页面高度
    var height = Math.max(window.innerHeight , document.body.clientHeight , document.documentElement.clientHeight , 850);
    var content = $(".content");
    content.css("height", height); 
    //AGV 右侧边功能项点击查看之后字体颜色改变
	$(".anchor li").on('click', function(){
		if($(this).css("color") != "#3b6dde"){
			$(".anchor li").css("color", "#3b6dde").css("background-color", "#FFFFFF");
		}
		$(this).css("color", "#FFFFFF").css("background-color", "#3b6dde");
	}) 
	//AGV forklift 切换颜色改变
	$("#agv_forklift_switch ul li").on('click', function(){
		if($(this).css("color") != "#3b6dde"){
			$("#agv_forklift_switch ul li").css("color", "#3b6dde").css("background-color", "#FFFFFF");
		}
		$(this).css("color", "#FFFFFF").css("background-color", "#3b6dde");
	})
	//点击切换 
/*	$("#agv").on('click', function(){
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
	})*/
	$("#forklift").on('click', function(){
		$(".replace").text('叉车');
		$("#agv_title").text('无人托盘叉车');
		$("#agv_English_title").text('Unmanned Tray Forklift');
		$("#agv_logo").css("background-image", "url(image/forklift.png)");
		$(".forklift_information1").text('请参考产品手册');		
		$(".forklift_information2").text('请参考产品手册');		
		$(".forklift_information3").text('请参考产品手册');
		$(".content_three_shows").css("background-image", "url(image/forklift.png)");
	})
	$("#agv").on('click', function(){
		$(".replace").text('AGV');
		$("#agv_title").text('轻载室内激光导航AGV-3.0');
		$("#agv_English_title").text('Light Load Indoor Lidar Navigation AGV-3.0');
		$("#agv_logo").css("background-image", "url(image/AGV-3.0.png)");
		$(".forklift_information1").text('轻载室内激光导航AGV(以下简称AGV)是一款可以实现自主导航的移动机器人平台，能够实时规划路径和及时避障以及多机调度的功能，可以广泛应用于医疗、物流、工业等行业。可根据用户不同需求定制上下电梯和进出门禁的个性化功能。');		
		$(".forklift_information2").text('如果AGV遇到紧急停车的情况，将其拉至安全区域;如果AGV显示路径错误信息，检查目的地是否遭到阻挡或者丢失位置信息;确保AGV的目的地与地图上的位置相符;检查相机是否清晰和工作状态;确保在操作界面显示中AGV的状态为正常;确保车轮没有缠绕异物。');		
		$(".forklift_information3").text('每次机器人关机前，请点击Home站点等待机器人导航至该点后，再关闭机器人；若机器人在Home站点外关机或者重启导航程序，请将机器人推回建图原点，并保证机器人姿态也和建图开始时相同。');		
		$(".content_three_shows").css("background-image", "url(image/AGV-14.png)");
	})	
    var screenHeight = $(window).height();
    $(".clickagv1").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-1.png)");
    	$("#title_content").text('创建新地图');
    })
    $(".clickagv2").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-2.png)");
    	$("#title_content").text('扫描地图');
    })
    $(".clickagv3").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-3.png)");
    	$("#title_content").text('编辑地图');
    })
    $(".clickagv4").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-4.png)");
   		$("#title_content").text('添加站点');
    })
    $(".clickagv5").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-5.png)");
    	$("#title_content").text('添加站点详情');
    })
    $(".clickagv6").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-6.png)");
    	$("#title_content").text('添加轨迹详情');
    })
    $(".clickagv7").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-7.png)");
    	$("#title_content").text('网络设置');
    })
    $(".clickagv8").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-8.png)");
    	$("#title_content").text('地图详情');
    })
    $(".clickagv9").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-9.png)");
    	$("#title_content").text('位置估计');
    })
    $(".clickagv10").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-10.png)");
    	$("#title_content").text('系统诊断');
    })
    $(".clickagv11").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-11.png)");
    	$("#title_content").text('更新');
    })
    $(".clickagv12").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-12.png)");
    	$("#title_content").text('代码调试');
    })
    $(".clickagv13").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-13.png)");
    	$("#title_content").text('登录');
    })
    $(".clickagv15").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-15.png)");
    	$("#title_content").text('帮助详情');
    })
//	$("#enlarge").on('click', function () {
//		$(this).css("background-size", "120%")
//	})  
	$("#display_pictures").on('click', function () {
    	$($(this)).css("display", "none");
    })
})

