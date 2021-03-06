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

$('.score-slider-one').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-arrow-my-prev"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M5.62963 9L2 5M2 5L5.62963 1M2 5L17 5" stroke-width="2"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-arrow-my-next"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M11.3704 1L15 5M15 5L11.3704 9M15 5L-1.74846e-07 5" stroke-width="2"/>\n' +
        '    </svg></button>',
    asNavFor: '.score-slider-preview-one',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.score-slider-preview-one').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.score-slider-one',
    focusOnSelect: true,
    variableWidth: true,
});

$('.score-slider-two').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my slick-arrow-my-prev"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M5.62963 9L2 5M2 5L5.62963 1M2 5L17 5" stroke-width="2"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my slick-arrow-my-next"><svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M11.3704 1L15 5M15 5L11.3704 9M15 5L-1.74846e-07 5" stroke-width="2"/>\n' +
        '    </svg></button>',
    asNavFor: '.score-slider-preview-two',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('.score-slider-preview-two').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.score-slider-two',
    focusOnSelect: true,
    variableWidth: true,
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

$('.btn-basket-click').on('click', function () {
   $('.tooltip-box-basket').fadeToggle();
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

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
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


// clone block
if ($(".product .title-pc h1").length){
    $('.product .title-pc h1').clone().appendTo('.title-mobile');
}

if ($(".product .title-pc .article").length){
    $('.product .title-pc .article').clone().appendTo('.title-mobile');
}

if ($(".product .details-information").length){
    $('.product .details-information').clone().appendTo('.details-information-mobile');
}

if ($(".product .greeting-manager-box").length){
    $('.product .greeting-manager-box').clone().appendTo('.block-manager-mobile');
}

if ($(".product .services-additionally").length){
    $('.product .services-additionally').clone().appendTo('.block-manager-mobile');
}

if ($(".product .product-photo").length){
    $('.product .product-photo').clone().appendTo('.product-photo-mobile');
}

// show text
$('.link-view').on('click', function(e){
    e.preventDefault();

    let
        $this = $(this),
        content = $(this).parent().find('.box-text');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть');

        content.addClass('open');
    } else {
        $this.removeClass('trigger');
        $this.html('Показать целиком');

        content.removeClass('open');
    }
});

// view text
$('.btn-view-all').on('click', function(e){
    e.preventDefault();

    let
        $this = $(this),
        content = $(this).parent().find('.box-hidden-text');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть полное описание');

        content.addClass('active');
    } else {
        $this.removeClass('trigger');
        $this.html('Читать полное описание');

        content.removeClass('active');
    }
});

// active menu
// активная ссылка меню
$('.cabinet-menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).parent().addClass('active');
    }
});
// end

$.datepicker.setDefaults(
    {
        closeText: 'Закрыть',
        prevText: '',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });


// input date
$( function() {
    var dateFormat = "mm/dd/yy",
        from = $( ".from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( ".to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on( "change", function() {
                from.datepicker( "option", "maxDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );