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
    var width = $(window).width()
    if(width<=414){
    	$(".button").text('查看基本参数')
    	$(".button1").on('click', function () {
	    	$("#hide1").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide1").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button2").on('click', function () {
	    	$("#hide2").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide2").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button3").on('click', function () {
	    	$("#hide3").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide3").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button4").on('click', function () {
	    	$("#hide4").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide4").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button5").on('click', function () {
	    	$("#hide5").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide5").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button6").on('click', function () {
	    	$("#hide6").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide6").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button7").on('click', function () {
	    	$("#hide7").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide7").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button8").on('click', function () {
	    	$("#hide8").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide8").on('click', function (){
    		$(this).css("display", "none")
    	})
    	$(".button9").on('click', function () {
	    	$("#hide9").css("display", "block")
	    	$(".parameter").css("display", "block")
	    })
    	$("#hide9").on('click', function (){
    		$(this).css("display", "none")
    	})
    }
    
})