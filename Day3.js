let mydate = new Date();
console.log(mydate.toLocaleString());
console.log(typeof mydate);
let myCreatedDate = new Date("09-11-2024");
console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(mydate.getFullYear());
// getmonths,getday,
console.log(myCreatedDate.getDay());
//++++++++++++++++++++++++++++++++++++++++++++++//

//Array in JS.
const myarr = [2,5,7,9,11];
const heroes = ["Shaktiman", "Krish"];
console.log(heroes[1]);
console.log(myarr[0]);
console.log(heroes.lastIndexOf("Krish"));
// Another way to initialize array is :
const myarr1 = new Array(1,2,4,6,8);
console.log(myarr1[3]);
// shallow copy points to reference, it means changing anything at address will change the data.
// deep copy do not point to reference, it means changing at address do not change the local variable and vice versa.
console.log(myarr.unshift(8));
console.log(myarr);
console.log(myarr.shift());
console.log(myarr.includes(9));
const newArr = myarr.join();
console.log(newArr);
