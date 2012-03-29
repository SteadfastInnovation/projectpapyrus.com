jQuery(function(){
	$("#slider").chopSlider({
		/* Slide Element */
		slide : ".slide",
		/* Controlers */
		nextTrigger : "a#slide-next",
		prevTrigger : "a#slide-prev",
		hideTriggers : true,
		sliderPagination : ".slider-pagination",
		/* Captions */
		useCaptions : true,
		everyCaptionIn : ".sl-descr",
		showCaptionIn : ".caption",
		captionTransform : "scale(0) translate(-600px,0px) rotate(45deg)",
		/* Autoplay */
		autoplay : false,
		autoplayDelay : 6000,
		/* Default Parameters */
		t2D : csTransitions['vertical'][0],
		t3D : csTransitions['3DFlips'][11],
		/* For Mobile Devices */
		mobile: csTransitions['mobile']['random'],
		/* For Old and IE Browsers */
		noCSS3:csTransitions['noCSS3']['random'],
		onStart: function(){ /* Do Something*/ },
		onEnd: function(){ /* Do Something*/ }
	})
})

