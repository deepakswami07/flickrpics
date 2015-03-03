// begin ajax for random pics
var $picturesHTML = " ";
$picturesHTML += '<section>';
$picturesHTML += '<h1>generate random pictures</h1>';
$picturesHTML += '<article>';
$picturesHTML += '<p class="lead">Click on the generate pics button to see recent photos that have been posted on Flickr.</p>';
$picturesHTML += '</article>';
$picturesHTML += '</section>';

var $picturesFormHTML = " ";
$picturesFormHTML += '<form class="navbar-form navbar-center" role="picutres">';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += '<label for="picutres"></label>';
$picturesFormHTML += '<div class="form-group">';
$picturesFormHTML += ' <button id="submit" type="submit" value="picutres" class="btn btn-default navbar-btn">';
$picturesFormHTML += '<span class="glyphicon glyphicon-picutres"> Generate pics</span>';
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
$searchPicsHTML += '<h1>search pics</h1>';
$searchPicsHTML += '<article>';
$searchPicsHTML += '<p class="lead">Type in a search term to find the most recent photos that have been posted on Flickr.</p>';
$searchPicsHTML += '</article>';
$searchPicsHTML += '</section>';

var $searchPicsFormHTML = " ";
$searchPicsFormHTML += '<form class="navbar-form navbar-center" role="search">';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<label for="search"></label>';
$searchPicsFormHTML += '<div class="form-group">';
$searchPicsFormHTML += '<input type="search" class="form-control" id="search" name="search" placeholder="Search Pics">';
$searchPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$searchPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
$searchPicsFormHTML += '</button>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</div>';
$searchPicsFormHTML += '</form>';
// end ajax for search pics

///////////////////////////
//////////////////////////


// begin ajax for friends pics
var $friendsPicsHTML = " ";
$friendsPicsHTML += '<section>';
$friendsPicsHTML += '<h1>friends pics</h1>';
$friendsPicsHTML += '<article>';
$friendsPicsHTML += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$friendsPicsHTML += '</article>';
$friendsPicsHTML += '</section>';

    //begin ajax for friends pics by ID    
    var $friendsPicsFormHTML = " ";
    $friendsPicsFormHTML += '<form style="display: inline" class="navbar-form navbar-center" role="searchFriends">';
    $friendsPicsFormHTML += '<div class="form-group">';
    $friendsPicsFormHTML += '<label for="searchFriends"></label>';
    $friendsPicsFormHTML += '<div class="form-group">';
    $friendsPicsFormHTML += '<input type="search" class="form-control" id="searchFriends" name="searchFriends" placeholder="xxxxxxxx@xxx">';
    $friendsPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
    $friendsPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search using id</span>';
    $friendsPicsFormHTML += '</button>';
    $friendsPicsFormHTML += '</div>';
    $friendsPicsFormHTML += '</div>';
    $friendsPicsFormHTML += '</form>';
    //end ajax for friends pics by ID

    //begin ajax for friends pics by username
    var $friendsPicsFormNameHTML = " ";
    $friendsPicsFormNameHTML += '<form style="display: inline" class="navbar-form navbar-center" role="searchFriendsName">';
    $friendsPicsFormNameHTML += '<div class="form-group">';
    $friendsPicsFormNameHTML += '<label for="searchFriendsName"></label>';
    $friendsPicsFormNameHTML += '<div class="form-group">';
    $friendsPicsFormNameHTML += '<input type="search" class="form-control" id="searchFriendsName" name="searchFriendsName" placeholder="mypics">';
    $friendsPicsFormNameHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
    $friendsPicsFormNameHTML += '<span class="glyphicon glyphicon-search"> Search name</span>';
    $friendsPicsFormNameHTML += '</button>';
    $friendsPicsFormNameHTML += '</div>';
    $friendsPicsFormNameHTML += '</div>';
    $friendsPicsFormNameHTML += '</form>';
    //begin ajax for friends pics by username
// end ajax for friends pics
////////////////////////////
///////////////////////////


// begin ajax for friends favorite pics
var $favoritesHTML = " ";
$favoritesHTML += '<section>';
$favoritesHTML += '<h1>friends fav pics</h1>';
$favoritesHTML += '<article>';
$favoritesHTML += '<p class="lead">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s userid and find their favorite photos.</p>';
$favoritesHTML += '</article>';
$favoritesHTML += '</section>';

var $favoritesPicsFormHTML = " ";
$favoritesPicsFormHTML += '<form class="navbar-form navbar-center" role="searchFriendsFav">';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<label for="searchFriendsFav"></label>';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<input type="search" class="form-control" id="searchFriendsFav" name="searchFriendsFav" placeholder="Favorite Pics">';
$favoritesPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$favoritesPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
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
$aboutHTML += '<h1>about flickrpics</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p class="lead">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';
// end ajax for about HTML
///////////////////////////
//////////////////////////


//begin ajax for home
var $home = " ";
$home += '<section id="toFill">';
$home += '<h1>search away....</h1>';
$home += '<article>';
$home += '<p class="lead">Click on pictures to see randon pictures or do search for pictures, friends pics or friends favorites....</p>';
$home += '</article>';
$home += '</section>';
// end ajax for about home
///////////////////////////
//////////////////////////


/// begin append to HTML

$("#home").click(function(){
	 document.getElementById("toFill").innerHTML = $home;
	 $('form').hide();
     $('form1').hide();
	 $('form').show();
     $('form1').show();
});

$("#pictures").click(function() {
    document.getElementById("toFill").innerHTML = $picturesHTML;
    document.getElementById("form").innerHTML = $picturesFormHTML;
});

$("#searchPics").click(function() {
    document.getElementById("toFill").innerHTML = $searchPicsHTML;
    document.getElementById("form").innerHTML = $searchPicsFormHTML;
});

$("#friendsPics").click(function() {
    document.getElementById("toFill").innerHTML = $friendsPicsHTML;
    document.getElementById("form").innerHTML = $friendsPicsFormHTML;
    document.getElementById("form1").innerHTML = $friendsPicsFormNameHTML;
});

$("#favorites").click(function() {
    document.getElementById("toFill").innerHTML = $favoritesHTML;
    document.getElementById("form").innerHTML = $favoritesPicsFormHTML;
});

$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
    $('form').hide();
    $('form').show();
});

// end append to HTML
////////////////////
///////////////////