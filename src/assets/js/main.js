let variableImage = $(".image"),
    idSlider = $("#slider");

$(document).ready(function(){
    variableImage.width(idSlider.width()/5);
    $(".image:first-child").width(idSlider.width()/2);

    $(".item-img-1").each(function(){
        let src = $(this).attr("data-src");
        $(this).css({
            background:`url(assets/img/${src}) no-repeat`,
        })
    });

    variableImage.mouseover(function(){
        $(this).find(".item-img-1").css({
            opacity:1,
        });

        variableImage.width(idSlider.width()/4);
        variableImage.css({"z-index":"-999px"});

        $(this).css({"z-index":"999px"});
        $(this).width(idSlider.width()/3)
    });

    variableImage.mouseout(function(){
        $(this).find(".item-img-1").css({
            opacity:1
        });

        variableImage.width(idSlider.width()/5);
        $(".image:first-child").width(idSlider.width()/2);
        $(this).css({"z-index":0})
    });

    $(".image:last-child").mouseover(function(){
        $(this).find(".item-img-1").css({
            opacity: 1,
        });
        variableImage.width(idSlider.width()/5);
        variableImage.css({"z-index":"-999px"});

        $(this).css({"z-index":"999px"});
        $(this).width(idSlider.width()/2)
    });

    $(".image:first-child").mouseover(function(){
        $(this).find(".item-img-1").css({
            opacity: 1,
        });
        variableImage.css({"z-index":"-999px"});

        $(this).css({"z-index":"999px"});

        variableImage.width(idSlider.width()/5);
        $(".image:first-child").width(idSlider.width()/2);
    });
});

$('.main-navigation').click(function () {
    $('#aside1').addClass('active');
});

$('#main-navigation__mob-close-btn').click(function () {
   $('#aside1').removeClass('active');
});

$('.header__wrapper-burger').click(function () {
    $('#header').toggleClass('active');
    $('#burger').toggleClass('active');
});
