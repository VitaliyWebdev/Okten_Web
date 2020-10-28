//1)присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

1111111
// let y = 'owu';
// let z = 'com';
// let ua = 'ua';
// let num = 1;
// let g = 10;
// let s = -999;
// let f = 123;
// let pi = 3.14;
// let e = 16;
// let bool = true;
// let l = false;

//console.log(x);console.log(y);console.log(z);console.log(ua);console.log(num);console.log(g);console.log(s);console.log(f);console.log(pi);console.log(e);console.log(bool);console.log(l);
//alert(x);alert(y);
//document.write(x);
// 2) переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// x = 'Chao' ;
// y = 'osdaaffa' ;
 //alert(x);alert(y);
//console.log(y);
//document.write(x);
//3) Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
//let number_1 = 1;
//let number_2 = 2;
//let number_3 = 3;
//let string_1 = 'Stringa1';
//let string_2 = 'Stringa2';
//let string_3 = 'Stringa3';
//console.log(number_1);
//document.write(number_1);
//alert(number_1);

// 4)  при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
//let surname = prompt("Фамілія",'Михайлов');
//let name = prompt("Ім'я",'Віталій');
//let second_name = prompt("По батькові",'Віталійович');
//console.log(name);
//
// 5) Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// let person = surname + name + second_name ;
// console.log(person);

// 6) Пропуск)
// 7) - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
// let first_string = prompt('write number please','1');
// let second_string = prompt('write number please','2');
// let third_string = prompt('write number please','3');
// first_numb = Number(first_string);
// second_numb = Number(second_string);
// third_numb = Number(third_string);
// let sum = first_numb + second_numb + third_numb;
// console.log(sum);

// 8) - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let first_num = prompt('write your number ', '1');
// let second_num = prompt('write your number ', '2');
// let third_num = prompt('write your number ', '3');
// let fourth_num = prompt('write your number ', '4');
// let new_first_num = parseInt(first_num);
// let new_second_num =  parseInt(second_num);
// let new_third_num =  parseInt(third_num);
// let new_fourth_num =  parseInt(fourth_num);
// let result = new_first_num + new_second_num + new_third_num + new_fourth_num;
// console.log(result);

//9)-- - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let first_num = prompt('write your number ', '1.25');
// let second_num = prompt('write your number ', '2.25');
// let third_num = prompt('write your number ', '3.25');
// let fourth_num = prompt('write your number ', '4.25');
// let new_first_num = parseFloat(first_num);
// let new_second_num =  parseFloat(second_num);
// let new_third_num =  parseFloat(third_num);
// let new_fourth_num =  parseFloat(fourth_num);
// let result = new_first_num + new_second_num + new_third_num + new_fourth_num;
// console.log(result);


// 10) при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// let first_num = prompt('write your number ');
// let second_num = prompt('write your number ');
// let third_num = prompt('write your number ');
// let new_first_num = Math.round(parseFloat(first_num));
// let new_second_num =  Math.round(parseFloat(second_num));
// let new_third_num =  Math.round(parseFloat(third_num));
// console.log(new_first_num);
// console.log(new_second_num);
// console.log(new_third_num);

// 11) --при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// ??????


//При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
// let number = typeof(a);
// let string = typeof(b);
// let boolean = typeof(c);
// let non = typeof(d);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(number);
// console.log(string);
// console.log(boolean);
// console.log(non);




let a = prompt('write numb');
let b = prompt('write numb');
let c = prompt('write numb');

if(a<b && b<c){
    console.log(a,)
}






//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let a = prompt('Write number','1');
// let b = prompt('Write number','2');
// let c = prompt('Write number','3');
// if(a<b && b<c && c>b){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// else if(a>b && b>c ){
//     console.log(c);
//     console.log(b);
//     console.log(a);
// }
// else if( b>a &&  c>a && c<b){
//     console.log(b);
//     console.log(c);
//     console.log(a);
// }
// else if( a>b && b<c && a<c){
//     console.log(b);
//     console.log(a);
//     console.log(c);
// }
// else if( a<b && b>c && a>c){
//     console.log(c);
//     console.log(a);
//     console.log(b);
// }
// else if( a<b && b>c && a<c){
//     console.log(a);
//     console.log(c);
//     console.log(b);
// }

//
//
//
//     let max_xy = console.log(Math.max(x,y));
// let max_yz = console.log(Math.max(y,z));
// let max_xz = console.log(Math.max(x,z));



// ДОП 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let x = prompt('write color');
//
// if( x === 'green' ){
//     alert('GO!');
// }
// else if(x === 'orrange'){
//     alert('WAIT!');
// }
// else if(x === 'red'){
//     alert('STOP!');
// }

//3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let x = prompt('write color');
// let y = prompt('Where cars','no cars')
// if( x === 'green' && y ==='no cars'  ){
//     alert('GO!');
// }
// else if (x === 'green' && y === 'cars on the road'){
//     alert('Wait until cars go away')
// }
// else if(x === 'orrange' && y ==='cars on the road'){
//     alert('WAIT!');
// }
// else if(x === 'orrange' && y ==='no cars'){
//     alert('JUST WAIT!');
// }
// else if(x === 'red' && y === 'no cars '){
//     alert('JUST STOP!');
// }
// else if(x === 'red' && y === 'cars on the road '){
//     alert('JUST STOP and WAIT!');
// }
// else{
//     alert('do what you want')
// }
//

// ДОП 2. SWITCH
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!
// let x = prompt('write down color')
// switch(x){
//     case 'green':
//         alert('GO!');
//         break;
//     case 'orrange':
//         alert('wait!');
//         break;
//     case 'red':
//         alert('stop!');
//         break;
//         default :alert('I dont know');
// }

//3) switch
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let x = prompt('color');
let y = prompt('Do you see cars on the road?');

switch (true) {

    case ( x === 'green' && y === 'no cars') :
        alert('GO!');
        break;
    case (x === 'green' && y === 'cars on the road') :
    alert('Wait until cars go away');
        break;

    default: alert('do whatever you want');

}