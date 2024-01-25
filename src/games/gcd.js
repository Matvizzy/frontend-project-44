import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return getGcd(secondValue, firstValue % secondValue);
};

const getGameData = () => {
  const number1 = getRndInteger(1, 100);
  const number2 = getRndInteger(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;