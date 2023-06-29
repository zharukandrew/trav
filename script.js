/* 1Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

let user = {
    name:"John",
    surname:"Smith",
};
user.name="Pete";
delete user.name;
alert(user.name);
*/
/*У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. 
1 способ
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  alert(salaries. John+ salaries. Ann+salaries. Pete )
  2 способ
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum=0;
  for(key in salaries){
    sum+=salaries[key];
     
  }
  alert(sum);
  3 способ
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum=0;
 function fun(salaries){
    for(key in salaries){
        sum+=salaries[key];
         
      }
      return(sum);
 }
 alert(fun(salaries))
*/
