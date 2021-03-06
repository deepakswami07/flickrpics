// Begin code for today's favorite pics  ////
/////////////////////////////////////
var pictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
            var $searchField = $("#search");
            $.ajax({
                url: 'https://api.flickr.com/services/rest/',
                data: {
                    format: 'json',
                    method: 'flickr.interestingness.getList',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                    });
                } else {
                    (
                        '<p class="lead text-danger"> No photos found to match your search the user ID: ' +
                        +'.</p>').appendTo(linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }
// end code for today's favorite pics  ////
/////////////////////////////////////


// begin code for search by word/name//
////////////////////////////////////
var usernamePictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
            var $searchField = $("#searchFriendsName");
            var username = $searchField.val();
            console.log(username)
            $.ajax({
                url: 'https://api.flickr.com/services/rest/',
                data: {
                    format: 'json',
                    method: 'flickr.photos.search',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                    text: username,
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                        $('.form-inline').show();
                    });
                } else {
                    (
                        '<p class="lead text-danger"> No photos found to match your search the user ID: ' +
                        userId + '.</p>').appendTo(
                        linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }
// begin code for search by word/name//
////////////////////////////////////


//Begin code for friends pics by id//
///////////////////////////////////
var useridPictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
            var $searchField = $("#searchFriendsID");
            var userId = $searchField.val();
            // console.log(userId)
            $.ajax({
                url: 'https://api.flickr.com/services/rest/',
                data: {
                    format: 'json',
                    method: 'flickr.people.getPublicPhotos',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                    user_id: userId,
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                        $('.form-inline').show();
                    });
                } else {
                    (
                        '<p class="lead text-danger"> No photos found to match your search the user ID: ' +
                        userId + '.</p>').appendTo(
                        linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }

//end code for friends pics by id //
///////////////////////////////////


//// begin code for favorite pics by id and username ////
//////////////////////////////////////////////////////
var favoritePictures = function() {
        $('form').submit(function(event) {
            event.preventDefault();
            var apiKey = '9a204c1e5292bcbc81473e3ea47dd1d3';
            var $searchField = $("#searchFriendsFav");
            var userId = $searchField.val();
            // console.log(userId);
            $.ajax({
                url: 'https://api.flickr.com/services/rest/',
                data: {
                    format: 'json',
                    method: 'flickr.photos.search',
                    api_key: '9a204c1e5292bcbc81473e3ea47dd1d3',
                    user_id: userId,
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback'
            }).done(function(result) {
                var linksContainer = $('#links'),
                    baseUrl;
                if (result.photos.photo.length > 0) {
                    $.each(result.photos.photo, function(index,
                        item) {
                        baseUrl = 'http://farm' + item.farm +
                            '.static.flickr.com/' +
                            item.server + '/' + item.id +
                            '_' + item.secret;
                        $('<a/>').append($('<img>').prop(
                            'src', baseUrl +
                            '_s.jpg')).prop('href',
                            baseUrl + '_b.jpg').prop(
                            'title', item.title).attr(
                            'data-gallery', '').appendTo(
                            linksContainer);
                        $('.form-inline').show();
                    });
                } else {
                    ('<p The user with: ' + userId +
                        ' has no favorite pictures.</p>').appendTo
                        (linksContainer);
                }
            });
            $('#image-gallery-button').on('click', function(event) {
                event.preventDefault();
                blueimp.Gallery($('#links a'), $(
                    '#blueimp-gallery').data());
            });
        });
    }
//// end code for favorite pics by id and username ////
//////////////////////////////////////////////////////
