// dependency: 

content.ele = {

    count: 0,
    index: null, 
    string: null,
    element: null,

    birth: function() {
        console.log('content.ele.birth fired');
        this.string = "🐘";
        content.ele.count++;
        this.index = content.ele.count;

        var newText = Object.create(content.text);
        newText.define('😁');
        newText.place();


        $('#pool').append("<span class=\"ele\">"+ this.string +"</span>");
        this.element = $( '#ele'+this.index ).eq(0);
        var elephant = this;

        // $(this.string).resizable( {
        //     aspectRatio: true
        // });

        // insert at the beginning of the body element
        $('body').prepend('<span class="text" id='  + elephant + '</span>');
    },

    follow: function() { 
        console.log('content.ele.follow fired');
        $('#ele').animate(
            {top: event.pageX, left: event.pageY},
            5000, 
            "easeOutBounce"
            );      
    }
};
