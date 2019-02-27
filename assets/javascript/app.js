// Open questions
// 1. How to "close off" the window so that clicks don't register

// Variables needed

var questionBank = [
  { theQuestion: "How many Academy Awards did <em>Titanic</em> win?", answerA: "Four", answerB: "Nine", answerC: "Eleven", answerD: "Thirteen", theBlurb: "<em>Titanic</em> received 11 Academy Awards, including Best Picture, Best Director, Best Visual Effects, and Best Actress for Kate Winslet.", rightAns: "C" },
  { theQuestion: "Which of the following films did NOT win the Best Foreign Language Film Academy Award?", answerA: "<em>Life is Beautiful</em> (<em>La vita è bella</em>)", answerB: "<em>Crouching Tiger, Hidden Dragon</em> (<em>Wo hu cang long</em>)", answerC: "<em>Babette’s Feast</em> (<em>Babettes gæstebud</em>)", answerD: "<em>Amélie</em> (<em>Le fabuleux destin d'Amélie Poulain</em>)", theBlurb: "<em>Amélie</em> was nominated for five Oscars – Foreign Language Film, Best Original Screenplay, Best Cinematography, Best Sound Mixing, and Best Production Design – but did not win in any category.", rightAns: "D" },
  { theQuestion: "Who has won the most Academy Awards for acting?", answerA: "Katharine Hepburn", answerB: "Walter Brennan", answerC: "Jack Nicholson", answerD: "Ingrid Bergman", theBlurb: "Katharine Hepburn has won four Best Actress acting awards, for <em>Morning Glory</em> (1933), <em>Guess Who's Coming to Dinner?</em> (1967), <em>The Lion in Winter</em> (1968), <em>On Golden Pond</em> (1981). Jack Nicholson, Ingrid Bergman, and Walter Brennan all have won three acting Academy Awards.", rightAns: "A" },
  { theQuestion: "Who has won the most Oscars for directing?", answerA: "Steven Spielberg", answerB: "John Ford", answerC: "William Wyler", answerD: "Frank Capra", theBlurb: "John Ford has won four Best Director Oscars for <em>The Informer</em> (1935), <em>The Grapes of Wrath</em> (1940), <em>How Green Was My Valley</em> (1941), and <em>The Quiet Man</em> (1952). He was also nominated for <em>Stagecoach</em> (1939). William Wyler and Frank Capra both have won three times.", rightAns: "B" },
  { theQuestion: "Which actor has been nominated most often for Oscars?", answerA: "Spencer Tracy", answerB: "Laurence Olivier", answerC: "Al Pacino", answerD: "Jack Nicholson", theBlurb: "Jack Nicholson has been nominated 12 times for his performances.", rightAns: "D" },
  { theQuestion: "Which film was the first to win Academy Awards for Best Picture, Best Director, Best Actor, Best Actress, and Best Screenplay?", answerA: "<em>One Flew Over the Cuckoo's Nest</em>", answerB: "<em>Gone With the Wind</em>", answerC: "<em>It Happened One Night</em>", answerD: "<em>The Silence of the Lambs</em>", theBlurb: "Frank Capra's influential romantic comedy <em>It Happened One Night</em> became the first film to perform a clean sweep of the top five categories; Best Picture, Best Director, Best Actor, Best Actress and Best Screenplay. This feat would later be duplicated by <em>One Flew Over the Cuckoo's Nest</em> in 1976 and <em>The Silence of the Lambs</em> in 1992.", rightAns: "C" },
  { theQuestion: "Who is the only African-American woman to win a Best Actress Oscar?", answerA: "Hattie McDaniel", answerB: "Halle Berry", answerC: "Whoopi Goldberg", answerD: "Jennifer Hudson", theBlurb: "Shockingly, Halle Berry is the only African American to win the Best Actress award, for her performance in <em>Monster's Ball</em> (2001).", rightAns: "B" },
  { theQuestion: "Which film series has won more than one Academy Award for Best Picture?", answerA: "<em>The Lord of the Rings</em>", answerB: "<em>Rocky</em>", answerC: "<em>The Godfather</em>", answerD: "<em>James Bond</em>", theBlurb: "<em>The Godfather</em> series is the only film series to win more than one Best Picture award, for <em>The Godfather</em> (1972) and <em>The Godfather: Part II<em> (1974).", rightAns: "C" },
  { theQuestion: "Who is the oldest woman to win an Academy Award for acting?", answerA: "Katharine Hepburn", answerB: "Helen Mirren", answerC: "Jessica Tandy", answerD: "Geraldine Page", theBlurb: "Jessica Tandy was the oldest winner of an acting award when she won the Best Actress Oscar for <em>Driving Miss Daisy</em> (1989).", rightAns: "C" },
  { theQuestion: "Who has won the most Oscars?", answerA: "Katharine Hepburn", answerB: "Jack Nicholson", answerC: "Meryl Streep", answerD: "Walt Disney", theBlurb: "Walt Disney won the most Academy Awards, with 22 competitive and 4 honorary Oscars.", rightAns: "D" }
]
var right = 0; // number of right answers
var wrong = 0; // number of wrong answers
var missed = 0; // number of missed answers
var rightAns = ""; // placeholder for the right answer for each question
var blurbText = ""; // placeholder for explanation of correctAnswer
var currentQuestion = 0; // variable to iterate through the array
var count; // placeholder; will be used to put 30 seconds on the clock
var intervalID; // placeholder; declare variable at global level


$(document).ready(function () {
  $("#new-game-btn").hide();
  displayQuestion(questionBank[currentQuestion]);
  $(".answerBtn").click(function () {
    // $(".answerBtn").prop("disabled",true)
    var playerGuess = $(this).data("letter");
    $("#statusBar").text("");
    evaluateGuess(playerGuess);
    playAgain();
  });

  function questTimer() {
    count = 30;
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
    countDown();
  }

  function evaluateGuess(guess) {
    $("#statusBar").text("");
    $("#blurbBar").html(questionBank[currentQuestion - 1].theBlurb);
    clearInterval(intervalID);
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
      // totalScore;
    } else {
      // $(".answerBtn").prop("disabled",false)
      displayQuestion(questionBank[currentQuestion]);
    }
  }

  function totalScore() {
    $("#firstAnswer").text("Final Score *** Final Score *** Final Score *** Final Score *** Final Score");
    $("#secondAnswer").text(right + " right answers");
    $("#thirdAnswer").text(wrong + " wrong answers");
    $("#fourthAnswer").text(missed + " unanswered questions");
    $("#blurbBar").text("");
    $("#statusBar").text("");
    if (right > wrong) {
      $("#askedQuestion").text("Game over - good job!");
    } else {
      $("#askedQuestion").text("Game over - you'd better study up on your Academy Awards history!");
    }
    $("#new-game-btn").show();
  }

  function displayQuestion(foo) {
    questTimer();
    $("#askedQuestion").html(foo.theQuestion);
    $("#firstAnswer").html(foo.answerA);
    $("#secondAnswer").html(foo.answerB);
    $("#thirdAnswer").html(foo.answerC);
    $("#fourthAnswer").html(foo.answerD);
    $("#blurbBar").text("");
    rightAns = foo.rightAns;
    currentQuestion++;
  }

  function countDown() {
    $("#statusBar").text("You have " + count + " seconds...");
    count--;
    if (count === 0) {
      clearInterval(intervalID);
      $("#statusBar").text("");
      missed = missed + 1;
      console.log(missed + " missed answers");
      timeUp();
    }
  }

  function timeUp() {
    $("#statusBar").text("Time's up!");
    $("#blurbBar").html(questionBank[currentQuestion - 1].theBlurb);
    setTimeout(loadNewQuestion, 5000);
  }

  function playAgain() {
    $("#new-game-btn").click(function () {
      right = 0;
      wrong = 0;
      missed = 0;
      currentQuestion = 0;
      $("#new-game-btn").hide();
      displayQuestion(questionBank[currentQuestion]);
    })
  }

});

  // DOM elements
  // pictures to illustrate each question
