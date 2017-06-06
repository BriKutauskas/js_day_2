// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Test the function for each of the supported languages


function translate(language) {
  if (language === "es") {
  return "Hola, mundo!";
}
  else if(language === "fr") {
    return "Bonjour le monde";
  }
  else {
    return "Hello, World";
  }

}

translate("es");
