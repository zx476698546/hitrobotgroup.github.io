//当浏览器窗口变化时触发，间隔一秒刷新页面
//function refurbish(){ 
//	window.location.reload(); 
//} 
//$(window).resize(function(){
//  setTimeout("refurbish()",1000);
//});
$(function (){
//  Initialize Swiper
	var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
//      pagination: '.swiper-pagination',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
			
	var width = $(window).width()
	if(width >750){
		$(".AGVDetails").on('mouseover', function () {
			$("#AGVProduct").css("left", "5%")
		});
    	$(".AGVDetails").on('mouseout', function () {
			$("#AGVProduct").css("left", "-20%")
		})
	    $(".ForkliftDetails").on('mouseover', function () {
				$("#ForkliftProduct").css("right", "5%")
			});
	    	$(".ForkliftDetails").on('mouseout', function () {
				$("#ForkliftProduct").css("right", "-15%")
		})  
		$(".shandong").on('mouseover', function () {
				$("#YKProduct").css("left", "5%")
			});
	    	$(".shandong").on('mouseout', function () {
				$("#YKProduct").css("left", "-15%")
		})       	
	} else{		
		$("#AGVProduct").css("top", "70%").css("left", "25%")
		$("#ForkliftProduct").css("top", "65%").css("left", "25%")
		$("#YKProduct").css("top", "65%").css("left", "25%")
	}
})