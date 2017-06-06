// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function fizz() {
  var num = 0;
  do {
    num++;
    if((num % 3 === 0) && (num % 5 === 0)){
      console.log("fizzbuzz");
    }
    else if(num % 3 === 0){
      console.log("fizz");
    }
    else if(num % 5 === 0){
      console.log("buzz");
    }
    else {
      console.log(num);
    }
   }
  while(num < 100);
}

fizz();
