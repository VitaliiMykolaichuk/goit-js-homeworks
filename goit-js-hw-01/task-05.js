'use strict';

let inputCountry = prompt('Введите страну доставки:');
let message = 'В вашей стране временно доставка не доступна.';

if (inputCountry === null) {
    message = 'Отменено!';
    alert(message);
} else {
    inputCountry = inputCountry.toLowerCase(inputCountry);
    let deliveryCountry;
    let deliveryCost;

    switch (inputCountry) {
        case 'китай':
            deliveryCountry = 'Китай';
            deliveryCost = 100;
            message = `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`;
            alert(message);      
            break;
      
        case 'чили':
            deliveryCountry = 'Чили';
            deliveryCost = 250;
            message = `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`;
            alert(message);      
            break;
      
        case 'австралия':
            deliveryCountry = 'Австралию';
            deliveryCost = 170;
            message = `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`;
            alert(message);
            break;
    
        case 'индия':
            deliveryCountry = 'Индию';
            deliveryCost = 80;
            message = `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`;
            alert(message);
            break;
    
        case 'ямайка':
            deliveryCountry = 'Ямайку';
            deliveryCost = 120;
            message = `Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`;
            alert(message);
            break;
    
        default:
          alert(message);
    }
}