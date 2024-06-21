let lis = document.querySelectorAll("ul li ")
let exp = document.querySelector(".experiment")

if (window.localStorage.getItem("color")) { // if there is color in local storage
    exp.style.backgroundColor = window.localStorage.getItem("color");
} else { // if no is color in local storage 
    console.log("No")
} 


lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset.color)

        //* Remove Active Class From All Lis
        lis.forEach(function (li) {
            li.classList.remove("active");
        })
        //* Add Acive Class To current Link 
        e.currentTarget.classList.add("active");
        //* Add Current Color To local Storage
        window.localStorage.setItem("color", "e.currentTarget.dataset.color")
        // Change Div BackGround Color 
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    })
})