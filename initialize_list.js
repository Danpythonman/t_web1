function checkExpiry()
{
    let notes = JSON.parse(localStorage.getItem("notes"));
    let expires = JSON.parse(localStorage.getItem("expires"));

    for (let i = 0; i < notes.length; i++)
    {
        if (expires[i] != null)
        {
            if (expires[i] != getDate())
            {
                notes.splice(i, 1);
                expires.splice(i, 1);
                checkExpiry();
            }
        }
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("expires", JSON.stringify(expires));
}

function loadNotes()
{
    /** Displays the notes list from local storage to the to-do list */

    if (localStorage.getItem("notes") === null)
    {
        // Add empty list to local storage
        localStorage.setItem("notes", "[]");
        localStorage.setItem("expires", "[]");
    }
    else
    {
        let notes = JSON.parse(localStorage.getItem("notes"));
        let expires = JSON.parse(localStorage.getItem("expires"));

        for (let i = 0; i < notes.length; i++)
        {
            // Create a list item element
            let new_item = document.createElement("li");
            new_item.className = "note_class";
            new_item.id = "note" + i;

            // Create a checkbox for each note
            let new_checkbox = document.createElement("input");
            new_checkbox.id = "check" + i;
            new_checkbox.setAttribute("type", "checkbox");
            new_checkbox.onclick = function() { crossout(event) };

            // Create a delete button for each note
            let new_button = document.createElement("button");
            new_button.className = "delete_note";
            new_button.id = "btn" + i;
            new_button.onclick = function() { deleter(event); }
            new_button.style.position = "absolute";
            new_button.style.right = "20px";
            new_button.innerHTML = "x";

            // Create text node of the input
            let item_value = document.createTextNode(notes[i]);

            // Append the input and button to the list element
            new_item.appendChild(new_checkbox);
            new_item.appendChild(item_value);
            new_item.appendChild(new_button);

            // Append the list element to the list of notes
            document.getElementById("note_list").appendChild(new_item)

            if (expires[i] != null)
            {
                console.log("2");
                new_checkbox.click();
            }
        }
    }
}
