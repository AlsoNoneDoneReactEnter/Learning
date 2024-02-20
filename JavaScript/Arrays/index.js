// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"]

// fruits.push("coconut")
// fruits.pop()
// fruits.unshift("mango")
// fruits.shift()


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("-------------");

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

console.log("-------------");

fruits.sort().reverse()

for(let fruit of fruits){
    console.log(fruit)
}

console.log("-------------");



// let numOfFruits  = fruits.length
// let index = fruits.indexOf("mango") // if define to a undefiend index return -1
// console.log(index);