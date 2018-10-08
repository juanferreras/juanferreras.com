function initPlugins(){
	window.$parallax = $('.parallax').parallax();
	$('[data-typer-targets]').typer();
  $('.nav--dots').midnight();
}

/* Sets the time for the clock on the header */
function clock() { 
	var t = moment(),
	    s = t.seconds() * 6,
	    m = t.minutes() * 6 + s / 60,
	    h = t.hours() % 12 / 12 * 360 + (m / 12);
	$(".clock__hour").css("transform", "rotate(" + h + "deg)");
	$(".clock__minute").css("transform", "rotate(" + m + "deg)");
	$(".clock__second").css("transform", "rotate(" + s + "deg)");
}
function refreshClock() {
  clock(), setTimeout(refreshClock, 1000)
}

function initLayout(){
	fixedScrollLayout.init({
		$sections : $( '#main > section' ),
		$navlinks : $( '#main .default a' ),
		$navlinksBlack : $( '#main .nav--black a' ),
		currentLink : 0,
		$body : $( 'html, body' ),
		animspeed : 650,
		animeasing : 'easeInOutExpo'
	});
}

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function replaceBirthday(){
	var myAge = _calculateAge(new Date(1995, 3, 29)); // months start from 0 so April is 3 instead of 4
	var updatedText = $('.biography__intro').text().replace('%AGE%', myAge);
	$('.biography__intro').text(updatedText);
}
replaceBirthday();

function preloadImages(){
	var images = $('img, .parallax__content, section, .about__background, .footer__background');
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
	var counter = localStorage.getItem('jf_form-visits');

	if (counter === null) {
		counter = 0;
	}

	$('[data-type="modal-trigger-alt"]').on('click', function(){
		$('[data-type="modal-trigger"]').click();
	});

	$('[data-type="modal-trigger"]').on('click', function(){
		if (localStorage.getItem("jf_form-visits") == 0) counter = 0;
		counter++;
		localStorage.setItem("jf_form-visits", counter);

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
		handleFormUsingTabs();
		$('.nl-field-toggle').on("click", updateTab);

		var actionBtn = $(this);
		var body = $("body");
		body.stop().animate({scrollTop:0}, '300', 'swing',function(){
			var scaleValue = retrieveScale(actionBtn.next('.modal__bg'));
			actionBtn.addClass('to-circle');
			actionBtn.next('.modal__bg').addClass('modal__bg--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 
				function(){
				animateLayer(actionBtn.next('.modal__bg'), scaleValue, true);
					setTimeout(function(){
						$parallax.parallax('disable');
						$('.parallax__layer--main').css("transform","");
					}, 300);
				});
			if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.modal__bg'), scaleValue, true);
		});

	});

	//trigger the animation - close modal window
	$('.modal__close').on('click', function(){
		closeModal();
	});

	$(window).on('resize', function(){
		//on window resize - update cover layer dimention and position
		if($('.modal--visible').length > 0) window.requestAnimationFrame(updateLayer);
	});
}

window.currentTab = -1;

function updateTab(){
	var $inputs = $('.nl-field');
	currentTab = findIndexWithClass($inputs, 'nl-field-open');
}

function findIndexWithClass($inputs, hasClass){
	for (var i = 0; i<$inputs.length; i++){
		var $input = $($inputs[i]);
		if ($input.hasClass(hasClass)) {
			return i;
		}
	}
	return -1;
}

function handleFormUsingTabs(){
	var $inputs = $('.nl-field');
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			// fix displacement on modal on focus
			$('input').on('blur', function(){
				$('body').scrollTop(0);
			})
	}

	updateTab();

	$('body').on('keydown.tabs', function(e) {
	    if (e.keyCode == 9) {
	        e.preventDefault();

	        if (!e.shiftKey){
	        	currentTab++;
	        	if (currentTab > $inputs.length+1) currentTab = 0;
	        } else{
	        	currentTab--;
	        	if (currentTab < 0) currentTab = $inputs.length+1;
	        }

	        // emit event to close all fields
	        $('.nl-overlay')[0].click();

	        if (currentTab >= $inputs.length){
	        	if (currentTab == 4){
	        		$('#progress-button > button')[0].focus();
	        	}
	        	if (currentTab == 5){
	        		$('.modal__close')[0].focus();
	        	}
	        } else{
	        	// emit event to open current tab input
		        var $inputToOpen = $($inputs[currentTab]);
		        var $inputToToggle = $inputToOpen.find('.nl-field-toggle');
		        $inputToToggle[0].click();

		        // if dropdown bind new event listeners for arrows
		        var isDropdown = $inputToOpen.hasClass("nl-dd");
		        if (isDropdown) handleFormUsingArrows($inputToOpen)
		       	else $('body').off('.arrows');
	        } 
	    }
	    if (e.keyCode == 27){
	    	$('.nl-overlay')[0].click();
	    }
	});
}

function handleFormUsingArrows(input){
	$('body').off('.arrows');
	var $li = $(input).find("ul > li");
	var selectedIndex = findIndexWithClass($li, 'nl-dd-checked');

	$('body').on('keydown.arrows', function(e) {
		if ( e.keyCode == 40 ) {
			selectedIndex++;
			if (selectedIndex>$li.length-1) selectedIndex = 0;
			$li.removeClass("nl-dd-focus");
			$($li[selectedIndex]).addClass("nl-dd-focus");
		}
		if ( e.keyCode == 38 ) {
			selectedIndex--;
			if (selectedIndex<0) selectedIndex = $li.length-1;
			$li.removeClass("nl-dd-focus");
			$($li[selectedIndex]).addClass("nl-dd-focus");
		}
		if ( e.keyCode == 13 ) {
			$($li[selectedIndex])[0].click();
		}
		if ( e.keyCode == 27 || e.keyCode == 9) {
			$li.removeClass("nl-dd-focus");
		}
	})
}

function retrieveScale(btn) {
	var btnRadius = btn.width()/2,
			left = $(window).width()/2, // btn.offset().left/2 + btnRadius,
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
		$('body').toggleClass('body--frozen', bool);
		(bool)
			? layer.parents('.modal').addClass('modal--visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
			: layer.removeClass('modal__bg--visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
	});
}

function updateLayer() {
	var layer = $('.modal.modal--visible').find('.modal__bg'),
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
	var section = $('.modal.modal--visible');
	$('body').off('.tabs');
	section.removeClass('modal--visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		$parallax.parallax('enable');
		$parallax.parallax('updateLayers');
		animateLayer(section.find('.modal__bg'), 1, false);
		setTimeout(function(){
			$('#nl-form').replaceWith(window.form.clone());
			initFormSubmission();
		}, 400);
	});
	//if browser doesn't support transitions...
	if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.modal__bg'), 1, false);
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
				var $formMessage = $('.formMessage'),
					$errorValues = $('#errorValues'),
					$errorServer = $('#errorServer'),
					$successMessage = $('#success'),
					$sherlockHolmes = $('#sherlockHolmes');

        $formMessage.slideUp("fast");
        
				isValid = validateForm(data);
				if (isValid && data.length == 4){
          var formData = {
            'name': data[0].value,
            'project': data[1].value,
            'budget': data[2].value,
            'email': data[3].value
          }
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
			      url: '//formspree.io/juan@sellry.com',
			      data: formData,
			      type: 'POST',
            dataType: "json"
			    })
				  .error(function(jqXHR, exception) {
				  	$errorServer.slideDown("slow");
				    instance.stop(-1);
				  })
				  .success(function(data){
				  	$successMessage.slideDown("slow");
				  	$sherlockHolmes.fadeOut("slow");
				  	localStorage.setItem("jf_form-visits", 0);
				  	instance.stop(1);
				  });
			  } else{
			  	$errorValues.slideDown("slow");
			  	instance.stop(-1);
			  }
			}
		});
	});
}

function hoverReveal(){
	$('#roll').hover(function(e){
		$('#footerBackground').toggleClass("footer__background--active");
	})
	$('#working').hover(function(e){
    $('#errorBackground').toggleClass("error__background--active");
  })
}

function printMessage(){
	var message = "<---- \n" +
								"Hey! This website is open source, feel free to check the source code at https://github.com/juanferreras/juanferreras.com" +
								"\n" +
								"----> \n";
	console.log(message);
}

function heightFix(){
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var elements = $('html, body, #landing');
		elements.each(function(){
			var h = $(this).height();
			$(this).height(h);
		})
	}
}

function footerFix(){
	window.addEventListener('touchstart', function setHasTouch () {
			$('main').addClass('main--relative');
	    $('#footer').addClass('footer--relative');
	    window.removeEventListener('touchstart', setHasTouch);
	}, false);
}


$("document").ready(function() {
	heightFix();
	footerFix();
	initPlugins();	
	refreshClock();

	initLayout();
	preloadImages();

	initNaturalLanguageForm();
	initFormSubmission();
	toggleFlag();
	hoverReveal();

	printMessage();
});