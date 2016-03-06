function initPlugins(){
	new WOW().init();
	$('[data-typer-targets]').typer();
  window.$scene = $('#scene').parallax();
  $('#cbp-fbscroller > #dots').midnight();
}

/* Sets the time for the clock on the header */
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

function initLayout(){
	fixedScrollLayout.init({
		$sections : $( '#fixedScroller > section' ),
		$navlinks : $( '#fixedScroller .default a' ),
		$navlinksBlack : $( '#fixedScroller .black a' ),
		currentLink : 0,
		$body : $( 'html, body' ),
		animspeed : 650,
		animeasing : 'easeInOutExpo'
	});
}

function preloadImages(){
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
	});
}

function initNaturalLanguageForm(){
	window.form = $('#nl-form').clone();
	var counter = localStorage.getItem('visits');

	if (counter === null) {
		counter = 0;
	}

	$('[data-type="modal-trigger"]').on('click', function(){
		counter++;
		localStorage.setItem("visits", counter);

		if(counter>4){
			$('#counter').html(counter);
			$('#sherlockHolmes').show();
		}

		var formFullName = chance.name(),
				formName = formFullName.toLowerCase().split(" "),
				formEmail = formName[0]+"@"+formName[1]+".com";

		$('#formFullName').attr("placeholder",formFullName);
		$('#formEmail').attr("placeholder",formEmail);

		var nlform = new NLForm(document.getElementById( 'nl-form'));

		var actionBtn = $(this);
		var body = $("body");
		body.stop().animate({scrollTop:0}, '300', 'swing',function(){
			var scaleValue = retrieveScale(actionBtn.next('.modal-bg'));
			actionBtn.addClass('to-circle');
			actionBtn.next('.modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 
				function(){
				animateLayer(actionBtn.next('.modal-bg'), scaleValue, true);
					setTimeout(function(){
						$scene.parallax('disable');
						$('.main-layer').css("transform","");
					}, 300);
				});
			if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.modal-bg'), scaleValue, true);
		});

	});

	//trigger the animation - close modal window
	$('.section .modal-close').on('click', function(){
		closeModal();
	});

	$(window).on('resize', function(){
		//on window resize - update cover layer dimention and position
		if($('.section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
	});
}

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
		setTimeout(function(){
			$('#nl-form').replaceWith(window.form.clone());
			initFormSubmission();
		}, 400);
	});
	//if browser doesn't support transitions...
	if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.modal-bg'), 1, false);
}

function toggleFlag(){
	$('#flag').change(function(e){
		var lang = $(this).is(':checked') ? "en" : "es";
		window.location.search = "?lang="+lang;
		console.log(window.location.search);
	})
}

function validateForm(data){
	for (var i = 0; i<data.length; i++){
		if (data[i].value === "") return false
	}
	return true
}

function initFormSubmission(){
	var form = $('#nl-form');
	form.submit(function(e){
		e.preventDefault();
		return false;
	});
	[].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( btn, pos ) {
		new UIProgressButton( btn, {
			callback : function( instance ) {
				var data = form.serializeArray();
				var $formMessage = $('#formMessage'),
						$sherlockHolmes = $('#sherlockHolmes');

				$formMessage.slideUp();
				$formMessage.removeClass("error");

				isValid = validateForm(data);
				if (isValid){
					$.ajax({
						beforeSend: function(){
							// Fake progress since we're not really sending any heavy data
							var progress = 0;
							var interval = setInterval(function() {
								progress = Math.min( progress + Math.random() * 0.1, 1 );
								instance.setProgress( progress );

								if( progress === 1 ) {
									clearInterval( interval );
								}
							}, 100 );
						},
			      xhr: function() {
			        var xhr = new window.XMLHttpRequest();
			        xhr.addEventListener("progress", function(evt) {
			            if (evt.lengthComputable) {
			            		// once it's sent, make sure progress is set to 1
			                var percentComplete = (evt.loaded / evt.total);
			                instance.setProgress( percentComplete );
			            }
			       }, false);
			       return xhr;
			      },
			      url: '/',
			      data: data,
			      type: 'POST'
			    })
				  .error(function(jqXHR, exception) {
		        var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Not connected.\n Verify Network.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested page not found. [404]';
		        } else if (jqXHR.status == 500) {
		            msg = 'Internal Server Error [500].';
		        } else if (exception === 'parsererror') {
		            msg = 'Requested JSON parse failed.';
		        } else if (exception === 'timeout') {
		            msg = 'Time out error.';
		        } else if (exception === 'abort') {
		            msg = 'Ajax request aborted.';
		        } else {
		            msg = 'Uncaught Error.\n' + jqXHR.responseText;
		        }
				  	$formMessage.text(msg);
				  	$formMessage.addClass("error");
				  	$formMessage.slideDown("slow");
				    instance.stop(-1);
				  })
				  .success(function(data){
				  	$formMessage.text("Perfect! I'll be in touch soon.")
				  	$formMessage.slideDown("slow");
				  	$sherlockHolmes.slideUp("slow");
				  	instance.stop(1);
				  	localStorage.setItem("visits", 0);
				  });
			  } else{
			  	$formMessage.text("Did you complete all the fields?");
			  	$formMessage.addClass("error");
			  	$formMessage.slideDown("slow");
			  	instance.stop(-1);
			  }
			}
		});
	});
}

function printMessage(){
	var message = "<---- \n" +
								"Hey! This website is open source, feel free to check the source code at https://github.com/juanferreras/juanferreras.com" +
								"\n" + 
								"We're actually searching for front-end developers in Flioh! If you're interested, reach us out at jobs@flioh.com" + 
								"\n" + 
								"The only place you like your JavaScript is on server-side? That's fine, we're also looking for NodeJS back-end developers." +
								"\n" +
								"----> \n";
	console.log(message);
}

$("document").ready(function() {
	initPlugins();	
	refreshClock();

	initLayout();
	preloadImages();

	initNaturalLanguageForm();
	initFormSubmission();
	toggleFlag();

	printMessage();
});