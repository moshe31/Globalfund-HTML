// Aos_animation
AOS.init({});

// Slick_Slider
$(document).ready(function(){
    $('.main_slider').slick({
      centerMode: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      centerPadding: '170px',
      responsive: [
          {
              breakpoint: 1700,
              settings: {
                centerPadding: '30px',
              }
            },
            {
              breakpoint: 1401,
              settings: {
                centerPadding: '100px',
              }
            },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              centerPadding: '00px',
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              centerPadding: '0px',
            }
          }
        ]
    });
  });