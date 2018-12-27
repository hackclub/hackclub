---
name: Starting with Next.js
description: Intro to React & Next.js with a shopping list website
author: "@lachlanjc"
group: react
order: 4
---

# Welcome to React with Next.js

Hi there! This workshop is an introduction to [React.js](https://reactjs.org) using [Next.js](https://nextjs.org). It assumes you have some familiarity with HTML and JavaScript, but you should be able to follow along. We’ll also assume some familiarity with programming concepts like functions, objects, arrays, and classes, but if you don’t know what those are, just try to follow along.

A quick note: we’re using some features from ES6, a recent version of JavaScript. In this tutorial, we’re using [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) statements. If you’re more familiar with older versions of JavaScript, you might find the [Babel REPL](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA) useful to see what ES6 code compiles to.

## Intro to React

HTML, as you’re likely familiar, is the way you declare what content goes on your webpage. We’re now moving past just webpages toward building interactive apps. Traditional web apps have regular HTML, then use JavaScript to manually update the HTML when data changes. Consider getting a new message on Facebook: when there’s a new message, you don’t have to reload the page, the site automatically inserts the new message into the list.

React is a framework built by engineers at Facebook a few years ago to make building complex web apps way easier. We’re going to start super simply, using React to make a regular-looking website, then start adding more complex functionality. Here are five terms you should know:

- **JSX.** Some engineers came up with a way to write HTML inside JavaScript. It sounds crazy, but it uses almost the same syntax as regular HTML (deep inside it’s fancy syntax for JavaScript functions that create HTML elements). The simplest JSX: `<p>Hi!</p>`. You can also use JavaScript inside JSX. So if you’ve got `const name = 'Zach Latta'` in your JS file, you can write `const element = <h1>Welcome, {name}</h1>`, and on your page it’ll show `Welcome, Zach Latta` in a heading.
- **Components.** React apps are built with the idea of components, which are pieces of your application that encapsulate all their stuff—data, state (see below), styling, subcomponents. Everything is a component, from just one tag (the `p` tag above is a component), but you can make your own: `const Welcome = () => <h1>Welcome!</h1>`. You can then write somewhere else in your app, `<Welcome />`. This is a simple component, but you can imagine if that was a whole section of your site, being able to render it multiple times in different locations is super useful. You can compose components together to create complex interfaces.
- **Props.** Short for “properties”, props are how you pass data between components. These are “inputs” that you can use inside the component. Let’s update the `Welcome` component we just talked about with props: `const Welcome = ({ name }) => <h1>Welcome, {name}!</h1>`. Here, we’re saying we have a component called `Welcome` and it accepts an input called `name`. You can use the curly braces inside a component to “embed” JavaScript values, in this case the `name` prop’s value. Props are passed just like HTML attributes: `<Welcome name="Zach Latta" />`.
- **State.** This is data in your app. That might be the fact that a dropdown menu is open, or the. If you need information to decide how you render your site, it goes in state. We’ll get to using state later.

## Components

Let’s make a more complex component now, using an extra function.

```js
const formatName = user => user.firstName + ' ' + user.lastName

const Welcome = ({ user }) => <p>Welcome, {formatName(user)}!</p>
```

```js
<Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
```

JSX tip: when you’re passing a string (text) value to a prop, you can use quotes, just like in HTML, but if you’re passing JavaScript, you use the curly braces, as shown. ([Want to read more about JSX?](https://reactjs.org/docs/introducing-jsx.html)) Here, we’re using double braces, the first ones to give the prop value, the inside ones to say we’re declaring a JavaScript object.

## Next.js

So far we’ve just been looking at React. [Next.js](https://nextjs.org) is a framework built to make building React-based web apps way easier. It handles setting up multiple pages, starting a server, and a bunch of super complex setup in the background, but [a bunch of major companies use it](https://nextjs.org/showcase/).

You’ve been reading long enough; let’s open up your development environment. Get started with a super simple template on [Glitch](https://glitch.com): [https://glitch.com/edit/#!/hackclub-next-starter?path=pages/index.js](https://glitch.com/edit/#!/hackclub-next-starter?path=pages/index.js). Click “Remix” & you can get started. Click “Show Live” to see the website.

Looking around the project, there are two important files:

- `pages/index.js`. To make a page on your site with Next.js, instead of an `index.html` file, we’ll have a `pages` folder and put `index.js` inside of it. Want an /about page? Add `about.js`.
- `package.json`. In a JavaScript-based project, we set up this file to define dependencies on “packages”—other bundles of code we need for ours to run. You’ll see we’re requiring `next`, `react`, & `react-dom` (that last one’s the “adapter” to run React on the web). Glitch automatically installs the dependencies and runs the app for us.

At its most basic, a page with Next.js (so a file like `pages/index.js`) looks like this. What gets rendered on the page goes inside the “default export” of the file.

```js
export default () => <h1>Welcome!</h1>
```

## Making your first Next.js page

Let’s try out that component we were using above:

```js
const formatName = user => user.firstName + ' ' + user.lastName

const Welcome = ({ user }) => <p>Welcome, {formatName(user)}!</p>

export default () => (
  <div>
    <h1>Hi!</h1>
    <Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
  </div>
)
```

Hey, look at that! Try changing the values of `firstName` & `lastName` to you. Your site should immediately update.

Now, this page could easily have been made in HTML. Try adding more `Welcome`s, like this:

```js
export default () => (
  <div>
    <h1>Hi!</h1>
    <Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
    <Welcome user={{ firstName: 'Max', lastName: 'Wofford' }} />
    <Welcome user={{ firstName: 'Lachlan', lastName: 'Campbell' }} />
  </div>
)
```

## Making a new page

Let’s make a second page, and add a link to it!

First up, the link. We need a way to make that link, but luckily Next.js has our back here. Under the `import React from 'react'` line, add `import Link from 'next/link'`. You’ve just imported your first React component, and can use it!

```js
export default () => (
  <div>
    <Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
    …
    <Link href="/shopping">
      <a>Let’s go shopping</a>
    </Link>
  </div>
)
```

The `Link` component makes whatever we click on go that page, then the `<a>` tag is the actual HTML element that’ll appear on our page.

Now, that doesn’t go anywhere! Click on “New file” and enter `pages/shopping.js`. Let’s make a quick list.

```js
export default () => (
  <div>
    <h1>Shopping List</h1>
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Pears</li>
      <li>Strawberries</li>
    </ul>
  </div>
)
```

Okay, this feels pretty familiar. However, declaring the `<li>` elements over & over is getting tiresome. Let’s move the list of items into a JavaScript array (`['thing', 'second thing']`, etc), then “map” through each item and put it in the HTML.

```js
const items = ['Apples', 'Oranges', 'Pears', 'Strawberries']

export default () => (
  <div>
    <h1>Shopping List</h1>
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)
```

Hold up. You just made a huge shift in how you develop things: you went from writing the code for the website directly yourself, to _writing the code for the website to generate itself_. You define the data (in a “real” app, you’d fetch the data from a server) and _how_ it should be shown on your site, but the site puts two and two together for the final product.

This opens the gateway to drastically more powerful and interesting websites. You can fetch the current temperature from a weather service and make a component to display it in. You can fetch some news headlines and display a list of articles with images. Yes yes yes!

## Add items to the list

We’re going to take this to the next level now, allowing users to add items to the list. We’ll need to use React’s state feature to keep the data and handle the “events” (user typing, user clicking the Add button).

First, let’s make a new component. Since this component uses state & events, we need to use React’s format for complex components, classes. In `pages/shopping.js`, add this line at the top:

```js
import React, { Component } from 'react'
```

Cool, now we need to make our component. We’ll need a text input, a button to add the item, and the same list of items.

```js
class List extends Component {
  render() {
    return (
      <>
        <div>
          <input type="text" placeholder="New item" />
          <button>Add item</button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default () => (
  <div>
    <h1>Shopping List</h1>
    <List />
  </div>
)
```

That weird first line inside the `return` is called a “fragment”, and that’s just an easy way to wrap multiple items in one tag.

Next up, we need to define some state on this component. Delete the `const items` line, and declare some state on the component:

```js
class List extends Component {
  state = {
    items: ['Apples', 'Oranges', 'Pears', 'Strawberries'],
    newItem: ''
  }

  render() {
    const { items, newItem } = this.state
    return (
      <>
        <div>
          <input type="text" value={newItem} placeholder="New item" />
          <button>Add item</button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}
```

`newItem` is where we’ll keep the text the user enters into the text box. Now, all that’s left is to add some event handling:

```js
class List extends Component {
  state = {
    items: ['Apples', 'Oranges', 'Pears', 'Strawberries'],
    newItem: ''
  }

  onEdit = e => {
    this.setState({ newItem: e.target.value })
  }

  onAdd = e => {
    this.setState(state => ({
      newItem: '',
      items: [...state.items, state.newItem]
    }))
  }

  render() {
    const { items, newItem } = this.state
    return (
      <>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={this.onEdit}
            placeholder="New item"
          />
          <button onClick={this.onAdd}>Add item</button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}
```

This is a little more complex, let’s break it down. `onEdit` is called every time the text in the box changes, and it’s given an event, `e`. We need to save the event’s target’s (the text box) value, and set it to `newItem` in component state. Next, `onAdd` is called by the button’s `onClick` event. Two things are happening here: we need to clear the text box (so we set `newItem` to a blank string), then get the previous value with `state.newItem` and append it to the list of `state.items`.

React automatically calls `render()` whenever the state changes, so your app updates immediately! The list won’t be saved if you come back another day—we can handle data storage later though.

## Bonus: styling!

When you’re using CSS, every style you add applies to your whole website. This is handy when you’re getting started, but if you imagine working at Facebook, if one person makes the buttons styled a little differently, the entire website updates. With thousands of people working together, there’s no way they can all keep track of changes like that.

One of the really interesting features of Next.js is that you can encapsulate styling inside a React component. If you go back to `pages/index.js`, add a `<style>` tag just like this.

```js
export default () => (
  <div>
    <h1>Hi!</h1>
    <Welcome user={{ firstName: 'Zach', lastName: 'Latta' }} />
    …
    <style jsx>{`
      h1 {
        color: magenta;
      }
    `}</style>
  </div>
)
```

Open up your app: the homepage has a blue heading, but critically, the heading on the Shopping page doesn’t! Magical. So, you can style components on the Shopping page separately too.

```js
class List extends Component {
  render() {
    const { items, newItem } = this.state
    return (
      <>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={this.onEdit}
            placeholder="New item"
          />
          <button onClick={this.onAdd}>Add item</button>
        </div>
        <ul>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
	<style jsx>{`
          ul { list-style: none; padding: 0; }
          li { padding: 1em 0; border-top: 1px solid #eee; }
	`}</style>
      </>
    )
  }
}
```

