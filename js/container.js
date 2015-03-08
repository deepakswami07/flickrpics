// begin ajax for random pics
var $picturesHTML = " ";
$picturesHTML += '<section>';
$picturesHTML += '<h1 class="main-header">GENERATE</h1>';
$picturesHTML += '<h1 class="second-header">random pictures</h1>';
$picturesHTML += '<article>';
$picturesHTML += '<p class="description">Click on the generate pics button to see recent photos that have been posted on Flickr.</p>';
$picturesHTML += '</article>';
$picturesHTML += '</section>';

var $picturesFormHTML = " ";
$picturesFormHTML += '<form class="navbar-form navbar-center" role="picutres">';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += '<label for="getPictures"></label>';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += ' <button id="getPictures" type="submit" value="pictures" class="btn btn-default btn-sm navbar-btn">';
$picturesFormHTML += '<span>get pics   </span>';
$picturesFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$picturesFormHTML += '</button>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</div>';
$picturesFormHTML += '</form>';
// end ajax for random pics
///////////////////////////
//////////////////////////


// begin ajax for search pics
var $searchPicsHTML = " ";
$searchPicsHTML += '<section>';
$searchPicsHTML += '<h1 class="main-header">SEARCH</h1>';
$searchPicsHTML += '<h1 class="second-header">pics by topic</h1>';
$searchPicsHTML += '<article>';
$searchPicsHTML += '<p class="description">Type in a search term to find the most recent photos that have been posted on Flickr.</p>';
$searchPicsHTML += '</article>';
$searchPicsHTML += '</section>';

var $searchPicsFormHTML = " ";
$searchPicsFormHTML += '<form class="navbar-form navbar-center" role="search">';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<label for="search"></label>';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<input type="text" class="form-control" id="search" name="search" placeholder="search Pics">';
$searchPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default btn-sm navbar-btn">';
$searchPicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$searchPicsFormHTML += '</button>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</form>';
// end ajax for search pics
///////////////////////////
//////////////////////////


// begin ajax for userid pics
var $useridHTML = " ";
$useridHTML += '<section>';
$useridHTML += '<h1 class="main-header">FRIENDS</h1>';
$useridHTML += '<h1 class="second-header">pics by userid</h1>';
$useridHTML += '<article>';
$useridHTML += '<p class="description">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$useridHTML += '</article>';
$useridHTML += '</section>';

var $useridPicsFormHTML = " ";
$useridPicsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriends">';
$useridPicsFormHTML += '<div class="form-group">';
$useridPicsFormHTML += '<label for="searchFriendsID"></label>';
$useridPicsFormHTML += '<div class="form-group">';
$useridPicsFormHTML += '<input type="text" class="form-control" id="searchFriendsID" name="searchFriends" placeholder="xxxxxxxx@Nxx">';
$useridPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default btn-sm navbar-btn">';
$useridPicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$useridPicsFormHTML += '</button>';
$useridPicsFormHTML += '</div>';
$useridPicsFormHTML += '</div>';
$useridPicsFormHTML += '</form>';
//end ajax for userid pics
///////////////////////////
//////////////////////////

//begin ajax for for username
var $usernameHTML = " ";
$usernameHTML += '<section>';
$usernameHTML += '<h1 class="main-header">FRIENDS</h1>';
$usernameHTML += '<h1 class="second-header">by username</h1>';
$usernameHTML += '<article>';
$usernameHTML += '<p class="description">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$usernameHTML += '</article>';
$usernameHTML += '</section>';

var $usernamePicsFormHTML = " ";
$usernamePicsFormHTML += '<form class="navbar-form navbar-center form-inline" role="searchFriendsName">';
$usernamePicsFormHTML += '<div class="form-group">';
$usernamePicsFormHTML += '<label for="searchFriendsName"></label>';
$usernamePicsFormHTML += '<div class="form-group">';
$usernamePicsFormHTML += '<input type="text" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="mypics">';
$usernamePicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default btn-sm navbar-btn">';
$usernamePicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$usernamePicsFormHTML += '</button>';
$usernamePicsFormHTML += '</div>';
$usernamePicsFormHTML += '</div>';
$usernamePicsFormHTML += '</form>';
//end ajax for friends pics by username
////////////////////////////
///////////////////////////


// begin ajax for friends favorite pics
var $favoritesHTML = " ";
$favoritesHTML += '<section>';
$favoritesHTML += '<h1 class="main-header">FRIENDS</h1>';
$favoritesHTML += '<h1 class="second-header">favorite pics</h1>';
$favoritesHTML += '<article>';
$favoritesHTML += '<p class="description">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s userid and find their favorite photos.</p>';
$favoritesHTML += '</article>';
$favoritesHTML += '</section>';

var $favoritesPicsFormHTML = " ";
$favoritesPicsFormHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<label for="searchFriendsFav"></label>';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<input type="text" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="favorites">';
$favoritesPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default btn-sm navbar-btn">';
$favoritesPicsFormHTML += '<span class="glyphicon glyphicon-search"></span>';
$favoritesPicsFormHTML += '</button>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</form>';
// end ajax for favorite pics
///////////////////////////
//////////////////////////


// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section>';
$aboutHTML += '<h1 class="main-header">ABOUT</h1>';
$aboutHTML += '<h1 class="second-header">flickrpics</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p class="description">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';

var $aboutPicsFormHTML = " ";
// end ajax for about HTML
///////////////////////////
//////////////////////////


//begin ajax for home
var $home = " ";
$home += '<section id="toFill">';
$home += '<h1 class="main-header">FLICKRPICS</h1>';
$home += '<article>';
$home += '<p class="description">Click on pictures to see randon pictures or do search for pictures, friends pics or friends favorites....</p>';
$home += '</article>';
$home += '</section>';

var $homePicsFormHTML = " ";
// end ajax for about home
///////////////////////////
//////////////////////////


/// begin append to HTML
$("#pictures").click(function() {
    document.getElementById("toFill").innerHTML = $picturesHTML;
    document.getElementById("result").innerHTML = $picturesFormHTML;
});

$("#searchPics").click(function() {
    document.getElementById("toFill").innerHTML = $searchPicsHTML;
    document.getElementById("result").innerHTML = $searchPicsFormHTML;
});

$("#userID").click(function() {
    document.getElementById("toFill").innerHTML = $useridHTML;
    document.getElementById("result").innerHTML = $useridPicsFormHTML;
});

$("#username").click(function() {
    document.getElementById("toFill").innerHTML = $usernameHTML;
    document.getElementById("result").innerHTML = $usernamePicsFormHTML;
});

$("#favorites").click(function() {
    document.getElementById("toFill").innerHTML = $favoritesHTML;
    document.getElementById("result").innerHTML = $favoritesPicsFormHTML;
});

$("#home").click(function(){
	 document.getElementById("toFill").innerHTML = $home;
     document.getElementById("result").innerHTML = $homePicsFormHTML;
});

$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
    document.getElementById("result").innerHTML = $aboutPicsFormHTML;
});
// end append to HTML
////////////////////
///////////////////






