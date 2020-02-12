---
name: 'Colorful Grammar'
description: 'Let your words color the screen'
author: '@MatthewStanciu, @beck3k'
group: 'start'
order: 3
---

Converting words to colors is something that’s difficult to understand, and sounds impossible—but that’s exactly what you’re going to do in this workshop. In just 20 lines of code, you’re going to build a website that allows you to type all over the screen and watch the color of your screen change based on the number of verbs, nouns, adjectives, and adverbs in the text.

[**Link to demo**](https://colorful-grammar.techbug2012.repl.co)

[**Link to final code**](https://repl.it/@TechBug2012/colorful-grammar)

## Getting started
Create a new Repl.it project at [repl.it/languages/html](https://repl.it/languages/html).

We’re going to be using a library called jQuery to make things easier for us. If you’ve never heard of it, jQuery is a popular JavaScript library that makes writing certain JavaScript tasks way easier than in normal JavaScript. You’ll get to see how jQuery can be really useful throughout this workshop.

We’re also going to use [WordPos](https://github.com/moos/wordpos), a cool dictionary library that identifies the grammar type of a given word (e.g. noun, verb, etc).

Let’s start by importing these two libraries. At the bottom of tge `<head>` tag of your `index.html` file, add these two lines:

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dist/wordpos.min.js"></script>
```

Now that we’ve imported the libraries we need to make our website, it’s time to write some code.

## Typing on the screen
In order to use our entire screen as our canvas for writing, we need to create a `<textarea>` in our HTML file and use CSS to make it fill the entire screen.

In the `<body>` of your `index.html` file, under the line where `script.js` is imported, add this line:

```html
<textarea id=“sentence” autofocus></textarea>
```

This creates a [textarea](https://www.w3schools.com/tags/tag_textarea.asp) element with the id “sentence”. If you run your repl, you’ll see this textarea in the top left corner.

We need to do some CSS work in order to be able to use this textarea as our writing canvas. This work will all be done with CSS.

In order to be able to use this textarea as our writing canvas, we’ll need to do some CSS work. Namely:

1. Remove the white background
2. Remove the blue halo around the edges
3. Remove the black border around the edges
4. Make it fill the entire screen without overflowing

Start by adding

```css
textarea {
  
}
```

to your `style.css` file.

To remove the white background, we use `background: none;`. To remove the blue halo, we use `outline: 0;`. To remove the black outline, we use `border: 0;`. Add these three declarations inside the `textarea` selector of your `style.css` file. After you’re done, the file should look like this:

```css
textarea {
  background: none;
  outline: 0;
  border: 0;
}
```

When you run your repl, you should see that the textarea appears to have disappeared. But if you click at the top left corner of the preview, you’ll notice that you can still type. The textarea is still there—you’ve just made it invisible.

We still need to make the textarea fill the whole screen. Add `width: 100%;` and `height: 100%;` to the `textarea` selector in your `style.css` file. While you’re at it, go ahead and also add `font-size: 48px`, which makes the font size bigger so that you can better see the effects.

When you run your repl now, you should see that your textarea’s width fills the whole screen, but the height doesn’t. This is because `height: 100%` means “100% of the parent element”. Check out the splatter paint workshop for more info on what this means.

To fix this, simply add

```css
html, body {
  height: 100%;
}
```

to the end of your `style.css` file. This will make the `body` fill your entire screen, which also means the textarea will fill your entire screen.

When you run your repl, you’ll notice that the textarea fills the whole screen! But if you type too much, it’ll shift a little bit to the right, obscuring some of the text. We can fix this by adding `padding: 0;` to the `textarea` selector.

When you run your repl, you’ll see that the textarea now fills the whole screen without overflowing!

Just to recap—this is what your entire `style.css` file should now look like:

```css
textarea {
  background: none;
  outline: 0;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: 48px;
  padding: 0;
}
html, body {
  height: 100%;
}
```

## Coloring our canvas
Now that we can write anywhere on our screen, it’s time to put the libraries we imported to use.

Navigate to your `script.js` file and add the following:

```js
const wordpos = new WordPOS({
  dictPath: “https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict”
})
```

This initializes a new instance of the WordPos library with a dictionary to identify words with.

Under this, add

```js
$(document).ready(function() {

})
```

This is how jQuery is initialized. Usually when you see a dollar sign in JavaScript, it’s a shorthand for jQuery.

Now, let’s write a function that updates the background inside the jQuery function.

```js
$(document).ready(function() {
  function updateBackground() {
  
  }
})
```

Inside the `updateBackground` function, add the line:

```js
let sentence = $(“#sentence”).val()
```

This uses jQuery to get the value of our textarea, which if you recall, we gave the id “sentence”. You could replace `$(“#sentence”)` with `document.getElementById(“sentence”)`, but the jQuery syntax makes it a little bit easier.

To get the number of each type of word used in the sentence, we need yet another function. Add the following inside the `updateBackground` function:

```js
wordpos.getPOS(sentence).then(function(types) {

})
```

As of now, this is what your `script.js` file should look like:

```js
const wordpos = new WordPOS({
  dictPath: “https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict”
})

$(document).ready(function() {
  function updateBackground() {
    wordpos.getPOS(sentence).then(function(types) {
    
    })
  }
})
```

Before we move on, let’s break down what we want to do.

1. Find the total number of each type of word
2. Find the total length of the sentence
3. Create a gradient with this data

The beauty of this workshop is that there are endless ways you can go about creating a gradient from all of this data, and each way will produce a different result. I’m going to show what I personally came up with, but as you read the next step, keep your mind on and be actively thinking of ways you can change it to do something different.

## Creating a gradient
CSS offers a function called [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) that allows for super easy creation of a color gradient out of as many colors as you want. We’re going to create a gradient out of two colors:

1. The total sum of every type of word
2. The total length of the sentence

We’re going to be using the HSL (Hue, Saturation, Luminosity) color system. If you don’t know what that is, check out [this website](http://thenewcode.com/61/An-Easy-Guide-To-HSL-Color), which gives a good introduction. For the purposes of this demo, all you need to understand is that the HSL system is like a color wheel, and you identify colors with degrees. Also important to note is that colors start a new cycle once you pass 360 degrees. Just like a 60 degree angle looks the same as a 420 (360 + 60) degree angle, 60 on the HSL color system is the same color as 420: yellow.

![](https://raw.githubusercontent.com/hackclub/hackclub/colorful-grammar/workshops/colorful_grammar/img/hsl-color-wheel.PNG)

In the innermost function, create a variable for your left gradient that adds the frequency of each type of word.

```js
const leftGradient = types.verbs.length + types.adverbs.length + types.nouns.length + types.adjectives.length + types.rest.length
```

The right gradient is simply:

```js
const rightGradient = sentence.length
```

Now that we’ve got our two colors, we can create our gradient. This is where jQuery becomes really useful: we’re going to change the CSS on our page from our JavaScript file!

```js
$("body").css("background-image", `linear-gradient(to right,
  hsl(${leftGradient}, 100%, 50%),
  hsl(${rightGradient}, 100%, 50%)
`)
```

(Note: in JavaScript, you can use back-ticks instead of a quotation mark and concatenate strings using the ${} syntax. The dollar signs next to the gradients are unrelated to jQuery. Learn more about this syntax [here](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings))

Here’s what your entire `script.js` file should look like after this:

```js
const wordpos = new WordPOS({
  dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict"
});

$(document).ready(function() {
  function updateBackground() {
    let sentence = $("#sentence").val()

    wordpos.getPOS(sentence).then(function(types) {
      const leftGradient = types.verbs.length + types.adverbs.length + types.nouns.length + types.adjectives.length + types.rest.length

      const rightGradient = sentence.length

      $("body").css("background-image", `linear-gradient(to right,
        hsl(${leftGradient}, 100%, 50%),
        hsl(${rightGradient}, 100%, 50%)
      `)
    })
  }
})
```

Be careful with the parentheses! There are lots of them here, and it’s easy to lose track of them and accidentally forget to close a few. If you’re getting errors, check your parentheses.

We’re almost done! The final step is to run this function when the page loads and then each time a new letter is typed.

Right before the last closing curly brace, add these two lines:

```js
updateBackground()
$("#sentence").on("keydown", updateBackground)
```

Now, your `script.js` file should look like this:

```js
const wordpos = new WordPOS({
  dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict"
});

$(document).ready(function() {
  function updateBackground() {
    let sentence = $("#sentence").val()

    wordpos.getPOS(sentence).then(function(types) {
      const leftGradient = types.verbs.length + types.adverbs.length + types.nouns.length + types.adjectives.length + types.rest.length

      const rightGradient = sentence.length

      $("body").css("background-image", `linear-gradient(to right,
        hsl(${leftGradient}, 100%, 50%),
        hsl(${rightGradient}, 100%, 50%)
      `)
    })
  }
  updateBackground()
  $("#sentence").on("keydown", updateBackground)
})
```

When you run your repl, you should be greeted by a blank red screen. Click on the preview and start typing a bunch of words! You should see the background color change as you type each word!

## Hacking
Your journey is far from over. There are endless ways you can make this your own. Here are a few suggestions:

1. I kept the saturation and luminosity of each color at 100% and 50%, but that doesn’t mean you have to! Try changing those numbers around and see how many new colors you can create.
2. If you feel the right side of the gradient is moving too fast and/or the left side is moving too slow, try changing their values to make them move more slowly! For inspiration, [check out what I did](https://repl.it/@TechBug2012/colorful-grammar)
3. Try adding more colors to the gradient! Maybe one for each type of word?
4. Change the direction of the gradient! `to right` is not the only way a CSS gradient can run.
5. Set the left gradient to the average value of the frequency of all the word types instead of their sum
6. Move some word types to the right gradient instead of keeping them all on the left side
7. Change the font and size of the text in the textarea

...and much, much more!

Your new task is to hack away at this project until it looks noticeably different from this demo and is totally your own. Go crazy, and good luck!