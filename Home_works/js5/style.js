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

class Girl{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}


let a1 = new Girl('Olga', 35, 45)
let a2 = new Girl('Ira', 22, 35)
let a3 = new Girl('Marfa', 78, 40)

let arr = [a1, a2, a3];

class Prince {
    constructor(boot) {
        this.boot = boot;
    }
    method(arr) {
        for (const arrElement of arr) {

            if (arrElement.size === this.boot) {
                console.log(arrElement.name);
            }
        }
    }
}

let prince = new Prince(35);
prince.method(arr);



let prince2=new Prince(40);
prince2.method(arr);

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

class Girl{
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}


let a1 = new Girl('Olga', 35, 45)
let a2 = new Girl('Ira', 22, 35)
let a3 = new Girl('Marfa', 78, 40)
let a4 = new Girl('Marfa', 78, 40)
let a5 = new Girl('Marfa', 78, 40)
let a6 = new Girl('Marfa', 78, 40)
let a7 = new Girl('Marfa', 78, 40)
let a8 = new Girl('Marfa', 78, 40)
let a9 = new Girl('Marfa', 78, 40)
let a10 = new Girl('Marfa', 78, 40)

let arr = [a1, a2, a3];








