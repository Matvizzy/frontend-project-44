import readlineSync from 'readline-sync';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateRandomNumbers = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  return [number1, number2];
};

const playGCDGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\nFind the greatest common divisor of given numbers.`);

  let correctAnswersCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const [number1, number2] = generateRandomNumbers();
    const correctAnswer = findGCD(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGCDGame();
