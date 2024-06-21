/**
 * => set Characters to creat the Serial
 * => Serial Character Count
 * => Create Empty Variable To Store The Serial 
 * => Create Random Number + Access Sequence 
 * => Store The Random Element in The Empty Variable 
 * => Loop x Count
 * => Change Srial Element Content With The Serial Variable 
 */

let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
    let characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsCount = 10;
    let randomSerial = "";

    for (let i = 0; i < charsCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }

    serialEl.innerHTML = randomSerial;
}