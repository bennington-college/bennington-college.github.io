$( document ).ready(function() {

	$(document).click(function() {

		// generate random hue, saturation, lightness for page background color
		var hueValue =  Math.floor(Math.random()*360);
		var saturationValue = Math.floor(Math.random()*100);
		var lightnessValue = Math.floor(Math.random()*100);

		// splice values into formatted css background-color value, using concatenation operator
		var cssValue = 'hsl(' + hueValue + ', ' + saturationValue + '%, ' + lightnessValue + '%)';

		// change the css rule for html element to new background color
		$('html, body').css('background-color', cssValue);

		// if new background color is light, use black text
		if (lightnessValue<50) {
			$('*').css('color', 'black');
			$('a').css('color', 'black');
		// otherwise, use white text
		} else {
			$('*').css('color', 'white');
			$('a').css('color', 'white');
		}

	});
});