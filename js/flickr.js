//////////////////////////////////
// Begin code for search pics  //

var pictures = function() {
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('form').submit(function(event) {
        event.preventDefault();
        var flickrOptions = {
            format: "json"
        };
        function flickrImages(data) {
            var photoHTML = "";
            if (data.items.length > 0) {
                photoHTML = '<ul id="imageGallery">';
                $.each(data.items, function(i, photos) {
                    photoHTML += '<li class="col-sm-2 col-sm-2">';
                    photoHTML += '<a href="' + photos.link + '" class="image">';
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
///////////////////////////////////
///////////////////////////////////
// Begin code for search pics  //
var searchPictures = function() {
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $('form').submit(function(event) {
        var $searchField = $("#search");

        event.preventDefault();
        var animal = $searchField.val();
        var flickrOptions = {
            tags: animal,
            per_page: 25,
            format: "json"
        };
        function flickrImages(data) {
            var photoHTML = "";
            if (data.items.length > 0) {
                photoHTML = '<ul id="imageGallery">';
                $.each(data.items, function(i, photos) {
                    photoHTML += '<li class="col-sm-2 col-sm-2">';
                    photoHTML += '<a href="' + photos.link + '" class="image">';
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
//Begin code for friends pics by id //
var useridPictures = function() {
    $('form').submit(function(event) {
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key= + apiKey + &user_id= + userId + &per_page=20&page=4&format=json&jsoncallback=?";
        event.preventDefault();
        var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
        var $searchField = $("#searchFriendsID");
        var userId = $searchField.val();
        var flickrOptions = {
            api_key: apiKey,
            user_id: userId,
            safe_search: 1,
            per_page: 25,
            format: "json"
        }
        function flickrImages(data) {
            var friendsHTML = "";
            if (data.photos.photo.length > 0){
                friendsHTML += '<ul id="imageGallery">';
                $.each(data.photos.photo, function(i,item) {
                    var friendsPicsURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
                    friendsHTML += '<li class="col-sm-2 col-sm-2">';
                    friendsHTML += '<a href="https://www.flickr.com/photos/' + userId + '/' + item.id + ' " class="image">';
                    friendsHTML += '<img src=" ' + friendsPicsURL + ' " class="images">';
                    friendsHTML += '</li>';
                });
            } else {
               friendsHTML = photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search the user ID: ' + userId + '.</p>'
            }

            friendsHTML += '</ul>';

            $("#photos").html(friendsHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, flickrImages);
    });
}

// End code for friends pics by id //
////////////////////////////////////


///////////////////////////////////
//Begin code for friends pics by name //
var usernamePictures = function() {
    $('form').submit(function(event) {
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key= + apiKey + &text= + username + &per_page=20&format=json&jsoncallback=?";
        event.preventDefault();
        var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
        var $searchField = $("#searchFriendsName");
        var username = $searchField.val();
        var flickrOptions = {
            api_key: apiKey,
            text: username,
            safe_search: 1, 
            per_page: 25,
            format: "json"
        }
        function flickrImages(data) {
            var friendsHTML = "";
            if (data.photos.photo.length > 0){
                friendsHTML += '<ul id="imageGallery">';
                $.each(data.photos.photo, function(i,item) {
                    var friendsPicsURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
                    friendsHTML += '<li class="col-sm-2 col-sm-2">';
                    friendsHTML += '<a href="https://www.flickr.com/photos/' + username + '/' + item.id + ' " class="image">';
                    friendsHTML += '<img src=" ' + friendsPicsURL + ' " class="images">';
                    friendsHTML += '</li>';
                });
            } else {
               friendsHTML = photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search the name: ' + username + '.</p>'
            }
            friendsHTML += '</ul>';

            $("#photos").html(friendsHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, flickrImages);
    });
}
// End code for friends pics by name//
////////////////////////////////////


///////////////////////////////////
// begin code for favorite pics //
var favoritePictures = function() {
    $('form').submit(function(event) {
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.favorites.getList&api_key= + apiKey + &user_id= + userId + &per_page=20&format=json&jsoncallback=?";
        event.preventDefault();
        var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
        var $searchField = $("#searchFriendsFav");
        var userId = $searchField.val();
        var flickrOptions = {
            api_key: apiKey,
            user_id: userId,
            per_page: 25,
            format: "json"
        }
        function flickrImages(data) {
            var friendsFavHTML = "";
            if (data.photos.photo.length > 0){
                friendsFavHTML += '<ul id="imageGallery">';
                $.each(data.photos.photo, function(i,item) {
                 var friendsFavURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'
                friendsFavHTML += '<li class="col-sm-2 col-sm-2">';
                friendsFavHTML += '<a href="https://www.flickr.com/photos/' + item.owner + '/' + item.id + ' " class="image">';
                friendsFavHTML += '<img src=" ' + friendsFavURL + ' " class="images">';
                friendsFavHTML += '</li>';
                });
            } else {
                friendsFavHTML = '<p id="noMatch" class="lead text-danger"> The user with: ' + userId + ' has no favorite pictures.</p>'
            }
            friendsFavHTML += '</ul>';
            $("#photos").html(friendsFavHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, flickrImages);
        console.log($.getJSON(flickrAPI, flickrOptions, flickrImages));
    });
}
// end code for favorite pics //
///////////////////////////////////