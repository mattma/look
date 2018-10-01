$(document).ready(function(){

	$.preloadCssImages({ imgDir: 'images' });

	$(".fix_nav, .nav").localScroll({
		duration: 600,
		axis: 'y'
	});
	$("#design .submenu, #design .panel1_left, #design .panel1_right").localScroll({
		target: '#design_container',
		duration: 600,
		axis: 'x'
	});
	$("#marketing .submenu, #marketing .panel1_left").localScroll({
		target: '#marketing_container',
		duration: 600,
		axis: 'x'
	});
	$("#web .submenu, #web .panel1_left, #web .panel1_right").localScroll({
		target: '#web_container',
		duration: 600,
		axis: 'x'
	});

	$('#design_scroll li, #marketing_scroll li, #web_scroll li').click(function(){
   		$(this).closest('ul').find('.current').removeClass('current');
		$(this).children('a').addClass('current');
	});

	$('#contact').click(function(){
   		$('#contact_form').slideDown(500);
	});

	$('#contact_form #close_btn').click(function(){
   		$('#contact_form').slideUp(500);
	});

	$('.fix_nav > li').hover(
        function () {
                        $(this).find('a').stop().animate({'marginRight':'0px'},200);
        },
        function () {
                        $(this).find('a').stop().animate({'marginRight':'-80px'},200);
        }
    );

	slide("#design_scroll", 35, 15, 200, .8);
	slide("#marketing_scroll", 35, 15, 200, .8);
	slide("#web_scroll", 35, 15, 200, .8);

    $('img.captify').captify({
		speedOver: 'fast',
		// speed of the mouseout effect
		speedOut: 'normal',
		// how long to delay the hiding of the caption after mouseout (ms)
		hideDelay: 500,
		// 'fade', 'slide', 'always-on'
		animation: 'slide',
		// text/html to be placed at the beginning of every caption
		prefix: '',
		// opacity of the caption on mouse over
		opacity: '0.7',
		// the name of the CSS class to apply to the caption box
		className: 'caption-bottom',
		// position of the caption (top or bottom)
		position: 'bottom',
		// caption span % of the image
		spanWidth: '100%'
	});


});




function slide(navigation_id, pad_out, pad_in, time, multiplier)
{
	// creates the target paths
	var list_elements = navigation_id + " li.sliding-element";
	var link_elements = list_elements + " a";

	// initiates the timer used for the sliding animation
	var timer = 0;

	// creates the slide animation for all list elements
	$(list_elements).each(function(i)
	{
		// margin left = - ([width of element] + [total vertical padding of element])
		$(this).css("margin-left","-180px");
		// updates timer
		timer = (timer*multiplier + time);
		$(this).animate({ marginLeft: "0" }, timer);
		$(this).animate({ marginLeft: "15px" }, timer);
		$(this).animate({ marginLeft: "0" }, timer);
	});

	// creates the hover-slide effect for all link elements
	$(link_elements).each(function(i)
	{
		$(this).hover(
		function()
		{
			$(this).animate({ paddingLeft: pad_out }, time);
		},
		function()
		{
			$(this).animate({ paddingLeft: pad_in }, time);
		});
	});
}