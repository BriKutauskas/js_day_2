//Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.



//If the user's guess is too high or too low, the computer notifies them of that
//Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
//Computer picks random number 1-100

function numberPick(){
  var equation = (Math.floor((Math.random() * 100) + 1));
  return equation;
}
//User picks number and compares to computer number
function userGuess(){
  var guess = prompt("Guess the number");
  if (!guess) { return; }
  var attempt = 1;
  var equation = numberPick();
  console.log(equation);
  while (attempt < 7){
    if (+guess > equation){
      guess = prompt('Guess lower!');
    }
    else if (+guess < equation){
      guess = prompt('Guess higher!');
    }
    else if(+guess === equation){
      alert('You Win!');
      return;
    }
    attempt++;
  }
  alert('You lose!');
}
userGuess();


//If the user has not guessed the secret number in seven tries, the user loses.



//Stretch goal 2

//Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
// Hint: To create a number from a string in javascript use parseInt( ). See: Description.
//
// Stretch goal 3
//
// Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.
