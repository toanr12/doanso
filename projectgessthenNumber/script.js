let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score < 1) {
    document.querySelector(".showMess").textContent = "You Lose!";
    document.querySelector("body").style.backgroundColor = "red";
  } else {
    if (!guess) {
      document.querySelector(".showMess").textContent = "No Number";
    } else if (guess === secretNumber) {
      document.querySelector(".showMess").textContent = "You Right";
      document.querySelector(".CorretNumber").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "green";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = "Highscore: " + highscore;
      }
    } else if (guess < secretNumber) {
      document.querySelector(".showMess").textContent = "To Low!";
      score--;
      document.querySelector(".score").textContent = "score: " + score;
    } else if (guess > secretNumber) {
      document.querySelector(".showMess").textContent = "To High!";
      score--;
      document.querySelector(".score").textContent = "score: " + score;
    }
  }
});

document.querySelector(".reset-game").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  document.querySelector(".showMess").textContent = "Start guessing...";
  document.querySelector(".CorretNumber").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = "score: " + score;
  document.querySelector("body").style.backgroundColor = "#222";
});