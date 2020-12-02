---
name: "Color Scheme Generator"
description: "Create color schemes using React Hooks"
author: "@giridhar7632"
---

# Color Scheme Generator

This workshop is an introduction to [React Hooks](https://reactjs.org/docs/hooks-intro.html). We're building a colorful app - 'random-color scheme generator' using react. It will look something like this.

![Final Result](https://cloud-16p9skn27.vercel.app/0colorscheme.png)

Here's the [Live demo](https://color-scheme-generator.giridharhackclu.repl.co/) and [Source Code](https://repl.it/@Giridharhackclu/Color-scheme-generator#src/index.js)

## Prerequisites

Before staring this workshop, you should have some knowledge about [React.js](https://reactjs.org) and some [ES6](https://www.w3schools.com/Js/js_es6.asp) features of JavaScript.

React Fundamentals
 - [JSX](https://reactjs.org/docs/introducing-jsx.html)
 - [Components and Props](https://reactjs.org/docs/components-and-props.html)
 - [State and LifeCycle](https://reactjs.org/docs/state-and-lifecycle.html)

If you are familar with these, Lets get going.

## React Hooks API

[Hooks](https://reactjs.org/docs/hooks-intro.html) are introduced in React 16.8 version. Previously, [Class components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) were the only way to define a component that had its own state, and lifecycle methods. [Functional components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) of React, which are light and more flexible, are limited in functionality. Hooks enables us to use state and other React features, like lifecycle methods and event handlers, without writing a Class component.

There are many benifits of using Functional components. They are :

- Easier to read, test and debug.
- Have better performance.
- More reusable.

> **Note:** Hooks don’t work inside classes. But you can use them instead of writing classes.

## Setup

For setting up the project fork the repl [here](https://repl.it/@Giridharhackclu/color-scheme-generator-starter#README.md). The starter repl contains ['create-react-app'](https://github.com/facebook/create-react-app) installed. There are some basic styles applied, you will get cleared along the workshop.

Let's start creating our React app.
After setting up the above [repl](https://repl.it/@Giridharhackclu/color-scheme-generator-starter#README.md), click run button to start the live-server (it’ll take a moment to get running the first time). After running successfully, kick down the console, you can see `Hello world!` on the webpage.

Then navigate to `src` folder and create a component `Color.js`. The `Color.js` component displays the colors on the page. Add the following code. This is a basic react functional component that renders a `div` element with class `container`, which has it's styles in `index.css`. Don't forget to include classes to the elements through out the project.

```javascript
import React from 'react'

export default function Color() {
  return (
    <div className="container">
      
    </div>
  )
}
```

Then let's create elements with colors. But what colors? We'll give them random colors. Create a [prop](https://reactjs.org/docs/components-and-props.html#props-are-read-only) `colors`, an `array`, which we get from our main component. Then we will loop through the array with [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). The final component wil be like this :

```javascript
import React from 'react'

export default function Color({ colors = [] }) {
  if (!colors.length) return null
  return (
    <div className="container">
      {colors.map((color, i) => (
          <div
            key={i}
            className="color"
            style={{ background: color }}
          ><span className="name">{color}</span></div>
      ))}
    </div>
  )
}
```

It gets `colors` array as a prop from other component and returns an array of `div` elements with a `backgroundColor`. Each element contains respective `backgroundColor` in form of `hexcode`. If it gets nothing, it renders `null`. Also a [`key`](https://reactjs.org/docs/lists-and-keys.html#keys) is given to every element for it's identity. We finished writing our `Color.js` component. Don't worry, nothing will be on the webpage without rendering the component. 

Then open `App.js` component, where we do our major work. For getting a random color we are using a package [randomcolor](https://randomcolor.lllllllllllllllll.com/), which is a small library of some random colors, is already installed in the starter template. Let's import our `Color.js` and `randomColor` into our `App.js` component. Add these lines of code to the `App` component.

```javascript
import Color from './Color'
import randomColor from 'randomcolor'
```

We create a array of colors and change the colors when you click the button. Create a button with class `btn` inside the `div`.

```html
<button className="btn" onClick={change}>Change!</button>
```

We use state to update the colors array everytime you click the button. 

## The State Hook - `useState()`

Using the `useState()` API, you can create a new state variable, and have a way to alter it. `useState()` accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state. Since it returns an array we use [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to access each individual item. You can add as many `useState()` calls you want, to create as many state variables as you want. Just make sure you call it in the [top level]https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level) of a component (not in an `if` or in any other block). Create two variables `count` and `colors` array using `useState`. 

You have to import `useState()` hook from react library.

```javascript
import React, { useState } from 'react'
import Color from './Color'
import randomColor from 'randomcolor'

export default function App() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])

  return (
    <div>
        <button className="btn">Change!</button>
    </div>
  )
}
```

Let's create a function `change()` which changes `count` when the button is clicked.We use the function `setState()` for changing the count. Add event `onClick` to the button and call the function.

```javascript
export default function App() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])

  const change = () => {
      setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
        <button className="btn" onClick={change}>Change!</button>
    </div>
  )
}
```

## The Effect Hook - useEffect()

The `useEffect()` API accepts a function as argument. The function runs when the component is first rendered, and on every subsequent rerender/update. React first updates the DOM, then calls any function passed to `useEffect()`. All without blocking the UI rendering even on blocking code, unlike the old `componentDidMount` and `componentDidUpdate`, which makes our apps feel faster. It is very effective adding external API class, or event-listeners inside this hook. Since the `useEffect()` functions are run on every subsequent re-render/update, we can tell React to skip a run, for performance purposes, by adding a second parameter which is an array that contains a list of state variables to watch for. React will only re-run the side effect if one of the items in this array changes. If the second parameter is not defined, the `useEffect()` runs infinitely.

Now we can set the colors of our project using `useEffect()`. We get a base color from `randomColor()` and make a color scheme using an [the color API](https://www.thecolorapi.com/form-scheme). The following `getColors()` function creates elements in the `colors` array. We can get different color schemes using our `baseColor`from the [the color API](https://www.thecolorapi.com/form-scheme).

Make sure that you import `useEffect` from React.

```javascript
import React, { useState, useEffect } from 'react'

const getColor = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=quad&count=5`)
    .then(data => data.json())
    .then(data => {
      setColors(data.colors.map(color => color.hex.value))
    })
  }
```

Then we will call this function inside our `useEffect()` hook. As described, we use `count` as a second parameter for recalling the hook. 

```javascript
  useEffect(getColor, [count])
```

Every time you click the button, `count` changes. As the `count` changes, the `useEffect()` runs and `getColor()` is executed, the `colors` array changes. 

![Visualisation](https://cloud-endlseu6b.vercel.app/0resized.png)

You cannot see any colors on the screen. Let's now render the `Color.js` component inside for `App.js` component and pass the `colors` array as props.

```javascript
import React, { useState, useEffect } from 'react'
import Color from './Color'
import randomColor from 'randomcolor'

export default function App() {
  const [count, setCount] = useState(0)
  const [colors, setColors] = useState([])

  const change = () => {
      setCount(prevCount => prevCount + 1)
    }

  const getColor = () => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=quad&count=5`)
    .then(data => data.json())
    .then(data => {
      setColors(data.colors.map(color => color.hex.value))
    })
  }

  useEffect(getColor, [count])
  console.log(colors)
  return (
    <div>
        <Color
          colors={colors}
        />
        <button className="btn" onClick={change}>Change!</button>
    </div>
  )
}
```

That's it!! Now you can see random color-schemes on the webpage. You can change the colors, clicking the button. The `useState()` and `useEffect` are the most used hooks in react. Check the final code [here](https://color-scheme-generator.giridharhackclu.repl.co/).

![Final Project](https://cloud-hptr7s5bf.vercel.app/0color-schemer.gif)

There are other additional hooks and are rarely used. You can check them here.

- [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) 
- [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref)
- [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo)

You can also create [custom hooks](https://reactjs.org/docs/hooks-custom.html)

## Hacking

- You can customise the styles in `index.css` and make the project mobile responsive.
- Create different types of schemes. Refer [the color api](https://www.thecolorapi.com/docs#schemes) for more types of schemes.
- You can add some more functionality to this app, like getting the `baseColor` from the user.
- You can also create a custom function which generates a random color, without using [randomcolor](https://randomcolor.lllllllllllllllll.com/) package.

Make use of your creativity, use hooks in your projects and share it with me on slack as [@Giridhar](https://hackclub.slack.com/team/U013E6KE9UJ).

## Inspiration

- Example-1: [Demo](https://Monochrome-color-schemes.giridharhackclu.repl.co/). [Source code](https://repl.it/@Giridharhackclu/Monochrome-color-schemes#src/App.js).<br>
Monochrome Color Schemes - It generates monochrome color-schemes. Same as the project in this workshop, but with different type of scheme.

- Example-2: [Demo](https://custom-color-schemer.giridharhackclu.repl.co/). [Source code](https://repl.it/@Giridharhackclu/Custom-color-schemer#src/App.js).<br>
Analogic Color Schemes -   It generates Analogic-complement color-schemes. Same as the project in this workshop, but with different type of scheme.

- Example-3: [Demo](https://random-color-scheme.giridharhackclu.repl.co). [Source code](https://repl.it/@Giridharhackclu/desired-color-scheme#src/App.js).<br>
In this example, the [randomcolor](https://randomcolor.lllllllllllllllll.com/) package is not used. Instead created a custom function to generate random colors.

Use the power of React Hooks in you next React project. Hope you enjoy this workshop! :v:
