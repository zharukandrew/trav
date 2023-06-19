
/* Найти последнее значение массивов function lam(a){
   return(a[a.length-1])
}
let arr=lam([1,3,6,36,38]);
console.log(arr);*/
/*2 напишите функцию иф элси
let age=prompt(('Введ возраст'));
function checkAge(age) {
   if (age > 18) {
     return true;
   } else {
     return confirm('Родители разрешили?');
   }
 }


console.log(checkAge(age))
2 способ
let age=prompt(('Введ возраст'));
function checkAge(age) {
   return age>18?('true'):confirm ('Родители разрешили?');
}
console.log(checkAge(age))
3 способ
let age=prompt(('Введ возраст'));
function checkAge(age) {
   return (age > 18) || confirm('Родители разрешили?');
 }
 console.log(checkAge(age))
 4 cпособ
 let age=prompt('Введ возраст');
function checkAge(age){
   return(age>18)&&confirm('Родители разрешили?');
}
console.log(checkAge(age))
не оптимальный
5 способ
let age=prompt(('Введ возраст'));
let checkAge=function(age){
   if (age>18){
   return true;
   } else {
     return confirm('Родители разрешили?');
   }
}
console.log(checkAge(age));
6 способ
let age=prompt(('Введ возраст'));
let checkAge=(age)=>{
   if (age>18){
   return true;
   } else {
     return confirm('Родители разрешили?');
   }
}
console.log(checkAge(age));
*/
/*3Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
решение
let a=prompt('Напишите функцию , которая возвращает меньшее из чисел');
let b=prompt('Напишите функцию , которая возвращает меньшее из чисел');
function fun(a,b){
  if(a<b){
   return(a)
  }else{
   return (b)
  }
}
console.log(fun(a,b))
2 cпособ
let a=prompt('Напишите функцию , которая возвращает меньшее из чисел');
let b=prompt('Напишите функцию , которая возвращает меньшее из чисел');
function fun(a,b){
   return(a<b)?(a):(b)
}
console.log(fun(a,b))
*/
/*
let a=prompt('Напишите число');
let b=prompt('Напишите степень');
function pow(a,b){
   return a**b
}
console.log(pow(a,b))
2 способ
экспрессион
let a=prompt('Напишите число');
let b=prompt('Напишите степень');
let pow=function (a,b){
   return a**b
}
console.log(pow(a,b))
3 способ стрелочная функция
let a=prompt('Напишите число');
let b=prompt('Напишите степень');
let pow=(a,b)=>{
   return a**b
}
console.log(pow(a,b))
*/
/*заменить на стрелочную
function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
 }
 
 ask(
   "Вы согласны?",
   function() { alert("Вы согласились."); },
   function() { alert("Вы отменили выполнение."); }
 );
 ответ
 function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
 }
 
 ask(
   "Вы согласны?",
   () =>{ alert("Вы согласились."); },
   () => { alert("Вы отменили выполнение."); }
 );
 */
 /*let age=prompt(('Введ возраст'));
function checkAge(age) {
   if (age > 18) {
     return true;
   } else {
     return confirm('Родители разрешили?');
   }
 }


console.log(checkAge(age))*/
/*МАССИВЫ

*/
/*6 задание:Дан массив: 
[1, 5, 4, 10, 0, 3]
.
Найдите позицию числа 4 в этом массиве.
1 cпособ
let arr = [1, 5, 4, 10, 0, 3]; 
let mar=(arr)=>{
   return arr
}
console.log(mar(arr.indexOf(4)))
2 способ
let arr = [1, 5, 4, 10, 0, 3];
function mar(arr){
   return arr
}
console.log(mar(arr.indexOf(4)))
*/
/*7 задание
let arr = [1, 3, 5, 10, 20];
function str(arr){
   return arr
}
console.log(str(arr.join(' ')))

*/

/*8задание
Дан массив: 
[9, 8, 7, 'a', 6, 5]
.
С помощью метода 
sort
 отсортируйте массив и удалите букву 'a' из данного массива. В результате работы программы вывести массив, состоящий из цифр.
1 cпособ стрелочная
let arr = [9, 8, 7, 'a', 6, 5];
let sum =(arr)=>{
   return arr
}

arr.sort().pop();
console.log(sum(arr))
экспрессион
2 способ
let arr = [9, 8, 7, 'a', 6, 5];
function func(arr){
   return arr
}
arr.sort().pop();
console.log(func(arr))
3 cпособ
let arr = [9, 8, 7, 'a', 6, 5];
let func=function(arr){
   return arr;
}

arr.sort().pop();
console.log(func(arr));

*/
