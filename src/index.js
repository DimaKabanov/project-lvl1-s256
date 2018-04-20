import readlineSync from 'readline-sync';

export const getNameOfPlayer = () => readlineSync.question('May I have your name? ');

export const sayPlayerHi = (userName) => {
  console.log(`Hi ${userName}!`);
};

export const askQuestionToPlayer = (data) => {
  console.log(`Question: ${data}`);
};

export const getAnswerOfPlayer = () => readlineSync.question('Your answer: ');

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
