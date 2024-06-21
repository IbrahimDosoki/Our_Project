// let section = document.querySelector(".three")
// let spans = document.querySelectorAll(".progress span")

// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop ) {
//         console.log("Reached Section Three");
//         spans.forEach(function (span) {
//             span.style.width = span.dataset.width ;
//         })
//     }
// }

let section = document.querySelector(".three")
let spans = document.querySelectorAll(".progress span")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        spans.forEach(function (span) {
            span.style.width = span.dataset.width ;
        })
    }
}