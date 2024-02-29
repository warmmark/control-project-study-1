import { gameLogic, randomNum } from './index.js';

function askSCM(num1 = randomNum(), num2 = randomNum(), num3 = randomNum()) {
  console.log(`Question: ${num1} ${num2} ${num3}`);
  for (let i = Math.max(num1, num2, num3); i < 970300; i += 1) {
    if ((i % num1 === 0) && (i % num2 === 0) && (i % num3 === 0)) return `${i}`;
  }
  return num1;
}

export default function findSCM() {
  const sentence = 'Find the smallest common multiple of given numbers.';
  gameLogic(askSCM, sentence);
}
