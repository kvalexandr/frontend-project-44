import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const getExpression = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const operator = operations[getRandomNumber(0, 2)];
  const operandOne = getRandomNumber(1, 100);
  const operandTwo = getRandomNumber(1, 100);
  const expression = getExpression[operator];

  const question = `${operandOne} ${operator} ${operandTwo}`;
  const answer = String(expression(operandOne, operandTwo));

  return [question, answer];
};

const runGame = () => {
  initGame(description, generateRound);
};

export default runGame;
