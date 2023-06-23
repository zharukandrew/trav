/*Базовые задания джава скрипт */

/*1 Написать функцию, которая принимает два числа и возращает результат их умножения
1 способ декларейшон
function fun(a,b){
   return a*b;
}
console.log(fun(20,40))
2 способ экспрешион
let fun=function (a,b){
   return a*b;
}
console.log(fun(20,40))
3 способ стрелочная
let fun= (a,b)=> a*b;

console.log(fun(20,40))
*/
/*2 * Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)
let a=prompt('Привет Иван Петров с возрастом 17 лет');
function map(a){
   if(a>=17){
      return true ;
   }else{
      return false ;
   }
}
console.log(map(a));
2 способ стрелочная функция и тернарный оператор
let a=prompt('Привет Иван Петров с возрастом 17 лет');
map=a=> a >=17 ? true : false

console.log(map(a));
3 экспрешон

let a=prompt('Привет Иван Петров с возрастом 17 лет');
let map= function(a){
   return a >=17 ? true : false
}
console.log(a);
*/
/*3 Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен" 
let a=prompt('Назовите Ваш пол');
let fun= (a)=>a==='M'?"Ваш пол мужской":a==='F'?"Ваш пол женский":"Ваш пол не опеределен";
console.log(fun(a))
*/
/* 4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. 

Решение
let a=prompt('Назовите день недели');
function week(a){
   if(a==1){
      return 'Понедельник';
   }else if(a==2){
      return 'Вторник';
   }else if(a==3){
      return 'Среда';
   }else if(a==4){
      return 'Четверг';
   }else if(a==5){
      return 'Пятница';
   }else if(a==6){
      return 'Суббота'
   }else if(a==7){
      return ('Воскресенье')
   }else{
      return ('Неизвестный день недели')
   }
}
alert(week(a))
2 способ экспрешионс а 3 не эффективный
let a=prompt('Назовите день недели');
 week=function(a){
   if(a==1){
      return 'Понедельник';
   }else if(a==2){
      return 'Вторник';
   }else if(a==3){
      return 'Среда';
   }else if(a==4){
      return 'Четверг';
   }else if(a==5){
      return 'Пятница';
   }else if(a==6){
      return 'Суббота'
   }else if(a==7){
      return ('Воскресенье')
   }else{
      return ('Неизвестный день недели')
   }
}
alert(week(a))
*/
/*5 задание

let map="Методы строк на Tproger";
function func(map){
   return map;
}
console.log(func(map.slice(0,6)))
*/
/*6 задание
Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
let name=prompt('Введите имя')
let now = new Date();

function  fin(name ,now){
   if(8>now<=12){
      return(`Доброе утро ${name}`)
   }else if(12>now<=18){
      return(`Добрый день ${name}`)
   }else if(19>now<=21){
      return(`Добрый вечер ${name}`)
   }else{
      return(`Добрый ночи ${name}`)
   }
}
console.log(fin(name ,now))
 */
/*7 задание
Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый).
 Например. 33 - зрелый
 let age=prompt('Введите возраст');
fun = function (age){
   if(age<=17){
      return(`${age} ребенок`)
   }else if(age<=30){
      return(`${age} молодой`)
   }else if(age<=55){
      return(`${age} зрелый`)
   }else {
      return(`${age} старый`)
   }
}
alert(fun(age))
2 способ

let age=prompt('Введите возраст');
fun =(age)=>(age<=17)?(`${age} ребенок`):(age<=30)?(`${age} молодой`):(age<=55)?(`${age} зрелый`):(`${age} старый`);
alert(fun(age))
 */
/*8 задание
let name=prompt('Введите имя');
let age=prompt('Введите возраст');
function fun(name ,age){
   if(age<=17){
      return(`${name} имеет возраст ${age},он ребенок`)
   }else if(age<=30){
      return(`${name} имеет возраст ${age},он молодой`)
   }else if(age<=55){
      return(`${name} имеет возраст ${age},он зрелый`)
   }else {
      return(`${name} имеет возраст ${age},он старый`)
   }
}
alert(fun(name ,age))

*/
/*Massiv */
/* 1 Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.

let arr = [1, 2, 3, 4, 5];

arr.forEach(function(elem) {
	console.log(elem%2==0&&elem%2!==0);
});

*/

/*2Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если хотя бы один элемент нечетный, если все четные, то false. 
let arr = [2, 2, 2, 4, 2];

arr.forEach(function(elem) {
	console.log(elem%2!==0&&elem%2==0);
});
*/


/*3*Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])
1 способ
let arr = [1,2,5,12,15,21]; 
let flt = arr.filter( function( el ){ return (el % 5)==0 } )
alert( flt ); // 5, 15
2 способ
let arr = [1,2,5,12,15,21];
let flt = arr.filter( ( el )=>{ return (el % 5)==0 } )
alert( flt );
3 способ
let arr = [1,2,5,12,15,21];
let flt = arr.filter( ( el )=> (el % 5)==0 )
alert( flt );
4 способ
let arr = [1,2,5,12,15,21]; 
let res = arr.filter(elem => elem %5==0);

console.log(res);
5 способ

let arr = [1,2,5,12,15,21]; 
console.log(arr.filter(elem => elem %5==0));
*/
