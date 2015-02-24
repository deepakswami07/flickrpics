// begin ajax for menu

var $searchPicsHTML = " ";
	$searchPicsHTML += '<section>';
	$searchPicsHTML += '<h1>search pics</h1>';
	$searchPicsHTML += '<article>';
	$searchPicsHTML += '<p class="lead">Type in a search term to find the most recent photos that  have been posted on Flickr.</p>';
	$searchPicsHTML +=	'</article>';
	$searchPicsHTML += '</section>';

var $friendsPicsHTML = " ";
	$friendsPicsHTML += '<section>';
	$friendsPicsHTML += '<h1>friends pics</h1>';
	$friendsPicsHTML += '<article>';
	$friendsPicsHTML += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
	$friendsPicsHTML +=	'</article>';
	$friendsPicsHTML += '</section>';

var $favoritesHTML = " ";
	$favoritesHTML += '<section>';
	$favoritesHTML += '<h1>friends fav pics</h1>';
	$favoritesHTML += '<article>';
	$favoritesHTML += '<p class="lead">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s name and find their favorite photos.</p>';
	$favoritesHTML +=	'</article>';
	$favoritesHTML += '</section>';

var $aboutHTML = " ";
	$aboutHTML += '<section>';
	$aboutHTML += '<h1>about flickrpics</h1>';
	$aboutHTML += '<article>';
	$aboutHTML += '<p class="lead">Keep your finger on the pulse of the latest picture trends on flickr.  Search for the most recent posts on flickr by category, friends or your friend’s favorites.</p>';
	$aboutHTML +=	'</article>';
	$aboutHTML += '</section>';


$("#searchPics").click(function(){
	document.getElementById("toFill").innerHTML = $searchPicsHTML;
});

$("#friendsPics").click(function(){
	document.getElementById("toFill").innerHTML = $friendsPicsHTML;
});

$("#favorites").click(function(){
	document.getElementById("toFill").innerHTML = $favoritesHTML;
});

$("#about").click(function(){
	document.getElementById("toFill").innerHTML = $aboutHTML;
});

// end ajax for menu


