// Fade out name and logo in image
$(window).scroll(function(){
	$(".child-name").css("opacity", 1 - $(window).scrollTop() / 250);
});
