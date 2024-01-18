#!/usr/bin/env node
import readlineSync from 'readline-sync';

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomOperator() {
  const operators = ['+', '-', '*'];
  const randomIndex = generateRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
}

function calculateExpression(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
}

function runCalculatorGame() {
  console.log('brain-calc\n');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const rounds = 3; 

  for (let i = 0; i < rounds; i++) {
    const num1 = generateRandomNumber(1, 20);
    const num2 = generateRandomNumber(1, 20);
    const operator = generateRandomOperator();
    const correctAnswer = calculateExpression(num1, operator, num2);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!\n`);
}

runCalculatorGame();
