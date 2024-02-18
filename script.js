// Getting the DOM elements
const addItemLink = document.getElementById("add-item-link")
const manageItemLink = document.getElementById("manage-item-link")
const dashLink = document.getElementById("dash-link")
const addItemPage = document.getElementById("add-item-page")
const manageItemPage = document.getElementById("manage-item-page")
const dashPage = document.getElementById("dash-page")
const itemForm = document.getElementById("item-form")
const itemNameInput = document.getElementById("item-name")
const categoryInput = document.getElementById("category")
const colorInput = document.getElementById("color")
const amountInput = document.getElementById("item-amount")
const submitItem = document.getElementById("submit-item")
const tableBody = document.getElementById("table-body")
const allLinks = document.querySelectorAll("#inventory-div > div")
const updateDialog = document.getElementById("update-dialog")
const date = new Date()
//Object constructor to create each item object
function Items(productId, name, amount, category, color){
    this.productId = productId
    this.name = name;
    this.amount = amount;
    this.category = category;
    this.color = color
}

const itemArray = JSON.parse(localStorage.getItem("stocks")) || []
let currentItem = {}

/* 
    collectInput() function collects input from the form and pushes it itemArray
    and store in local storage 
*/
const collectInput = () => {
    const newItem = new Items(
        Date.now(),
        itemNameInput.value,
        parseInt(amountInput.value),
        categoryInput.value,
        colorInput.value
    )
    itemArray.push(newItem)
    localStorage.setItem("stocks", JSON.stringify(itemArray))
}

const reset = () =>{
    tableBody.innerHTML = "";
    currentItem = {}
}

/*
    showStocks helps in getting all the stock items from storage
*/
const showStocks = () =>{
    reset()
    itemArray.forEach(({productId, name, amount, category, color}) => {
        tableBody.innerHTML +=  `
        <tr>
            <td>${productId}</td>
            <td>${name}</td>
            <td>${amount}</td>
            <td>${date.getDate()}</td>
            <td>${category}</td>
            <td>${color}</td>
            <td id="${productId}">
                <button id="edit" onclick = "editItem(this)"><i class="fa-solid fa-pen-to-square"></i></button>
                <button id="delete" onclick = "deleteItem(this)"><i class="fa-solid fa-trash-can"></i></button>
                <button id="add-stock" onclick = "addStock(this)"><i class="fa-solid fa-arrow-up"></i></button>
            </td>
        </tr> `
    })
}
const hideAllPages = () => {
    let linkArray = Array.from(allLinks)// converting a NodeList to a proper array
    linkArray.forEach(item => item.classList.add("hide"))
}
addItemLink.addEventListener("click", () =>{
    hideAllPages()
    addItemPage.classList.remove("hide")
})
manageItemLink.addEventListener("click", () =>{
    hideAllPages()
    reset()
    showStocks()
    manageItemPage.classList.remove("hide")
})
dashLink.addEventListener("click", () =>{
    hideAllPages()
    dashPage.classList.remove("hide")
})

//submitting the form
itemForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    collectInput()
})

const editItem = (elementButton) => {
    //Checking if the item product id of the selected item is found
    const itemIndex = itemArray.findIndex(item => item.productId === parseInt(elementButton.parentElement.id))

    //if it is found, then assign it to the itrm property of currentItem
    if (itemIndex != -1) {
        currentItem.item = itemArray[itemIndex]
    }   
    const updateItemForm = document.getElementById("update-item-form")
    const updateItemNameInput = document.getElementById("update-item-name")
    const updateCategoryInput = document.getElementById("update-category")
    const updateColorInput = document.getElementById("update-color")
    const updateAmountInput = document.getElementById("update-item-amount")
    const updateSubmitItem = document.getElementById("update-submit-item")

    //Assigning values to update form fields
    updateItemNameInput.value = currentItem.item.name;
    updateCategoryInput.value = currentItem.item.category;
    updateColorInput.value = currentItem.item.color;
    updateAmountInput.value = currentItem.item.amount;
    
    


    updateDialog.showModal()
}
