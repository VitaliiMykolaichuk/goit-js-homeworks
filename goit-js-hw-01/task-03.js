'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let isInputPass = prompt('Введите пароль!');

if (isInputPass === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (isInputPass === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  alert(message);
}
