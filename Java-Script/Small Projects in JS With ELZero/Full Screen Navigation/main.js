let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");

// When Click On toggle open The Nav With put thc class open on nav 
toggler.onclick = function () {
  nav.classList.add("open")
}

// When Click On Close Remove the class open from the nav

close.onclick = function () {
    nav.classList.remove("open")
}

document.onkeyup = function (e) {
  // console.log(e)
  if (e.key === "Escape") {
    nav.classList.remove("open")
  }
}