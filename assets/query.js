!(function($) {
    'use strict';
    const tatoo = {
        elements: undefined,
        init: function() {
            document.addEventListener('DOMContentLoaded', function() {
                this.elements = {
                    home: {
                        slide: document.querySelector('.homepage-slide')
                    }
                };
                console.log(this.elements);
            });
        },
        fetchData: function() {
            console.log(this);
        }
    };
    tatoo.init();
})(jQuery);