var JSCCommon = {
	 
 

	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}

};

// JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

 
	
	$(document).on('click', ".popup-with-move-anim", function(e){
		e.preventDefault();
		var src = $(this).attr("href");
		$(src).html('<div class="modal__body">\
								<div class="modal__head">\
									<img src="'+$(this).find('img').attr("src")+'">\
								</div>\
								<div class="modal__text  "  >' + $(this).data("text") + '</div>\
							</div>');
		$.magnificPopup.open({
			items: {
				src: src, // can be a HTML string, jQuery object, or CSS selector
			},
				type: 'inline',
				fixedContentPos: true,
				fixedBgPos: true,
				overflowY: 'auto',
				closeOnContentClick: false,
				closeBtnInside: true,
				preloader: false,
				removalDelay: 300,
				tClose: 'Закрыть (Esc)',
				mainClass: 'my-mfp-zoom-in',
		})
	})
	JSCCommon.inputMask();
 
	var swiper = new Swiper('#fullpage', { 
		slidesPerView: "auto",
		freeMode: true, 
		mousewheel: true,
		keyboard: true,
		// initialSlide: 3,
		on: {
			init: function () {
				/* do something */
				$(".moon-block").addClass("moon-block--active");
			},
		}
	});
	swiper.on('slideChange', function () {
		if (swiper.activeIndex == 0) {
			setTimeout(() => {
				
				$(".moon-block").addClass("moon-block--active");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".moon-block").removeClass("moon-block--active");
			}, 200);
		}
		
		if (swiper.activeIndex == 1) {
			setTimeout(() => {
				
				$(".tv").addClass("tv--active");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".tv").removeClass("tv--active");
			}, 200);
		}
		
		if (swiper.activeIndex == 2) {
			setTimeout(() => {
				
				$(".cat--3").addClass("cat--down");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".cat--3").removeClass("cat--down");
			}, 200);
		}
		
		if (swiper.activeIndex == 5) {
			setTimeout(() => {
				
				$(".blinds").addClass("blinds--hidden");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".blinds").removeClass("blinds--hidden");
			}, 200);
		}
		
		
		if (swiper.activeIndex == 6) {
			setTimeout(() => {
				
				$(".stand").addClass("stand--active");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".stand").removeClass("stand--active");
			}, 200);
		}


		// console.log('slide changed');
	});
	$(".top-nav__link--js").click(function(e){
		e.preventDefault();
		var slide = $(this).data('slide');
		swiper.slideTo(slide, 600, false);
	})

	var swiperCarusel = new Swiper('.slider--js', { 
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		// freeMode: true, 
		centeredSlides: true,
		centerInsufficientSlides: true,
		// initialSlide: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})


	$(".servises__item--sm").click(function(){
		$('.servises__item--center')
		.html('<div class="servises__item-body">\
						<div class="servises__item-head">\
							<div class="servises__img-wrap">\
								<img src="'+$(this).find('img').attr("src")+'">\
								</div>\
								<div class="servises__title">'+$(this).data("title")+'</div>\
							</div>\
							<div class="servises__text type-wrap" data-text="' + $(this).data("text") + '">\
							<span class="type"> </span></div>\
						</div>')
						$(".type-wrap").each(function(){

			var th = $(this).data("text");
				// $(this).find(".type").waypoint(function(){   
				$(this).find(".type").typed({
					strings: [th],
					typeSpeed: 5,
					fadeOutDelay: 5,
					startDelay: 50,
					cursorChar: "<span class='cursor'>",  
					 
					onStringTyped: function() { 
						$(".typed-cursor").fadeOut();
						}  
					}) 
				// },
				//   {
						
				//   offset: '90%'
				//   }
				//   )
		
				});
	})
});


// (function($) {
// 	$.jInvertScroll(['.scroll']);
// }(jQuery));

// $(document).ready(function(){
// 	$('html, body').animate({scrollTop: 0}, 20);
// });

		// new fullpage('#fullpage', {
		// 	//options here
		// 	scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
		// 	menu: '.header',
		// 	autoScrolling:true,
		// 	scrollHorizontally: true,
		// 	loopHorizontal: true,
		// });
		
		//methods
		// fullpage_api.setAllowScrolling(false);