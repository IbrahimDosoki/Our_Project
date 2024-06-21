/**
 *  Advice 
 *  - Always Check The Console
 *  - Take Your Time To Name The Identifiers
 *  - DRY

 *  Steps To Creat The Project 
 *   [01] Creat Html Markup
 *   [02] Add Styling And Separate From Logic 
 *   [03] Creat The App Logic 
 *   ---- [01] Add Levels 
 *   ---- [02] Show levels and Seconds 
 *   ---- [03] Add Array of the words 
 *   ---- [04] Add Start game Button
 *   ---- [05] Generate Upcoming Words 
 *   ---- [06] Display Copy Word and Past Event + Focus on Input 
 *   ---- [07] Start Play Function 
 *   ---- [08] Start The Time And Count Score 
 *   ---- [09] Add The Error and Success Message  
 *   [04] Your Trainings to add Features 
 *   ---- [01] Save Score to Local Storage With Date 
 *   ---- [02] Chose Level from Select Box
 *   ---- [03] Break The Logic 
 *   ---- [04] Choose Array of words for every level
 *   ---- [05] Write game Instruction with Dynamic Values
 *   ---- [06] Add 3 Seconds For The First Word 
 */


// Array Of Words 
const words = [
    "Hello",
    "Programming",
    "Code",
    "JavaScript",
    "Town",
    "Countery",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Task",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];

// Stting Levels 
const lvl = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

// Default Level
let defaultLevelName = "Easy"; // Change Level From Here 
let defaultLevelSeconds = lvl[defaultLevelName];

// Catch Selctors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score 
lvlNameSpan.innerHTML = defaultLevelName ;
secondsSpan.innerHTML = defaultLevelSeconds ;
timeLeftSpan.innerHTML = defaultLevelSeconds ;
scoreTotal.innerHTML = words.length;

// Disable Past Event 
input.onpaste = function () {
    return false;
}

// Start Game 
startButton.addEventListener("click", function () {
    this.remove();
    input.focus();

    // Generate Wrod Function 
    generateWords();
})

function generateWords () {
    // Get Random Word From Array 
    let randomWords = words[Math.floor(Math.random() * words.length)];
    
    // Get Word Index
    let wordIndex = words.indexOf(randomWords);

    // Remove Word From Array
    words.splice(wordIndex, 1);

    // Show The Random Word 
    theWord.innerHTML = randomWords;

    // Empty Upcoming Word
    upcomingWords.innerHTML = "";

    // Generate Words
    for (let i = 0; i < words.length; i++) {
        // Create Div Element 
        let div = document.createElement("div");
        let txt =  document.createTextNode(words[i])
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }

    // Call Start Play Function 
    startPlay ()
}

function startPlay () {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(function () {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0"){
            // Stop Timer 
            clearInterval(start)
            // Comapare Words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                // Empty Input Filed 
                input.value = "";

                // Increase Score 
                scoreGot.innerHTML++;

                if (words.length > 0) {
                    // Call generate Word Function 
                    generateWords();
                } else {
                    let span  =document.createElement("span");
                    span.className = "good";
                    let sapnTxt = document.createTextNode("Congratulations");
                    span.appendChild(sapnTxt);
                    finishMessage.appendChild(span);
                    upcomingWords.remove();
                }

            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanTxt = document.createTextNode("Game Over ");
                span.appendChild(spanTxt);
                finishMessage.appendChild(span)
            }
        }
    }, 1000)
}