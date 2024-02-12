// variable = A container that stores a value.
// Behaves as if it were the vailue it contains

// 1. declaration  let x;
// 2. assignment   x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;
 
// let firstName = "Bro";
// let favoriteFood = "Pizza";
// let email = "Bro@gmail.com";
 
// let online = false;
// let forSale = true;
// let isStudent = true;
// 
// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);
// console.log(`Your name is ${firstName}`)
// console.log(`You like ${favoriteFood}`)
// console.log(`Your email is: ${email}`)
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your gpa is: ${gpa}`);

let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;