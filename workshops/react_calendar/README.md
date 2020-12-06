---
name: 'Mini Calendar'
description: 'Build a simple mini calendar with ReactJS.'
author: '@faisalsayed10'
img: 'https://cloud-d3dt7t9w5.vercel.app/0image.png'
---

# Mini Calendar

You probably must have heard about [React](https://reactjs.org/) more often these days. React is the most popular JavaScript Framework through which you can build  powerful websites easily. Today, we'll be looking at some basics of React and we'll also build a simple mini calendar as we go!

Here's what it will look like:

[![Final Output](https://cloud-l3dj39n5y.vercel.app/0image.png)](https://vjm3f.csb.app/)

Here's the [source code](https://codesandbox.io/s/mini-calendar-vjm3f).

## Part 1: Prerequisites

![React image](https://cloud-lnw8nf1tb.vercel.app/0image.png)

You should have some familiarity with HTML and JavaScript as well as programming functions like functions, objects, arrays etc. If you know some basics of React, It will be good for you. If not, I will recommend you [this](https://workshops.hackclub.com/nextjs_starter/) workshop. But don't worry, you should be able to follow along regardless. If you're having trouble, feel free to ask [me](https://app.slack.com/client/T0266FRGM/user_profile/U014ND5P1N2) or anyone in the [Hack Club Slack](https://hackclub.com/slack/)!

## Part 2: Setup

So far, we've been using repl.it for most of our workshops. But today, I want to introduce you to another online code editor, [CodeSandbox](https://codesandbox.io). For making any React projects, CodeSandbox is the best one out there.

To get started, go to this [starter code](https://codesandbox.io/s/calendarstartercode-thk00). Press **`ctrl+s`** / **`cmd+s`** and it will automatically fork it for you. Now, we have everything set up so let's get started!

## Part 3: Building the project

### 1) File Structure and Basics

Let's first have a look at our project's file structure.

First, there are 2 main directories and a package.json file. We'll ignore the package.json file for now and let's have a look at the 2 directories, namely, `public/` and `src/`.

![The image of file structure](https://cloud-94vhfibmh.vercel.app/0image.png)

Usually, the `public/` directory contains an HTML file and all your assets. We won't be touching the `public/` directory during the whole workshop, not even the HTML file!

Next is the `src/` directory which contains all your JavaScript files and your CSS files. We have an `index.js` file, which basically renders our React code. Next is the `App.js` file. We can start writing our React code from here itself, but it is a convention to split our code into small components and render them together in our `App.js` file.

This is what our `App.js` file look right now. Let's understand it line by line.

```jsx
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

At line 1, we import React into our file. Similarly, at line 2, we import the CSS file. We also need to export our `App` component so that the `index.js` file can have an access to it and render it. Therefore, we write our function beginning with `export default`.

Also, this is a React component, so the function will always return jsx code.

![the image showing jsx vs html](https://cloud-forah828h.vercel.app/0image.png)

**What is jsx?** All the code from line 6 to 9 is known as jsx. It is pretty much similar to HTML but there are few differences which we'll see as we go along.

![Image of jsx in the code](https://cloud-iqybgr1sn.vercel.app/0image.png)

You'll see that instead of using `class` in our `<div>` tag, we are using `className`, this is one of the difference between jsx and HTML. Whenever we add class to our element in React, we'll use `className` instead of `class`.

This is pretty much about the `App.js` file as well as some React.

Now, have a look at the `components/` directory, it contains a `components.css` file which is prewritten for you, as our main focus today will be on React. In this directory, we'll write and store all our children components. Then we'll export them using `export default` and import them in our `App.js` file and therefore it will be rendered.

Navigate, to `App.js` file and remove the heading tags from the code.
Let's now start writing some code!

![React Components Visual](https://cloud-nkzzi8sgq.vercel.app/0image.png)

[**What are Components?**](https://www.w3schools.com/react/react_components.asp)

### 2) Writing The Components

#### 1) CalendarUI Component

Let's start writing our very first component! Navigate to the `components/` directory, hover over the directory name, and you'll see few options. If you click on the 3rd option which says 'New File', it will create a new file inside the `components/` directory. It will ask you the filename. Let's name the file as `CalendarUI.js`.

**Note:** For naming filenames in React, we use the `TitleCase` convention.

![5 main steps in writing React](https://cloud-9ssjsk1b2.vercel.app/0image.png)

Next, open the file which you just created and let's write our first React code.

We'll first import `React` and `components.css` in this manner:
```jsx
import React from 'react';
import './components.css';
```

**Note:** The `./` on line 2 means that the file which we are importing is in the same directory.

Next, we'll create a functional component. You can create it the normal way or by following the ES6 syntax. Here's how you'll do it either way.

```jsx
function CalendarUI() {
  return()
}
```

OR

```jsx
const CalendarUI = () => {
  return()
}
```

Use any syntax you like or feel that it is suitable/easier for you to understand.

Now we will return jsx code in our functional component. One remarkable thing to keep in mind is that we can't return more than 1 parent elements in our code. So, we'll always need to create a main parent `<div>` tag and then write all the code inside of that.

**This is wrong:**
```jsx
return(
  <h1>Hello world</h1>
  <h1>Lol</h1>
  <h1>Hi!!</h1>
)
```

**This is the correct way:**
```jsx
return(
  <div>
    <h1>Hello world</h1>
    <h1>Lol</h1>
    <h1>Hi!!</h1>
  </div>
  // Don't write anything outside the parent element.
)
```

Now let's write the following jsx code (inside the `return` parenthesis).

```jsx
<div className="container">
  <div className="main">
    <p className="month"></p>
    <p className="day"></p>
    <p className="date"></p>
    <p className="year"></p>
  </div>
</div>
```

We won't see anything in our preview now, because our `<p>` tags are empty. By looking at the `className` you might have understood what will come there. Let's hardcode today's date in it and let's check our preview window!

Wait what? Nothing on the preview window? It's because we haven't followed our 5th and the 6th step yet! 

It is a common mistake to forget this step while writing React, so if you ever feel your code isn't working fine, check your imports and exports first!

At the very end of our file, we'll export the component.
```jsx
export default CalendarUI;
```

Your code so far:
```jsx
import React from 'react';
import './components.css';

const CalendarUI = () => {
  return(
    <div className="container">
      <div className="main">
        <p className="month">October</p>
        <p className="day">Sunday</p>
        <p className="date">18</p>
        <p className="year">2020</p>
      </div>
    </div>
  )
}

export default CalendarUI;
```

We can also export it without the `default` keyword but for the scope of this workshop, we'll use the `default` keyword. Now we also need to import it somewhere so that it is rendered. Can you guess where will we import it? Yes! It's the `App.js` file.

[Difference between `export` and `export default`](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910).

Navigate to your `App.js` file and let's import it.
```jsx
import React from "react";
import "./styles.css";
// Below all your imports add a new line to import our new component.
import CalendarUI from "./components/CalendarUI";
```
We'll first write the name of the component we want to import and then we specify its filepath which is, in our case, `./components/CalendarUI`.

Then, we treat our component just as an HTML tag and we'll write it in the `return()` of our `App` component.

```jsx
return (
  <div className="App">
    <CalendarUI />
  </div>
);
```

Now if you look at the preview, you'll be amazed to see that we have correctly written our React code!

![Preview of our code](https://cloud-lbrmfr4kt.vercel.app/0image.png)

But, we have hardcoded our date, right? Let's fix that now.

#### 2) Fixing The Hardcode

In our CalendarUI component, we'll now use a hook called as `useState()`. It is an efficient way of managing our data by storing them in states and rendering it in our component. (You can do many more things with the state).

![A fancy image of useState](https://cloud-90fxjk0al.vercel.app/0image.png)

First, we'll import it from `react`. So we'll change the first line as:

```js
import React, { useState } from 'react';
```

**Note:** The `useState()` was not exported as `default`. That is why, we import it surrounded by curly braces.

Now inside our component, just above the `return` statement, we'll create the state.

```js
const [today, setToday] = useState(new Date());
```

Explanation: we define the 2 variables using the array destructuring syntax. The first variable (`today`) stores the default state and the second variable (`setToday`) helps in changing the value of the default state.

Next, we call the `useState()` and it takes in a value which will be the default state. So, we stored the today's date.

**Note:** It is also a convention to use the word `set` for the 2 variable which basically helps in changing the state.

Learn more about [React `useState`](https://reactjs.org/docs/hooks-state.html).

Now, we can extract the year, month etc from our state and store them in other variables. We'll write these variable below the `useState()` and above the `return()`.

```js
const year = today.getFullYear();
const month = today.toLocaleString("default", { month: "long" });
const day = today.toLocaleString("default", { weekday: "long" });
const date = today.getDate();
```

Explanation: the `getFullYear()` method will give us the current year and the `getDate()` will also give us the current date.

But for month and day, if we use `getMonth()` and `getDay()` it returns the value in numbers. So if we want to get them in words, we need to use something called `toLocaleString()` which takes in our locale as the first parameter and an object with the value we want to return with its type. So, we put in the `default` locale and then we return the `month` and the `weekday` as `long`.

![toLocaleString's better and visual example](https://cloud-q3tkunf3l.vercel.app/0image.png)

**Note:** This is nothing React specific but it is how we would have done in JavaScript.

Learn more about [`toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).

Now, instead of hardcoding our values inside of our `<p>` tag, we can pass these variables inside the `<p>` tag.

Here comes the best thing about React.

Remember how we used to pass JavaScript variables inside HTML?

![Way of doing it in JavaScript](https://cloud-otycuvap3.vercel.app/0image.png)

This is one of the way of doing it in plain JavaScript. But surprisingly, React can do this job better! Here's how:

```jsx
<div className="container">
  <div className="main">
    <p className="month">{month}</p>
    <p className="day">{day}</p>
    <p className="date">{date}</p>
    <p className="year">{year}</p>
  </div>
</div>
```

We just pass the variable name in curly braces and we are done! Now if we look at the preview, we see the same thing but this time, we didn't hardcode it.
<details>
<summary>Our code so far:</summary>

```jsx
import React, { useState } from "react";
import "./components.css";

const CalendarUI = () => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { weekday: "long" });
  const date = today.getDate();

  return (
    <div className="container">
      <div className="main">
        <p className="month">{month}</p>
        <p className="day">{day}</p>
        <p className="date">{date}</p>
        <p className="year">{year}</p>
      </div>
    </div>
	);
};

export default CalendarUI;
```
</details>

We have successfully built a basic UI using React. Now let's learn how to manipulate states in React. If you saw the demo at the beginning of the workshop, we were able to navigate back and forth dates. This was done using state manipulation. If the state gets changed, the components are re-rendered and thereby show the new state. Let's start implementing this.

![Yesss](https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif)

#### 3) ChangeDate Component

In our components file, let's create another component named `ChangeDate.js`. Try to fill out that file with the basic boilerplate code by referring the 5 steps of writing React.

You should have something like this in your `ChangeDate.js` file.

```jsx
import React from "react";
import './components.css'

const ChangeDate = () => {
  return (
    <div></div>
  );
};


export default ChangeDate;
```

Also, give the `<div>` tags a `className` of `buttons`.

Now states are limited to that component itself. So we can't access our `today` state which is in `CalendarUI` component in our `ChangeDate` component.

So we'll need to pass that state in the form of `props` to our `ChangeDate` component. But for that, `ChangeDate` component needs to be the child component of `CalendarUI`. Confused? You'll understand it better once you write the code.

![Helpful image of props](https://cloud-gtd06qax5.vercel.app/0image.png)

So we will import our `ChangeDate` component inside our `CalendarUI` component and then we'll render it there.

```jsx
import React, { useState } from "react";
import "./components.css";
import ChangeDate from "./ChangeDate.js"; // IMPORT THE COMPONENT

const CalendarUI = () => {
  const [today, setToday] = useState(new Date());

  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "long" });
  const day = today.toLocaleString("default", { weekday: "long" });
  const date = today.getDate();

  return (
      <div className="container">
        <div className="main">
          <p className="month">{month}</p>
          <p className="day">{day}</p>
          <p className="date">{date}</p>
          <p className="year">{year}</p>
        </div>
      </div>
      <ChangeDate /> {/* RENDER THE COMPONENT */}
  );
};
```
But now, the browser will be badly yelling at you!!

![Rare footage of browser yelling at me](https://cloud-62rjhf9pw.vercel.app/0image.png)

That is because we are rendering the `<ChangeDate />` outside the parent element. But here, we can't take it in because it will become a flex child (the `container` className is set to `display: flex`) and will be displayed weirdly on the browser.

Here comes something called `fragments`. If we add an empty tag as a parent element, we won't get errors anymore! Fragments let you group a list of children without adding extra nodes to the DOM.

If you are confused, here's how we'll do it.

```jsx
return (
  <> {/* Fragments opening tag */}
    <div className="container">
      <div className="main">
        <p className="month">{month}</p>
        <p className="day">{day}</p>
        <p className="date">{date}</p>
        <p className="year">{year}</p>
      </div>
    </div>
    <ChangeDate />
  </> {/* Fragments closing tag */}
);
```

Now, as the component has a parent element, we won't get the errors anymore!

Learn more about [React fragments](https://dev.to/tumee/react-fragments-what-why-how-2kh1).

Let's see how to pass our state as `props` to `<ChangeDate />`.

We'll first name the `prop` and then pass a value to the `prop`.

```jsx
<ChangeDate state={today} setter={setToday} />
```

Here, we name our first prop as `state` and then pass the value as `today`. Similarly, we name the second prop as `setter` and then pass it the `setToday` function.

Learn more about [passing states as props to children](https://www.youtube.com/watch?v=5Xew--ycx0o).

And now it is possible to manipulate the state from the `ChangeDate` component as it has access to those values. Let's move back to `ChangeDate.js` as we will also need to receive those props. This is done by adding their names as parameters in curly braces to our functional component.

```jsx
const ChangeDate = ({state, setter}) => {
  return (
    <div className="buttons"></div>
  );
};
```

In this way, we have received our props from the parent component and now we can use it in our component. Now we'll add 3 buttons to navigate back and forth as well as reset back to today.

We are going to use some SVGs taken from [Heroicons](heroicons.com). So I recommend you to copy the below code inside the `buttons` div to save some time.

```jsx
import React from "react";

const ChangeDate = ({state, setter}) => {

  return (
    <div className="buttons">
      <button className="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button className="reset">
        TODAY
      </button>
      <button className="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="32px"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
	);
};


export default ChangeDate;
```

We have basically taken 2 SVGs from [Heroicons](heroicons.com) and inserted them to our button.

**NOTE:** We can remove the `import` for styles from this file as it is a children of `CalendarUI` so it will eventually get the styles.

This is what you'll see in the preview window now.

![Preview Image](https://cloud-f4ky58l37.vercel.app/0image.png)

We have our UI totally set up. Now we'll implement 3 functions to go back, forth and also to get back to the current date.

Inside the `ChangeDate` component and just above the return statement, let's create a function named `previousDate`. Now we'll need to subtract 1 from the current date to get the previous date. Here's how we'll accomplish this task.

```jsx
function previousDate() {
  state.setDate(state.getDate() - 1);
  setter(new Date(state));
}
```

Explanation: We subtract the `today` state's date by 1, by using the `setter` function (which is `setToday()` in diguise), we pass a `new Date` with a value of `state` (which is -1 at that moment). Our date will change to the `current date stored in today - 1`.

Learn more about [adding dates in JavaScript](https://stackoverflow.com/questions/24312296/add-one-day-to-date-in-javascript/24312386).

**Challenge:** Create a similar function `nextDate` which will set the date to `today + 1`.

And lastly, we'll create a `resetDate` function which will simply reset the date back to its original value.

```jsx
function resetDate() {
  setter(new Date());
}
```

Here's the code for all our 3 functions:

```jsx
function previousDate() {
  state.setDate(state.getDate() - 1);
  setter(new Date(state));
}

function nextDate() {
  state.setDate(state.getDate() + 1);
  setter(new Date(state));
}

function resetDate() {
  setter(new Date());
}
```

**NOTE:** We are using the name `state` instead of using the actual name of our state which is `today`. This is because, we previously passed the `today` state with the name of `state` to this component. You can change it to any name you like.

Finally, for our buttons to work, we need to link those functions to the button. So to do that, we'll add an `onClick` attribute to the button exactly as we did in HTML by adding `onclick` to our buttons. But there are a few differences. Let's take a look.

1. The `onclick` is lowercase in HTML but camelcase (`onClick`) in React.

2. We call the function in quotations in `onclick` in HTML. In React, we need to pass the name of the function in curly braces but not call it.

Here's a better example:

**HTML:**
```html
<button onclick="functionName()">BUTTON</button>
```

**React:**
```jsx
<button onClick={functionName}>BUTTON</button>
```

Now that you know how to implement `onClick` in React, try to do this on your own!

**Challenge:** Pass the `onClick` attribute to the buttons with appropriate functions.

<details>
<summary>Here's the full final code.</summary>

```jsx
import React from "react";

const ChangeDate = ({ state, setter }) => {
  function previousDate() {
    state.setDate(state.getDate() - 1);
    setter(new Date(state));
  }

  function nextDate() {
    state.setDate(state.getDate() + 1);
    setter(new Date(state));
  }

  function resetDate() {
    setter(new Date());
  }

  return (
    <div className="buttons">
      <button onClick={previousDate} className="prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button onClick={resetDate} className="reset">
        TODAY
      </button>
      <button onClick={nextDate} className="next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="32px"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChangeDate;

```

</details>

Yay! I'm happy to say that this is the end of our workshop! Yes, we have completed building our React Calendar!

![Final Product](https://cloud-6zp1v14uh.vercel.app/0final_product.gif)

## Part 4: The End

Make sure you create an account on CodeSandbox to save this wonderful piece of creation or you'll loose it 😧.

Now it is up to you! Do crazy things with this project!

Here are some useful resources for you!

1. [ReactJS Documentation](https://reactjs.org/)

2. [React Hooks](https://www.valentinog.com/blog/hooks/)

3. [JavaScript Date Method](https://www.w3schools.com/js/js_date_methods.asp)

4. [Components in React](https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108)

Here are some tasks for you!

1. Try to add the current time below the calendar.

2. Make the calendar look like a stack of cards.  
Check this [Example](https://codepen.io/jpod/pen/KJaFc) to get an idea.

3. Play around with the CSS! (changing the display, fonts, animations etc) If you want help in doing it, check [this workshop](https://workshops.hackclub.com/scrapbook_css/)!

4. Try to make it isometric using CSS 3d Transforms.  
Check this [Example](https://codepen.io/daniel-snows/pen/awvVoM) to get an idea.

5. Try to add options for displaying the calendar in a month view and week view!

6. Even the [`Date`](https://www.tutorialspoint.com/javascript/javascript_date_object.htm) object has so many features that you can play around with!

7. Finally, React is a whole different universe, play around with your newly learnt skills!


Check out what other Hack Clubbers built!

1. [Tanishq](https://codesandbox.io/s/react-js-calendar-luzrj)

2. [Khushraj](https://codesandbox.io/s/calendarstartercode-forked-qz8kl)

3. [Jack](https://codesandbox.io/s/calandooooor-8cisd)

Now that you have finished building it, you should share your beautiful creation with other people! (I can't wait to see you ship this!)

You probably know the best ways to get in touch with your friends and family, but if you want to share your project with the worldwide Hack Club community there is no better place to do that than on Slack.
1. In a new tab, open and follow [these directions][slack] to signup for our Slack.
2. Then, post the link to the [`#ship`](https://hackclub.slack.com/messages/ship) channel to share it with everyone and also ping me!

[slack]: https://slack.hackclub.com/


PS. I'm `@fayd` on slack!
