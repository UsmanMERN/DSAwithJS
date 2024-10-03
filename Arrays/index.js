// array
const myArry = [0, 1, 2, 3, 4, 5]
// 
// shallow copy and deep copy
// console.log('my array', myArry[3])

// // array method
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


// var maxProfit = function (prices) {
//     let smallValue = prices[0]
//     let largeValue = prices[0]
//     let indexOfSellingPoint = 0
//     let ans = 0

//     // smallValue = Math.min(...prices)
//     for (let i = 0; i < prices.length; i++) {
//         const element = prices[i];
//         if (element < smallValue) {
//             smallValue = element
//             largeValue = 0
//         }
//         if (element > largeValue) {
//             largeValue = element
//         }
//         let diff = largeValue - smallValue
//         ans = diff > ans ? diff : ans
//     }
//     return ans
// };

// console.log('maxProfit([7,1,5,3,6,4]) :>> ', maxProfit([2, 4, 1]));


// var maxProduct = function (nums) {
//     let prod = 1
//     let element = 1
//     let currectMin = nums[0]
//     let currectMax = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         element *= nums[i];
//         let maxium = Math.max(prod, element)
//         let minium = Math.min(prod, element)
//         if (currectMax < maxium) {
//             currectMax = maxium
//             prod = currectMax
//         }
//         if (currectMin < minium) {
//             currectMin = minium
//         }
//         if (minium === 0) {
//             prod = 0
//         }
//     }
//     return prod
// };
// console.log('maxProfit([7,1,5,3,6,4]) :>> ', maxProduct([-2, -1, -1]));

// var singleNumber = function (nums) {
//     let myArray = []

//     if (nums.length == 1) {
//         return nums[0]
//     }
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if (!myArray.includes(element)) {
//             myArray.push(element)
//         } else {
//             let delIndex = myArray.indexOf(element)
//             myArray.splice(delIndex, 1)
//         }
//     }
//     return myArray[0]
// };

// console.log('maxProfit([7,1,5,3,6,4]) :>> ', singleNumber([2, 2, 1]));

// var longestConsecutive = function (nums) {
//     let globalArray = []
//     let sizeOfArray = 0

//     nums.sort((a, b) => a - b)
//     if (nums.length <= 0) {
//         return 0
//     }
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if (!globalArray.includes(element)) {
//             globalArray.push(element)
//         } else {
//             let delIndex = globalArray.indexOf(element)
//             globalArray.splice(delIndex, 1)
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];

//         if (!globalArray.includes(element - 1)) {
//             let length = 1
//             while (globalArray.includes(element + length)) {
//                 length += 1
//             }
//             sizeOfArray = Math.max(length, sizeOfArray)
//         } else {
//             let delIndex = globalArray.indexOf(element)
//             globalArray.splice(delIndex, 1)
//         }
//     }
//     console.log('globalArray :>> ', globalArray);
//     console.log('globalArray :>> ', globalArray.length);
//     return sizeOfArray
// };

// var longestConsecutive = function (nums) {
//     let longest = 0
//     if (nums.length <= 0) {
//         return nums[0]
//     }
//     let uniqueArray = new Set(nums);
//     for (const num of uniqueArray) {
//         if (!uniqueArray.has(num - 1)) {
//             let count = 0
//             while (uniqueArray.has(num + count)) {

//                 longest = Math.max(count, longest)
//                 count++
//             }
//         }
//     }
//     return longest + 1
// }

// console.log('maxProfit([7,1,5,3,6,4]) :>> ', longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));

// var maxProduct = function (nums) {
//     if (nums.length <= 0) {
//         return nums[0]
//     }
//     let maxium = nums[0]
//     let minium = nums[0]
//     let result = nums[0]
//     for (let i = 1; i < nums.length; i++) {
//         let current = nums[i]
//         let currentMax = Math.max(maxium * current, current, minium * current)
//         let currentMin = Math.min(maxium * current, current, current * maxium)
//         maxium = currentMax
//         minium = currentMin
//         result = Math.max(result, maxium)
//     }
//     return result
// };

// console.log('maxProfit([7,1,5,3,6,4]) :>> ', maxProduct([3, -1, 4]));

// var removeDuplicates = function (nums) {
//     let count = 1
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] != nums[j]) {
//                 nums[j] = nums[i]
//                 count++
//             }
//         }
//     }
//     return count
// };


// console.log('maxProfit([7,1,5,3,6,4]) :>> ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// let dat = new Date()

// console.log('dat :>> ', dat);


// var strStr = function (haystack, needle) {
//     let index = haystack.indexOf(needle)
//     return index
// };


// console.log('maxProfit([7,1,5,3,6,4]) :>> ', strStr("sadbutsad", "sad"));

// var mergeTwoLists = function (list1, list2) {
//     let list = list1.concat(list2)
//     // let list = new Array(list1, list2).flat()

//     let sortedList = list.sort((a, b) => a - b)
//     return sortedList
// }
// console.log('maxProfit([7,1,5,3,6,4]) :>> ', mergeTwoLists([1, 2, 4], [1, 3, 4]));

// var createCounter = function (init) {
//     console.log('init initial:>> ', init);
//     let decrement = () => {
//         console.log('init decrease:>> ', init);
//         return ++init
//     }
//     let increment = () => {
//         console.log('init increase:>> ', init);
//         return ++init
//     }
//     let reset = () => {
//         console.log('init reset:>> ', init);
//         return init
//     }
//     return { decrement, increment, reset }
// };
// const counter = createCounter(5)
// console.log('counter.increment(); :>> ', counter.increment()); // 6
// console.log('counter.reset() :>> ', counter.reset()); // 5
// console.log('counter.decrement() :>> ', counter.decrement()); // 4

// // console.log('maxProfit([7,1,5,3,6,4]) :>> ', mergeTwoLists([1, 2, 4], [1, 3, 4]));

// var arrayRankTransform = function (arr) {

//     let sortedArray = [...arr].sort((a, b) => a - b)
//     let rankMap = new Map()
//     let rank = 1
//     for (let i = 0; i < sortedArray.length; i++) {
//         const element = sortedArray[i];
//         if (!rankMap.has(element)) {
//             rankMap.set(element, rank++)
//         }
//     }
//     return arr.map(num => rankMap.get(num))
// };
// console.log('maxProfit([7,1,5,3,6,4]) :>> ', arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));