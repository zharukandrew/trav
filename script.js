

//дз 55639217 --> 5:563:921:7
// 'КаЖдЫй ОхОтНиК' --> [кАжДыЙ оХоТнИк]
// ([1,2,3,4,5,6,7,8,9], 3) --> [1,2,3]
// ([1,1,1], [2,2,2]) --> 9
/*2 задание 
const str ='КаЖдЫй ОхОтНиК';

function changeRegister (str) {
let result = ''
for(let i = 0; i < str.length; i++) {
if(str[i] === str[i].toUpperCase()) {
result += str[i].toLowerCase();
} else {
result += str[i].toUpperCase();
}
}
return result.split();
}

console.log(changeRegister(str)); // [кАжДыЙ оХоТнИк]
*/

/*3 задание
let arr =[1,2,3,4,5,6,7,8,9] ;
let arent =(arr ,n )=>arr.splice(0, 3 ,n);
console.log(arent(arr,3));
*/
/*4* задание
let numbers=([1,1,1], [2,2,2]) ;
let sum = 3;
numbers.map((item) => sum += item);
console.log(sum); */
