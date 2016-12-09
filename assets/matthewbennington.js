$( document ).ready(function() {
    //http://stackoverflow.com/a/41030942/5843840
    $('a').hover(function() {
      var yPosition = parseFloat(Math.random() * window.screen.availHeight)+'px';
      console.log(yPosition);
      var xPosition = parseFloat(Math.random() * window.screen.availWidth)+'px';
      console.log(xPosition);
      $(this).css({
        left: xPosition,
        top: yPosition
    });
  });
});