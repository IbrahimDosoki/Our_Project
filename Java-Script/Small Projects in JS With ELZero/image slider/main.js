// Get Slider Items | Array.from [ES6 Feature]
let sliderImage = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides 
let slidesCount = sliderImage.length;

// Set Current Slide
let currentSlide = 1 ;

//SLode Number  Element 
let slideNumberElement = document.getElementById('slider-number');

// Previous and Next Buttons 

let nextButton = document.getElementById("next")
let prevButton = document.getElementById("previous")

// Handle Click On Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Creat the main UL element 
let paginationElement = document.createElement('ul')





// Function Next SLide 
function nextSlide () {
    console.log("Next")
}


// Function Next SLide 
function prevSlide () {
    console.log("Previous")
}