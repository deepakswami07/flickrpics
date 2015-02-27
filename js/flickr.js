// Begin code for search pics  //
var searchPictures = function() {

    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('form').submit(function(event) {

        var $searchField = $("#search");

        event.preventDefault();
        var animal = $searchField.val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        }

        var animal = $searchField.val();

        var flickrOptions = {
            tags: animal,
            format: "json"
        };

        function flickrImages(data) {
            var photoHTML = "";
            if (data.items.length > 0) {
                photoHTML = '<ul>';
                $.each(data.items, function(i, photos) {
                    photoHTML += '<li class="col-sm-3 col-sm-3">';
                    photoHTML += '<a href=" ' + photos.link + ' " class="image">';
                    photoHTML += '<img src=" ' + photos.media.m + ' ">';
                    photoHTML += '</a>';
                    photoHTML += '</li>';
                });

            } else {
                photoHTML = photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search word: ' + animal + '.</p>'
            }

            photoHTML += '</ul>';

            $("#photos").html(photoHTML);
        }

        $.getJSON(flickrAPI, flickrOptions, flickrImages);
    });
}

// End code for search pics begin //

////////////////////////////////////
///////////////////////////////////

//Begin code for friends pics  //

var friendsPictures = function() {

    var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
    
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=";
    $('form').submit(function(event) {

        var $searchField = $("#search");

        event.preventDefault();
        var animal = $searchField.val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        }

        var $searchField = $('#search');
        var animal = $searchField.val();

        var flickrOptions = {
            tags: animal,
            tagmode: "all",
            format: "json"
        };

        function flickrImages(data) {
            var photoHTML = "";
            if (data.items.length > 0) {
                photoHTML = '<ul>';
                $.each(data.items, function(i, photos) {
                    photoHTML += '<li class="col-sm-3 col-sm-3">';
                    photoHTML += '<a href=" ' + photos.link + ' " class="image">';
                    photoHTML += '<img src=" ' + photos.media.m + ' ">';
                    photoHTML += '</a>';
                    photoHTML += '</li>';
                });

            } else {
                photoHTML = photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search word: ' + animal + '.</p>'
            }

            photoHTML += '</ul>';

            $("#photos").html(photoHTML);
        }

        $.getJSON(flickrAPI, flickrOptions, flickrImages);
    });
}

// End code for friends pics begin //
////////////////////////////////////
///////////////////////////////////


// begin code for favorite pics //

var favoritePictures = function() {

    var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
    
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=";
    $('form').submit(function(event) {

        var $searchField = $("#search");

        event.preventDefault();
        var animal = $searchField.val();
        var flickrOptions = {
            tags: animal,
            format: "json"
        }

        var $searchField = $('#search');
        var animal = $searchField.val();

        var flickrOptions = {
            tags: animal,
            tagmode: "all",
            format: "json"
        };

        function flickrImages(data) {
            var photoHTML = "";
            if (data.items.length > 0) {
                photoHTML = '<ul>';
                $.each(data.items, function(i, photos) {
                    photoHTML += '<li class="col-sm-3 col-sm-3">';
                    photoHTML += '<a href=" ' + photos.link + ' " class="image">';
                    photoHTML += '<img src=" ' + photos.media.m + ' ">';
                    photoHTML += '</a>';
                    photoHTML += '</li>';
                });

            } else {
                photoHTML = photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search word: ' + animal + '.</p>'
            }

            photoHTML += '</ul>';

            $("#photos").html(photoHTML);
        }

        $.getJSON(flickrAPI, flickrOptions, flickrImages);
    });
}

// end code for favorite pics //