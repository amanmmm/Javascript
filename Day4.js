const mySym = Symbol("key1");
const JsUser = {
    name : "Aman",
    location : "varanasi",
    email: "amanojha@google.com",
    company: "Google",
    [mySym]: "mykey1"
}
Object.freeze(JsUser);
console.log(JsUser.name);
console.log(JsUser["location"]);
console.log(typeof JsUser[mySym]);
//++++++++++++++++++++++++++++++++++++++++++++//
const tinderUser = new Object();
console.log(tinderUser);
const tinderUser1= {
    name : "Aman",
    id : "123abc",
    isLoggedIn : false
};
console.log(tinderUser1);
const regularUser = {
    email: "someone@gmail.com",
    fullName: {
         userfullname: {
            firstname : "hitesh",
            lastname : "choudhary"
         }
    }
}
console.log(regularUser.fullName.userfullname.firstname);
const obj1= {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}
const obj3 = Object.assign(obj1,obj2);
console.log(obj3);
const obj4 = {...obj1, ...obj2};
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));