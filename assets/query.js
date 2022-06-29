!(function($) {
    'use strict';
    const tatoo = {
    	elements: undefined,
    	init: function() {
    		this.elements = {
    			homeslide: document.querySelector('.homepage-slide')
    		};

    		this.elements.homeslide.addEventListener('onload', this.fetchData.bind(this));
    	},
    	fetchData: function() {
    		console.log(this);
    	}
    };
    tatoo.init();
})(jQuery);