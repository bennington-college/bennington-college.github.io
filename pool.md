---
layout: page
title: Pool
permalink: /pool/
---

<script>

var characters = {
	count: 0,
	appear: function(menu) {
		// select a geometric char from array
		// var menu = ['•','◊','∆'];

		// select random integer from 0-2
		var dart = Math.random();
		dart = Math.floor(dart* menu.length );
		var character = menu[dart];

		var idName = 'char-' + this.count++;
		// insert at the beginning of the body element
		$('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
		// style it with css?
	},
	disappear: function() {
		$('.character').hide();
	},
	move: function(destX, destY) {/
		$('.character').animate(
			{ top: destY, left: destX },
		  	3000
		);
	}
	// characters.newColor();
	// change the characters to a random color, using hsl values
	newColor: function() {
		return undefined;
	},
	// characters.newSize();
	// change the character css to a random font-size between 50 and 400%
	newSize: function() {
		return undefined;
	}
}
characters.appear(['•','◊','∆']);
$('body').click( function(event) {
	alert(event.pageX + " " + event.pageY);
	characters.move(event.pageX, event.pageY)
})

</script>



<style>
.character {
	position: absolute;
	font-size: 60px;
}
</style>
