//
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
//
// arr1=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// arr.sort((a,b)=>{
//         return a-b;
//     }
// )
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr2=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// arr.sort((a,b)=>{
//         return b-a;
//     }
// )
// console.log(arr);

// -- при помощи filter получить числа кратные 3
// arr3=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// const result = arr3.filter(value => value%3===0);
// console.log(result);


// -- при помощи filter получить числа кратные 10
// arr4=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// result = arr4.filter(value => value%10===0);
// console.log(result);


// //-- перебрать (проитерировать) массив при помощи foreach()
// let arr=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// arr.forEach(value => {
//     value.log
// })
// console.log(arr);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// arr=[1,2,3,5,4,6,7,8,10,9,11,12,13,14,15,16,17,18,19,20];
// let new_arr = arr.map(value => {
//     return value*3;
// })
// console.log(new_arr);



//
// - создать массив со словами на 15-20 элементов.
// let words_array=['B','C','D','E','G','A','A','C','V','J','J','K','B','V','C','X','Z','S','D','F','G','H','L','P','O','I','U','Y','X']
// // -- отсортировать его по алфавиту в восходящем порядке.
// words_array.sort();
// console.log(words_array);



// -- отсортировать его по алфавиту  в нисходящем порядке.
// words_array.sort((a,b)=>{
//     return -1;
// });
// console.log(words_array);



// -- отфильтровать слова длиной менее 4х символов
// const arr=['Vika','Angelika','Brad','HAOOOOOOOOO','bro'];
// let result =arr.filter(value => value.length<=4);
// console.log(result);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const arr=['Vika','Angelika','Brad','HAOOOOOOOOO','bro'];
// const  result = arr.map(value => {
//     return `${value} !`
// });
// console.log(result);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [ {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a,b)=>{             //1)за зростанням
//     return a.age-b.age;
// });
// console.log(users);
// 2) За спаданням
// users.sort((a,b)=>{
//     return b.age-a.age;
// });
// console.log(users);
//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// //1)За зростанням
// users.sort((a,b)=> {
//     return a.name.length - b.name.length;
//     }
// )
// console.log(users);
// //2) За спаданням
// users.sort((a,b)=>{
//     return b.name.length-a.name.length;
// })
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке
// характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
// users.map((value,index)=>{
//     return value['id']=index;
//     }
// );
// console.log(users);
// // - відсортувати його за індентифікатором
// //Відсортував за ід в порядку спадання
// users.sort((a,b)=>{
// return b['id']-a['id'];
//     }
// )

// -- написать функцию калькулятора с 2мя числами и колбеком

// -- написать функцию калькулятора с 3мя числами и колбеком
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej",volume: 2,power: 320}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ej",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 4,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "ej",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 8,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// let sort_by_volume=cars.filter(value => { return value.volume>3});
// console.log(sort_by_volume);
// // - двигун = 2л
// let sort_by_volume2=cars.filter(value => value.volume===2);
// console.log(sort_by_volume2);
// // - виробник мерс
// const sort_by_name=cars.filter(value => value.producer==='mercedes' );
// console.log(sort_by_name);
// - двигун більше 3х літрів + виробник мерседес
// const sort_by_value3 = cars.filter(value => { return value.volume>3 && value.producer==='mercedes'});
// console.log(sort_by_value3);
//==============================?
// const sort_by_value3 = cars.filter(value => { return value.volume>3;
// return value.producer==='mercedes'});
//  console.log(sort_by_value3);
// // - двигун більше 3х літрів + виробник субару
// const more3_subaru=cars.filter( value => { return value.volume > 3 && value.producer==='subaru'} );
// console.log(more3_subaru);
// // // - сили більше ніж 300
// const findpower= cars.filter(value => value.power>300);
// console.log(findpower);
// - сили більше ніж 300 + виробник субару
// const findpower_subaru = cars.filter(value =>{return value.power>300 && value.producer==='subaru'});
// console.log(findpower_subaru);
// - мотор серіі ej
// const find_engine = cars.filter(value => {return value.engine.includes('ej')});
// console.log(find_engine);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const findpowerandsubaru = cars.filter(value => {
//     return value.power>300 && value.producer==="subaru" && value.engine==='ej';
// })
// console.log(findpowerandsubaru);
// // - двигун меньше 3х літрів + виробник мерседес
// const find_small_engine = cars.filter(value => {   return value.volume<3 && value.producer==='mercedes'      });
// console.log(find_small_engine);
// - двигун більше 2л + сили більше 250
// const f=cars.filter(value=>{return value.volume>3 && value.power>250});
// console.log(f);
// // - сили більше 250  + виробник бмв
// const a = cars.filter(value =>{
//     return value.power > 250 && value.producer==='bmw'
// } );
// console.log(a);


// - взять слдующий массив
let usersWithAddress = [{id: 2, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Ahevchenko', number: 16}}, {id: 1, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'aolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Zhevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Ahevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Zhevchenko', number: 121}}];

// -- отсортировать его по id пользователей
// usersWithAddress.sort((a,b)=>{
//     return a['id']-b['id'];
// })
// console.log(usersWithAddress);

// // -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a,b)=>{
//     return b.id-a.id;
// });
// console.log(usersWithAddress);


// // -- отсортировать его по возрасту пользователей
//
// usersWithAddress.sort((a,b)=>{
//     return a.age-b.age;
// });
// console.log(usersWithAddress);


// // -- отсортировать его по возрасту пользователей в обратном порядке
//
// usersWithAddress.sort((a,b)=>{
//     return b.age-a.age;
// })
// console.log(usersWithAddress);


// // -- отсортировать его по имени пользователей
// let xxx = usersWithAddress.sort((a,b)=>{
//     if (a.name > b.name) {
//         return 1
//     }
//     return  -1;
// })
// console.log(xxx);
// -- отсортировать его по имени пользователей в обратном порядке
// let xxx = usersWithAddress.sort((a,b)=>{
//     if (a.name < b.name) {
//         return 1
//     }
//     return  -1;
// })
// console.log(xxx);
// //-- отсортировать его по названию улицы  в алфавитном порядке
// let x = usersWithAddress.sort((a,b)=>{
//     if(a.address.street > b.address.street){
//         return 1;
//     }
//     return -1;
// });
// console.log(x);

// // -- отсортировать его по номеру дома по возрастанию
// const sort = usersWithAddress.sort((a,b)=>{
//     return  a.address.number - b.address.number;
// })
// console.log(sort);


// -- отфильтровать (оставить) тех кто младше 30
// const filt = usersWithAddress.filter(value => {
//     return value.age < 30;
// });
// console.log(filt);



// // -- отфильтровать (оставить) тех у кого отрицательный статус
// const filt = usersWithAddress.filter(value => {
//     return value.status === false;
// })
// console.log(filt);


// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// const filt = usersWithAddress.filter(value => {
//     return value.status === false && value.age < 30;
// });
// console.log(filt);
//

// // -- отфильтровать (оставить) тех у кого номер дома четный
//
// let filt = usersWithAddress.filter(value => {
//     return value.address.number % 2 === 0;
// })
// console.log(filt);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
// let car1 = {marka:'Kia', power:200, owner:{name:'Alex',age:30,experience:10}, price:250000, year:2020};
// let car2 = {marka:'Dewoo', power:210, owner:{name:'Vitya',age:28,experience:5}, price:13333, year:2005};
// let car3 = {marka:'Lada', power:300, owner:{name:'Oleg',age:32,experience:12}, price:2000, year:1999};
// let car4 = {marka:'Mercedes', power:450, owner:{name:'Pylyp',age:45,experience:14}, price:1999990, year:2021};
// let car5 = {marka:'Lambo', power:800, owner:{name:'David',age:28,experience:4}, price:700000, year:2022};
// let car6 = {marka:'Ferrari', power:550, owner:{name:'Vika',age:18,experience:1}, price:300000, year:2019};
// let car7 = {marka:'Chevrole', power:200, owner:{name:'Sergiy',age:48,experience:20}, price:7000, year:2008};
// let car8 = {marka:'Mitsubisi', power:131, owner:{name:'Anton',age:20,experience:1}, price:10000, year:2010};
// const arr = [car1,car2,car3,car4,car5,car6,car7,car8];

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let new_owners = ['Abdul','Yuliana','Orusya','Vasylyna','Angelika','Marusyna'];// нові овнери
// function enginefix(array,owners){
// let filt = array.filter((value,index)=>{
//     if(index < array.length/2){return true;}
// });
// let powerx = filt.map((value, index) => {
//     for (let i = 0; i <= index; i++) {
//         value.owner.name = owners[i]
//     }
//     value.power+=value.power*0.1;
//     return value;
// });console.log(powerx.length)
//     for (let i = powerx.length; i < array.length; i++) {
//         powerx.push(array[i]);
//     }
//
//     //     Далі необхідно брати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// let powerxxx = powerx.map((value,index)=>{
//         if  ( index % 2 !== 0 ){
//             value.power+=value.power*0.1;
//             value.price+=value.price*0.5;
//         }
//         return value ;
// });
//
//     console.log(powerxxx);// Зробив половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//     //+ поміняв овнерів
//
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     let upgrade = powerxxx.map((value, index) => {
//         if( value.owner.experience<5 && value.owner.age>25 ){
//             value.owner.experience+=1;
//         }
//         return value;
//     })
//     console.log(upgrade);
//
// }
//
// enginefix(arr,new_owners);
//












//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// // Пример:
//    let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
//  Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
//  function sorted(array,num){
//     let min_index =  array.indexOf(num)
//     let max_index = array.lastIndexOf(num)
//      console.log(min_index,max_index)
//
//  }
// sorted(arr,4);












