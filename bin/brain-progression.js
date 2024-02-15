#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'What number is missing in the progression?';

const task = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5; // Случайная длина массива
  const progressDelta = Math.floor(Math.random() * 10); // шаг прогрессии
  const firstNumber = Math.floor(Math.random() * 100); // начально значение прогрессии
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressDelta); // наполняем массив прогрессии
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength); // индекс числа
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';

  return [progression.join(' '), answer];
};
gameBody(description, task);
