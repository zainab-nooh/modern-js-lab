# ![Modern Javascript Syntax Lab - Exercise](./assets/hero.png)

Modern JavaScript Syntax Lab Outline

## Introduction

In the past decade, roughly, JavaScript has undergone a massive transformation in its syntax. This has largely been due to accommodate developer requests to make the syntax easier to use. Many of the new features that have come out have been incorporated as standard practices in frameworks such as React, Vue, Angular, and many others. The important thing to note here is that most these changes do not provide any additional functionality. Rather, they provide a more efficient way to write code using the language.

## Learning goals:

In this lab, you'll explore modern JavaScript syntax and compare it to more traditional syntax.  

While the modern syntax has many benefits, a strong understanding of the traditional way of writing JavaScript provides a crucial foundation not just for JS, but for other languages as well. Not all languages have these kinds of shortcuts. As a developer, you'll be required to learn other languages that have their own nuances but that are built upon the same foundations as JavaScript. It's important that the modern syntax covered in this lesson not become a crutch, so that when required to use a different language, you don't have to learn everything from scratch

## Lab structure

In this lab, we will provide a brief explanation of each topic, an example of the topic, as well as the traditional way of accomplishing the same task so that you can see how it relates to basic programming as a whole.

## Review

### `Array.prototype.map()`

The `Array.prototype.map()` method returns a new array with the results of calling a function on every element in an existing array. This allows for the transformation of each element inside the array, without altering the original. 

Take a look at the example below:

```javascript
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
	return currentElement + ' ice cream'
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

In this example, we've used the `Array.prototype.map()` method on `array1` to generate `array2`. Each element in `array2` is the result of appending `' ice cream'` to the end of a string element in `array1`.

The `Array.prototype.map()` method is used to iterate over `array1`. For every element in `array1`, it will call upon the provided function. When the function is called upon, it receives the current element being processed as an argument. The value returned from the function will take the place of the original element in the new array. 

> 💡 `Array.prototype.map()` returns a **new array** with altered values. It does *not* alter the original array.

### Array destructuring

Array destructuring in JavaScript is a way of unpacking the elements of an array. With array destructuring, we can extract elements from an array and store them in variables with a single line of code.

When we destructure an array, the elements are matched positionally with the variables we define, meaning the order in which we declare variables corresponds with the order of elements in the array. 

```javascript
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'
```

In the example above, the first two elements of `petsArray` are unpacked into `firstPet` and `secondPet`.

tktk expand on this
tktk pitfalls of positionally based extraction

> 💡 You have full control of the variable names!

### Object destructuring

Destructuring can also be applied to objects. With object destructuring, we can extract properties from an object. Instead of accessing properties through dot notation or bracket notation, the values of specific properties in an object can be assigned to variables.

```javascript
const person = {
  name: 'Alex',
  role: 'Software Engineer'
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

console.log(person.name) // 'Alex'
console.log(person.role) // 'Software Engineer'
```

In the example above, the `person` object is deconstructed to extract the `name` and `role` properties. This approach allows us to access the values of `name` and `role` without having to use dot notation for each property. 

> 🚨 Unlike array destructuring, where elements are matched based on their position, the variables created in object destructuring, such as `const { name, role }`, need to match the names of existing properties in the object.

### Applying the spread operator on arrays

The spread operator (`...`) gives us a way to duplicate or combine arrays. Instead of manually copying elements from one array to another using loops, the spread operator allows us to directly copy the elements of one array into another.

```javascript
const originalArray = [1, 2, 3];
const duplicateArray = [...arr];

console.log(duplicateArray) // [1, 2, 3]
```

In the example above, `duplicateArray` in an entirely separate array produced by copying the contents of `originalArray`.

This differs from simply assigning on array to another, which only creates a reference, not a copy:

```javascript
const originalArray = [1, 2, 3];
const referenceArray = originalArray; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArray); // [1, 2, 3, 4]
```

The spread operator prevents this issue by ensuring the new array is an independent copy that shares no references with the original. This can be useful when we need to maintain the immutability of the original array.

The spread operator can also merge multiple arrays into one:

```javascript
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables) // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
```

> 🚨 tktk pitfalls/common error?

### Applying the spread operator on objects

The spread operator can also be applied to objects:

```javascript
const originalObject = {
	foo: 'Hello', bar: 100
};

const clonedObject = { ...originalObject }
console.log('Clone: ', clonedObject) // { foo: 'Hello', bar: 100 }
```

In the example above, we can see how the properties of `originalObject` have been copied over in to a new object called `clonedObject`.

The use of the spread operator here differs significantly from direct assignment:

```javascript
const originalObject = {
	foo: 'Hello', bar: 100
};

const clonedObject = originalObject
clonedObject.foo = 'Goodbye'

console.log(originalObject) // { foo: 'Goodbye', bar: 100 }
```

The example above demonstrates a pitfall of attempting to clone an object **without the spread operator**. When `clonedObject` is assigned `originalObject` directly, it doesn't actually create a new, independent object. Instead, `clonedObject` becomes a reference to `originalObject`. This means any changes made to `clonedObject` also affect `originalObject`, as they both point to the same data.

This issue can be remedied when we apply the spread operator:

```javascript
const originalObject = {
	foo: 'Hello', bar: 100
};

// Copy the properties of originalObject:
const clonedObject = { ...originalObject }

// Update the properties of clonedObject:
clonedObject.foo = 'Goodbye'
clonedObject.bar = 0

console.log('Original: ',originalObject) // { foo: 'Hello', bar: 100 }
console.log('Clone: ', clonedObject) // { foo: 'Goodbye', bar: 0 }
```

With the spread operator, `clonedObject` is a brand new object, with its own separate copy of the data from `originalObject`. Now, modifying `clonedObject` will not impact the `originalObject`

### Dynamic keys in objects

Through bracket notation, variables and expressions can be used as dynamic keys in an object. Dynamic keys can be used to create, access, and modify properties in an object. Dynamic keys enhance our ability to access data. This approach is particularly useful in scenarios where key names are not known ahead of time or when they need to be computed on the fly. It also allows for more concise and readable code, avoiding the need for additional steps when assigning properties to objects.

Take for example, the use of `selectedFruit` as a dynamic key in the codeblock below:

```javascript
const fruitInventory = {
  apples: 2,
  oranges: 4
};

const selectedFruit = 'apples'; // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit];

console.log(selectedFruitCount); // 2
```

This technique can be extended to the creation of objects, where property names are determined dynamically:

```javascript
const fruitType = "bananas"; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};

console.log(fruitInventory ); // { bananas: 5 }
```

Using square brackets (`[]`) around `fruitType` in the object declaration tells JavaScript to use the variable's value as the property name. Without the brackets, the string `'fruitType'` would be used as the key, rather than its value (`'bananas'`).

### `import` and `export`

In JavaScript, the `import` and `export` syntax allows us to share code between different files. This is a more modern approach compared to the `require` and `module.exports` syntax used in CommonJS. 

With `export`, you can make functions, objects, or primitives available for use in other files. 

There are two main types of exports: 

1. **Named exports**: For exporting multiple items from a file:

```javascript
export const myNumber = 123;
export const myString = 'Hello';
```

2. **Default exports**: For exporting a single item from a file:
```javascript
export default function superCoolFunction() {/* ... */};
```

> 🏆 It's possible to mix default and named exports in a single module, but it's a best practice to stick to one style for consistency and clarity.

Using `import`, you can bring those exported items into another file.

1. **Importing named exports**:

```javascript
import { myNumber, myString } from './myData.js';
```

2. **Importing a default export**:

```javascript
import superCoolFunction from './superCoolFunction.js';
```

You can also import all named exports as a single object, which is useful when dealing with modules that export several items:

```javascript
import * as MyData from './myData.js';
console.log(MyData.myNumber);
console.log(MyData.myString);
```

This allows for more organized code by separating concerns into modules.

### The ternary operator

The ternary operator gives us a way to handle conditional logic in a single line of code. Ternaries can be viewed as a more concise version of an `if...else` statement. It can also simplify the process of assigning a value to a variable based on a condition.

A ternary consists of three parts:

1. **Condition**: A boolean expression evaluated for truthiness, placed before the `?`.
2. **True Expression**: The value assigned to the variable if the condition is `true`, located immediately after the `?`.
3. **False Expression**: The value assigned to the variable if the condition is `false`, following the `:`.

Consider the following example using an `if...else` statement:

```javascript
const age = 22;
let access

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'
```

This logic can be streamlined using a ternary:

```javascript
const age = 22;
let access = age > 21 ? 'Yes' : 'No';

console.log(access); // 'Yes'
```

> 💡 The ternary operator is a powerful tool for simplifying conditional expressions, making it ideal for straightforward assignments based on a single condition.

### Boolean gates

Logical operators such as `&&` (AND) and `||` (OR) play an interesting role when used outside of `if...else` statements. In this context, they can be used to evaluate and return values directly, based on the truthiness or falsiness of the values involved.

1. **The `&&` operator**

The `&&` operator evaluates expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value. This behavior can be utilized for assignments and expressions outside conditional statements.

Let's take a look at a few examples of the `&&` operator at work:

- When the first expression (`false`) being evaluated is falsy, and `result` will be assigned that value (`false`).

	```javascript
	const result = false && 'foo';
	console.log(result) // Output: false
	```

- When the first value is truthy (`'hello'`) and the second value is falsy (`''`), the `result` is assigned the empty string (`''`), as it is the first falsy value encountered.

	```javascript
	const result = 'hello' && '';
	console.log(result) // Output: ''
	```

- When both values are truthy, the result is the value of the last expression (`'bar'`).

	```javascript
	const result = 'foo' && 'bar';
	console.log(result) // Output: 'bar'
	```

> 💡 Remember, in JavaScript, falsy values include `""` (empty string), `0`, `null`, `undefined`, `NaN`, and `false`. Everything else is considered truthy.

2. **The `||` operator**

On the other hand, the `||` operator returns the first truthy value it encounters as it evaluates expressions from left to right. If all values are falsy, it returns the value of the last operand.

Let's take a look at a few examples of the `||` operator at work:

- When the initial expression being evaluated (`''`) is falsy, and no truthy value is encountered until `'foo'`, `result` is assigned `'foo'` as it's the first truthy value.

	```javascript
	const result = '' || 'foo';
	console.log(result); // Output: 'foo'
	```

- If the first value (`2`) is truthy, the evaluation stops, and `result` is assigned this first truthy value (`2`), ignoring subsequent expressions.

	```javascript
	const result = 2 || 0;
	console.log(result); // Output: 2
	```

- When all values being evaluated are falsy (`''` and `0`), `result` is assigned the value of the last expression (`0`), as no truthy value is found.

	```javascript
	const result = '' || 0;
	console.log(result); // Output: 0
	```

> 💡 The `||` operator can be helpful for setting fallback or default values.


### Optional chaining

Optional chaining is a way to safely access deeply nested properties in an object. This approach can help us avoid the errors that occur when attempting to access `undefined` or `null` properties.

Consider a scenario where we attempt to access a property that doesn't exist, which normally results in an error:

```javascript
const adventurer = {
  name: 'Alice'
};

console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')
```

In this application, it's conceivable that the `dog` property might be added in later. This is where some optional chaining might prove useful. 

Using `console.log(adventurer.dog?.name);` will allow our code to run without an error:


```javascript
const adventurer = {
  name: 'Alice'
};

console.log(adventurer.dog?.name); // undefined
```

Now, the non existent property causes an error. Instead our code logs a value of `undefined`.













## Lab exercises

### Exercise 1: Applying `Array.prototype.map()`

Use `.map()` to iterate over the following array:

```javascript
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
```

Create a new array where each value is multiplied by 2 and log the new array.

### Exercise 2: Destructuring arrays

Given the following array:

```javascript
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
```

Use destructuring to pull out the first and second values of the array and place them into variables.  Log both variables.

### Exercise 3: Destructuring objects

Given the following object:

```javascript
const car = {
	make: 'Audi',
	model: 'q5'
};
```

Use destructuring to create a variable `make` that will hold the value of `car.make`.  Do the same for `model` and `car.model`.

### Exercise 4: Applying the spread operator on arrays

Duplicate the following array using the spread operator, and assign it to the variable `controversialPizzaToppings`:

```javascript
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
```

Log the variable `controversialPizzaToppings`

### Exercise 5: Applying the spread operator on objects

Duplicate the following object and spread its values into a new variable `myCar`:

```javascript
const car = {
	make: 'Audi',
	model: 'q5'
};
```

Change the `model` property of `myCar` to the string `'q7'`.  Log both objects and see that they have different values for the `model` property, while maintaining the same `make` value.

### Exercise 6: Dynamic Keys in Objects

Define a variable of your choice and assign it a string value.  Next, create an object and use that variable as a key for a property.  The value of the property can be whatever.  Log the object to make sure it worked as expected.

### Exercise 7: Import and Export

Follow the steps from the review of "Import and Export" and update values for `default`, `age`, and `job`.

### Exercise 8: Default Parameters

Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values `cat` and `white`.  The function should log a sentence `'The cat is white.'` by default.  The function substitutes the appropriate parameters when supplied arguments.

### Exercise 9: Terinary Operator

Shorten the following `if/else` statement using a ternary:

```javascript
let pizza = 'tasty';

if (pizza === 'tasty') {
	console.log('yum')
} else {
	console.log('yuck')
}
```

### Exercise 10: And/Boolean Gates

Prior to running the following code, see if you can guess what the values of the variables will me.  Then run the code to see if you're right:

```javascript
const result1 = "bar" && "foo";
const result2 = false || 243;
const result3 = 42 && false;
const result3 = myVar || 3000;
console.log('result1:', result1)
console.log('result1:', result2)
console.log('result1:', result3)
console.log('result1:', result4)
```

### Exercise 11: Optional Chaining

Refer back to the description of optional chaining and check for `cat.age` on `adventurer`.  See how it errors out?  Use optional chaining so that it returns undefined instead.









