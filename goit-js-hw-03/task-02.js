'use strict';

const countProps = function (obj) {
  let calculatePropertys = 0;
  for (const key of Object.keys(obj)) {
    calculatePropertys += 1;
  }
  return calculatePropertys;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
