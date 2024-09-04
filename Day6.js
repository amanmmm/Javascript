function one (){
    const username = "Aman";
    function addone(num){
        return num+1;
    }
    addone(5);
    const addtwo = function(num){
        return num+2;
    }
    addtwo(7);
}
// Arrow function 
const user = {
  username : " Aman",
  price: 99,

  welcomeMessage : function() {
      console.log(`${this.username}, welcome to website`);
      console.log(this)
  }
}
user.welcomeMessage();
user.username = "Anku";
user.welcomeMessage();
console.log(this);
//this => talks about current context;
// in browser global object is window 
function chai(){
    let username = "aman";
    console.log(this.username);
}
chai();
// can not use this within the function
//arrow function

//implicit return
const addTwo = (num1, num2) => (num1+num2);


//explicit return 
const addTwo1 = (num1, num2) => {
   return  (num1+num2);
}
console.log(addTwo(7,8));
console.log(addTwo1(7,8));

const name = () =>  ({username : "aman"});
function chai(){
    console.log(`DB Connected`);
}
//IIFE
chai();
(function chai(){
    console.log(`DB Connected 2`);
}) ();
((name) => {
    console.log(name);
})(`Aman`);