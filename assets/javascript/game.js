var remainingLives = 8;
var wins = 0;
var movies = {
  m1: ["Star Wars"],
  m2: ["The Godfather"],
  m3: ["Silence of the Lambs"],
  m4: ["West Side Story"],
  m5: ["Braveheart"]
};


//start game instructions
document.onkeyup = function(event) {
   var userGuess = event.key;

   var currentWord = movies[Math.floor(Math.random() * movies.length)];
   var str = 'currentWord'
   var res = str.split("");
   var wordLength = res.length;
   var underscores = "";
   for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
   }

// scoring mechanism:
//    every keystroke is one less life
//    if letter matches letter in array, fill in blank(s) with correct letter
//    if key does not match, reveal no blanks
//    if person runs out of lives, they lose
//    if the person guesses all correct letters: 1) mark win 2) bring up next 
//    word in array until there are no unguessed choices in array 3) 
//    restart guess total 4) clear previously guessed letter box 5) start 
//    playing soundtrack from correctly guessed movie

var previousGuess = [];//array created from previously typed keys

var html =
          "<p>Wins: " + wins + "</p>" +
          "<p>Current word: " + underscores + "</p>" +
          "<p>Number of guesses remaining: " + remainingLives + "</p>" + 
          "<p>Last guess: " + userGuess + "</p>" +
          "<p>Letters already guessed: " + previousGuess + "</p>";
        document.querySelector("#game").innerHTML = html;

}
