function guessingGame() {
  const correct = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;
  return function guessNumber(num) {
    if (gameOver) return "The game is over, you already won!";
    guesses++;
    if (num === correct) {
      gameOver = true;
      const guessCount = guesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${guesses} ${guessCount}.`;
    }
    if (num < correct) return `${num} is too low!`;
    if (num > correct) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
