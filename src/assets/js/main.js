let variableImage = $(".image"),
    idSlider = $("#slider");

let isMobile = false;
$(document).ready( function() {
    if ($('body').width() <= 767.98) {
        isMobile = true;
    }

    if (isMobile) {
        variableImage.width(idSlider.width()/9);
        $(".image:first-child").width(idSlider.width()/1.5);
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

            variableImage.width(idSlider.width()/9);
            variableImage.css({"z-index":"-999px"});

            $(this).css({"z-index":"999px"});
            $(this).width(idSlider.width()/1.5)
        });
        variableImage.mouseout(function(){
            $(this).find(".item-img-1").css({
                opacity:1
            });

            variableImage.width(idSlider.width()/9);
            $(".image:first-child").width(idSlider.width()/1.5);
            $(this).css({"z-index":0})
        });
        $(".image:last-child").mouseover(function(){
            $(this).find(".item-img-1").css({
                opacity: 1,
            });
            variableImage.width(idSlider.width()/9);
            variableImage.css({"z-index":"-999px"});

            $(this).css({"z-index":"999px"});
            $(this).width(idSlider.width()/1.5)
        });
        $(".image:first-child").mouseover(function(){
            $(this).find(".item-img-1").css({
                opacity: 1,
            });
            variableImage.css({"z-index":"-999px"});

            $(this).css({"z-index":"999px"});

            variableImage.width(idSlider.width()/9);
            $(".image:first-child").width(idSlider.width()/1.5);
        });
    }

    if (!isMobile) {
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

            variableImage.width(idSlider.width()/5);
            variableImage.css({"z-index":"-999px"});

            $(this).css({"z-index":"999px"});
            $(this).width(idSlider.width()/2)
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
    }
});

$('.main-navigation').click(function () {
    $('#aside1').addClass('active');
    $('#app').addClass('active');
});

$('#main-navigation__mob-close-btn').click(function () {
   $('#aside1').removeClass('active');
    $('#app').removeClass('active');
});

$('.header__wrapper-burger').click(function () {
    $('#header').toggleClass('active');
    $('#burger').toggleClass('active');
});

let lastScrollTop = 0;
let sidebar = document.querySelector('#sidebar');
let wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('scroll', function() {
    let wrapperLast = wrapper.scrollTop;
    let sidebarLast = sidebar.scrollTop;

    sidebar.scrollTop = sidebarLast + (wrapperLast - lastScrollTop);

    lastScrollTop = wrapperLast;
}, false);

$('.news-company__btn-all').click(function () {
    $(this).removeClass('d-block').addClass('d-none');
    $('#news-company').addClass('block-hidden')
});

$('.news-company__btn-hide').click(function () {
    $('.news-company__btn-all').removeClass('d-none').addClass('d-block');
    $('#news-company').removeClass('block-hidden')
});