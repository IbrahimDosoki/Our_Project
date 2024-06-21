// 1000 milliseconds =  1 second
// determine the end time
let countDownDate = new Date("May 29, 2024 23:59:59").getTime(); // get the time by milliseconds from the 1 january 1970 to the 29 May


let counter = setInterval( () => {

    // get Date now 
    let dateNow = new Date().getTime();

    // Find the difference between now date and CountDownDate 
    let dateDiff = countDownDate - dateNow; // return the from now to the end date that i want it by miliseconds

    //get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 *24))/ (1000 * 60 * 60)); // return thr number of reminder hourse over the days 

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60  ))/ (1000 * 60));

    let seconds = Math.floor((dateDiff % (1000 * 60 )) / (1000))

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

    if(dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000)