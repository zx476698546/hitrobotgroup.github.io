//当浏览器窗口变化时触发，间隔一秒刷新页面
function refurbish(){ 
	window.location.reload(); 
} 
$(window).resize(function(){
    setTimeout("refurbish()",1000);
});
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
    $(".move").on('mouseover', function () {
    	$("#structure").css("right", "60%")
    })
    $(".move").on('mouseout', function () {
    	$("#structure").css("right", "20%")
    })
    var width = $(window).width();
    if (width <= 414) {    	
	    $(".move").on('mouseover', function () {
	    	$("#structure").css("right", "35%")
	    })
	    $(".move").on('mouseout', function () {
	    	$("#structure").css("right", "5%")
	    })
    }
})