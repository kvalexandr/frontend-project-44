#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const getRandomNumber = () => Math.round(Math.random() * (100 - 1) + 1);
const isEven = (number) => parseInt(number, 10) % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let countGames = 3;
let isWin = true;

while (countGames > 0) {
  const question = getRandomNumber();
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    isWin = false;
    break;
  }

  countGames -= 1;
}

if (isWin) {
  console.log(`Congratulations, ${userName}!`);
}
