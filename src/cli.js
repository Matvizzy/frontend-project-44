import readlineSync from 'readline-sync';
//HELLO 
export default function welcomeUser() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
//
//brain-even hello
export function welcomeUserGameEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
}
//

//brain-even logic
export function playGame(generateQuestion, checkAnswer) {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { question, correctAnswer } = generateQuestion();
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log("Let's try again.");
      return false;
    }
  }

  console.log('Congratulations!');
  return true;
}
//