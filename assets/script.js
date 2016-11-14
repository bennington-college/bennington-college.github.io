$( document ).ready(function() {

	$(document).click(function() {

		// generate random hue
		var hueValue =  Math.floor(Math.random()*360);

		// generate (saturation < 50%);
		var saturationValue = Math.floor(Math.random()*50);

		// generate (20% < lightness < 90%);
		var lightnessValue = Math.floor(Math.random()*70) + 20;

		// splice values into formatted css background-color value, using concatenation operator
		var cssValue = 'hsl(' + hueValue + ', ' + saturationValue + '%, ' + lightnessValue + '%)';

		// change the css rule for html element to new background color
		$('html, body').css('background-color', cssValue);

		// if new background color is dark, use white text
		if (lightnessValue<50) {
			$('*').css('color', 'white');
			$('a').css('color', 'white');

		// otherwise, use black text
		} else {
			$('*').css('color', 'black');
			$('a').css('color', 'black');
		}

	});

});