/** Changes the variable controlling the time format */

function changeFormat()
{
    /** Toggles the variable controlling the time format 
     * current_format == 0 means 24h format
     * current_format == 1 means AM/PM format
    */

    // Check the variable and change it
    if (localStorage.getItem("time_format") == 1)
    {
        localStorage.setItem("time_format", 0);
    }
    else
    {
        localStorage.setItem("time_format", 1);
    }
}
