---
name: "World Countries and their Flags with Javascript"
description: "This is an app that contains the list of all the countries in the world with their names and flags"
author: "@Taiwrash"
---

## Country List

![Sample Page](https://cloud-g6yi6cyg3.vercel.app/0untitled.png)

This is the [Live Demo](https://country-list.taiwrash.repl.co) of the app and [Full Code](https://repl.it/@Taiwrash/country-list).

_We recomend any browser and good network andor internet access._

In this workshop we will be using the [restcoutries.eu](https://restcountries.eu) rest API to fetch all the flags and the countries name using vanilla javascript.

### What is API?

API is an acronym of Application Programming Interface (API) which gives quick access to web app development. A web app is a webpage that is dynamic. For example mere loading of a webpages is `GET` request sent to a server or an API while submitting any kinds of form is a `POST` request. [Watch this Here](https://www.google.com/url?sa=t&source=web&rct=j&url=https://m.youtube.com/watch%3Fv%3DGZvSYJDk-us&ved=2ahUKEwj3h-2irr_sAhVPqxoKHUwZCGcQt9IBMBF6BAgKEAg&usg=AOvVaw1GsR5vTK377whoesahekss)
### The Features/Sections Are

- Flag Section
- Country Name Section
  Each Country will be placed in their respective card represented as <div> element.

## Mark Up Section (Setting up the HTML)

We will be using very simple and easy to understand html elements as display below and also our `css` and `script` files will be linked externally

```
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

**NOTE:** `You can copy paste the code above` But, never copy paste a non-clear code or the code you did not understand. A brief explanation of the html boilerplate at the top is as simple as having `css` file linked at the `head` section of the html along with the title element to show web title and the main element for the purpose of semantic and web page accessibilties. Followed by a div with a class attribute of card which shall hold every country flags and names and lastly linked with a javascript `script` file that will do all the magic, just before the body closing tag.

# The StyleSheet

- Clearing Default Style

```
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
```

This is purposely to remove the default margin and padding of every element and to set the box-sizing to border-box which controls behaviour activities of every elements on the page. This prevent default addition of margin and padding to the width and height.

- Styling Main Content area

```
  main {
  width: 100vw;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  }
```

Both the width and height are set to the view width and view height of the viewing device. It is display flex (Flex is a new feature in css that encourage and improve responsiveness of every web pages) you can read more at [Read more Here](https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/amp/&ved=2ahUKEwiX0LzIrL_sAhWsyIUKHRveA2EQFjAkegQIGhAB&usg=AOvVaw1L3IU0DUtdahRsgB-n5vBS&ampcf=1)


- Styling the Card

```
  .card {
  width: 40%;
  height: 200px;
  }
```

This will take 40% of the main content area that is the 40% of 100vw and a height of 200px. Percentage is accepted purposely to make a fluid design which is the starting point for Responsive Web Design (RWD).

- Styling the flag size

```
img {
  width: 100%;
  height: 150px;
  }
```

Given width and height to the flag size. 100% of the card size.

- Styling the country names

```
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

The font size and type are set and spacing were set using padding and margin with a gainsboro color for the text.

# The Script part and the magic section

```
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
     });
    });
```

**_ This is the code that did all the magic and I will be expalining what each section is doing one after the other _**
As the window loads a fuction get called, where main, card and cardParent are set for DOM manipulation.

```
  const main = document.getElementById("main");
```

`main` variable is bringing our <main> tag into DOM from html page using the `id` assigned to the element.

```
 const card = document.querySelector(".card");
```

`div` with the class attribute of card was also bring to the DOM using `querySelector` method.

```
 const cardParent = document.createElement("div")
```

Lastly, a new `div` was created using the `create element` method of javascript.

```
 const API = `https://restcountries.eu/rest/v2/all`;
```

API variable was created to keep and save the base url gotten from [restcountries.eu](https://restcountries.eu).

```
  fetch(API)
```

Then javascript fetch method was invoked with the argument/parameters of base url.

### What is Fetch?

fetch is one of the way of making `HTTP` calls. http calls are numerous ranging from `GET`, `POST`, `DELETE` among nine (9) others which are not the scope of this `WORKSHOP`. Fetch method return a promise.

### What is a Promise?

Promise is that object that may produce single value in the future. Response which denote fulfilment or rejection that is success or failue which is handle in javascript with `.then() method`.

```
  .then((res) => {
     return res.json();
   })
   .then((data) => {
```

The response was converted to json through the first promise returned. The last promised return data from the url and the data was loop through.

```const flagImage = document.createElement("img");
        flagImage.setAttribute(
          "src",
          `https://restcountries.eu/data/${item.alpha3Code.toLowerCase()}.svg`
        );

        const countryName = document.createElement("p");
        countryName.textContent = item.name + " | " + item.currencies[0].name;

        cardParent.appendChild(flagImage);
        cardParent.appendChild(countryName);
```

Inside the loop `flagImage` which is the image of the flag and `countryName` which was the paragraph element for the name was created using javascript create element method. The textContent was used to put in the text from the API to the <p> tag which was created with DOM. both are append into cardParent and later append and render out in the card element using the javascript `appendChild` method.

### What is appendChild method

It is basically DOM method that is used to move an element from its current position to another new position as the flagImage and countryName elements were moved to parentCard and parentCard element was moved to card element.

**_ This is basically to show how it is easy and play around with javascript when working with vanilla javascript _**

other live demo and extension.

[three layered country list app](https://rasheedtaiwo.github.io/day16)

[country list app with amazing style](https://devmukhtar.github.io/workshops)
