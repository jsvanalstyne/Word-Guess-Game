
// Create a variable for wins
var wins = 0;

{/* // create a variable for remaining guesses */}
var remainingGuesses= 20;
// Create an array of songs for the user to guess
// 
// ];
var themeSongs = [
    {
        name: "FRIENDS",
        image: "assets/images/friends.jpg",
        song: "assets/images/friends.mp3"
    },
    {
        name: "GOLDENGIRLS",
        image: "assets/images/golden_girls.jpg",
        song: "assets/images/golden_girls.mp3"
    },
    {
        name: "THEOFFICE",
        image: "assets/images/the_office.jpg",
        song: "assets/images/the_office.mp3"
    },
    {
        name: "SEINFELD",
        image: "assets/images/seinfeld.jpg",
        song: "assets/images/seinfeld.mp3"
    },
    {
        name: "CHEERS",
        image: "assets/images/cheers.jpg",
        song: "assets/images/cheers.mp3"
    },
    {
        name: "MASH",
        image: "assets/images/mash.jpg",
        song: "assets/images/mash.mp3"
    },
    {
        name: "FRESHPRINCE",
        image: "assets/images/freshprince.jpg",
        song: "assets/images/freshprince.mp3"
    },
    {
        name: "BEWITCHED",
        image: "assets/images/bewitched.jpg",
        song: "assets/images/bewitched.mp3"
    }
];

    function replaceImageSong(){
    document.getElementById("cd-image").setAttribute("src", sitcomSelection.image);
    var songPlay = document.getElementById("songPlay"); 
    songPlay.setAttribute("src", sitcomSelection.song);
    songPlay.play();
    document.getElementById("bandDisplay").innerHTML= sitcomSelection.name;
    
}
// Create an array for letters guessed captured from user's email
var lettersGuessed= [];
// Create an empty string variable for random selected sitcom
var sitcomSelection = "";
// Create an array of blank spaces representing each character to be guesed
var answerSpace = [];
// Function used to reset game by clearing arrays, restarting the amount of gusses and allowing for spaces between string words
function resetGame(){
answerSpace=[];
lettersGuessed=[];
remainingGuesses = 20;
sitcomSelection = themeSongs[Math.floor(Math.random()*themeSongs.length)];
for(var i=0; i<sitcomSelection.name.length; i++){
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
document.getElementById("remaining-guesses").innerHTML = "Guesses Remaining: " + remainingGuesses;   

           
}


// User inputs a letter guess
document.onkeyup= function(event){
// create user variable and change to upper case regardless of input
    var userGuess= event.key.toUpperCase();
    // Do not allow for repeat guesses of the same letter
    if(lettersGuessed.includes(userGuess)) {
            return;
    }
    // create variable that is set to false that dictates what to do after userGuess has been compared. 
    var correctGuess = false;
   // compare userGuess to characters in the selected sitcom, if correct...
    for(var i=0; i<sitcomSelection.name.length; i++){
        if(userGuess === sitcomSelection.name.charAt(i)){
           answerSpace[i] = userGuess;
           correctGuess= true;
        }
    }      
    lettersGuessed.push(userGuess);
    document.getElementById("letters-guessed").innerHTML= "Letters Guessed: " +lettersGuessed.join(" ");
    console.log("lettersguessed");  
    // removes the commas between letters in the string
    document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
    
//   Do this if the userGuess what not correct
   if(!correctGuess){    
        remainingGuesses--;     
    // If remaining guesses are less than 0 do this
        if(remainingGuesses<=0){
                 replaceImageSong();
        }
        // Reset Game if user wins (no more blank spaces left)
    } else if(answerSpace.join("")===sitcomSelection.name){
    wins ++;
       replaceImageSong();
       resetGame();
    }
    document.getElementById("remaining-guesses").innerHTML = "Guesses Remaining: " + remainingGuesses;   
           

}
resetGame();
