let x=8;//Declare x,as a value 8
let y=4;//Declare y,as a value 4
/*
To add x and y
we create another variable
and decalre as x + y
*/
let z=x+y;
console.log(z);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

let person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person1.age);
console.log(person1.eyeColor);

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

"use strict";
x = 3.14;                // This will cause an error