#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import randomNum from '../src/randomNum.js';

const description = 'What is the result of the expression?';
const task = () => {
  const operand1 = randomNum(1, 10);
  const operand2 = randomNum(1, 10);

  const operator = ['+', '-', '*'];
  const indexOper = randomNum(0, 2);

  let answer = '';

  switch (indexOper) {
    case 0:
      answer = `${operand1 + operand2}`;
      break;
    case 1:
      answer = `${operand1 - operand2}`;
      break;
    default:
      answer = `${operand1 * operand2}`;
      break;
  }

  return [`${operand1} ${operator[indexOper]} ${operand2}`, answer];
};

gameBody(description, task);
