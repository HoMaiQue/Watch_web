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
    function slideProduct() {
        let widthWindow = $(window).width();
        let count = 0;
        if (widthWindow > 1023) {
            count = 4;
        } else if (widthWindow > 739 && widthWindow < 1024) {
            count = 3;
        } else {
            count = 2;
        }
        var swiper2 = new Swiper(".product-swiper", {
            slidesPerView: count,
            spaceBetween: 30,
            slidesPerGroup: count,
            grabCursor: true,
            loop: true,
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
    }

    function productCommon() {
        let widthWindow = $(window).width();
        if (widthWindow > 1024) {
            $('.col').addClass('col-2-4');
        } else {
            $('.col').removeClass('col-2-4');
        }
    }
    productCommon();
    slideProduct();

    $(window).resize(function () {
        slideProduct();
        productCommon();
    });
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













