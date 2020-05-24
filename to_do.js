/** Controls opening and closing to-do list and adding new items to the list */

function enterInput(event)
{
    /** Adds text in the input if enter is pressed */
    if (event.keyCode == 13)
    {
        addItem();
    }
}

function displayList()
{
    /** Opens to-do list (display list and stop displaying button) */

    document.getElementById("todo_button").style.display = "none";
    document.getElementById("todo_list").style.display = "flex";

    // Automatically put cursor to to-do input
    document.getElementById("todo_input").focus();

    // Add listener for using the enter key to add item
    document.getElementById("todo_input").addEventListener(
        "keyup", function() { enterInput(event); })
}

function closeList()
{
    /** Closes to-do list (display button and stop displaying list) */

    document.getElementById("todo_button").style.display = "flex";
    document.getElementById("todo_list").style.display = "none";

    // Remove listener for using the enter key to add item
    document.getElementById("todo_input").removeEventListener(
        "keyup", function() { enterInput(event); })
}

function addItem()
{
    /** Adds the text in the notes input field to the list of notes */

    // Put the text in the input field into notes list
    var current_index;
    let notes = JSON.parse(localStorage.getItem("notes"));
    current_index = notes.length;
    notes.push(document.getElementById("todo_input").value);
    localStorage.setItem("notes", JSON.stringify(notes));

    let expires = JSON.parse(localStorage.getItem("expires"));
    expires.push(null);
    localStorage.setItem("expires", JSON.stringify(expires));

    // Create a list item element
    let new_item = document.createElement("li");
    new_item.className = "note_class";
    new_item.id = "note" + current_index;

    // Create text node of the input
    let item_value = document.createTextNode(
        document.getElementById("todo_input").value);

    // Create a checkbox for each note
    let new_checkbox = document.createElement("input");
    new_checkbox.id = "check" + current_index;
    new_checkbox.setAttribute("type", "checkbox");
    new_checkbox.onclick = function() { crossout(event) };

    // Create a delete button for each note
    let new_button = document.createElement("button");
    new_button.className = "delete_note"
    new_button.id = "note" + current_index;
    new_button.onclick = function() { deleter(event); }
    new_button.style.position = "absolute";
    new_button.style.right = "20px";

    // Append the input and button to the list element
    new_item.appendChild(new_checkbox);
    new_item.appendChild(item_value);
    new_item.appendChild(new_button);

    // Append the list element to the list of notes
    document.getElementById("note_list").appendChild(new_item)

    document.getElementById("note_list").innerHTML = "";
    loadNotes();

    // Empty the text box
    document.getElementById("todo_input").value = "";
}
