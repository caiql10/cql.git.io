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
var count3 = 0
$('#switch').click(function() {
    count3++;
    if (count3 % 2 != 0) {
        $('.video_item-n').css({
            display: 'none'
        })
        $('#switch_ball').css("left", "27px");
        $('#switch').css("background", "linear-gradient(90deg,#15e05a 0,#19e19d 100%)");


    } else {
        $('.video_item-n').css({
            display: 'flex'
        })
        $('#switch_ball').css("left", "2px");
        $('#switch').css("background", "#71757b");
    }
    console.log(count3);


})

$('.h-t1').click(function() {
    $('.history-con1').css({
        display: 'block'
    })
    $('.history-con1').siblings().css({
        display: 'none'
    })
})
$('.h-t2').click(function() {
    $('.history-con2').css({
        display: 'block'
    })
    $('.history-con2').siblings().css({
        display: 'none'
    })
})
$('.h-t3').click(function() {
    $('.history-con3').css({
        display: 'block'
    })
    $('.history-con3').siblings().css({
        display: 'none'
    })
})
$('.h-t4').click(function() {
    $('.history-con4').css({
        display: 'block'
    })
    $('.history-con4').siblings().css({
        display: 'none'
    })
})
$('.h-t5').click(function() {
    $('.history-con5').css({
        display: 'block'
    })
    $('.history-con5').siblings().css({
        display: 'none'
    })
})

$('.history').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: 'rgba(237, 237, 237, 0.88)',
        borderBottom: '2px solid transparent'
    })

})

$('#ca1').mouseover(function() {
    $('#ca1').addClass('ca-hover')
    $('#ca1').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca1.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(64, 51, 44, 0.9),rgba(64, 51, 44, 0.7)transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(64, 51, 44, 0.9),rgba(64, 51, 44, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(64, 51, 44, 0.9),rgba(64, 51, 44, 0.3),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(64, 51, 44, 0.9),rgba(64, 51, 44, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l1.webp)'
    })
})
$('#ca2').mouseover(function() {
    $('#ca2').addClass('ca-hover')
    $('#ca2').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca2.jpg)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/transparent.png)'
    })
})
$('#ca3').mouseover(function() {
    $('#ca3').addClass('ca-hover')
    $('#ca3').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca3.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(11, 47, 53, 0.9),rgba(11, 47, 53, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(rgba(11, 47, 53, 0.9),11, 47, 53, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(rgba(11, 47, 53, 0.9),11, 47, 53, 0.7),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(rgba(11, 47, 53, 0.9),11, 47, 53, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l2.webp)'
    })
})
$('#ca4').mouseover(function() {
    $('#ca4').addClass('ca-hover');
    $('#ca4').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca4.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(64, 39, 25, 0.9),rgba(64, 39, 25, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(64, 39, 25, 0.9),rgba(64, 39, 25, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(64, 39, 25, 0.9),rgba(64, 39, 25, 0.3),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(64, 39, 25, 0.9),rgba(64, 39, 25, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l3.webp)'
    })
})
$('#ca5').mouseover(function() {
    $('#ca5').addClass('ca-hover');
    $('#ca5').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca5.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(20, 22, 26, 0.9),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l4.webp)'
    })
})
$('#ca6').mouseover(function() {
    $('#ca6').addClass('ca-hover');
    $('#ca6').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca6.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(64, 39, 46, 0.9),rgba(64, 39, 46, 0.3),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(64, 39, 46, 0.9),rgba(64, 39, 46, 0.3),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(64, 39, 46, 0.9),rgba(64, 39, 46, 0.3),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(64, 39, 46, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l5.webp)'
    })
})
$('#ca7').mouseover(function() {
    $('#ca7').addClass('ca-hover');
    $('#ca7').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca7.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(22, 14, 64, 0.9),rgba(22, 14, 64, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(22, 14, 64, 0.9),rgba(22, 14, 64, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(22, 14, 64, 0.9),rgba(22, 14, 64, 0.3),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(22, 14, 64, 0.9),transparent,transparent)'
    })

    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l6.webp)'
    })
})
$('#ca8').mouseover(function() {
    $('#ca8').addClass('ca-hover');
    $('#ca8').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca8.jpg)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.3),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/transparent.png)'
    })

})
$('#ca9').mouseover(function() {
    $('#ca9').addClass('ca-hover');
    $('#ca9').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca9.jpg)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(20, 22, 26, 0.9),rgba(20, 22, 26, 0.7),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(20, 22, 26, 0.7),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l7.png)'
    })
})
$('#ca10').mouseover(function() {
    $('#ca10').addClass('ca-hover');
    $('#ca10').siblings().removeClass('ca-hover')
    $('.qy-carousel').css({
        backgroundImage: 'url(./img/h-ca10.webp)'
    })
    $('.maskT').css({
        backgroundImage: 'linear-gradient(rgba(13, 44, 64, 0.9),rgba(13, 44, 64, 0.7),transparent)'
    })
    $('.maskB').css({
        backgroundImage: 'linear-gradient(0deg,rgba(13, 44, 64, 0.9),rgba(13, 44, 64, 0.7),transparent)'
    })
    $('.maskL').css({
        backgroundImage: 'linear-gradient(90deg,rgba(13, 44, 64, 0.9),rgba(13, 44, 64, 0.7),transparent)'
    })
    $('.maskR').css({
        backgroundImage: 'linear-gradient(-90deg,rgba(13, 44, 64, 0.9),transparent,transparent)'
    })
    $('#ca-logo').css({
        backgroundImage: 'url(./img/qy-l8.webp)'
    })
})
$('#tv-right').click(function() {
    $('#tv-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
})
$('#tv-left').click(function() {
    $('#tv-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
})
$('#varity-right').click(function() {
    $('#varity-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
})
$('#varity-left').click(function() {
    $('#varity-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
})
$('#nM-right').click(function() {
    $('#line-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
    $('#movies-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
})
$('#nM-left').click(function() {
    $('#line-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
    $('#movies-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
})
$('#match-right').click(function() {
    $('#match-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
})
$('#match-left').click(function() {
    $('#match-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
})
$('#cloud-right').click(function() {
    $('#cloud-box').css({
        marginLeft: '-100%',
        transition: '.5s'
    })
})
$('#cloud-left').click(function() {
    $('#cloud-box').css({
        marginLeft: '0',
        transition: '.5s'
    })
})

$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 500) {
        $('.qy-header').css({
            position: 'fixed',
            top: '0',
            left: '0',
            background: 'rgba(20,22,26,0.9)'
        });
    } else {
        $('.qy-header').css({
            position: 'absolute',
            background: 'transparent'
        });
    }
})