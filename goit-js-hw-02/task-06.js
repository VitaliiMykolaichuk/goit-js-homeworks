'use strict';

let input;
let total = null;
const numbers = [];
let message = 'Введите число:';

do {
  input = prompt(message);
  if (isNaN(input) || input === '') {
    alert('Было введено не число, попробуйте еще раз!');
  } else if (!isNaN(input) && input !== null) {
    numbers.push(input);
  }
} while (input !== null);

for (const number of numbers) {
  total += Number(number);
}

if (input === null && total === null) {
  alert(`Вы не ввели ни одного числа!`);
} else {
  message = `Общая сумма введенных чисел ${total}!`;

  alert(message);
}
