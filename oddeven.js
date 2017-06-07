// Write a JavaScript function that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function iterate() {
  var num=0;
  do{
    num++;
    if(num % 2 === 1) {
      alert (num + " is odd");
    }
    else {
      alert (num + " is even");
    }
  } while (num < 15);
}
iterate();
