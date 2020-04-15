'use strict';

let total = 0;
let message = 'Введите число:';
let input;

do {
  input = prompt(message);
  if (input !== null && !isNaN(input)) {
    total = Number(total) + Number(input);
    message = `Общая сумма чисел ${total}!\nВведите следующее число:`;
  } else if (input !== null) {
    alert('Было введено не число, попробуйте еще раз!');
  }
} while (input !== null);

message = `Общая сумма чисел ${total}!`;

alert(message);
