# ![Modern Javascript Syntax Lab - Exercise](./assets/hero.png)

Modern JavaScript Syntax Lab Outline

## Introduction

Brief Overview: In the past decade, roughly, JavaScript has undergone a massive transformation in its syntax.  This has largely been due to accommodate developer requests to make the syntax easier to use.  Many of the new features that have come out have been incorporated as standard practices in frameworks such as React, Vue, Angular, and many others.  The important thing to note here is that most these changes do not provide any additional functionality.  Rather, they provide a more efficient way to write code using the language.

## Learning Goals:

In this lab, you'll explore modern JavaScript syntax and compare it to more traditional syntax.  

While the modern syntax has many benefits, a strong understanding of the traditional way of writing JavaScript provides a crucial foundation not just for JS, but for other languages as well.  Not all languages have these kinds of shortcuts.  As a developer, you'll be required to learn other languages that have their own nuances but that are built upon the same foundations as JavaScript.  It's important that the modern syntax covered in this lesson not become a crutch, so that when required to use a different language, you don't have to learn everything from scratch

## Lab Structure

In this lab, we will provide a brief explanation of each topic, an example of the topic, as well as the traditional way of accomplishing the same task so that you can see how it relates to basic programming as a whole.

## Topics and Exercises

### `.map` Method

#### Explanation

Let's say we wanted to duplicate an array, but change the values ever so slightly. Normally we'd have to do something like this:

```js
const arr1 = ['vanilla', 'chocolate', 'strawberry']
const arr2 = []

arr1.forEach((currentElement)=>{
	arr2.push(currentElement + ' ice cream')
})

console.log(arr2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

We can shorten this up a bit by doing:

```js
const arr1 = ['vanilla', 'chocolate', 'strawberry']
const arr2 = arr1.map((currentElement)=>{
	return currentElement + ' ice cream'
})

console.log(arr2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
```

The `.map()` property of arrays will loop through the entire array and return a new array with each value in the original array altered somehow. The way each element is altered is determined by what is returned by the callback function that is passed to `.map()`. Within that callback function, you'll notice the `currentElement` parameter passed to the callback function. This variable could be called anything, but the value is always the value of the current element in the array as we loop through it.

The important thing to note here is that `.map()` returns a new array with the altered values.  It does *not* alter the original array.

#### Exercise

Use `.map()` to iterate over the following array:

```
[13, 87, 2, 89, 12, 4, 90, 63]
```

Create a new array where each value is multiplied by 2 and log the new array.

### Destructuring

#### Arrays

##### Explanation

Let's say we wanted to do something like this:

```js
const x = [1, 2, 3, 4, 5];
const y = x[0]
const z = x[1]
console.log(y); // 1
console.log(z); // 2
```

We can simplify this a bit:

```js
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Basically, the `const [y, z] = x` will create a variable `y` and assign it to the first element in `x`. It will also create a variable `z` and assign it to the second element in `x`.  You have full control of the variable names.  These are just examples.

##### Exercise

Given the following array:

```javascript
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
```

Use destructuring to pull out the first and second values of the array and place them into variables.  Log both variables.

#### Objects

We can something similar with objects. Let's say we wanted to do something like this:

```js
const obj = { a: 1, b: 2 };
const a = obj.a;
const b = obj.b;
console.log(a); // 1
console.log(b); // 2
```

We can rewrite this as:

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a); // 1
console.log(b); // 2
```

`const { a, b } = obj` will create a variable `a` and assign it the value of the property in `obj` that has the same name (`a`). It will do the same thing with `b`.

The important thing to note is that the variables being created `const {a, b}` must match properties that exist in the object. `const {foo, bar} = obj` wouldn't work because `obj` doesn't have the properties `foo` and `bar`

##### Exercise

Given the following object:

```js
const car = {
	make: 'Audi',
	model: 'q5'
}
```

Use destructuring to create a variable `make` that will hold the value of `car.make`.  Do the same for `model` and `car.model`

### Spread Operator

Explanation: Explain the spread operator and its use in expanding arrays or objects.
Exercise: Challenge students to combine multiple arrays or clone an object using the spread operator.

### Dynamic Keys in Objects

Explanation: Discuss how to use variables as object keys.
Exercise: Ask students to create an object using dynamic keys based on given variables.

### Import and Export

Explanation: Explain ES6 modules and the import/export syntax.
Exercise: Simulate a small project structure where students have to import and export functions or objects across files.

### Default Parameters

Explanation: Introduce default parameters in functions.
Exercise: Instruct students to write functions that use default parameters to handle missing arguments.

### Ternary Operator

Explanation: Introduce the ternary operator as a concise if-else syntax.
Exercise: Provide a scenario for students to implement a simple decision-making process using the ternary operator.

### And/Boolean Gates

Explanation: Cover the use of logical operators for boolean logic and control flow.
Exercise: Create a scenario where students use logical AND or OR to make decisions in code.

### Optional Chaining

Explanation: Describe optional chaining for safely accessing nested object properties.
Exercise: Provide a nested object and have students access deep properties using optional chaining.

## Resources:

Provide a list of resources or documentation links for further reading on each topic. 