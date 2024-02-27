


// let numbers = [1,4,5,2,6,7,9,8,10,3];

// numbers.sort((a, b) => b - a);

// console.log(numbers);

const people = [{name:"Spongebob", age: 30, gpa:1.0}, 
                {name:"Patrick", age: 20, gpa:2.0}, 
                {name:"Squidward", age: 350, gpa:3.0},
                {name:"Sandy", age: 302, gpa:4.0}]

people.sort((a, b) => b.name.localeCompare(a.name))

console.log(people);