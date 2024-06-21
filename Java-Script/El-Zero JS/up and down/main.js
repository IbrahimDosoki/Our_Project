let btn = document.getElementById("btn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 700) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

}

window.addEventListener("click" , function () {

    window.scroll ({
        top : 0,
        left: 0,
        behavior: 'smooth'
    });

});