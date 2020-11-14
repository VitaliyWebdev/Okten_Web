//

// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div=document.querySelector('#text');
// div.onclick=()=>{
// div.style.display='none'
// }

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button=document.querySelector('.disapear_btn');
// button.onclick=()=>{
// button.style.display='none'
// }
//


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// //
//
// let input_button =document.getElementById('input_button');
// input_button.onclick = (ev)=> {
//     let input_inf = document.getElementById('write_info').value;
//     if( input_inf > 18){
//         alert('You are adult')
//     }
//     else {alert('You are child')}
// }


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let click = document.querySelector('h3');
// click.onclick = ()=>{
//     let list = document.querySelector('.list')
//         if(list.style.display === 'block'){
//             list.style.display='none';
//         }
//         else{
//             list.style.display='block';
//         }
// }
//



//
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolor sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.
// //
// let comments =[{title : 'Hello', body:'Hello what do you do'},{title : 'lorem', body:'lorem ipsum dolor sit ameti'},{title : 'Привіт', body:'Як справи?'}];
//
// comments.forEach(value => {
//     let div = document.createElement('div');
//     let h2 = document.createElement('p');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     btn.innerText='CLICK ME AND i WILL DISAPEAR'
//     h2.innerText=value.title;
//     p.innerText=value.body;
//     p.style.display='block';
// div.appendChild(h2);
// div.appendChild(p);
// div.appendChild(btn);
// document.body.appendChild(div)
//     btn.onclick=()=>{
// if(p.style.display==='block'){ p.style.display ='none'}
// else{p.style.display ='block' }
//     }
// });










// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// // let first_form = document.getElementById('firs_form');
// // let second_form = document.getElementById('second_form');
// let input1 = document.forms.form1.input1;
// let input2 = document.forms.form1.input2;
// let input3 = document.forms.form2.input3;
// let input4 = document.forms.form2.input4;
//
// let btn=document.getElementById('click');
// btn.onclick=()=>{
//   console.log(input1.value);
//    console.log(input2.value);
//    console.log(input3.value);
//    console.log(input4.value);}







// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// let div=document.createElement('div');
// document.body.appendChild(div)
//
// function generator( str,elements,element ){
//     table=document.createElement('table');
//     for (let i = 0; i <= str; i++) {
//         let stroka = document.createElement('tr');
//         table.appendChild(stroka);
//         for (let j = 0; j <= elements; j++) {
//             let tdeshka = document.createElement('td');
//           stroka.appendChild(tdeshka);
//           tdeshka.innerText='dsfsdfsd'
//         }
//     }
//    element.appendChild(table);
// }
//
// generator(2,2,div);




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//

// function createTable(){
//     let inp1 = document.getElementById('inp1').value;//tr
//     let inp2 = document.getElementById('inp2').value;//td
//     let inp3 = document.getElementById('inp3').value;//text
//     let tab = document.createElement('table');
//     let div=document.getElementById('divka');
//    div.appendChild(tab);
//     for (let i = 0; i < inp1; i++) {
//         let tr = document.createElement('tr');
//         tab.appendChild(tr)
//         for (let j = 0; j <inp2; j++) {
//             let td = document.createElement('td');
//             tr.appendChild(td)
// td.innerText=inp3;
//         }
//     }
// }
//
//
// const form = document.getElementById('form')
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//
//
// });



















// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let badwords=['XXX','Kyrva','Balabol'];
// let input = document.getElementById('inp');
// let btn = document.getElementById('Check');
// btn.onclick=()=>{
//     for (let i = 0; i < badwords.length; i++) {
//           if( input.value === badwords[i] ){
//             alert('Its a bad word')
//         }
//           else{
//               alert('Its OK!')
//               return;
//           }
//     }
//
// }


//
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// //
//
// let badwords=['XXX','Kyrva','Balabol'];
//
// let input = document.getElementById('inp1');
// let btn = document.getElementById('check_button');
// btn.onclick=()=>{
//     for (let i = 0; i < badwords.length; i++) {
//           if( input.value.includes(badwords[i]) ){
//             alert('Its a bad word')
//               return;
//         }
//
//     }
// }









// // -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// //     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте??? -
// let arrh2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
// for (let i = 0; i < arrh2.length; i++) {
//     let li = document.createElement('li');
//     let a =document.createElement('a');
//     let yakir = 'yakir'+i;
//     a.href ='#'+yakir;
//     arrh2[i].setAttribute('id',yakir);
//     a.innerHTML = arrh2[i].innerText;
//     li.appendChild(a)
//     ul.appendChild(li)
// }
// content.appendChild(ul)
//

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ









// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
