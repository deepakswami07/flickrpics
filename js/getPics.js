$(document).ready(function() {
    $("#searchPics").click(function() {
        $(this).text() === "Search Pics";
        return searchPictures();
    });
});

$(document).ready(function() {
    $("#friendsPics").click(function() {
        $(this).text() === "Friends Pics";
    	$(".image").hide();
        return friendsPictures();
    });
});

$(document).ready(function() {
    $("#favorites").click(function() {
        $(this).text() === "Favorites";
    	$(".image").hide();
        return favoritePictures();
    });
});



// $("#submit").click(function(event){
// 		event.preventDefault()
// 		var searchVal = $("#search").val();
// 		console.log(searchVal);
// 		if (searchVal.length > 0) {
// 			console.log("enter search term");
// 		} else {
// 			console.log("hello");
// 		}

// 	});
















