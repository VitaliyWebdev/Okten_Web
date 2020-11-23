// function prom1(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//
//             resolve(1999)
//         },2000)
//     })
//
// }
// function prom2(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//
//             resolve('XXXXXX')
//         },2000)
//     })
//
// }

// let promises = Promise.allSettled([prom1(),prom2()]);
//
// promises.then(value => {
//     value.forEach(({status,value,reason})=>{
// if (status === "fulfilled"){
//     console.log(value);
// }
// else{
//     console.log(reason);
// }
//     })
// })


// let promrace = Promise.race([prom2(),prom1()]);
//
// promrace.then(value => {
//     console.log(value)
// })


// //Async Await ==============
//
// function getUp(num){
//     return new Promise((resolve, reject) => {
//         console.log('Потрібно вставати')
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Нєє буду спати');
//             }
//             else{
//                 resolve('Прокидаюсь=)')
//             }
//         },1000)
//     })
// }
// function washing(num){
//     return new Promise((resolve, reject) => {
//         console.log('Треба йти в душ')
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Гаряча вода закінчилась');
//             }
//             else{
//                 resolve('В душику каєф=)')
//             }
//         },1000)
//     })
// }
//
//
//
// function watching(num){
//     return new Promise((resolve, reject) => {
//         console.log('Збираюся втикати лекцію');
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Інет закінчився')
//             }
//             else {
//                 resolve('Ура вчуся....')
//             }
//         },1000)
//     })
// }
//
// function walking(num){
//     return new Promise((resolve, reject) => {
//         console.log('Йду прогулсяюсь');
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Погода погана, сидітиму вдома')
//             }
//             else {
//                 resolve('Гуляю....')
//             }
//         },1000)
//     })
// }
// function studying(num){
//     return new Promise((resolve, reject) => {
//         console.log('Йду повчусь');
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Нєє не маю бажання')
//             }
//             else {
//                 resolve('Сиджу ....Вчусь')
//             }
//         },1000)
//     })
// }
//
// function sport(num){
//     return new Promise((resolve, reject) => {
//         console.log('Йду займатись спортом');
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Нєє я лінива жопа, йду краще повчусь)')
//             }
//             else {
//                 resolve(' уххСпорт ета зизнь...')
//             }
//         },1000)
//     })
// }
//
// function sleep(num){
//     return new Promise((resolve, reject) => {
//         console.log('Йду спати');
//         setTimeout(()=>{
//             if(num<0.5){
//                 reject('Яке спати....треба домашку зробити')
//             }
//             else {
//                 resolve(' Сплю...ZzzZZZZzzzZZZZzzZZZZZ')
//             }
//         },1000)
//     })
// }
//
// async function myDay(){
//     try{
//         const step1 = await getUp(Math.random());
//         console.log(step1);
//         const step2 = await washing(Math.random())
//         console.log(step2);
//         const step3 = await watching(Math.random());
//         console.log(step3);
//         const step4 = await walking(Math.random());
//         console.log(step4);
//         const step5 = await studying(Math.random());
//         console.log(step5);
//         const step6 = await sport(Math.random());
//         console.log(step6);
//         const step7 = await sport(Math.random());
//         console.log(step7);
//     }catch (eror){
//         console.log('**********')
//         console.log('Щось пішло не так')
//         console.log(eror)
//         console.log('**********')
//     }
//
// }
//
// myDay()


// Реалізувати друкарську машинку.
//     У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)


// let words = 'Hello World';
// let arr = words.split('');
// console.log(arr);
//
// function writeMachine(obj) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === 'l') {
//                     document.write(arr[i])
//
//
//                 }
//             }
//         }, 3000)
//
//     })
// }
//
// writeMachine(arr)
//
//

// let user ={
//     name:'KArina',
//     position: 'jun',
//     payment:10000,
//     age:15
// }
//
//
//
// let dimas={
//     name:'Dimas',
//     wife:'false',
//     payment: 2000,
//     car:true
// }
//
// function changePayment(newPayment,newPosition){
//     this.payment += newPayment;
//     this.position = newPosition;
//     console.log(this)
// }
//
// changePayment.apply(dimas,[1999,'LOl']);
// changePayment.apply(dimas,[1999,'LOl']);
//changePayment.call(user,9999,'Team Lead')

//
// let change = changePayment.bind(dimas);
// change();
// change();
// change();
// change();




//
// function user(){
//     let _login = 'admin'
//     let _password = '12345'
//
//
//      function loginUser(login,pasword){
//         if(login === _login && pasword=== _pasword){
//             console.log('Welcome')
//         }
//         else{
//             console.log('Wrong email or pasword!')
//         }
//
//     }
// function passwordNew(newPassword){
//         _password = newPassword;
// }
//     return {
//         loginUser,
//         passwordNew
//     }
//
// }
//
//
// let dima = user();
// dima.loginUser('admin','12345')
//
// dima.passwordNew(444444)









//counter na zamykannia

// function counter(){
//     let z = 0;
//     function plusOne(){
//         z++;
//         console.log(z);
//     }
//     return plusOne;
//
//
// }
// let f = counter();
// f()
// f()
// f()
// f()



Array.prototype.customFilter = function (callback){
    let result = [];
    for (const item of this) {
        if (callback(unit)){
            result.push(item)
        }
    }
}


