---
name: 'To-Do List with JavaScript'
description: 'Build your own To-Do List with Vanilla JavaScript.'
author: '@shibam17'
img: https://cloud-6zqjfjy52.vercel.app/0cover-img.png
---


With front-end we can have limitless bound to our creativity. Then why not build a personal ***To-Do List***? This To-Do List will have your day to day things you want to do, not only that it will show which you have done or yet to do! Ofcourse, in the end you will also get to delete few which you have done or do not want it on the To-Do List any more.
<p align='center'>
<img src="https://media.giphy.com/media/UoLt6Tm8wlSnWGfSFs/giphy.gif" alt="yes-ready-to-code" >
</p>

## Overview 
In this workshop we will learn about HTML, CSS, and JavaScript in a very fun and creative way which will give us an end product of personal **To-Do List**.
This whole workshop is customizable on coders' wish! You can add different colors, animations, icons and more! So be ready to build this awesome project on your own and the best part is, it will only take you 20 minutes to complete.:grin:


*To have a peak in the project:*
* Final code can be found on [Repl.it](https://repl.it/@shibamdhar/todolist) as well as [GitHub](https://github.com/shibam17/todolist).
* The demo of my To-Do List will be [here](https://todolist.shibamdhar.repl.co/).

So let's get started now with this!:nerd_face:

**Prerequisite**
Little bit of knowledge on events and event handling on JavaScript along with animation through CSS can make your work easier but the best part is, even if you are new to this, you can still make it a go without any problem because this workshop will begin with level 0 for better understanding of this domain.:sparkles:
One more thing is **create an account in Repl.it**.

<p align='center'>
<img width="300" alt="excited" src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif">
</p>

## Setting up IDE
For this workshop we will be using **repl.it** as code editor. It is a free, online code editor which is very easy to use with instant online hosting service.

To start your coding right away navigate to [repl.it/languages/html](https://repl.it/languages/html) and you will have your whole setup. 

You would see that there are already three files named: 
1.  index.html
2.  script.js
3.  style.css 

for  HTML, JavaScript, and CSS respectively. So we will work on them to build our To-Do List.

![Initial-setup](https://cloud-f247ti7ln.vercel.app/0example-1.png)

^ Right now your page will look like this.

The setup is done now we are good to go with our coding.:sunglasses:

## The HTML file
HTML gives the structure to our web-page. Here in the first line, we have `<!DOCTYPE html>` which is used for specifying the version of HTML the document is using. Next, we have the `<title>` tag which specifies the title of our web-page that will be shown on the tab bar. Then we have `<body>` tag which contains the main visible part of our web page. Make sure that all the code you write is included between the opening and closing tags. ( `<body></body>` )
Inside the body of the file we will declare few tags, which will be useful for different purposes, such as
- `header` to provide a name.
- `input` to provide a place from where we will get the elements to put it on our list.
- `div` with type `select` this will have options to sort the completed, incomplete, and all the lists.
- Another `div` which will have `ul` tag which will get the values from JavaScript.

***NOTE*** 
Link fontawesome in the `head` of the HTML file to get access to icons.
```html
<link

rel="stylesheet"

href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"

/>
```
In case if you get stuck take reference from the below text:
```html
<body>
    <div class="message">
      <span class="fas fa-exclamation-circle"></span>
      <span class="msg"> It is a blank text</span>
    </div>
    <header>
      <h1>Shibam's ToDo List</h1>
    </header>
    <form>
      <input type="text" class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>

    <script src="./app.js"></script>
  </body>
  ```
  ^ In the above code, we have used an icon for a down arrow to activate display the drop-down option of sorting the list.
We have completed HTML part successfully.😍😍

## The CSS file 
After you have completed HTML part, you'll notice that when you click the "Run" button at the top, you just see a white screen with some texts and that is it. Now, we make it look better and attractive with our favorite colors and effects,
 **We have to think for future here**
 So this is the tricky part, here what I meant is that, we have think ahead when we will have the ***lists*** and then how we want to display them.

We get to add icons of _trash_ and _tick sign_ to delete it and mark it complete respectively. So, we have to put CSS for that too!

In case you will lost, do not worry I have your back, take help from my code.

```css
.todo {
  margin: 0.5rem;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
  align-items: center;
  transition: all 0.5s ease;
}
.trash-btn,
.complete-btn {
  background-color: rgb(243, 171, 62);
  color: white;
  font-size: 1rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
}
.complete-btn {
  background-color: rgb(81, 192, 81);
}
.todo-item {
  padding: 0 0.5rem;
}
.fa-trash,
.fa-check {
  pointer-events: none; /*to make the whole button as one*/
}
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
```
^ In the above code, I have added several properties for opacity, text-decoration and more. There is also CSS for the icons which will be inserted later in via JavaScript. 

**Adding some cool effect**
Here I chose to add some animation to my To-Do List. For instance I want that it should show some effect of disappearing when clicked in delete button aside the list.

To add animation effect to any class there are two things:
- Add animation name to the class you want to put effects by adding `animation: slide 0.3s ease forwards;` .
- Defining the animation with `keyframe`.

**For Example**:
```css

@keyframes slide {
  0% {
    transform: translateY(-100%);
  }
  40% {
    transform: translateY(15%);
  }
  90% {
    transform: translateY(-25%);
  }
}
```
^ In the above code `translate` means that it will move towards a direction, `Y` says the which direction it will move, here it is Y-Axis and then the `%value in ()` tells that how much to move. 
The effect can be viewed when we will link it with proper functioning JavaScript.
 Up till now your project should be looking like this :smile:.
 
 ![project-after-css](https://cloud-acoldgo90.vercel.app/0example-2.png)
 
 ## The JavaScript file
 First of all well done! :sunglasses: for coming this far. 

![Well-done](https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif)

Now things will start to get more exciting, We will work on the main functioning of our **To-Do List**.

We will be diving this into three parts:
1. The selectors
2. The event listeners.
3. The functions.
3.1 Adding To-Do list
3.2 Deleting from To-Do List
3.3 Filtering List

### 1. The selectors

First thing is that we need to select the tags, classes or ids (if provided) from the HTML file to target them and do work with them. This will make easier to put event listeners and functions to them.

To get this done we will first declare a `const`variable and use `document.querySelector(_className_)`.

Have a look here :point_down:
```javascript
// selectors
const todoInput = document.querySelector(".todo-input ");
const todoButton = document.querySelector(".todo-button ");
const todoList = document.querySelector(".todo-list "); 
//gets the whole added list including details and buttons
const filterOption = document.querySelector(".filter-todo");
const message = document.querySelector(".message");
```
### 2. The event listeners
Now that we got the selectors, we can add event listeners to them. Event listeners are used to put some event or actions to a section of HTML file. Such as, performing a function on a click of mouse, this is also an event. So here also we will add events. 

To do this we will use the selector name and put `.addEventListener()`, inside the apprentices we will first provide ***event** followed by function we want to call on that event.
There are many types of events, we will use here the `click` event.

Have a look here :point_down:
```javascript
//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
```

In the above code I called three functions for the working of this To-Do List. Now we will discuss them and implement them.

### 3. The functions

Here we will work on how we will get the data, then input it and event sort them. Do not panic, :sunglasses: it sounds much but we will go through it in a blink. 

So lets discuss which all functions we will need and more importantly what these will do.

#### 3.1 Adding To-Do List
We will include a function named `addTodo` which will get the data from the `input` section from the HTML.  
Once we get the data from the HTML we have to proceed with few things in mind.
- We have create a `div` element. This can be done easily with methods in JavaScript. When we want to create an element using JavaScript we use `document.createElement()`, inside the apprentices we provide the tag we want to include, such as `"div"`, `"li"` and more.
- Then we have to add class name with the help of JavaScript. For this there is a method of `.classList.add()`, inside the apprentices we need to provide the class name. **( The class names can be also be used to add icons :wink:)**
-  Last thing is to append it, which mean to add all of the things in a sequential manner inside the HTML file with the help of JavaScript. We use `.appendChild()` method with the part we want to include inside the apprentices.

**NOTE**: There is a thing which might create some problem for you, which is that when you press `ENTER` button, the page gets reload, to prevent this use `parameterName.preventDefault()`.

Look at the code here you will get the hung of it. :point_down:

```javascript
function addTodo(event) {
  //prevent from submitting (from refresh)
  event.preventDefault();
```
```javascript
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
```
In the above code :point_up: we added **elements** and **classes** then appended them.

```javascript
    //check mark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash mark
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
```
 In the above code :point_up:, the buttons/icons of trash and check is included.
 
```javascript
    //append to todo-list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
   }
```
   #### 3.2 Deleting from To-Do List
   So now, we will handle the part where in case the user wants to delete the list after he is done or wishes to change it. In the previous section when we added the trash button/icon, now it is time to put that in use!
 
 Just like before, we will create another function with the name we put in the event listeners that is `deleteCheck` and we will pass a parameter along with it let it be `e`.
 So the function would look like:
 ```javascript
 function deleteCheck(e){
 }
 ```

**NOTE**: We will also wrap up the _COMPLETE_ section in this function too. Meaning, we will include the function to happen when someone click on the check button/icon.

Since we already added our event listeners, now we have to first check that the user clicked on which icon, to do this we will use `e.target` method and save it in a variable. Once we get it, we will implement a conditional rendering for both delete and check button.

```javascript
const item = e.target;
```
**For deleting**
```javascript
//delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement; 
    //to get the whole parent element
    //animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
```

In the above code :point_up:, there are few things happening:
- We checked whether the user clicked on trash button or not, by using `item.classList[0] === "trash-btn"` inside an _if_ statement. 
- We added the class `fall` which will trigger the transition that we added in the CSS.
- Finally we removed that tag **BUT** only after when the transitioned is complete and to check that we put up another function with an event `transitioned` which will make the function with `.remove()` method in action after the transitioned is done.

**For marking complete**
```javascript
 if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  ```
  In the above code, we did not do much only just added the class of `completed` to the parent element.

The result till now! :star:

![The-workshop-with-functionalities](https://cloud-gziuv78qw.vercel.app/0ma_2.gif)
 
   #### 3.3 Filtering the To-Do List
  
So, this will be the last thing we will implement, which is sorting the list into complete, incomplete, and all the lists.

Here, also we will create a function which will get triggered by the selection box we have in HTML.

Create a function `filterTodo` inside that create a switch statement which will have the parameter equals to **the option we chose** from the box.

See the code here :point_down:
```javascript
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    //   console.log(todo)
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex ";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
```

Here we have three cases each has their own functionality to display and hide elements from the list. In addition to that, we also added style using `.style.`followed by property `display` and then the styling value which `flex` in this case.

You can notice that all the functions have kind of same structure, like passing parameters, adding elements & classes, and using conditional rendering.

There you go we are done with our JavaScript part too! 

## Congratulation!

<p align='center'>
<img src="https://media.giphy.com/media/xT8qBvaQSR3Lk0jLl6/giphy.gif" alt="yes-ready-to-code" >
</p>

The **To-Do List** is now fully functional!
If you haven't created an account on repl.it yet, I highly recommend doing so! Otherwise your project will be deleted after 24 hours.

Well do not stop here! There are many things you can do to with your To-Do List.
- Add an alert when someone tried to put in empty value.
- Try to store the data in local system.
- Sort them and keep them separate on the basis of time and date.

## Creativity show by other Hackers!

* [Paul](https://fewdarksalmonmetrics.rahulpaul4.repl.co/)
* [Simran](https://linenheftycategories.simransuri.repl.co/)
* [Anshita](https://tremendousdryprofile.anshitavaryani.repl.co/)





