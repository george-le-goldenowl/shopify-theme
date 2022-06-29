!(function($) {
    'use strict';
    const tatoo = {
    	elements: undefined,
    	init: function() {
    		this.elements = {
    			home: {
    				slide: $(document.body).find('.homepage-slide')
    			}
    		};

    		document.addEventListener('DOMContentLoaded', function() {
    			console.log(this.elements);
    		});
    	},
    	fetchData: function() {
    		console.log(this);
    	}
    };
    tatoo.init();
})(jQuery);