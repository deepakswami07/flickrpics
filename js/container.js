// begin ajax for search pics
var $searchPicsHTML = " ";
$searchPicsHTML += '<section>';
$searchPicsHTML += '<h1>search pics</h1>';
$searchPicsHTML += '<article>';
$searchPicsHTML += '<p class="lead">Type in a search term to find the most recent photos that  have been posted on Flickr.</p>';
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


// begin ajax for friends pics
var $friendsPicsHTML = " ";
$friendsPicsHTML += '<section>';
$friendsPicsHTML += '<h1>friends pics</h1>';
$friendsPicsHTML += '<article>';
$friendsPicsHTML += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
$friendsPicsHTML += '</article>';
$friendsPicsHTML += '</section>';

var $friendsPicsFormHTML = " ";
$friendsPicsFormHTML += '<form class="navbar-form navbar-center" role="search">';
$friendsPicsFormHTML += '<div class="form-group">';
$friendsPicsFormHTML += '<label for="search"></label>';
$friendsPicsFormHTML += '<div class="form-group">';
$friendsPicsFormHTML += '<input type="search" class="form-control" id="searchFriends" name="search" placeholder="Friends Pics">';
$friendsPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$friendsPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
$friendsPicsFormHTML += '</button>';
$friendsPicsFormHTML += '</div>';
$friendsPicsFormHTML += '</div>';
$friendsPicsFormHTML += '</form>';
// end ajax for friends pics


// begin ajax for friends pics
var $favoritesHTML = " ";
$favoritesHTML += '<section>';
$favoritesHTML += '<h1>friends fav pics</h1>';
$favoritesHTML += '<article>';
$favoritesHTML += '<p class="lead">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s name and find their favorite photos.</p>';
$favoritesHTML += '</article>';
$favoritesHTML += '</section>';

var $favoritesPicsFormHTML = " ";
$favoritesPicsFormHTML += '<form class="navbar-form navbar-center" role="search">';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<label for="search"></label>';
$favoritesPicsFormHTML += '<div class="form-group">';
$favoritesPicsFormHTML += '<input type="search" class="form-control" id="search" name="search" placeholder="Favorite Pics">';
$favoritesPicsFormHTML += ' <button id="submit" type="submit" value="search" class="btn btn-default navbar-btn">';
$favoritesPicsFormHTML += '<span class="glyphicon glyphicon-search"> Search </span>';
$favoritesPicsFormHTML += '</button>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</div>';
$favoritesPicsFormHTML += '</form>';
// end ajax for friends pics


// begin ajax for about HTML
var $aboutHTML = " ";
$aboutHTML += '<section>';
$aboutHTML += '<h1>about flickrpics</h1>';
$aboutHTML += '<article>';
$aboutHTML += '<p class="lead">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
$aboutHTML += '</article>';
$aboutHTML += '</section>';
// end ajax for about HTML

//begin ajax for home
var $home = " ";
$home += '<section>';
$home += '<h1>Search away</h1>';
$home += '<article>';
$home += '<p class="lead">Click on search pics, friends pics or favorites and then enter you search term....</p>';
$home += '</article>';
$home += '</section>';
// end ajax for about home



$("#home").click(function(){
	 document.getElementById("toFill").innerHTML = $home;
	 $('form').hide();
	 $('form').show();
});

$("#about").click(function() {
    document.getElementById("toFill").innerHTML = $aboutHTML;
    $('form').hide();
	$('form').show();
});

$("#searchPics").click(function() {
    document.getElementById("toFill").innerHTML = $searchPicsHTML;
    document.getElementById("form").innerHTML = $searchPicsFormHTML;
});

$("#friendsPics").click(function() {
    document.getElementById("toFill").innerHTML = $friendsPicsHTML;
    document.getElementById("form").innerHTML = $friendsPicsFormHTML;
});

$("#favorites").click(function() {
    document.getElementById("toFill").innerHTML = $favoritesHTML;
    document.getElementById("form").innerHTML = $favoritesPicsFormHTML;
});




// end ajax for menu