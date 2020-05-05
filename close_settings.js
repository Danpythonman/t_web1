/** Closes the settings dropdown menu when clicking outside the menu
 * When click is detected, check if the click was not on a button
 * If the click was not on the button, close the dropdown menu
*/

window.onclick = function(event) {
    if ((!event.target.matches("#settings")) &&
        (!event.target.matches("#change_name")) &&
        (!event.target.matches("#change_time_format")))
    {
        document.getElementById("setting_bars").style.display = "none";
    }
}
