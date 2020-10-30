---
name: "Filter Machine with Javascript"
description: "Build search bar in your applications using pure javascript"
author: "@Taiwrash"
---

## Filter Machine

![Sample Page](https://cloud-l9u3rh4d3.vercel.app/0page.gif)

This is the [Live Demo](https://filter-machine.taiwrash.repl.co) of the app and [Full Code](https://repl.it/@Taiwrash/filter-machine).

## Prerequisites

- Good internet access
- Basic knowledge of:
- HTML
- CSS
- Javascript

## What we are Building

In this workshop we will be building a filter bar which responds to a user’s search in real time using vanilla javascript.

### The App features

- Seacrh Area
- List of Item to be Filtered (in this case: a box containing letters of the English Alphabet)

## Where to write all the code?

This Project was developed through the [repl website](https://repl.it/) chosing the `html/css/js` as the coding language, which is easy to use. kindly sign up if you don't have an account yet. Our code in this workshop will be structured in three different files:

1. `A HTML file (index.html)`: This contains all the html codes
2. `A CSS file (style.css)`: This contains all the css codes
3. `A SCRIPT file (script.js)`: This contains all the javascript code

## HTML Code

Below are the simple and easy to understand html codes we will be using. It consists of the default `html boilerplate`, to which the `css file` and the javascript file` was linked. Here are the HTML codes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>workshop filter search bar</title>
  </head>
  <body>
    <main>
      <header>
        <h2>This is Filter Machine written in Vanilla Js</h2>
        <div class="form-area">
          <form>
            <input
              type="search"
              placeholder="Type Here to filter the List"
              autofocus
            />
          </form>
        </div>
      </header>
      <div class="content">
        <div class="card">
          <p>A</p>
        </div>
        <div class="card">
          <p>B</p>
        </div>
        <div class="card">
          <p>C</p>
        </div>
        <div class="card">
          <p>D</p>
        </div>
        <div class="card">
          <p>E</p>
        </div>
        <div class="card">
          <p>F</p>
        </div>
        <div class="card">
          <p>G</p>
        </div>
        <div class="card">
          <p>H</p>
        </div>
        <div class="card">
          <p>I</p>
        </div>
        <div class="card">
          <p>I</p>
        </div>
        <div class="card" id="not-found">
          <p>Not in the List</p>
        </div>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>
```

Seems long, Right? It is such because of the repetition of `card` <div>. It is very important to understand a code before copy-paste it. Follow the explanations below to get the full gist.

## Content of the HTML file

- It contains the `HEAD` tag, which houses the `title` and the `css` file’s link.The `title` display on our browser indicates the title of the page, while the css link is pointing directly to our css file, and this helps to pass the
  set of rules in the css file and apply it to the html content.It may all look magical, but trust me, it’s interesting.
- The `main area` tag: This is where all what is displayed to the users appear. inside the main area, we have a header which represents the upper part of our application
- The `h2` tag describes our application with the form that contains our search bar. All in the `header tag`.
- And lastly, we have the <divs> with class attributes of `card` which was duplicated for every letter.
- A script link pointing to our javscript was included just before the close </body> tag.

## Content of the CSS file

- Clearing the Default Style

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

This is done to remove the default margin and padding of every element and to set the box-size to that of the border-box. This essentially controls the characteristics of every element on the page. It also prevents the default addition of margins and padding to the width and height.

- Styling the Main Content area

```css
main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

With this, we set the view width to that of the user’s device. This is referred to as Display flex (Flex is a new feature in css that encourages and improves the responsiveness of web pages) [RWD]. You can read more about CSS Flex on the official CSS website.

- Styling the Header

```css
header {
  width: 100%;
  height: 200px;
  background: darkslategray;
  border-radius: 0 0 100% 100%;
  padding: 50px;
  margin: 0 0 20px;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
}
```

With this, we simply set the width and the height and our desired background color. The background is so powerful that it detects whatever command we pass in, be it an image, a color or any other background property, it just interprets it. In this case, it interprets it as a color. If you wish, you can also use an image, other patterns or even a `background-color` property, it will give the same effect.

- Let's decorate the input i.e search bar

```css
input {
  width: 70%;
  height: 50px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 25px;
  padding-left: 20px;
}
```

The width is set to 70% of the header width, you can do the maths ): Margin-push it away from the `(<h2>)` tag on top. The little round corner was made with the help of the border-radius property.

- Styling the cards

```css
.card {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: darkslategray;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 56px;
  font-family: monospace;
}
```

This is the circle you see on the app which contains the English letters. `border-radius:50%` turns a square to a circle. Amazing! Other properties were set following the same pattern as the one before.

- The style of the Error card

```css
.card:last-child {
  font-size: 30px;
  text-align: center;
  display: none;
}
```

The `:last-child` is a `CSS` pseudo class selector, which helps to select the last element of a particular child of an HTML element. This card displays when our search can not be matched.This is implemented with the javascript code.

## RWD (Responsive Web Design) Style

Developing a web based app which is accessible through mobile and tablet is important as we now have mobile devices everywhere. There are many ways of doing this, but we will be implementing one of them which is `media query`. See the implementation below

```css
@media screen and (min-width: 768px) {
  header {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
  }
  input {
    height: 80px;
  }
}
```

We only control the important part. The header will automatically increase in height at the point where the user’s screen is greater than `768px` and the search bar height also increases.
Another important property of CSS was also implemented using the flex property, and the`flex-direction` was set to `column` to display the flex items (every contents) on the header vertically.

### That is all we need from CSS and HTML.

## The Javascript Codes are Explained below

```js
const input = document.querySelector("input");
const notFound = document.getElementById("not-found");
const filterFunction = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((item) => {
    let whatToSearch = item.querySelector("p");
    if (
      whatToSearch.innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) >
      -1
    ) {
      item.style.display = "";
    } else {
      item.style.display = "none";
      // Not found logic
      notFound.style.display = "flex";
    }
  });
};
input.addEventListener("keyup", filterFunction);
```

**Those are the lines of code,the explanations to each step are done below**

- Line 1

```js
const input = document.querySelector("input");
```

A variable called `input` was created, be free to name it what you like. This
variable holds the content of the search bar we created with our HTML. `querySelector` returns a list of every HTML element with the tag input. Here, we only have one element returned. The user’s input can be gotten using the javascript `.value` method

- Line 3 - 4

```js
  const filterFunction = () => {
```

A new function was created using the ES6(ECMAScript 2015) format known as the ARROW function. Inside the function, we created another variable that holds every `card` <div>. This function will contain all the logic to filter evrything on the page as we wish.

```js
const cards = document.querySelectorAll(".card");
```

Using `querySelector` as explained before. Every element with the class attribute of card will be returned as an array.

- Line 5

```js
  cards.forEach((item) => {
```

The array returned was looped through, using the `forEach` method of javascript which returns each card as an item as indicated in the code.

- Line 6

```js
let whatToSearch = item.querySelector("p");
```

Inside every card, there is a <p> tag, which is the paragraph element that holds the letters.
-line 5
create a variable to hold each <p> tag using `querySelector` on the item returned by the `forEach` method.

- Line 7 - 8

```js
  if (whatToSearch.innerHTML.toUpperCase().indexOf  (input.value.toUpperCase()) >-1)
```

An `if statement` to check if certain things are true, `whatToSearch.innerHTML` returns the letter inside the `whatToSearch` variable which is the letter in the <p> tag .`toUpperCase()` converts it to an uppercase letter. `indexOf` searches for a parameter passed, which is the capital letter of the `input.value` (this returns what the user typed into the search bar), check the line of code above for clarifications. if it is greater than `-1`, it means the search value matches, but if it isn’t greater than `-1`it is not in the list.

- Line 9

```js
item.style.display = "";
```

This sets a CSS display property on the item to the default display property or the property in the CSS file.

- Line 10

```js
item.style.display = "none";
```

If the type character does not match, it should display “none”(nothing should be shown).

- Line 12 -13

```js
notFound.style.display = "flex";
```

A variable was created to hold the last div using the `getElementById` method on `line 2`. This returns the element with the `ID` passed in. The css display property was set to flex as it was set to none in the css file.

- Last Line

```js
input.addEventListener("keyup", filterFunction);
```

A `keyup` event listener was set on the input which responds when a user releases his/her hand from the keyboard and the function created in line 3 is called.

![Sample Page](https://cloud-jcxb4s03p.vercel.app/0bd89.gif)

## We Are Done! It’s as Simple as That.

Below is what we just built, isn't amazing?

![Sample Page](https://cloud-l9u3rh4d3.vercel.app/0page.gif)

## What next?

What you just built can be implemented in various real life projects and can be improved.
Here are suggestions on possible improvements:

1. The Search bar can be modified by adding more styles to be make it more outstanding and to give it a better look.
2. On a shopping cart application, a user needs to filter out the products to get their choices. This app can be integrated to give them this access.
3. Creativity is the limit of this app, as it can be implemented on any application that needs a filter element.

## See Other Implementations Below

1.  [Country List App with gradient by DevMukhtar](https://devmukhtarr.github.io/workshops)
2.  [worldcovid19app app](https://taiwrash.github.io/worldcovid19cases)
3.  [dev resume app](https://dev-resume.herokuapp.com)
4.  [Country list app with filter enabled](https://lookup-a-country.netlify.app)
