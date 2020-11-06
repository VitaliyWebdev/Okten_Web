// // создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
//
// let object1 = {
//     name:'Kiril',
//     age:25,
//     style:true
// }
// let object2 = {
//     car:'porshe',
//     power:25,
//     styling:true
// }
// let object3 = {
//     home:'big home',
//     year:25,
//     city:'Morshyn'
// }
// let object4 = {
//     bike:true,
//     horse:233,
//     Yamaha:true
// }
// let object5 = {
//     wife:'Joana',
//     wight:30,
//     yearsold:80
// }
// // создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт..
// let arr=['hello world',{name:['24','lesya']}];
// let arr1=['kyrilo',{age:[24,'kyril']}    ];
// let arr2=['helladado 23',{name:['aoe','actcii']}];
// let arr3=['Dima',{name:['dimon',3]}];
// let arr4=['ALEX',{name:['al','244']}];
//
// let object6 = {
//   car: ['mersedes',1 ,arr1],
//     name:arr1
// }
// let object7 = {
//     car: ['mersedes',1 ,arr2]
// }
// let object8= {
//     car: ['mersedes',1 ,arr3]
// }
// let object9 = {
//     car: ['mersedes',1 ,arr4]
// }
// let object10 = {
//     car: ['mersedes',1 ,arr]
// }
//
// //При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(keys in object1){
//     console.log(keys);
// }
// //При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let x =Object.keys(object6);
// console.log(x);
// driver= {
//     name:'Alex',
//     age:19,
//     experience:5
// }
//Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let users =[
// {model:'Porsche', age:5 ,power:780,color:'blue'},
// {model:'Mers', age:22 ,power:2141,color:'red',},
// {model:'LAda', age:1 ,power:1414,color:'green',},
// {model:'Giga', age:222 ,power:1,color:'pink',},
// {model:'Porsche', age:5 ,power:780,color:'blue',},
// {model:'dadadad', age:5 ,power:780,color:'blue',},
// {model:'Porsadadache', age:5 ,power:780,color:'blue',},
// {model:'Porsdaaddadadche', age:5 ,power:780,color:'blue',}
// ]
//- проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while(i<10){
//     console.log(cars[i])
//     i++;
// }
//проитерировать каждый массив из задания 5,6,7 при помощи for
// let i = 0;
// for(let i =0;i<cars.length;i++){
//     console.log(cars[i])
//
// }
//проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// let i = 0;
// for(let key of cars){
//     console.log(key)
//
// }
// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//
//взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let x=[];
// for(let keys of cars){
//      x = JSON.stringify(keys);
//     console.log(x);
// }
//
// За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.??
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
//
// for(userskey of users){
//     console.log(userskey);
//     for(i=0;i<20;i++){
//         console.log(users[i]);
//     }
// }

    //- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let newarr=[];
// for(let user of users){
//     console.log(users.name);
//
//
// }
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// let result = [];
// for (const user of users) {
//     result.push(user.address)
// }
// console.log(result);
//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let div = document.createElement('div')
//    div.innerText=`${user.name}   ${user.age}`
//     console.log(div);
// }
//

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let arr=[];
//
//  for (let i=0;i<10;i++) {
//     if (usersWithId[i] === citiesWithId[i]) {
//       let x = usersWithId[i].id ;
//       let y =  citiesWithId[i].user_id;
//        arr.push(y);
//     }
//  }
// /======================================================================================================================================================
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
//     - знайти всі div та змінити ім колір на червоний

let a=document.getElementById('box');
let b=document.getElementsByClassName('classbox');
let c=document.getElementsByTagName('div');
let child=a.innerText='dadadadadadadadadddddddddddddddddddd'
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
a.style.width='20px';
a.style.height='20px';
a.style.backgroundColor='red';
//<table style="border:solid black 1px"><th>dad</th></table>
let tabe=document.createElement('table')
let str1=document.createElement('th')
str1.innerText="Hello";
tabe.appendChild(str1)












