
(function ($) {
    $(document).ready(function () {
        $('.view-product-hot .views-row,.view-news-hot .views-row').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
         $('.region-header-top >section').matchHeight({
                    byRow: true,
                    property: 'height',
                    target: null,
                    remove: false
         });

        $('.view-videos .view-content').slick({
            dots          : false,
            infinite      : true,
            speed         : 500,
            slidesToShow  : 3,
            slidesToScroll: 2,
            responsive    : [{
                breakpoint: 1024,
                settings  : {
                    slidesToShow  : 3,
                    slidesToScroll: 1
                    // centerMode: true,

                }

            }, {
                breakpoint: 800,
                settings  : {
                    slidesToShow  : 3,
                    slidesToScroll: 2,
                    dots          : false,
                    infinite      : true

                }

            }, {
                breakpoint: 600,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 2,
                    dots          : false,
                    infinite      : true

                }
            }, {
                breakpoint: 480,
                settings  : {
                    slidesToShow  : 1,
                    slidesToScroll: 1,
                    dots          : false,
                    infinite      : true,
                    autoplay      : true,
                    autoplaySpeed : 2000
                }
            }]
        });
        $('.view-feedback .view-content').slick({
            dots          : false,
            infinite      : true,
            speed         : 500,
            slidesToShow  : 5,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            responsive    : [{
                breakpoint: 1024,
                settings  : {
                    slidesToShow  : 5,
                    slidesToScroll: 1
                    // centerMode: true,

                }

            }, {
                breakpoint: 800,
                settings  : {
                    slidesToShow  : 3,
                    slidesToScroll: 2,
                    dots          : false,
                    infinite      : true

                }

            }, {
                breakpoint: 600,
                settings  : {
                    slidesToShow  : 2,
                    slidesToScroll: 2,
                    dots          : false,
                    infinite      : true

                }
            }, {
                breakpoint: 480,
                settings  : {
                    slidesToShow  : 1,
                    slidesToScroll: 1,
                    dots          : false,
                    infinite      : true,
                    autoplay      : true,
                    autoplaySpeed : 2000
                }
            }]
        });
    })


})(jQuery)
