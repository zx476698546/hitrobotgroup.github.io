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
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 0,
        loop: false,
        speed: 1000,
        
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

    // 鼠标悬浮产品,改变链接
    $(".productClass li").mouseover(function(){
      // 对应下标
      showProduct($(this).index());
      $("#linkTaobao").attr("href","http://www.taobao.com")
    })

    //微信浏览器下自动播放
    document.addEventListener('WeixinJSBridgeReady',  function() {video.play();}, false);
});

//选中产品
var imagesArr = ["image/AGV.png","image/forklift.png","image/QR-code-robot.png"]
// 控制产品显示对应
function showProduct(param){
  $(".normalBg").hide();
  $(".productBg").show();
  switch (param){
    case 0:
    $("#productImg").attr("src",imagesArr[param])
    break;

    case 1:
    $("#productImg").attr("src",imagesArr[param])
    break;

    default:
    $(".normalBg").show();
    $(".productBg").hide();
  }
}