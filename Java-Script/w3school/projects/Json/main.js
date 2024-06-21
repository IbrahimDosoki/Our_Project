let myJsonObj = '{"userName" : "Ibrahim", "age": 19}'
let myJsObj   = JSON.parse(myJsonObj)

document.getElementById('name').innerHTML = 'My name is : ' + myJsObj.userName;
document.getElementById('age').innerHTML = 'My age is : ' + myJsObj.age;

