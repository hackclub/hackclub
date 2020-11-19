---
name: 'Hash Code Generator'
description: 'Build a hash code generator using nodejs'
author: '@tanishq-soni'
img: 'https://cloud-3ylo4n79q.vercel.app/03.1.png'
---

# Hash code generator 
In this workshop, you will build a Hash code generator app using Nodejs.

Hashing is the process of converting a given key to another value. A hash function is used to generate the new value according to a mathematical algorithm.

You will make something like this 👇

![final demo](https://cloud-apjvaajlp.vercel.app/0hasher.gif)

[check out the demo of the final product](https://repl.it/@tanishqsoni/hash-generator)

## Getting Started 🚀

### Part 1: The Prerequisites
To get started, you should have a basic knowledge of:

- JavaScript
- Node.js

### Part 2: The Setup
To set up a coding environment, I suggest you use [Repl.it](https://repl.it) as it sets everything for you with just one click.

To get started, go to https://repl.it/languages/nodejs .

It looks like this 👇

![node repl](https://cloud-55hkgt3b2.vercel.app/01.png)

### Part 3: Building the App

For building the app you'll write your code in the `index.js` file present in repl.

![index.js](https://cloud-55hkgt3b2.vercel.app/12.png)

***So let's begin*** 💨

So firstly you need to import [`crypto`](https://nodejs.org/api/crypto.html#crypto_crypto) module.

The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

To access the module you need to use
```javascript
require('crypto')
```
So, you need to create a variable `crypto` and require the `crypto` module.

```javascript
var crypto = require('crypto');
```

As you need to take input from the user so, you will use the built-in [`readline`](https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/) module which is a wrapper around Standard I/O, suitable for taking user input from the command line(terminal).

To access the module you need to use
```javascript
require('readline')
```
So, create a variable `readline` and require the `readline` module as well.

```javascript
var readline = require('readline');
```

Now, you need to create an instance of the `readline` module by configuring the readable and writable streams.

So, for that you need to write some code:

```javascript
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```
Don't get scared, it's an easy thing!

You have to create a variable `rl` and use `readline.createInterface()` which is used for creating an instance of readline as we discussed above.

The `input` key takes a readable stream like `process.stdin` and the `output` key takes a readable stream like `process.stdout`.

Your code so far:
```javascript
var crypto = require('crypto');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
```

Now, you need to ask query to the user, like 
- `Type your text :`
- `Your text:` 
- `Text :`

for that you need to write some code:

```javascript
rl.question('Text : ', function(txt) {
  rl.close();
});
```

In the above code, the `rl.question()` method displays the query by writing it to the `output`, waits for user input to be provided on `input`, then invokes the `callback` function `function(txt)` passing the provided input as the first argument.

Do remember to use `rl.close()` to close the transmitting otherwise the process will be left in the idle state.

![input method](https://cloud-5qyk5c2kd.vercel.app/0nohapns.gif)

As you can see the `readline` module is working perfectly and now you need to work on the `crypto` module.

In this workshop, you will convert your text in `SHA1`

for that you need to write some code:

```javascript
var sha1 = crypto.createHash('sha1').update(txt).digest('Hex');
```  

Crypto has a method called `createHash` which allows you to calculate a hash as we passed `sha1` so it will generate `sha1` code.

The `update` method is used to push data to later be turned into a hash with the `digest` method. `update` can be invoked multiple times to ingest streaming data, such as buffers from a file read stream. The argument for `digest` represents the output format and may either be "binary", "hex" or "base64". It defaults to binary.

To print the hash you need to do `console.log()`.

```javascript
console.log("sha1 code : " + sha1);
```

The above two lines of `crypto` code should be inside the `rl.question();`

*what! you completed?? ummm yes*

Yayyy 🎊! You are done!!

Your final code:

```javascript
var crypto = require('crypto');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Text : ', function(txt) {
  var sha1 = crypto.createHash('sha1').update(txt).digest('Hex');
  console.log("sha1 code : " + sha1);  
  rl.close();
});
```

![final output](https://cloud-qvpv0fdpw.vercel.app/0finalgif.gif)

### Hooray!🎉
You finished the Hash Code Generator Workshop!

### ⚡ What's Next?
Now, how you can expand it? Try adding some other features to it with the help of [Crypto Guide](https://nodejs.org/api/crypto.html)

Here are some examples 👇

- create an`md5` hash generator.
- create a `sha256` hash generator.
- create an app using ciphers.
- use [chalk](https://www.npmjs.com/package/chalk) & [boxen](https://www.npmjs.com/package/boxen) to beautify the app.
- create an app that generates multiple hashes at once.

### ⭐ Live examples with code

[**MD5 Generator**](https://repl.it/@tanishqsoni/md5-hash)

[**SHA256 Generator**](https://repl.it/@tanishqsoni/sha256-hash)

[**All-in-one Hash Generator**](https://repl.it/@tanishqsoni/all-in-one-hash)
