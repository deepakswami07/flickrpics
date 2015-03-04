$(document).ready(function() {
    $("#pictures").click(function() {
        $(this).text() === "Generate pics";
        return pictures();
    });
});

$(document).ready(function() {
    $("#searchPics").click(function() {
        $(this).text() === "Search";
        return searchPictures();
    });
});


$(document).ready(function() {
    $("#friendsPics").click(function() {
        $(this).text() === "Friends Pics";
    	$(".image").hide();
        return friendsPicturesId();
    });
});


$(document).ready(function() {
    $("#friendsPics").click(function() {
        $(this).text() === "Friends Pics";
        $(".image").hide();
        return friendsPicturesName();
    });
});

$(document).ready(function() {
    $("#favorites").click(function() {
        $(this).text() === "Favorites";
    	$(".image").hide();
        return favoritePictures();
    });
});


//begin signup form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")

function isSignupPasswordValid(){
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching(){
    return $signupPassword.val() === $signupConfirmPassword.val();
}

$("#signupForm p").hide();

//end signup form

function checkSignupPassword(){
    if( isSignupPasswordValid() ){
        $signupPassword.next().hide();
    } else {
        $signupPassword.next().show();
    }
}

function checkSignupConfirmPassword(){
    if( areSignupPasswordConfirmMatching() ){
        $signupConfirmPassword.next().hide();
    } else {
        $signupConfirmPassword.next().show();
    }
}

$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(checkSignupConfirmPassword);
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












///end signup////














