$(document).ready(function(){

// Scroll to Top Button

var offset = 250;
var duration = 300;

$(window).scroll(function() {
if ($(this).scrollTop() > offset) {
$(".back-to-top").fadeIn(duration);
} else {
$(".back-to-top").fadeOut(duration);
}
});
 
$(".back-to-top").click(function() {
	event.preventDefault();
	$("html, body").animate({scrollTop: 0}, duration);
});

// Smooth anchor scroll

$(".a-links").on("click",function(){
	var target = this.hash;
	var target = $(target);
	$("html, body").stop().animate({
		"scrollTop": target.offset().top
	}, 900, "swing");
});

// Filter button

$(".filter-buttons").click(function(){
    $(".filter-buttons").removeClass("filter-buttons-active");
    $(this).addClass("filter-buttons-active");
    //hide all works by default 
	$(".gallery_product").addClass("display-none");
	//show slected works based on the menu clicked
	$(".gallery_product[data-filter='"+$(this).attr("data-filter")+"']").removeClass("display-none");
	if (this.id == "all-filters") {
		$(".gallery_product").removeClass("display-none");
	}
});

// Carousel

	$(".about-picture").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

// 

// Contact form

$(".input-text").on("keyup" ,function() {
	var input_field = $(this).val();
	if (input_field != "") {
		$(this).prev().addClass("label-show");
	} else {
		$(this).prev().removeClass("label-show");
	}
});



// end of file

});