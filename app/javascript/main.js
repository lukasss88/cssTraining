$(document).ready(function(){

    /*PRELOADER JS*/
    $(window).on('load', function() {
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });
    /*END PRELOADER JS*/

    $(".partner").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

    $('a.page-scroll').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.menu-top').addClass('menu-shrink');
        } else {
            $('.menu-top').removeClass('menu-shrink');
        }
    });

    $("#about-carousel").hover(function(){
        $(".carousel .slide-control.left").toggleClass("hover-left-arrow");
        $(".carousel .slide-control.right").toggleClass("hover-right-arrow")
    });

    new WOW().init();

});



