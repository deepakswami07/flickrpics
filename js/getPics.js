////////////////////////////////////////////////////////
//begin loading getJSON calls//////////////////////////
function loadAll() {
    $(document).ready(function() {
        // decided to not use pictures button //
        $("#pictures").click(function() {
            // document.getElementById("photos").innerHTML = "";
            $("#getPictures").text() === "Generate pics";
            // window.onload = pictures();
            return pictures();
        });
        $("#searchPics").click(function() {
            // document.getElementById("photos").innerHTML = "";
            $("#search").text() === "Search";
            return searchPictures();
        });
        $("#userID").click(function() {
            // document.getElementById("photos").innerHTML = "";
            $("#searchFriendsID").text() ===
                "Search using id";
            return useridPictures();
        });
        $("#username").click(function() {
            // document.getElementById("photos").innerHTML = "";
            $("#searchFriendsName").text() === "Username";
            return usernamePictures();
        });
        $("#favorites").click(function() {
            // document.getElementById("photos").innerHTML = "";
            $("#searchFriendsFav").text() === "Favorites";
            return favoritePictures();
        });
        $("#home").click(function() {
            document.getElementById("photos").innerHTML =
                "";
        });
        $("#about").click(function() {
            document.getElementById("photos").innerHTML =
                "";
        });
    });
}
loadAll();
//begin loading getJSON calls//////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//begin signup passowrd/confirm password validation form
var $signupPassword = $("#signupPassword");
var $signupConfirmPassword = $("#signupConfirmPassword")
var $signupEmail = $("#signupEmail");
var $loginEmail = $("#loginEmail");

function isSignupPasswordValid() {
    return $signupPassword.val().length > 4;
}

function areSignupPasswordConfirmMatching() {
    return $signupPassword.val() === $signupConfirmPassword.val();
}

function isEmailValid() {
    var emailPattern = new RegExp(/(.+)@(.+){2,}\.(.+){2,}/);
    var email = $signupEmail.val();
    var email = $loginEmail.val();
    return emailPattern.test(email);
}
$("#signupForm p").hide();
$("#loginForm p").hide();

function checkSignupPassword() {
    if (isSignupPasswordValid()) {
        $signupPassword.next().hide();
    } else {
        $signupPassword.next().show();
    }
}

function checkSignupConfirmPassword() {
    if (areSignupPasswordConfirmMatching()) {
        $signupConfirmPassword.next().hide();
    } else {
        $signupConfirmPassword.next().show();
    }
}

function checkSignupEmail() {
    if (isEmailValid()) {
        $signupEmail.next().hide();
    } else {
        $signupEmail.next().show();
    }
}

function checkLoginEmail() {
    if (isEmailValid()) {
        $loginEmail.next().hide();
    } else {
        $loginEmail.next().show();
    }
}
$signupPassword.focus(checkSignupPassword).keyup(checkSignupPassword).keyup(
    checkSignupConfirmPassword);
$signupConfirmPassword.focus(checkSignupConfirmPassword).keyup(
    checkSignupConfirmPassword);
$signupEmail.focus(checkSignupEmail).keyup(checkSignupEmail);
$loginEmail.focus(checkLoginEmail).keyup(checkLoginEmail);
