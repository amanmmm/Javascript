
undefined
parent
<div class=​"parent">​<div class=​"day">​Monday​</div>​<div class=​"day">​Tuesday​</div>​<div class=​"day">​Wednesday​</div>​<div class=​"day">​Thursday​</div>​</div>​
console.log(parent.children)
VM312:1 HTMLCollection(4) [div.day, div.day, div.day, div.day]0: div.day1: div.day2: div.day3: div.daylength: 4[[Prototype]]: HTMLCollection
undefined
for(int i=0; i<parent.length; i++){
VM405:1 Uncaught SyntaxError: Unexpected identifier 'i'
for(let i=0; i<parent.length; i++){
VM405:1 Uncaught SyntaxError: Unexpected identifier 'i'
    console.log(parent.children[i]);
}
VM574:2 Uncaught SyntaxError: Unexpected identifier 'Uncaught'
for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i]);
}
VM607:2 <div class=​"day">​Monday​</div>​
VM607:2 <div class=​"day">​Tuesday​</div>​
VM607:2 <div class=​"day">​Wednesday​</div>​
VM607:2 <div class=​"day">​Thursday​</div>​
undefined
for(let i=0; i<parent.children.length; i++){
    console.log(parent.children[i].innerHTML);
}
VM675:2 Monday
VM675:2 Tuesday
VM675:2 Wednesday
VM675:2 Thursday
undefined
parent.children[2].style.color = 'orange`
VM780:1 Uncaught SyntaxError: Invalid or unexpected token
parent.children[2].style.color = `orange`
'orange'
console.log(parent.firstElementChild)
VM885:1 <div class=​"day">​Monday​</div>​
undefined
console.log(parent.firstChild)
VM897:1 #textassignedSlot: nullbaseURI: "file:///D:/Javascript/Day11.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: div.daynextSibling: div.daynodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: div.parentparentNode: div.parentpreviousElementSibling: nullpreviousSibling: nulltextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
undefined
const child = document.querySelector(`.day`)
undefined
child
<div class=​"day">​Monday​</div>​
console.log(child.parentElement)
VM1275:1 <div class=​"parent">​<div class=​"day">​Monday​</div>​<div class=​"day">​Tuesday​</div>​<div class=​"day" style=​"color:​ orange;​">​Wednesday​</div>​<div class=​"day">​Thursday​</div>​</div>​
undefined
console.log(child.nextElementSibling)
VM1370:1 <div class=​"day">​Tuesday​</div>​
undefined
console.log(child.nextElementSibling.nextElementSibling)
VM1405:1 <div class=​"day" style=​"color:​ orange;​">​Wednesday​</div>​
undefined
console.log(parent.childNodes)
VM1533:1 NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]0: text1: div.day2: text3: div.day4: text5: div.day6: text7: div.day8: textlength: 9[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
undefined
const newEl = document.createElement('div')
undefined
newEl
<div>​</div>​
newEl.setAttribute("class", "new")
undefined
newEl.setAttribute("id", "newID")
undefined
newEl.innerText = "MY Code"
'MY Code'
newEl.style.backgroundColor('green')
VM1969:1 Uncaught TypeError: newEl.style.backgroundColor is not a function
    at <anonymous>:1:13
(anonymous) @ VM1969:1
newEl.style.backgroundColor = 'green`
VM1993:1 Uncaught SyntaxError: Invalid or unexpected token
newEl.style.backgroundColor = "green"
'green'
document.body.appendChild(newEl)
<div class=​"new" id=​"newID" style=​"background-color:​ green;​">​MY Code​</div>​