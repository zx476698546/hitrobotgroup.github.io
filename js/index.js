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
	    	$(this).text(" ").css("width", "30px").css("background-image", "url(image/left.png)").css("background-size", "75%").css("right", 0)
    	} else if(i%2 == 0){ 
	    	$("#pdf").css("width", "130px");
	    	$(this).text("查看PDF文件").css("width", "130px").css("background-image", "url(image/right.png)").css("background-size", "17.5%")	
    	};
    	i ++ 
    })
});