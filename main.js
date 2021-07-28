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

var swiper2 = new Swiper(".product-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  console.log(swiper2);
$(window).resize(function () {
    let count = 0;
    let widthWindow = $(window).width();
    if(widthWindow > 1023) {
        count = 4;
    }else if( widthWindow > 739 && widthWindow < 1024 ) {
        count = 3;
    }else {
        count = 2;
    }
    
    var swiper2 = new Swiper(".product-swiper", {
        slidesPerView: count,
        spaceBetween: 30,
        slidesPerGroup: 4,
        grabCursor: true,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    
    
});











