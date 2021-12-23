$(document).ready(function () {
    // menu
    $('.search__menu').click(() => {
        $('.overlay').addClass('active');
        $('.nav').addClass('active');
    })
    // overlay
    $('.overlay').click(() => {
        $('.overlay').removeClass('active');
        $('.nav').removeClass('active');
    })
    // header
    $(window).scroll(() => {
        let location = $('html').scrollTop();
        let width = $(window).width();
        if (location > 200 && width > 768) {
            $('.nav').addClass('stickNav');
        } else {
            $('.nav').removeClass('stickNav');
        }

        function locationActive(topOffset, selector) {
            if (location > topOffset) {
                $(selector).addClass('active');
            }
        }

        locationActive(220, '.trend__wrapper')
        locationActive(600, '.product')
        locationActive(1000, '.classico')
        locationActive(1000, '.modern')
        locationActive(1600, '.product-common')
        locationActive(2575, '.blog-post')
    })
    // slide
    $('.swiper-button').click(() => {
        $('.slide__information').addClass('active');
    })
    $('.swiper-button').mouseup(() => {
        $('.slide__information').removeClass('active');
    })

    // footer
    $('.footer__social-wrap').mouseenter(function () {
        $(this).css('opacity', '0.9');
        $(this).children('.footer__popup').css('display', 'block');
    });

    $('.footer__social-wrap').mouseleave(function () {
        $(this).css('opacity', '1');
        $(this).children('.footer__popup').css('display', 'none');
    });

    // product common
    var swiper2 = new Swiper(".product-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        grabCursor: true,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            740: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        },
    });

    var swiper1 = new Swiper(".mySwiper", {
        loop: true,
        grabCursor: true,
        animation: {
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    function productCommon() {
        let widthWindow = $(window).width();
        if (widthWindow > 1024) {
            $('.col').addClass('col-2-4');
        } else {
            $('.col').removeClass('col-2-4');
        }
    }

    productCommon();

    $(window).resize(function () {
        productCommon();
    });
});















