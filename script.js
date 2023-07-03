/*1 задача что не так и как правильно
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
решение:
let user= {
  name: "John",
  ref: 'this',

makeUser(){
  alert(this.name)
}
};
user.makeUser()
*/
/*let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum(){
   return this.a+this.b;
  },
  mul(){
    return this.a*this.b;
   },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

