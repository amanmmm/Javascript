console.log("Aman");
let number = 33;
let name = "Aman";
let age = 21;
console.table([number,name,age]);
console.log(typeof(name));
let number1 = String(number);
console.log(typeof(number1));
console.log(number1);
let number2 = "33abc";
let number3 = Number(number2);
console.log(typeof(number3));
console.log(number3);
// for typecasting use Data type in capital letter for not a number it prints NaN;
console.log(1 + 2 + "2");/* Now, you have 3 + "2". The + operator is now used with a number and a string. In JavaScript, when one of the operands is a string, the + operator performs string concatenation.
Result: 3 (number) + "2" (string) results in the string "32".*/
console.log("1" + 2 + 2);/*Step 1: Evaluate "1" + 2. The "1" is a string, so JavaScript performs string concatenation. The number 2 is converted to the string "2", and then concatenated with "1", resulting in "12".
Step 2: Now, you have "12" + 2. The "12" is a string, so JavaScript again performs string concatenation. The number 2 is converted to the string "2" and concatenated with "12", resulting in "122".*/
const a = 2;
const b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const name5 = "aman";
const repoCount = 50;
console.log(`My name is ${name5} and my repo count is ${repoCount}`);
// By using backtick character you can easily use function in the code;
const myName = new String ("Aman");
console.log(myName[2]);// String is object not array.
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.indexOf('a'));
console.log(myName.charAt(2));
console.log(myName.substring(0,2));// gives substring from index 0 to index 1
console.log(myName.slice(0,2));
//Use Case: Use slice when you need to work with negative indices or need precise control over the slice, and substring when you want to avoid handling negative indices and prefer simpler extraction logi
const myName2 = "    Aman Kumar Ojha    ";
console.log(myName2);
console.log(myName2.trim());
const email = "amanojha386@gmail.com";
console.log(email.replace("aman", "anku"));
console.log(email.includes("alpha"));
console.log(myName2.split(" "));