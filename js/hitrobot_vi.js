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
})