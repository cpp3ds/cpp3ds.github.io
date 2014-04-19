$(document).foundation({
	magellan:{
		// specify the class used for active sections
		active_class: 'active',
		// how many pixels until the magellan bar sticks, 0 = auto
		threshold: 0,
		// pixels from the top of destination for it to be considered active
		destination_threshold: 500,
		// calculation throttling to increase framerate
		throttle_delay: 50 
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