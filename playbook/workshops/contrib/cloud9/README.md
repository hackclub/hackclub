# Cloud9 tutorial

![Cloud9 logo](img/cloud9.png)

## What is Cloud9?

*Cloud9 is a website that lets you program online*. Traditionally, all
 programming was done locally on the computer: you would save your files on your
 computer and edit them on your computer (with a code editor). Cloud9 allows you
 to save your files online and edit your files online (Cloud9 also has a code
 editor). This means all you need to start programming is internet and a
 browser. No more installing software!

__Imporatant__: if you're having trouble, checkout the
[troubleshooting](#troubleshooting) section at the end of the workshop.

-------------------------------------------------------------------------------

## Login with GitHub

First, make sure you have a github account. If you don't have one, follow the
guide for making one located
[here](https://github.com/hackedu/hackedu/tree/master/playbook/workshops/portfolio#creating-a-github-account).

Now that you have a GitHub account, you can login to Cloud9 with GitHub. Go to
http://c9.io and click on the "octocat" icon in the top corner, as demonstrated
below:

![](img/github-login.gif)

## Create a new workspace

To create a new workspace you can either select the create a new workspace
option under workspaces, or click the new workspace button at the top right of
your screen.

Next set your workspace name to *html-css-javascript-basics*, and your
description to *Learning to use html css and javascript together*. Make your
workspace public, skip the *Clone from Git or Mercurial URL* option and set your
template to *Custom*. Finally click the *Create Workspace* button at the bottom
of your page and you should be prompted to this screen.

![](img/open-screen.gif)

## Using HTML CSS and Javascript together in Cloud9

First we will create a new folder. To do this right click the workspace bar on
the left and select *New Folder*. You can name this folder whatever you like.

![](img/create-folder.gif)

Next we will be creating a html file. To do this hit file on the top left of
your screen, hover over the *New From Template* option, and select *HTML file*.
Now we want to save this file in the new folder we just created. To do this go
to *file* and click *save as*. Name your file *index.html* and save it inside
the folder you just created.

![](img/create-html.gif)

Repeat the last step twice more, except this time create a CSS file and a
Javascript file. Name your files *style.css* and *index.js*

Now that you have your files set up lets start building. Inside your
*index.html* file in the body element create a button with the attribute *id*
set to *alertButton*.

``` <button id="alertButton">Click Me!</button> ```

To preview you file right click your *index.html* file in your workspace sidebar
to the left and hit *Preview*. This will open up a new tab with the rendered
version of your html file.

![](img/preview.gif)

### Adding CSS to your HTML

Next lets add some style to our button. In your *style.css* file add the
following code

``` #alertButton { background: none; border-style: none; border: 2px solid
black; padding: 10px; color: black; }

#alertButton:hover { background-color: black; color: white; } ```

### New Concept CSS selectors

In CSS, selectors are patterns used to select the element(s) you want to style.
If we were to do

``` button { //css goes here } ``` Our css would still work, however if we had
multiple buttons in our html, all those buttons would be styled the same because
every button element in our html would have the same css applied to it. If we
want different styles for each button, we can give each button a unique id
attribute in html. Then when we want to reference that id attribute in our css
we can do

``` #idName { //css goes here } ```

Another css selector that we encountered is the hover selector seen here.

``` #alertButton:hover { background-color: black; color: white; } ```

This basically says that when a mouse hovers over the html element with the id
*alertButton*, apply this css to that element. You read more about css selectors
[here](http://www.w3schools.com/cssref/css_selectors.asp).


If you look at your preview, you will notice none of the styles were applied to
your button. This is because you have to tell your html file where to get the
css from. To do this we will add this code inside the *head* element of your
html.

``` <link rel="stylesheet" href="style.css" type="text/css" /> ```

Basically what this does is link your html to your css. The value of your *href*
attribute should be the location of your css file. Since our css file is in the
same folder as our html all we have to do is set the value of *href* to the name
of our css file.

### Adding Javascript to your HTML

Next lets add some Javascript. Inside your *index.js* file add the following
code.

``` var button = document.getElementById("alertButton");

button.onclick = function () { alert("Button was pressed"); } ```

> #### Understanding the code

> In our javascript file we start of by creating a variable called *button* and
> set it equal to the element in our html that has an *id* of *alertButton*.
> Next we declare that when our button is clicked, a function is run that alerts
> the user with the message "Button was pressed".

If we try testing our code, it wont work yet for the same reason our css didn't
work at first. We need to tell our html file where to get the javascript from.
To do this, we will add the following code to the end of the *body* element
inside our html.

``` <script type="text/javascript" src="index.js"></script> ```

This links our html and our javascript together. The *src* attribute should be
set to the location of our javascript file. Since our javascript file is in the
same folder as our html all we have to do is set the value of *src* to the name
of our javascript file.

Go ahead and test your code now.

![](img/test-code.gif)

## Troubleshooting

- __Nothing shows up__
  - Try saving the `index.html` file from `File > Save`. After that reload the
    preview.

- __CSS not applying styles to the button__
  - Make sure the `href` attribute of the `<link>` element in `index.html`
    points to a file in the same directory at as `index.html` called
    `style.css`.
  - Make sure you have a css file called `style.css`.
  - Make sure the `id` attribute of the `<button>` in `index.html` is the same
    as the id being selected in your `style.css` file (minus the `#`). ID's
    ARE case sensitive!

- __Javscript is not displaying the alert__
  - Make sure the `src` attribute of the `<src>` element in `index.html`
    points to a file in the same directory at as `index.html` called
    `index.js`.
  - Make sure you have a javascript file called `index.js`.
  - Make sure the `id` attribute of the `<button>` in `index.html` is the same
    as the id being selected in the `document.getElementById` function in your
    `index.js` file (minus the `#`). ID's ARE case sensitive!

## Congratulations!

You now know how to

- Create a new workspace in Cloud9
- Work with HTML CSS and Javascript together

Be sure to experiment with HTML CSS and Javascript on your own!

# Feedback!

We would <3 your feedback on how we can improve this workshop! Please help
future hackers have a better experience by leaving feedback
[here](https://docs.google.com/forms/d/1IxbiDtyP-UOx3hRGu3o2I-iVll95xQ6I_pW8JS3TZ2k/viewform?entry.1677546962=The+Cloud9+workshop).
