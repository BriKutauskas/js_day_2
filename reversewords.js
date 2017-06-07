
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
