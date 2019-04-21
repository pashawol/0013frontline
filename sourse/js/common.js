var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	// LazyFunction: function () {
	// 	// Для лэзи загрузки 

	// 	document.addEventListener("DOMContentLoaded", function () {
	// 		let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	// 		let active = false;

	// 		const lazyLoad = function () {
	// 			if (active === false) {
	// 				active = true;

	// 				setTimeout(function () {
	// 					lazyImages.forEach(function (lazyImage) {
	// 						if (((lazyImage.getBoundingClientRect().top  - lazyImage.parentElement.clientHeight * 2)<= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
	// 							lazyImage.src = lazyImage.dataset.src;
	// 							// lazyImage.srcset = lazyImage.dataset.srcset;
	// 							lazyImage.classList.remove("lazy");

	// 							lazyImages = lazyImages.filter(function (image) {
	// 								return image !== lazyImage;
	// 							});

	// 							if (lazyImages.length === 0) {
	// 								document.removeEventListener("scroll", lazyLoad);
	// 								window.removeEventListener("resize", lazyLoad);
	// 								window.removeEventListener("orientationchange", lazyLoad);
	// 								window.addEventListener("DOMContentLoaded", lazyLoad);
	// 							}
	// 						}
	// 					});

	// 					active = false;
	// 				}, 200);
	// 			}
	// 		};

	// 		document.addEventListener("scroll", lazyLoad);
	// 		window.addEventListener("resize", lazyLoad);
	// 		window.addEventListener("orientationchange", lazyLoad);
	// 		window.addEventListener("DOMContentLoaded", lazyLoad);
	// 	});


	// 	// лэзи 
	// 	document.addEventListener("DOMContentLoaded", function () {
	// 		let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
	// 		let active = false;

	// 		const lazyLoad = function () {
	// 			if (active === false) {
	// 				active = true;

	// 				setTimeout(function () {
	// 					lazyImages.forEach(function (lazyImage) {
	// 						if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight ) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
	// 							lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
	// 							lazyImage.src = lazyImage.dataset.src;
	// 							// lazyImage.srcset = lazyImage.dataset.srcset;
	// 							lazyImage.classList.remove("lazy");

	// 							lazyImages = lazyImages.filter(function (image) {
	// 								return image !== lazyImage;
	// 							});

	// 							if (lazyImages.length === 0) {
	// 								document.removeEventListener("scroll", lazyLoad);
	// 								window.removeEventListener("resize", lazyLoad);
	// 								window.removeEventListener("orientationchange", lazyLoad);
	// 								window.addEventListener("DOMContentLoaded", lazyLoad);
	// 							}
	// 						}
	// 					});

	// 					active = false;
	// 				}, 200);
	// 			}
	// 		};

	// 		document.addEventListener("scroll", lazyLoad);
	// 		window.addEventListener("resize", lazyLoad);
	// 		window.addEventListener("orientationchange", lazyLoad);
	// 		window.addEventListener("DOMContentLoaded", lazyLoad);
	// 	});

	// },



	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},

	// mobileMenu: function () {
	// 	// закрыть/открыть мобильное меню
	// 	var toggMnu = $(".toggle-menu-mobile--js").click(function () {

	// 		$(".toggle-menu-mobile--js").toggleClass("on");
	// 		// $("body").toggleClass("fixed");
	// 		$(".menu-mobile--js").toggleClass("active");
	// 		$("body, html").toggleClass("fixed");
	// 		return false;
	// 	});
	// 	$('.menu-mobile--js ul li a').on('click', function () {
	// 		$(".menu-mobile--js .toggle-mnu").click();
	// 	});
	// 	$(document).mouseup(function (e) {
	// 		var container = $(".menu-mobile--js.active");
	// 		if (container.has(e.target).length === 0) {
	// 			$(".toggle-menu-mobile--js").removeClass("on");
	// 			// $("body").toggleClass("fixed");
	// 			$(".menu-mobile--js").removeClass("active");
	// 			$("body, html").removeClass("fixed");
	// 		}
	// 	});
	// 	// закрыть меню при горизонтальном свайпе
	// 	$('.menu-mobile--js.active').swipe({
	// 		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
	// 			if (direction == 'left') {
	// 				$(".toggle-menu-mobile--js").removeClass("on");
	// 				$(".menu-mobile--js.active").removeClass("active");
	// 				$("body, html").removeClass("fixed");
	// 			}
	// 			if (direction == 'right') {
	// 				$(".toggle-menu-mobile--js").removeClass("on");
	// 				$(".menu-mobile--js.active").removeClass("active");
	// 				$("body, html").removeClass("fixed");
	// 			}
	// 		},
	// 		triggerOnTouchEnd: false,
	// 	});
	// },


	// // табы  . 
	// tabscostume: function (tab) {
	// 	$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
	// 		$(this)
	// 			.addClass('active').siblings().removeClass('active')
	// 			.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
	// 			.eq($(this).index()).fadeIn().addClass('active');

	// 	});
	// },

 

	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}

};

// JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

 
	
	JSCCommon.magnificPopupCall();
	JSCCommon.inputMask();
 
	var swiper = new Swiper('#fullpage', { 
		slidesPerView: "auto",
		freeMode: true, 
		mousewheel: true,
		keyboard: true,
		// initialSlide: 6,
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