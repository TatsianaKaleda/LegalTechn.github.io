$(document).ready(function(){
    $('.multiple-items').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});
