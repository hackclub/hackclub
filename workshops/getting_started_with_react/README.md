---
name: "Getting Started with React"
description: "A collection of information about React.js"
author: "@itenpn"
group: "React"
order: 1
---

# Getting Started Using React

**Table of contents:**
- [0 Assumptions](#assumptions)
- [I Installing React](#installing-react)
- [II First Steps With React](#first-steps-with-react)
- [III Making Your Website Appear on Screen](#making-your-website-appear-on-screen)
- [IV Creating React Components](#creating-react-components)
- [V Using JSX](#using-jsx)
- [VI How to use CSS](#how-to-use-css)
- [VII Using Props](#using-props)
- [VIII Using State](#using-state)
- [IX General React Tips](#general-react-tips)
- [X Finishing Your Website](#finishing-your-website)

## Assumptions

1. You already sort of know how JavaScript works
2. You already know how to use HTML and CSS
3. You understand how to access development tools
4. You have a willingness to problem solve
5. You have a willingness to start hacking


## Installing React

### Download the latest version of [Node.js](https://nodejs.org/en/download/)

### Navigate to the terminal. Every operating system is different.

### Install react using npm

   ```sh
   $ npm install --save-dev react
   $ npm install --save-dev react-dom
   ```

### Navigate to a new Directory

  ```sh
  $ mkdir MyWebsite
  $ cd MyWebsite
  ```

### Create a new project

  ```sh
  $ npx create-react-app [Project Name goes here]
  $ cd [Project name]
  $ npm start
  ```

### A new localhost window should pop up with the default project


## First Steps With React

### Open project folder using code editor

 - I recommend [vscode](https://code.visualstudio.com/download), but anything will do

### Go to the `public` directory

### Edit the `index.html` file

 - Inside `<head>` create a `<title>` for the website
 - Add new [fonts](https://fonts.google.com/) if needed

### Change the favicon

 - Replace `favicon.ico` with your own
 - [X-Icon](http://www.xiconeditor.com/) can make any image a favicon!
 - This may take a little while to update on localhost

### Go to the `src` directory

   - Delete everything in the `src` directory, or you can just modify the files if you would like.


## Making Your Website Appear on Screen

### Create an `index.js` file in the `src` directory

  - Import these two modules
  ```javascript
  import React from ‘react’;
  import ReactDOM from ‘react-dom’;
  ```
  - Import any relevant components from your `src` folder
  - Proper practice is to import an App.js file that has a render() for all of your components
  ```javascript
  import {App} from ‘./App.js’;
  ```

### Render your project

  ```javascript
  ReactDOM.render(<App />, document.getElementById(‘root’));
  ```
  - `<App />` is a component that displays your website
  - `<App />` can be changed to any component that is created in index.js, or is imported

### Now you can start creating your project!


## Creating React Components

### Create a new JS file and its corresponding CSS file

  ```
  ComponentName.js
  ComponentName.css
  ```

### Go to the JS file

  - First lines are always
  ```javascript
  import React from 'react';
  import './ComponentName.css';
  ```
  - Import other components from other files if necessary

### Create a new class

I’ll use `App.js` as an example.

  ```js
  export class App extends React.Component{

    //All classes must have a render() method
    render(){
      // You can use control statements to change the return value
      // render() can only return one JSX tag, use <div> to nest tags
      return(
        <div></div>
      );
    }

  }
  ```

### Now you have a brand new component!

### To import the component to another file

In the new file:

  ```js
  import { ComponentName } from './ComponentName'
  ```

### To use the component in another file

In the new `render()` use `<ComponentName />` as its JSX


## Using JSX

### JSX is like HTML you can use inside of React Components

Every `render()` must return a single JSX tag, so use `<div>` to nest your HTML.

### Some things are different from HTML

  - `class` is a reserved word in JS, so you must use `className` instead
  - The `style` attribute must be passed a JS object, more on that in [How to Use CSS](#how-to-use-css)

### You can insert JS code into JSX tags!

  - Wrap the variable around curly braces `{}`
  - Works for attributes and inner HTML!

### You can insert Components with JSX

  - Just use `<ComponentName />`

## How to use CSS

### Import the appropriate CSS file

  ```js
  import 'ComponentName.css';
  ```

### Go to the CSS file

  - CSS operates just like normal, you can target `id`, `className`, and JSX tags

### Inline styles are DIFFERENT IN REACT

  - Create a JS object
  ```js
  const style = {};
  ```
  - Add a CSS style, but without the hyphens and using camelCase
  - Example:
  ```js
  const style = { fontSize: '24px' };
  ```
  - Add a comma at the end of the CSS style if you want to add another
  ```js
  const style = { fontSize: '24px', color: 'blue' };
  ```
  - To add an inline style, pass the object to the style attribute
  - Example with style variable:
  ```js
  <h1 style={style}>Hello World</h1>
  ```
  - Example with new object:
  ```js
  <h1 style={{ color: 'blue' }}>Hello World</h1>
  ```


## Using Props

### Props stands for properties, they are how we can parameter pass with React

### Any JS code can become a prop

  - Functions, variables, etc

### Props allow us to communicate to other components

  - Ex: tell a picture w/ caption component to render a certain picture and give it a caption

### Props are easy to use

  ```js
  <ComponentName prop1={data} prop2={data2} />
  ```
  - Ex:
  ```js
  <Photo picture={JohnDoePicture} caption="John Doe, Manager" />
  ```

### To gather information from props use: `this.props.propName`

  - Ex:
  ```js
  <img src={this.props.picture} />
  ```

## Using State

### State tells React when to update a website

  - Anytime state changes, `render()` is called
  - Use states to change the design of your Component

### Accessing a state is easy

   ```js
   this.state.stateName
   ```
   - states can be any data type because they are also a JS object
   - refer to [How to Use CSS](#how-to-use-css) for more information on objects

### To set an initial state, you must add a constructor

  ```js
  constructor(props) {
    super(props);
    this.state = { stateName: data };
  }
  ```
  - Inside of the curly brackets above, create a JS object like normal

### To change a state, you must use `this.setState()`

  ```js
  this.setState({ stateName: data });
  ```
  - You can pass an object that only changes one state of the component

### To change a state within JSX, you must use methods

  - Create a method within the class
  ```js
  methodName(e) {  // you can add more data with methodName(e, data1, data2, etc...
    e.preventDefault(); // prevents the method from running without an event
    this.setState({ // Can accept one or more states, even if you have multiple states
      state1: data1,
      state2: data2
    });
  }
  ```
  - Proper practice is to name the method `handleEvent`, where `Event` is what activates the method
  - Ex: `handleClick`
  - To allow this to work, you have to add another line to your `constructor`
  ```js
  this.methodName = this.methodName.bind(this);
  ```
### This method can then be attached to events

  - Events trigger when an action occurs
  - `onClick`, `onHover`, etc
  - Ex:
  ```js
  <button onClick={this.handleClick}>
  ```

### To pass additional parameters with the method, you must use a function

  ```javascript
  (e) => { this.methodName(e, data) }
  ```
  - Ex:
  ```js
  <button onClick={(e) => { this.handleClick(e, pageNum) }}>
  ```

## General React Tips

### Any changes to a program must be changed using state

  - This includes things such as input boxes or forms

### Use a singular App component that displays all of your pages depending on state

  - Use if statements to return different components in your `render()`

### Plan out your project design BEFORE you write code

  - This helps you stay organized and creates a common theme

### You can add your own backend code to your React Website

  - Because everyone has a different preference, I will leave this up to you to figure out on your own, but this [tutorial](https://codeburst.io/creating-a-full-stack-web-application-with-python-npm-webpack-and-react-8925800503d9) starts you off on how to add python to react.

### Ask for help!

   - The [Hack Club Slack](https://hackclub.slack.com/messages) is a fantastic resource

## Finishing Your Website

### Create a new repository on [GitHub](https://github.com/)

### If you are on Windows, install [git](https://git-scm.com/downloads)

### Open the terminal

### Go to your project directory

```sh
$ cd MyWebsite\ProjectName
```

### Create a new build

```sh
$ npm run build
```

### Enter the following commands to add your code to GitHub

```sh
# If you haven’t used git before, it will ask you to sign in,
# so do that when it gives you prompts instead of going to the next step.
$ git init
# The period is NOT a typo
$ git add .
$ git commit -m “First Commit”
# Go to GitHub and copy the repository url
$ git remote add origin [Repository URL]
$ git remote -v
$ git push origin master
```

### Now you have your code all on GitHub!

### Create an account at [Netlify](https://www.netlify.com/)

  - Link your account with the GitHub repository and upload the \build folder
  - Now your website should run on Netlify!

### To add a custom domain

  - Go to a domain registrar like [Go Daddy](https://www.godaddy.com/)
  - Buy a domain name.
  - Insert the custom domain name in Netlify, it will give you several DNS server links
  - On your domain registrar website, go to the DNS server option and link the server links.
  - Wait for a while and your custom domain should now work!

### Celebrate!
