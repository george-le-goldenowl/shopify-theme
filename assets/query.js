!(function($) {
    'use strict';
    const tatoo = {
    	elements: undefined,
    	init: function() {
    		this.elements = {
    			homeslide: document.querySelector('.homepage-slide')
    		};

    		// this.elements.homeslide.addEventListener('DOMContentLoaded', this.fetchData.bind(this));
    		document.addEventListener('shopify:section:load', this.fetchData.bind(event));
    	},
    	fetchData: function() {
    		console.log(this);
    	}
    };
    tatoo.init();
})(jQuery);