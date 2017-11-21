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
    	$("#structure").css("right", "50%")
    })
    $(".move").on('mouseout', function () {
    	$("#structure").css("right", "20%")
    })
    var width = $(window).width();
    if (width <= 414) {    	
	    $(".move").on('mouseover', function () {
	    	$("#structure").css("right", "30%")
	    })
	    $(".move").on('mouseout', function () {
	    	$("#structure").css("right", "5%")
	    })
    }
})