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