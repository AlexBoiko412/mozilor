$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.menu, .after, .before, .bur_span,.navlist').toggleClass('active');
    });
});


// scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('.scroll-top').fadeIn();
    } else {
    $('.scroll-top').fadeOut();
    }
});

$('.scroll-top').click(function () {
    $("html, body").animate({
    scrollTop: 0
    }, 600);
    return false;
});
    
    