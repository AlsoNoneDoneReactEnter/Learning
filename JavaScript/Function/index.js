
// function happyBirthday(username, age){
//     console.log("Happy Birthday to you!")
//     console.log("Happy Birthday to you!")
//     console.log(`Happy birthday dear ${username}`)
//     console.log(`You are ${age} years olds`)
// }
// 
// happyBirthday("BroCode", 25);
// happyBirthday("Spongebob", 30)
// happyBirthday("Patrick", 3)

function add(x, y){
   //  let result = x + y
    return x + y
}
function subtract(x, y){
    return x - y
}
function multiply(x, y){
    return x * y
}
function divide(x, y){
    return x / y
}
// function isEven(number) {
//     
//     if (number % 2 === 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

function isEven(number) {
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email) {
//     if(email.includes("@")){
//         return true
//     }
//     else{
//         return false
//     }

    return email.includes("@") ? true : false
}

console.log(isValidEmail("bro@fake.com"));
console.log(isValidEmail("ElonMusk.com"));
console.log(isValidEmail("Zuckerborg@meta.com"));

