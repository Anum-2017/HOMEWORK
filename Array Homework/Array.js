"use strict";
// <-------------------- Array Home work ------------------------------->
let fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Watermelon', 'Grapes', 'Berry', 'Kiwi'];
console.log(fruits);
// 1) Remove last 3 elements
fruits.splice(-3);
console.log(fruits);
// 2) Remove 3rd element from center
fruits.splice(Math.floor(fruits.length / 2), 1);
console.log(fruits);
// 3) Delete 1 element from 2nd index & add a new element
fruits.splice(2, 1, "Pear");
console.log(fruits);
// 4) Add 2 elements in the beginning and add 1 element in the center
fruits.unshift("Pineapple", "Pomegranate");
fruits.splice(Math.floor(fruits.length / 2), 0, "Strawberry");
console.log(fruits);
