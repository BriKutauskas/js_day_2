// function reversed() {
//   var string=prompt("How are we going to do this?");
//   string = string.split(' ');
//   for(var i=0; i<string.length; i++){
//     console.log(string[i]);
//   }
// }
// reversed();
function reversed() {
  var string = prompt('How are you doing today?');
  var splitted = string.split(/\s+/);
  console.log(splitted.length);
      for(var i=0; i<splitted.length; i++) {
        var word = splitted[i].split();
        console.log(word[0].length);
       if(word[0].length >= 5){
         word[0].reverse;

      }
    }


    // console.log(splitted);

  }
reversed();



//   console.log(string);
//   string = string.split();
//   console.log(string);
// }
// reversed();
//   //   string = string.split();
//   //   console.log(string);
//   //   if(string.length > 5) {
//   //       string = string.reverse;
//   //     }
//   //   }
//   //   while(string === " ")
//   // reversed();
