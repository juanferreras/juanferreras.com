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

		// 2 waypoints defined:
		// First one when we scroll down: the current navigation link gets updated. 
		// A `new section´ is reached when it occupies more than 70% of the viewport
		// Second one when we scroll up: the current navigation link gets updated. 
		// A `new section´ is reached when it occupies more than 70% of the viewport
		config.$sections.waypoint( function( direction ) {
			if( direction === 'down' ) { changeNav( $( this ), config ); }
		}, { offset: '30%' } ).waypoint( function( direction ) {
			if( direction === 'up' ) { changeNav( $( this ), config ); }
		}, { offset: '-30%' } );

		// on window resize: the body is scrolled to the position of the current section
		$( window ).on( 'debouncedresize', function() {
			scrollAnim( config.$sections.eq( config.currentLink ).offset().top, config );
		} );
		
	}

	// update the current navigation link
	function changeNav( $section, config ) {
		config.$navlinks.eq( config.currentLink ).removeClass( 'current' );
		config.$navlinksBlack.eq( config.currentLink ).removeClass( 'current' );
		config.currentLink = $section.index( 'section' );
		config.$navlinks.eq( config.currentLink ).addClass( 'current' );
		config.$navlinksBlack.eq( config.currentLink ).addClass( 'current' );
	}

	// function to scroll / animate the body
	function scrollAnim( top, config ) {
		config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
	}

	return { init : init };

})();