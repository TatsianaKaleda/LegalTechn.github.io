$(document).ready(function(){
    $('.multiple-items').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});
