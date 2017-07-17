# js_day_2
Javascript Hi/Lo Game
Goal

Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
If the user's guess is too high or too low, the computer notifies them of that
Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
Hint: See Math.random()

Stretch goal 1

If the user has not guessed the secret number in seven tries, the user loses.

Stretch goal 2

Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
Hint: To create a number from a string in javascript use parseInt( ). See: Description.

Stretch goal 3

Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.



Javascript Decision Challenges
Use the How to Write Functions method to complete the following challenges.

What number's bigger?

Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Test the function 2 times with different number pairs
The World Translator

Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Test the function for each of the supported languages
The Grade Assigner

Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Test the function for a few different scores.
The Pluralizer

Write a function named pluralize that:

takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
Test the function for all special nouns and one regular.
Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".
The Odd and Even

Write a JavaScript function that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"

The Fizz Buzz

Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".



Reverse Challenge
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. Example: if you give your function the string "Hi there neighbor", it should return the string "Hi ereht robhgien".



