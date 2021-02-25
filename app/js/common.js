$('.sales-slider').slick({
    slidesToShow: 2,
    dots: true,
    appendArrows: '.sales-slider__nav',
    appendDots: '.sales-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M5.62963 9L2 5M2 5L5.62963 1M2 5L17 5" stroke-width="2"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M11.3704 1L15 5M15 5L11.3704 9M15 5L-1.74846e-07 5" stroke-width="2"/>\n' +
        '    </svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.reviews-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false
        });
    } else {
        $(".reviews-slider.slick-initialized").slick("unslick");
    }
});
// slick active

// mask
$('[name="phone"]').mask('+7(999)-999-99-99');


// dropdown menu
$(document).on('click', '.dropdown-menu-filter', function (e) {
    $(this).hasClass('show') && e.stopPropagation(); // This replace if conditional.
});

// tooltip
$('.tooltip-btn').on('click', function () {
   $(this).siblings('.tooltip-box').fadeToggle();
});

$('.tooltip-box .btn-close').on('click', function () {
    $(this).parents('.tooltip-box').fadeOut();
});

// mobile sub menu
$('.mobile-menu__drop-item').on('click', function (e) {
    e.preventDefault();

    let id = $(this).attr('data-item'),
        content = $('.mobile-menu__dropdown[data-item="'+ id +'"]');

    $('.mobile-menu__dropdown.active').removeClass('active'); // 3
    content.addClass('active');
});

$('.mobile-menu__dropdown .btn-close').on('click', function () {
    $(this).parents('.mobile-menu__dropdown').removeClass('active');
});

// scroll up
$("body").on("click", ".btn-scroll-up", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});



// menu mobile dropdown
let autocollapse = function (menu,maxHeight) {

    let nav = $(menu);
    let navHeight = nav.innerHeight();
    if (navHeight >= maxHeight) {

        $(menu + ' .dropdown').removeClass('d-none');
        $(".header-menu").removeClass('w-auto').addClass("w-100");

        while (navHeight > maxHeight) {
            //  add child to dropdown
            var children = nav.children(menu + ' li:not(:last-child)');
            var count = children.length;
            $(children[count - 1]).prependTo(menu + ' .dropdown-menu');
            navHeight = nav.innerHeight();
        }
        $(".header-menu").addClass("w-auto").removeClass('w-100');

    }
    else {

        let collapsed = $(menu + ' .dropdown-menu').children(menu + ' li');

        if (collapsed.length===0) {
            $(menu + ' .dropdown').addClass('d-none');
        }

        while (navHeight < maxHeight && (nav.children(menu + ' li').length > 0) && collapsed.length > 0) {
            //  remove child from dropdown
            collapsed = $(menu + ' .dropdown-menu').children('li');
            $(collapsed[0]).insertBefore(nav.children(menu + ' li:last-child'));
            navHeight = nav.innerHeight();
        }

        if (navHeight > maxHeight) {
            autocollapse(menu,maxHeight);
        }
    }
};

$(document).ready(function () {
    // when the page loads
    autocollapse('#nav',25);
    // when the window is resized
    $(window).on('resize', function () {
        autocollapse('#nav',25);
    });
});

