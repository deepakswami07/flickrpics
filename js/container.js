//////////////////////
//begin ajax for home
var $home = " ";
$home += '<section id="toFill">';
$home += '<article>';
$home += '<h1 class="main-header">FLICKRPICS</h1>';
$home += '<p id="d-home">With just a click see interesting pictures of the day, search for pictures, friend\'s pics or friend\'s favorites....</p>';
$home += '</article>';
$home += '</section>';

var $homePicsFormHTML = " ";
// end ajax for about home
///////////////////////////


/////////////////////////////////////////////
// begin ajax for interesting pics of the day
var $picturesHTML = " ";
$picturesHTML += '<div class="">';
$picturesHTML += '<section>';
$picturesHTML += '<h1 class="main-header">PICTURES</h1>';
$picturesHTML += '<h1 class="second-header-picutres">pics of the day</h1>';
$picturesHTML += '<article>';
$picturesHTML += '<p id="d-picture">Click on the button below to see the most interesting pictures of the day.</p>';
$picturesHTML += '</article>';
$picturesHTML += '</section>';
$picturesHTML += '<section>';

var $picturesFormHTML = " ";
$picturesFormHTML += '<form class="navbar-form navbar-center" role="picutres">';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += '<label for="getPictures"></label>';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += ' <button class="btn btn-info button-style"" id="getPictures" type="submit" value="pictures" style="text-align:center">';
$picturesFormHTML += '<span>CLICK TO SEE PICS OF THE DAY  </span>';
$picturesFormHTML += '<span class="glyphicon glyphicon-download"></span>';
$picturesFormHTML += '</button>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</form>';
/////////////////////////////////////////////
// end ajax for interesting pics of the day


///////////////////////////////////
//begin ajax for for search by text
var $usernameHTML = " ";
$usernameHTML += '<section>';
$usernameHTML += '<h1 class="main-header">SEARCH</h1>';
$usernameHTML += '<h1 class="second-header-search">pics by topic</h1>';
$usernameHTML += '<article>';
$usernameHTML += '<p id="d-search">Type in a search term to find the most recent photos that have been posted on Flickr.</p>';
$usernameHTML += '</article>';
$usernameHTML += '</section>';

var $usernamePicsFormHTML = " ";
$usernamePicsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriendsName">';
$usernamePicsFormHTML += '<div class="form-group">';
$usernamePicsFormHTML += '<label for="searchFriendsName"></label>';
$usernamePicsFormHTML += '<div class="form-group">';
$usernamePicsFormHTML += '<input type="text" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="Type in seach term...">';
$usernamePicsFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$usernamePicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$usernamePicsFormHTML += '</button>';
$usernamePicsFormHTML += '</div>';
$usernamePicsFormHTML += '</div>';
$usernamePicsFormHTML += '</form>';
///////////////////////////////////
//begin ajax for for search by text


/////////////////////////////
// begin ajax for userid pics
var $useridHTML = " ";
$useridHTML += '<section>';
$useridHTML += '<h1 class="main-header">FRIEND\'S</h1>';
$useridHTML += '<h1 class="second-header-userid">pics by userid</h1>';
$useridHTML += '<article>';
$useridHTML += '<p id="d-id">Too busy to join Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in your friend\'s userid and see the most recent posts.</p>';
$useridHTML += '</article>';
$useridHTML += '</section>';

var $useridPicsFormHTML = " ";
$useridPicsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriends">';
$useridPicsFormHTML += '<div class="form-group">';
$useridPicsFormHTML += '<label for="searchFriendsID"></label>';
$useridPicsFormHTML += '<div class="form-group">';
$useridPicsFormHTML += '<input type="text" class="form-control" id="searchFriendsID" name="searchFriends" placeholder="xxxxxxxx@Nxx">';
$useridPicsFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$useridPicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$useridPicsFormHTML += '</button>';
$useridPicsFormHTML += '</div>';
$useridPicsFormHTML += '</div>';
$useridPicsFormHTML += '</form>';
//end ajax for userid pics
///////////////////////////


//////////////////////////////////////
// begin ajax for friends favorite pics
var $favoritesHTML = " ";
$favoritesHTML += '<section>';
$favoritesHTML += '<h1 class="main-header">FRIEND\'S</h1>';
$favoritesHTML += '<h1 class="second-header-favorites">favorite pics</h1>';
$favoritesHTML += '<article>';
$favoritesHTML += '<p id="d-favorite">Type in your friend’s userid or username and find their favorite photos.</p>';
$favoritesHTML += '</article>';
$favoritesHTML += '</section>';

var $favoritesPicsFormHTML = " ";
$favoritesPicsFormHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<label for="searchFriendsFav"></label>';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<input type="text" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="username or id">';
$favoritesPicsFormHTML += ' <button class="btn btn-info button-style" id="submit" type="submit" value="search">';
$favoritesPicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$favoritesPicsFormHTML += '</button>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</form>';
// end ajax for favorite pics
////////////////////////////

//////////////////////////
// begin ajax for search pics


////////////////////////////
// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section>';
$aboutHTML += '<h1 class="main-header">ABOUT</h1>';
$aboutHTML += '<h1 class="second-header-about">flickrpics</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p id="d-about">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';

var $aboutPicsFormHTML = " ";
// end ajax for about HTML
///////////////////////////




/////////////////////////////////////////////
// begin ajax for launch image gallery button
var $loadImageGalleryHTML = " ";
$loadImageGalleryHTML += '<div class="container">';
$loadImageGalleryHTML += '<form class="form-inline">';
$loadImageGalleryHTML += '<div class="form-group">';
$loadImageGalleryHTML += '<button id="image-gallery-button" type="button" class="btn btn-primary btn-md">Launch Image Gallery</button>';
$loadImageGalleryHTML += '</div>';
$loadImageGalleryHTML += '</form>';
$loadImageGalleryHTML += '</div>';
/////////////////////////////////////////////
// begin ajax for launch image gallery button


//////////////////////////
// begin append to HTML //
// $("#home").click(function(){
//      document.getElementById("toFill").innerHTML = $home;
//      document.getElementById("result").innerHTML = $homePicsFormHTML;
//      document.getElementById("loadImageGallery").innerHTML = "";
// });

$("#home").click(function() {
    document.getElementById("toFill").innerHTML = $home;
    document.getElementById("result").innerHTML = $picturesFormHTML;
    // document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
}); 

$("#searchPics").click(function() {
    document.getElementById("toFill").innerHTML = $searchPicsHTML;
    document.getElementById("result").innerHTML = $searchPicsFormHTML;
    document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
});

$("#userID").click(function() {
    document.getElementById("toFill").innerHTML = $useridHTML;
    document.getElementById("result").innerHTML = $useridPicsFormHTML;
    document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
});

$("#username").click(function() {
    document.getElementById("toFill").innerHTML = $usernameHTML;
    document.getElementById("result").innerHTML = $usernamePicsFormHTML;
    document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
});

$("#favorites").click(function() {
    document.getElementById("toFill").innerHTML = $favoritesHTML;
    document.getElementById("result").innerHTML = $favoritesPicsFormHTML;
    document.getElementById("loadImageGallery").innerHTML = $loadImageGalleryHTML;
});


$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
    document.getElementById("result").innerHTML = $aboutPicsFormHTML;
    document.getElementById("loadImageGallery").innerHTML = "";
});

/// end append to HTML ///
//////////////////////////





