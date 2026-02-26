// ADD YOUR CODE BELOW 

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
    "grapes",
    "bread",
    "tea"
];



// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById('add-item-button');

// add more variables below
const textInput = document.getElementById('text');
const sortBtn = document.getElementById("sort");
const clearBtn = document.getElementById("clear");
const list = document.getElementById('list');



// 3. Write a function to display all items in the #list element
function updateList() {

    // clear list first
    list.innerHTML = "";

    // loop through array
    for (let i = 0; i < todoItems.length; i++) {

        // create list item
        let li = document.createElement("li");

        li.textContent = todoItems[i];

        // remove item when clicked
        li.addEventListener("click", function () {

            todoItems.splice(i, 1);

            updateList();

        });

        
        list.appendChild(li);
    }
}

updateList();



// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener('click', function () {

    let newItem = textInput.value;

    if (newItem !== "") {

        todoItems.push(newItem);

        textInput.value = "";

        updateList();
    }

});




// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {

    todoItems.sort();

    updateList();

});




// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {

    todoItems = [];

    updateList();

});
