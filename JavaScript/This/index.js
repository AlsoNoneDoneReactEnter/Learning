//  this = reference to the object where THIS is used
//         (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburguer",
    sayHello: function () {console.log(`Hi! My name is ${this.name}`);},
    eat: function () {console.log(`${this.name} is eating ${this.favFood}`);},
}
const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function () {console.log(`Hi! My name is ${this.name}`);},
    eat: function () {console.log(`${this.name} is eating ${this.favFood}`);},
}

person1.sayHello()
person1.eat()

person2.sayHello()
person2.eat()