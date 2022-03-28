function guessingGame() {
  const answer = Math.floor(Math.random() * 100);
  let finished = false;
  let Guesses = 0;

  return function guess(num) {
    if (finished) return "The game is over, you already won!";
    Guesses++;
    if (num === answer) {
      isOver = true;
      const guess = Guesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${Guesses} ${guess}.`;
    }
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
