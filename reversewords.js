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
  var splitted = string.split(' ');
  console.log(splitted.length);
  for(var i=0; i<splitted.length; i++) {
    var word = splitted[i].split('');
    console.log(word.length);
    if(word.length >= 5){
      splitted[i] = word.reverse().join('');
    }
  }
  console.log(splitted.join(' '));
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
