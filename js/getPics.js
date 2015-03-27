// begin navbar collapse on selection ///
$('.navbar-collapse').click('li', function() {
    $('.navbar-collapse').collapse('hide');
});
// begin navbar collapse on selection ///


////////////////////////////////////////////////////////
//begin loading getJSON calls//////////////////////////
function checkPictures() {
    $("#getPictures").click(function() {
        // $("#getPictures").text() === "Generate pics";
        if ($("#links > a").length > 0) {
            console.log("hello");
            // console.log($("#links").attr("href").length > 0 );
            $("#links > a").remove();
        } else {
            return pictures();
        }
    });
}

function enterSearch() {

}

function loadAll() {
    $(document).ready(function() {
        $("#pictures").click(function() {
            document.getElementById("links").innerHTML = "";
            checkPictures();
        });

        $("#searchPics").click(function() {
            document.getElementById("links").innerHTML = "";
            $("#search").text() === "Search";
            return searchPictures();
        });

        $("#userID").click(function() {
            document.getElementById("links").innerHTML = "";
            $("#searchFriendsID").text() ===
                "Search using id";
            return useridPictures();
        });

        $("#username").click(function() {
            document.getElementById("links").innerHTML = "";
            $("#searchFriendsName").text() === "Username";
            return usernamePictures();
        });
        $("#favorites").click(function() {
            document.getElementById("links").innerHTML = "";
            $("#searchFriendsFav").text() === "Favorites";
            return favoritePictures();
        });

        $("#home").click(function() {
            document.getElementById("links").innerHTML = "";
        });

        $("#about").click(function() {
            document.getElementById("links").innerHTML = "";
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