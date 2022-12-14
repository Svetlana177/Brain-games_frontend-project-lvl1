import getRandomInRange from '../utils.js';

const description = 'What is the result of the expression?';

const minNumber = 1;
const maxNumber = 10;
const operators = ['+', '-', '*'];

const getExpression = {
  '+': function getPlus(a, b) {
    return a + b;
  },
  '-': function getMinus(a, b) {
    return a - b;
  },
  '*': function getMultiplication(a, b) {
    return a * b;
  },
};

const prepareDataForOneRound = () => {
  const firstNumber = getRandomInRange(minNumber, maxNumber);
  const secondNumber = getRandomInRange(minNumber, maxNumber);
  const randomNumber = getRandomInRange(0, operators.length - 1);
  const randomOperator = operators[randomNumber];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const result = getExpression[randomOperator](firstNumber, secondNumber);
  return { question, result };
};

export {
  description,
  prepareDataForOneRound,
};
