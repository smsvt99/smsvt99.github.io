// let min = 0
// let max = 100
// let guess = 50
// let count = 1

// let guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
// let isit = "is it..." + guess + "?"

// console.log("Starting ... guess is " + guess)

// function start() {
//         say("Please think of a number between 1 and 100 (inclusive)\nI will try to guess your number.")
//         say(isit + '\n' + guessAgain)
//         console.log('Guess is ' + guess)
// }

// function correct() {
//         say("Your number was " + guess + "!\nI guessed your number in " + count + " guesses")
// }

// function higher() {
//         min = guess
//         guess = Math.round((guess + max) / 2);
//         count += 1
//         guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
//         isit = "is it..." + guess + "?"
//         console.log('Guess is ' + guess)
//         say(isit)
// }

// function lower() {
//         max = guess
//         guess = Math.round((guess + min) / 2)
//         count += 1
//         guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
//         isit = "is it..." + guess + "?"
//         console.log('Guess is ' + guess)
//         say(isit)
// }

// function clear() {
//         document.getElementById('field').innerText = " ";
//         max = 100;
//         min = 0;
//         guess = 50;
//         count = 1;
//         console.log('Guess is ' + guess)

// }

// function newGame() {
//         clear()
//         start()
// }

let min = 0
let max = 100
let guess = 50
let count = 1

let guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
let isit = "is it..." + guess + "?"

//say("Starting ... guess is " + guess) //fordebug

function start() {
        say("Please think of a number between 1 and 100 (inclusive)\nI will try to guess your number.")
        say(isit + '\n' + guessAgain)
   //     say('Guess is ' + guess) //fordebug
}

function correct() {
        say("Your number was " + guess + "!\nI guessed your number in " + count + " guesses")
}

function higher() {
        min = guess
        guess = Math.round((guess + max) / 2);
        count += 1
        guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
        isit = "is it..." + guess + "?"
      //  say('Guess is ' + guess) //fordebug
        say(isit)
}

function lower() {
        max = guess
        guess = Math.round((guess + min) / 2)
        count += 1
        guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
        isit = "is it..." + guess + "?"
   //     say('Guess is ' + guess) //fordebug
        say(isit)
}

function clear() {
        document.getElementById('field').innerText = " ";
        max = 100;
        min = 0;
        guess = 50;
        count = 1;
        guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
        isit = "is it..." + guess + "?"
   //     say('Guess is ' + guess) //fordebug
}

function newGame() {
        clear()
        start()
}