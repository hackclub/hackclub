# Building Your First Website

## Goals

Goals for this workshop:

- Wake your personal website
- Put it on the internet for the whole world to see!

Your final design looks like this:

> ![](img/final_1.png)

Here is a link to a [live demo](http://output.jsbin.com/fugoki/2)

And here is the [final code](http://jsbin.com/fugoki/2/edit) for the live demo.

To do this, you will be learning the basics of two languages: HTML and CSS.

Every website that you have ever seen are written in these two languages.

## Microsoft Word for Code

Just like you use Microsoft Word to write English, you can use JS Bin to write
code.

Open [http://jsbin.com](http://jsbin.com).

Go ahead and close the popup:

> ![](img/close.gif)

Then delete everything on the left. We don't need it right now.

> ![](img/delete.gif)

Then write your name in the text box. My name is `Jonathan Leung` so that's
what I will write:

> ![](img/jonathan_leung.gif)

Notice that what you write on the left side of the screen is reflected
on the right.

> ![](img/left.png)

Note that we are writing "HTML" code.

> ![](img/right.png)

<!-- This is a link to the original image in case any changes
     want to be made in the future: ![](img/original.png) -->

Lets look at the final website to figure out what we need to do next:

> ![](img/final_1_highlight_description.png)

Ah, we also need to add a description! Let's add it!

## Adding the description

Go ahead and write a short 1 sentence description about yourself. Don't worry
about getting it perfect, you can always change it later!

> ![](img/welcome.gif)

Hmm... It looks funny on the right side:

> ![](img/space.png)

Let's understand why:

## HTML Tags

The code that we are writing on the left is called "HTML". (Feel free to [Google
what HTML stands for and learn more about it)](https://www.google.com/search?q=html)

Any adding blank lines or more than one space between your words in HTML does
will not change what your website looks like.

However we can change the style of some things on the page by adding **HTML
tags**.

## The Heading HTML Tag

HTML "tags" are used to organize the content of a web page.

For example, if I want `Jonathan Leung` to be a heading of my webpage, I can
put it inside of a heading tag, like so:

```html
<h1>Jonathan Leung</h1>
```

Let's try it:

> ![](img/heading.gif)

And voilà! This is our result:

> ![](img/heading_result.png)

Hey, look, it's all big and bold!

### More about headings

There are six different heading tags, `h1` through `h6`.

The `h1` tag indicates that its text is the the most important and `h6` the
least important.

If we write out all the tags (don't bother doing this):

> ![](img/h1_through_h6.png)

we see that the closer the tag is to h1, the larger the text.

### Some Terminology

```html
<h1>Jonathan Leung</h1>
^^^^
this is called the h1 tag
specifically it is the OPENING h1 tag
```

```html
<h1>Jonathan Leung</h1>
                  ^^^^^
                  this is the CLOSING h1 tag
```

Note that many HTML tags have both an "opening" and "closing tag"

**Next:**

Now we need to put the description in the appropriate tag:

> ![](img/description_next.png)

## The HTML Paragraph Tag

When you look at a different website, say the Wall Street Journal, we can see

> ![](img/heading_wsj.png)

> ![](img/paragraph_wsj.png)

We use the `h1` tag for headsings.

We use the `p` tag for paragraphs and the main text for a website.

For me, `I welcome you to the internet.` is the main text of my website.

So I would write:

`<p>I welcome you to the internet.</p>`

Like so:

> ![](img/p.gif)

It doesn't look like much changed but it has!

> ![](img/p_final.png)

## Adding the image

To add an image, we use the image tag:

```html
<img src="http://website.com/MY_IMAGE.png">
```

Let's try adding a picture of me to the page (just for time's sake, let's just
use a picture of me and after you finish the tutorial, you can change it to a
picture of yourself).

This is a link to my picture:

```
http://i.imgur.com/C6P1T0G.jpg
```

Feel free to copy and paste that into JS Bin and do the following:

> ![](img/img.gif)

The image is taking a lot of room right now but if we scroll down on the right
side, we see that our original text is still there:

> ![](img/scroll_down.gif)

Okay. We need to make the picture smaller

But before we do that, let's understand how the image tag works:

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
 ^ "img" is the tag name
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">

Note that <img> does not have a closing tag
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     this part is an attribute
     of the image tag

     (think of attributes like settings)
```

For example, if an oven was a tag:

```html
<oven temperature="350">
```

- `temperature` is the name of the attribute
- `350` is the value of the `temperature` attribute


```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
     ^^^ "src" is the name of the attribute
         (think the name of the setting, like temperature)
```

```html
<img src="http://i.imgur.com/C6P1T0G.jpg">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          "http://i.imgur.com/C6P1T0G.jpg" is the value
          of the "src" attribute (think value of the setting like 350)
```

## Changing the look and feel with CSS

Ok. The image is way too big. We need to fix it.

So so far, we have only been adding content to the page and not really
changing its look and feel.

HTML is used for the content. There's this other language called CSS that we use
to change the way things look and feel.

So if we want to change the size of an image, we need to use CSS.

To write CSS code, click "CSS" in the menu:

> ![](img/css.gif)

Type the the code in the CSS box (don't copy and paste code you want to
learn because you won't remember it!)

```css
img {
  width: 50%;
}
```

> ![](img/50_percent.gif)

Cool! The image shrunk!

## The basics of CSS

Let's understand the code.

> ![](img/css_img_example.png)

Read the following as one long sentence:

> ![](img/img_css_highlight.png) "For every `img` tag on the web page"

> ![](img/css_curly_braces.png) I want all the style properties inside the curly
> brackets to apply:

> ![](img/css_property.png) specifically, I want the width

> ![](img/css_value.png) to be 50% of the width of the page.

**Vocabulary**

> ![](img/img_css_highlight.png) `img` is called the selector, it "selects" all
> of the `img` tags and applies all of the settings inside of the curly braces

> ![](img/css_curly_braces.png) `{` `}` are called curly braces

> ![](img/css_property.png) the thing on the left side of the semicolon
is called the `"property", in this case it is `width`

> ![](img/css_value.png) `50%` is what's known as the `"value"`

### But what happens if I resize the page?

> ![](img/resize_page.gif)

Hmm... I don't want my image to change sizes if my page changes sizes.

## Pixels

Let's change the units from a percentage to pixels.
This will now set the width of the image to always be `200px` or 200 pixels
no matter the size of the page.

> ![](img/pixels.gif)

And if we try to resize the page:

> ![](img/nothing_happens.gif)

nothing happens.

## We've made good progress:

This is where we want to go:

> ![](img/final_1.png)

We're here right now:

> ![](img/current.png)

## Making the image a circle

While we're working on the image, let's make it nice and rounded.

We're going to use one of the most useful tools in programming to figure out how
to do this, the great and mighty Google.

To figure out how to make an image nice and rounded, I might  Google something
like, `make image circular in css`

This is the first result I get

> ![](img/rounded_image.png)

I open it and see this site:

> ![](img/how_to_circular.png)

I focus on this line:

> ![](img/how_to_circular_highlight.png)

It seems like I just need to add

```javascript
border-radius: 50%;
```

Since I want this to apply my `img` tag, I add here:

> ![](img/border_radius.gif)

Hey! It works!

Note that this was just a brief introduction to using Google to figure out
how to do something. You will be doing this **_A LOT_** more of this in the
future.

## We've made more progress!

This is where we want to go:

> ![](img/final_1.png)

We're here right now:

> ![](img/current_2.png)

Now we have to:

- center everything
- change the font

## Adding the body tag

We want to center everything in the entire page.

1. We can add a tag called the `body` tag.
2. Put everything inside of the body tag.
3. Now that everything is inside the body tag, if we tell the CSS to center
   the body, it will center **everything** inside of the body.

### 1. We can add a tag called the `body` tag.

> ![](img/body.gif)

### 2. Put everything inside of the body tag.

> ![](img/body_copy.gif)

### 3. Tell the CSS to center everything in the body tag.

> ![](img/center.gif)

To go over the vocabulary of what we just did:

- we added the new tag, `body`
- this selects all the `body` elements on the page (there's only 1)
- and then we select the body tag and set one of it's properties, `text-align`,
  to `center`. This centers everything inside of the body tag

This is one way to center everything on the page.

This is what I added in the CSS. Again, don't copy and paste or else you won't
remember.

```css
body {
  text-align: center;
}
```

> ![](img/text-align.png)

## Changing the font

Now we also need to change the font:

We are going to use the font `Arial` (feel free to use another font as well)

> ![](img/font.gif)

Here's what it looks like after the change:

> ![](img/arial.png)

To go over the vocabulary of what we just did:

- we the `font-family` attribute to the `body` selector and set the value to
  `Arial`.

This changed the font for the text in the `h1` and `p` tag because they are
both inside of the `body` tag.

## Now for the final changes:

The website already looks complete but there are some things that are missing.

As an analogy, if I said the sentence "Me want apple.", you would know what I
meant but the sentence is gramatically wrong.

In the same way, Chrome understands the code that we have written even though
it is "gramatically" wrong. To make it gramatically correct we need to use the
tags that JS Bin initially gave us.

Let's open up a new tab and open JS Bin.

> ![](img/jsbin.gif)

For now, I wont explain what all this code means, you can

- google for what it means
- or ask someone else that might know what it means

Let's

1. Copy this starter code into our current project.
2. Move the code in our `body` tag into their `body` tag.
3. Delete our old `body tag`.

### 1. Copy this starter code into our current project.

> ![](img/copy_template.gif)

### 2. Move the code in our `body` tag into their `body` tag.

> ![](img/body_cut.gif)

### 3. Delete our old `body tag`.

> ![](img/delete_old_body.gif)

Huzzah! We did it! We're done! Now we need to save our work!

To do that, we must create a JS Bin account first.

## Creating a JS Bin Account

When we click "Login or Register"

> ![](img/login_or_register.gif)

We see that we can "Login or Register via GitHub".

Think about this like Facebook Login, except it is GitHub login.

What is GitHub?

It is a website used by many professional coders to collaborate on code.
Think Dropbox, but for code.

Let's make a GitHub account!

## Creating a GitHub account

Let's create our own GitHub account.

### In a new window, open [`https://github.com`](https://github.com)

> ![](img/c9_v2_setup_1.png)

### Create an account with a valid email

> ![](img/c9_v2_setup_2.png)

### Click "Sign up for GitHub"

> ![](img/c9_v2_setup_3.png)

### Validating your Email Address

- Check your email inbox for a confirmation email from GitHub
- Make sure you click on the link it tells you to to confirm your account.

> *Important Note*: If you don't do this now, you may run into an error in the
> the future that may get you to rip your hair out!

## Login with GitHub

Now that you have a GitHub account, you can login with GitHub

> ![](img/login_with_github.gif)

## Get a link that everyone can see

Now that you're logged in, JS Bin will not "turn off" your website.

So if you get the output URL, you can share this with everyone on the
entire internet now and they will be able to see your website!

## Done!

Huzzah, we did it! You can take this URL and share it with your friends now!

> ![](img/celebrate2.gif)

# Feedback!

We would <3 your feedback on how we can improve this workshop! Please help
future hackers have a better experience by leaving feedback
[here](https://docs.google.com/forms/d/1IxbiDtyP-UOx3hRGu3o2I-iVll95xQ6I_pW8JS3TZ2k/viewform?entry.1677546962=Building+a+portfolio+website).
