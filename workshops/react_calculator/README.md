---
name: 'Simple Calculator'
description: 'Build a simple calculator with ReactJS'
author: '@faisalsayed10'
---

# Simple Calculator

Today, We'll be building a simple yet fun calculator in React.

[![Simple Calculator](https://cloud-ht4su332c.vercel.app/0image.png)](https://5trtj.csb.app/)

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
import React, { useState } from 'react'
import './styles.css'

const operatorsArr = ['*', '/', '+', '.', '-']

export default function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calc-wrapper"></div>
    </div>
  )
}
```

Explanation: Here, `useState` is already imported for you as we'll be using it in the later part of the workshop. Next, there's an a rray containing all the basic operators. The `App` component simply renders a heading and a `div` with a `className` of `calc-wrapper` for now.

Next, if we look in the `components/` directory, we have a `Button` component and a `components.css` file.

### 2) Creating the `Button` component.

Let us start building the `Button` component.

First we'll create a function `isNum` inside the component which checks if a value is a number or not.

```jsx
const Button = () => {
  const isNum = (val) => {
    if (!isNaN(val) || val === 'C' || val === '.') {
      return true
    }
    return false
  }
}
```

Explanation: We create a function named `isNum` which takes in a `val` as an argument. Then it checks whether the `val` is a number or `C` (clear) or a decimal (`.`), if any of the condition is true, it returns `true` or else it simply returns `false`.

Next we'll create a function to check whether a value is an equal sign or not.

```jsx
const Button = ({ children, onClick, isInput }) => {
  // ...

  const isEqual = (val) => {
    if (val === '=') {
      return true
    }
    return false
  }
}
```

Explanation: This is a quite simple function which takes in a value as an argument and checks whether the value is an equal sign or not and returns `true`/`false` accordingly.

Now its time to render some jsx in this component. This is going to be a bit tricky and will make use of `props`. So try to concentrate and understand what we are writing and you'll surely not be confused.

There will be 3 main props we'll be using in this component.

1. `children` - This prop is the value which will be passed to the components opening and closing tags.

Example:

```jsx
<Button>7</Button> // Here 7 is the children of that component.
```

2. `onClick` - This prop will simply hold the functions which we'll create later for our calculator. This function will be passed to the Button component's `onClick`.

3. `isInput` - This prop will work as a boolean for us and help us to determine whether the component will re nder the `input` state's value or not.

**NOTE:** We haven't yet created the `input` state but we'll be doing it soon in few minutes.

```jsx
const Button = ({ children, onClick, isInput }) => { // <-- Props
  const isNum = (val) => {...};
  const isEqual = (val) => {...};

  return (
    <>
      {isInput ? (
        <div className="input">{children}</div>
      ) : (
        <div
          className={`button-wrapper button ${isEqual(children) ?"equal-btn" : null} ${isNum(children) ? null : "operator"}`}
          onClick={() => onClick(children)}>
          {children}
        </div>
      )}
    </>
  );
};
```

Explanation: First we accepted  the 3 props in this component. Now here comes the tricky part.

We use `fragments` as the parent element of the `jsx`. Fragments let you group a list of children without adding extra nodes to the DOM.

**NOTE:** `<></>` is known as fragments.

Then we have used `ternary operators` to render different `div` accordingly. If the `isInput` is truthy, it will render the `div` with the `className` of `input` or else it will render another `div`.

Notice that in the second `div`, we have again used `ternary operators` to determine that `div`'s `className`. We call the `isEqual` function passing it the value of `children` and if it returns `true`, it will add a `className` of `equal-btn` to the `div`. We have also called the `isNum` function passing it the same value of `children` and if it returns `true`, it will add a classname of `operator` to the `div`.

Next we give an `onClick` attribute to the `div` which will simply call the `onClick` function which also takes in the `children` as an argument.

**NOTE:** The `onClick` funtion will be passed down by the parent component to this component.

And lastly, we simply render out the `children` of the component.

I hope I wasn't vague in explaining you what the code is doing. If you are still confused, try to read the code and understand it again. Or else, feel free to reach me out on slack!

By this, we finish our `Button` component and now its time to render it out in the main parent component (`App`) and also pass the appropriate `props` to it.

<detail><summary>Your code so far:</summary>

```jsx
import React from "react";
import "./components.css";

const Button = ({ children, onClick, isInput }) => {
  const isNum = (val) => {
    if (!isNaN(val) || val === "C" || val === ".") {
      return true;
    }
    return false;
  };

  const isEqual = (val) => {
    if (val === "=") {
      return true;
    }
    return false;
  };

  return (
    <>
      {isInput ? (
        <div className="input">{children}</div>
      ) : (
        <div
          className={`button-wrapper button ${
            isEqual(children) ? "equal-btn" : null
          } ${isNum(children) ? null : "operator"}`}
          onClick={() => onClick(children)}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Button;
```

</details>

You've done great so far! And I recommend you to relax and take a 5 minutes break!

![A cute frog relaxing just like I told you to](https://media.giphy.com/media/9u1J84ZtCSl9K/giphy.gif)

### 3) Creating the `App` component.

Let's render the `Button` component in our `App` component. We'll first import it in the `App` component.

```jsx
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calc-wrapper">
        <Button isInput></Button>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
      </div>
  )
}
```

Explanation: Inside the `calc-wrapper`, we first add a `Button` with a prop of `isInput`. This means that `isInput` will be `truthy` for this component and as we haven't passed the `isInput` prop to any other `Button`, it will be `falsy` for those components. Next, we create a `row` and add 4 `Buttons` to it, and as `row` has a property of `flex`, it will be displayed nicely on the browser as a row! We also passed the numbers `7, 8, 9` and the operator `/` as children to those buttons respectively.

Your preview should look something like this:

![Preview output of the code written so far](https://cloud-5g2s0vw25.vercel.app/0image.png)

Excellent! Wondering how they got different colors even if they were the same component? This is why we created the functions `isNum()` and `isEqual()`. They check what the value of the children is and give the `className` accordingly! Isn't it cool?

Also wondering how the first `Button` component looks different than the others? This is because the `isInput` boolean prop is truthy for that component and the way we have built our `Button` component is it checks whether the `isInput` is truthy and displays a different `div` accordingly!

We just created the 4 buttons of our calculator! 

**Challenge:** Can you try to add the rest of the buttons in a similar manner?

**Hints:**

1. Use rows for each group of buttons.

2. Check how the final output looks like and try to implement exactly like that!

<detail><summary>Here's the solution:</summary>

```jsx
export default function App() {

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calc-wrapper">
        <Button isInput></Button>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>*</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>C</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}
```

</details>

Now your preview window should look something like this!

![Preview output of our written code!](https://cloud-kvixq3evc.vercel.app/0image.png)

You might have understood that we have finally completed our calculator's UI! Now all that remains is to make appropriate functions for our calculator to work as well as pass appropriate `props` to the `Buttons`!

![Woohoo you did a great job!](https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif)

### 4) Creating The Functions For Our Calculator.
