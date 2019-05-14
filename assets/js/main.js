jQuery(function($) {
    // Smooth Scrolling
    $(".backtop a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    // Show - Hide Back To Top Button
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $(".backtop").addClass("show");
        } else {
            $(".backtop").removeClass("show");
        }
    });
    $(".backtop").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    // Sticky Header
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        var h = $("#header").height();
        if (y > h) {
            $("#header").addClass("is-sticky");
        } else {
            $("#header").removeClass("is-sticky");
        }
    });
    // Banner Carousel
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Hot Products Carousel
    $('.hot-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // Gallery Carousel
    $('.gallery-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Related Products Carousel
    $('.related-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // IG Carousel
    $('.ig-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    // Show/Hide Search Box
    $('.search-btn').click(function(){
        $('.desktop-search').addClass('show');
    });
    $('.close-search').click(function(){
        $('.desktop-search').removeClass('show');
    });
    // Quickview
    $('.widget-hotproduct .more').click(function(){
        $('.quickview').fadeIn();
    });
    $('.quickview h3 span').click(function(){
        $('.quickview').fadeOut();
    });
    // Product Gallery
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-for1',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // Show/ hide menu mobile
    $('.menu-click, .search-btn-mobile').click(function(){
        $('.menu-popup').css('display','block');
    });
    $('.menu-close').click(function(){
        $('.menu-popup').css('display','none');
    });
    // Show user
    $('#header .user-btn, #header .acc-btn').click(function(){
        $('.user-popup').addClass('shown');
    });
    // Menu accordion
    $(".toggle").click(function(e) {
        e.preventDefault();
        if ($('.menu-sub').is(':visible')) {
            $(".menu-sub").slideUp(300);
            $(".plus").removeClass('minus');
        }
        if ($(this).next(".menu-sub").is(':visible')) {
            $(this).next(".menu-sub").slideUp(300);
            $(this).children(".plus").removeClass('minus');
        } else {
            $(this).next(".menu-sub").slideDown(300);
            $(this).children(".plus").addClass('minus');
        }
    });
    // Profile popup
    $('.user-btn-mobile').click(function(){
        $('.profile-popup').addClass('shown');
    });
    // Footer accordion
    $(".footer-column > .title_mb").click(function(e) {
        e.preventDefault();
        if ($('.footer-content').is(':visible')) {
            $(".footer-content").slideUp(300);
            $(".next").removeClass('down');
        }
        if ($(this).next(".footer-content").is(':visible')) {
            $(this).next(".footer-content").slideUp(300);
            $(this).children(".next").removeClass('down');
        } else {
            $(this).next(".footer-content").slideDown(300);
            $(this).children(".next").addClass('down');
        }
    });
    $('.zoom_01').elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
    zoomWindowFadeIn: 200,
    zoomWindowFadeOut: 200
   });
});
$(document).mouseup(function(e) {
    if (!$(".desktop-search").is(e.target) && $(".desktop-search").has(e.target).length === 0) {
        $(".desktop-search").removeClass("show");
    }
});
$(document).mouseup(function(a) {
    if (!$(".user-popup").is(a.target) && $(".user-popup").has(a.target).length === 0) {
        $(".user-popup").removeClass("shown");
    }
});
$(document).mouseup(function(b) {
    if (!$(".menu-content").is(b.target) && $(".menu-content").has(b.target).length === 0) {
        $(".menu-popup").css('display','none');
    }
});
$(document).mouseup(function(d) {
    if (!$(".profile-content").is(d.target) && $(".profile-content").has(d.target).length === 0) {
        $(".profile-popup").removeClass('shown');
    }
});