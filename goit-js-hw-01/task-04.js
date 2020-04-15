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
  wantsToBuy = Number(prompt('Сколько дроидов желаете купить?'));
}

// Почему после первого ввода не числа (сработал цикл while), при нажатии cancel - wantsToBuy возвращает 0 а не null?

if (wantsToBuy === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (Number(wantsToBuy) * pricePerDroid > credits) {
  message = 'Недостаточно средств на счету!';
  alert(message);
} else {
  // И после того как поступил 0, а ожидался null, срабатывает не та ветка ((
  console.log(wantsToBuy); // вот здесь я это получил

  balanceOfCredits = credits - Number(wantsToBuy) * pricePerDroid;
  message = `Вы купили ${wantsToBuy} дроидов, на счету осталось ${balanceOfCredits} кредитов.`;
  alert(message);
}
