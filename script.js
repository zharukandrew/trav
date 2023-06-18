
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
let arr=function pow(a,b){
   return a**b
}
console.log(arr)
3 способ стрелочная функция
let a=prompt('Напишите число');
let b=prompt('Напишите степень');
let pow=(a,b)=>{
   return a**b
}
console.log(pow(a,b))
*/
