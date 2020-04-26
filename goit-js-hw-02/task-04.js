'use strict';

const formatString = function (string) {
  const arrayFromString = string.split('');

  if (arrayFromString.length > 40) {
    const adjustedArray = arrayFromString.slice(0, 40);
    const stringFromArray = adjustedArray.join('');

    return `${stringFromArray} ...`;
  } else {
    const stringFromArray = arrayFromString.join('');

    return stringFromArray;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
