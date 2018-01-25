$(function () {
    $('.m2-btn p').each(function (index) {
        $(this).click(function () {
            $('.m2-btn p').removeClass('on2').eq(index).addClass('on2');
            $('.m2-show').hide().eq(index).show()
        })
    })
    $('.m2-two-btn li').each(function (index) {
        $(this).click(function () {
            $('.m2-two-btn li').removeClass('on3').eq(index).addClass('on3');
            $(this).parents('.m2-show').children('a').hide().eq(index).css('display','block')
        })
    })
    $('.m2-two-btn2 li').each(function (index) {
        $(this).click(function () {
            $('.m2-two-btn2 li').removeClass('on4').eq(index).addClass('on4');
            $(this).parents('.m2-show').children('a').hide().eq(index).css('display','block')
        })
    })

    $('.foot').click(function(){
        $('.zg-appointment').show();
        $('.zg-mask').show()
    })
    $('.zg-appointment em').click(function(){
        $('.zg-mask').hide();
        $('.zg-appointment').hide();
    })
})