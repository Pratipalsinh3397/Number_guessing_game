//Generate random number

let randomNumber = parseInt(Math.random() * 100 + 1)


const input = document.querySelector('#data')
const submit = document.querySelector('#btn')
const preguesses = document.querySelector('.preguesses')
const lastGuesses = document.querySelector('.lastguess')
const loworHigh = document.querySelector('.lowOrHi')
const result = document.querySelector('.result')
const startButton = document.querySelector('#startButton')

// const button = document.createElement('button')
let previuosGuess = []
let numberOfGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(input.value)
        validate(guess);
    })
}


function validate(guess){
    if(isNaN(guess)){
        alert("Please enter valid number.")
    }
    else if(guess < 1){
        alert("Please enter number which is greater than 1.")
    }
    else if(guess > 100){
        alert("Please enter number which is smaller than 100.")
    }
    else{
        previuosGuess.push(guess)
        if(numberOfGuess === 11){
            // displayGuess(guess)
            lastGuesses.innerHTML = `${numberOfGuess - 12}`
            displayMessage(`Game over. Random value is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulation🎉! You guess the right number which is ${randomNumber}`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Your guess Too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Your guess Too high`)
    }
}

function displayGuess(guess){
    input.value = ""
    preguesses.innerHTML += `${guess}, `
    numberOfGuess++;
    lastGuesses.innerHTML = `${11 - numberOfGuess}`
        
}

function displayMessage(message){
    loworHigh.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    input.value = ""
    input.setAttribute('disabled','')
    // button.classList.add('button')
    // button.innerHTML = `<h2>Start new Game</h2>`
    // button.id = "newGame"
    // button.style.border = "5px solid green"
    // button.style.borderRadius = "10px"
    // button.style.padding = "5px"
    // button.style.width = "200px"
    // button.style.margin = "0px auto"
    // button.style.backgroundColor = "white"
    // result.appendChild(startButton)
    startButton.style.display="inline"
    playGame = false
    newGame()
}

function newGame(){
    // const startGame = document.querySelector('#newGame')
    startButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        previuosGuess = []
        numberOfGuess = 1
        preguesses.innerHTML = ''
        lastGuesses.innerHTML = `${11 - numberOfGuess}`
        input.removeAttribute('disabled')
        result.removeChild(startButton)
        loworHigh.innerHTML = ""
        playGame = true
    })

}