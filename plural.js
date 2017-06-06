// takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
// Test the function for all special nouns and one regular.
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

function plural(noun, number){
  if (number > 1) {
    return noun + 's';
  }
  else if(noun === 'sheep') {
    return 'sheep';
  }
  else if(noun === 'goose') {
    return 'geese';
  }
  else if(noun === 'child') {
    return 'children';
  }
  else if(noun === 'person') {
    return 'people';
  }
  else if(noun === 'species') {
    return 'species';
  }
  else {
    return noun;
  }
}

plural("cow", 5);
