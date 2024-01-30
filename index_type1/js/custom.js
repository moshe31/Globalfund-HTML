// Aos_animation
AOS.init({});

// Slick_slider
$(document).ready(function(){
    $('.slick_blog').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
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
  });