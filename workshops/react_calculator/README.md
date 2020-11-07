---
name: 'Simple Calculator'
description: 'Build a simple calculator with ReactJS'
author: '@faisalsayed10'
---

# Quotes Generator

Today, We'll be building a simple yet fun calculator in React.

[![Quotes Generator](https://cloud-ht4su332c.vercel.app/0image.png)](https://5trtj.csb.app/)

Here's the [source code](https://codesandbox.io/s/workshopcalculator-5trtj).

## Part 1: Prerequisites

You should know some basics of React and I recommend you to follow [this](https://workshops.hackclub.com/nextjs_starter/) workshop before proceeding further. If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

For writing our code, we'll be using [CodeSandbox](codesandbox.io) which turns out to be the best online code editor for React.

To get started, go to this [starter code](https://codesandbox.io/s/workshopcalculatorstarter-1d07f). Press **`ctrl+s`** / **`cmd+s`** and it will automatically fork it for you. Now, we have everything set up so let's get started!

## Part 3: Building the project

### 1) The Starter Code

Let's first have a look at our project's starter code.

First, there are 2 main directories and a `package.json` file. We'll ignore the `package.json` file for now and let's have a look at the 2 directories, namely, `public/` and `src/`.

Usually, the `public/` directory contains an HTML file and all your assets. We won't be touching the `public/` directory during the whole workshop, not even the HTML file!

Next is the `src/` directory which contains all your JavaScript files and your CSS files. We have an `index.js` file, which basically renders our React code. The `style.css` file is already written for you.

Next is the `App.js` file. It looks something like this:

```jsx
import React, { useState } from "react";
import "./styles.css";

const operatorsArr = ["*", "/", "+", ".", "-"];

export default function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calc-wrapper"></div>
    </div>
  );
}

```

Explanation: Here, `useState` is already imported for you as we'll be using it in the later part of the workshop. Next, there's an array containing all the basic operators. The `App` component simply renders a heading and a `div` with a `className` of `calc-wrapper` for now.

Next, if we look in the `components/` directory, we have a `Button` component and a `components.css` file.

### 2) Creating the `Button` component.

