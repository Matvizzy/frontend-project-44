#!/usr/bin/env node

import { welcomeUserGameEven, playGame } from '../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * 100) + 1;
  return {
    question: `Question: ${number}`,
    correctAnswer: isEven(number) ? 'yes' : 'no'
  };
}

function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer;
}

function startGame() {
  welcomeUserGameEven();
  playGame(generateQuestion, checkAnswer);
}

startGame();
