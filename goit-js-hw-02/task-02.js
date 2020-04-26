'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
  let totalPrice = 0;
  const words = message.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    totalPrice += pricePerWord;
  }
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
