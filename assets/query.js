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