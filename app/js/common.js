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
});

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