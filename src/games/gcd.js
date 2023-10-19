import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);

  const question = `${numberOne} ${numberTwo}`;
  const answer = String(getGcd(numberOne, numberTwo));

  return [question, answer];
};

const runGame = () => {
  initGame(description, generateRound);
};

export default runGame;
