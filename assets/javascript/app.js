// Pseudocode
// Functions needed
// 2. timer to give 30 to answer a question
// 3. time to give 5 seconds showing result, correct answer, and blurb.
// 6. function to start a new game (under a button)
// 7. Function to run countdown clock

// Variables needed

var questionBank = [
  { theQuestion: "How many Academy Awards did Titanic win?", answerA: "Four", answerB: "Nine", answerC: "Eleven", answerD: "Thirteen", theBlurb: "In 1998, Titanic received 11 Academy Awards, including Best Picture, Best Director, Best Visual Effects, and Best Actress for Kate Winslet.", rightAns: "C" },
  { theQuestion: "Which of the following films did NOT win the Best Foreign Language Film Academy Award?", answerA: "Life is Beautiful (La vita è bella)", answerB: "Crouching Tiger, Hidden Dragon (Wo hu cang long)", answerC: "Babette’s Feast (Babettes gæstebud)", answerD: "Amélie (Le fabuleux destin d'Amélie Poulain)", theBlurb: "Amélie was nominated for five Oscars – Foreign Language Film, Best Original Screenplay, Best Cinematography, Best Sound Mixing, and Best Production Design – but did not win in any category.", rightAns: "D" },
  { theQuestion: "Who has won the most Academy Awards for acting?", answerA: "Katharine Hepburn", answerB: "Walter Brennan", answerC: "Jack Nicholson", answerD: "Ingrid Bergman", theBlurb: "Katharine Hepburn has won 4 acting awards: Best Actress- Morning Glory (1933), Guess Who's Coming to Dinner? (1967), The Lion in Winter (1968), On Golden Pond (1981). Jack Nicholson, Ingrid Bergman, and Walter Brennan all have won 3 acting Academy Awards.", rightAns: "A" },
  { theQuestion: "Who has won the most Oscars for directing?", answerA: "Steven Spielberg", answerB: "John Ford", answerC: "William Wyler", answerD: "Frank Capra", theBlurb: "John Ford has won 4 Best Director Oscars for The Informer (1935), The Grapes of Wrath (1940), How Green Was My Valley (1941), and The Quiet Man (1952). He was also nominated for Stagecoach (1939). William Wyler and Frank Capra both have won 3 times.", rightAns: "B" },
  { theQuestion: "Which actor has been nominated most often for Oscars?", answerA: "Spencer Tracy", answerB: "Laurence Olivier", answerC: "Al Pacino", answerD: "Jack Nicholson", theBlurb: "Jack Nicholson has been nominated 12 times for his performances.", rightAns: "D" },
  { theQuestion: "Which film was the first to win Academy Awards for Best Picture, Best Director, Best Actor, Best Actress, and Best Screenplay?", answerA: "One Flew Over the Cuckoo's", answerB: "Gone With the Wind", answerC: "It Happened One Night", answerD: "The Silence of the Lambs", theBlurb: "Frank Capra's influential romantic comedy It Happened One Night became the first film to perform a clean sweep of the top five categories; Best Picture, Best Director, Best Actor, Best Actress and Best Screenplay. This feat would later be duplicated by One Flew Over the Cuckoo's Nest in 1976 and The Silence of the Lambs in 1992.", rightAns: "C" },
  { theQuestion: "Who is the only African American woman to win a Best Actress Oscar?", answerA: "Hattie McDaniel", answerB: "Halle Berry", answerC: "Whoopi Goldberg", answerD: "Jennifer Hudson", theBlurb: "Shockingly, Halle Berry is the only African American to win the Best Actress award, for her performance in Monster's Ball (2001).", rightAns: "B" },
  { theQuestion: "Which film series has won more than one Academy Award for Best Picture?", answerA: "The Lord of the Rings", answerB: "Rocky", answerC: "The Godfather", answerD: "James Bond", theBlurb: "The Godfather series is the only film series to win more than one Best Picture award, for The Godfather (1972) and The Godfather: Part II (1974).", rightAns: "C" },
  { theQuestion: "Who is the oldest woman to win an Academy Award for acting?", answerA: "Katharine Hepburn", answerB: "Helen Mirren", answerC: "Jessica Tandy", answerD: "Geraldine Page", theBlurb: "Jessica Tandy was the oldest winner of an acting award when she won the Best Actress Oscar for Driving Miss Daisy (1989).", rightAns: "C" },
  { theQuestion: "Who has won the most Oscars?", answerA: "Katharine Hepburn", answerB: "Jack Nicholson", answerC: "Meryl Streep", answerD: "Walt Disney", theBlurb: "Walt Disney won the most Academy Awards, with 22 competitive and 4 honorary Oscars.", rightAns: "D" }
]
var right = 0; // number of right answers
var wrong = 0; // number of wrong answers
var rightAns = ""; // placeholder for the right answer for each question
var blurbText = ""; // placeholder for explanation of correctAnswer
var currentQuestion = 0; // variable to iterate through the array
var count;
var intervalID;
// var intervalID = setInterval(countDown, 1000); // place variable at global level so it can be used throughout

$(document).ready(function () {
  displayQuestion(questionBank[currentQuestion])
  $(".answerBtn").click(function () {
    var playerGuess = $(this).data("letter");
    $("#statusBar").text("");
    evaluateGuess(playerGuess);
  });

  function questTimer() {
    count = 30;
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
    countDown();
  }

  function evaluateGuess(guess) {
    $("#statusBar").text("");
    $("#blurbBar").text(questionBank[currentQuestion - 1].theBlurb);
    if (guess === rightAns) {
      $("#statusBar").html("That's right!");
      right = right + 1;
      console.log(right + " right answers");
    } else {
      $("#statusBar").html("Nope, that's not it. ");
      wrong = wrong + 1;
      console.log(wrong + " wrong answers");
    }
    setTimeout(loadNewQuestion, 5000);
  }

  function loadNewQuestion() {
    if (currentQuestion == 10) {
      setTimeout(totalScore, 5000);
    } else {
      // questTimer();
      displayQuestion(questionBank[currentQuestion]);
    }
  }

  function totalScore() {
    $("#firstAnswer").text("Final Score! Final Score! Final Score! Final Score! Final Score!");
    $("#secondAnswer").text(right + " right answers");
    $("#thirdAnswer").text(wrong + " wrong answers");
    $("#fourthAnswer").text("Final Score! Final Score! Final Score! Final Score! Final Score!");
    $("#blurbBar").text("");
    if (right > wrong) {
      $("#askedQuestion").text("Game over - good job!");
    } else {
      $("#askedQuestion").text("Game over - you'd better study up on your Academy Awards history!");
    }
  }

  function displayQuestion(foo) {
    questTimer();
    $("#askedQuestion").text(foo.theQuestion);
    $("#firstAnswer").text(foo.answerA);
    $("#secondAnswer").text(foo.answerB);
    $("#thirdAnswer").text(foo.answerC);
    $("#fourthAnswer").text(foo.answerD);
    $("#blurbBar").text("");
    $("#statusBar").text("");
    rightAns = foo.rightAns;
    currentQuestion++;
  }

  function stop() {
    clearInterval(intervalID);
    $("#statusBar").text("");
  }

  function countDown() {
    $("#statusBar").text("You have " + count + " seconds left...");
    count--;
    if (count === 0) {
      clearInterval(intervalID);
      $("#statusBar").text("");
      timeUp();
    }
  }
  
  function timeUp() {
    $("#statusBar").text("Time's up!");
    $("#blurbBar").text(questionBank[currentQuestion - 1].theBlurb);
    setTimeout(loadNewQuestion, 5000);
    wrong = wrong++;
  }
});

  // DOM elements
  // pictures to illustrate each question
  // Six writable fields: 
  // 1. Messages to player ("ready?" "Correct!" "Nope, that's not it" etc)
  // 2. Question and four answers
  // 3. Answer 1 - needs to capture user click 
  // 4. Answer 2 - needs to capture user click 
  // 5. Answer 3 - needs to capture user click 
  // 6. Answer 4 - needs to capture user click 
  //     Repurpose some of those fields to write results at the end
  // hover, etc. pseudostyles for answers
