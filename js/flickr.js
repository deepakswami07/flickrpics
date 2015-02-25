$(document).ready(function(){
	
	$('form').submit(function(event){
		event.preventDefault();
		console.log("hello");

		var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $searchField.val();

		var flickrOptions = {
		tags: animal,
		format: "json"
		}

function flickrImages(data){
	var photoHTML = "";

		var $searchField = $('#search');
		var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var animal = $searchField.val();
		console.log(animal);
		console.log("hello");

		var flickrOptions = {
      		 tags: animal,
        	 format: "json"
    	};
    	console.log(flickrOptions);

	function flickrImages(data){
	var photoHTML = "";
	if (data.items.length > 0) {
	photoHTML =+ '<div class="container">';
	photoHTML =+ '<div class="rows">';
	photoHTML += '<div class="jumbotron">';

	photoHTML = '<ul>';
	$.each(data.items, function(i, photos){
		photoHTML += '<li class="col-sm-3 col-sm-3">';
		photoHTML += '<a href=" ' + photos.link + ' " class="image">';
		photoHTML += '<img src=" ' + photos.media.m + ' ">';
		photoHTML += '</a>';
		photoHTML += '</li>';
	});

		} else {
		photoHTML =  photoHTML = '<p id="noMatch" class="lead text-danger"> No photos found to match your search word: ' + animal + '.</p>'
	}

	photoHTML += '</ul>';
	$("#photos").html(photoHTML);
	}

	$.getJSON(flickrAPI, flickrOptions, flickrImages );
	});

});




