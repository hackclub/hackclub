---
name: 'Functional Programming with JS (Part 1)'
description: 'Learn the basics of functional programming with JS!'
author: '@bajpai244'
---

Welcome to the workshop. This is part 1 of the functional programming with js series, this workshop will discuss what is functional programming, why we need it?, and the basics of functional programming.

This workshop will serve as an introduction to the upcoming parts of this series.

<img alt="Functional Programming Intro" src="https://cloud-id64d2gzs.vercel.app/0image.png" width="400px" />

This workshop should take around **_20 minutes_** to complete.

## Prerequisites

The workshop is for anyone familiar with:

- Javascript
- General programming concecpts

<img src="https://cloud-83pmg6qma.vercel.app/0image.png" alt="jsimage" />

You don't need to be a Guru in these topics, a basic understanding of them is more than enough!

## What is functional programming?

Okay, so you have been coding for a pretty long time and you have been hearing people talk about this mysterious beast called functional programming.

Do you wonder what it is? let me provide a simple and clear definition of functional programming for you.

<img src="https://media.giphy.com/media/apvx5lPCPsjN6/giphy.gif"  alt="what is it GIF"/>

Functional programming is a way of writing your programs ( a paradigm ) so that your code is:

- Clean
- Readable
- Less Error-Prone
- Easy to Debug

## Why should I even learn functional programming?

To start with something, we deep down need a reason to get ourselves going. So, let me tell you why you need to learn functional programming.

<img src="https://media.giphy.com/media/1jajMAVf2vN9KxoFfw/giphy.gif" alt="tell me why gif" width="" />

We all write code and often find ourselves in messy situations. Like, we don’t understand what the flow of the program is, how is it even working, debugging almost kills most of our time.

The reason why these things happen is that we lack a paradigm for our programming style. A paradigm brings order to our programming, making our programming style more predictable, easy to debug, and easy to share.

<img src="https://media.giphy.com/media/RGRkDWsTGvdUaQTO0z/giphy.gif" alt="I get if GIF" width="" />

There are many programming paradigms like Imperative programming, Object-Oriented Programming, Functional Programming, etc.

<img src="https://cloud-h4li5m1hj.vercel.app/0image.png" alt="different types of programming languages image" width="400px" />

People advocate their love for different programming paradigm and so do I. Functional Programming is my favorite as it offers a cleaner and a smaller codebase and offers great predictability of code!

## Let’s take the plunge!

Now, you finally know why you need to learn this programming paradigm so let’s take a deep plunge into the realm of functional programming!

<img src="https://media.giphy.com/media/5zkZRNNb7WW8B9iN3Q/giphy.gif" alt="plunge gif" width="" />
<br/><br/>

## Functional programming is based on Lambda Calculus (λ)

[Lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus) is the mathematical foundation on which the functional programming paradigm is built. We don’t need to understand its mathematical implication although.

<img src="https://cloud-qlxm58ybs.vercel.app/0image.png" alt="Lambda Symbol Image" width="400" />

The reason I am telling you about it is a lot of time functional programming is accompanied by the Lambda Symbol (λ) and this Lamda basically represents the fact that it is based on lambda calculus (see, now you know it!).

## What makes a language a Functional Programming language?

Although there can be a lot of specifications on what makes a language functional, for simplicity’s sake considered any programming language which has [higher-order functions](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)  **is a functional programming language.**

## What are higher order functions?

Higher-order functions are functions that can either or both take a _function as a parameter ( i.e argument ) or can return a function._

<img src="https://cloud-3cfa7ltpu.vercel.app/0image.png" alt="Higher order function Image" width="450px" />

Higher-order functions exist in JavaScript which makes it eligible to qualify as a functional programming language.

## Functional programming does not allow loops!

I know it is hard to believe,  but when you are writing your code functional programming paradigm then you don't use loops!

<img src="https://media.giphy.com/media/ylMF2SwbAotLa/giphy.gif" alt="What do I do then GIF" width="" />
<br/><br/>

### So, what do I use instead of loops then?

 We use **Higher-order functions and recursion** to mimic loops. Loops are ugly and make code hard to understand. So, we use Higher-order functions and recursion for the job, which makes our code a lot more cleaner!

 <img src="https://cloud-2tzqnkbqc.vercel.app/0image.png" alt="programming without loops image" width="400px" />

 We will be using a Javascript library ( will discuss it in a later section of this workshop ) to assist us in writing functional programming code and mimic this behavior!

 Let me give you an example of what it will look like, these topics are discussed in details in the latter part of this series, this example will be more than enough to show you how clean functional programming can make your code look.

The below is a program to print squares of elements of an Array, it is implemented via loops.

 ```js
/* Program to print square of number via loops */

const numbers = [1, 2, 3, 4, 5]
const squares = []  // will store the squares of the numbers of array numbers
let i;

for (i = 0; i < numbers.length; i++) {
    squares[i] = numbers[i]*2
}

for (i = 0; i < squares.length; i++) {
    console.log("The square of",numbers[i],"is =",squares[i])
}

 ```
The below is a program to print squares of elements of an Array, it is implemented via functional programming.

 ```js
/* Program to print square of number via functional programming */

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(ele => ele * 2) // stores the squares of the numbers of array numbers

squares.forEach((square, i) =>
    console.log("The square of", numbers[i], "is =", square))

```
### What is map and foreach doing here?

You don’t need to worry about them, **they are Higher-order functions to mimic loops.** We will be discussing the programming part from the next part of the series. There they will be made more clear.

## Functions are Pure!!!

In simple words, they only depend on the arguments passed to them and always produce the same output for a give a given input! Meaning you should not use any variable value apart from your function’s input to calculate its output.

<img src="https://cloud-3rfz3uikb.vercel.app/0image.png" alt="Pure functions image" width="500px" />

In simple words, they only depend on the arguments passed to them and always produce the same output for a given input! Meaning you should not use any variable value apart from your function’s input to calculate its output.

## The data is immutable!

In functional programming we create values, which we then provide as inputs to our functions for processing, Now if these functions want to do some transformation to the object’s state, then they create a new object and initialize it with the transformed value.

<img src="https://cloud-gjx9bz2g3.vercel.app/0image.png" alt="Immutablity Image" width="450px" />

This value will be returned by the function without changing the original input object’s state. This gives birth to immutability! ( In the next parts of this series we will elaborate on it via some code examples! )

## No side-effects allowed (:

Changing state outside of a function is referred to as a side effect.

<img src="https://cloud-eklk947ki.vercel.app/0group_5.png" alt="no side-effects image" width="500xp" />


This means, that a function cannot change any state outside of the function. This makes sure that our code is free from the issues that regularly occur in programs due to functions having side effects.


## What is Ramda?

[Ramda](https://ramdajs.com/) is a functional programming library for Javascript that we will use throughout this series to implement functional programming in Javascript.

<img src="https://cloud-847umy3yj.vercel.app/0image.png" alt="Ramda replacement" width="500px" />

## Introduction ends here!

Yes, this was your introduction to the most atomic concepts of functional programming. We are ending this part here so that we don’t throw up a huge chunk of knowledge to you that you can’t digest. We want to go slow and steady so that the knowledge we provide is sustainable for a longer duration.

<img src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif" alt="you did it" width="350px" />

The next part of this series will start with the programming part, there you will learn many new concepts ( and also the already discussed one ), and will learn how to implement them in Javascript.

## Move to the next workshop!

Now, the introduction is complete and I would strongly suggest moving to the next part of this series. If, it is not available yet then wait for a day or two and it will be there. Thanks for taking the first step towards becoming a functional style programmer!

<img src="https://media.giphy.com/media/Utb0UgaFiCnpFB7Sm4/giphy.gif" alt="here I come GIF" width="" />
