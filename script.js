const FALL_CRITERIA = [
  [8, 26],
  [8, 27],
  [9, 26],
  [9, 27],
  [13, 16],
  [13, 22],
  [16, 19],
  [19, 22],
];
const B_RIGHT = [0, 1, 2, 3, 4, 6, 9, 10, 12, 16, 18, 19, 22, 24, 25, 26, 27, 28];
const B_LEFT = [1, 2, 3, 4, 5, 7, 8, 11, 13, 17, 19, 23, 25, 26, 27, 28, 29];
const T_RIGHT = [6, 7, 8, 9, 10, 12, 13, 16, 18, 22, 24, 27, 28, 30, 31, 32, 33, 34];
const T_LEFT = [7, 8, 9, 10, 11, 13, 16, 17, 19, 23, 25, 26, 29, 31, 32, 33, 34, 35];

let player1Turn;

const tileElements = document.querySelectorAll("[cell]");
const startPage = document.querySelector(".start-page");
const gamePage = document.querySelector(".game-page");
const infoPage = document.querySelector(".info-page");
const infoButton = document.querySelectorAll(".info");
const beginButton = document.querySelector(".begin");
const exit = document.querySelector(".exit-button");
const restartButton = document.querySelectorAll(".restart-button");
const resultPage = document.querySelector(".result-page");
const getPeng = document.querySelectorAll(".peng");
const resultTextMessage = document.querySelector("[result-text]");
const getBoard = document.querySelector(".board");
const getPlayInfo = document.querySelector(".to-play-button");
const getFallInfo = document.querySelector(".to-fall-button");
const getPlayText = document.querySelector(".play-text");
const getFallText = document.querySelector(".fall-text");
const writePlayerTurn = document.querySelector("[playerTurnText]");
const switcher = document.querySelector(".switch");
const playerTag = document.querySelectorAll("#player");

beginButton.addEventListener("click", beginGame);

infoButton.forEach((item) => item.addEventListener("click", showInfo));
restartButton.forEach((item) => item.addEventListener("click", backToMenu));

function beginGame() {
  player1Turn = true;

  const playerTag = document.querySelectorAll("#player");
  playerTag.forEach((item) => {
    item.innerText = "";
  });

  writePlayerTurn.innerText = "Player 1's turn";
  startPage.classList.remove("show");
  gamePage.classList.add("show");

  switcher.addEventListener("click", checkCheckBox);

  tileElements.forEach((element) => {
    if (element.classList.contains("peng") === false) {
      element.addEventListener("click", handleClick, { once: true });
    }
  });
}

function showInfo() {
  infoPage.classList.add("show");
  getPlayInfo.addEventListener("click", goPlayInfo);

  getFallInfo.addEventListener("click", goFallInfo);
  exit.addEventListener("click", () => infoPage.classList.remove("show"));
}

function goPlayInfo() {
  getFallText.classList.remove("show");
  getPlayText.classList.add("show");
}
function goFallInfo() {
  getPlayText.classList.remove("show");
  getFallText.classList.add("show");
}

function backToMenu() {
  gamePage.classList.remove("show");
  startPage.classList.add("show");
  resultPage.classList.remove("show");
  tileElements.forEach((element) => {
    element.classList.remove("fell");
  });
}

function handleClick(e) {
  let tile = e.target;
  tile.classList.add("fell");

  let assignPlayer = tile.querySelector("#player");

  if (player1Turn) {
    assignPlayer.innerText = "1";
  } else {
    assignPlayer.innerText = "2";
  }

  checkAllTiles();
  if (checkPengFall()) {
    endGame();
  } else {
    swapTurns();
  }
}

function checkAllTiles() {
  //scan whole board for fallen
  for (let i = 0; i < tileElements.length; i++) {
    if (tileElements[i].classList.contains("fell")) {
      if (T_LEFT.indexOf(i) >= 0) {
        if (tileElements[i - 7].classList.contains("fell")) {
          tileElements[i - 6].classList.add("fell");
          tileElements[i - 1].classList.add("fell");

          if (tileElements[i - 6].querySelector("#player") != null) {
            if (!tileElements[i - 6].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i - 6].querySelector("#player").innerText = "1";
              } else {
                tileElements[i - 6].querySelector("#player").innerText = "2";
              }
            }
          }
          if (tileElements[i - 1].querySelector("#player") != null) {
            if (!tileElements[i - 1].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i - 1].querySelector("#player").innerText = "1";
              } else {
                tileElements[i - 1].querySelector("#player").innerText = "2";
              }
            }
          }
        }
      }

      if (T_RIGHT.indexOf(i) >= 0) {
        if (tileElements[i - 5].classList.contains("fell")) {
          tileElements[i - 6].classList.add("fell");
          tileElements[i + 1].classList.add("fell");

          if (tileElements[i - 6].querySelector("#player") != null) {
            if (!tileElements[i - 6].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i - 6].querySelector("#player").innerText = "1";
              } else {
                tileElements[i - 6].querySelector("#player").innerText = "2";
              }
            }
          }
          if (tileElements[i + 1].querySelector("#player") != null) {
            if (!tileElements[i + 1].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i + 1].querySelector("#player").innerText = "1";
              } else {
                tileElements[i + 1].querySelector("#player").innerText = "2";
              }
            }
          }
        }
      }

      if (B_LEFT.indexOf(i) >= 0) {
        if (tileElements[i + 5].classList.contains("fell")) {
          tileElements[i - 1].classList.add("fell");
          tileElements[i + 6].classList.add("fell");

          if (tileElements[i - 1].querySelector("#player") != null) {
            if (!tileElements[i - 1].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i - 1].querySelector("#player").innerText = "1";
              } else {
                tileElements[i - 1].querySelector("#player").innerText = "2";
              }
            }
          }
          if (tileElements[i + 6].querySelector("#player") != null) {
            if (!tileElements[i + 6].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i + 6].querySelector("#player").innerText = "1";
              } else {
                tileElements[i + 6].querySelector("#player").innerText = "2";
              }
            }
          }
        }
      }

      if (B_RIGHT.indexOf(i) >= 0) {
        if (tileElements[i + 7].classList.contains("fell")) {
          tileElements[i + 1].classList.add("fell");
          tileElements[i + 6].classList.add("fell");

          if (tileElements[i + 1].querySelector("#player") != null) {
            if (!tileElements[i + 1].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i + 1].querySelector("#player").innerText = "1";
              } else {
                tileElements[i + 1].querySelector("#player").innerText = "2";
              }
            }
          }
          if (tileElements[i + 6].querySelector("#player") != null) {
            if (!tileElements[i + 6].querySelector("#player").innerText) {
              if (player1Turn) {
                tileElements[i + 6].querySelector("#player").innerText = "1";
              } else {
                tileElements[i + 6].querySelector("#player").innerText = "2";
              }
            }
          }
        }
      }
    }
    getPeng.forEach((peng) => peng.classList.remove("fell"));
  }
}

//if inside every combination, at least one tile contains 'fell' there is no more minimum support, fall criteria returns true
function checkPengFall() {
  return FALL_CRITERIA.every((combination) => {
    return combination.some((index) => {
      return tileElements[index].classList.contains("fell");
    });
  });
}

function swapTurns() {
  player1Turn = !player1Turn;
  writePlayerTurn.innerText = `${player1Turn ? "Player 1's" : "Player 2's"} turn`;
}

function endGame() {
  resultPage.classList.add("show");

  //whoever's turn cause peng to fall, loses
  resultTextMessage.innerText = `${player1Turn ? "Player 2" : "Player 1"} wins!`;
}

function checkCheckBox() {
  const getToggle = document.getElementById("checkbox");

  if (getToggle.checked) {
    playerTag.forEach((item) => {
      item.classList.add("show");
    });
  } else {
    playerTag.forEach((item) => {
      item.classList.remove("show");
    });
  }
}
