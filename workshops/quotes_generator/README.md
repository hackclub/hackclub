---
name: 'Quotes Generator'
description: 'Build a random quotes generator with ReactJS'
author: '@faisalsayed10'
---

# Quotes Generator

Today, We'll be building a random quotes generator using an API in React. This will basically give you an idea of handling APIs in React.

[![Quotes Generator](https://cloud-fl1p1zjes.vercel.app/0image.png)](https://rzfit.csb.app/)

Here's the [source code](https://codesandbox.io/s/random-quotes-generator-rzfit).

## Part 1: Prerequisites

You should know some basics of React and I recommend you to follow [this](https://workshops.hackclub.com/nextjs_starter/) workshop before proceeding further. If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [CodeSandbox](codesandbox.io) which turns out to be the best online code editor for React.

To get started, go to this [starter code](https://codesandbox.io/s/quotesgeneratorstartercode-29ffd). Press **`ctrl+s`** / **`cmd+s`** and it will automatically fork it for you. Now, we have everything set up so let's get started!

## Part 3: Building the project

### 1) Inspecting the starter code

Let's first have a look at our project's starter code.

First, there are 2 main directories and a `package.json` file. We'll ignore the `package.json` file for now and let's have a look at the 2 directories, namely, `public/` and `src/`.

Usually, the `public/` directory contains an HTML file and all your assets. We won't be touching the `public/` directory during the whole workshop, not even the HTML file!

Next is the `src/` directory which contains all your JavaScript files and your CSS files. We have an `index.js` file, which basically renders our React code. The `style.css` file is already written for you.

Next is the `App.js` file. Now basically, when we build big projects, we don't start directly with the `App.js` file. We create small components and then add them together in the `App.js` component. But today, we'll be building a quotes generator, which turns out to be pretty small and easy. So, we'll start writing our code directly in the `App.js` component to avoid making unnecessary components.

This is what our `App.js` file looks right now.

```jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}
```

This code simply renders out `Hello World` on your browser.

Now we know where we are with our code, so it's time to start!

### 2) Writing the code

First let's build the basic UI of how our website should look like. Write the following code in the `App` component's `return()`.

```jsx
export default function App() {
  return (
    <div className="App">
      <h1 className="title">Quotes Generator</h1>
      <p className="quotes">This is a quote</p>
      <p className="author">- author name</p>
      <button className="button">New Quote</button>
    </div>
  );
}
```

We built our very basic UI for our project and everything is self-explanatory here. Nothing works right now, so let's start adding the main functionality.

This is what your preview window should look like:

![Preview window](https://cloud-1ugc07d1z.vercel.app/0image.png)

Basically, we'll be making an API request to a url which will return us a json of quotes and their authors. Then we'll store this data in a state using `useState` so we can re-render our component whenever it changes.

The url where we will make the request is - `https://type.fit/api/quotes`.

If you open this link in the browser, you'll see a json file!

Let's start working with it.

First, we'll create a new variable to store this url, next we'll create an empty state to store the data.

```jsx
import React, { useState } from "react"; //<-- Import useState
import "./styles.css";

const url = "https://type.fit/api/quotes"; // The API URL

export default function App() {
  const [quotes, setQuotes] = useState({}); // Creating a state

  // Returning all the jsx we wrote below this line.
  return (...)
}
```

Explanation: We create a `url` variable using `const` so its value never changes again and assign it to the API URL. Then we'll import `useState` from `react` and using the basic boilerplate code, we create a `quotes` state. It is currently assigned to an empty object, but will be replaced soon!

Now let's write a function which will make the API request and fetch the data from that URL.