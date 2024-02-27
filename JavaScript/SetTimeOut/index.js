


// const timeoutId = setTimeout(() => window.alert("Hello", 3000));

// clearTimeout(timeoutId)

let timeoutID;

function startTimer() {
    timeoutID = setTimeout(() => window.alert("Hello"), 3000)
    console.log("STARTED");
}

function clearTimer() {
    clearTimeout(timeoutID)
    console.log("CLEARED");
}