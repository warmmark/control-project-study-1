import readlineSync from 'readline-sync';
import findSCM from './games/brain-scm-code.js';
import missedInProgression from './games/brain-progression-code.js';

export default function testChoice() {
  console.log('Choose the game!');
  console.log('1: SCM');
  console.log('2: Progression');
  const numOfChoice = readlineSync.question('Enter number of a game which you want to play: ');
  if (numOfChoice === '1') {
    findSCM();
  } else if (numOfChoice === '2') {
    missedInProgression();
  } else {
    console.log("Sorry, we don't have this game!");
  }
}
