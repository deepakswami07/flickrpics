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


    $('form').submit(function(event) {

    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key= + apiKey + &user_id= + userId + &per_page=20&page=4&format=json&jsoncallback=?";

        event.preventDefault();
        var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
        var $searchField = $("#searchFriends");
        var userId = $searchField.val();
           
        var flickrOptions = {
            api_key: apiKey,
            user_id: userId,
            safe_search: 1,
            per_page: 20,
            format: "json"
        }

        function flickrImages(data) {
            var friendsHTML = "";
            friendsHTML += '<ul>';

            $.each(data.photos.photo, function(i,item) {
             var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
            friendsHTML += '<li class="col-sm-3 col-sm-3">';
             https://www.flickr.com/photos/brondbysupport/16687566685/ 
            friendsHTML += '<a href="https://www.flickr.com/photos/ ' + item.id + ' " class="image">';
            friendsHTML += '<img src=" ' + photoURL + ' " class="images">';
            // friendsHTML += '<img src=" ' + item.id + ' ">';
            friendsHTML += '</li>';
            });

            friendsHTML += '</ul>';
            $("#photos").html(friendsHTML);
        }
    
        $.getJSON(flickrAPI, flickrOptions, flickrImages);
        console.log($.getJSON(flickrAPI, flickrOptions, flickrImages));
    });
}

// End code for friends pics begin //
////////////////////////////////////
///////////////////////////////////


// begin code for favorite pics //

var favoritePictures = function() {

}

// end code for favorite pics //