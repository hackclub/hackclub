---
name: Creating a jaw-dropping Scrapbook
description: A simple introduction to CSS and its wonderful quirks!
author: '@sampoder'
---

# Creating a jaw-dropping Scrapbook

![Jaw dropping GIF](https://media2.giphy.com/media/MuTenSRsJ7TQQ/200.gif)

_^ what's going to happen when people see your Scrapbook_

One of the amazing things about building projects for the web is just how easy it is to make it beautiful! To style web projects, we use a language called CSS. It lets us do everything from changing to background colour to animating text!

<img src="https://cloud-5j06exp7f.vercel.app/screenshot_2020-09-12_at_7.29.11_pm.png" width="380" alt="Sam Poder's Scrapbook Profile">

Today, we’re going to be learning about CSS by customizing a [Scrapbook](https://scrapbook.hackclub.com/) profile (^ like mine above). Scrapbook is a platform where hackers can share photos of what they make or just of their daily life. If you don’t have a profile, log in to the Hack Club Slack, visit the [#scrapbook](https://hackclub.slack.com/archives/C01504DCLVD/) channel, take a photo (or use an old one) and post it! 

Next up, you are going to want to open up the [Scrapbook Customizer](https://scrapbook.hackclub.com/customizer/). Type in your username at the top, and delete any code in the right column. Click **‘Go’**.

We’re now ready to get started!

## Magical Colours!

To make setting colours easier, Scrapbook uses CSS variables. CSS variables work like variables do in any other programming language. You define the variable and then instead of pasting the value in everywhere you add `var(--variable-name)`. This makes it so that if you want to change a theme colour (like we're doing today!) you can do it with one line.

For Scrapbook there are 3 key colour variables that we’re going to want to play around with today. These are the background colour, the colour of text and the colour of the posts (referred to as colors-elevated below). 

To tell the web browser the exact colour we want, we can use either HEX codes, or RGB values. For this workshop, we’re going to use HEX codes. To help us get those, we can [Google “colour picker”](https://www.google.com/search?q=color+picker). From here, you can play around with the slides and choose your preferred colour. Choose 3 colours to be used for the profile.

Then in the right column, type:

```css
:root { 

  --colors-background: YOURCOLOUR; 

  --colors-text: YOURCOLOUR; 

  --colors-elevated: YOURCOLOUR;

}
```

Replace `YOURCOLOUR` with the HEX codes you found, make sure to include the hash (hashtag) symbol at the start.

You may still see some grey, these are elements that use the `--colors-muted` variable, can you work out how to change them based on what we learnt above?

I choose these colours:

<img src="https://cloud-loib1whnd.vercel.app/screenshot_2020-09-12_at_8.01.02_pm.png" width="380" alt="Green and purple themed Scrapbook">

## Fancy fonts ❡

What if your Scrapbook was in cursive? Or in a crazy techno font! Fonts can give your page a lot more character, so let’s switch them up.

 is a great place to get started, scroll through all their fonts and find one you like! Click it and then for each of its styles click “Select this Style”. Then in the bar that has popped up on the right, click `Embed` and choose `@import`. Copy the first text box without the `<style>` tags. You should have something like:

```
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap');
```

As we’ve most likely chosen different fonts, don’t worry if our links are different. Now paste this text snippet into the top of your code file (what you were writing on the right side).

Similar to colours, Scrapbook uses CSS Variables to make it super simple for us to change the fonts. 

Add the following code snippet just below the --colors-elevated line. 

```css
:root { 

  --colors-background: YOURCOLOUR; 

  --colors-text: YOURCOLOUR; 

  --colors-elevated: YOURCOLOUR;
  
  /* Add this code below */
  
  --fonts-body: 'Font name', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI';

}
```


Replace ` ‘Font name’` with the name of your font, just keep the quotes! We’ve left the other fonts there as a backup for if the font we want won’t load.

I went techno style, with the [Audiowide](https://fonts.google.com/specimen/Audiowide?category=Display&sidebar.open=true&selection.family=Audiowide) font.

<img src="https://cloud-loib1whnd.vercel.app/screenshot_2020-09-12_at_8.01.02_pm.png" width="380" alt="Green and purple themed Scrapbook">

## **Crazy CSS Animations - Part 1 ✌︎**

We’ve got a fancy font and some magical colours but this site still needs some jazzing up! Looks animate it!
First off, we’re going to make our text rainbow animated.

Animations are made with keyframes, where you set the state of the object (in CSS properties) at different stages of the animation. If you've got any experience with video animation keyframing works very similarly here!

Let’s define that animation:

```css
@keyframes rainbow {
  14% {
    color: #ff0000;
  }
  28% {
    color: #ffa500;
  }
  42% {
    color: #ffff00;
  }
  56% {
    color: #008000;
  }
  70% {
    color: #0000ff;
  }
  84% {
    color: #4b0082;
  }
  100% {
    color: #ee82ee;
  }
}
```

What this does is, 14% through the animation it will be #ff0000 (red), 28% through the animation it will be #ffa500 (orange) and so on…

Now, we need to tell the web browser which element should have the animation applied to it. How we identify an element is with a class name and a `.` before it. To start we want to type this:

```css
.header-title-name{

}
```

In between the two curly braces, we can type stuff that changes what all the elements with the class: header-title-name have. Inside of this, let’s ask the web browser to add our animation to the element. We can do this by adding this:

```css
animation: rainbow 5s infinite;
```

We want to add this inside the curly braces. What this does is apply the rainbow animation and run it for an infinite amount of times for 5 seconds each.

Here's what I got:

<img src="https://cloud-1fmtzoja5.vercel.app/ezgif-5-db525cfe2a47.gif" width="380" alt="Rainbow animated text">

I’ve got a challenge for you. Let’s make that profile picture spin! 

Here are a few things you’ll need to know:

- The class for the profile picture is `header-title-avatar`
- To rotate a image use: `transform: rotate(20deg)`

So can you do it? The solution is [here](#spinner-solution).

<img src="https://cloud-ojh0xf17r.vercel.app/ezgif-5-5540a1713ebc.gif" width="380" alt="Spinning profile picture">

## **Crazy CSS Animations - Part 2** **✌︎**

Animations can also happen when you hover over an element as well. This is through pseudo-classes, a word that you can add to your selector to specify a specific state. For example, `.header-title-avatar:hover` applies when the avatar is being hovered over.

What we're going to do in this section is to have it so that when we hover over a post it gets bigger. As each post has a class of `post` we can do this with the following:

```css
.post:hover {
  transform: scale(1.02);
}
```

However, when we do this it's very abrupt and not at all smooth.

To fix this we want to add this to our CSS:

```css
.post { 
  transition: all .2s ease-in-out; 
}
```

What this does is that it means that the change will transformation will ease in and out, making it buttery smooth!

<img src="https://cloud-af3nqoqwq.vercel.app/ezgif-4-effdbb2d1794.gif" width="380" alt="Grow on hover animation for each post">

## Hacking

It's time for you to control, there are so many epic things you can do with CSS! So go forward and make your Scrapbook unique to you!! Here a few guiders:

- Make a gradient background. You won't be able to do this with the CSS variables but you can by applying the background to the body tag instead. I'm saying too much, learn more about CSS gradients [here](https://css-tricks.com/css3-gradients/)!
- You can change the text of the UI. Check out this [article](https://css-tricks.com/swapping-out-text-five-different-ways/#css-only-way) for to get a better sense of what I'm talking about! That's what I call a hack ;)
- Animate everything! You've seen how we can animate elements in CSS but we've really only changed the colour and made something bigger. There are so many more properties that are animatable, check out this [extensive list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties). Also, check out my classes reference just below so you know how to change each element on the page.

## Publishing

To publish click `Add to Gist`. Copy the link. Now hop over to the #scrapbook-css channel in Slack and paste the link into a new message to apply it to your scrapbook!

Once you're done making your profile pretty, how about sharing it in #scrapbook? Tag me (@sampoder), I'd love to see it!

## Reference Guide

Here are all the classes you'll need to know to make a splendid Scrapbook:

`header` is the entire section above your posts.

`header-col-1` is the section with your avatar, name, streak (if set to display), social links and profile audio (if set). 

`header-title-avatar` is your Avatar, it is a `<img>`.

`header-title-name` is the heading with your name.

`header-content` contains all of your social links and your streak (if set to display).

`header-streak` is the indicator of your streak.

`header-links` are your social links.

`header-link` is a social link, there are likely multiple in the links section.

`header-webring` is a section that contains each person in your webring if you've created one.

`header-webring-mention` is a mention of a person in your webring, there are likely multiple in the webring section.

`header-chart` is the chart that shows how often you post.

`posts` is the section with all your posts.

`post` is a post.

`post-header` is the part of the post with the date / time.

`post-attachments` is the section with each image, video or audio file you've attached to your Scrapbook post.

## Inspiration

To finish off, I'd like to leave you with some amazing customized Scrapbook profiles.

- The god of Scrapbook profiles: Caleb's scrapbook is too amazing for me to describe. Honestly, just [check it out](https://scrapbook.hackclub.com/caleb/).
- Ghoshwolf has made a retro-themed Scrapbook, view it [here](https://scrapbook.hackclub.com/pauliukas.gec).
- Yash Karthik has made a purple Scrapbook, with a few hidden gems. Here's a [link](https://scrapbook.hackclub.com/yashkarthik95/).
- I also have [my own](https://scrapbook.hackclub.com/sampoder) customized Scrapbook profile! The theme is always changing, at the time of writing it's Soviet themed.

I truly hope you enjoyed this workshop, happy hacking!

## Spinner Solution

```css
@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(180deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.header-title-avatar {
  animation: rotate 5s infinite;
}
```
