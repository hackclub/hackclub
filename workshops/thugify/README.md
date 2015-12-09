# Thugify Workshop

![Thug Life - Tu Pac](img/tupac.gif)

## Introduction
### What is Thugify?
Thugify is an introduction to the basics of JavaScript + jQuery.

We’ll be adding “, dawg” to the end of whatever you type into an input box — simple, but sweet. You’ll be able to change the word added at your own will.

This [slide deck](https://docs.google.com/presentation/d/1N2l9FTYlGCocr8cqjLaHpp5tgv0hS-WI3US7PiMbRnc/edit#slide=id.p) created by Amy Sorto and modified by [Cipher](http://projectcipher.io) is a great introduction to key concepts. Please take a look through it!

### Playlists
We are creating playlists, recommended pathways for our content -- this isn’t the start of the content!

Try this first: [Personal Website](https://docs.google.com/document/d/1jCkOlEbgu_mCJDYCEdBk-rUSqTicHQy8YutEJ5MM6mY/edit).
Get it online using: [Git + Github Guide](https://hackpad.com/Basic-Git-and-Github-gOQpi30cvG8).

Try [Cringe 101 Workshop](https://paper.dropbox.com/doc/Cringe-101-Workshop-U1sRsQHWEWrq2JahDbj1N) afterwards!

### Resources
Code: https://ide.c9.io/jevinsidhu/thugify

Final Webpage: http://jevinsidhu.github.io/thugify

## Setting Up Your Files and HTML Document
1. Create a index.html file
2. Create a style.css file
3. Create a script.js file

If setting up your document is not familiar, please look at [Cringe 101 Workshop](https://paper.dropbox.com/doc/Cringe-101-Workshop-U1sRsQHWEWrq2JahDbj1N).

This isn’t 100% necessary for the code to run (it will still totally do so), but it tells the webpage some key facts that make it run without any hitches.

This should be placed in your index.html file
### Please do not copy and paste!

```
    <!DOCTYPE html>
    <html>
      <head>
        <link href="main.css" rel="stylesheet">
      </head>

      <body>

        <script src="script.js">
      </body>

    </html>
```

`<script src="script.js">` is linking the HTML file to the JS file
- Webpages + browsers are really dumb, humans just make them smart

- `<script>` is a self-enclosed tag that links the the HTML file to the JavaScript file
  - `src` is called an attribute
    - It specifies the location — in this case it was simply the file name, “script.js”

### NOTE: Make sure you have closing tags (`</h1>`)

## Adding jQuery
As mentioned in the slide deck, jQuery is a JavaScript library.
- It adds functionality to the language, JavaScript.

JavaScript was created in 1995 — that was 20 years ago (from 2015). We need libraries to keep the language powerful and current.

Using the same `<script>` tag we need to link a jQuery content-delivery network (CDN)
- CDN allows us to import a file with the jQuery library. If you open https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js, it is a bunch of lines of code!

- You could download this, include it alongside your files, and link the file name.
  - It’d be exactly the same!
  - CDN’s simply allow us to have the same functionality quickly.

Include the linking of jQuery above your `script.js` file
- HTML runs top-to-bottom
- Our script file should jQuery’s power before running

    <script src="script.js">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

## Creating the HTML Structure
Our focus for this workshop is the the basics of JavaScript + jQuery.  Let’s finish up our HTML first!

![Man Typing](img/typing.gif)


Note: All of this must be enclosed by the `<body>` tag. The closing tag, `</body>`, should be after your script tags.

### [Let’s go](https://youtu.be/AYD4dZqCpdU?t=17)
_Please ~~don’t~~ turn up that hard to our workshop_

1.To enclose our content, we’ll create a `<div>`  tag

This is a container to:
- Organize our content
- Apply stylings from our style.css file to everything enclosed

    <div class="thugin">

    </div>

2.To add the name of the workshop, let’s create a `<h1> </h1>` header tag

Give the header tag an id of “title”
- Type  `id="title”` before the `<h1` is closed.

 It should look like this: `<h1 id="title”> Thugify </h1>`
- An id is a way to identify single elements that use the same tag as other elements

- I.e. There may be multiple `<h1>` tags in your code
    -  To select one it needs to have its custom name, thus the id

Indent your code!
- Indenting items that are enclosed within another tag is important for your own readability
  - In this case `<h1>` is enclosed in `<div>`

```
    <div class="thugin">
      <h1 id="title"> Thugify</h1>     
    </div>
```  

3.Let’s create a place to input our text with the `<input>` self-enclosed tag

`<input>` is self-enclosed tag for creating an input box. We’ll be able to type in this box!

![Screenshot](img/screenshot.png)

Give this input box an id of “texter”

`<input id="texter">`

We can give the box “placeholder text” as well!
- Placeholder text in the greyed out text (see the photo above, “insert text”)

Add a `placeholder` attribute (like `src` is an attribute):
-  `placeholder="some text"` right after the id

`<input id="texter" placeholder="insert text">`

- We’ve made the placeholder simply say “insert text”

4.Let’s make a submit button with the  `<button>` tag

`<button>` is the tag for creating a button
- Just like the `<h1>` tag, this another tag where we place text between the opening and closing tags to display on the webpage

Give this button the text “thugin’”

`<button> thugin' </button>`   

Give this button an id of “go"

`<button id="go"> thugin'</button>`

We’re going to tell the webpage  that this is of type-something
  - In this case, it’s a button!

- To do this, we’re also going to give this a `type` attribute

Another one (attribute):

[![DJ Khaled](img/dj.jpg)](https://www.youtube.com/watch?v=eKinphSXuLI)

-  `type="button"` right before the id
  - This is to ensure that the webpage understands we want a button
    - By specifying this, the HTML adds some build-in CSS styling

```
    <div class="thugin">
      <h1 id="title"> Thugify</h1>  
      <button type="button" id="go"> thugin'</button>   
    </div>
```    

### Look at that beautiful indenting. Is yours indented?

![Childish Gambino](img/Childish.gif)

5.To create a space for our thugified content, let’s create a  `<p>` tag with an id of `output`

    <p id="output"> </p>

`<p>` stands for paragraph
- Just like the `<h1>` tag, this another tag where we place text between the opening and closing tags to display on the webpage

Whatever text we type into the input box will have “, dawg” added
- We will then add the text between the opening and closing `<p>` tags
  - We’ll do this using JavaScript

Final Code (do not copy and paste, you bumface):

    <body>
    <!-- Our main HTML -->
      <div class="thugin">
          <h1 id="title"> Thugify </h1>
          <input id="texter" placeholder="insert text">
          <button type="button" id="go"> thugin' </button>
          <p id="output"> </p>       
      </div>

    <!-- JavaScript files, also referred to as simply "scripts" -->  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
      <script src="script.js"> </script>

    </body>

## CSS
CSS (cascading style sheets) is the styling of our page
- This styling lives in the style.css file

We use selectors in CSS that select our HTML tags

We want you to style the page!
- If you feel uncomfortable, that’s good! You’ll only really grow by being put into uncomfortable situations and then figuring your way out

- Your peers are here to help you if you have any questions, all you gotta do is ask
  - Google is also amazing! It’s what all programmers turn to, especially professionals!

If you feel completely lost, no worries! Go back to our older workshops and work skim through those (linked at the top of this document).

[You can put the hinges in the hands.](https://twitter.com/SavageJihad/status/671920807166222336)


## Javascript + jQuery , dawg
Remember that the variable names in the examples below can be anything you want, but we recommend sticking with ours in order to make the workshop easier to follow!
### Adding a Listener
To begin our Javascript journey to Thug Land we’ll need to add a listener to listen for a click on the Thugify button.
    document.getElementById('go')
This line simply means: Find the element with the the id “go" in the document.

Now we haven’t done anything with this element yet, we want the button to trigger some code when someone presses it so we’ll add `.onclick = function() {}` to the end of the line

`.onclick` simply adds a rule to listen for a click on the button and runs whatever's behind it.
In this case, `= function() {}` happens to be assigned to it.

With that known, we can infer that  `.onclick = function() {}` simply means: When a click is registered, run the following function.

To review, so far our code is
    document.getElementById('go').onclick = function() {}
which simply says: Find the element ‘go’ and listen for a click on this element. If there is a registered click, run this function (block of code.)


If you’ve followed along this far, awesome! You’re doing great, we’re almost done.  If you’re stuck, turn to a peer!

**We a team and we the best.**
![DJ Khaled](img/dj2.gif)

Now that we’ve gotten Javascript to listen for a click on the button, we need to tell it to do something when it gets a click.

### Creating a Variable and Assigning a Value
Every line that we want to execute needs to be inside the curly brackets ( { } ) of `function()`
Don't forget to indent it either! Remember, it’ll make it easier to read.

So let's start with first finding what we need to thugify.

Reminder from Slidedeck: When creating variables (var), whatever is one the right side, is always being assigned to the left side .
- I.e. The content on the right is going to be assigned to the variable `div` on the left

The id `texter` is from the input box!

We’ll be grabbing the value from the input box, since the id `"texter”` is assigned to the box
- Whatever someone types into the input box will be retrieved with this line of JavaScript.

To do that we need to use:
    var div = $('#texter').val();

WHOA HOLD UP DID YOU SEE THAT?????
LOOK AGAIN.

![Screenshot](img/screenshot2.png)

You’re probably wondering what the heck that `$` is doing here. Remember the libraries section in the slidedeck?

That is the power of jQuery at work. It took something we would normally use like
    document.getElementById('texter')

And shortened it to:
    $('#texter')

Of course `document.getElementById(‘’)` would still work if you’d prefer that.

![Michael Scott](img/michael.gif)

Note: It finds HTML elements exactly like a CSS Selector would:
- ids would be: `#[id]`
- Classes would be: `.[classname]`
- Regular tags would work too: `$(‘h1')`

Therefore:
        var div = $('#texter')

Means the same thing as:
    var div = document.getElementById("#texter')

Place  `.val();` at the end of the line
- Takes the value of whatever’s in-front of the `.`

So to clarify everything:
    var div = $('#texter').val();
Means to take the value of the element `texter` and store it into a new variable called `div`

We’re grabbing the value from the input box, since the id `"texter”` is assigned to the box
- Whatever someone types into the input box will be retrieved with this line of JavaScript.

We’re gonna use this string value to thugify later on.
- A string is a series of characters (text and numbers)!
  - This is also mentioned in the slidedeck

So, we’ve debunked that mystery!

![Scooby Doo](img/scooby.gif)

Let’s move on to performing the actual thugifying part of the string we got in the last part. 🏀
### Adding the `", Dawg"` to the `add` Variable
We need to store the variable with the words from the input box and then add the word `, "dawg"` to it

    var add = div + ", dawg";
This line takes the string we got in the last section (variable div) from the input box, adds `", dawg"` to the end of it, and then stores it into a new variable named `add`.

Remember: Whatever is on the right side will be assigned to the left side.
- `div + ", dawg"` is being assigned to the variable `add`

Adding the two strings together is called **Concatenation**. Ya fancy, huh?
![What](img/what.gif)

Alrighty, now that we’re thuggin’ it’s time to display our up text on the page — fo'shizzle.

### Displaying the Text
We’re going to use: `document.getElementById()` to find an element on the HTML page by it’s id

    document.getElementById('output')
This will take care of that job for us
- We’re finding the element with the id `output`

PS: you can use jQuery’s `$(‘’)` for this as well since there’s practically no downside.
- Try changing this line to use the jQuery syntax
  - Syntax means the grammar, spelling and set of rules of a language  

Now then, we will attach  `.innerHTML = add;` to the end of the line
    document.getElementById('output').innerHTML

It’s just like `$('#texter').val();` that we used before:
- Except this time we’re setting the `innerHTML` value (the text inside of the pairs of `<p>` tags) of an HTML element instead of getting a value from it

We will now assign the value of add to the `<p>` tag with the id `output`

     = add;

 In plain English, `document.getElementById('output').innerHTML = add;` means:
- Set the `innerHTML` of `“#output”` to the value of the variable, `add` (our thugified string variable → the variable that holds our text)

    document.getElementById('output').innerHTML = add;

Close your curly brackets ( `}` ), slap a semicolon ( `;` ) on the end of it and BAM you’re done!
    };

Final Code (do not copy-pasta you bum face):
    document.getElementById('go').onclick = function() {
        var div = $('#texter').val();
        var add = div + ", dawg";
        document.getElementById('output').innerHTML = add;
    };
## You are now a JavaScript Legend.
![Mind Blown](img/mind-blown.gif)

Unless you copy-pasted then ehhhh. Maybe a half-legend or something.

You mom thinks you're special, that’s all that really matters 💯

## Thanks for completing our workshop ❤
(Ya, we’re dysfunctional as f**k)
![cipher-squad](img/cipher-squad)
