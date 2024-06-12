// var mnu = document.querySelector(".i1");
// var close = document.querySelector(".i2");
// var nav = document.querySelector(".resp-nav");
// if (mnu && close && nav) {
// mnu.addEventListener("click", function(){
//     nav.style.left = "0%";
//     nav.style.width = "100vw"
// })
// close.addEventListener("click", function(){
//     nav.style.left = "-100%";
//     nav.style.width = "98vw";
// })

// }
$(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });
    });

    $('.menu').click(function(){
		$('.sidebar').show();
		
		setTimeout(function(){
			$( ".sidebar-box" ).addClass('open-slide-box');
		}, 50);
	})
    $(".sidebar").click(function (e) {
	    if (!$(e.target).hasClass("menu") 
	        && $(e.target).parents(".sidebar-box").length === 0) 
	    {
			$( ".sidebar-box" ).removeClass('open-slide-box');
		    setTimeout(function(){
				$('.sidebar').fadeOut();
			}, 350);
	    }
	});
    