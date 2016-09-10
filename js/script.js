$(function(){ 

	$("#returnTop").click(function () {
	        var speed = 500;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
	 });	


});