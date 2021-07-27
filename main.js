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
        console.log(location);
        if (location > 200 && width > 768) {
            $('.nav').addClass('stickNav');
        } else {
            $('.nav').removeClass('stickNav');
        }
    })
    // slide
    $('.swiper-button').click(() => {
        $('.slide__information').addClass('active');
    })
    $('.swiper-button').mouseup(() => {
        $('.slide__information').removeClass('active');
    })
    // trend 
    $(window).scroll(() => {
        let location = $('html').scrollTop();
        if (location > 220) {
            $('.trend__wrapper').addClass('active');
        }
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






