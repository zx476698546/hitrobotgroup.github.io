//当浏览器窗口变化时触发，间隔一秒刷新页面
//function refurbish(){ 
//	window.location.reload(); 
//} 
//$(window).resize(function(){
//  setTimeout("refurbish()",1000);
//});
$(function (){
//  Initialize Swiper
    var swiper1 = new Swiper('.swiper1', {
        slidesPerView: 5,
        spaceBetween: 1,
        loop: true,
        speed: 1000,
        autoplay: {
       		delay: 2500,
        	disableOnInteraction : false,
      }
    });
	var swiper2 = new Swiper('.swiper2', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
	      init: function(){
	        swiperAnimateCache(this); //隐藏动画元素 
	        swiperAnimate(this); //初始化完成开始动画
	      }, 
	      slideChangeTransitionEnd: function(){ 
	        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
	      } 
	    }
    });
    var i = 1    
    $("#boxClick").on('click', function () {
    	if(i%2 == 1){
    		$(".swiper1").css("right", 0);
    		$("#boxClick").css("background-image", "url(image/right.png)");
    		$("#boxCover").css("opacity", "0").css("z-index", 0);
    		$(this).css("background-color", "#64aaff");
    	} else if(i%2 == 0){
    		$(".swiper1").css("right", "-80%");
    		$("#boxClick").css("background-image", "url(image/left.png)");
    		$("#boxCover").css("left", "20px").css("opacity", "1").css("z-index", "99");
    		$(this).css("background-color", "#468ef2");
    	};
    	i ++    	
    });
    $("#pdfClick").on('click', function () {
    	if(i%2 == 1){  
	    	$("#pdf").css("width", "100%");
	    	$(this).text(" ").css("width", "30px").css("background-image", "url(image/left.png)").css("background-size", "75%").css("right", 0).css("border", "1px #ccc solid").css("background-position", "center")
    	} else if(i%2 == 0){ 
	    	$("#pdf").css("width", "130px");
	    	$(this).text("查看PDF文档").css("width", "130px").css("background-image", "url(image/right.png)").css("background-size", "17.5%").css("border", "none").css("background-position", "right")
    	};
    	i ++ 
    })
    $("#wordClick").on('click', function () {
    	if(i%2 == 1){  
	    	$("#word").css("width", "100%");
	    	$(this).text(" ").css("width", "20px").css("background-image", "url(image/left.png)").css("background-size", "90%").css("right", 0).css("border", "1px #ccc solid").css("background-position", "center")
    	} else if(i%2 == 0){ 
	    	$("#word").css("width", "80px");
	    	$(this).text("查看文档").css("width", "80px").css("background-image", "url(image/right.png)").css("background-size", "17.5%").css("border", "none").css("background-position", "right")
    	};
    	i ++ 
    })
    //pdf
    $(".pdf1").on('mouseover', function () {
    	$("#pdfName").text("蓄电池托盘搬运车 T20AP04")
    })
    $(".pdf2").on('mouseover', function () {
    	$("#pdfName").text("站驾式电动托盘搬运叉车 T20SP")
    }) 
    $(".pdf3").on('mouseover', function () {
    	$("#pdfName").text("站驾式电动托盘堆垛叉车")
    }) 
    $(".pdf4").on('mouseover', function () {
    	$("#pdfName").text("自动导引车通用技术条件")
    }) 
    $(".pdf5").on('mouseover', function () {
    	$("#pdfName").text("自动导引车(AGV)设计通则")
    }) 
    $(".pdf6").on('mouseover', function () {
    	$("#pdfName").text("自动导引车(AGV) 术语")
    })    
    $("#pdf li").on('mouseout', function () {
    	$("#pdfName").text(" ")
    })  
    //word
    $(".word1").on('mouseover', function () {
    	$("#wordName").text("蓄电池托盘搬运车 T20AP04")
    })
    $(".word2").on('mouseover', function () {
    	$("#wordName").text("站驾式电动托盘搬运叉车 T20SP")
    }) 
    $(".word3").on('mouseover', function () {
    	$("#wordName").text("站驾式电动托盘堆垛叉车")
    }) 
    $(".word4").on('mouseover', function () {
    	$("#wordName").text("自动导引车通用技术条件")
    }) 
    $(".pword5").on('mouseover', function () {
    	$("#wordName").text("自动导引车(AGV)设计通则")
    }) 
    $(".word6").on('mouseover', function () {
    	$("#wordName").text("自动导引车(AGV) 术语")
    })    
    $("#word li").on('mouseout', function () {
    	$("#wordName").text(" ")
    }) 
});