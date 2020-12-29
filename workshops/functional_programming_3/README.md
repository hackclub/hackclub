---
name: 'Functional Programming with JS (Part 3)'
description: 'Learn how to deal with arrays in Functional Programming with Ramda!'
author: '@bajpai244'
---

Welcome to the workshop. This is part-3 of the functional programming with js series.

In this part, we will learn how to work with Arrays in Functional Programming. If you haven’t gone through [part-2](../functional_programming_2) then I strongly recommend checking it out first.

<img alt="Functional Programming Intro" src="https://cloud-id64d2gzs.vercel.app/0image.png" width="400px" />

This workshop should take around **_30 minutes_** to complete.

## Prerequisites

The workshop is for anyone familiar with:

- Javascript
- How to run a Node.js program
- General programming concepts

<img src="https://cloud-83pmg6qma.vercel.app/0image.png" alt="jsimage" />

You don't need to be a Guru in these topics, a basic understanding of them is more than enough!

## Workspace

### Fork It :-

I will be using [repl.it](https://repl.it/) as my workspace for this workshop, You can fork my repl from [here](https://repl.it/@HARSHBAJPAI1/Arrays-with-Ramda#index.js).

### Nah! would do it myself (:

Or you can setup your own repl, make sure you create a node.js repl, and install the ramda package ( not rambda, because it too exists! )

### Search Ramda

search for ramda in repl, make sure you don't search rambda ( because it too exists! ).

<img src="https://cloud-fhfy1btje.vercel.app/1ss1_1_.png" alt="replt help-1 image" width="" />
<br/><br/>

### Install It

Now, install it! Click the Run button to run your program.

<img src="https://cloud-ixtk94biz.vercel.app/0group_7.png" alt="replt help-2 image" width="" />

If you prefer to work offline, then install ramda via

```vim
npm install ramda
```


## Hello Ramda!

So, we have already discussed Ramda in our [first part](../functional_programming_1). We will use its pre-built functions to implement functional programming. No one wants to re-invent the wheel ( although some people might! ) and wants to make the car instead.

<img src="https://cloud-847umy3yj.vercel.app/0image.png" alt="Ramda js Image" width="500px" />

The same goes here, we are leveraging the pre-built functions from Ramda to boost our development process!

## Arrays 👀

Okay, so Arrays are one of the most used data structures in programming. Now, let’s first start by thinking about what are the operations that are associated with Arrays.

<img src="https://cloud-q139hxihe.vercel.app/0image.png" alt="Arrays Everywhere meme Image" width="" />

To be honest, there are too many! right? So let’s list some basic operations that we do with Arrays:

- We loop through them.
- We reduce an Array to a single value.
- We filter out some values from Arrays.
- We remove duplicate entries from the Array.
- We do certain transformation on every item of an Array.

There are many others. But, for the sake of simplicity, I am showing you some which are regularly used.

My goal here is to teach you the basic approach towards Array in functional programming, so that you can figure out the rest on your own, So, let’s get started.

## map 🗺️

Okay, sometimes we need to do some calculations on each item of an Array and need the Array with updated items after transformation, for example, An Array containing square of every number in an Array.

We generally use loops for doing it. But, remember in functional programming we don’t use loops.

<img src="https://media.giphy.com/media/Okh1vMtMT1HG4MhC2h/giphy.gif" alt="did you forget meme" width="" />

We have a function _map_ in Ramda, it’s first parameter is a **function that receives each item of the array which is passed as the second parameter to the map function.**

Map returns a new Array ( because in functional programming data is immutable ), the value of each item in the returned Array is **the value returned by the function in the map parameter for the corresponding index item in the original Array (passed as second Argument to map).**

<img src="https://media.giphy.com/media/ZNnQvIYzIBmZAbrBR7/giphy.gif" alt="confusing meme" width="" />

I know it sounds confusing! Let's take a practical example to understand it better.

Let’s create a program to create a new array containing the square values of a given Array.

```js

const _ = require('ramda')

const numbers = [1,2,3,4,5]

const ret_sqr = (num) => num*num // return square of a given number

const square_list_generator = _.map(ret_sqr) // _.map takes the ret_sqr function as first parameter, here the concept of Currying is being used, go to part 2 to understand currying

const squares = square_list_generator(numbers)

// square_list_generator will loop through numbers array and provide each item to ret_sqr function
// the value returned from ret_sqr will be the value of the new Array returned by map for the given index
// so when 1 is passed to numbers ret_sqr by map, the value of new array returned by map at index 0 will be 1*1 i.e 1
// similarly when 2 of numbers will be passed the value of new array returned by map at index 1 will be 2*2 i.e 4

console.log("The square array is",squares)
// Output :- The square array is [ 1, 4, 9, 16, 25 ]

```

So, now let me just summarize what happened in the above case:

- _.map(function, array) takes a function that will iterate over each value of the array provided as it’s second argument.
- Because we are using Ramda, **therefore _.map() is curried functions** ( in-built functions of Ramda are already Curried  )
- Therefore we can provide _.map one argument at a time.
- square_list_generator stores the function returned from \_.map(ret_sqr). {because of Currying}
- square_list_generator when provided data will now return a new Array containing the square of each number ( New Array because data is immutable in functional programming ).
- This new Array is obtained by calling **ret_sqr** on each data item of numbers ( Array ) and storing the value returned from it ( which is square of a number ) for the given index in the new Array.


Below is a graphical representation of what is happening in the above case

<img src="https://cloud-f9yugz7dg.vercel.app/0group_11_1__1.png" alt="map working image" width="" />
<br/><br/>

## filter

It does what its name says, It uses a function to filter out items from an Array. The function is in the following format:

```js

 filter( func, arr ) // returns a new filtered Array

```

Here the function **func** receives each item from the Array **arr**, for the items it returns false are not part of the new filtered Array, **if it returns true for an item then it is part of the new filtered Array.**

Let’s take an example to demonstrate it:

```js

const _ = require('ramda')

const numbers = [1,2,3,4,5,6,7,8,9]

const isOdd = (num) => (num%2) != 0 // returns true if an element is odd

const oddArr = _.filter(isOdd,numbers)

// we can also pass one argument at a time via Currying!
//I have already demonstrated that in the map example

console.log("The odd array is", oddArr)

// output : The odd array is [ 1, 3, 5, 7, 9 ]

```

## forEach

forEach simply iterates over a given Array and calls function on its each item.

This is forEach’s format:

```js

forEach(func,arr) // func is called for every item of arr

```
A good example ( of using it ) would be if you want to print every item of an Array. Here is how you can do that with forEach:

```js


const _ = require('ramda')

const numbers = [1,2,3,4,5,6,7,8,9]

const printe = (num) => console.log(num) // print's an item

_.forEach(printe,numbers) // we can use one argument at a time via Currying (:

```
forEach returns the original Array passed to it.

## reduce

reduce transforms an Array to a single value. In reduce we pass three things to it:

1. A function
2. An accumulator
3. The Array

This is how its format looks like:

```js

reduce(func,acc,arr) // func -> function, acc -> accumulator , arr -> array

```
## what is this accumulator?

The accumulator is a value **that is passed to the function along with the Array item.** The value that the function returns is the new value for the accumulator and will be passed back again to the function in the next iteration.

This cycle keeps on going until unless the iteration is done.
The last value returned by the function is the total accumulated value during the whole iteration **and is the value that our reduce function will return.**

<img src="https://media.giphy.com/media/l2Je8VO5hSPEsLdMA/giphy.gif" alt="accumalator gif" width="" />

The first argument of the function is the accumulator and the second argument is the Array item.

```js

func ( acc, item )  // acc -> accumalator and item -> array item

```

Let me just jump to some code to illustrate the art of reducing!

```js

const _ = require('ramda')

const numbers = [1,2,3,4,5,6,7,8,9]

const add = (acc,item) => acc + item // adds accumalator and array item

const sum  = _.reduce(add,0,numbers) // add is the function, 0 is accumalator, and numbers is the array

console.log("Sum of the Array items is",sum)

```

The above program prints the sum of all the items in the **numbers** Array.

Here each value is passed to the function **add** and the accumulator value is 0 during the 1st iteration, **add** adds the accumulator and the Array item and the value which it returns becomes the new value for the accumulator (for the next iteration).

This way by the end of the iteration the value it returns comes out to be the sum of all items in the  Array **numbers.**

## Where is the index?

Sometimes, we need to have the index of the Array item with which we are dealing with. Don’t worry we have **addIndex** for it in Ramda.

<img src="https://media.giphy.com/media/3oEjHOezvV1v2GN07S/giphy.gif" alt="Where GIF" width="300px" />

addIndex will take any of your iteration functions like map,forEach,reduce, etc, and will convert it into a new indexed Array iteration function.

I know code is the best language to sing the melody of programming ( If it sounds interesting then it's my creativity at its best, if not then just consider it a typo 😂 )

Okay, so let’s take an example to demonstrate this idea.


```js

const _ = require('ramda')

const numbers = [1,2,3,4,5,6,7,8,9]

const print = (num,index) => console.log("Number is",num," Its index is", index) // print's the item and it's index

const forEachIndexed = _.addIndex(_.forEach)

forEachIndexed( print,numbers) // we can use one argument at a time via Currying (:

```

In the above case, we converted forEach to forEachIndexed via _.addIndex function.
The **print** function now receives two arguments 1st is the Array item and the second one is the index of the item.

## Conclusion!

Here, we discussed how to use Arrays with Ramda. The benefit of using Arrays with Ramda is that you can easily curry these Array functions and can create some beautiful Reusable functions which in turn will make your codebase modular!

## Explore!

Ramda has a universe of functions to deal with Arrays, go to its docs and search for functions labeled list ( you can type list in the search bar ). Try learning some more functions from there because learning must never stop!

<img src="https://cloud-hyxvls54w.vercel.app/0image.png" alt="Explore Image" width="400px" />

## Thanks!

This was my small introduction to Arrays with Ramda for you, If you want to plunge deep into it and want to know how the wheel itself is made, then go to a magical place known as the internet (shhh! It’s a secret), there lies your answer!

Thanks, for taking out the time to go through this workshop of mine, It makes me really happy when I can teach people something new and interesting. Thanks once again!

<img src="https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif" alt="Thanks Image" width="" />

If you have any doubts or queries regarding this workshop then reach out to me on Hack Club's Slack, My username is Harsh Bajpai!
