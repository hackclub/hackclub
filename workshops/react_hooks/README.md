---
name: 'React Hooks API'
description: 'An introduction to the new React Hooks API'
author: '@shmishtopher'
group: react
order: 3
---

# React Hooks API

## Before You Start

There are a few important concepts you should be familiar with before you start working with the React Hooks API.

1.  Array Destructuring
2.  Lexical Scoping
3.  Basic React

This workshop assumes a basic knowledge of React, so it will not cover the mounting of components or setting up the project. These things are up to you. React Hooks are a powerful tool that can clarify and simplify your React code. This workshop will guide you through the two simplest hooks available to React developers.

## The State Hook

A "hook" simply gives you access to some part of React. The state hook is the most basic hook, giving you access to React component state. It allows you to bestow a functional component (which is normally stateless) with state without using bulky ES6 classes with several functions on them.

To use the state hook, you simply need to import `useState` from React. We will start with a simple counter component and show how to augment with state via Hooks. Start with the `import` statement and a `function` component.

```js
import { useState } from 'react'

export function Counter() {
  return <div>0</div>
}
```

This component simply renders the number `0` to the screen. To give your component state, you will need to call `useState(initialState)`, which will return two things, a reference to your state and updater that functions like `setState` would in a normal React component.

```js
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return <div>{count}</div>
}
```

Now all you need to do is increment your state, which can be done using `onClick`.

```js
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(count + 1)}>{count} (click to increase)</div>
  )
}
```

That's all there is to `useState`! This simple example teaches you everything you need to know to create and set states inside of functional components. With this knowledge, let's make something slightly more advanced, like a color picker component. Again, start with a basic functional component.

```js
import { useState } from 'react'

export function ColorPicker() {
  return (
    <div>
      <div />
      <div>
        <input type="range" max={255} />
        <input type="range" max={255} />
        <input type="range" max={255} />
      </div>
    </div>
  )
}
```

Your component will render one empty div (later, we'll fill it with a color) and three sliders that will be used to control the red, green, and blue channel values. The first thing you need to do is save the r, g, b values to state with `useState`.

```js
import { useState } from 'react'

export function ColorPicker() {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return (
    <div>
      <div />
      <div>
        <input type="range" max={255} />
        <input type="range" max={255} />
        <input type="range" max={255} />
      </div>
    </div>
  )
}
```

Next, sync up your state with your three slider controls. You can do this by updating state in `onChange`.

```js
import { useState } from 'react'

export function ColorPicker() {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  return (
    <div>
      <div />
      <div>
        <input type="range" max={255} onInput={e => setRed(e.target.value)} />
        <input type="range" max={255} onInput={e => setGreen(e.target.value)} />
        <input type="range" max={255} onInput={e => setBlue(e.target.value)} />
      </div>
    </div>
  )
}
```

Finally, compute the styles for the first div to render the color, like this:

```js
import { useState } from 'react'

export function ColorPicker() {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const sx = {
    background: `rgb(${red},${green},${blue})`,
    width: 100,
    height: 100,
    borderRadius: 5
  }

  return (
    <div>
      <div style={sx} />
      <div>
        <input type="range" max={255} onInput={e => setRed(e.target.value)} />
        <input type="range" max={255} onInput={e => setGreen(e.target.value)} />
        <input type="range" max={255} onInput={e => setBlue(e.target.value)} />
      </div>
    </div>
  )
}
```

There you go, your second component done! Now that you know how to use the state hook, you're ready to learn about the next most useful hook.

## The Effect Hook

The effect hook can be used to execute side effects from within your function components. The effect hook is similar in function to `componentDidMount` and `componentDidUpdate`.

You can use the effect hook by importing `useEffect`. We'll go back to our counter component to demonstrate.

```js
import { useState, useEffect } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert(`You’ve clicked ${count} time(s)`)
  })

  return <div onClick={() => setCount(count + 1)}>{count}</div>
}
```

The behavior of the effect is as if `componentDidMount` and `componentDidUpdate` were combined. You get an alert for the initial state and for every state update.

The effect hook is much more powerful when used for more complex work. Let's build a component that fetches and renders people from a JSON endpoint. Start with a function component again:

```js
import { useState, useEffect } from 'react'

export function List() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setPeople(res))
  })

  return (
    <div>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  )
}
```

You may notice a problem with this code: `useEffect` behaves like `componentDidUpdate`, and since `useEffect` is setting state and triggering an update, we have an infinite loop. `useEffect` offers a simple solution for this. You can pass in a property as a second parameter to `useEffect`, and an effect will only trigger if that property has changed.

```js
import { useState, useEffect } from 'react'

export function List() {
  const [people, setPeople] = useState([])
  const [run, setRun] = useState(0)

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setPeople(res))
    },
    [run]
  )

  return (
    <div>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  )
}
```

Now your effect will only run when the component is mounted. Since `run` never changes, the effect will only run once.

## Other Hooks

The state and effect hooks will be all you need almost all of the time. If there is a problem these hooks can't solve, there are more options. Many of these should only be used for optimization, some should almost never be used. The [React Hooks API documentation](https://reactjs.org/docs/hooks-overview.html) goes more in depth into each of these if you feel you need them. Some of the other hooks available to you are:

- `useContext`
- `useReducer`
- `useCallback`
- `useMemo`
- `useRef`
- `useImperativeMethods`
- `useLayoutEffect`

With this introduction to React Hooks, you know enough to use them in your next React project!
