$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();
		$search = $('#search')
	

var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var animal = $(this).text();

var flickrOptions = {
	tag: animal,
	format: "json"
}

function flickrImages(data){
	var photoHTML = "";
	photoHTML =+ '<div class="container">';
	photoHTML =+ '<div class="row">';
	photoHTML =+ '<div class="col-xs-6 col-sm-4">';
	photoHTML = '<ul>';
	$.each(data.items, function(i, photos){
		photoHTML += '<li>';
		photoHTML += '<a href=" ' + photos.link + ' " class="image">';
		photoHTML += '<img src=" ' + photos.media.m + ' ">';
		photoHTML += '</a>';
		photoHTML += '</li>';

	});
	photoHTML += '</ul>';
	photoHTML += '</div>';
	photoHTML += '</div>';
	photoHTML += '</div>';
}

	$.getJSON(flickrAPI, flickrOptions, flickrImages );
});


	});




