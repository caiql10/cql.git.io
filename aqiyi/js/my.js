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
$(window).scroll(function() {
    var scollH = $(window).scrollTop();
    console.log(scollH);
    if (scollH > 200) {
        $('.qy-header').css({
            position: 'fixed',
            top: '0',
            left: '0',

        });
    } else {
        $('.qy-header').css({
            position: 'relative',

        });
    }
})
$('.cav-item').click(function() {
    $(this).children('a').css({
        color: '#00cc36'
    })
    $(this).children('svg').css({
        fill: '#00cc36'
    })
    $(this).css({
        borderRight: '1px solid #00cc36',
        backgroundImage: 'linear-gradient(90deg,#fafffc 1%,#ebfdef)'
    })
    $(this).siblings().children('a').css({
        color: '#666'
    })
    $(this).siblings().children('svg').css({
        fill: '#c4c4c4'
    })
    $(this).siblings().css({
        borderRight: 'none',
        backgroundImage: 'linear-gradient(90deg,transparent 1%,transparent)'
    })
})
$('.history').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: '#222',
        borderBottom: '2px solid transparent'
    })

})
$('.love').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: '#222',
        borderBottom: '2px solid transparent'
    })

})
$('.attention').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: '#222',
        borderBottom: '2px solid transparent'
    })

})
$('.money').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: '#222',
        borderBottom: '2px solid transparent'
    })

})
$('.set').children('.title').children('li').click(function() {

    $(this).css({
        color: '#00cc36',
        borderBottom: '2px solid #00cc36'
    })
    $(this).siblings().css({
        color: '#222',
        borderBottom: '2px solid transparent'
    })

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
$('.h-t6').click(function() {
    $('.history-con6').css({
        display: 'block'
    })
    $('.history-con6').siblings().css({
        display: 'none'
    })
})
$('.h-t7').click(function() {
    $('.history-con7').css({
        display: 'block'
    })
    $('.history-con7').siblings().css({
        display: 'none'
    })
})
$('.h-t8').click(function() {
    $('.history-con8').css({
        display: 'block'
    })
    $('.history-con8').siblings().css({
        display: 'none'
    })
})


$('.cav-item1').click(function() {

    $('.history').css({
        display: 'block',
    })
    $('.history').siblings().css({
        display: 'none'
    })

})

$('.cav-item2').click(function() {

    $('.love').css({
        display: 'block',
    })
    $('.love').siblings().css({
        display: 'none'
    })

})
$('.cav-item3').click(function() {

    $('.attention').css({
        display: 'block',
    })
    $('.attention').siblings().css({
        display: 'none'
    })

})
$('.cav-item4').click(function() {

    $('.course').css({
        display: 'block',
    })
    $('.course').siblings().css({
        display: 'none'
    })

})
$('.cav-item5').click(function() {

    $('.screenshot').css({
        display: 'block',
    })
    $('.screenshot').siblings().css({
        display: 'none'
    })

})
$('.cav-item6').click(function() {

    $('.Vip').css({
        display: 'block',
    })
    $('.Vip').siblings().css({
        display: 'none'
    })

})
$('.cav-item7').click(function() {

    $('.integral').css({
        display: 'block',
    })
    $('.integral').siblings().css({
        display: 'none'
    })

})
$('.cav-item8').click(function() {

    $('.money').css({
        display: 'block',
    })
    $('.money').siblings().css({
        display: 'none'
    })

})
$('.cav-item9').click(function() {

    $('.sever').css({
        display: 'block',
    })
    $('.sever').siblings().css({
        display: 'none'
    })

})
$('.cav-item11').click(function() {

    $('.set').css({
        display: 'block',
    })
    $('.set').siblings().css({
        display: 'none'
    })

})

$('.l-t1').click(function() {
    $('.love-con1').css({
        display: 'block'
    })
    $('.love-con1').siblings().css({
        display: 'none'
    })
})
$('.l-t2').click(function() {
    $('.love-con2').css({
        display: 'block'
    })
    $('.love-con2').siblings().css({
        display: 'none'
    })
})
$('.l-t3').click(function() {
    $('.love-con3').css({
        display: 'block'
    })
    $('.love-con3').siblings().css({
        display: 'none'
    })
})
$('.at1-t1').click(function() {
    $('.attention-con1').css({
        display: 'block'
    })
    $('.attention-con1').siblings().css({
        display: 'none'
    })
})
$('.at-t2').click(function() {
    $('.attention-con2').css({
        display: 'block'
    })
    $('.attention-con2').siblings().css({
        display: 'none'
    })
})

$('.m-t1').click(function() {
    $('.money-con1').css({
        display: 'block'
    })
    $('.money-con1').siblings().css({
        display: 'none'
    })
})
$('.m-t2').click(function() {
    $('.money-con2').css({
        display: 'block'
    })
    $('.money-con2').siblings().css({
        display: 'none'
    })
})
$('.m-t3').click(function() {
    $('.money-con3').css({
        display: 'block'
    })
    $('.money-con3').siblings().css({
        display: 'none'
    })
})
$('.m-t4').click(function() {
    $('.money-con4').css({
        display: 'block'
    })
    $('.money-con4').siblings().css({
        display: 'none'
    })
})

$('.set-t1').click(function() {
    $('.set-con1').css({
        display: 'block'
    })
    $('.set-con1').siblings().css({
        display: 'none'
    })
})
$('.set-t2').click(function() {
    $('.set-con2').css({
        display: 'block'
    })
    $('.set-con2').siblings().css({
        display: 'none'
    })
})
$('.set-t3').click(function() {
    $('.set-con3').css({
        display: 'block'
    })
    $('.set-con3').siblings().css({
        display: 'none'
    })
})
$('.set-t4').click(function() {
    $('.set-con4').css({
        display: 'block'
    })
    $('.set-con4').siblings().css({
        display: 'none'
    })
})
var count3 = 0
$('#switch').click(function() {
    count3++;
    if (count3 % 2 != 0) {

        $('#switch_ball').css("left", "33px");
        $('#switch').css("background", "linear-gradient(90deg,#15e05a 0,#19e19d 100%)");


    } else {

        $('#switch_ball').css("left", "2px");
        $('#switch').css("background", "#71757b");
    }
    console.log(count3);


})