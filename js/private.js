// $(document).ready(function() {
//     if ($('.back-top').length) {
//         var scrollTrigger = 300,
//             backToTop = function () {
//                 var scrollTop = $(window).scrollTop();
//                 if (scrollTop > scrollTrigger) {
//                     $('.back-top').addClass('show');

//                 } else {
//                     $('.back-top').removeClass('show');
//                 }
//             };
//         backToTop();
//         $(window).on('scroll', function () {
//             backToTop();
//         });

//         $('.back-top').on('click', function (e) {
//             e.preventDefault();
//             $('html,body').animate({
//                 scrollTop: 0
//             }, 700);
//         });
//     }
// })

$('.slide-camp').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '<button class="slick-next"><img src="images/btn-right.png" alt=""></button>',
    nextArrow: '<button class="slick-prev"><img src="images/btn-left.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

