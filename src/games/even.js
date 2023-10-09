import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const answer = parseInt(number, 10) % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const runGame = () => {
  initGame(startQuestion, game);
};

export default runGame;