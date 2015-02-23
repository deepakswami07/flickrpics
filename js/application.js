var $friendsPicsHTML = " ";
	$friendsPicsHTML += '<section>';
	$friendsPicsHTML += '<h1>friends pics</h1>';
	$friendsPicsHTML += '<article>';
	$friendsPicsHTML += '<p class="lead">Too busy to joint Flickr but you want to stay connected to your friends by viewing their recent pictures? Type in the name of your friend and see what their most recent posts are.</p>';
	$friendsPicsHTML +=	'</article>';
	$friendsPicsHTML += '</section>';

// var $favoritesHTML = " ";
// 	$favoritesHTML += '<section>';
// 	$favoritesHTML += '<h1>friends favorites pics</h1>';
// 	$favoritesHTML += '<article>';
// 	$favoritesHTML += '<p class="lead">Keep up-to-date on your friends’ favorite pictures. Type in your friend’s name and find their favorite photos.</p>';
// 	$favoritesHTML +=	'</article>';
// 	$favoritesHTML += '</section>';


$("#friendsPics").click(function(){
	console.log("hello");
	document.getElementById("toFill").innerHTML = $friendsPicsHTML;
});

// $("#favorites").click(function(){
// 	console.log("hello");
// 	document.getElementById("toFill").innerHTML = $favoritesHTML;
//     });




