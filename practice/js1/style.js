//1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str ='Hello';
let num = 123;
let flag = true;
let txt ='true';

// 2)Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// let a = 5+3;
// let a1 = 5-3;
// let a2 = 5*3;
// let a3 = 5/3;
// let a4 = 5%3;
// console.log(a);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);

//3)3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);
//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.


let height = 23;
let width = 10;
let S = height*width;
console.log(`${S} cm`);

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let pi=3.14;
let r = dC/2;
   let capacity = pi * (r**2) * heightC;
console.log(capacity);

//66. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n = 3;
let m = 4;
let k = (3**2)+(4**2)
console.log(`${k} см гіпотенуза трикутника`);


//7)  7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let x = 'Hello world';
// console.log(x);
// document.write(x);
// alert(x);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// let info = "infa:\n  Vitaliy\n  18\n  web developer";
// alert(info);

// //9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write


// let str1 = 'Кто';
// let str2 = 'Ты';
// let str3 = 'Такой';
// let concatenation = str1 + str2 + str3 ;
// document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let stringa = "20";
//      let a = 5;
//      document.write(stringa + a + "<br/>");
//      document.write(stringa - a + "<br/>");
//      document.write(stringa * "2" + "<br/>");
//      document.write(stringa / 2 + "<br/>");
//

//
// //12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let st = prompt("Enter something", "ho-ho")
//     console.log(st);

//13 С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//
// let x = +prompt('write a number ');
// let y = +prompt('write a number ');
//
// let sum = x + y;
//
// alert(sum);

//С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name = prompt('name','Ivan');
let surname = prompt('surname','Ivanov');
let age = prompt('age','32');
alert(`Доброго вечора ${name} ${surname} , мої привітання що вам ${age}`);

