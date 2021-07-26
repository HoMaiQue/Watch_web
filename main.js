$(document).ready(function () {
    $('.search__menu').click(() => {
        $('.overlay').addClass('active');
        $('.nav').addClass('active');
    })

    $('.overlay').click(() => {
        $('.overlay').removeClass('active');
        $('.nav').removeClass('active');
    })

    $(window).scroll(() => {
        let location = $('html').scrollTop();
        let width = $(window).width();
        console.log(location);
        if (location > 200 && width > 768) {
            $('.nav').addClass('stickNav');
        } else {
            $('.nav').removeClass('stickNav');
        }
    })

    $('.swiper-button').click(() => {
        $('.slide__information').addClass('active');
    })
    $('.swiper-button').mouseup(() => {
        $('.slide__information').removeClass('active');
    })

});

var swiper = new Swiper(".mySwiper", {
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






