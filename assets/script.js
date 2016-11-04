$( document ).ready(function() {

	$('h3').click(
	  function() {
	    $('h3').css('font-size', '200px');
	  }
	);

});


// link to the script files from head.html:
//
// <script type="text/javascript" src="/assets/jquery.js"></script>
// <script type="text/javascript" src="/assets/script.js"></script>
//

// exercises:
//
// when you .hover() over 'h3' elements, change 'background-color' to 'yellow'
//
// when you click on an element with the class attribute '.wrapper', make it disappear: change 'display' to 'none'
// 			hint: inside .click method, use $(this).css instead of another $('.wrapper').css
// 				  to make only the clicked area disappear, instead of all elements labeled class="wrapper"
// 
// when you move the mouse over the 'body' element, shift it to the right:
//		change 'position' to 'relative' and 'left' to '30px'
//
// advanced extra exercise:
// 		make a css rule in style.css for a new class - 
//	        .label { opacity: 0.5 }
//      then add and remove it to an element with the .toggleClass() method
//      you can look up .toggleClass at api.jquery.com to see the signature <- (what input args it needs)
//





