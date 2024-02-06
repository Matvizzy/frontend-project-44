import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getGameData = () => {
  const start = getRndInteger(0, 5);
  const step = getRndInteger(1, 5);
  const length = getRndInteger(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenNumber = getRndInteger(0, progression.length - 1);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
