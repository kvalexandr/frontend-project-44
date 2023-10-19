import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(7, 10);
  const positionHidden = getRandomNumber(0, length - 1);
  const step = getRandomNumber(2, 5);
  const start = getRandomNumber(2, 50);

  const progression = makeProgression(start, step, length);
  progression[positionHidden] = '..';

  const answer = String(start + step * positionHidden);
  const question = progression.join(' ');

  return [question, answer];
};

const runGame = () => {
  initGame(description, generateRound);
};

export default runGame;
