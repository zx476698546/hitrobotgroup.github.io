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
    $(".js").on('mouseover', function () {
    	$("#structure").css("right", "50%")
    })
    $(".js").on('mouseout', function () {
    	$("#structure").css("right", "20%")
    })
    var width = $(window).width();
    if (width <= 414) {    	
	    $(".js").on('mouseover', function () {
	    	$("#structure").css("right", "30%")
	    })
	    $(".js").on('mouseout', function () {
	    	$("#structure").css("right", "5%")
	    })
    }
})