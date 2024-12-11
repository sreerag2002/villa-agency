$('.hero-banner__wrap').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',

    prevArrow: $('.left'),
    nextArrow: $('.right'),
    responsive: [
        {
          breakpoint: 600,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    


  });
 

