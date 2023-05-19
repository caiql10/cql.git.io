var mySwiper = new Swiper('.swiper-container', {
    autoplay: 3000, //可选选项，自动滑动
    loop: true, //可选选项，开启循环
    mode: 'vertical',
    pagination: '.pagination',
    paginationClickable: true,
})
$('#v2-left').click(function() {
    $('.game-v2').children('.box').css({
        marginLeft: '0'
    })
})
$('#v2-right').click(function() {
    $('.game-v2').children('.box').css({
        marginLeft: '-100%'
    })
})
$('#v4-left').click(function() {
    $('.game-v4').children('.box').css({
        marginLeft: '0'
    })
})
$('#v4-right').click(function() {
    $('.game-v4').children('.box').css({
        marginLeft: '-100%'
    })
})
$('.v6-l').click(function() {
    $(this).css({
        backgroundColor: '#10BE08',
    })
    $(this).siblings().css({
        backgroundColor: '#333',
    })
})
$('.v6-r').click(function() {
    $(this).css({
        backgroundColor: '#474747',
    })
    $(this).siblings().css({
        backgroundColor: '#242424',
    })
})
$('#v6-l-1').click(function() {
    $('.game-v6').find('.box1').css({
        display: 'flex',
    })
    $('.game-v6').find('.box1').siblings().css({
        display: 'none',
    })
})

$('#v6-l-2').click(function() {
    $('.game-v6').find('.box2').css({
        display: 'flex',
    })
    $('.game-v6').find('.box2').siblings().css({
        display: 'none',
    })
})
$('#v6-r-1').click(function() {
    $('.game-v6').find('.box3').css({
        display: 'flex',
    })
    $('.game-v6').find('.box3').siblings().css({
        display: 'none',
    })
})
$('#v6-r-2').click(function() {
    $('.game-v6').find('.box4').css({
        display: 'flex',
    })
    $('.game-v6').find('.box4').siblings().css({
        display: 'none',
    })
})