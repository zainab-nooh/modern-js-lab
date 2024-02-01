tktk moving the original writeup here as we might want to include these instructions in the exercise


### `import` and `export`

Exporting and Importing in JavaScript is accomplished with the `import` and `export` syntax.  

Create two files: `exportingFile.js` and `importingFile.js`:

```bash
touch exportingFile.js
touch importingFile.js
```

Also, you'll need to initialize a node project:

```bash
npm init -y
```

Now add the following property to `package.json`:

```json
"type":"module",
```

In `exportingFile.js` add the following:

```javascript
export default 'Matt'
```

In `importingFile.js` add the following:

```javascript
import name from './exportingFile.js'
console.log(name)
```

Run `importingFile.js` like so:

```bash
node importingFile.js
```

You'll notice the keyword `default` in `exportingFile.js`.  You can export multiple values, but make one of them the default value that is exported.  This is what we did here.  To export additional values, update `exportingFile.js` like so:

```javascript
export default 'Matt'
export const age = 43
export const job = 'programmer'
```

Now you can import those additional exports by updating `importingFile.js` like so:

```javascript
import name, { age, job } from './exportingFile.js'
console.log(name, age, job)
```

When exporting additional variables, simply declare the variable like normal, and prepend the declaration with `export`.


### Default parameters

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