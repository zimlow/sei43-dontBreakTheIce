const PLAYER_1 = "player1";
const PLAYER_2 = "player2";

let playerTurn;

const tileElements = document.querySelectorAll("tile");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const infoPage = document.querySelector(".info-page");
const infoButton = document.querySelector(".info");
const beginButton = document.querySelector(".begin");
const exit = document.querySelector(".exit-button");
console.log(infoButton);

beginButton.addEventListener("click", beginGame);
infoButton.addEventListener("click", showInfo);

function beginGame() {
  startPage.classList.remove("show");
  gamePage.classList.add("show");
  tileElements.addEventListener("click", handleClick);
}

function showInfo() {
  infoPage.classList.add("show");
  exit.addEventListener("click", () => infoPage.classList.remove("show"));
}

function handleClick(e) {
  const tile = e.target;
}
