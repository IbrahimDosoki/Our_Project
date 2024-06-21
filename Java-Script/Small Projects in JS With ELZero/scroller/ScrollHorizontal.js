/**
 *  ScrollHeight : Entire Contetn & padding (Visible or Not) in the Page 
 *  ClinetHeight : Visible Contetn & Padding in The page 
 *  
 */

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

window.addEventListener("scroll" , function () {

  let scrolltop = document.documentElement.scrollTop;
  el.style.width =` ${(scrolltop / height) * 100}%`;

})




