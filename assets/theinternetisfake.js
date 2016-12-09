content.character = {

    count: 0,
    appear: function(menu) {
        var dart = Math.random();
        dart = Math.floor(dart* menu.length );
        var character = menu[dart];

        var idName = 'char-' + this.count++;
        $('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
    },
    disappear: function() {
        $('.character').hide();
    },
    move: function(destX, destY, count) {
        var whichChar = Math.floor(Math.random()*characters.count);
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

        $('.character').dblclick( function(event) {
            hoverable=!hoverable;
        });

        $('.character').mouseenter( function(event) {
            if(hoverable)
            {
                this.newColor(0, 100, 50);
            }
        })

        $('.character').mouseleave( function(event) {
            if(hoverable)
            {
                this.newColor(0, 0, 0);
            }
        })

        $('body').click( function(event) {
            this.move(event.pageX, event.pageY, this.count);
    }

}