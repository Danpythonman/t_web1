/** Changes the variable controlling the time format */

function changeFormat()
{
    /** Toggles the variable controlling the time format 
     * current_format == 0 means 24h format
     * current_format == 1 means AM/PM format
    */

    // Get the variable and change it
    var current_format = localStorage.getItem("time_format");
    if (current_format == 1)
    {
        current_format = 0;
    }
    else
    {
        current_format= 1;
    }

    // Store the variable back
    localStorage.setItem("time_format", current_format);
}
