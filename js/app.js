$(document).foundation({
	'magellan-expedition': {
		active_class : 'active',
		threshold : 0, // pixels from the top of the expedition for it to become fixes
		destination_threshold : 200, // pixels from the top of destination for it to be considered active
		throttle_delay : 30, // calculation throttling to increase framerate
		fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll
		offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
		duration : 700, // animation duration time
	}
});

$(function(){
	$('path').each(function(){
		var $this = $(this),
		    color = $this.css('fill'),
		    strokelength = $this[0].getTotalLength(),
		    strokewidth = $this.css('stroke-width');

		$this.css({
			"stroke": color,
			"stroke-dasharray": strokelength,
			"stroke-dashoffset": strokelength,
			"stroke-linecap": 'round',
			"fill-opacity": 0,
			"stroke-linejoin": 'round'
		});
		$this.attr({
			'data-anchor-target': '#outro',
			'data-top': 'stroke-dashoffset:'+strokelength+';',
			'data-400-bottom': 'stroke-dashoffset:0; fill-opacity:0; stroke-width:'+strokewidth+'; stroke-opacity:1;',
			'data-bottom': 'fill-opacity:1; stroke-width:0; stroke-opacity:0;'
		});
	});
	var s = skrollr.init();
});