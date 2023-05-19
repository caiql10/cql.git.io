$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 500) {
        $('.qy-header').css({
            position: 'fixed',
            top: '0',
            left: '0',

        });
        $('.dm-right-list').css({
            display: 'block'
        });
    } else {
        $('.qy-header').css({
            position: 'relative',

        });
        $('.dm-right-list').css({
            display: 'none'
        });
    }
})

var search_count = 0
$('#search_drop').click(function() {
    search_count++;
    if (search_count % 2 == 0) {
        $('.search-con').css({
            display: 'none'
        })
    } else {
        $('.search-con').css({
            display: 'block'
        })
    }

})


var mySwiper = new Swiper('#swiper1', {
    autoplay: true, //可选选项，自动滑动
    effect: 'fade',
    loop: true,

    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },

})

var mySwiper2 = new Swiper('#swiper2', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper3 = new Swiper('#swiper3', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper4 = new Swiper('#swiper4', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper5 = new Swiper('#swiper5', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper6 = new Swiper('#swiper6', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper7 = new Swiper('#swiper7', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
var mySwiper8 = new Swiper('#swiper8', {

    autoplay: false, //可选选项，自动滑动
    navigation: {
        nextEl: '.swiper-next1',
        prevEl: '.swiper-prev1',
    },


})
$('.mon').click(function() {

    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })
    $('#swiper2').css({
        display: 'block'
    })
    $('#swiper2').siblings().css({
        display: 'none'
    })


})
$('.thu').click(function() {

    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })
    $('#swiper3').css({
        display: 'block'
    })
    $('#swiper3').siblings().css({
        display: 'none'
    })


})
$('.thi').click(function() {
    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })

    $('#swiper4').css({
        display: 'block'
    })
    $('#swiper4').siblings().css({
        display: 'none'
    })


})
$('.for').click(function() {
    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })

    $('#swiper5').css({
        display: 'block'
    })
    $('#swiper5').siblings().css({
        display: 'none'
    })


})
$('.fiv').click(function() {

    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })
    $('#swiper6').css({
        display: 'block'
    })
    $('#swiper6').siblings().css({
        display: 'none'
    })


})
$('.sta').click(function() {

    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })
    $('#swiper7').css({
        display: 'block'
    })
    $('#swiper7').siblings().css({
        display: 'none'
    })


})
$('.sun').click(function() {

    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).siblings().css({
        backgroundColor: '#f5f5f5',
        color: '#222'
    })
    $('#swiper8').css({
        display: 'block'
    })
    $('#swiper8').siblings().css({
        display: 'none'
    })


})

var mySwiper0 = new Swiper('#swiper0', {
    navigation: {
        nextEl: '.swiper-button-next0',
        prevEl: '.swiper-button-prev0',
    },
});
var mySwiper11 = new Swiper('#swiper11', {
    navigation: {
        nextEl: '.swiper-button-next11',
        prevEl: '.swiper-button-prev11',
    },
});