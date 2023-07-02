//задание 1
let password = 'qwerty';
let sign = prompt("введите пароль");
let result = sign === password ? alert("Пароль введен верно") : alert("Пароль введен неправильно");
//задание 2
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 10;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
};
//задание 3
let d = 0;
let e = 0;
let result3 = d > 100 || e > 100 ? 'Верно' : 'Неверно';
console.log(result3);
//задание 4
let a = '2';
let b = '3';
a = Number(2);
b = Number(3);
alert(a + b);
//задание 5
/*let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case '1' || '2' || '12':
        console.log('зима');
        break;
    case '3' || '4' || '5':
        console.log('весна');
        break;
    case '6' || '7' || '8':
        console.log('Лето');
        break;
    case '9' || '10' || '11':
        console.log('осень');
        break;
}*/
//задание  5
let monthNumber = prompt("Введите номер месяца");
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;
    default: console.log('undefined');
        break;
}