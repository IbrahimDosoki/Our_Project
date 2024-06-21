let lis = document.querySelectorAll("ul li ");
let exp = document.querySelector(".experiment");




if (window.localStorage.getItem("color")) {  // if there is color in localStorage
    // [1] Add color to div
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove active clss from all alis  
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // [3] Add active class to current color 
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");

} 

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color)
        // Remove active class from all lis 

        lis.forEach((li) => {
            li.classList.remove("active");
        });

        // Add class to current element 
        e.currentTarget.classList.add("active");

        // Add current color to local storage 
        window.localStorage.setItem("color", e.currentTarget.dataset.color);

        // Change div background color 
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});