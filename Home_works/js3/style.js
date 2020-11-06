// собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


// let obj ={
//     dog:{
//         name:'Tyson',
//         age:2,
//     },
//     human:{
//         name:'Alex',
//         age:26
//     },
//     car:{
//         type:'hetchback',
//         name:'Porshe'
//     },
//     book:{name:'One',
//         writer:'TOM'
//         }
// }
//
// //Створити масив та вивести його в консоль:
// // - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів
// let arr=['dog Tyson','dog Alex','dog Petya','dog Misha','dog DJSda',
//     'human Victor','human Vitaliy','human DEN','human ALA','human Jack',
//     'car Porshe','car Skoda','car Dewoo','car lanos','car Sens',
// ]
//
// console.log(arr);


// звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status);
// console.log(users[4].status);//
// console.log(users[users.length-2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(`${users[4].age}  and ${users[4].name}`);
// console.log(users[5].age,users[5].status);



//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// -
// -
//

// let partext = document.getElementById('content');
// console.log(partext);
// let partext = document.getElementById('content');
// console.log(partext);
// let element = document.getElementById('content');
// element.innerText='hello'
// let element = document.getElementById('rules');
// element.innerText='hello'

// let element = document.getElementsByTagName('div');
// for(let i=0;i<10;i++){
//     element[i].style.backgroundColor='#165ba2';
//     element[i].style.marginBottom='20px';
// }
// // for(i=0;i<10;i++)



// отримати весь список класів елемента з id=rules і вивести їх в console.log
// let element = document.getElementById('rules');
// let classss = element.getAttribute('class')
// console.log(classss);


// // отримати всі елементи з класом fc_rules
// let elements=document.getElementsByClassName('fc_rules')
// console.log(elements);
//


// //- поміняти колір тексту у всіх елементів fc_rules на червоний
// let elements=document.getElementsByClassName('fc_rules')
// for(let i of elements ){
//    i.style.backgroundColor='red';
//     i.style.marginBottom='20px';
// }
//






















