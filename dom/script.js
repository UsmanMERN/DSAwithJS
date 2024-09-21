// console.log(location)

// const value = document.getElementById("title").innerHTML

// console.log(value)



// Constructor function for creating Person objects
// function Person(name, age) {
//     this.name = name;  // 'this' refers to the new object being created
//     this.age = age;
// }

// // Using the 'new' keyword to create new objects
// let john = new Person("John", 25);
// let jane = new Person("Jane", 30);

// console.log(john.name);  // Output: John
// console.log(jane.age);   // Output: 30

// const select = document.querySelectorAll("h2")
// // select[0].style.color = 'red'
// const changeBg = (select) => {
//     for (let i = 0; i < select.length; i++) {
//         select[i].style.color = 'red'
//     }
// }
// changeBg(select)
// console.log('select :>> ', select[0].style.color = 'red');

// var x;  // Declaration is hoisted (x is undefined here)
// console.log(x);  // Output: undefined
// x = 5;  // Now 'x' is assigned 5
// console.log(x);  // Output: 5


const num = "10101abc"

console.log('parseInt(num) :>> ', parseInt(num));
console.log('Number(num) :>> ', Number(num));

console.log(parseInt("101", 2));
console.log(parseInt("FF", 16));