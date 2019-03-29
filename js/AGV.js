$(function(){	
	//Initialize Swiper
	var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
    	lazy: true,
	//pagination: '.swiper-pagination',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var screenHeight = $(window).height();
    $(".clickagv1").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-1.png)");
//  	$("#title_content").text('创建新地图');
    })
    $(".clickagv2").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-2.png)");
//  	$("#title_content").text('扫描地图');
    })
    $(".clickagv3").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-3.png)");
//  	$("#title_content").text('编辑地图');
    })
    $(".clickagv4").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-4.png)");
// 		$("#title_content").text('添加站点');
    })
    $(".clickagv5").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-5.png)");
//  	$("#title_content").text('添加站点详情');
    })
    $(".clickagv6").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-6.png)");
//  	$("#title_content").text('添加轨迹详情');
    })
    $(".clickagv7").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-7.png)");
//  	$("#title_content").text('网络设置');
    })
    $(".clickagv8").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-8.png)");
//  	$("#title_content").text('地图详情');
    })
    $(".clickagv9").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-9.png)");
//  	$("#title_content").text('位置估计');
    })
    $(".clickagv10").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-10.png)");
//  	$("#title_content").text('系统诊断');
    })
    $(".clickagv11").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-11.png)");
//  	$("#title_content").text('更新');
    })
    $(".clickagv12").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-12.png)");
//  	$("#title_content").text('代码调试');
    })
    $(".clickagv13").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-13.png)");
//  	$("#title_content").text('登录');
    })
     $(".clickagv14").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-14.png)");
//  	$("#title_content").text('登录');
    })       
    $(".clickagv15").on('click', function () {
    	$("#display_pictures").css("display", "block").css("height", screenHeight).css("background-image", "url(image/AGV-15.png)");
//  	$("#title_content").text('帮助详情');
    })
	$("#enlarge").on('click', function () {
		$(this).css("background-size", "120%")
	})  
	$("#display_pictures").on('click', function () {
    	$($(this)).css("display", "none");
    })
})