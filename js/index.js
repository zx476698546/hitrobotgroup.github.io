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
       autoplay: {
        delay: 2000,
        disableOnInteraction : false,
      }
    });
	var swiper2 = new Swiper('.swiper2', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
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
    		$(".swiper1").css("right", 0)   
    		$("#boxClick").css("background-image", "url(image/right.png)")
    		$("#boxCover").css("opacity", "0")
    	} else if(i%2 ==0){
    		$(".swiper1").css("right", "-80%")
    		$("#boxCover").css("left", "30px")    	
    		$("#boxCover").css("opacity", "1")    		
    	}
    	i ++    	
    })
})