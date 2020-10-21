---
name: "Countries  of the world and their Flags with Javascript"
description: "This is an app that contains the list of the names of all the countries in the world and their respective flags and currencies"
author: "@Taiwrash"
---

## Introduction

Building an application that fetches data from an API is always done with a framework or a librabry in javascript for easy implementation. The procedure is a simple one! And I will be showing you how to do this purely with javscript. Amazing, right? Below is what we are going to build within a very short time.

[![Sample Page](https://cloud-g6yi6cyg3.vercel.app/0untitled.png)](https://country-list.taiwrash.repl.co)

Here is the [Live Demo](https://country-list.taiwrash.repl.co) of the app and the [Full Code Here](https://repl.it/@Taiwrash/country-list).

## Setting up the code environment

If you would like a smooth and easy development and production without installing any desktop software, check our [repl.it](https://repl.it/languages/html). A development and production environment will be set for you in a few seconds.You should have a page like the one below.

![Repl.it](https://cloud-be2z8hzbo.vercel.app/0image.png)

You can otherwise install any offline desktop code editor of your choice instead (like Visual Studio Code, Sublime text or any other one you prefer).

## Prerequisites

- Good internet access
- Basic knowledge of:
  - HTML
  - CSS
  - Javascript

In this workshop, we will be using the [restcountries.eu](https://restcountries.eu) rest API to fetch all the flags and the country names using vanilla javascript.

## What is API?

API stands for Application Programming Interface, (API), which provides a quick access to web-app development. A web-app is a webpage that is dynamic. For example, loading a webpage is simply a `GET` request sent to a server or an API while submitting any kind of form is a `POST` request. [Read More Here](https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/watch%3Fv%3DGZvSYJDk-us&ved=2ahUKEwj3h-2irr)

## The features to be developed are:

- The country flags
- The country names
- And their respective country's currency
  Each country's features will be shown in it's respective card, represented as a <div> element.

## Mark Up Section (Setting up the HTML)

We will be using very simple and easy to understand html elements as display below and also our `css` and `script` files will be linked externally( that is creating a separate files for them)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Country List App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main id="main">
      <div class="card"></div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

**NOTE:** `You can copy paste the code above` But, never copy-paste a non-clear code or the code you did not understand. A brief explanation of the html boilerplate at the top is as simple as having `css` file linked at the `<head>` section of the html along with the title element to show web title and the main element for the purpose of semantic and web page accessibilities. Followed by a <div> element with a class attribute of card which shall hold every country flags and names and lastly linked with a javascript `script` file that will do all the magic, just before the </body> closing tag.

## The StyleSheet

- Clearing the default style

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

This is done to remove the default margin and padding of every element and to set the box-sizing to border-box, which controls the behavioural activities of every elements on the page. This prevents the default addition of margins and paddings to the width and height.

- Setting the style of the main content area

```css
main {
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
```

This sets the view height and width to the view-height and the view-width of the user's device. It is termed "display flex"(Flex is a new feature in css that improves the responsiveness of web pages). You can learn this under 5 minutes at [CSS Flex under Five Minutes](https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/amp)

- Setting the size of the cards

```css
.card {
  width: 40%;
  height: 200px;
}
```

This will dedicate 40% of the main content area to the width of the card (set as 100vw), and sets the height of the card to `200px`. The allocation is specifically done with a percentage to make it a fluid design, which is essential for a Responsive Web Design (RWD).

- Setting the size of the flags

```css
img {
  width: 100%;
  height: 150px;
}
```

This makes the width of the flag the same as that of the card, and sets the height to `150px`.

- Editing the country names

```css
p {
  width: 100%;
  height: 40px;
  background-color: darkslategrey;
  color: gainsboro;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  padding: 5px;
  margin-bottom: 20px;
}
```

The font size and type are set with the lines of codes above, and the spacing is also set with the padding and margin commands. The texts are coloured in gainsboro.

## The Script part and the magic section

```js
  window.addEventListener("load", (e) => {
  const main = document.getElementById("main");
  const card = document.querySelector(".card");
  const cardParent = document.createElement("div");

  const API = `https://restcountries.eu/rest/v2/all`;
  fetch(API)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let item;
      for (let i = 0; i < data.length; i++) {
        item = data[i];

        const flagImage = document.createElement("img");
        flagImage.setAttribute(
          "src",
          `https://restcountries.eu/data/${item.alpha3Code.toLowerCase()}.svg`
        );

        const countryName = document.createElement("p");
        countryName.textContent = item.name

        cardParent.appendChild(flagImage);
        cardParent.appendChild(countryName);
      }
```

** This is the code that does all the magic you see when you press the play green button on repl.it (or when you run your code on your editor) at this point as it is the complete code for the application. However, I will be expalaining what each line of code does, one after the other **

As the window loads, a fuction gets called. Where main, card and cardParent are set for DOM manipulation.

```js
const main = document.getElementById("main");
```

`main` variable is bringing our `<main>` tag into the DOM from html page using the `id` assigned to the element.

```js
const card = document.querySelector(".card");
```

`<div>` element with the class attribute of card, is brought to the DOM using **`querySelector`** method. `QuerySelector` returns the first element that contains the attribute passed in HTML.

```js
const cardParent = document.createElement("div");
```

Lastly, a new `<div>` element is created using the **`create element`** method of javascript.

```js
const API = `https://restcountries.eu/rest/v2/all`;
```

API variable is created to keep and save the base url which is gotten from **[restcountries.eu](https://restcountries.eu)**.

```js
fetch(API);
```

Then, the javascript fetch method was invoked with the argument/parameters of the base url.

## What is Fetch?

Fetch is one of the way of making `HTTP` calls. HTTP calls includes `GET`, `POST`, `DELETE` among nine (9) others, which are not the scope of this workshop. The fetch method returns a promise.

## What is a Promise?

A Promise is an object that may produce a single response in the future. Such responses denote a fulfilment or rejection (i.e. success or failue), which is handled in javascript with the `.then() method`.

```js
  .then((res) => {
     return res.json();
   })
   .then((data) => {
```

The response was converted to json by the first promise returned. The last promise returned a data from the url and the data was looped through.

```js
const flagImage = document.createElement("img");
flagImage.setAttribute(
  "src",
  `https://restcountries.eu/data/${item.alpha3Code.toLowerCase()}.svg`
);

const countryName = document.createElement("p");
countryName.textContent = item.name + " | " + item.currencies[0].name;

cardParent.appendChild(flagImage);
cardParent.appendChild(countryName);
```

Inside the loop `flagImage`, which is the image of the flag, and `countryName`, which is the paragraph element for the name, was created using the javascript `create element` method. The textContent was used to put in the text from the API to the `<p>` tag which was created with DOM. Both were appended into cardParent, then later appended and rendered out in the `card element` using the javascript `appendChild` method.

## What is the appendChild method

It is basically the **`DOM`** method that is used to move an element from its current position to another new position as the `flagImage` and `countryName` elements get moved to `parentCard`, while the parentCard element was moved to `card` element.

_WAW!_ You just built a web-app that fetches data from external API using pure (vanilla) Javascript. And your page should look like the image below.

[![Sample Page](https://cloud-g6yi6cyg3.vercel.app/0untitled.png)](https://country-list.taiwrash.repl.co)

** This is basically to show how easy it is to play around with javascript when working with vanilla javascript and API **

## What Next?

Remember to share the URL you got after pressing the green play button on repl.it on the #ship channel

Below are the list of what can be done on this particular project to improve and have more hacks! It's good to try them out for a challenge.

1.  Changing the app layout by giving a new look to the app colours and styles.

2.  A filter bar can be included at top to search for a particular country.

3.  Adding a dark mode to the app will increase the accessibility

4.  More creative ideas can be implemented with your imagination.

5.  More data can be fetched from the API like the country codes, currency, populations, currency symbols and other tons of data are available.

## Other Hack Examples!

- [Country list app with gradient background by DevMukthar](https://devmukhtarr.github.io/workshops)

- [Three layered country list app by Taiwo](https://rasheedtaiwo.github.io/day16)

- [Advance hacks with continent filter](https://world-countries12.netlify.app)

- [Advance with dark mode enabled and search](https://lookup-a-country.netlify.app)

## Conclusion

This is the end of the workshop and I believe you've been able to build and learn how to work with API using pure Javascript also know as vanilla JS. I wish you all the best in all your upcoming Hacks. Enjoy!
