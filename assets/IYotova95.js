// declare and initialize ball prototype object
content.ball = {

	// how many ball instances have been created
    count: 0,

	// index number
    index: null,

    // jquery reference to page element
    element: null,

    // place ball instance in document
    place: function() {
        // increment total number of ball instances
        content.ball.count++;

        // use new count as index
        this.index = content.ball.count;

    	// place ball at end of div with id="pool"
        $('body').append("<span class=\"ball\" id=\"ball"+ this.index +"\">•</span>");


        // store jquery reference to new element
        this.element = $( '#ball'+this.index ).eq(0);
    },

    // ball moves
     move: function() {
        $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
           // Left arrow key pressed
             case 37:
              $('.ball').animate({left: "-=50px"}, 'fast');
              break;
          // Up Arrow Pressed
            case 38:
              // Put our code here
              $('.ball').animate({top: "-=50px"}, 'fast');
               break;
          // Right Arrow Pressed
          case 39:
               // Put our code here
              $('.ball').animate({left: "+=50px"}, 'fast');
               break;
          // Down Arrow Pressed
          case 40:
              // Put our code here
                $('.ball').animate({top: "+=50px"}, 'fast');
               break;
   }
	 });
   },

}


$(document).ready( function() {

    content.ball.place();
    content.ball.move();

});