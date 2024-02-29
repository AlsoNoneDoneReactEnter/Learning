// 1.document.getElementById() ELEMENT OR NULL
// const myHeading = document.getElementById("my-heading")
// myHeading.style.backgroundColor = 'yellow'
// myHeading.style.textAlign = "center"
// console.log(myHeading);

// 2.document.getElementsClassName() HTML COLLECTION
// const fruits = document.getElementsByClassName("fruits")

// fruits[0].style.backgroundColor = "yellow"

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }

// Array.from(fruits).forEach(fruit =>{
//     fruit.style.backgroundColor = "yellow"
// });

// 3.document.getElementByTagName();
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// // h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow"
// })
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen"
// })

// 4.document.querrySelector()  // First Element or Null
// const element = document.querySelector("ol") // class or a tag name
// element.style.backgroundColor = "yellow"

// 5. document.querrySelectorAll()

// const fruits = document.querySelectorAll(".fruits");

// // fruits[0].style.backgroundColor = "yellow"
// fruits.forEach(fruits => {
//     fruits.style.backgroundColor = "yellow"
// })