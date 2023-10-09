import initGame from '../index.js';
import getRandomNumber from '../helpers.js';

const startQuestion = 'What is the result of the expression?';

const game = () => {
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
  initGame(startQuestion, game);
};

export default runGame;
