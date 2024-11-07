let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : Infinity;
document.getElementById("highScoreValue").innerText = highScore === Infinity ? "--" : highScore;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const messageElement = document.getElementById("message");

  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    messageElement.innerText = "Please enter a valid number!";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    messageElement.innerText = `Correct! 🎉 You guessed it in ${attempts} tries!`;
    triggerConfetti();

    if (attempts < highScore) {
      highScore = attempts;
      localStorage.setItem("highScore", highScore);
      document.getElementById("highScoreValue").innerText = highScore;
    }

    resetGame();
  } else if (guess > secretNumber) {
    messageElement.innerText = "Too high! Try again.";
  } else {
    messageElement.innerText = "Too low! Try again.";
  }

  guessInput.value = "";
}

function triggerConfetti() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 }
  });
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
}
