document.addEventListener("DOMContentLoaded", function (event) {
    //timer
    var fullTime = new Date().getTime() + 13500000; //3:46:40
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
            '<div class="timer__wrapp">' +
            '<span class="timer__item time__hours">%H</span>' +
            '<span class="timer__item timer__colon ">:</span>' +

            '</div>' +
            '<div class="timer__wrapp">' +
            '<span class="timer__item time__minutes">%M</span>' +
            '<span class="timer__item  timer__colon ">:</span>' +
            '</div>' +
            '<div class="timer__wrapp">' +
            '<span class="timer__item time__seconds">%S</span>' +

            '</div>'));
    });
    $(window).scroll(function (event) {
        var top = $(window).scrollTop();
        var heightSection = $('#sec-one').innerHeight();

        if (top >= heightSection) {
            $('.button-scroll').addClass('active')
        } else {
            $('.button-scroll').removeClass('active')
        }
    });




    $(document).mouseleave(function(e){
        if (e.clientY < 10) {
            $('.pop-up-bg').addClass('active');
        }
    });

    $('.close-js').on('click', function (event) {
        event.preventDefault();
        $('.pop-up-bg').removeClass('active');
    });

    $('.compos__item, .advan__wrapp').on('click', function () {

        if( $(this).hasClass('active')){
            $(this).removeClass('active')

        }else{
            $('.compos__item, .advan__wrapp').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
        }
    });

//     //плавный скролл
    $(".order,.button-scroll ,.pop-up-scroll-js").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


});