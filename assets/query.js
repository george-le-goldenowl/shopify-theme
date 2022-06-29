!(function($) {
    'use strict';
    const tatoo = {
    	elements: undefined,
    	init: function() {
    		this.elements = {
    			homeslide: document.querySelector('.homepage-slide')
    		};

    		// this.elements.homeslide.addEventListener('DOMContentLoaded', this.fetchData.bind(this));
    		document.addEventListener('shopify:section:load', function(event) {
    			console.log(event);
    		});
    	},
    	fetchData: function(e) {
    		console.log(e);
    	}
    };
    tatoo.init();
})(jQuery);