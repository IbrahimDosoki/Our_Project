/**
 * ! Window Object BOM
 * ? Scroll 
 * * window.scroll(x,y)
 * * window.scrollTo(x,y)
 * * window.scrollBy(x,y) => From where you to where you want to scroll
 * * window.scrollY
 * * window.scrollX
 * * 
 * ? Screen Window
 * * window.screen.width
 * * window.screen.availWidth
 * * window.screen.availHeight
 * * window.screen.height
 * * 
 * ? URL Wndow 
 * * https://  => Protocol 
 * * www.google.com  => Host Name
 * * /abdelrahamn_noufal/  => Path Name 
 * *
 * * window.location.href 
 * * window.location.protocol
 * * window.location.host
 * * window.location.reload 
 * * window.location.assign()
 * * window.location.replace() 
 * * window.history.back 
 * * window.history.forward 
 * * 
 * ? setTimeOut and setInterval
 * * setTimOut(function () {} ,period of second  )  => Run a function after a period of time 
 * * clearTimeOut(name of setTimeOut )  => To Stop The setTimeOut() Method 
 * * setInterval(function () {} , period of second )  => repeat a function after a period of time 
 * * clearInterval(name of setInterval ) => To Stop The setInterval
 * 
 * 
 * 
 */

let btn = document.getElementById('btn');

window.onscroll = function () {
    if (scrollY >= 400) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}
btn.onclick = function () {
    window.scroll(0 , 0)
}

