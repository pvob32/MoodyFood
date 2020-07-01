$(function() {

    var $topLine = $('#top__line'),
        $headerH = $('#header').innerHeight(),
        $menuH = $('#menu').innerHeight(),
        scrollOffset = $(window).scrollTop();


    // header fixed
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= $headerH) {

            $topLine.addClass('fixed')

        } else {
            $topLine.removeClass('fixed')
        }

    };

    //smoot scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll'),
            scrollOffset = $(blockId).offset().top;

        $('#nav a').removeClass('menu__check--active');
        $this.addClass('menu__check--active');

        $("html, body").animate({
            scrollTop: scrollOffset
        }, 500);

    });

    //copy
    var d = new Date;



});