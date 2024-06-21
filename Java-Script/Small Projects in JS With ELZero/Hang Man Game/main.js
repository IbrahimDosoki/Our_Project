// Letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters 
let lettersContainer = document.querySelector(".letters")

// Generate letters
lettersArray.forEach( letters => {
    // Create Span 
    let span = document.createElement("span");

    // Create Letter Text Node 
    let theLetter = document.createTextNode(letters);

    // Append The Letter To Span 
    span.appendChild(theLetter);

    // Add Class On Span 
    span.className = "letter-box";

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);

})

// Object Of Words + Categories 
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception","Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Append on Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Deppend on Words 
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info 
document.querySelector(".game-info .category span").innerHTML = randomPropName; // + " : " + randomValueValue;


// Select Letters Guess Container Element
let lettersGuessContainer = document.querySelector(".letters-guess")

// Convert Chosen Word to Array of Character
let lettersAndSpace = Array.from(randomValueValue)

// / Creat Spans Deppend on Word 
lettersAndSpace.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span");

     // If Letter is Space 
    if (letter === " ") {

        // Add Class To The Span 
        emptySpan.className = "has-space"

    }

    // Append Spans To The Letters Guess Container 
    lettersGuessContainer.appendChild(emptySpan);
}) ;

// Select Guess Spans 
  let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts 
let wrongAttempts = 0;

// Select The Draw Element 
let theDrawElement = document.querySelector(".hangman-draw");




//Handle Cilcking On Letters 
document.addEventListener("click", function (e) {

// Set The Chose Status 
  let theStatus = false ;

    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");

        // Get Letters clicked 
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The Chosen Word => lettersAndSpace
        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        theChosenWord.forEach( function (wordLetter , WordIndex) {

            // If The CLicked Letter Equal To One Of The chosen Word Letter 
            if (theClickedLetter == wordLetter) {

                // Set Status To Correct
                theStatus = true ;

                // Loop On All Guess Spans 
                guessSpans.forEach( function (span , spanIndex ) {

                    if (WordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter;

                    }

                })

            } 



        });

        // Outside Loop

        // If Letter Is Wrong 
        if (theStatus !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++;

            // Add Class Wrong On t=The Draw Element 
            theDrawElement.classList.add(`wrong-${wrongAttempts}`);

            // Play Fail Sound 
            document.getElementById("fail").play();

            if (wrongAttempts === 8) {

                endGame(); 

                lettersContainer.classList.add("finished");
            }

        } else {
            // Play Success Sound 
            document.getElementById("success").play();
        }

        

    }

})

// End Game Function 
function endGame () {

    // Creat Popup Div
    let div = document.createElement("div");

    // Creat Text 
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    // Append Text To Div
    div.appendChild(divText);

    // Add Class On Div 
    div.className = "popup";

    // Append To The body 
    document.body.appendChild(div);
}


// You Win Game Function 
function winGame() {

    // Creat Popup Div
    let div = document.createElement("div");

    // Creat Text 
    let divText = document.createTextNode(`Congratulation you Win And The Word is ${randomValueValue}`);

    // Append Text To Div
    div.appendChild(divText);

    // Add Class On Div 
    div.className = "popup";

    // Append To The body 
    document.body.appendChild(div);
}

