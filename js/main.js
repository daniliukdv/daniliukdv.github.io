$(document).ready(function() {
  $('select').niceSelect();
});

$(document).ready(function(){
  $('#searchbar-icon').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-icon").toggle();
    $("#searchbar-cross").toggle(500);
  });

  $('#searchbar-cross').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-cross").toggle();
    $("#searchbar-icon").toggle(500);
  });
});

jQuery(document).ready(function(){
	$('.menu-item').addClass('menu-trigger');
	$('.menu-trigger').click(function(){
		$('#menu-trigger').toggleClass('clicked');
		$('.container').toggleClass('push');
		$('.menu-type').toggleClass('open');
		$('body').toggleClass('body');
	});
});

// $(function() {
//   $('.intro').addClass('go');
// })

// //header
// $(document).ready(function() {
// 	"use strict";
// 	var myNav = {
// 		init: function() {
// 			this.cacheDOM();
// 			this.browserWidth();
// 			this.bindEvents();
// 		},
// 		cacheDOM: function() {
// 			this.navBars = $(".navBars");
// 			this.xBxHack = $("#xBxHack");
// 			this.navMenu = $("#menu");
// 		},
// 		browserWidth: function() {
// 			$(window).resize(this.bindEvents.bind(this));
// 		},
// 		bindEvents: function() {
// 			var width = window.innerWidth;

// 			if (width < 992) {
// 				this.navBars.click(this.animate.bind(this));
// 				this.navMenu.hide();
// 				this.xBxHack[0].checked = false;
// 			} else {
// 				this.resetNav();
// 			}
// 		},
// 		animate: function(e) {
// 			var checkbox = this.xBxHack[0];
// 			!checkbox.checked ?
// 				this.navMenu.slideDown() :
// 				this.navMenu.slideUp();

// 		},
// 		resetNav: function() {
// 			this.navMenu.show();
// 		}
// 	};
// 	myNav.init();
// });

// //long-text
// // var size = 75,
// //     newsContent= $('.long-text'),
// //     newsText = newsContent.text();

// // if (newsText.length > size){
// // 	newsContent.text(newsText.slice(0, size) + ' ...');
// // }
// $(function(){
//     $("#datepicker").datepicker();
// });

// //comments
// /**
// *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
// *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
// /*
// var disqus_config = function () {
// this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
// this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// };
// */
// (function() { // DON'T EDIT BELOW THIS LINE
// var d = document, s = d.createElement('script');
// s.src = 'https://kzhe.disqus.com/embed.js';
// s.setAttribute('data-timestamp', +new Date());
// (d.head || d.body).appendChild(s);
// })();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAkKCdzZWxlY3QnKS5uaWNlU2VsZWN0KCk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgJCgnI3NlYXJjaGJhci1pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKCcjc2VhcmNoYmFyLWlucHV0JykuYW5pbWF0ZSh7d2lkdGg6ICd0b2dnbGUnfSk7XG4gICAgJChcIiNzZWFyY2hiYXItaWNvblwiKS50b2dnbGUoKTtcbiAgICAkKFwiI3NlYXJjaGJhci1jcm9zc1wiKS50b2dnbGUoNTAwKTtcbiAgfSk7XG5cbiAgJCgnI3NlYXJjaGJhci1jcm9zcycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJCgnI3NlYXJjaGJhci1pbnB1dCcpLmFuaW1hdGUoe3dpZHRoOiAndG9nZ2xlJ30pO1xuICAgICQoXCIjc2VhcmNoYmFyLWNyb3NzXCIpLnRvZ2dsZSgpO1xuICAgICQoXCIjc2VhcmNoYmFyLWljb25cIikudG9nZ2xlKDUwMCk7XG4gIH0pO1xufSk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0JCgnLm1lbnUtaXRlbScpLmFkZENsYXNzKCdtZW51LXRyaWdnZXInKTtcblx0JCgnLm1lbnUtdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI21lbnUtdHJpZ2dlcicpLnRvZ2dsZUNsYXNzKCdjbGlja2VkJyk7XG5cdFx0JCgnLmNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdwdXNoJyk7XG5cdFx0JCgnLm1lbnUtdHlwZScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdib2R5Jyk7XG5cdH0pO1xufSk7XG5cbi8vICQoZnVuY3Rpb24oKSB7XG4vLyAgICQoJy5pbnRybycpLmFkZENsYXNzKCdnbycpO1xuLy8gfSlcblxuLy8gLy9oZWFkZXJcbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gXHRcInVzZSBzdHJpY3RcIjtcbi8vIFx0dmFyIG15TmF2ID0ge1xuLy8gXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuLy8gXHRcdFx0dGhpcy5jYWNoZURPTSgpO1xuLy8gXHRcdFx0dGhpcy5icm93c2VyV2lkdGgoKTtcbi8vIFx0XHRcdHRoaXMuYmluZEV2ZW50cygpO1xuLy8gXHRcdH0sXG4vLyBcdFx0Y2FjaGVET006IGZ1bmN0aW9uKCkge1xuLy8gXHRcdFx0dGhpcy5uYXZCYXJzID0gJChcIi5uYXZCYXJzXCIpO1xuLy8gXHRcdFx0dGhpcy54QnhIYWNrID0gJChcIiN4QnhIYWNrXCIpO1xuLy8gXHRcdFx0dGhpcy5uYXZNZW51ID0gJChcIiNtZW51XCIpO1xuLy8gXHRcdH0sXG4vLyBcdFx0YnJvd3NlcldpZHRoOiBmdW5jdGlvbigpIHtcbi8vIFx0XHRcdCQod2luZG93KS5yZXNpemUodGhpcy5iaW5kRXZlbnRzLmJpbmQodGhpcykpO1xuLy8gXHRcdH0sXG4vLyBcdFx0YmluZEV2ZW50czogZnVuY3Rpb24oKSB7XG4vLyBcdFx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuLy8gXHRcdFx0aWYgKHdpZHRoIDwgOTkyKSB7XG4vLyBcdFx0XHRcdHRoaXMubmF2QmFycy5jbGljayh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4vLyBcdFx0XHRcdHRoaXMubmF2TWVudS5oaWRlKCk7XG4vLyBcdFx0XHRcdHRoaXMueEJ4SGFja1swXS5jaGVja2VkID0gZmFsc2U7XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHR0aGlzLnJlc2V0TmF2KCk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fSxcbi8vIFx0XHRhbmltYXRlOiBmdW5jdGlvbihlKSB7XG4vLyBcdFx0XHR2YXIgY2hlY2tib3ggPSB0aGlzLnhCeEhhY2tbMF07XG4vLyBcdFx0XHQhY2hlY2tib3guY2hlY2tlZCA/XG4vLyBcdFx0XHRcdHRoaXMubmF2TWVudS5zbGlkZURvd24oKSA6XG4vLyBcdFx0XHRcdHRoaXMubmF2TWVudS5zbGlkZVVwKCk7XG5cbi8vIFx0XHR9LFxuLy8gXHRcdHJlc2V0TmF2OiBmdW5jdGlvbigpIHtcbi8vIFx0XHRcdHRoaXMubmF2TWVudS5zaG93KCk7XG4vLyBcdFx0fVxuLy8gXHR9O1xuLy8gXHRteU5hdi5pbml0KCk7XG4vLyB9KTtcblxuLy8gLy9sb25nLXRleHRcbi8vIC8vIHZhciBzaXplID0gNzUsXG4vLyAvLyAgICAgbmV3c0NvbnRlbnQ9ICQoJy5sb25nLXRleHQnKSxcbi8vIC8vICAgICBuZXdzVGV4dCA9IG5ld3NDb250ZW50LnRleHQoKTtcblxuLy8gLy8gaWYgKG5ld3NUZXh0Lmxlbmd0aCA+IHNpemUpe1xuLy8gLy8gXHRuZXdzQ29udGVudC50ZXh0KG5ld3NUZXh0LnNsaWNlKDAsIHNpemUpICsgJyAuLi4nKTtcbi8vIC8vIH1cbi8vICQoZnVuY3Rpb24oKXtcbi8vICAgICAkKFwiI2RhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcigpO1xuLy8gfSk7XG5cbi8vIC8vY29tbWVudHNcbi8vIC8qKlxuLy8gKiAgUkVDT01NRU5ERUQgQ09ORklHVVJBVElPTiBWQVJJQUJMRVM6IEVESVQgQU5EIFVOQ09NTUVOVCBUSEUgU0VDVElPTiBCRUxPVyBUTyBJTlNFUlQgRFlOQU1JQyBWQUxVRVMgRlJPTSBZT1VSIFBMQVRGT1JNIE9SIENNUy5cbi8vICogIExFQVJOIFdIWSBERUZJTklORyBUSEVTRSBWQVJJQUJMRVMgSVMgSU1QT1JUQU5UOiBodHRwczovL2Rpc3F1cy5jb20vYWRtaW4vdW5pdmVyc2FsY29kZS8jY29uZmlndXJhdGlvbi12YXJpYWJsZXMqL1xuLy8gLypcbi8vIHZhciBkaXNxdXNfY29uZmlnID0gZnVuY3Rpb24gKCkge1xuLy8gdGhpcy5wYWdlLnVybCA9IFBBR0VfVVJMOyAgLy8gUmVwbGFjZSBQQUdFX1VSTCB3aXRoIHlvdXIgcGFnZSdzIGNhbm9uaWNhbCBVUkwgdmFyaWFibGVcbi8vIHRoaXMucGFnZS5pZGVudGlmaWVyID0gUEFHRV9JREVOVElGSUVSOyAvLyBSZXBsYWNlIFBBR0VfSURFTlRJRklFUiB3aXRoIHlvdXIgcGFnZSdzIHVuaXF1ZSBpZGVudGlmaWVyIHZhcmlhYmxlXG4vLyB9O1xuLy8gKi9cbi8vIChmdW5jdGlvbigpIHsgLy8gRE9OJ1QgRURJVCBCRUxPVyBUSElTIExJTkVcbi8vIHZhciBkID0gZG9jdW1lbnQsIHMgPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuLy8gcy5zcmMgPSAnaHR0cHM6Ly9remhlLmRpc3F1cy5jb20vZW1iZWQuanMnO1xuLy8gcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXN0YW1wJywgK25ldyBEYXRlKCkpO1xuLy8gKGQuaGVhZCB8fCBkLmJvZHkpLmFwcGVuZENoaWxkKHMpO1xuLy8gfSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
