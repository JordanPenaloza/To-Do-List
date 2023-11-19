// Grabs text
const textinput = document.querySelector('.textarea');
// Grabs button input
const buttoninput = document.querySelector('.submitbutton');
// Grabs the list of items in todo list
const itemlist = document.querySelector('.todolist');

const bestinput = document.querySelector('.bestbutton');

function clickButton(event) {
    // function to call addItem
    event.preventDefault();
    addItem()
} 

function addItem() {
    // creates a an element for the new item
    const newItem = document.createElement('div')
    // adds a class 'newItem' to the element
    newItem.classList.add('newItem')
    
    // creates an element for the text in our item
    const itemContent = document.createElement('p')
    // adds a class 'item' to the element
    itemContent.classList.add('itemcontent')
    itemContent.contentEditable = "true"
    // the text of the element 'p' is what the text is in our query selector
    itemContent.innerText = textinput.value
    // add the itemContent to the newItem div
    newItem.appendChild(itemContent)

    // if textbox is empty, do nothing
    if (textinput.value === '') {
        alert("Please input a task!");
        return
    } else {
        // create a button to check off items
        const checkbutton = document.createElement("button")
        // check icon
        checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
        // adds class
        checkbutton.classList.add("check-button")
        // adds checkButton to the newItem
        newItem.appendChild(checkbutton)

        // creates a button to delete items
        const trashbutton = document.createElement("button")
        // makes the text inside to say trash
        trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        // adds class
        trashbutton.classList.add("trash-button")
        // add trashbutton to the newItem
        newItem.appendChild(trashbutton)

        // add the new item to the list of items
        itemlist.appendChild(newItem)
        // reset the text in textbox to blank to prep next input
        textinput.value = ''
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

function bestsound() {
    const dj = new Audio("assets/best.mp3");
    dj.play();
}

bestinput.addEventListener("click", bestsound)
buttoninput.addEventListener('click', clickButton)
itemlist.addEventListener('click', deleteItem)
itemlist.addEventListener('click', checkItem)