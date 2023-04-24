"use strict";


// Prealoder
function prealoader() {
    if ($('#loader').length) {
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    };
}



// Virtual Tour
$(".video-play").on('click', function(e) {
    e.preventDefault(); 
    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').fadeOut();
    //vidWrap.children('.video-play').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);
    $(".virtual_tour").addClass('virtual_tour_open');
});
$(".close").on('click', function(e) {
    e.preventDefault(); 
    $(".virtual_tour").removeClass('virtual_tour_open');

    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').fadeOut();
    //vidWrap.children('.video-play').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);
});

// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}

function jarallaxABS() {
    if ($(".jarallax").length) {
        $('.jarallax').jarallax({
            speed: 0.5,
        });
    };
}

// Theme-banner slider 
function BannerSlider() {
    if ($("#main-banner-slider").length) {
        $("#main-banner-slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7000,
            stopLoop: 'on',
            stopAfterLoops: 0,
            //stopAtSlide: 1,


            navigation: {
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                    hide_onmobile: false,
                    style: "uranus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,
                    tmp: '<span class="tp-bullet-inner"></span>'
                }

            },
            responsiveLevels: [2220, 1680, 1199, 991, 767, 574],
            gridwidth: [1680, 1365, 970, 770, 350, 350],
            gridheight: [840, 540, 450, 400, 350, 300],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}


// Theme Slider
function themeSlider() {
    if ($('.theme-slider').length) {
        $('.theme-slider').owlCarousel({
            loop: true,
            nav: false,
            navText: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                651: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        })
    }
}





// toggle menu for mobile
function mobileDropdown() {
    if ($('.main-menu-wrapper').length) {
        $('.main-menu-wrapper nav ul li.dropdown-holder').append(function() {
            return '<i class="fa fa-angle-down" aria-hidden="true"></i>';
        });
        $('.main-menu-wrapper nav ul li.dropdown-holder .fa').on('click', function() {
            $(this).parent('li').children('ul').slideToggle();
        });
    }
}


// Accordion panel
function themeAccrodion() {
    if ($('.theme-accordion > .panel').length) {
        $('.theme-accordion > .panel').on('show.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.addClass("active-panel");

        });

        $('.theme-accordion > .panel').on('hidden.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.removeClass("active-panel");
            //setProgressBar(heading.get(0).id);
        });

    };
}

// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        removePlaceholder();
        jarallaxABS();
        BannerSlider();

        wowAnimation();
        themeSlider();
        //scrollToTop ();
        mobileDropdown();
        themeAccrodion();
    })(jQuery);

});


// Window load function
jQuery(window).on('load', function() {
    (function($) {
        prealoader()
    })(jQuery);
});





// Scroll to top
$(document).ready(function() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    }

    $(".enquiry_form_toggler").click(function(e) {
        e.preventDefault();
        $(".enquiry_form_wrapper").addClass('enquiry_form_open');
    });
    $(".rf-cbtn").click(function() {
        $(".enquiry_form_wrapper").removeClass('enquiry_form_open');
    });

    // WOW animation 

    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 50, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        });
        wow.init();
    }

    /*************Big / Mobile Navigation**********/
    var ww = $(window).width();
    $(".MobileNav").click(function(e) {
        setTimeout(function() {
            $('.mobile-nav').addClass('mobileNavOpen');
        }, 200);
        setTimeout(function() {
            $('.floating-nav').addClass('mobileNavOpen');
        }, 300);

        $('.navBg').addClass('navBgOpen');
    });

    if (ww > 992) {
        $(".hasDrop > a").click(function(e) {
            e.preventDefault();
            $('.MobileNavWrapper ul li ul').removeClass('gh');
            $('.MobileNavWrapper ul li a').removeClass('ActiveNav');

            $(this).parent('li').find('ul').addClass('gh');
            $(this).addClass('ActiveNav');
        });


    }
    $(".navToggler").click(function(e) {
        $('.mobile-nav').removeClass('mobileNavOpen');
        $('.navBg').removeClass('navBgOpen');
        $('.floating-nav').removeClass('mobileNavOpen');

        $('.MobileNavWrapper ul li ul').removeClass('gh');
        $('.MobileNavWrapper ul li a').removeClass('ActiveNav');
    });
    if (ww < 992) {
        // var allUls = $('.MobileNavWrapper ul li ul').hide();
        // $('.hasDrop a').click(function() {
        //alert('hi');
        // allUls.slideUp();
        // $(this).parent().find('ul').slideDown();
        // $(this).next().slideDown();
        // return false;
        // });

        $("#Accordion a").click(function() {
            var link = $(this);
            var closest_ul = link.closest("ul");
            var parallel_active_links = closest_ul.find(".active")
            var closest_li = link.closest("li");
            var link_status = closest_li.hasClass("active");
            var count = 0;

            closest_ul.find("ul").slideUp(function() {
                if (++count == closest_ul.find("ul").length)
                    parallel_active_links.removeClass("active");
            });

            if (!link_status) {
                closest_li.children("ul").slideDown();
                closest_li.addClass("active");
            }
        })
    }

});