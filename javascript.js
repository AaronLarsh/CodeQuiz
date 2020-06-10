//gameAreaStart div selector
let gameAreaStart = document.querySelector("#gameAreaStart");
//gameIntroScreen
let gameIntroScreen = document.querySelector("#gameIntroScreen");
let gameIntroScreenBtn = document.querySelector("#gameIntroScreenBtn");
//gameIntroScreen end
//gameQuestions DIV selectors
let gameQuestions = document.querySelector("#gameQuestions");
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");
//gameQuestions DIV selectors end
let gameFinaleScore = document.querySelector("#gameFinaleScore");
let submitHighscore = document.querySelector("#submitHighscore");
//end of gameAreaStart div selectors
let gameAreaEnd = document.querySelector("#gameAreaEnd");
let restartButton = document.querySelector("#restartButton");
let buttonClearHighScore = document.querySelector("#buttonClearHighScore");
//nav bar link
let viewHighScores = document.querySelector("#viewHighScores");



//sets the display start state for each div
gameAreaStart.style.display = "block";
gameIntroScreen.style.display = "block";
gameQuestions.style.display = "none";
gameFinaleScore.style.display = "none";
gameAreaEnd.style.display = "none";

//event listeners
gameIntroScreenBtn.addEventListener("click", startGame);
btn4.addEventListener("click", highScoreInput);
submitHighscore.addEventListener("submit", endGame);
restartButton.addEventListener("click", resetGame);
viewHighScores.addEventListener("click",endGame)

//functions
function startGame () {
    gameAreaStart.style.display = "block";
    gameIntroScreen.style.display = "none";
    gameQuestions.style.display = "block";
    gameFinaleScore.style.display = "none";
    gameAreaEnd.style.display = "none";
}

function highScoreInput () {
    gameAreaStart.style.display = "block";
    gameIntroScreen.style.display = "none";
    gameQuestions.style.display = "none";
    gameFinaleScore.style.display = "Block";
    gameAreaEnd.style.display = "none";
}

function endGame () {
    gameAreaStart.style.display = "none";
    gameAreaEnd.style.display = "block";
}

function resetGame () {
    gameAreaStart.style.display = "block";
    gameIntroScreen.style.display = "block";
    gameQuestions.style.display = "none";
    gameFinaleScore.style.display = "none";
    gameAreaEnd.style.display = "none";
}
