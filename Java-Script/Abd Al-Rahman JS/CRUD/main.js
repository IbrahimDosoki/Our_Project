// Get total 
// Create Product
// Save in LocalStorage 
// Clear For Inputs After CLicked on Create Botton 
// Read in my Table
// Count 
// Delete
// Update
// Searche
// Clean Data 


let title = document.getElementById("title")
let price = document.getElementById("price")
let taxes = document.getElementById("taxes")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")


// Start In Function Get Total

  

function getTotal() {
    if (price.value !== " ") {
        let result = +price.value + +taxes.value + +ads.value - +discount.value
        total.innerHTML = result;
        total.style.backgroundColor = "#040"
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "#a00d02"
    }
}

// Creat Product 
let dataPro;
if (localStorage.product !== null ) {
    dataPro = JSON.parse(localStorage.product)
} else {
    dataPro = [];
}


submit.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    dataPro.push(newPro);
    // Local Storage 
    localStorage.setItem('product' , JSON.stringify(dataPro))

    clearData();
    shaowData();
} 


// Clear Dtat 
function clearData () {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = ""
    count.value = ""
    category.value = ""
}


// Read and Shaow Data 
function shaowData () {
    let table = "";
    for(let i =0; i < dataPro.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].parse}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete">delete</button></td>
        </tr>
        `

    }

    document.getElementById("tbody").innerHTML = table;
}
