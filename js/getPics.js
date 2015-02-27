$(document).ready(function() {
    $("#searchPics").click(function() {
        $(this).text() === "Search Pics";
        return searchPictures();
    });
});

$(document).ready(function() {
    $("#friendsPics").click(function() {
    	console.log("hello");
        $(this).text() === "Friends Pics";
        return friendsPictures();
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
















