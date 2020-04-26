function display()
{
    var full_date = new Date()
    var hours = full_date.getHours();
    var minutes = full_date.getMinutes();
    var seconds = full_date.getSeconds();
    var ap = "AM"

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
    if (hours > 11)
    {
        if (hours > 12)
        {
            hours = hours - 12;
        }
        ap = "PM";
    }
    else
    {
        ap = "AM";
    }

    full_time = hours + ":" + minutes + ":" + seconds + ap;
    document.getElementById("time").innerHTML = full_time;
}
setInterval(display, 1000);

function setCookie()
{
    var date = new Date();
    date.setTime(date.getTime() + (1*24*60*60*1000));
    var cookie_expiry = "expires=" + date.toGMTString;

    var name = prompt("Enter your name", "");
    var cookie_name = "username=" + name;

    document.cookie = cookie_name + ";" + cookie_expiry + ";path=/";

    document.getElementById("name").innerHTML = name;
}

function getCookie()
{
    var name = "username=";
    var decoded_cookie = decodeURIComponent(document.cookie);
    var split_cookie = decoded_cookie.split(";");

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

function checkCookie()
{
    var name = getCookie();
    if (name == "")
    {
        setCookie();
    }
    else
    {
        document.getElementById("name").innerHTML = name;
    }
}