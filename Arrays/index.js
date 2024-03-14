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


const marvel_hero = ["thor", "Ironman", "Spiderman"]
const DC_hero = ["superman", "flash", "batman"]

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

const score = 100
const score1 = 200
const score2 = 300
console.log('Array', Array.of(score, score1, score2))