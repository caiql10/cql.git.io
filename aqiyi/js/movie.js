$('.pl1').mouseover(function() {
    $(this).find('.voice').css({
        display: 'block'
    })



})
$('.pl2').mouseover(function() {
    $(this).find('.voice').css({
        display: 'block'
    })



})
$('.pl3').mouseover(function() {
    $(this).find('.voice').css({
        display: 'block'
    })



})
$('.pl4').mouseover(function() {
    $(this).find('.voice').css({
        display: 'block'
    })



})
$('.pl5').mouseover(function() {
    $(this).find('.voice').css({
        display: 'block'
    })



})
$('.play-item').mouseout(function() {
    $(this).find('.voice').css({
        display: 'none'
    })



})
var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0
$('.vo1').click(function() {
    count1++;
    if (count1 % 2 == 0) {
        $(this).find('.voice-on').css({
            display: 'none'
        })
        $(this).find('.voice-off').css({
            display: 'block'
        })
        $('.pl1').find("video").prop("muted", true)
    } else {
        $(this).find('.voice-on').css({
            display: 'block'
        })
        $(this).find('.voice-off').css({
            display: 'none'
        })
        $('.pl1').find("video").prop("muted", false)
    }


})
$('.vo2').click(function() {
    count2++;
    if (count2 % 2 == 0) {
        $(this).find('.voice-on').css({
            display: 'none'
        })
        $(this).find('.voice-off').css({
            display: 'block'
        })
        $('.pl2').find("video").prop("muted", true)

    } else {
        $(this).find('.voice-on').css({
            display: 'block'
        })
        $(this).find('.voice-off').css({
            display: 'none'
        })
        $('.pl2').find("video").prop("muted", false)
    }


})
$('.vo3').click(function() {
    count3++;
    if (count3 % 2 == 0) {
        $(this).find('.voice-on').css({
            display: 'none'
        })
        $(this).find('.voice-off').css({
            display: 'block'
        })
        $('.pl3').find("video").prop("muted", true)
    } else {
        $(this).find('.voice-on').css({
            display: 'block'
        })
        $(this).find('.voice-off').css({
            display: 'none'
        })
        $('.pl3').find("video").prop("muted", false)
    }


})
$('.vo4').click(function() {
    count4++;
    if (count4 % 2 == 0) {
        $(this).find('.voice-on').css({
            display: 'none'
        })
        $(this).find('.voice-off').css({
            display: 'block'
        })
        $('.pl4').find("video").prop("muted", true)
    } else {
        $(this).find('.voice-on').css({
            display: 'block'
        })
        $(this).find('.voice-off').css({
            display: 'none'
        })
        $('.pl4').find("video").prop("muted", false)
    }


})
$('.vo5').click(function() {
    count5++;
    if (count5 % 2 == 0) {
        $(this).find('.voice-on').css({
            display: 'none'
        })
        $(this).find('.voice-off').css({
            display: 'block'
        })
        $('.pl5').find("video").prop("muted", true)
    } else {
        $(this).find('.voice-on').css({
            display: 'block'
        })
        $(this).find('.voice-off').css({
            display: 'none'
        })
        $('.pl5').find("video").prop("muted", false)
    }


})