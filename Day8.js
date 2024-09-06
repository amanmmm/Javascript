// for loop
for(let i=1; i<=10; i++){
    console.log(i);
}
const arr = [2,5,7,8,9];
for(let i=0; i<5; i++){ 
    console.log(arr[i]);
}
let myarr = [`flash`, `batman`, `superman`]
console.log(myarr.length);
for(let i=0; i<myarr.length; i++){
    console.log(myarr[i]);
}
// while loop
let index = 0;
while (index <=10){
    console.log (index);
    index ++;
}
 // do while loop
 let i = 1;
do{
console.log(i);
i++;
}
while (i<=10);
//for of loop
const myarr1 = [2,5,7,8,9];
for (const i of myarr1){
    console.log(i)
}
const greeting = `Hello world`;
for(const greet of greeting){
    console.log(`${greet}`);
}
const map = new Map();
map.set(`IN`, `INDIA`);
map.set(`USA`, `UNITED STATES OF AMERICA`);
map.set(`Fr`,`FRANCE`);
map.set(`In`, `INDIA`);
for (const key of map){
    console.log(key);
}
for (const [key,value] of map){
    console.log(key,value);
}
const myobject = {
    game1 : `Clash of clan`,
    game2 : `GTA`
}
for(const key in myobject){
    console.log(myobject[key]);
}
//for each loop
const arr1 = [`Hello`, `My,`, `Name`, `is`, `Aman`];
arr1.forEach((item)=>{
console.log(item);
});
//Another way
function printMe(item){
    console.log(item);
}
arr1.forEach(printMe);
arr1.forEach((item, index, arr)=>{
    console.log(item,index,arr);
})
const myCoding = [{
    LanguageName : `Javascript`,
    LanguageFileName : `Js`
},
{
    LanguageName : `Java`,
    LanguageFileName : `Jv`
},
{
    LanguageName : `Python`,
    LanguageFileName : `Py`
}]
myCoding.forEach((item)=>{
    console.log(item.LanguageName);
})