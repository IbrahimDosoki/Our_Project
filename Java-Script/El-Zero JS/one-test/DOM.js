/**
 *  ! DOM => Document Object Model 
 * 
 * ? Access To Element By Id 
 * * document.getElementById('name of id')
 * 
 * ? Access to element by class 
 * * document.getElementsByClassName('name of class')
 * 
 * ? Access to Element by Tagname 
 * * document.getElementsByTagName('name of tage ')
 * 
 * ? Access To Element by querySelector for Access one Eelement 
 * * document.querySelector('.ClassName')
 * * document.querySelector('#IdName')
 * * document.querySelector('TagName')
 * * 
 * 
 * ? Access To Element by querySelectorAll for Access All Eelements and return it as Array
 * * document.querySelector('.ClassName')
 * * document.querySelector('#IdName')
 * * document.querySelector('TagName')
 * * 
 * ? Access To Title of The Page
 * * document.title 
 * 
 * ? Access Body 
 * * document.body
 * 
 * ? Access To Images (Return it as Array of Images )
 * * document.images;  
 * * document.images.src;  
 * * document.images.alt;  
 * 
 * ? Access To Links in (Return it as Array of Links )
 * * document.links 
 * * document.links.href
 * 
 * ? Access To Forms 
 * * document.forms
 * 
 * ? To know if the elment has Attribut or no 
 * * element.hasAttributes() => The resault is (true or false)
 * * element.setAttribute('attribute', 'value of attribute) => To set or redefine the attribute
 * * element.removeAttribute("attribute")
 *  
 * ? Siblig and parent 
 * * element.previousElementSibling => To access on the previous element
 * * element.nextElementSibling => To access on the next element
 * * element.parentElement => To access on the parent element
 * 
 * ! CSS style Accessing 
 * * 1) element.style.property = value 
 * * 2) element.style.cssText = `
 * *      background : #444;
 * *      color: white;
 * *      code as a code in css file..............
 * *      `
 * * 3) element.style.removeProperty('') => To remove the property
 * * 4) element.style.setProperty('property', 'value') =>
 * 
 * ! How To creat Element by JS
 * * *) document.innerHTMl = `
 * *      <h1>Hello World</h1>
 * *        
 * *       `
 * * 1) Creat the Element
 * * 2) Adding a content inside the element
 * * 3) Adding the element in your place where you want to add
 * * => Example 
 * *  let conatainer = document.createElement('div);
 * *  let content = document.creatTextNode('Hello World');
 * *  conatainer.appendChild(content);
 * *  document.body.appendChild(conatainer);
 * 
 * ? Events in JS
 * * 1) element.onclick = function () {}
 * * 2) element.addEventListener('event ='click'' , function () {
 * *     console.log('')
 * *     })
 * 
 * ? Local Storage 
 * * عبارة عن خاصية في الويندو بتقدر تخليك توصل ال Storage Object وده عبارة عن كائن تقدر تضيف فيه بيانات عشان نقدر نستخدمها بعدين 
 * * 

 */


// Start After, Before And Inside Idea 
// let after = document.getElementById('after');
// let before = document.getElementById('before');
// let inside = document.getElementById('inside');
// let content = document.getElementById('content');
// let container = document.getElementById('container');

// container.style.backgroundColor = '#FFA'
// container.style.marginTop = '20px'
// container.style.height = '50px'
// container.style.width = '250px'

// after.onclick = function () {
//     container.after(content);
// }
// before.onclick = function () {
//     container.before(content);
// }
// inside.onclick = function () {
//     let append = container.append(content); 
// }

// Local Storage Application 
// Set Item 
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWight = "bold";
// window.localStorage["fontSize"] = "20px";

// Get Item
// window.localStorage.getItem("color");
// Get Key 
// window.localStorage.key("index of key "); 

// Remove One Item 
// window.localStorage.removeItem("color");

// Clear All Items 
// window.localStorage.clear();

// console.log(window.localStorage)
// console.log(typeof window.localStorage)