
// Create a variable for wins
var wins = 0;

{/* // create a variable for remaining guesses */}
var remainingGuesses= 20;
// Create an array of songs for the user to guess
var themeSongs= [
    "FRIENDS",
    "GOLDEN GIRLS",
    "THE OFFICE",
    "SEINFELD",
];
var lettersGuessed= [];
// Randomly choose a sticom from the array above
var sitcomSelection = "";
// Create blank spaces representing each character to be guesed
var answerSpace = [];

function resetGame(){
answerSpace=[];
lettersGuessed=[];
remainingGuesses = 20;
sitcomSelection = themeSongs[Math.floor(Math.random()*themeSongs.length)];
for(var i=0; i<sitcomSelection.length; i++){
    if(sitcomSelection[i]===" "){
        answerSpace.push(" ");
    } else{ 
        answerSpace.push("_");
    }
    }
// Display the randomly selected sitcom using spaces
document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
document.getElementById("wins").innerHTML= "Wins: " + wins;
document.getElementById("letters-guessed").innerHTML= "Letters Guessed: " +lettersGuessed;      
           
}


// User inputs a letter guess
document.onkeyup= function(event){
// create user variable and change to upper case regardless of input
    var userGuess= event.key.toUpperCase();
    // Do not allow for repeat guesses of the same letter
    if(lettersGuessed.includes(userGuess)) {
            return;
    }
    // 
    var correctGuess = false;
   
    for(var i=0; i<sitcomSelection.length; i++){
        if(userGuess === sitcomSelection.charAt(i)){
           answerSpace[i] = userGuess;
           correctGuess= true;
        }
    }      
    lettersGuessed.push(userGuess);
    document.getElementById("letters-guessed").innerHTML= "Letters Guessed: " +lettersGuessed.join(" ");
    console.log("lettersguessed");  
    document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
    // compare userGuess to characters in the selected sitcom, if correct...
  
   if(!correctGuess){
    // Push guessed letters to the "lettersGuesssed" array        
      remainingGuesses --;       

    if(remainingGuesses<=0){
        resetGame();
        
    }
} else if(answerSpace.join("")===sitcomSelection){
    wins ++;
    resetGame();    
}
    
}

resetGame();





// }
// If the character is correct, display the character in the correct position
// If the chracter is incorrect, display the character under letters-guessed
// This repeats until all characters are selected or the user depletes all guesses
// When the user gets the theme song correct or depletes all guesses --> the song is played, image changes to corresponding theme image and title of sitcom is displayed, new sitcom title is displayed
// After image and song are displayed, using a function clear the remaining guesses and letters guessed
// 















//     // Create a variable to display wins
//     var winsText = document.getElementById("wins");
//     // Create a variable to display the empyt spaces for the user to guess
//     var answerSpaceText = document.getElementById("answer-space");
//     // create a variable to display the remaining guesses
//     var remainingGuessesText= document.getElementById("remaining-guesses");
//     // create an array for the user's incorrect guesses 
//     var previousGuess = [];


//     // Create a listener
//     document.onkeyup= function(event){
//         var userGuess= event.key;
//         if(previousGuess.includes(userGuess)) {
//   return;
// }
// previousGuess.push(userGuess);
//   






