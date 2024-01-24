#!/usr/bin/env node
import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const congratulate = (playerName) => {
  console.log(`Congratulations, ${playerName}!`);
};

const isEven = (number) => number % 2 === 0;

const startEvenGame = () => {
  welcome();
  const playerName = askName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const questionNumber = getRandomNumber();
    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    askQuestion(questionNumber);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  congratulate(playerName);
};

startEvenGame();
