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

const select = document.querySelectorAll("h2")
// select[0].style.color = 'red'
const changeBg = (select) => {
    for (let i = 0; i < select.length; i++) {
        select[i].style.color = 'red'
    }
}
changeBg(select)
console.log('select :>> ', select[0].style.color = 'red');