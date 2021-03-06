'use strict';

let credits = 23580;
let pricePerDroid = 3000;
let numberOfDroids;
let balanceOfCredits;

let message;
let wantsToBuy = prompt('Сколько дроидов желаете купить?');

while (
  Number.isNaN(Number(wantsToBuy)) === true &&
  wantsToBuy !== 0 &&
  wantsToBuy !== null
) {
  message = 'Введите число!';
  alert(message);
  wantsToBuy = prompt('Сколько дроидов желаете купить?');
}
if (wantsToBuy === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (Number(wantsToBuy) * pricePerDroid > credits) {
  message = 'Недостаточно средств на счету!';
  alert(message);
} else {
  balanceOfCredits = credits - Number(wantsToBuy) * pricePerDroid;
  message = `Вы купили ${wantsToBuy} дроидов, на счету осталось ${balanceOfCredits} кредитов.`;
  alert(message);
}
