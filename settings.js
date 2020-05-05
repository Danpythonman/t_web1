/** Enables and disables the settings dropdown menu */
function toggleSettings()
{
    /** Toggle display of dropdown menu */
    if (document.getElementById("setting_bars").style.display == "flex")
    {
        document.getElementById("setting_bars").style.display = "none";
    }
    else
    {
        document.getElementById("setting_bars").style.display = "flex"
    }
}
