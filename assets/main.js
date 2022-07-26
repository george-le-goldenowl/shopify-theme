jQuery(function () {
    jQuery(".js-slider-top").slick({ dots: !0, arrows: !1, infinite: !0 }),
        jQuery(".js-review").slick({ dots: !1, infinite: !1, speed: 300, slidesToShow: 2, slidesToScroll: 2, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }),
        $(".js-product-detail").slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, fade: !0, asNavFor: ".js-product-detail-nav" }),
        $(".js-product-detail-nav").slick({ slidesToShow: 3, slidesToScroll: 1, arrows: !0, asNavFor: ".js-product-detail" }),
        $(".js-close-menu").click(function (a) {
            $(".navbar-collapse").removeClass("show");
        });
});
