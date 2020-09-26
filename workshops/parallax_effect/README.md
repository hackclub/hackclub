---
name: 'Parallax Effect'
description: 'Creating greater user experience on web using vanilla javascript'
author: '@giridhar7632'
---

# Parallax Effect
**using vanilla javaScript**


One of the most popular effects of the modern web experience is the **parallax effect**. There are many javaScript libraries available out there for creating parallax effect. But we are going to use vanilla javascript to make one. Then get started and follow along!
You should have some beginner-intermediate knowledge about HTML, CSS and some javaScript.

We are going to make something like this

<a href="https://total-parallax.giridharhackclu.repl.co/">![Final REsult](https://cloud-1z03ndewk.vercel.app/ezgif.com-gif-maker__2_.gif)</a>

Here's the [live demo](https://total-parallax.giridharhackclu.repl.co/), and [source code](https://repl.it/@Giridharhackclu/total-parallax#index.html)

# Getting Started

## Parallax

Parallax movement is when things move at different speeds relative to each other. This effect can be used to create an illusion of depth. 
We will actually experience this effect while scrolling a webpage. It's called Parallax scrolling.

The technique is popular in many places including video games, where it’s usually seen in the layered backgrounds.

But what exactly makes the illusion? :neutral_face:<br>
As you know, objects at farther distances moves with slower speeds than the nearer ones. As you scroll or do something to trigger the effect, you feel the illusion as the elements moves with different speeds.

> **Note:** Parallax scrolling does not always work on mobile devices smartphones. However, you can use media queries to turn off the effect on mobile devices.

We can see how the parallax scrolling works in this example [here](https://codepen.io/samdbeckham/full/OPXPNp)

<a href="https://codepen.io/samdbeckham/full/OPXPNp" target="_blank"><img src="https://cloud-kt149rdr8.vercel.app/ezgif.com-add-text.gif" alt="parallax scrolling"/></a>

^As you scroll, different layers moves with different speeds.

## Advantages of Parallax Effect

The world is changing very fast, isn't it? If you want to make your website amazing, it's not enough to show static elements. You have to amaze the visitor and make them want to explore your site, otherwise they can leave fast. You have to show them some cool things and visual suprises, but not too time taking. Parallax effect makes it possible. Moving elements on scrolling or on moving mouse will make them some what interested.
You can create something nice! using parallax effect of your choice.

## Creating the Parallax Effect

Practically a parallax is composed of more than one layer in parallel, moving along on scroll at different speeds, giving us the feel that they're at different distances.

### Setup

[Repl.it](https://repl.it) is an online code editor. It's similar to Google Docs, but has some important features that make it much better for typing code than a regular text editor.
Fork this repl and explore ! [here](https://repl.it/@Giridharhackclu/parallax-starter#index.html).

It contains three `div` elements with classes `layer l1`, `layer l2` and `layer l3` added with some basic styles. Go ahead!  use your creativity and customise the styles.

<a href="https://repl.it/@Giridharhackclu/parallax-starter#index.html"><img src="https://cloud-6z92hbh0u.vercel.app/screenshot_2020-09-22_171732.png" style="{border-radius: 3px;}" alt="#index.html"></a>

For adding parallax effect, The thing we have to do is select the layer and change it's speed while scrolling. That's it! :sweat_smile:

Let's start doing it!

### Get going..

Go to [script.js](https://repl.it/@Giridharhackclu/parallax-starter#script.js) and add the following `function`.<br>

```javascript
const parallax = (layer, distance, speed) => {
  const item = document.querySelector(layer)

  item.style.transform = `translateY(${-distance*speed}px)`
}
```
This <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">`function`</a> has three arguments `layer`- the layer you want to add parallax, `distance`- how much we scroll and `speed`- the required speed change. We are going to add parallax for multiple layers. That's why we created a function for recalling it for different layers.<br>

And then we are going to get the element using `querySelector`. You can use any javascript DOM selector as your wish. Finally we will be translating the `Y-offset` of the element using CSS `transform: translateY();` for changing the speed of the layer. 
The positive value into `translateY()` translates downwards and negative value translates upwards. Discover more about `translateY( )` [here](https://developer.mozilla.org/en-US/docs/web/css/transform-function/translateY).

<a href="https://cloud-7jtog4dbv.vercel.app/screenshot_2020-09-22_184214.png"><img src="https://cloud-7jtog4dbv.vercel.app/screenshot_2020-09-22_184214.png" alt="translateY() example" height="250px" width="auto"/></a>

## Event Listener
Now we are going to call this function while scrolling. So add an [event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event">`scroll`</a> . The function given as argument gets executed.<br>

```javascript
document.addEventListener('scroll', () => {
  
})
```

> **scrollY:** The read-only scrollY property of the Window interface returns the number of pixels that the document is currently **scrolled vertically**. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is **scrolled horizontally** from the **scrollX** property. - [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY).

The `parallax` function is called inside. Here, for this project we are going to select the layers with classes `l1` and `l3` from the document. Then the `distance` argument in `parallax` function is how much we scroll i.e., `window.scrollY` and the speed value can be customised. The `speed` argument decides whether the layer moves faster or slower.
Add the following code<br>
```javascript
parallax('.l1', window.scrollY, 0.5)
parallax('.l3', window.scrollY, -0.5)
```
For faster speeds the `speed` will be positive and for slower speeds it should be negative. Anyhow we have to make sure that `translateY()` is negative for the faster element and positive for slower element.
In the above code, we are adding faster speed to `l1` and slower to `l3`. That means if you scroll `100px` upwards, the faster layer scrolls `150px` upwards and the slower layer scrolls somewhat about `50px`.

So finally look at the output and scroll.

Your final page will look something [like this](https://parallax-effect.giridharhackclu.repl.co/).

<a href="https://parallax-effect.giridharhackclu.repl.co/"><img src="https://cloud-qld8y6jii.vercel.app/final_output.gif" alt="final result"/></a>

Try changing the speed to `1` and observe what happens to each layer and think why it happens. You can check the answer [here](#Speed-1).

That's it! You can add any number of layers for the document and call the `parallax` function. This is the *parallax effect*.
This is the main basic principle of Parallax effect. You can modify the function `parallax` and get the result you want.

Now Let's try a different parallax.

## Horizontal Parallax

Now add another two `div` tags with classes `layer l4` and `layer l5` to `index.html`

```html
<div class="layer l4">Right</div>
<div class="layer l5">Left</div>
```

In horizontal parallax, the elements in the page move horizontally as you scroll. 
Add the following `function` , which causes horizontal motion.<br> 
With the following `function` `hrparallax` the layer gets translated along x-direction as you scroll vertically.

```javascript
const hrparallax = (layer, distance, speed) => {
  const item = document.querySelector(layer)

  item.style.transform = `translateX(${-distance*speed}px)`
}
```
The positive value translates rightwards and negative value translates leftwards. Discover more about `translateX( )` [here](https://developer.mozilla.org/en-US/docs/web/css/transform-function/translateX).

<a href="https://cloud-7jtog4dbv.vercel.app/screenshot_2020-09-22_185155.png"><img src="https://cloud-7jtog4dbv.vercel.app/screenshot_2020-09-22_185155.png" alt="translateX() example" width="auto" height="200px"/></a>

Add the following code

```javascript
hrparallax('.l4', window.scrollY, -0.5)
hrparallax('.l5', window.scrollY, 0.5)
```

For rightward movement the `speed` will be negative and for leftward movement it should be positive.Here `l4` moves rightwards and `l5` moves leftwards.

Then your final page will look something [like this](https://total-parallax.giridharhackclu.repl.co/).

![Final REsult](https://cloud-1z03ndewk.vercel.app/ezgif.com-gif-maker__2_.gif)

That's it! You added both `vertical-parallax` and `horizontal-parallax` effects. Well done.:wink:

## Hacking

Your creativity is not restricted to only this example. You can create different parallax effects. 
1) In this example, I focused only on scrolling vertically. You can use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX">`scrollX`</a> for creating parallax while scrolling horizontally.
1) You can use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate">`transform: translate(X,Y);`</a> or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d">`transform: translate3d(X,Y,Z);`</a> for creating different effects.
1) You can also create a parallax on `mousemove` using <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageX">`pageX`</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageY">`pageY`</a>.

You can add parallax-effect on your websites for creating best of the user experience and display your content more interactively.
Make use of creativity and create different parallax effects. Share it with me on slack [@giridhar](https://hackclub.slack.com/team/U013E6KE9UJ), I'd love to here from you!

## Inspiration

These are some projects made using parallax-effect. 

* **Multilayer Parallax** : [Firewatch](http://www.firewatchgame.com/)- they created really awesome hero page using multilayer parallax.

* **Horizontal parallax** : Best example of horizontal parallax :upside_down_face: 
  * Check it [here](https://codepen.io/danbhala/full/GJGQad). [Source code](https://codepen.io/danbhala/pen/GJGQad).
  * You can create a gallery using horizontal parallax effect. Check it [here](https://codepen.io/pehaa/full/zYxbxQg). [Source code](https://codepen.io/pehaa/pen/zYxbxQg).
  
* **Parallax on Mouse Move** : Not only on `scroll`, Parallax effect can also be seen on `mousemove`.
  * You can find mousemove parallax effect in [GitHub erroe page](https://github.com/404). You can see the castle and all things behind the octacat move as you move your mouse pointer. :octocat:
  * Check this awesome effect [here](https://codepen.io/ge1doot/full/oXWepr). [Source code](https://codepen.io/ge1doot/pen/oXWepr)
  * I created this one for demonstrating parallax on mousemove. You can check it [here](https://horizontal-parallax-effect.giridharhackclu.repl.co/). [Source code](https://repl.it/@Giridharhackclu/horizontal-parallax-effect).
  
Check this article for awesome next-level parallax examples - [article](https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html) 
  
Hope you love this workshop! :v:

## Speed-1 
In vertical parallax, when the speed is `1` both upwards and downwards, that means the layer gets translated with speed of scrolling.

The faster layer moves with double the speed of normal scrolling-speed. While, the slower layer will be fixed. Because while you are scrolling upwards it gets translated downwards with the same speed. So it appears as fixed in its position.
