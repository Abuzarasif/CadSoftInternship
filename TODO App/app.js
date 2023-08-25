var list = document.getElementById("list");

function add() {
    // created and set li value

    let li = document.createElement("li");
    let litext = document.createTextNode(list.value)
    li.appendChild(litext);

    // displaying the list items in ul on the screen

    let ul = document.getElementById("ul");
    ul.appendChild(li)

    // clearing the list 
    list.value = " ";

    // creating the delete button 

    let deleteBtn = document.createElement("button");
    let deleteText = document.createTextNode("delete");
    deleteBtn.appendChild(deleteText);

    // setting attributes to the delete button
    deleteBtn.setAttribute("onclick", "deleteText(this)");
    deleteBtn.setAttribute("class", "delete");

    // displaying the list items in ul on the screen

    li.appendChild(deleteBtn);

    // to create edit button
    let editBtn = document.createElement("button")
    let editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText);

    // setting attributes to the edit button
    editBtn.setAttribute("onclick", "editText(this)");
    editBtn.setAttribute("class", "edit");

    // displaying the list items in ul on the screen
    li.appendChild(editBtn);
}

// to delete single Element

function deleteText(e) {
    e.parentNode.remove();
}
// to delete all Elements

function deleteAll() {
    ul.innerHTML = '';
}

// function to create edit button functionality
function editText(e) {

    console.log(e.parentNode.firstChild.nodeValue);
    let val = prompt("please enter the text you want to edit", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}
// function editText(e) {
//     console.log(e.parentNode.firstChild.nodeValue);
//     let val = prompt("Please enter the text you want to edit", e.parentNode.firstChild.nodeValue);
//     e.parentNode.firstChild.nodeValue = val;
// }