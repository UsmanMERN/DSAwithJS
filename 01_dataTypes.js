"use strict" // treat all js code as newer version

// console.log(3 + 3)
// console.log("usman")

// let name = "usman"
// let age = 21
// let isLoggedIn = false

// number
// bigInt
// string=>""
// boolean => true/false
// null
// undefined
// symbol => unique

// object

// console.log('first', typeof undefined)

// let isLoggedIn = 9;

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// *******************************      operation       ***********************************

// let value = 3;

// let negValue = -value

// console.log('negValue', negValue)
// console.log('negValue', negValue)

// *******************************      Type conversion       ***********************************


/* 
1. String Conversion

Explicit conversion:
```javascript
String(123)                // "123"
String(true)               // "true"
String(null)               // "null"
String(undefined)          // "undefined"
(123).toString()           // "123"
```

Implicit conversion:
```javascript
123 + ''                   // "123"
`Value is: ${123}`         // "Value is: 123"
```

2. Number Conversion

Explicit conversion:
```javascript
Number("123")              // 123
Number("12.3")             // 12.3
Number("")                 // 0
Number("  ")               // 0
Number("123abc")           // NaN
Number(true)               // 1
Number(false)              // 0
Number(null)               // 0
Number(undefined)          // NaN
parseInt("123")            // 123
parseFloat("12.3")         // 12.3
```

Implicit conversion:
```javascript
+"123"                     // 123
"123" - 0                  // 123
"5" * 1                    // 5
```

3. Boolean Conversion

Explicit conversion:
```javascript
Boolean(1)                 // true
Boolean(0)                 // false
Boolean("hello")           // true
Boolean("")                // false
Boolean(null)              // false
Boolean(undefined)         // false
Boolean(NaN)               // false
```

Implicit conversion:
```javascript
if ("hello") {             // Truthy value
    console.log("Truthy");
}

if (!"") {                 // Falsy value
    console.log("Falsy");
}
```

4. Object to Primitive Conversion

When an object needs to be converted to a primitive, JavaScript calls special methods on the object:

- valueOf(): Called first for numeric operations
- toString(): Called if valueOf() doesn't return a primitive, or for string operations

Example:
```javascript
let obj = {
    valueOf: function() { return 42; },
    toString: function() { return "Hello"; }
};

console.log(obj + 1);      // 43 (uses valueOf)
console.log(String(obj));  // "Hello" (uses toString)
```

5. Array Conversion

Arrays have a special toString() implementation:
```javascript
String([1, 2, 3])          // "1,2,3"
[1, 2, 3] + ""             // "1,2,3"
```

6. Symbol Conversion

Symbols can't be implicitly converted to strings:
```javascript
let sym = Symbol("foo");
String(sym)                // "Symbol(foo)" (explicit conversion works)
"" + sym                   // TypeError: Cannot convert a Symbol value to a string
```

7. Type Coercion in Comparisons

The == operator performs type coercion:
```javascript
5 == "5"                   // true
0 == false                 // true
null == undefined          // true
```

The === operator does not perform type coercion:
```javascript
5 === "5"                  // false
0 === false                // false
null === undefined         // false
```

8. Common Pitfalls and Best Practices

- Be cautious with loose equality (==) as it can lead to unexpected results
- Use strict equality (===) when you want to compare values without type coercion
- Be aware of implicit conversions in mathematical operations
- Use explicit conversions (like Number(), String(), Boolean()) when the intent is clear

Example of a common pitfall:
```javascript
let x = 0;
let y = "0";

if (x == y) {
    console.log("This will run, even though x and y are different types");
}

if (x === y) {
    console.log("This won't run, because === checks type as well");
}
```

Understanding type conversion is crucial for writing robust JavaScript code and avoiding unexpected behaviors. It's especially important when dealing with user inputs, API responses, or any situation where the data type might not be what you expect.

Would you like me to elaborate on any specific aspect of type conversion or provide more examples?
*/

// const obj = {}
// const num = null

// console.log('object :>> ', typeof obj);
// console.log('num :>> ', typeof num);
// console.log('obj == num :>> ', obj1 == num);


// let temp = -3

// if (temp > 35) {
//     console.log('temp is Hot!:>> ', temp);
// } else if (temp >= 25) {
//     console.log('temp is warm!:>> ', temp);
// } else {
//     console.log('temp is cold!:>> ', temp);
// }


// let isWeekend = false;
// let isHoliday = true;

// if (isWeekend || isHoliday) {
//     console.log("You can relax today.");
// } else {
//     console.log("It's a workday.");
// }

const name = "Muhammad Usman"

// console.log('name :>> ', name.concat("M"));
// console.log('name :>> ', name.toLowerCase());

const numarray = [1, 32, 322, 323, 222, 233]

console.log('Max:>> ', Math.max(...numarray));
console.log('min:>> ', Math.min(...numarray));
// console.log('POW:>> ', Math.pow(10, 10));
console.log('POW:>> ', 10 ** 10);