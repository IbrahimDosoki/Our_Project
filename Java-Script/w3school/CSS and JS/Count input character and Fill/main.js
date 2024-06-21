// get all elements 
let count =  document.querySelector(".count");
let progress =  document.querySelector(".prograss");
let input =  document.querySelector("input");
let div =  document.querySelector("div");
let maxLength = input.getAttribute("maxlength");




// get the number of chracters dynamically from html
count.innerHTML = maxLength;



//event on input 
input.oninput = function () {
    count.innerHTML = maxLength - this.value.length;

    // do add class zero in count 
    if(count.innerHTML == 0) {
        count.classList.add("zero");
    } else {
        count.classList.remove("zero");
    }

    // Set the Progress 
    progress.style.width = `${(this.value.length * 100) / maxLength}%`;
}
