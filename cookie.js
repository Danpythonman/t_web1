/** Sets a cookie containing the user's name */

function checkCookie()
{
    /** Checks if there is already a cookie */

    // Get the cookie and check if it is empty
    var name = getCookie();
    if (name == "")
    {
        // Set the cookie if its empty
        setCookie();
    }
    else
    {
        document.getElementById("name").innerHTML = name;
    }
}

function getCookie()
{
    /** Gets cookie from browser */

    var name = "username=";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var split_cookie = decoded_cookie.split(";");

    // Return the name in the cookie
    for (var i = 0; i < split_cookie.length; i++)
    {
        var piece = split_cookie[i];
        while (piece.charAt(0) == " ")
        {
            piece = piece.substring(1);
        }
        if (piece.indexOf(name) == 0)
        {
            return piece.substring(name.length, piece.length);
        }
    }
    return "";
}

function setCookie()
{
    /** Set the cookie here */

    // Set cookie expiry; currently expires every year
    var date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    var cookie_expiry = "expires=" + date.toUTCString();

    // Get user's name
    var name = prompt("Enter your name", "");
    var cookie_name = "username=" + name;

    // Format and store the cookie
    document.cookie = cookie_name + ";" + cookie_expiry + ";path=/";

    document.getElementById("name").innerHTML = name;
}
