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
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
//document.getElementById('main_header').style.color='red'
// -- робить шириниу елементу ul 400 пікселів
// let b=document.getElementsByTagName('div');
// for (let i = 0; i < b.length; i++) {
//    b[i].style.width='400px';
// }

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let a=document.getElementsByClassName('linkList');
// console.log(a);
// for (const item of a) {
//     item.style.width='50%';
//     item.style.color='black';
// }
// -- отримує текст який зберігається в елементі з класом listElement2
// let a = document.getElementsByClassName('listElement2');
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);;
//
// }
// -- отримує всі елементи li та змінює ім колір фону на сірий

// let a=document.getElementsByTagName('li');
// for (let i = 0; i < a.length; i++) {
//     a[i].style.backgroundColor='grey';
//     a[i].style.marginBottom='10px';
//
// }
// -- отримує всі елементи 'a' та додає їм клас anchor
// let a=document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//     a[i].classList.add('anchor')
//
// }
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let a=document.getElementsByTagName('a')
// console.log(a);
// for (const item of a) {
//     if (item.innerText === 'link2') {
//         item.style.fontSize='40px';
//     };
// }



// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a   ?
//
// let a=document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//   a[i].textContent='adad';
//
// a[i].classList.add('element_')
// }
// console.log(a);

// const a = document.getElementsByTagName('a');
// for (const i of a) {
//     let XXX = i.innerText;
//     console.log(XXX);
//     let className = `element_${XXX}`;
//     i.classList.add(className);
// }










//-- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текс
// const a = document.getElementsByTagName('a');
// for (const i of a) {
// let X = i.innerText;
//     console.log(X);
//     i.classList.add(`Element_${X}`)
// }







// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let sub = document.getElementsByClassName('sub-header');
// console.log(sub);
// let b = prompt('write your color');
// for (const item of sub) {
//     item.style.backgroundColor=b;
// }


// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let sub = document.getElementsByClassName('sub-header');
//
// let b = prompt('write your color');
// for (const item of sub) {
//     if(item.textContent === 'content 2 segment') item.style.backgroundColor=b;
//
// }




// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let sub = document.getElementsByClassName('content_1');
//
// for (const item of sub) {
//     item.textContent=prompt('adad','adaaaaaaaaaaaaaaaaaaa');
// }





// -- отримати елементи p та змінити їм paddin на довільне значення

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let element=document.getElementsByClassName('text2');
//
// for (const item of element) {
//     item.textContent='AAAAAAAAAAAAAAAAAAAAAAAAA'
// }





















