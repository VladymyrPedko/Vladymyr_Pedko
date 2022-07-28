// 1 - Создать переменную каждого типа данных.
//
// var number = 123;
// var string = 'string';
// var boolean = true;
// var undefined = undefined;
// var null1 = null;
// var symbol = symbol("id");
// var bigint = 12323n;
// var object = object{b: 2};
//
// // 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
// //
// var abc = 5;
// console.log(abc);
// let def = "home";
// console.log(def);
// const fgh = "50km";
// console.log(fgh);
//
// abc = 10;
// console.log(abc);
// def = "city";
// console.log(def);

// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).
//
// var number = 123;
//     console.log(number.toString());
//     console.log(!!number);
//
// var str = 'Строка';
//     console.log(+str);
//     console.log(parseFloat(str));
//     console.log(!!str);
//
// var boolean = false;
//     console.log(+boolean);
//     console.log(boolean.toString());
//
// var undefined = undefined;
//     console.log(+undefined);
//     console.log(parseFloat(undefined));
//     console.log(!!undefined);
//
// var null1 = null;
//     console.log(+null1);
//     console.log(parseFloat(null1));
//     console.log(!!null1);
//
// var symbol = Symbol;
//     console.log(+symbol);
//     console.log(symbol.toString);
//     console.log(!!symbol);
//
// var bigint = 12323n;
//     console.log(bigint.toString());
//     console.log(!!bigint);

// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.
//
// var str = 'word';
//
// var number = 123 + str;
// console.log(number);
// var string = 'string' + str;
// console.log(string);
// var boolean = true + str;
// console.log(boolean);
// var undefined = undefined + str;
// console.log(undefined);
// var null1 = null + str;
// console.log(null1);
// var symbol = Symbol + str;
// console.log(symbol);
// var bigint = 12323n + str;
// console.log(bigint);
// var object = {b : 2} + str;
// console.log(object);
///////////////////////////////////////
// var num = 369;
//
// var number = 123 + num;
// console.log(number);
// var string = 'string' + num;
// console.log(string);
// var boolean = true + num;
// console.log(boolean);
// var undefined = undefined + num;
// console.log(undefined);
// var null1 = null + num;
// console.log(null1);
// var symbol = Symbol + num;
// console.log(symbol);
// var bigint = 12323n + num;
// console.log(bigint);
// var object = {b: 2} + num;
// console.log(object);

// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
//
// var str = 'word';
//
// var number = str - 123;
// console.log(number);
// var string = str - 'string';
// console.log(string);
// var boolean = str - true;
// console.log(boolean);
// var undefined = str - undefined;
// console.log(undefined);
// var null1 = str - null;
// console.log(null1);
// var symbol = str - symbol("id");
// console.log(symbol);
// var bigint = str - 12323n;
// console.log(bigint);
// var object = str - {b: 2};
// console.log(object);
/////////////////////////////////////
// var num = 369;
//
// var number = 123 - num;
// console.log(number);
// var string = num - 'string';
// console.log(string);
// var boolean = true - num;
// console.log(boolean);
// var undefined = undefined - num;
// console.log(undefined);
// var null1 = null - num;
// console.log(null1);
// var symbol = symbol("id") - num;
// console.log(symbol);
// var bigint = 12323n - num;
// console.log(bigint);
// var object = {b: 2} - num;
// console.log(object);

// 6 - Задача (Условный оператор)
// Пользователь вводит логин и пароль.
//     Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».
//
// let checkLogin = prompt('ввдите login:');
// let checkPassword = prompt('password:');
//
//     if (checkLogin === 'kykold' && checkPassword === '1234asdQQ') {
//     alert('Добро пожаловать')
//     }
//     else {
//         alert('Ошибка входа');
//     }

// 7 - Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».
//
// let age = +prompt('Введите год рождения');
//
//     if (age <= 2006) {
//         alert (`Вам ${2022 - age} лет. Добро пожаловать`)
//     } else {
//         alert(`Вам ${2022 - age} лет. Вход воспрещен`)
//     }

// 8 - Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
//     Пользователь вводит стаж работы, а программа пишет ему надбавку.
//

// let experience = +prompt('Введите стаж работы');
//
// if (experience >= 2 && experience <= 5){
//     alert('Надбавка 100грн')
// }else if(experience <= 10){
//     alert('Надбавка 300грн')
// }else if(experience > 10){
//     alert('Надбавка 1000грн')
// }else {
//     alert('Нет надбавки')
// }

// 9 - Задача (Условный оператор и свитч кейс)
// Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
// 9.1 Решить на иф елсах
// 9.2 Решить на свитч кейсе
// 9.3 Решить на тернарном операторе
//
// let week = +prompt("Введите номер дня недели");
//
//     if (week === 1){
//         alert("Monday")
//     } else if (week === 2){
//         alert('Tuesday')
//     } else if (week === 3){
//         alert('Wednesday')
//     } else if (week === 4){
//         alert('Thursday')
//     } else if (week === 5){
//         alert('Friday')
//     } else if (week === 6){
//         alert('Saturday')
//     } else if (week === 7){
//         alert('Sunday')
//     } else alert('Такого дня нет');
///////////////////////////////////////////
// let week = +prompt("Введите номер дня недели");
// let day = week === 1 ? 'Monday'
//             : week === 2 ? 'Tuesday'
//                 :week === 3 ? 'Wednesday'
//                     :week === 4 ? 'Thursday'
//                         :week === 5 ? 'Friday'
//                             :week === 6 ? 'Saturday'
//                                 : week === 7 ? 'Sunday'
//                                     : 'Такого дня нет';
// alert(day);
/////////////////////////////////////////////
// let week = +prompt("Введите номер дня недели");
//
// switch (week) {
//     case 1 : alert('Monday');
//         break;
//         case 2 : alert('Tuesday');
//         break;
//         case 3 : alert('Wednesday');
//         break;
//         case 4 : alert('Thursday');
//         break;
//         case 5 : alert('Friday');
//         break;
//         case 6 : alert('Saturday');
//         break;
//         case 7 : alert('Sunday');
//         break;
//     default: alert('Такого дня нет');
// }

// 10 - Задача (Условный оператор)
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//

// let number = +prompt('Напишите число');
// if (number > 0){
//     alert('1')
// }else  if (number === 0){
//     alert('0')
// } else {
//     alert('-1')
// }

// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }
//

// let login = prompt('Кто вы?');
// let message = login == 'Сотрудник' ? 'Привет'
//     : login == 'Директор' ? 'Здравствуйте'
//         :'Нет логина';
// alert(message);

// 12 - Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.
//

// let roomNumber = +prompt('Введите номер квартиры');
//
// if (roomNumber >= 1 && roomNumber <= 20){
//     alert('1 подъезд')
// } else if (roomNumber > 20 && roomNumber <= 48){
//     alert('2 подъезд')
// } else if (roomNumber > 48 && roomNumber <= 90){
//     alert('3 подъезд')
// } else {
//     alert('Такой квартиры нет в этом доме')
// }

//
// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
//     switch (browser) {
//         case 'Edge':
//             alert( "You've got the Edge!" );
//             break;
//
//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert( 'Okay we support these browsers too' );
//             break;
//
//         default:
//             alert( 'We hope that this page looks ok!' );
//     }
//
// let browser = prompt('Вввдите ваш браузер');
//
// if(browser === 'Edge') {
//     alert( "You've got the Edge!" )
// }
// else   if (browser ==='Chrome' || browser ==='Firefox' || browser ==='Safari' || browser ==='Opera'){
//     alert( 'Okay we support these browsers too');
// }
// else   {
//     alert('We hope that this page looks ok!');
// }

//     14 - Задача (свитч кейс)
//     Переписать условия "if" на "switch"
//     важность: 4
//     Перепишите код с использованием одной конструкции switch:
//
//         const number = +prompt('Введите число между 0 и 3', '');
//
//         if (number === 0) {
//             alert('Вы ввели число 0');
//         }
//
//         if (number === 1) {
//             alert('Вы ввели число 1');
//         }
//
//         if (number === 2 || number === 3) {
//             alert('Вы ввели число 2, а может и 3');
//
// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0 : alert('Вы ввели число 0');
//         break;
//     case 1 : alert('Вы ввели число 1');
//         break;
//     case 2 :
//     case 3 :
//      alert('Вы ввели число 2, а может и 3');
//         break;
//     default : alert('нет')
// }




