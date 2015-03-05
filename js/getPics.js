$(document).ready(function() {
    $("#pictures").click(function() {
        $(this).text() === "Generate pics";
        $(".image").prev().hide();
        return pictures();
    });
});

$(document).ready(function() {
    $("#searchPics").click(function() {
        $(this).text() === "Search";
        $(".image").prev().hide();
        return searchPictures();
    });
});


$(document).ready(function() {
    $("#userID").click(function() {
        $(this).text() === "UserID";
    	$(".image").prev().hide();
        return useridPictures();
    });
});


$(document).ready(function() {
    $("#username").click(function() {
        $(this).text() === "Username";
       $(".image").prev().hide();
        return usernamePictures();
    });
});

$(document).ready(function() {
    $("#favorites").click(function() {
        $(this).text() === "Favorites";
    	$(".image").prev().hide();
        return favoritePictures();
    });
});


//begin signup passowrd/confirm password validation form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")
var $signupEmail = $("#signupEmail");

function isSignupPasswordValid(){
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching(){
    return $signupPassword.val() === $signupConfirmPassword.val();
}

function isEmailValid(){
    var emailPattern = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
    var email = $signupEmail.val();
    return emailPattern.test(email);
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

function checkEmail(){
    if( isEmailValid() ){
        $signupEmail.next().hide();
    } else {
        $signupEmail.next().show();
    }
}

$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(checkSignupConfirmPassword);
$signupEmail.focus(checkEmail).keyup(checkEmail);

//begin email validation for register





//end signup passowrd/confirm password validation form
/////////////////////////////
////////////////////////////




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














