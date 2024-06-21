function User (name, email) {
    this.name = name;
    this.email = email;
    this.sayHello = function () {
        return `Welcome ${this.name}`;
    };
};


let user1 = new User("Ibrahim");
let user2 = new User("Ahmed");


console.log(user1);
console.log(user2);
