import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculateAnswer = (firstValue, secondValue, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }

  return result;
};

const getGameData = () => {
  const number1 = getRndInteger(1, 20);
  const number2 = getRndInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRndInteger(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculateAnswer(number1, number2, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;