//gameAreaStart div selector
let gameAreaStart = document.querySelector("#gameAreaStart");
//gameIntroScreen
let gameIntroScreen = document.querySelector("#gameIntroScreen");
let gameIntroScreenBtn = document.querySelector("#gameIntroScreenBtn");
//gameIntroScreen end
//gameQuestions DIV selectors
let gameQuestions = document.querySelector("#gameQuestions");
let questionHeader = document.querySelector("#questionHeader");
let btn1 = document.querySelector("#button1");
let btn2 = document.querySelector("#button2");
let btn3 = document.querySelector("#button3");
let btn4 = document.querySelector("#button4");
//gameQuestions DIV selectors end
let gameFinaleScore = document.querySelector("#gameFinaleScore");
let submitHighScore = document.querySelector("#submitHighScore");
//end of gameAreaStart div selectors
let gameAreaEnd = document.querySelector("#gameAreaEnd");
let restartButton = document.querySelector("#restartButton");
let buttonClearHighScore = document.querySelector("#buttonClearHighScore");
//nav bar link
let viewHighScores = document.querySelector("#viewHighScores");
// selector for timer ID
let timer = document.querySelector("#timer");

//Javascript questions in an array
var questions = 
[
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: ["<javascript>", "<scripted>", "<script>", "<js>"],
        correct: "<script>"
    },
    
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        choices: ["interface", "throws", "program", "short"],
        answer: "program"
    },

    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["last()", "put()", "push()", "None of the above."],
        answer: "push()"
    },

    {
        question: "Who invented JavaScript?",
        choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "No one"],
        answer: "Brendan Eich"
    },

    {
        question: "______ JavaScript is also called client-side JavaScript.",
        choices: ["Microsoft", "Navigator", "LiveWire", "Native"],
        answer: "Navigator"
    },
    
];

//sets the display start state for each div
gameAreaStart.style.display = "block";
gameIntroScreen.style.display = "block";
gameQuestions.style.display = "none";
gameFinaleScore.style.display = "none";
gameAreaEnd.style.display = "none";

//event listeners
gameIntroScreenBtn.addEventListener("click", startGame);
btn4.addEventListener("click", highScoreInput);
submitHighScore.addEventListener("submit", preventDefault());
submitHighScore.addEventListener("submit", endGame);
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
    event.preventDefault();
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
