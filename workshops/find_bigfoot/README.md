# Find Bigfoot

In this workshop, you will make a game about finding Bigfoot. It will look like this:

TODO: screenshot

Open the [live demo](TODO). See the [final code](TODO).

**On the way, you will:**

- TODO

## Part 1: Set up the project

If you've done other Hack Camp workshops before, this should be pretty straightforward.

### 1) Create a blank HTML file

1. Go to https://c9.io
2. Under the workspace called `USERNAME.github.io` where `USERNAME` is your GitHub username, click **Open** to open the workspace.
3. Make a new folder called `find_bigfoot`.
4. In the `find_bigfoot` folder, make a new file called `index.html`.
5. Double-click `index.html` to open the file.

### 2) Add standard HTML template

Type the standard HTML template into `index.html`:

```html
<!DOCTYPE html>
<html>
    <head>
    
    </head>
    <body>
    
    </body>
</html>
```

### 3) Open the live preview

1. Click **File > Save** to save the file.
2. Click **Preview > Live Preview File** to open a live preview of the web page. Currently it is blank but that will change soon!

## Creating the game

What needs to be in a game about finding Bigfoot? Well, it needs Bigfoot, and it needs to tell the player when Bigfoot has been found.

### Taking Bigfoot out of his natural habitat

It is rumored that Bigfoot's natural habitat is a forest in the Pacific Northwest. What happens if you take him out of his natural habitat and stick him on a computer screen? Would he scream? Would he rip up the computer?

Luckily for you, we've done the hard part of wrangling him out of the jungle and putting him in captivity on the Internet, right here:

    http://andrewd.50webs.com/bigfoot/1IllustriousBigfoot/src/bigfoot.png

So now you have to put an **image** of him into your game, like you did in the Personal Website workshop. Remember how to do that? If you need a refresher, [look here](https://github.com/jonleung/hackclub/tree/add-personal-website-workshop/workshops/personal_website#user-content-6-adding-an-image-with-the-image-tag).

When you are done, you should see Bigfoot in the live preview, like this:

TODO: screenshot

### Telling the player when Bigfoot has been found

A game needs interaction in order to be a game, so let's display a popup box whenever the player clicks on Bigfoot, like this:

TODO: screenshot, preferably animated

How can you do that?

One of the most important skills when hacking is knowing how to Google things when stuck. So let's start by Googling "[html handle click](https://www.google.com/search?q=html+handle+click)":

TODO: screenshot

Clicking the first link takes you [here](http://www.w3schools.com/jsref/event_onclick.asp):

TODO: screenshot

Aha! It looks like whenever you put `onclick="myFunction()"` on a tag, it executes the [**JavaScript**](http://www.w3schools.com/js/) code you put in the quotes.

We want our JavaScript code to display a popup box saying you won. So now let's Google "[javascript popup box](https://www.google.com/search?q=javascript+popup+box)":

TODO: screenshot

The first link takes you [here](http://www.w3schools.com/js/js_popup.asp):

TODO: screenshot

It looks like when you run `alert("I am an alert box!");` it opens a popup box showing the text inside the quotes. So if we put 2 and 2 together, our `img` tag should look like this:

    <img src="http://andrewd.50webs.com/bigfoot/1IllustriousBigfoot/src/bigfoot.png"
         onclick="alert("Woohoo, you win! You found Bigfoot!");">

Change your `img` tag to look like that too, then click Bigfoot in the live preview.

Oops, it didn't work! Why could that be?

Another important skill when hacking is knowing how to fix stuff when they go wrong. Cloud9 gives a couple hints:

1. It displayed the message "Unable to update preview: unmatched tags detected"
2. The quotation mark after `alert(` has a red underline.

Here's what went wrong. We expected the quotation mark after `alert(` to indicate the beginning of the message, but what it actually did was indicate the end of the `onclick` attribute.

Here's a little trick you can use to fix that. In JavaScript, you can use either `"` or `'` around text (the technical term is a [**string**](http://www.w3schools.com/js/js_strings.asp)). So change the inner quotes to single quotes, like this:

    onclick="alert('Woohoo, you win! You found Bigfoot!');"

And now clicking Bigfoot should display the message.

### Celebrate!

TODO: image

Congratulations, you have a working game now! You're all done! Now you can go to [FGL](https://fgl.com) and sell your game to sponsors and make millions of dollars!

## Putting Bigfoot back in his natural habitat

I guess you spotted the problem already. This game is way too easy! I mean, Bigfoot is just sitting there out in the open, begging for you to click on him.

That must be because we took him out of his natural habitat. You see, normally Bigfoot is hiding in a dense forest, making it hard to find him. Let's fix that by adding a **background image** of a forest. I like this one:

    http://img.groundspeak.com/waymarking/ed341ce5-f955-47bc-8b0b-7ed1ac5ab13a.jpg

TODO: type here

## TODO

- bigfoot image
- click to win
- camouflage (background image)
- set position using css
- set position using js
- timer
- title, instructions
- deployment, sharing, hacktime

- code diff link after each step
