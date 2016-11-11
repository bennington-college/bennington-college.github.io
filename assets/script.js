$( document ).ready(function() {

	var yPosition, screenHeight, 
		saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue;

		// initialize brightness value
		brightnessValue = 50;

	$('body').click(
		function(event) {
			// get y value of click
			yPosition = event.pageY;

			// get height of body element (screen)
			screenHeight = $('body').height();

			// divide yposition by height to get relative amount
			saturationRatio = yPosition/screenHeight;

			// multiple that by 100 to get saturation value
			saturationValue = saturationRatio*100;

			// if the cursor is on the top half of the screen
			if ( saturationValue > 50 ) {
			// increase the brightness by 5%
				brightnessValue = brightnessValue + 5;
			}

			// if the cursor is on the bottom half of the screen
			if ( saturationValue < 50 ) {
			// decrease the brightness by 5%
				brightnessValue = brightnessValue - 5;
			}

			hueValue = Math.random() * 360;

			// embed saturation value in css rule
			cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (brightnessValue)%100 +'%)';

			// change the css value to color w new saturation.
			$('body').css('background-color', cssValue);

		}
	);
});
/*
var cost = "5";
var bool = 5===5;

if (bool) {
  alert('of course');
} else {
  alert('pigs can fly');
}

var index = 0;
while (index < 5) {
  alert('dang it #'+index);
  index = index + 1;
}
*/