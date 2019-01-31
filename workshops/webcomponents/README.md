---
name: 'Intro to Web Components'
description: 'An introduction to web components and custom elements'
author: '@shmishtopher'
group: experimental
order: 16
---

# Getting Started With Web Components

## Before You Start

Before delving into the wonderful world of web components, you should be comfortable with a few important concepts.

1.  Tree data structures
2.  CSS pseudo classes and pseudo elements
3.  ES6-style JavaScript
4.  Serving assets locally

These four things are all you need to be able to start working with web components. This workshop will guide you through the process of designing your own custom elements by teaching you how to build a dummy contacts application. Start with this HTML file, remember that `type="module"` depends on `fetch`, which is not allowed when server over `file://`. This is why you need to serve your project locally.

```html
<!DOCTYPE html>

<!--
  @version    [YOUR_VERSION]
  @author     [YOUR_NAME]
  @copyright  [YOUR_COPYRIGHT]
-->

<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=7" />

    <link rel="stylesheet" href="styles/color.css" />
    <link rel="stylesheet" href="styles/base.css" />
    <link rel="stylesheet" href="styles/contact.css" />
  </head>

  <body>
    <x-app></x-app>
  </body>

  <script type="module">
    import { App } from '/scripts/app.js'
    import { List } from '/scripts/list.js'
    import { Contact } from '/scripts/contact.js'

    customElements.define('x-app', App)
    customElements.define('x-list', List)
    customElements.define('x-contact', Contact)
  </script>
</html>
```

If you try to serve this, you'll find that you're getting boatloads of 404's, since this file is requesting assets that we haven't created yet. Style choice is highly subjective and largely irrelevant to the subject of learning web components. Here are some starter CSS files you could put in your styles directory.

```css
/**
 * styles/color.css
 *
 * @version     [YOUR_VERSION]
 * @author      [YOUR_NAME]
 */

:root {
  --primary: #1bcf9a;
  --primary-light: #66ffcb;
  --primary-dark: #009d6c;

  --accent: #f45532;
  --accent-light: #ff885e;
  --accent-dark: #ba1c04;

  --text-dark-high: rgba(0, 0, 0, 0.87);
  --text-dark-medium: rgba(0, 0, 0, 0.6);
  --text-dark-low: rgba(0, 0, 0, 0.38);

  --text-light-high: rgba(255, 255, 255, 1);
  --text-light-medium: rgba(255, 255, 255, 0.87);
  --text-light-low: rgba(255, 255, 255, 0.6);

  --white: #ffffff;
  --off-white: #f5f5f7;
}
```

```css
/**
 * styles/base.css
 *
 * @version     [YOUR_VERSION]
 * @author      [YOUR_NAME]
 */

html,
body,
x-app {
  width: 100%;
  height: auto;
  min-height: 100%;

  padding: 0;
  margin: 0;

  overflow-x: hidden;
  overflow-y: auto;

  background: var(--off-white);
  color: var(--text-dark-medium);

  font-size: 16px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
```

```css
/**
 * styles/contact.css
 *
 * @version     [YOUR_VERSION]
 * @author      [YOUR_NAME]
 */

x-list {
  width: calc(100% - 20px);
  height: auto;
  max-width: 700px;
}

x-contact > div {
  width: calc(100% - 20px);
  height: 120px;

  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  background: var(--white);
  color: var(--text-dark-high);

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

x-contact > div > div:first-child {
  width: 50px;
  height: 50px;

  padding: 0;
  margin: 20px;

  color: var(--text-dark-high);
  background: var(--text-dark-low);

  border: none;
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Designing Custom Elements

Custom elements can be modeled as classes that extend `HTMLElement`. The first thing that you'll need is a constructor that calls `super`.

```js
/**
 * scripts/contact.js
 *
 * @version     [YOUR_VERSION]
 * @author      [YOUR_NAME]
 */

export class Contact extends HTMLElement {
  constructor() {
    super();
  }
}
```

The contact component should be in charge of formatting and rendering contacts. It should get this information through its attributes; we tell the component which attributes to react to with `observedAttributes` and how to react with `attributeChangedCallback`.

```js
export class Contact extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.email = "";
    this.phone = "";
  }

  static get observedAttributes() {
    return ["name", "email", "phone"]; // list attributes here
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
    this.innerHTML = this.render();
  }
}
```

Now that your component knows which data to respond to, you need to tell it how to display that data to the user's browser. This can be done in hundreds of different ways, the way you'll see here is just one of them.

```js
export class Contact extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.email = "";
    this.phone = "";
  }

  static get observedAttributes() {
    return ["name", "email", "phone"]; // list attributes here
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
    this.innerHTML = this.render();
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
    	<div>
        <div>${this.name.slice(0, 1)}</div>
        <div>
          <div>${this.name}</div>
          <div>${this.email}</div>
          <div>${this.phone}</div>
        </div>
      </div>
    `;
  }
}
```

And that's it! That's the entire contact component done! You will take a deeper look at the callbacks used in this component later on in this workshop. Back in your `index.html` file, you'll notice that this component is not register as 'contact', but as 'x-contact'. This is because all custom elements must contain the dash "-" character in its name.

The next component that you will explore is the list component. This component will be slightly more complex. Again, you will start with the constructor.

```js
/**
 * scripts/list.js
 *
 * @version     [YOUR_VERSION]
 * @author      [YOUR_NAME]
 */

export class List extends HTMLElement {
  constructor() {
    super();
    this.url = "https://jsonplaceholder.typicode.com/users";
  }
}
```

You will design this component to pull data from a dummy API endpoint and then push that data to the necessary contact components. Since it doesn't need to react to data passed down from higher up in the component tree, you wont need `observedAttributes` or `attributeChangedCallback`.

```js
export class List extends HTMLElement {
  constructor() {
    super();
    this.url = "https://jsonplaceholder.typicode.com/users";
  }

  async connectedCallback() {
    const data = await fetch(this.url).then(r => r.json());

    for (const contact of data) {
      const el = document.createElement("x-contact");
      el.setAttribute("name", contact.name);
      el.setAttribute("email", contact.email);
      el.setAttribute("phone", contact.phone);
      this.appendChild(el);
    }
  }
}
```

One more component left! This one is very simple, it simply acts as a wrapper for our application.

```js
export class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<x-list></x-list>";
  }
}
```

And that's it! Try serving up your index page to see the end result. Let's take a close look at the lifecycle hooks you have access to.

## Lifecycle Hooks

| Name                       | Called                                                                         | Use                                                         |
| -------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `constructor`              | every time an instance of the element is created                               | setting up initial state and event listeners                |
| `connectedCallback`        | every time the element is inserted into the DOM                                | running setup code, such as fetching resources or rendering |
| `disconnectedCallback`     | every time the element is removed from the DOM                                 | running clean up code                                       |
| `attributeChangedCallback` | every time an observed attribute has been added, removed, updated, or replaced | reacting to changes in state                                |
| `adoptedCallback`          | every time an element has been moved into a new document                       | setup code for the new document                             |

A simple counter, for example, might use the `constructor` and the `connectedCallback`. It uses the constructor to set up the initial state, and connectedCallback to render it. Increment here does two things: it increments the internal value and renders the state. As your components grow in size, you may want to separate these concerns.

```js
class ExampleCounter extends HTMLElement {
  constructor() {
    super();
    this.value = 0;
    this.addEventListener("click", this.increment);
  }

  connectedCallback() {
    this.innerHTML = `<div>${this.value}</div>`;
  }

  increment() {
    this.innerHTML = `<div>${this.value++}</div>`;
  }
}
```

## Shadow DOM

When working with custom elements, it's considered best practice to work with a shadow DOM instead of just injecting your markup underneath your element. Shadow DOM implementations also have the benefit of providing scoped css styles to your elements. You can add a shadow DOM to your element with `this.attachShadow({ mode: 'open' })`.

```js
class ExampleElement extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.root.appendChild(document.createElement("div"));
  }
}
```

That's all you need to know to start working on some awesome projects using web components. If you want to test your understanding of the concepts, here are some extensions to your basic demo:

1.  Transition the project from DOM to shadow DOM
2.  Refine the styles to use shadow DOM selectors
3.  Add methods to list to add and remove entries
