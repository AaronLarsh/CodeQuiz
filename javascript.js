let gameAreaStart = document.querySelector("#gameAreaStart");
let gameIntroScreen = document.querySelector("#gameIntroScreen");
let gameQuestions = document.querySelector("#gameQuestions");
let gameFinaleScore = document.querySelector("#gameFinaleScore");
let gameAreaEnd = document.querySelector("#gameAreaEnd");
let gameIntroScreenBtn = document.querySelector("#gameIntroScreenBtn");

gameAreaStart.style.display = "block";
gameIntroScreen.style.display = "block";
gameQuestions.style.display = "none";
gameFinaleScore.style.display = "none";
gameAreaEnd.style.display = "none";

gameIntroScreenBtn.addEventListener("click", fN);

function fN () {
    gameAreaStart.style.display = "block";
    gameIntroScreen.style.display = "none";
    gameQuestions.style.display = "block";
}