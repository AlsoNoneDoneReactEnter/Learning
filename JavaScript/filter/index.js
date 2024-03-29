

//-----------------------------------------------
// let numbers = [1,2,3,4,5,6,7]
// let evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)

// console.log(evenNums);
// console.log(oddNums);

// function isEven(element) {
//     return element % 2 === 0
// }

// function isOdd(element) {
//     return element % 3 !== 0
// }
// ------------------------------------------------
// const ages = [16,17,18,18,19,20,60]
// const adults = ages.filter(isAdult)
// const children = ages.filter(isChild)

// console.log(adults);
// console.log(children);

// function isAdult(params) {
//     return params >= 18
// }
// function isChild(params) {
//     return params < 18
// }
//------------------------------------------

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]

const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(shortWords);
console.log(longWords);

function getShortWords(params) {
    return params.length <= 6
}
function getLongWords(params) {
    return params.length > 6
}