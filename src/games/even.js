import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runGame = () => {
  initGame(description, generateRound);
};

export default runGame;
