!(function($) {
    'use strict';
    const tatoo = {
        query: undefined,
        init: function() {
            document.addEventListener('DOMContentLoaded', function() {
                this.query = {
                    home: {
                        endpoint: ''
                    }
                };

            });
        },
        fetchData: function() {
            console.log(this);
        }
    };
    tatoo.init();
})(jQuery);