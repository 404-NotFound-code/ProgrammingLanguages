let randomNumber, attempts, maxAttempts, range;

function startGame(difficulty) {
  document.getElementById('game').classList.remove('hidden');
  document.querySelector('.difficulty').classList.add('hidden');

  switch (difficulty) {
    case 'easy':
      range = 10;
      maxAttempts = 5;
      randomNumber = Math.floor(Math.random() * 10) + 1;
      break;
    case 'medium':
      range = 100;
      maxAttempts = 7;
      randomNumber = Math.floor(Math.random() * 100) + 1;
      break;
    case 'hard':
      range = 1000;
      maxAttempts = 10;
      randomNumber = Math.floor(Math.random() * 1000) + 1;
      break;
    default:
      alert("Invalid difficulty level!");
      return;
  }

  attempts = 0;
  document.getElementById('instructions').textContent = `Guess a number between 1 and ${range}. You have ${maxAttempts} attempts.`;
  document.getElementById('feedback').textContent = '';
  document.getElementById('attempts').textContent = '';
}

function submitGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  attempts++;

  if (guess === randomNumber) {
    document.getElementById('feedback').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    document.getElementById('game').classList.add('hidden');
  } else if (attempts >= maxAttempts) {
    document.getElementById('feedback').textContent = `Sorry, you're out of attempts. The number was ${randomNumber}.`;
    document.getElementById('game').classList.add('hidden');
  } else if (guess < randomNumber) {
    document.getElementById('feedback').textContent = 'Too low. Try again.';
  } else {
    document.getElementById('feedback').textContent = 'Too high. Try again.';
  }

  document.getElementById('attempts').textContent = `Attempts left: ${maxAttempts - attempts}`;
  document.getElementById('guess').value = '';
}
