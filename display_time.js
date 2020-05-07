/** Displays and updates the time */

// time_format is stored in the user's browser, controls 24h vs AM/PM format
// Set it to AM/PM if it does not already have a value
if (localStorage.getItem("time_format") == undefined)
{
    localStorage.setItem("time_format", 1);
}

function display()
{
    /** Displays the time */

    var full_date = new Date()
    var hours = full_date.getHours();
    var minutes = full_date.getMinutes();
    var seconds = full_date.getSeconds();
    var ap = "AM"
    var format = localStorage.getItem("time_format");

    // Format == 1 means AP/PM format
    if (format == 1)
    {
        // Puts the numbers in the right place
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
        full_time = hours + ":" + minutes + ap;
    }
    // Format == 0 means 24h format
    else
    {
        // Puts the numbers in the right place
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
        full_time = hours + ":" + minutes;
    }

    document.getElementById("time").innerHTML = full_time;
}

// Run the function every second so that the time updates every second
setInterval(display, 1000);
