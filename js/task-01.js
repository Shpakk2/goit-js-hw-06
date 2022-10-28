const list = document.querySelector("#categories")
// console.log(`Number of categories: ${listItems.length}`)

// console.log(listItems[0].children)
const listItems = list.children


function showList(listItems) {
    console.log(`Number of categories: ${listItems.length}`)
    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i].querySelector("h2").textContent
         console.log(`Category: ${listItem}`)
        const listItemProperties = listItems[i].querySelectorAll("li").length
        console.log(`Elements: ${listItemProperties}`)
    }
//     listI.forEach(item => {
//     console.log(item)
// })
    
}

showList(listItems)