// array
// const myArry = [0, 1, 2, 3, 4, 5]

// shallow copy and deep copy
// console.log('my array', myArry[3])

// array method
// myArry.push(6)
// myArry.push(7)
// myArry.pop()

// myArry.unshift(9)
// myArry.shift()

// console.log('myArry', myArry.includes(9))
// console.log('myArry', myArry.indexOf(9))

// const newArray = myArry.join()
// console.log('myArry', myArry)
// console.log('newArray', newArray)

// slice splice

// console.log('A', myArry)

// const myn1 = myArry.slice(1, 3)

// console.log('b', myn1)

// const myn2 = myArry.splice(1, 3)

// // console.log('A', myArry)
// console.log('b', myn2)


// const marvel_hero = ["thor", "Ironman", "Spiderman"]
// const DC_hero = ["superman", "flash", "batman"]

// marvel_hero.push(DC_hero)

// const All_heros = marvel_hero.concat(DC_hero)
// console.log('marvel_hero', All_heros)

// const All_heros = [...marvel_hero, ...DC_hero]

// console.log('All_heros', All_heros)

// const anotherArray = [1, 2, 3, [4, 5, 6, 7, [5, 6], 6, [343, [21, 234]]]]
// const real_another_array = anotherArray.flat(3)

// console.log('real_another_array', real_another_array)

// console.log(Array.isArray("Usman"))
// console.log(Array.from("Usman"))

// const score = 100
// const score1 = 200
// const score2 = 300
// console.log('Array', Array.of(score, score1, score2))

// let person = {
//     name: 'usman', age: 21
// }
// let arr = ['apple', 'banana', person]

// console.log('arr', arr)

// let arr = ['apple', 'banana', 'cherry']

// arr.unshift("orange")

// console.log('arr', arr)

// arr.shift()

// console.log('arr', arr)

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log('element', element)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const num1 = 3
// const findNum = numbers.map((item) => {
//     if (num1 === item) {
//         item = 12;
//     }
//     return item
// })
// console.log('findNum', findNum)

// const findItem = numbers.filter((item) => {
//     return num1 === item
// })
// console.log('findItem', findItem)

// const newNum = numbers.reduce((prev, item) => {
//     return prev + item
// }, 0)

// console.log('newNum', newNum)

// Array.prototype.myMap = function (cb) {
//     let temp = []
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp
// }

// const mutliplyByThree = numbers.myMap((num) => {
//     return num * 3
// })
// console.log('mutliplyByThree', mutliplyByThree)

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) temp.push(this[i])
//     }
//     return temp
// }

// const mutliplyByThree = numbers.myFilter((num) => {
//     return num === 3
// })
// console.log('mutliplyByThree', mutliplyByThree)

// Array.prototype.myReduce = function (cb, initialValue) {
//     var accmulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accmulator = accmulator ? cb(accmulator, this[i], i, this) : this[i]
//     }
//     return accmulator
// }

// const mutliplyByThree = numbers.myReduce((acc, curr) => {
//     return acc + curr
// })
// console.log('mutliplyByThree', mutliplyByThree)

// diff between map and foreach

// const arr = [1, 2, 3, 4, 5, 6];

// // dont change the values of the original array
// const mapArray = arr.map(arr => arr * 2).filter((item) => item === 4)

// console.log('mapArray', mapArray)
// // change the values of the original array
// arr.forEach(arr => arr * 2)
// console.log('foreachArray', arr)

// const students = [
//     { name: 'John', rollNo: 'S001', marks: 85 },
//     { name: 'Emily', rollNo: 'S002', marks: 78 },
//     { name: 'Michael', rollNo: 'S003', marks: 92 },
//     { name: 'Sarah', rollNo: 'S004', marks: 70 },
//     { name: 'David', rollNo: 'S005', marks: 88 }
// ];

// const updatedRecord = students.map((student) => {
//     return student.name.toUpperCase()
// })

// console.log('updatedRecord', updatedRecord)

// const updatedRecord = students.filter((student) => {
//     return student.marks > 60
// })

// console.log('updatedRecord', updatedRecord)

// const updatedRecord = students.reduce((acc, stud) => {
//     return acc + stud.marks
// }, 0)

// console.log('updatedRecord', updatedRecord)

// const updatedRecord = students
//     .filter((stu) => stu.marks > 60)
//     .map((stu) => stu.name);

// console.log('updatedRecord', updatedRecord);

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 60) {
//         stu.marks += 20
//     }
//     return stu
// }).filter((stu) => stu.marks > 60).reduce((acc, stu) => acc + stu.marks, 0)
// console.log('totalMarks', totalMarks);


// some

// const arr = [1, 2, 3, 4, 5, 6]

// const res = arr.some((i) => i > 3)

// const res = arr.every((i) => i > 3)

// const res = arr.find((i) => i > 3)

// console.log('res', res)

// +++++++++++++++  spread  and Rest operator   +++++++++++++++++++

const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

// const allNums = [...nums1, ...nums2]

// console.log('allNums', allNums)

// Rest

// function sum(...number) {
//     return number
// }

// console.log('sum', sum(nums1, nums2).flat())

// concat

// const newArray = nums1.concat(nums2)
// console.log('newArray', newArray)

// nums1.fill(0, 3)
// console.log('nums1', nums1)

// const index = nums1.findIndex((item) => item == 4)
// console.log('index', index)

// reverse array

// console.log('nums1', nums1)
// nums1.reverse()
// console.log('nums1', nums1)

// nums1.sort((a, b) => b - a)
// console.log('nums1', nums1)

// find the second largest number

// const arr = [12, 35, 1, 10, 34, 1]

// arr.sort((a, b) => b - a)

// const secondNum = arr[1]
// console.log('secondNum', secondNum)

// const myArry = [21, 32, 11, 231, 42, 112, 432, 990]

// function secondLargest(arr) {
//     const uniqueArr = Array.from(new Set(arr));

//     uniqueArr.sort((a, b) => b - a)
//     if (uniqueArr.length >= 2) {
//         return uniqueArr[1]
//     } else {
//         return -1
//     }
// }
// const arrr = secondLargest(myArry)
// console.log('first', arrr)

// function secondLargestOptiomized(arr) {
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest
//             largest = arr[i];
//         } else if (arr[i] != largest && arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest
// }

// console.log(secondLargestOptiomized([10, 5, 10]))

const myarr = [1, 2, 3, 4, 5, 6, 7, 8]

// function rotateArray(arr, k) {
//     let size = arr.length;

//     if (size > k) {
//         k = k % size;
//     }
//     const rotated = arr.splice(size - k, size);
//     arr.unshift(...rotated);

//     return arr
// }

// console.log(rotateArray(myarr, 3))

// function removeDuplicate(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueArr.indexOf(arr[i]) === -1) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     console.log('unique', uniqueArr)
//     return uniqueArr.length;
// }


// console.log(removeDuplicate([1, 1, 1, 2, 2, 1, 2, 1, 3, 4, , 4, 4]))