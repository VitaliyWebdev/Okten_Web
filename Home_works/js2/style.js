//створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let arr1 = [1,2,3,4,5];
// let arr2 = ['str','stadad','afafa','afaff','afaf'];
// let arr3 = ['1',2,'daad',true,false];
// console.log(arr3[0);

//2 ) За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for(let i=0;i<10;i++){
//     document.write('<div>adada</div>')
// }
//   3)))- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// let arr = [1,2,3,4,5];
// for(let i=0;i<5;i++){
//     document.write(arr[i]);
// }
// 4) - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.\

// let i = 0 ;
// while(i<20){
//     document.write( '<h1>text</h1>' )
//     i++;
// }

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,'e',2,334,515,1515,1616,20,16161,61616,16616,1666,1616,16,16,166,36,75,64,3636,7474,484,8484,848];
// let i =0;
// while(i<20){
//     console.log(arr[i]);
//     i++;
// }

//Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr =[1,2,3,4,5,6,7,8,9,10];
// for(let i = 0;i<10;i++){
//     console.log(arr[i]);
// }
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr =['a','b','c','g','e','a','b','c','g','e'];
// for (let i = 0;i<10;i=i+1){
//     console.log(arr[i]);
// }
//Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let obj = {
//     name:'Vitaliy',
//     age: '21'
// }
//
//
// let arr = [1,'a',2,4, obj,true,false,55,1000,'hello'];
//
// for (let i = 0;i<10;i++){
//     console.log(arr[i]);
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 2, 3, 4, 'a', 'b', 'c', true, false, 'a'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
// // }
//
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


//
// let arr = [1, 2, 3, 4, 'a', 'b', 'c', true, false, 'a'];
// for(let i = 0; i<arr.length;i++){
//     if(typeof arr[i] ==='number'){
//         console.log(arr[i]);
//     }
// }


// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 2, 3, 4, 'a', 'b', 'c', true, false, 'a'];
// for(let i=0;i<10;i++){
//     if(typeof arr[i] === 'string'){
//         console.log(arr[i]);
//     }
// }
















// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//  arr =[];
//  let element1 = arr[0];
// element1 = 1;
//  arr.push(element1);
// let element2 = arr[1];
//  element2 = 'string';
// arr.push(element2);
//  let element3=arr[2];
//  element3= true;
//  arr.push(element3);
// let element4=arr[3];
//  element4=8; arr.push(element4);
// let element5=arr[4];
//  element5='hello';
//  arr.push(element5);
//  let element6=arr[5];element6=33;
//  arr.push(element6);
//  let element7=arr[6];
//  element7=14141;
//  arr.push(element7);
//  console.log(arr);
//
//
//  for(i=0;i<arr.length;i++){
//      console.log(arr[i])
//  }






//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(i=0;i<=10;i++){
//     console.log(i);
//     document.write(i);
// }
//
//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for(let i = 0;i<=100;i++){
//     console.log(i);
//     document.write(i);
// }


// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for(let i = 0 ;i<=100;i=i+2){
//     console.log(i);
//     document.write(i);
// }


//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0;i<=100;i++){
//
//     if(i%2!==0){
//         console.log(i);
//         document.write(i);
//     }
// }

 //Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди

// for (let i=1;i<60;i++){
//     console.log(`${i} sec`);
//     if(i>=59){
//         for(let i = 0;i<60;i++){
//             console.log(`1 min ${i} sec`)
//         }
//     }
// }


//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

//
//     let i = 0
//     let m = 0
//     let h = 0
//     for (i=1;i<60;i++){
//     console.log(`${i} sec`);
//     if(i>=58){
//         for(let i = 0;i<59;i++){
//             m++
//             console.log(`${m} min ${i} sec`)
//         }
//     }
//     if (m >= 58) {
//         h++
//         console.log(`${h} hours, ${m} min, ${i} sec`)
//     }
// }
//








// for(let i=1;i<60;i++){
//     console.log(`${i} sec`)
//     if(i==59){
//         for(let min = 1;min<=1.60;min=min+0.1){
//             console.log(`${min} `);
//         }
//     }
//     }

// for(let i = 1;i<60;i++){
//     console.log(`${i} sec `);
// if(i>=59){
//     for(let min=1;min<60;min=min+i){
//         console.log(`${min} min ${i}`);
//
//     }
// }
//
// }
//
















//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

//
// let arr = [ 'a', 'b', 'c'];
// let str = '';
//
// for(let i=0;i<arr.length;i++){
//     str += arr[i];
// }
// console.log(str);

// let arr = [ 'a', 'b', 'c'];
// console.log(arr.join(''));
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let arr = [ 'a', 'b', 'c'];
// let str ='';
// let i = 0;
// while(i<3){
//     str=str+arr[i];
//     console.log(str);
//     i++;
// }





// let arr = [ 'a', 'b', 'c'];
// arr[0]='a';
// arr[1]='b';
// arr[2]='c';
//
// for(let i=0;i<1;i++){
//     let word = arr[i]+arr[i+1]+arr[i+2]
//     console.log(word);
// }




//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.


// let arr = ['a', 'b', 'c'];
// for(i=1;i<4;i++){
//     arr.push(i);
//     console.log(arr);
// }



//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1,2,3];
// console.log(arr);
// arr =[3,2,1];
// console.log(arr);
//
//


//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1,2,3];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);


// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let arr = [1,2,3];
// arr.unshift(6);
// arr.unshift(5);
// arr.unshift(4);
// console.log(arr);

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr = ['js', 'css', 'jq'];
// let word = arr.shift();
// console.log(word);


//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr = ['js', 'css', 'jq'];
// let word = arr.pop();
// console.log(word);



//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// let arr =[1,2,3,4,5,6,7,8,9,10];
// for ( i=0;i<10;i++){
//     if(arr[i] % 2 === 0 ){
//         console.log(arr[i]);
//     }
// }


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr1 =[1,2,3,4,5,6,7,8,9,10];
// console.log(arr1);
// let arr2 =[];
// for(let i=0;i<10;i++){
//     arr2.push(arr1[i]);
//     console.log(arr2);
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

//let arr1 =[1,2,3,4,5,6,7,8,9,10];
//let arr2 =[];
//for(let i=0;i<10;i++){
//   arr2[i]=arr1[i];
// console.log(arr2);
//}

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//


// 1)
// let arr =[2,17,13,6,22,31,45,66,100,-18]
// let i=0;
// while(i<10){
//    console.log(arr[i]);
//     i++;
// }
// 2)
// let arr =[2,17,13,6,22,31,45,66,100,-18]
// for(let i = 0;i<10;i++){
// console.log(arr[i]);
// }




//3. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr =[2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i<arr.length;i++){
//     if(i%2 !==0){
//         console.log(arr[i], i);
//     }
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<10) {
//    if(i%2 !== 0){
//        console.log(arr[i],i);
//    }
//    i++;
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення


// let arr =[2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i<10){
//     if(i%2===0){
//         console.log(arr[i],i);
//     }
//     i++;
// }


// //перебрати циклом for та вивести  числа тільки парні  значення
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0;i<arr.length;i++) {
//     if(i%2==0){
//         console.log(arr[i],i);
//     }
//
// }
//

//7. замінити кожне число кратне 3 на слово "okten"

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]%3===0){
//         arr[i]='okten'
//     }
//     console.log(arr);
// }

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]
//
// let arr = [1, 2, 3, 4, 5];
// let arr2=arr.slice(3,5)
// console.log(arr2);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//
// let arr = [1,2,3,4,5];
// let arr2=arr.slice(0,2);
// console.log(arr2);

//Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].



// .. вивести масив в зворотньому порядку.

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for (let i = 10;i>=0;i--){
//     console.log(arr[i])
// }

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// замінити кожне число кратне 3 на слово "okten"

// let arr =[2,17,13,6,22,31,45,66,100,-18];
// for(let i = arr.length;i>=0;i--){
//     if(arr[i]%3===0){
//         arr[i]='okten'
//     }
//     console.log(arr);
// }

// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу

// let arr = [];
// for( let i = 0;i<=100;i=i+2){
//    arr.push(i);
//
// }
// console.log(arr);


// let arr = [];
// for ( let i = 0;i<=100;i=i+3){
//     arr.push(i);
// }
//
// console.log(arr);


//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)




// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let str ='';
// for (const i of arr) {s
//     str=+arr[i];
//     console.log(str);
// }

// let str = '';
// for(i=0;i<arr.length;i++){
//     str=str+arr[i];
//
// }
// console.log(str);
//
//--------------------------------------------------------
//
// let user={
//     name: 'Dima',
//     age: 23,
//     car: false,
//     son:{
//         name:'Ivan',
//         age: 1
//     }
// }
//
// let string = Object.keys(user)
// let value = Object.values(user)
// Object.entries!!
// console.log(string);
// console.log(value);

// let user={
//     name: 'Dima',
//     age: 23,
//     car: false,
//     son:{
//         name:'Ivan',
//         age: 1
//     }
// }
//
// let x=JSON.stringify(user)
// let y =JSON.parse(x);
// console.log(x);
// console.log(y);


// let arr = ['a','b','c'];
// let string ='';
// for(  let x of arr){
//     string=string+x;
// }
// console.log(string);

//
//
// let arr = ['a','b','c'];
// let string ='';
// for(  let x in arr){
//     string=string+arr[x];
// }
// console.log(string);
// const user = {
//     name:'Alex',
//     age:25
// }
//
//
//
// let htmlDivElement = document.createElement('div');
// htmlDivElement.innerText=`${user.name} - ${user.age}`
// document.body.appendChild(htmlDivElement);
//
//

//
// const user={
//     name:'Alex',
//     age:100
// }
//
//
// let xxx={};
// for(const key in user){
//     console.log(key, user[key]);
//     xxx[key]=user[key]
// }
// console.log(xxx);
// xxx.name = 'Oleg'
// console.log(user);
// console.log(xxx);









