/** Controls how notes will be deleted */

function deleter(event)
{
    /** Get the index of the element to be deleted,
     * get the notes from local storage,
     * delete the element,
     * put the new list in local storage,
     * redraw notes*/

    let notes;

    // Will return something like btn1, so get the last index: "1"
    let element_to_delete = event.srcElement.id;
    let index_to_delete = element_to_delete[element_to_delete.length - 1];

    notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(index_to_delete, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    let expires = JSON.parse(localStorage.getItem("expires"));
    expires.splice(index_to_delete, 1);
    localStorage.setItem("expires", JSON.stringify(expires));

    document.getElementById("note_list").innerHTML = "";
    loadNotes();
}

function crossout(event)
{
    // Will return something like check1, so get the last index: "1"
    let element_to_cross = event.srcElement.id;
    let index_to_cross = element_to_cross[element_to_cross.length - 1];

    let cross = "note" + index_to_cross;

    let expiry_list = JSON.parse(localStorage.getItem("expires"));

    if (document.getElementById(cross).style.textDecoration == "line-through")
    {
        document.getElementById(cross).style.textDecoration = "none";
        // Remove expiry
        expiry_list[index_to_cross] = null;
    }
    else
    {
        document.getElementById(cross).style.textDecoration = "line-through";
        // Set expiry
        date_today = new Date();
        expiry_list[index_to_cross] = date_today.getDate();
    }
    localStorage.setItem("expires", JSON.stringify(expiry_list));
}
