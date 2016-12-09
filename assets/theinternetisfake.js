content.character = {

    count: 0,
    appear: function(menu) {
        var dart = Math.random();
        dart = Math.floor(dart* menu.length );
        var character = menu[dart];

        var idName = 'char-' + this.count++;
        $('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
        $('.character').css('position','fixed');
    },
    disappear: function() {
        $('.character').hide();
    },
    move: function(destX, destY, count) {
        var whichChar = Math.floor(Math.random()*this.count);
        $('.character').animate(
            { top: destY, left: destX },
            3000
        );
    },
    newColor: function(hueValue, saturationValue, lightnessValue) {
        $('.character').css('color','hsl('+hueValue+', '+saturationValue+'%, '+lightnessValue+'%)');

    },
    newSize: function() {
        $('.character').css('font-size',Math.floor(Math.random()*350)+50+'%');
    },
    runProper: function () {
        this.appear(['•']);

        var theThing=this;

        $('.character').dblclick( function(event) {
            theThing.hoverable=!theThing.hoverable;
        });
        $('.character').mouseenter( function(event) {
            if(theThing.hoverable)
            {
                theThing.newColor(0, 100, 50);
            }
        });
        $('.character').mouseleave( function(event) {
            if(theThing.hoverable)
            {
                theThing.newColor(0, 0, 0);
            }
        });
        $('body').click( function(event) {
            theThing.move(event.pageX, event.pageY, theThing.count);
        });
    },
};

$( document ).ready(function() {

content.character.runProper();

})