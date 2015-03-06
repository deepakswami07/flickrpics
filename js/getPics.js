$(document).ready(function() {
    $("#pictures").click(function() {
        document.getElementById("photos").innerHTML = " ";
        $("#getPictures").text() === "Generate pics";
        return pictures();
    });
});

$(document).ready(function() {
    $("#searchPics").click(function() {
        document.getElementById("photos").innerHTML = " ";
        $("#search").text() === "Search";
        return searchPictures();
    });
});


$(document).ready(function() {
    $("#userID").click(function() {
        document.getElementById("photos").innerHTML = " ";
        $("#searchFriendsID").text() === "Search using id";
        return useridPictures();
    });
});


$(document).ready(function() {
    $("#username").click(function() {
        document.getElementById("photos").innerHTML = " ";
        $("#searchFriendsName").text() === "Username";
        return usernamePictures();
    });
});

$(document).ready(function() {
    $("#favorites").click(function() {
        document.getElementById("photos").innerHTML = " ";
        $("#searchFriendsFav").text() === "Favorites";
        return favoritePictures();
    });
});


//begin signup passowrd/confirm password validation form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")
var $signupEmail = $("#signupEmail");
var $loginEmail = $("#loginEmail");

function isSignupPasswordValid(){
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching(){
    return $signupPassword.val() === $signupConfirmPassword.val();
}

function isEmailValid(){
    var emailPattern = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
    var email = $signupEmail.val();
    var email = $loginEmail.val();
    return emailPattern.test(email);
}

$("#signupForm p").hide();
$("#loginForm p").hide();

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

function checkSignupEmail(){
    if( isEmailValid() ){
        $signupEmail.next().hide();
    } else {
        $signupEmail.next().show();
    }
}

function checkLoginEmail(){
    if( isEmailValid() ){
        $loginEmail.next().hide();
    } else {
        $loginEmail.next().show();
    }
}
$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(checkSignupConfirmPassword);
$signupEmail.focus(checkSignupEmail).keyup(checkSignupEmail);
$loginEmail.focus(checkLoginEmail).keyup(checkLoginEmail);


//end signup/login passowrd/confirm password validation form
/////////////////////////////
////////////////////////////


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



























