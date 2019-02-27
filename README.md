# TriviaGame

# So you say you like to  watch movies...

So you say you like to watch movies is an Academy Awards trivia game, with ten questions about Oscar-winning films from the history of cinema. The multiple-choice questions are timed, so that players must answer each question within 30 seconds. 

Right and wrong answers, as well as unanswered questions, are tracked and reported back at the end of the game.

# Why The Project Is Useful

While the main objective of the project was the mastery of timers, there were many other challenges, both in functionality (using JavaScript and jQuery), and in design. 

In terms of functionality, getting the timers to work took a lot of experimenting before finally getting them to work (the game uses both setInterval and setTimeout). Other challenges included showing and hiding elements (buttons and images), as well as iterating through the object array containing the questions, answers, images, facts, and other pieces used in the game. 

For the design, I opted for Bootstrap which, while limiting my options, allowed me to focus less on layout and more on getting the game to work.I did not create game elements dynamically (the various buttons, divs, and images used in the game), but instead placed everything into the html since the game reuses and repurposes elements throughout. Further, I like Bootstrap's clean and crisp Jumbotron style, so imposed very little additional styling on the game. Bootstrap also ensures that the game is mobile friendly.

