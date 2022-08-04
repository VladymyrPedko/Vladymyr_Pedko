// Deadline: 08.08.2022
//
// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
//
//     function arrayFill(element, number) {
//      let test = [];
//         for (let i = 0; i < number; i++) {
//             test.push(element)
//         }
//         return test
//     }
//
// console.log(arrayFill('x',5));
//
// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(number) {
//
// return number > 0 && number < 10
//
// }
// console.log(isNumberInRange(9));
//
// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
//
// function isEven(number) {
// return number % 2 === 0
// }
// console.log(isEven(5));

// 4) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
//
// const arr = [1, 22, 214, 44, 15];
// const filteredArr = arr.filter((el) =>
//     isEven(el));
// console.log(filteredArr);
//
// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
//
// function num (a, b) {
//     let result = a;
//    for (let i = 1; i < b; i++){
//        result *= a;
//    }
//     console.log(result);
// }
// num(5,3);

//
// 6) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
//

// function age(num) {
// if (num > 16){
//     console.log('добро пожаловать')
// }else  {
//     console.log('вы еще молоды')}
// }
// age(2);

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.
//
// function age(a) {
//     let num = a || undefined;
//     if ( num > 16) {
//         console.log('добро пожаловать')
//     } else if (num === undefined) {
//         console.log('Введите свой возраст')
//     } else {
//         console.log('вы еще молоды')
//     }
// }
// age(33);

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
//
// let string = 'заглавным первый символ каждого слова';
// function ucfirst() {
//     let strArr = string.split(' ');
//     console.log(strArr);
//     const result = strArr.map((el,) => el[0].toUpperCase() + el.slice(1));
//     console.log(result);
//     return result;
// }
// ucfirst();
//
// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
//
// let str = 'var_text_hello';
// function letterUp() {
//     let strArr = str.split('_');
//     let arrayForStr =  strArr.map((el, index)
//     => index === 0 ? el : el[0].toUpperCase() + el.slice(1));
//     const result =  arrayForStr.join('');
//     console.log(result);
// }
// letterUp();

// 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.

// let fruit = ['Banana', 'Orange', 'Tomato', 'Apple'];
//     function inArray(element, array) {
//         console.log(fruit.includes(element, array))
// }
// inArray('Tomato', fruit);














