import readlineSync from 'readline-sync';
import greeting from './cli.js';

const userName = greeting();

const initGame = (startQuestion, game) => {
  console.log(startQuestion);
  let countGames = 3;

  while (countGames > 0) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    countGames -= 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default initGame;
