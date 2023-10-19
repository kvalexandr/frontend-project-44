import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

const runGame = () => {
  initGame(description, generateRound);
};

export default runGame;
