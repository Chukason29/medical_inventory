// Getting the DOM elements
const addItemLink = document.getElementById("add-item-link")
const manageItemLink = document.getElementById("manage-item-link")
const dashLink = document.getElementById("dash-link")
const addItemPage = document.getElementById("add-item-page")
const manageItemPage = document.getElementById("manage-item-page")
const dashPage = document.getElementById("dash-page")
const itemName = document.getElementById("item-name")
const category = document.getElementById("category")
const color = document.getElementById("color")
const submitItem = document.getElementById("submit-item")
const tableBody = document.getElementById("table-body")
const allLinks = document.querySelectorAll("#inventory-div > div")

const hideAllLinks = () => {
    let linkArray = Array.from(allLinks)
    linkArray.forEach(item => item.classList.add("hide"))
}
addItemLink.addEventListener("click", () =>{
    hideAllLinks()
    addItemPage.classList.remove("hide")
})
manageItemLink.addEventListener("click", () =>{
    hideAllLinks()
    manageItemPage.classList.remove("hide")
})
dashLink.addEventListener("click", () =>{
    hideAllLinks()
    dashPage.classList.remove("hide")
})
