# Cringe 101

Short link to this workshop: https://workshops.hackclub.io/cringe_101

## Introduction

<img src="https://d2mxuefqeaa7sj.cloudfront.net/s_1FACA745E7A5A03FBF7BCC2AF4856031BAC0AF7B12042E3DC78BDA872B3C6FBC_1448601896772_avoidance.jpg" alt="Cringe.gif" align="right" style="padding: 25px;" />

### What?

**Cringe 101** will give you **the tools** to create the most cringiest website
ever. We want **you** to make something totally different from anything we’ve
seen before.

Surprise me, your friends, maybe your mom idk. Just try not to kill anyone.

**Cringe 101** should be done after having some experience with making some nice
looking things in HTML + CSS.

But we can’t force you — I’m kinda scared of you to be honest. So, this will
workshop will be self-enclosed (kinda, we still urge you to go through the
workshop below first).

### I Want Out.

Probably a good decision. Create a beast of a website by following this workshop:

[Portfolio Workshop](../portfolio)

Get it online using:

[Git and GitHub](../git_and_github)

### Beautiful Examples

Curated by yours truly (follow me on [Twitter](https://twitter.com/JevinSidhu)
yo), here are some of my favorites.

- https://illuminaughty.herokuapp.com/
- http://www.goer.org/htmlhorror/htmlhorror1.html

### Set Up Your Document:

This isn’t 100% necessary for the code to run (it will still totally do so), but
it tells the webpage some key facts that make it run without any hitches.

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="main.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
```

`<html>` + `<head>` + `<body>` are all called HTML Tags.
- Tags are what is used to to organize the content of a web page.
  - `<html>` → Called the opening tag.
  - `</html>` → Called the closing tag.
- The difference is the forward slash before the name ( / ).
- Almost all HTML tags have both an opening and closing tag.
  - Ones that don’t we will discuss.
- This organizes the website.
  - We don’t want our `<head>` section in our body section, so we close that
    before opening our `<body>` tag.
- `<!DOCTYPE html>` Placed at the top of your document.
  - It is an instruction to the web browser about what version of HTML the page
    is written in.
  - It automatically defaults to the most recent release.
    - HTML5 is the most recent release of HTML.
- `<html>` Encloses the entirety of the rest of the document.
  - All of your following code should go inside here.
- It tells the browser that this everything inside of this tag is HTML code.
- `<head>` Encloses the code that you don’t want to show up on the page.
  - Includes linking to the CSS file (`<link>`).
- HTML and CSS are dumb. They make no association unless told to do so.
  `<link href="main.css rel="stylesheet">` is linking the CSS file to the HTML.
- `<link>` is another tag and inside of it you have a `href` that explain the
  name of the file.
  - In this case, it is named `main.css`>
    - All CSS files must end with `.css` → All HTML files must end with `.html`
  - `rel=stylesheet` is telling the program that the type of file is a
    stylesheet, or CSS file>
- `<body>` tag represents the content of an HTML document.
  - There can be only one `<body>` element in a document.

# Ideas for Cringe

## GIFs

- GIFs supports animations — so we can get a video!
  - GIFs stands for Graphics Interchange Format.

They deliver beauties like this:

![](img/hello.gif)

Insert GIFs just like any other image format!

To add an image, use the image tag:
`<img src="http://website.com/file-name.png">`

- `img` is the tag name → This is self-closing, meaning there is no a closing
  tag like `</img>`.
- `src` is an attribute that specifies the URL of the image.
- Think of it like a setting.
- Add the URL (redirected to image) between the quotes.

http://imgur.com/ is a website where you can upload and then get a link to the
image!

- HTML is used for content.
  - Like the skeleton (sp00ky) of a body.
- CSS is used to change the way things look and feel.
  - Like the colour, width, height of your face/skin.

Let’s break CSS down into an English sentence:

- English sentenced code is called pseudo-code → Code that wouldn’t run on the
  computer, but we’re making sense of it.

Here’s the CSS:

![](img/img.png)

![](img/img_key.png)

For every **img tag** on the web page

![](img/img_bracket.png)

I want all the style properties inside the curly brackets to apply:

![](img/img_width.png)

specifically, I want the width

![](img/img_value.png)

to be 50% of the width of the page.

In the CSS, we use **selectors to select tags**, `img` is the selector in our
example.

- What if you want to **call 1 of your 2 `<h1>` tags** → Both have the same
  selector right now.
  - To solve this and create **custom CSS selectors**, in HTML → This is called
    creating a class

- After **keyword** (`<div, <body, <h1, <head`) of **any tag** type
  **class="class-name"** to create a class
  - `<body class=class-name"> </body>`
  - These must no capitals and spaces are replaced by dashes

Access this in CSS file by using a dot before your class-name and then the
normal syntax.

Here I am setting the back to be a Kanye GIF. Background is another property and
the url is value
    .who {
        background:url("https://media3.giphy.com/media/9RTiWDExHW6aY/200.gif ");
    }

https://preview.c9users.io/jevinsidhu/cringe-101/index.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io

```html
<!DOCTYPE html>
<html>
    <head>
        <link href="main.css" rel="stylesheet">
    </head>

    <body class="who">
        <a href="god.html"></a>
    </body>
</html>
```

--------------------------------------------------------------------------------

```html
<!DOCTYPE html>
<html>
    <head>
        <link href="main.css" rel="stylesheet">
    </head>

    <body class="god">
    </body>
</html>
```

--------------------------------------------------------------------------------

```css
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

a {
    display: block;
    width: 100%;
    height: 100%;
}

.who {
    background:url("https://media3.giphy.com/media/9RTiWDExHW6aY/200.gif ");
}

.god {
    background:url("https://media.giphy.com/media/6rclMe3lUIQNi/giphy.gif ");
}
```

## Fonts

Some fonts really make people cringe. An example of that would be the esteemed
Comic Sans.

Changing your font is easy to do and **Google Fonts** (https://www.google.com/fonts)
makes it even easier. There are hundreds of fonts Google offers to use for free
on the site.

The best part about Google Fonts is that it gives you the code you need to put
on your site.

**Steps to add and change fonts:**

1. Navigate to [google.com/fonts](https://www.google.com/fonts).
2. Choose a font by clicking the **middle** icon (you can see more of the font
   details by clicking the 1st button → Scroll to go click the middle icon).
3. Fonts have different weights → Choose a few.
4. This is just a fancy term for the thickness.
5. The numbers range from 100 to 700 in hundreds for a total of 7 a. Some fonts
   only have a few weights, others have all 7.
6. Go to the number 3 area where it says "Add this code to your website".
7. You’ll notice it looks exactly like a CSS file -- that’s because it is!
8. Since it’s a CSS file, you know what that means! Copy the code & paste in
   your head.

```html
<!DOCTYPE html>
<html>
    <head>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    </head>
</html>
```

Now that we added the font, we can actually change our text to the font we like
using CSS!

In the example below, we changed all the text to the desired font by using the
property `font-family` on the body tag. However, if you want to be really
cringy, use different fonts for every different piece of text using more
specific tags.

```css
body {
  font-family: 'Open Sans';
  color:#000;
  font-size:10px
  font-weight:300;
}
```

Tip — Along with changing the fonts, change the colors (`color`) and thickness
(`font-weight`) of the different text as well to see your friends cringe even
more!

## Pseudo - Classes

We worked with pseudo - classes in the 9 doors workshop.

You can revisit that workshop for more extensive overview of them, but here’s a
quick recap.

A **pseudo-class** is an **exception to a set of rules you created in CSS**.
- _**If you do something**, the **default set of rules will be overridden** by
  the new set_
- Pseudo-classes are activated by adding them to a CSS selector like this.

```css
h1:hover {
    color: red;
}
```

The `h1` is the tag from the html we are working with. The `:hover` is the
pseudo - class or exception you have added. In this case by adding `:hover`
you have created an exception to the old color the `h1` tag was in and have
stated that whenever the mouse hovers the `h1` text, it’s color will be red
instead.

An example of `:hover` in action can be seen on Udit’s site when you go over the
words Twitter, Instagram, Medium and Cipher — http://uditdesai.github.io/me

Hopefully you found that example to be really pretty and an effective use of
pseudo - classes, however this css trick can also be used to make websites
really cringy by making every peice of text change colors when hovering over
them.

## `<audio>` Tag

An audio tag is super simple to get ready!

All you need to start annoying your friends, family, dog, etc is:

1. A pair of `<audio>` tags.
   - `<audio> </audio>`.
2. A properly configured `<source>` tag inside of those (it’s self closing!).
  - You can have multiple source files inside a pair of audio tags.
    - It’ll just cycle through them like a playlist!

```html
<audio>
    <source src="audiofile.mp3" type="mediatype">
</audio>
```

**To upload an audio file to Cloud9**
You’ll need to upload your sound file directly to C9 if you can’t find it hosted
somewhere like this (https://www.anotherwebsite.com/sound.mp3)

Just follow the either method below to upload your file to C9.

![](http://i.imgur.com/TeXlg3h.gif)

1. Drag and drop your file onto the folder tree you want to upload it under
  - It should highlight the folder green when you hover over it and when you let
    go, it should start uploading.

**Alternate Method**

![](http://i.imgur.com/TwtpqXB.gif)

1. Look at the top bar of your workspace and select "File".
2. Mouse over the drop down list that pops up and hit "Upload Local Files...".
3. Either Drag and Drop your files into the newly opened window, or hit "Select
   files" or "Select Folder".
4. Find your audio file on your computer and click "Open".
5. If you did all this right, should start uploading on the sidebar!

**Setting up the `<audio>` tags**

Okay! Lets start by making a pair of `<audio>` tags.

You have your tags in place but they’ll need a bit of configuring to get
working. Like all tags in HTML it can accept extra information called attributes
to tweak them to your needs.

Attributes are basically like unique properties of a pair of tags:

```html
<div class="bestdiv"></div>
```

Anything inside the first `<>` that isn’t the element name (div) is called an
**attribute** (`id=""`, `class=""`, etc.)

As such, `<audio>` has its own set of attributes that can be applied to them
simply by typing them in between the `<>`

Here’s a list of the unique attributes that `<audio>` tags can accept
exclusively:

<table>
  <tr>
    <td><code>autoplay</code></td>
    <td>
      Tells the browser to automatically play the audio once it’s loaded.
    </td>
  </tr>
  <tr>
    <td><code>controls</code></td>
    <td>
      Creates a play bar with a play/pause button, sliding bar, and a volume
      control.
    </td>
  </tr>
  <tr>
    <td><code>loop</code></td>
    <td>Loops the audio again once it’s finished.</td>
  </tr>
  <tr>
    <td><code>muted</code></td>
    <td>
      Mutes the audio output. (doesn’t stop the audio from playing, it just
      has no volume).
    </td>
  </tr>
  <tr>
    <td><code>preload=""</code></td>
    <td>
      Accepts 3 values:
      <ul>
      <li><code>auto</code>: load the audio file after the page loads.</li>
      <li><code>metadata</code>: only load the metadata (extra info like
          author, etc that
          is stored within the file) when the page loads.</li>
      <li><code>none</code>: don’t load the audio file when the page loads.</li>
      </ul>

      e.g <code>preload="none"</code> would tell it to not load the file
      when the page loads
    </td>
  </tr>
  <tr>
    <td><code>src=""</code></td>
    <td>
      Specifies where the audio file is. (This won’t work on every browser so
      that’s why we use the <code>&lt;source&gt;</code> tags)
    </td>
  </tr>
</table>

Example of an audio tag set to automatically play, and loop an audio file:

```html
<audio autoplay loop src="hotline-bling.mp3"></audio>
```

## Configuring the `<source>` tags

The `<source>` tag simply serves the same purpose as putting a `src=""`
attribute above, as in it directs the browser to where the audio file is.

`<source>` can be used for all sorts of media files, (sound, video, etc) but for
this tutorial we’ll just be using it for audio.

This tag also has its own set of attributes like `<audio>` also it’s
**self-closing**.

<table>
  <tr>
    <td><code>src="[URL]"</code></td>
    <td>
      Points to the location of the media file
        - File can be hosted on another website
        -must end in a supported file extension
        e.g <code>src="http://www.drake.com/hotlinebling.mp3"</code>

        - Alternatively, hosted directly where the website is
        -e.g "thiswebsite.com/hotlinebling.mp3"
        another example:

        ![](https://i.imgur.com/LUcCvwl.png)
    </td>
  </tr>
  <tr>
    <td><code>type="[media-type]"</code></td>
    <td>
      Specifies the type of media that will be displayed
      -e.g <code>;source src="blinghotline.mp3" type="audio/mpeg"&gt;</code>

      This changes depending on the type of file you use. You can find more
      types here: http://www.w3schools.com/tags/att_source_type.asp
    </td>
  </tr>
</table>

**Example of `<audio>` and `<source>` tags properly configured to play a locally
hosted darude.mp3 on loop.**

```html
<audio loop autoplay>
    <source src="audio/darude.mp3" type="audio/mpeg">
</audio>
```

Did you do this and still aren't satisfied with the level of cringe? Maybe
instead of regular audio you need
[ADVANCED AUDIO](https://www.youtube.com/watch?v=XjtkWZ1uCXo).

## Advanced Audio using Javascript

There's an infinite number of things you can do with Javascript but for this
workshop we’ll show you a way to make JS "listen" for when your grandma does
something specific on your website and trigger a sound to play.

You do not need the HTML tags from the tutorial above to get this work. But you
will need to know how to specify the location of an audio file. (`src=""`)

To get this to work you’ll need:

1. A Javascript File linked in your HTML `<script type="text/javascript"
   src="script.js"></script>`
2. At least one audio file hosted either remotely (another website) or locally
   inside of your workspace

![](https://paper.imgix.net/http%3A%2F%2Fi.imgur.com%2FeX5PpXN.png?ixlib=js-0.2.1&s=dce172ed5a7f1c5864408f22b7eca26b)

OR

`"www.yeezy.com/onsight.mp3"`

If you already have these, awesome! If not, get those setup before continuing
with this section.

To begin, let's open your JS file!

The single line of code that we’ll need to tell Javascript to "listen" for an
event is:

```js
document.addEventListener("[event]", function() {
    [Your code to run]
});
```

You may or may not understand what this chunk of code means so let’s break it
down.

`document` simply means the HTML document that the Javascript file was
run/linked in (using your `<script>` tags).

`.addEventListener` means to add a "listener" to trigger something when a
certain event happens

So far pretty simple right? `document.addEventListener` just means: **Start
listening to whenever a certain event happens**

Now we need to specify what type of event we want our buddy Listener to look out
for, to do this we put the name of the event in the [event] section of the code.

```js
document.addEventListener("[event]", function() {});
```

These events have certain names but thanks to our friends at `w3schools` they’ve
given us a nicely arranged list of all the HTML events.

[You can find that here.](http://www.w3schools.com/tags/ref_eventattributes.asp)

**Note: You remove the prefix when you use those names inside of
`document.addEventListener`**

So following that rule
```js
document.addEventListener("onclick", function() {});
```

Would turn into:

```
document.addEventListener("click", function() {});
```

Now that we’ve told `Listener` what to listen for, we need to tell it to run
code when it sees what it’s looking for.

To do that, we use `function() {}`

`function() {}` is basically telling Javascript to run the lines of code inside
of `{}`

With that known, how do we get Javascript to play audio?

We create a variable with an audio path inside of the `{}` using:

```
var variablename = new Audio('[AUDIOPATH]');
```

**variablename** can be simply anything you want it to be, try to keep it
  clear and concise though!

**[AUDIOPATH]** is where your audio file is, it can either be a website link to
  the file or the path on your workspace

The path on your workspace to the file is relative to the HTML file, so if your
audio file is in the same folder as your HTML file it would just simply be `new
Audio("example.mp3")`

Now for the final step, which is to finally play your audio!

To tell Javascript to play the audio file stored in the variable all we need to
write is:

```js
variablename.play();
```

**variablename** would be the name you set previously when you wrote `var
variablename`

Don’t forget to close your curly brackets of `function() {}` and it should work!

```js
document.addEventListener("click", function() {
  var inmyzone = new Audio('definitelyin.mp3');
  inmyzone.play();
}
```

The example plays `definitelyin.mp3` everytime a left click is registered on the
page.

## `blink`

Netscape and Internet Explorer once fought for control of HTML coders in the
[browser wars](https://en.wikipedia.org/wiki/Browser_wars).

Although the conflict ended long ago, the battlefield is still strewn with
landmines, otherwise known as **proprietary tags**.

The Netscape-proprietary `<blink>` tag makes text blink.

Microsoft never implemented this tag in Internet Explorer. One might attribute
this decision to Microsoft’s sensibility and good taste, but given
[their response to the `<blink>` tag](http://goer.org/Journal/2003/10/html_house_of_horror_things_that_go_blink_in_the_n.html#marquee),
this explanation seems unlikely.

Although the `<blink>` never made it into the HTML standard, it still works most
of the time in Chrome.

Although the tag itself is forbidden, have no fear! The CSS standard continues
to provide the World Wide Web with critical blinking functionality, in the form
of the CSS declaration:

```css
   text-decoration: blink
```

## `<marquee>` Tag

Microsoft’s `<marquee>` tag scrolls a selection of markup across the screen.

The `<marquee>` tag creates a 100% wide div (box) with text sliding across the
screen.

There are a large number of
[attributes for the `<marquee>` tag](http://www.tutorialspoint.com/html/html_marquee_tag.htm).

You can change the width, the alignment, the scrolling speed, the scrolling
delay, and even the scrolling direction (right to left or left to right).

It is a tag, so it encloses other tags:

```html
<marquee><div class="cringe"></div></marquee>
```

## If you combine blink and marquee: ultimate cringe.


![No God Please Nooooooo](https://d2mxuefqeaa7sj.cloudfront.net/s_1FACA745E7A5A03FBF7BCC2AF4856031BAC0AF7B12042E3DC78BDA872B3C6FBC_1448603976992_giphy+%281%29.gif)
