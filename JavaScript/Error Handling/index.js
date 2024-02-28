

// try{} / catch{}, finally{}

// try{
//     console.log("Hello");
//     // Network Errors
//     // Promise Rejection
//     // Security errors
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     // Close files
//     // Close Connections
//     // Release Resources
//     console.log("This always executes");
// }

// console.log("You have reached the end!");

try{
    const dividend = Number(window.prompt("Enter a dividend: "))
    const divisor = Number(window.prompt("Enter a divisor: "))

    if(divisor == 0){
        throw new Error("yOU CAN'T DIVIDE BY ZERO");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number")
    }

    const result = dividend / divisor
    console.log(result);
}
catch(error){
    console.error(error)
}

console.log("End");
