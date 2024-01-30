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

##### Explanation

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

#### Arrays

##### Explanation

Let's duplicate an array:

```js
const arr = [1,2,3]
const arr2 = []

arr.forEach((currentElement)=>{
	arr2.push(currentElement)
})
console.log(arr2)
```

This can be simplified like so:

```js
const arr = [1,2,3]
const arr2 = [...arr]
```

This "spreads" the values of `arr` into `arr2`. The thing to note is that you can't simply do:

```js
const arr = [1,2,3]
const arr2 = arr
```

The reason for this is that in this last scenario, `arr2` is set to a reference to `arr`. This means that it doesn't duplicate the values, it instead points to the same place in memory that `arr` is stored. If you manipulate one, you'll see the same changes on the other:

```js
const arr = [1,2,3]
const arr2 = arr
arr2.push(4)
console.log(arr);
```

Because of this, we need to manually duplicate the original array. This is where the spread (`...`) operator comes in.

##### Exercise

Duplicate the following array using the spread operator, and assign it to the variable `controversialPizzaToppings`:

```js
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']
```

Log the variable `controversialPizzaToppings`

#### Objects

##### Explanation

Objects also need to be manually duplicated, just like arrays. The following won't work as expected:

```js
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = obj1;
clonedObj.x = 43;
console.log(obj1.x); //43
```

In the previous example, `obj1` is affected when we alter `clonedObj`. We can easily duplicate objects like so:

```js
const obj1 = { foo: 'bar', x: 42 };
const clonedObj = {...obj1}
clonedObj.x = 43;
console.log(clonedObj.x); //43
console.log(obj1.x); //42
```

As you can see, now the objects have different values for their respective `x` properties.

##### Exercise

Duplicate the following object and spread its values into a new variable `myCar`:

```js
const car = {
	make: 'Audi',
	model: 'q5'
}
```

Change the `model` property of `myCar` to the string `'q7'`.  Log both objects and see that they have different values for the `model` property, while maintaining the same `make` value.

### Dynamic Keys in Objects

#### Explanation

We can use variables when creating keys for our objects like so:

```js
const key = 'DYNAMIC_KEY';
const obj = {
    [key]: 'ES6!'
};

console.log(obj); // > { 'DYNAMIC_KEY': 'ES6!' }
```

Note that if you didn't put the `[]` around `key` the following would happen:

```js
const key = 'DYNAMIC_KEY';
const obj = {
    key: 'ES6!'
};

console.log(obj); // > { key: 'ES6!' }
```

Before a relatively recent version of JS (called ES6 or ECMAScript 6), we'd have to do the following:

```js
const key = 'DYNAMIC_KEY';
const obj = {}
obj[key] = 'ES6!'
console.log(obj); // > { 'DYNAMIC_KEY': 'ES6!' }
```

Objects in JS allow for array style access, so `obj.foo = 'bar'` is the same as `obj['foo'] = 'bar'`. The advantage here is that you can use variables for keys. This is fine too, but I like the first example.

This might not seem terribly useful, but there are some situations in React where it can save you from writing a lot of code!

#### Exercise

Define a variable of your choice and assign it a string value.  Next, create an object and use that variable as a key for a property.  The value of the property can be whatever.  Log the object to make sure it worked as expected.

### Import and Export

#### Explanation

Exporting and Importing in JavaScript is accomplished with the `import` and `export` syntax.  Create two files: `exportingFile.js` and `importingFile.js`:

```
touch exportingFile.js
touch importingFile.js
```

Also, you'll need to initialize a node project:

```
npm init -y
```

Now add the following property to `package.json`:

```
"type":"module",
```

In `exportingFile.js` add the following:

```js
export default 'Matt'
```

In `importingFile.js` add the following:

```js
import name from './exportingFile.js'
console.log(name)
```

Run `importingFile.js` like so:

```bash
node importingFile.js
```

You'll notice the keyword `default` in `exportingFile.js`.  You can export multiple values, but make one of them the default value that is exported.  This is what we did here.  To export additional values, update `exportingFile.js` like so:

```js
export default 'Matt'
export const age = 43
export const job = 'programmer'
```

Now you can import those additional exports by updating `importingFile.js` like so:

```js
import name, { age, job } from './exportingFile.js'
console.log(name, age, job)
```

When exporting additional variables, simply declare the variable like normal, and prepend the declaration with `export`.

#### Exercise

Run the above example and update values for `default`, `age`, and `job`

### Default Parameters

#### Explanation

Default parameters are just that - default values for parameters when you don’t pass a value for them in a function call. Take this example:  

```js
function addThreeNumbers(numA, numB, numC) {
	return numA + numB + numC
}

addThreeNumbers(2)
```

This will return `NaN`, because the value of `numB` and `numC` are both `undefined`.  
Let’s apply some defaults to the `numB` and `numC` parameters:  

```js
function addThreeNumbers(numA, numB = 2, numC = 1) {
	return numA + numB + numC
}

addThreeNumbers(2)
```

Now this function will return the number `5`.  
What if we also give a default to `numA`?  

```js
function addThreeNumbers(numA = 1, numB = 2, numC = 1) {
	return numA + numB + numC
}
addThreeNumbers(2)
```


This function is still going to return the number `5`. The default value of `1` on `numA` will be overridden by the passed in value of `2`.

#### Exercise

Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values `cat` and `white`.  The function should log a sentence `'The cat is white.'` by default.  The function substitutes the appropriate parameters when supplied arguments.

### Ternary Operator

#### Explanation

Here's some if/else code:

```js
let age = 22;
let access;

if(age > 21){
	access = 'yes'
} else {
	access = 'no';
}
console.log(access);//yes
```

We can shorten this up like so:

```js
let age = 22;
let access = (age > 21) ? 'yes' :  'no'
console.log(access); //yes
```

There's three parts to a ternary:

- The boolean expression is inside the `()`
- If the boolean expression evaluates to `true` then the variable on the left of the `=` is set to whatever comes after the `?`
- If the boolean expression evaluates to `false` then the variable on the left of the `=` is set to whatever comes after the `:`

#### Exercise

Shorten the following `if/else` statement using a ternary:

```js
let pizza = 'tasty';

if(pizza === 'tasty'){
	console.log('yum')
} else {
	console.log('yuck')
}
```

### And/Boolean Gates

#### Explanation

When running `&&` and `||` statements, something interesting occurs when not using them within the context of an `if/else` statement

##### `&&`
 
```js
const result1 = "" && "foo"; // result is assigned "" (empty string)
const result2 = 2 && 0; // result is assigned 0
const result3 = "foo" && 2; // result is assigned 2
```

To understand what's going on here, we have to remember about falsey values. In the example above, the following values are falsey:

- `""` (empty string)
- 0

The following values are truthy:

- `"foo"` (non-empty string)
- 2

The `&&` will return the first falsey value it finds.  If all values are truthy, it will return the last truthy value.

##### `||`

`||` is the opposite:

```js
const result1 = "" || "foo"; // result is assigned "foo"
const result2 = 2 || 0; // result is assigned 2
const result3 = "" || 0; // result is assigned 0
```

It will return the first truthy value in the chain.  If all values are falsey, it returns the last falsey value.

#### Exercise

Without running the following code, see if you can guess what the values of the variables will me.  Then run the code to see if you're right:

```js
const result1 = "bar" && "foo";
const result2 = false || 243;
const result3 = 42 && false;
const result3 = myVar || 3000;
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
```

### Optional Chaining

Explanation: Describe optional chaining for safely accessing nested object properties.
Exercise: Provide a nested object and have students access deep properties using optional chaining.