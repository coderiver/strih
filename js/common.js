head.ready(function() {

	var nav = $('.js-nav'),
		nav_btn = $('.js-nav_btn');


	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });


	nav_btn.on('click', function() {
		if (nav_btn.hasClass('is-active')) {
			nav.removeClass('is-active');
			nav_btn.removeClass('is-active');
		}
		else {
			nav.addClass('is-active');
			nav_btn.addClass('is-active');
		};
		return false;
	});

	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});
	//checkbox hover
	$('.checkbox').mouseenter(function() {
		$(this).parent().find('.form__text').addClass('is-active');
	});
	$('.form__checkbox').mouseleave(function() {
		$(this).find('.form__text').removeClass('is-active');
	});
	//accordion
	$(".js-accordion-title").on("click", function(){
		if ($(this).parents(".js-accordion").hasClass("is-active")) {
			$(this).parents(".js-accordion").removeClass("is-active").find(".js-accordion-body").slideUp();
		}
		else {
			$(".js-accordion").removeClass("is-active");
			$(".js-accordion-body").slideUp();
			$(this).parents(".js-accordion").toggleClass("is-active").find(".js-accordion-body").slideDown()
		};
		return false;
	});
	//popup
	$('.js-popup-btn').on('click', function() {
		$('.js-popup').addClass('is-active');
		$('.overlay').addClass('is-active');
		$('body').addClass('is-fixed');
		$('.js-popup-btn').addClass('is-active');
		return false;
	});
	$('.js-popup-close').on('click', function() {
		$('.js-popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		$('body').removeClass('is-fixed');
		$('.js-popup-btn').removeClass('is-active');
		return false;
	});
	$('.overlay').on('click', function() {
		$('.js-popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		$('body').removeClass('is-fixed');
		$('.js-popup-btn').removeClass('is-active');
		return false;
	});
	//nav fix
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 47) {
	        $(".topper").addClass("is-fixed");
	    } else {
	        $(".topper").removeClass("is-fixed");
	    }
	});
	if ($(document).scrollTop() > 47) {
        $(".topper").addClass("is-fixed");	
	}
	else {
        $(".topper").removeClass("is-fixed");
	};
	//nav hover
	$('.nav__service').mouseenter(function() {
		$('.service').addClass('is-open');
		$('.header__feedback').addClass('is-close');
	});
	$('.submenu').mouseleave(function() {
		$('.submenu').removeClass('is-open');
		$('.header__feedback').removeClass('is-close');		
	});
});