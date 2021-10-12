$(document).ready(function () {
    $('.popup-link').magnificPopup({
        callbacks: {
            open: function () {
                $('.slider').slick({
                    arrows: true,
                    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/buy-arrow-left.png" alt=""><span>назад</span></button>',
                    nextArrow: '<button class="slick-arrow slick-next"><span>вперед</span><img src="images/buy-arrow-right.png" alt=""></button>',
                    dots: false,
                    infinite: false,
                });
            }
        }
    });
    $("#phone").mask("+7 (999) 999-99-99");


    $(".popup-link").on("click", function () {
        $(".slick-arrow").hide();
        $(".slick-dots").hide();
        $(".slider-item-two").hide();
        $(".slider-item-three").hide();

    });

    $(".sum__num-btn").on("click", function () {
        $(".slider-buy").hide();
        $(".slick-arrow").show();
        $(".slick-dots").show();
        $(".slider-item-two").show();
        $(".slider-item-three").show();
        
    });

    $('.slider').on('click','.slick-next',function(){
        $(this).hide();
    });

    $('.slider').on('click','.slick-prev',function(){
        $('.slick-next').show();
    });

    $('.variant').on('click', function() {
        $(this).toggleClass('active')
    });


});