/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var fixedScrollLayout = (function() {

	// cache and initialize some values
	function init(config) {

		// click on a navigation link: the body is scrolled to the position of the respective section
		config.$navlinks.on( 'click', function() {
			scrollAnim( config.$sections.eq( $( this ).index() ).offset().top, config );
			return false;
		});
		config.$navlinksBlack.on( 'click', function() {
			scrollAnim( config.$sections.eq( $( this ).index() ).offset().top, config );
			return false;
		});

		config.$sections.each(function(){
			var that = $(this);
			new Waypoint.Inview({
			  element: that,
			  enter: function(direction) {
			    changeNav(that, config);
			  }
			})
	})
		
	}

	// update the current navigation link
	function changeNav( $section, config ) {
		config.$navlinks.eq( config.currentLink ).removeClass( 'nav__element--current' );
		config.$navlinksBlack.eq( config.currentLink ).removeClass( 'nav__element--current' );
		config.currentLink = $section.index( 'section' );
		config.$navlinks.eq( config.currentLink ).addClass( 'nav__element--current' );
		config.$navlinksBlack.eq( config.currentLink ).addClass( 'nav__element--current' );
	}

	// function to scroll / animate the body
	function scrollAnim( top, config ) {
		config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
	}

	return { init : init };

})();