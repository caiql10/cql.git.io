var i = 0
var count = 0
var count1 = 0
var count2 = 0
var count3 = 0
$('.video-of').click(function() {
    $('.video-content').css({
        display: 'block'
    })
    $('.discuss-content').css({
        display: 'none'
    })
})
$('.discuss-of').click(function() {
    $('.video-content').css({
        display: 'none'
    })
    $('.discuss-content').css({
        display: 'block'
    })
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
$('.danmuIcon').click(function() {
    i++;

    var don = document.getElementById("don");
    var doff = document.getElementById("doff");
    if (i % 2 != 0) {
        $('#don').addClass('off');
        $('#don').removeClass('on');
        $('#doff').addClass('on');
        $('#doff').removeClass('off');
    } else {
        $('#don').addClass('on');
        $('#don').removeClass('off');
        $('#doff').addClass('off');
        $('#doff').removeClass('on');
    }
    console.log(i);


})
$('.star1').mouseover(function() {
    $(this).css({
        color: '#f77200'
    })
    $('#score-num').html('2分')

})
$('.star2').mouseover(function() {
    $(this).css({
        color: '#f77200'
    })
    $('.star1').css({
        color: '#f77200'
    })

    $('#score-num').html('4分')

})
$('.star3').mouseover(function() {
    $(this).css({
        color: '#f77200'
    })
    $('.star2').css({
        color: '#f77200'
    })
    $('.star1').css({
        color: '#f77200'
    })

    $('#score-num').html('6分')

})
$('.star4').mouseover(function() {
    $(this).css({
        color: '#f77200'
    })
    $('.star2').css({
        color: '#f77200'
    })
    $('.star3').css({
        color: '#f77200'
    })
    $('.star1').css({
        color: '#f77200'
    })

    $('#score-num').html('8分')

})
$('.star5').mouseover(function() {
    $(this).css({
        color: '#f77200'
    })
    $('.star2').css({
        color: '#f77200'
    })
    $('.star3').css({
        color: '#f77200'
    })
    $('.star4').css({
        color: '#f77200'
    })
    $('.star1').css({
        color: '#f77200'
    })
    $('#score-num').html('10分')

})
$('.stars').mouseout(function() {
    $('.icon-star').css({
        color: 'hsla(0, 0%, 100%, 0.5)'
    })
    $('#score-num').html('未评分')

})
$('.people').mouseover(function() {
    $(this).css({
        backgroundColor: '#00cc4c',
        color: '#fff'
    })
    $(this).find('span').css({
        color: '#fff'
    })
    $(this).siblings().find('.s_line').css({
        display: 'none'
    })
    $(this).children('i').css({
        display: 'block'
    })
    $(this).siblings().css({
        backgroundColor: 'transparent',
    })
    $(this).siblings().find('.i_name').css({
        color: '#000',
    })
    $(this).siblings().find('.s_name').css({
        color: '#4e4f53',
    })
})

$('.nv').mouseover(function() {
    $(this).css({
        backgroundColor: '#ff5c87',
        color: '#fff'
    })
    $(this).find('span').css({
        color: '#fff'
    })
    $(this).siblings().find('.s_line').css({
        display: 'none'
    })
    $(this).children('i').css({
        display: 'block',
        backgroundImage: 'linear-gradient(90deg,#ededed,#ff5c87 50%,#ededed'
    })
    $(this).siblings().css({
        backgroundColor: 'transparent',
    })
    $(this).siblings().find('.i_name').css({
        color: '#000',
    })
    $(this).siblings().find('.s_name').css({
        color: '#4e4f53',
    })
})
$('.peo1').mouseover(function() {
    $('.peo-con1').css({
        display: 'flex'
    })
    $('.peo-con1').siblings().css({
        display: 'none'
    })
})
$('.nv').mouseover(function() {
    $('.peo-con2').css({
        display: 'flex'
    })
    $('.peo-con2').siblings().css({
        display: 'none'
    })
})
$('.peo3').mouseover(function() {
    $('.peo-con3').css({
        display: 'flex'
    })
    $('.peo-con3').siblings().css({
        display: 'none'
    })
})
$('.peo4').mouseover(function() {
    $('.peo-con4').css({
        display: 'flex'
    })
    $('.peo-con4').siblings().css({
        display: 'none'
    })
})
$('.peo5').mouseover(function() {
    $('.peo-con5').css({
        display: 'flex'
    })
    $('.peo-con5').siblings().css({
        display: 'none'
    })
})
$('#p-right').click(function() {
    $('.peo-con').css({
        marginLeft: 'calc(-100% - 10px)'
    })
})
$('#p-left').click(function() {
    $('.peo-con').css({
        marginLeft: '0'
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

        });
    } else {
        $('.qy-header').css({
            position: 'relative',

        });
    }
})

// 点击展开弹幕
$('.hidden1').click(function() {
    count++;
    if (count % 2 != 0) {
        $('#open1').css("display", "none");
        $('#hid1').css("display", "block");
        $('.h1').css("display", "flex");

    } else {
        $('#open1').css("display", "block");
        $('#hid1').css("display", "none");
        $('.h1').css("display", "none");
    }
    console.log(count);


})
$('.hidden2').click(function() {
    count1++;
    if (count1 % 2 != 0) {
        $('#open2').css("display", "none");
        $('#hid2').css("display", "block");
        $('.h2').css("display", "flex");

    } else {
        $('#open2').css("display", "block");
        $('#hid2').css("display", "none");
        $('.h2').css("display", "none");
    }
    console.log(count1);


})
$('.hidden3').click(function() {
    count2++;
    if (count2 % 2 != 0) {
        $('#open3').css("display", "none");
        $('#hid3').css("display", "block");
        $('.h3').css("display", "flex");

    } else {
        $('#open3').css("display", "block");
        $('#hid3').css("display", "none");
        $('.h3').css("display", "none");
    }
    console.log(count2);


})
$('.hidden4').click(function() {
    count3++;
    if (count3 % 2 != 0) {
        $('#open4').css("display", "none");
        $('#hid4').css("display", "block");
        $('.h4').css("display", "flex");

    } else {
        $('#open4').css("display", "block");
        $('#hid4').css("display", "none");
        $('.h4').css("display", "none");
    }
    console.log(count3);


})