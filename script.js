// Grabs text
const textinput = document.querySelector('.textarea');
// Grabs button input
const buttoninput = document.querySelector('.buttoninput');
// Grabs the list of items in todo list
const itemlist = document.querySelector('.todolist');

const darkModeToggle = document.getElementById('dark-mode-toggle');

function clickButton(event) {
    // function to call addItem
    event.preventDefault();
    addItem()
} 

function addItem() {
    // creates an element for the new item
    const newItem = document.createElement('div');

    // Generate a unique ID for the new item
    const itemId = 'item' + Date.now();

    // adds a class 'newItem' to the element
    newItem.classList.add('newItem');
    // Set the unique ID to the new item
    newItem.id = itemId;

    newItem.draggable = true; //makes items draggable

    // Add a black border to the newItem
    
    
    // creates an element for the text in our item
    const itemContent = document.createElement('p');
    // adds a class 'item' to the element
    itemContent.classList.add('itemContent');
    // the text of the element 'p' is what the text is in our query selector
    itemContent.innerText = textinput.value;
    // add the itemContent to the newItem div
    newItem.appendChild(itemContent);

    // if textbox is empty, do nothing
    if (textinput.value === '') {
        // alert("Please input a task!");
        return;
    } else {
        // create a button to check off items
        const checkbutton = document.createElement("button");
        // makes the text inside button to say check
        checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
        // adds class
        checkbutton.classList.add("check-button");
        // adds checkButton to the newItem
        newItem.appendChild(checkbutton);

        // creates a button to delete items
        const trashbutton = document.createElement("button");
        // makes the text inside to say trash
        trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        // adds class
        trashbutton.classList.add("trash-button");
        // add trashbutton to the newItem
        newItem.appendChild(trashbutton);

        // add the new item to the list of items
        itemlist.appendChild(newItem);
        // reset the text in textbox to blank to prep next input
        textinput.value = '';
    }
}


function deleteItem(event) {
    // the item focused is the item that was clicked on
    const item = event.target
    if(item.classList[0] === "trash-button") {
        // todolistitem is set the the items parent eleemnt
        const todolistitem = item.parentElement
        // remove item
        todolistitem.remove()
    }
}

function checkItem(event) {
    // the item focused is the item that was clicked on
    const item = event.target
    // if the item clicked has the class "trashbutton"
    if(item.classList[0] === ("check-button")) {
        // todolistitem is set the the items parent eleemnt
       const todolistitem = item.parentElement
       // toggles the class 'checked' on or off
       todolistitem.classList.toggle('checked')
    }
}

function handleDragStart(event) {
    //store the dragged item
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');

}

function handleDragOver(event) {
    // prevents default to allow drop
    event.preventDefault();
}

function handleDrop(event) {
    // Prevent default action (open as link for some elements)
    event.preventDefault();

    // Get the dragged item
    const draggedItemId = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedItemId);

    // Get the drop target
    const dropTarget = event.target.closest('.newItem');

    if (dropTarget) {
        // Insert the dragged item before the drop target
        dropTarget.parentNode.insertBefore(draggedItem, dropTarget);
    }

    // Remove the 'dragging' class from the dragged item
    draggedItem.classList.remove('dragging');
}

function handleDragEnd(event) {
    // remove the dragging class when drag operation is complete
    event.target.classList.remove('dragging');
}

function darkToggle(event) {
    document.body.classList.toggle('dark-mode');
}
// Function to save the 
// function saveData(){
//     localStorage.setItem("data", todolist.innerHTML);
// }
// 
// Function to show the data from
// function showTask() {
//     todolist.innerHTML = localStorage.getItem("data");
//}
//showTask();
//
// checks for button clicks
buttoninput.addEventListener('click', clickButton)
itemlist.addEventListener('click', deleteItem)
itemlist.addEventListener('click', checkItem)

//drag and drop event listeners
itemlist.addEventListener('dragstart', handleDragStart);
itemlist.addEventListener('dragover', handleDragOver);
itemlist.addEventListener('drop', handleDrop);
itemlist.addEventListener('dragend', handleDragEnd);

darkModeToggle.addEventListener('click', darkToggle);