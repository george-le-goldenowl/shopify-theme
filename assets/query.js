!(function($) {
    'use strict';
    const tatoo = {
    	elements: undefined,
    	init: function() {
    		this.elements = {
    			home: {
    				slide: $('.homepage-slide')
    			}
    		};

    		this.elements.home.slide.on('load', this.fetchData.bind());
    	},
    	fetchData: function() {
    		console.log(this);
    	}
    };
    tatoo.init();
})(jQuery);