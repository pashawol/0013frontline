var JSCCommon = {
	 
 

	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	},
		// табы  . 
		tabscostume: function (tab) {
			var params = {
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

			}
			
			var swiperCarusel = new Swiper($(".tabs__content.active").find('.slider--js'), params); 

			$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
					.eq($(this).index()).addClass('active').fadeIn(function(){

						var slider = $(this).find('.slider--js'); 
						slider.hasClass("swiper-container-initialized") 
						? swiperCarusel.update()
						: swiperCarusel = new Swiper(slider, params)
					});
			});
		},
};

// JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	JSCCommon.tabscostume('tabs');
	
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
	
	function animeteRays() {
		setTimeout(() => { 
			var prld = $('.preloader--js')
			prld.delay(150).fadeOut().find('i').fadeOut(); 
			setTimeout(() => { 
				document.querySelector(".ray--down").classList.add("ray--active"); 
			}, 500);
			
			setTimeout(() => { 
				document.querySelector(".ray--up").classList.add("ray--active");
			}, 2800);
			
			setTimeout(() => { 
				document.querySelector(".ray--logo").classList.add("ray--active");
				document.querySelector(".cat--1").classList.add("cat--show");
			}, 5500);
		}, 200);

	} 
	$(window).on('load',function() {
		animeteRays()
	})
 
	var swiper = new Swiper('#fullpage', { 
		slidesPerView: "auto",
		freeMode: true, 
		mousewheel: true,
		keyboard: true,
		initialSlide:6,
		on: {
			init: function () {
				/* do something */
				$(".moon-block").addClass("moon-block--active");
			},
		}
	});
	swiper.on('slideChange', function () {
		if (swiper.activeIndex == 0) { 
			animeteRays()
			
		}  
		else{ 
			document.querySelector(".ray--down").classList.remove("ray--active");
			document.querySelector(".ray--up").classList.remove("ray--active");
		 
	 
			document.querySelector(".ray--logo").classList.remove("ray--active");
			document.querySelector(".cat--1").classList.remove("cat--show");
		}
		
		if (swiper.activeIndex == 1) {
			setTimeout(() => {
				
				$(".tv").addClass("tv--active");
			
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".tv").removeClass("tv--active");
				// $(".cat--2").removeClass("cat--active");
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
		
		if (swiper.activeIndex == 3) {
			setTimeout(() => {
				
				$(".cat--4").addClass("cat--go");
			}, 200);
		}  
		else{ 
			setTimeout(() => {
				
				$(".cat--4").removeClass("cat--go");
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
		
		
		if (swiper.activeIndex >5 ) {
			setTimeout(() => {
				
				$(".stand").addClass("stand--active");
			}, 200);

			setTimeout(() => { 
				document.querySelector(".ray-lamp--1").classList.add("active"); 
				setTimeout(() => { 
					document.querySelector(".ray-lamp--2").classList.add("active"); 
					document.querySelector(".ray-lamp--4").classList.add("active"); 
					setTimeout(() => { 
						document.querySelector(".ray-lamp--3").classList.add("active");  
						}, 2500); 
				}, 2500);
			}, 500);
		}  
		else{ 
			setTimeout(() => {
				
				$(".stand").removeClass("stand--active");
				$(".ray-lamp--1, .ray-lamp--2, .ray-lamp--3, .ray-lamp--4").removeClass("active");
			}, 200);
		}


		// console.log('slide changed');
	});
	$(".top-nav__link--js").click(function(e){
		e.preventDefault();
		var slide = $(this).data('slide');
		swiper.slideTo(slide, 600, false);
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
	for (var i = 1; i<= 16; i++) {

		$('<div class="server-lamp server-lamp--' + i + '"></div>').prependTo('.room--6')
	}
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
	var picturesItem = $('.pictures__item')
	var cat2 =  document.querySelector('.cat--2')

	$('.pictures__item').hover( function() {
		cat2.classList.add('cat--active')
	}, function() {
		cat2.classList.remove('cat--active')
	})


	// $("").hover(function() {

	// 	$(".cat--2").addClass("cat--active");
	// })