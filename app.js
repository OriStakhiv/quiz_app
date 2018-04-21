function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    currentQuestionNumber = quiz.questionIndex + 1;
    element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

quiz = new Quiz(questions);

populate();
