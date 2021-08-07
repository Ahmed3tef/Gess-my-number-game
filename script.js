'use strict';

const number = document.querySelector('.number');
const body = document.querySelector('body');
const score = document.querySelector('.score');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreNumber = 20;
let highscore = 0;



const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      displayMessage('💥 You Lost The Game!');
      score.textContent = 0;
    }
  }
});

// reset page

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score.textContent = 20;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  scoreNumber = 20;
});

