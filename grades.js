// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.

function grade(score) {
  if (score >= 90) {
    return "A";
  }
  else if(score >= 80) {
    return "B";
  }
  else if(score >= 70) {
    return "C";
  }
  else if(score >= 60) {
    return "D";
  }
  else {
    return "F";
  }
 }

 grade(75);
