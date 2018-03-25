$(document).ready(function(){

// Fade out name and logo in image
$(window).scroll(function(){
	$(".child-name").css("opacity", 1 - $(window).scrollTop() / 250);
});

var offset = 100;
var duration = 700;

$(window).scroll(function() {
if ($(this).scrollTop() > offset) {
$(".about-header").fadeIn(duration);
} else {
$(".about-header").fadeOut(duration);
}
});

});