$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		$searchField = $('#search');
	
console.log($searchField);

var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var animal = $searchField.val();

var flickrOptions = {
	tag: animal,
	format: "json"
}

function flickrImages(data){
	var photoHTML = "";
	photoHTML = '<ul>';
	$.each(data.items, function(i, photos){
		photoHTML += '<li class="col-sm-3 col-sm-3">';
		photoHTML += '<a href=" ' + photos.link + ' " class="image">';
		photoHTML += '<img src=" ' + photos.media.m + ' ">';
		photoHTML += '</a>';
		photoHTML += '</li>';

	});
	photoHTML += '</ul>';
	$("#photos").html(photoHTML);
	}

	$.getJSON(flickrAPI, flickrOptions, flickrImages );
	});

});




