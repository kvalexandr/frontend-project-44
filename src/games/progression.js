import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const startQuestion = 'What number is missing in the progression?';

const game = () => {
  const lengthProgression = getRandomNumber(7, 10);
  const positionHidden = getRandomNumber(0, lengthProgression - 1);
  const step = getRandomNumber(2, 5);
  const start = getRandomNumber(2, 50);

  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const item = positionHidden === i ? '..' : step * i + start;
    progression.push(item);
  }

  const answer = String(start + step * positionHidden);
  const question = progression.join(' ');

  return [question, answer];
};

const runGame = () => {
  initGame(startQuestion, game);
};

export default runGame;
