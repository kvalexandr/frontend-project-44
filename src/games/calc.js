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
  const answer = expression(operandOne, operandTwo);
  const isCorrectAnswer = (userAnswer) => parseInt(userAnswer, 10) === answer;

  return [question, answer, isCorrectAnswer];
};

const startCalc = () => {
  initGame(startQuestion, game);
};

export default startCalc;
