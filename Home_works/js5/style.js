// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function Info(titleOfTag,action,attrs){
//     this.titleOfTag=titleOfTag;
//     this.action=action;
//     this.attrs=attrs;
// }
// let title='<a>';
// let  action='Каждый элемент <area> определяет активные области изображения, которые являются ссылками.'
// let attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'access', actionOfAttr: 'Доступ блалаалабала'},
//     {titleOfAttr: 'omario', actionOfAttr: 'dadaddadadadad'}
//     ]
// let a = new Info(title,action,attrs);
// console.log(a);
// ================================================================================
//Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
//
// class Info{
//     constructor(titleOfTag,action,attrs) {
//        this.titleOfTag=titleOfTag;
//        this.action=action;
//        this.attrs=attrs;
//     }
// }
// let title='<br>';
// let act='adddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'access', actionOfAttr: 'Доступ блалаалабала'},
//     {titleOfAttr: 'omario', actionOfAttr: 'dadaddadadadad'}
// ]
// let b=new Info(title,act,attributes)
// console.log(b);
// let title2=',div';
// let act2='brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr';
// let attribute3s = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'access', actionOfAttr: 'Доступ блалаалабала'},
//     {titleOfAttr: 'omario', actionOfAttr: 'dadaddadadadad'}
// ]
// let c=new Info(title2,act2,attributes);
// console.log(c);

//
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//     model: 'XXX',
//     producer: 'Tesla',
//     year: 2020,
//     maxspeed: 250,
//     engine: 'electrik',
//     shumaher: 'Lexa',
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
//     },
//     info: function () {
//         console.log(`model ${this.model}  producer ${this.producer}  year ${this.year}  maxspeed ${this.maxspeed}
//         engine ${this.engine}  ${this.shumaher}`)
//     },
//     increase: function (newSpeed) {
//         this.maxspeed += newSpeed;
//
//     },
//     changeYear: function (newValue) {
//         this.year = newValue
//     },
//     addDriver: function (driver) {
//         this.shumaher = driver
//     }
// }
// let vadila = {name: 'Vitya', age: 22};
// car.drive();
// car.info();
// car.increase(20);
// car.drive();
// car.changeYear(1999)
// car.info();
// car.addDriver(vadila)
// car.info();
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
// function Car(model, producer, year, maxspeed, engine, shumaher) {
//     this.model=model|| 'X';
//     this.producer=producer|| 'TESLA';
//     this.maxspeed=maxspeed|| 240;
//     this.engine=engine|| 'electric';
//     this.shumaher=shumaher|| 'Viktor';
//
//     this.drive= function () {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     this.info= function () {
//         console.log(`model ${this.model}  producer ${this.producer}  year ${this.year}  maxspeed ${this.maxspeed}
//         engine ${this.engine}  ${this.shumaher}`)
//     }
//     this.increase= function (newSpeed) {
//         this.maxspeed += newSpeed;
//
//     }
//     this.changeYear= function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver=function (driver) {
//         this.shumaher = driver
//     }
// }
//
//
// let x=new Car();
// console.log(x);
// x.changeYear(22020)

//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car{
// constructor(model, producer, year, maxspeed, engine, shumaher) {
//     this.model=model || 'X';
//     this.producer=producer || 'TESLA';
//     this.maxspeed=maxspeed || 240;
//     this.engine=engine || 'electric';
//     this.shumaher=shumaher || 'Viktor';
// }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//    info () {
//         console.log(`model ${this.model}  producer ${this.producer}  year ${this.year}  maxspeed ${this.maxspeed}
//         engine ${this.engine}  ${this.shumaher}`)
//     }
//     increase (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue
//     }
//     addDriver (driver) {
//         this.shumaher = driver
//     }
//
// }
// let driver={name:'Vitya',age:22}
// let x = new Car();
// x.info();
// x.increase (20);
// x.info()
//
//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================клас принц і метод який буде бігати по масививу попелющок і звіряти розмір ноги

// class Girl{
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }

//
// let a1 = new Girl('Olga', 35, 45)
// let a2 = new Girl('Ira', 22, 35)
// let a3 = new Girl('Marfa', 78, 40)
//
// let arr = [a1, a2, a3];
//
// class Prince {
//     constructor(boot) {
//         this.boot = boot;
//     }
//     method(arr) {
//         for (const arrElement of arr) {
//
//             if (arrElement.size === this.boot) {
//                 console.log(arrElement.name);
//             }
//         }
//     }
// }
//
// let prince = new Prince(35);
// prince.method(arr);
//
//
//
// let prince2=new Prince(40);
// prince2.method(arr);

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Girl(name,age,size){
//     this.name=name;
//     this.age=age;
//     this.size=size;
// }
//
// let a1 = new Girl('Olga', 35, 45)
// let a2 = new Girl('Ira', 22, 35)
// let a3 = new Girl('Marfa', 78, 40)
// let arr = [a1, a2, a3];
//
// function Prince(name,boot){
//     this.name=name;
//     this.boot=boot;
//     this.findPrinces= function(arr){
//     arr.map(value => {
// if(value.size ===this.boot){
//     console.log(`${value.name}`)
// }
//     })
//     }
// }
// let Vasya = new Prince('Vasya',40);
// Vasya.findPrinces(arr)



// =================================================================================================================================================


//Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// //     Створити не менше 7 та не більше 20 машинок.
let car1 = {marka:'Kia', power:200, owner:{name:'Alex',age:30,experience:10}, price:250000, year:2020};
let car2 = {marka:'Dewoo', power:210, owner:{name:'Vitya',age:28,experience:5}, price:13333, year:2005};
let car3 = {marka:'Lada', power:300, owner:{name:'Oleg',age:32,experience:12}, price:2000, year:1999};
let car4 = {marka:'Mercedes', power:450, owner:{name:'Pylyp',age:45,experience:14}, price:1999990, year:2021};
let car5 = {marka:'Lambo', power:800, owner:{name:'David',age:28,experience:4}, price:700000, year:2022};
let car6 = {marka:'Ferrari', power:550, owner:{name:'Vika',age:18,experience:1}, price:300000, year:2019};
let car7 = {marka:'Chevrole', power:200, owner:{name:'Sergiy',age:48,experience:20}, price:7000, year:2008};
const arr = [car1,car2,car3,car4,car5,car6,car7];
//
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
class

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).



// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//

