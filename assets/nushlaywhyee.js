// declare and initialize image prototype object
content.image = {

	// how many image instances have been created
    count: 0,

	// index number
    index: null,

	// image content
    string: null,

    // jquery reference to page element
    element: null,


    // TODO: method to allow user to select their own image


    // place image instance in document
    place: function() {

        // insert image in #content using jquery
        $( "#content" ).prepend( '<img src="/assets/image1.jp.jpg" alt=" soccer Picture ">' );

    },

    // change content of image instance
    change: function(newEntry) {

        // select all images
        $( "img" ).css( "width", "70%" );

    }
}