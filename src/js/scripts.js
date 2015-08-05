new WOW().init();

$("document").ready(function() {

	$('[data-typer-targets]').typer();
    
    var $scene = $('#scene').parallax();

    $('#cbp-fbscroller > nav').midnight();
    
    function clock() { 
	  var t = moment(),
          s = t.seconds() * 6,
	      m = t.minutes() * 6 + s / 60,
	      h = t.hours() % 12 / 12 * 360 + (m / 12);
	  $(".hour").css("transform", "rotate(" + h + "deg)");
	  $(".minute").css("transform", "rotate(" + m + "deg)");
      $(".second").css("transform", "rotate(" + s + "deg)");
	}
	function refreshClock() {
	  clock(), setTimeout(refreshClock, 1000)
	}
	refreshClock(); 

	cbpFixedScrollLayout.init({
			// the cbp-fbscroller´s sections
			$sections : $( '#cbp-fbscroller > section' ),
			// the navigation links
			$navlinks : $( '#cbp-fbscroller .default a' ),
			// midnight black navigation links
			$navlinksBlack : $( '#cbp-fbscroller .black a' ),
			// index of current link / section
			currentLink : 0,
			// the body element
			$body : $( 'html, body' ),
			// the body animation speed
			animspeed : 650,
			// the body animation easing (jquery easing)
			animeasing : 'easeInOutExpo'
	});

	var images = $('img, .gravity, section');
	$.each(images, function(){
	var el = $(this),
	image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
	if(image && image !== '' && image !== 'none')
	    images = images.add($('<img>').attr('src', image));
	if(el.is('img'))
	    images = images.add(el);    
	});
	images.imagesLoaded(function() {
	  $('body').removeClass("loading");
	  $('.loading-spinner').fadeOut("slow");
	});

	var formFullName = chance.name(),
		formName = formFullName.toLowerCase().split(" "),
		formEmail = formName[0]+"@"+formName[1]+".com";

	$('#formFullName').attr("placeholder",formFullName);
	$('#formEmail').attr("placeholder",formEmail);

	var nlform = new NLForm( document.getElementById( 'nl-form' ) );

	$('[data-type="modal-trigger"]').on('click', function(){
		var actionBtn = $(this),
			scaleValue = retrieveScale(actionBtn.next('.modal-bg'));
		
		actionBtn.addClass('to-circle');
		actionBtn.next('.modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			animateLayer(actionBtn.next('.modal-bg'), scaleValue, true);
			$scene.parallax('disable');
		});

		//if browser doesn't support transitions...
		if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.modal-bg'), scaleValue, true);
	});

	//trigger the animation - close modal window
	$('.section .modal-close').on('click', function(){
		closeModal();
	});
	$(document).keyup(function(event){
		//if(event.which=='27') closeModal();
	});

	$(window).on('resize', function(){
		//on window resize - update cover layer dimention and position
		if($('.section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
	});

	function retrieveScale(btn) {
		var btnRadius = btn.width()/2,
			left = btn.offset().left + btnRadius,
			top = btn.offset().top + btnRadius - $(window).scrollTop(),
			scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

		btn.css('position', 'fixed').velocity({
			top: top - btnRadius,
			left: left - btnRadius,
			translateX: 0,
		}, 0);

		return scale;
	}

	function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
		var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
			maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
		return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
	}

	function animateLayer(layer, scaleVal, bool) {
		layer.velocity({ scale: scaleVal }, 400, function(){
			$('body').toggleClass('overflow-hidden', bool);
			(bool)
				? layer.parents('.section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
				: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
		});
	}

	function updateLayer() {
		var layer = $('.section.modal-is-visible').find('.modal-bg'),
			layerRadius = layer.width()/2,
			layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
			layerLeft = layer.siblings('.btn').offset().left + layerRadius,
			scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
		
		layer.velocity({
			top: layerTop - layerRadius,
			left: layerLeft - layerRadius,
			scale: scale,
		}, 0);
	}

	function closeModal() {
		var section = $('.section.modal-is-visible');
		section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			$scene.parallax('enable');
			$scene.parallax('updateLayers');
			animateLayer(section.find('.modal-bg'), 1, false);
		});
		//if browser doesn't support transitions...
		if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.modal-bg'), 1, false);
	}

	/*var delay = false;

	$(document).on('mousewheel DOMMouseScroll', function(event) {
	event.preventDefault();
	if(delay) return;

	delay = true;
	setTimeout(function(){delay = false},200)

	var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

	var a = document.getElementsByTagName('section');
	if(wd < 0) {
	  for(var i = 0 ; i < a.length ; i++) {
	    var t = a[i].getClientRects()[0].top;
	    if(t >= 40) break;
	  }
	}
	else {
	  for(var i = a.length-1 ; i >= 0 ; i--) {
	    var t = a[i].getClientRects()[0].top;
	    if(t < -20) break;
	  }
	}
	$('html,body').animate({
	  scrollTop: a[i].offsetTop
	}, 800, "easeInOutQuad");
	});*/

});