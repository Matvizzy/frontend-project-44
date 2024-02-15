#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const q = Math.round(Math.random() * 100) + 2;

const Prime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeGame = () => {
  const a = Prime(q) ? 'yes' : 'no';
  return [q, a];
};

gameBody(description, primeGame);
