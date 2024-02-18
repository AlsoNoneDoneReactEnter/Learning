// NUMBER GUESSING GAME

const minNumb = 1
const maxNumb = 100
const answer = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb

let attemps = 0
let guess
let running = true

while(running){

    guess = window.prompt(`Guess a number between (${minNumb} - ${maxNumb})`)
    guess = Number(guess)

    if (isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    else if (guess < minNumb || guess > maxNumb){
        window.alert("Please enter a valid number")
    }
    else{
        attemps++
        if(guess < answer){
            window.alert("Too low! Try Again!")
        }
        else if (guess > answer)
        {
            window.alert("Too high! Try Again")
        }
        else{
            window.alert(`Correct the asnwer is ${answer} you took ${attemps} attemps`)
            running = false
        }
    }
}