// Selecting DOM Elements 
const startBtn = document.getElementById("startBtn");
endBtn = document.getElementById("endBtn");
prevNext = document.getElementById("prevNext");

numbers = document.querySelectorAll(".links");


// setting an intial step 
let currentStep = 0;

// Add event listeners to the number links 

numbers.forEach(function (number ,numIndex) {
    number.addEventListener("click",  function() {
        // Set the current step to the clicked number link
        currentStep = numIndex;
        console.log(currentStep);
    })
})