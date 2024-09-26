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


// const num = "10101abc"

// console.log('parseInt(num) :>> ', parseInt(num));
// console.log('Number(num) :>> ', Number(num));

// console.log(parseInt("101", 2));
// console.log(parseInt("FF", 16));

// setTimeout(() => {
//     console.log('Testing this :>> ');
// }, 6000);

// let arr = ["--X", "X++", "X++"]

// var finalValueAfterOperations = function (operations) {
//     let x = 0;

//     arr.map((op) => op.includes("++") ? x += 1 : x -= 1)
//     return x
// };

// console.log('finalValueAfterOperations() :>> ', finalValueAfterOperations(arr));

// let nums = [3, 2, 1, 5, 4]
// let k = 2

// var countKDifference = function (nums, k) {
//     let diff = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             console.log('nums[i] :>> ', i, nums[i]);
//             console.log('nums[j] :>> ', j + "-->j", nums[j]);
//             if (nums[i] - k == nums[j] || nums[j] - k == nums[i]) {
//                 diff++
//             }
//         }
//     }
//     return diff
// };
// console.log('countKDifference() :>> ', countKDifference(nums, k));

// let k = "52"

// let countKDifference = function (num) {
//     for (let i = num.length - 1; i >= 0; i--) {
//         let element = num.charAt(i)
//         let subString = num.substring(0, i + 1)
//         if (element % 2 == 1) {
//             return subString
//         }
//     }

//     return ""
// };
// console.log('countKDifference() :>> ', countKDifference(k));
