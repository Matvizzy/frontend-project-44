import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGameData = () => {
  const randomNumber = getRndInteger(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
