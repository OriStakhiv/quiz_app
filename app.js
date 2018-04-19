function populate() {
     if(quiz.isEnded()){

       showScores();

     }else{

      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++){
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
      }
    }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function(){
    quiz.guess(guess);
    populate();
  }
}

function showScores() {
    var gameOver = "<h1>Result</h1>";
        gameOver += "<h2 id='score'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;

}


var questions = [
  new Question("Which one is not an object oriented programing language?",["Java","C#","C++","C"],"C"),
  new Question("Which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
  new Question("There are ____ main components of object oriented programing.", ["1","6","2","4"],"4"),
  new Question("Which language is used for web apps?",["PHP", "Python","JavaScript", "All"],"All"),
  new Question("MVC ia a ______.",["Language","Library","Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();
