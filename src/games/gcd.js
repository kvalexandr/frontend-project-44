import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const startQuestion = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (n1, n2) => {
  const iter = (x, y) => {
    const max = Math.max(x, y);
    const min = Math.min(x, y);
    const remainderOfDivision = max % min;

    if (remainderOfDivision === 0) return min;
    return iter(min, remainderOfDivision);
  };

  return iter(n1, n2);
};

const game = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);

  const question = `${numberOne} ${numberTwo}`;
  const answer = String(getGreatestCommonDivisor(numberOne, numberTwo));

  return [question, answer];
};

const runGame = () => {
  initGame(startQuestion, game);
};

export default runGame;
