---
name: 'React Hooks API'
description: 'An introduction to the new React Hooks API'
author: '@Shmish'
group: 'expieramental'
order: 9999

---

# Getting Started With React Hooks

## Table of Contents

1. [Before You Start](#before-you-start)
2. [The State Hook](#the-state-hook)
3. [The Effect Hook](#the-effect-hook)
4. [Other Hooks](#other-hooks)



## Before You Start

There are a few important concepts you should be familiar with before you start working with the react hooks API.

1. Array Destructuring
2. Lexical Scoping
3. Basic React

This workshop assumes a basic knowledge of react, so it will not cover the mounting of components or setting up the project.  These things are up to you.  React hooks are a powerful tool that can clarify and simplify your React code.  This workshop will guide you through the two most basic hooks available to react developers.



## The State Hook

The state hook is the first hook that you will run into.  A "hook" simply gives you access to some part of React.  The state hook will give you access to state, allowing you to bestow your functional component (which is normally stateless) with state.  To use the state hook, you simply need to import `useState`.  We will start with a simple counter component and show how you can give it state with a hook.  Start with the import statement and a function component.

```javascript
import { useState } from 'react'

export function Counter () {
  return (
    <div>0</div>
  )
}
```

This component simply renders the number "0" to the screen.  To give your component state, you will need to call `useState(initialState)`, which will return two things, a reference to your state and updater that functions like `setState` would in a normal React component.

```javascript
import { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(0)
  
  return (
    <div>{ count }</div>
  )
}
```

Now all you need to do is increment your state, which can be done using `onClick`.

```javascript
import { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(0)
  
  return (
    <div onClick={() => setCount(count + 1)}>{ count }</div>
  )
}
```

And that's it!  That's all there is to `useState`.  This simple example teaches you everything you need to know to create and set states inside of function components.  With this knowledge, let's make something slightly more advance, like a color picker component.  Again you will start with a basic function component.

```javascript
import { useState } from 'react'

export const ColorPicker () {
  return (
    <div>
    	<div></div>
      <div>
        <input type="range" max="255"/>
        <input type="range" max="255"/>
        <input type="range" max="255"/>
      </div>
    </div>
  )
}
```

Your component will render one empty div (that you will will with a color later) and three sliders that will be used to control the red, green, and blue values.  The first thing that you need to do is save the r, g, b values to state with `useState`.

```javascript
import { useState } from 'react'

export const ColorPicker () {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, useBlue] = useState(0)
  
  return (
    <div>
    	<div></div>
      <div>
        <input type="range" max="255"/>
        <input type="range" max="255"/>
        <input type="range" max="255"/>
      </div>
    </div>
  )
}
```

Next you need to sync up that state with your three slider controls.  You can do this by updating your state in `onChange`.

```javascript
import { useState } from 'react'

export const ColorPicker () {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  
  function
  
  return (
    <div>
    	<div></div>
      <div>
        <input type="range" max="255" onInput={e => setRed(e.target.value)}/>
        <input type="range" max="255" onInput={e => setGreen(e.target.value)}/>
        <input type="range" max="255" onInput={e => setBlue(e.target.value)}/>
      </div>
    </div>
  )
}
```

Finally, you need to compute the styles that will be used on the first div to render the color.  You can do this by writing an inner function that returns the styles based on your state.

```javascript
import { useState } from 'react'

export const ColorPicker () {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  
  function computeStyle () {
    return {
      background: `rgb(${red},${green},${blue})`,
      width: 100px,
      height: 200px,
    }
  }
  
  return (
    <div>
    	<div style={computeStyle()}></div>
      <div>
        <input type="range" max="255" onInput={e => setRed(e.target.value)}/>
        <input type="range" max="255" onInput={e => setGreen(e.target.value)}/>
        <input type="range" max="255" onInput={e => setBlue(e.target.value)}/>
      </div>
    </div>
  )
}
```

And that's it! That's your second component done!  Now that you know how to use the state hook, you're ready to learn about the next most useful hook.



## The Effect Hook

The effect hook can be used to execute side effects from within your function components.  The effect hook is similar in function to `componentDidMount` and `componentDidUpdate`.  You can use the effect hook by importing `useEffect`.  We'll go back to our counter component to demonstrate.

```javascript
import { useState, useEffect } from 'react'

export function Counter () {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    alert(`You've clicked ${count} time(s)`)
  })
  
  return (
    <div onClick={() => setCount(count + 1)}>{ count }</div>
  )
}
```

The behavior of the effect is as if  `componentDidMount` and `componentDidUpdate` where combined.  You will get an alert for the initial state and for every state update.  The effect hook is much more powerful however, when it is used for actual work.  Let's build a component that fetches and renders people from a JSON endpoint.  Start with your basic function component again.

```javascript
import { useState, useEffect } from 'react'

export function List () {
  const [people, setPeople] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setPeople(res))
  })
  
  return (
    <div>
      {people.map(person => <li>{person.name}</li>)}
    </div>
  )
}
```

You may notice a problem with this code.  `useEffect` behaves like `componentDidUpdate`, and since `useEffect` is setting state and triggering an update, we have an infinite loop.  `useEffect` offers a simple solution for this.  You can pass in a property as a second parameter to `useEffect`, and an effect will only trigger if that property has changed.

```javascript
import { useState, useEffect } from 'react'

export function List () {
  const [people, setPeople] = useState([])
  const [run, setRun] = useState(0)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setPeople(res))
  }, [run])
  
  return (
    <div>
      {people.map(person => <li>{person.name}</li>)}
    </div>
  )
}
```

Now your effect will only run when the component is mounted.  Since `run` never changes, the effect will only run once.  With both state and effect done, let's look at some other hooks.



## Other Hooks

The state and effect hooks will be all you need almost all of the time.  If you feel like there is something that you can't do with just these hooks however, there are more options.  Many of these should only be used for optimization, some should never be used at all.  The React hooks API documentation goes more in depth into each of these if you feel you need them.  Some of the other hooks available to you are:

1. `useContext`

2. `useReducer`
3. `useCallback`
4. `useMemo`
5. `useRef`
6. `useImperativeMethods`
7. `useLayoutEffect`

With this introduction to React hooks, you know enough to use them in your next React project!