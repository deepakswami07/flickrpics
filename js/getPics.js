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


//begin signup passowrd/confirm password validation form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")

function isSignupPasswordValid(){
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching(){
    return $signupPassword.val() === $signupConfirmPassword.val();
}

$("#signupForm p").hide();


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

var $signupEmail = $('#signupEmail');


function isEmailValid(){
    return $signupEmail.val() === /(.+)@(.+){2,}\.(.+){2,}/;
}


function checkEmail(){
    if( isEmailValid() ){
        $signupEmail.next().hide();
    } else {
        $signupEmail.next().show();
    }
}

$signupEmail.focus(checkEmail).keyup(checkEmail);
$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(checkSignupConfirmPassword);
//end signup passowrd/confirm password validation form
/////////////////////////////
////////////////////////////

//begin email validation for register
/*
checks that email isn't blank, @ symbol with at least 1 character before it and least 2 letters after it,
ends with a fullstop with at least 2 letters after it
*/



// var booking_email = $('input[name=email]').val();

 // if( booking_email == '' || booking_email.indexOf('@') == -1 || booking_email.indexOf('.') == -1 ) {

 //   // perform my alert

 // }

 // indexOf("welcome")
//end email validation for register
//////////////////////////////////
/////////////////////////////////

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














