// Begin code for search pics  //
var searchPictures = function() {

    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('form').submit(function(event) {

        var $searchField = $("#search");

        event.preventDefault();
        var animal = $searchField.val();
        console.log(animal);
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

    var flickrAPI = "https://api.flickr.com/services/rest/??&method=flickr.people.getPublicPhotos&jsoncallback=?";

    $('form').submit(function(event) {


        event.preventDefault();
        
        var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
        var $searchField = $("#searchFriends");
        var userId = $searchField.val();
           
        var flickrOptions = {
            api_key: apiKey,
            user_id: userId ,
            safe_search: 1,
            format: "json"
        };
        console.log(flickrOptions);
        function flickrImages(data) {
            var photoHTML = "";
            if (data.photos.length > 0) {
                photoHTML = '<ul>';
                $.each(data.photos, function(i, photos) {
                    photoHTML += '<li class="col-sm-3 col-sm-3">';
                    photoHTML += '<a href=" ' + photos.owner + ' " class="image">';
                    photoHTML += '<img src=" ' + photos.title + ' ">';
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

}

// end code for favorite pics //