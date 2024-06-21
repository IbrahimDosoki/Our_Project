
/**
 *! Object => has properties and methods 
 *
 * ? Syntax Object
 *  * let nameObject = {
 *  * Block Of Code ;
 *  * }
 * 
 * ? Another Syntax Object by use NEW KeyWord
 * * let user = new Object ({
 * * Bock Of Code Of Properties And Methods ;
 * *});
 * * 
 * ? Another Syntax Object by use CREATE KeyWord
 *  * let user = Object.create(
 * * Object to use as a prototype. May be null.
 * * Creates an object that has the specified prototype or that has null prototype
 * *);
 * 
 * ! (This) keyWord => use for access on where you are 
 *
 * ? Function Syntax 
 * * let nameFunction = function () {
 * * code Of Function ;
 * * }
 * 
 * * function nameOfFun () {
 * * Code Of Function ;
 * *}
 */



 let user = {
    // ? Porperty 
    theName : "Ibrahim",
    theAge : 19,
    skills : ["Html", "CSS", "JS"],
    avialable : false ,

        // ? Nested Object 
        addresses : {
            ksa : "Riyadh",
            egy : {
                Alex : "Miami",
                Sharquia : "San"
            }
        },

    // ? Methods 
    checkAvailability : function () {
        if (user.avialable === true ) {
            return `Free For Work `;
        } else { 
            return `Not Free`;
        }
    }
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.skills);
console.log(user.skills[0]);
console.log(user.skills[1]);
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egy.Alex);
console.log(user.addresses.egy.Sharquia);
console.log(user.checkAvailability());

// ! How To Add A New Poperty For Object Already Defined

let newUser = {};

newUser.age = 25;
newUser.name = "Ibrahim Dosoki ";

newUser.sayHello = function () {
  return `Hello ${newUser.name} `
}

console.log(newUser.age);
console.log(newUser.name);
console.log(newUser.sayHello());




// ----------------------------------------------------------------------------------------


