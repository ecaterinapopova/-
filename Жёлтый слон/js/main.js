$(window).on('load', function(){
    setTimeout(function() {
             $('.header .third').css({
                 'opacity': 1
             });
        }, 500);
});

$(".cover").click(function(){
    $(this).toggleClass("cover-click")
    });

$(".unit").click(function(){
    $(this).toggleClass("unit-click")
    });

$(".button-upload").click(function(){
    $(this).toggleClass("upload-click")
    });
