import { getRandomInRange } from '../index.js';

const makeProgressionParameters = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const randomNumber = getRandomInRange(minNumber, maxNumber);
  const questionText = 'What number is missing in the progression?\nQuestion:';
  let result = 0;
  let question = '';
  const mystery = '..';

  const startNumber = 0;
  const endNumber = 9;
  const startIndex = getRandomInRange(startNumber, endNumber);
  const numberOfElementsToRemove = 1;
  let numbers = 0;
  const arr = [];

  for (let i = 1; i <= 10; i += 1) {
    numbers += randomNumber;
    arr.push(numbers);
    result = arr[startIndex];
  }
  arr.splice(startIndex, numberOfElementsToRemove, mystery);
  const finalNumbersList = arr.join(' ');
  question = `${questionText} ${finalNumbersList}`;
  return { question, result };
};

export default makeProgressionParameters;