let min = 0
let max = 100
let guess = 50
let count = 1

let guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
let isit = "is it..." + guess + "?"

say("Please think of a number between 1 and 100 (inclusive)\nI will try to guess your number.")
say(isit + '\n' + guessAgain)
function correct(){
        say("Your number was " + guess + "!\n i guessed your number in " + count + " guesses")}
    
function higher(){
     min = guess
     guess = Math.round((guess + max) /2);
    // console.log("min" + min)
    //console.log("max" + max)
    //console.log("guess:" + guess)
     
     count += 1
     guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
     isit = "is it..." + guess + "?"
     say(isit + guessAgain)
    }
   function lower(){
     max = guess
     guess = Math.round((guess + min)/2)
     //console.log("min" + min)
     //console.log("max" + max)
     //console.log("guess:" + guess)
    
     count += 1
     guessAgain = "Enter Y for yes, H if your number is higher than " + guess + " L if your number lower than " + guess
     isit = "is it..." + guess + "?"
     say(isit + guessAgain)
    }