$(document).ready(function () {
    // lead-slider

    if ($('.lead-slider').length > 0) {
        $('.lead-slider').bxSlider();

    }

    //counter up

    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 2000
        });
    }

    // what slider

    if ($('.what-slider').length > 0) {
        $('.what-slider').owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            slideBy: 2,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    slideBy: 1,
                    margin: 0
                },
                400: {
                    items: 1,
                    dots: false,
                    slideBy: 1,
                    margin: 0
                },
                700: {
                    items: 2,
                    dots: true,
                    slideBy: 2,
                    margin: 20
                },
                1100: {
                    items: 2,
                    dots: true,
                    slideBy: 2,
                    margin: 30
                }
            }
        });
    }

    // fancybox
    if ($('.fancybox').length > 0) {
        $(".fancybox").fancybox({
            openEffect: 'none',
            closeEffect: 'none'
        });
    }

     // clients slider
     if ($('.clients-slider').length > 0) {
        $('.clients-slider').owlCarousel({
            items: 6,
            margin: 10,
            dots: false,
            loop: true,
            slideBy: 3,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                    slideBy: 1
                },
                400: {
                    items: 3,
                    slideBy: 1
                },
                700: {
                    items: 5,
                    slideBy: 2
                },
                1100: {
                    items: 6,
                    slideBy: 3
                }
            }
        });
    }

    // animation
    function animation(){
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function(){
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if(position  < windowHeight + scroll -100){
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }

    $(window).scroll(function(){
        animation();
    });

    animation();
});