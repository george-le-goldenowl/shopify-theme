!(function($) {
    'use strict';
    class LocalizationQuery {
        constructor() {
            this.elements = {
                homeslide: $('#homepage-slide')
            };
            this.elements.homeslide.addEventListener('onload', this.fetchData.bind(this));
        }

        fetchData() {
            console.log(this)
        }
    }
    new LocalizationQuery();
})(jQuery);