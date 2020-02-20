// (function(){
//     var a = document.querySelector('#aside1'), b = null, K = null, Z = 0, P = 0, N = 0;  // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
//     window.addEventListener('scroll', Ascroll, false);
//     document.body.addEventListener('scroll', Ascroll, false);
//     function Ascroll() {
//         var Ra = a.getBoundingClientRect(),
//             R1bottom = document.querySelector('#article').getBoundingClientRect().bottom;
//         if (Ra.bottom < R1bottom) {
//             if (b == null) {
//                 var Sa = getComputedStyle(a, ''), s = '';
//                 for (var i = 0; i < Sa.length; i++) {
//                     if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//                         s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//                     }
//                 }
//                 b = document.createElement('div');
//                 b.className = "stop";
//                 b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//                 a.insertBefore(b, a.firstChild);
//                 var l = a.childNodes.length;
//                 for (var i = 1; i < l; i++) {
//                     b.appendChild(a.childNodes[1]);
//                 }
//                 a.style.height = b.getBoundingClientRect().height + 'px';
//                 a.style.padding = '0';
//                 a.style.border = '0';
//             }
//             var Rb = b.getBoundingClientRect(),
//                 Rh = Ra.top + Rb.height,
//                 W = document.documentElement.clientHeight,
//                 R1 = Math.round(Rh - R1bottom),
//                 R2 = Math.round(Rh - W);
//             if (Rb.height > W) {
//                 if (Ra.top < K) {  // скролл вниз
//                     if (R2 + N > R1) {  // не дойти до низа
//                         if (Rb.bottom - W + N <= 0) {  // подцепиться
//                             b.className = 'sticky';
//                             b.style.top = W - Rb.height - N + 'px';
//                             Z = N + Ra.top + Rb.height - W;
//                         } else {
//                             b.className = 'stop';
//                             b.style.top = - Z + 'px';
//                         }
//                     } else {
//                         b.className = 'stop';
//                         b.style.top = - R1 +'px';
//                         Z = R1;
//                     }
//                 } else {  // скролл вверх
//                     if (Ra.top - P < 0) {  // не дойти до верха
//                         if (Rb.top - P >= 0) {  // подцепиться
//                             b.className = 'sticky';
//                             b.style.top = P + 'px';
//                             Z = Ra.top - P;
//                         } else {
//                             b.className = 'stop';
//                             b.style.top = - Z + 'px';
//                         }
//                     } else {
//                         b.className = '';
//                         b.style.top = '';
//                         Z = 0;
//                     }
//                 }
//                 K = Ra.top;
//             } else {
//                 if ((Ra.top - P) <= 0) {
//                     if ((Ra.top - P) <= R1) {
//                         b.className = 'stop';
//                         b.style.top = - R1 +'px';
//                     } else {
//                         b.className = 'sticky';
//                         b.style.top = P + 'px';
//                     }
//                 } else {
//                     b.className = '';
//                     b.style.top = '';
//                 }
//             }
//             window.addEventListener('resize', function() {
//                 a.children[0].style.width = getComputedStyle(a, '').width
//             }, false);
//         }
//     }
// })();


let variableImage = $(".image"),
    idSlider = $("#slider");

$(document).ready(function(){
    variableImage.width(idSlider.width()/5);
    $(".image:first-child").width(idSlider.width()/2);

    // $(window).resize(function(){
    //     variableImage.width(idSlider.width()/5);
    //     $(".image:first-child").width(idSlider.width()/2);
    // });

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
        $(this).width(idSlider.width()/1.5)
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





