# Pomodoro App
## Introduction
I'm sure you've used a timer before, whether for work or just for fun! Have you ever thought about how awesome it would be to create our own Pomodoro App? Well, today, we're going to make a simple yet helpful Pomodoro App!

![pomodoro pic](https://cloud-5emsg0oga-hack-club-bot.vercel.app/0pomodoro_pic.png)

You should have a beginner understanding of:

- HTML
- CSS
- JavaScript

**Here is a live App:**
- Visit [online website](https://pomodoroappworkshop.netlify.app/).

# Setting up Your Coding Environment with VS Code

VS Code is a powerful and popular code editor developed by Microsoft. It's highly recommended for its user-friendly interface and extensive capabilities.

## Installation

To get started with VS Code, follow these steps:

1. **Download VS Code:**
   - Visit [VS Code Download Page](https://code.visualstudio.com/download).
   - Download the installer for your operating system.
   
2. **Install VS Code:**
   - Run the installer you downloaded.
   - Follow the setup instructions to install VS Code on your computer.

## Accessing the Starter Code

I've prepared a starter code for you to begin with:

- Fork the starter code repository from [GitHub](https://github.com/shyakachaste/Pomodoro-App/tree/main/starter_codes).

## Getting Started

Once you have installed VS Code and forked the starter code repository:

1. Open VS Code.
2. Click on the "FORK" button on the top right corner of the repository page.
3. You're all set up and ready to start coding!

![vscode](https://cloud-kcqvhviaz-hack-club-bot.vercel.app/0vscode.png)
### Building the Project

#### 1. Starter Code
- Let's start with the provided code. In our `index.html` file, we have a container `div` with an `<h1>` tag inside it.
- Next, in our `style.css` file, all the styles have been pre-written for you! However, you can modify any styles if you wish.

### 2. HTML
We need to add some more HTML lines to build our Pomodoro App. We will write all our HTML code inside the container div. Define a `<div>` tag with a class of `timer` below the `<h1>` tag.

```html
<div class="container">
<h1>Pomodoro App</h1>
<div class="timer">
  <span id="time">25:00</span>
</div>
</div>
```
Inside the container `div`, we will add some buttons for the functioning of our Pomodoro App. Create a `<div>` tag below our timer div and add 3 buttons inside it with the text and the class of start, stop, and reset respectively.

```html
<div class="controls">
  <button id="start">Start</button>
  <button id="stop">Stop</button>
  <button id="reset">Reset</button>
</div>
```
Next, we will add some settings inputs to allow users to customize the work and break durations. Create a `<div>` tag below our controls div and add two input fields with labels for work and break durations.
``` html
 <div class="settings">
  <label for="work-duration">Work Duration (minutes):</label>
  <input type="number" id="work-duration" value="25" min="1">
  <label for="break-duration">Break Duration (minutes):</label>
  <input type="number" id="break-duration" value="5" min="1">
</div>
```
Lastly, we will add a section for tasks. Create a `<div>` tag below our settings div and add an input field for new tasks, a button to add tasks, and an unordered list to display the tasks.

```html
<div class="tasks">
  <h2>Tasks</h2>
  <input type="text" id="new-task" placeholder="Add a new task">
  <button id="add-task">Add Task</button>
  <ul id="task-list"></ul>
</div>
```
Here is our complete HTML code so far:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pomodoro App</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Pomodoro Timer</h1>
    <div class="timer">
      <span id="time">25:00</span>
    </div>
    <div class="controls">
      <button id="start">Start</button>
      <button id="stop">Stop</button>
      <button id="reset">Reset</button>
    </div>
    <div class="settings">
      <label for="work-duration">Work Duration (minutes):</label>
      <input type="number" id="work-duration" value="25" min="1">
      <label for="break-duration">Break Duration (minutes):</label>
      <input type="number" id="break-duration" value="5" min="1">
    </div>
    <div class="tasks">
      <h2>Tasks</h2>
      <input type="text" id="new-task" placeholder="Add a new task">
      <button id="add-task">Add Task</button>
      <ul id="task-list"></ul>
    </div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```
### 3. CSS
Here is `style.css` for our `index.html`

```css
:root{
    --primary-font: 'Open Sans', sans-serif;
    --background: linear-gradient(
        45deg,
        #cad2c5, 
        #84a98c 33%,
        #52796f 66%,
        #2f3e46 100% 
    );
    --button-color:#84a98c;
    --button-hover-color:#52796f;
    --secondary-color:#2f3e46;
}

body {
    font-family: var(--primary-font);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: var(--background);
    color: var(--secondary-color);
    
}

.container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    margin-bottom: 20px;
}

.timer {
    font-size: 3em;
    margin-bottom: 20px;
}

.controls button, .tasks button {
    font-family: 'Roboto', sans-serif;
    margin: 5px;
    padding: 10px 20px;
    border: none;
    background-color: var(--button-color);
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

.controls button:hover, .tasks button:hover {
    background-color: var(--button-hover-color);
}

.settings, .tasks, .progress {
    margin-top: 20px;
}

.settings label {
    display: block;
    margin-bottom: 5px;
}

.settings input {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
}

.tasks input {
    padding: 5px;
    width: 70%;
    box-sizing: border-box;
}

.tasks button {
    padding: 5px;
}

.tasks ul {
    list-style-type: none;
    padding: 0;
}

.tasks li {
    background: #e0e0e0;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}

.progress {
    position: relative;
    height: 20px;
    background: var(--button-hover-color);
    border-radius: 10px;
    overflow: hidden;
}

#progress-bar {
    height: 100%;
    width: 0;
    background: #007BFF;
}
```
### 4. JavaScript
Navigate to your `app.js` file and let's start writing JavaScript!
First, we will link the timer elements and buttons in our HTML with JavaScript variables.
``` js
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const workInput = document.getElementById('work-duration');
const breakInput = document.getElementById('break-duration');
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
```

Next, we define some variables for the timer functionality.

``` js
let timer;
let isRunning = false;
let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let timeRemaining = workDuration;
let isWorkTime = true;
```
Now, we will define a function to start the timer.

``` js
function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}
```
Similarly, we will define functions to stop and reset the timer.

```js
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeRemaining = isWorkTime ? workDuration : breakDuration;
  updateDisplay();
}
```
We will define a function to update the timer display.

``` js
function updateTimer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateDisplay();
  } else {
    isWorkTime = !isWorkTime;
    timeRemaining = isWorkTime ? workDuration : breakDuration;
    alert(isWorkTime ? 'Time to work!' : 'Take a break!');
  }
}
````
Finally, we will define a function to update the display.

```js
Copy code
function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
```
Don't forget to add event listeners to the buttons.

```js
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
addTaskButton.addEventListener('click', addTask);
```
To add tasks, we define the addTask function.

```js
function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
  }
}
```

And that's it! Here's the complete JavaScript code.

```js
const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const workInput = document.getElementById('work-duration');
const breakInput = document.getElementById('break-duration');
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

let timer;
let isRunning = false;
let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let timeRemaining = workDuration;
let isWorkTime = true;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
addTaskButton.addEventListener('click', addTask);

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeRemaining = isWorkTime ? workDuration : breakDuration;
  updateDisplay();
}

function updateTimer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateDisplay();
  } else {
    isWorkTime = !isWorkTime;
    timeRemaining = isWorkTime ? workDuration : breakDuration;
    alert(isWorkTime ? 'Time to work!' : 'Take a break!');
  }
}

function updateDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    newTaskInput.value = '';
  }
}
```
Here is how it will be:
[video link](https://cloud-8908hvpn1-hack-club-bot.vercel.app/0video.mp4)

## Conclusion
The Pomodoro App was built using HTML, CSS, and JavaScript. HTML was used to create the structure of the app, defining elements like the timer display, control buttons, settings for work and break durations, and a task list. CSS was applied to style the app, including fonts from Google Fonts, setting the background color and layout of the app, styling the timer display, buttons, and input fields. JavaScript provided the interactivity, implementing functionalities such as starting, stopping, and resetting the timer, updating the timer display dynamically, and adding tasks to the task list. Together, these technologies enabled the creation of a fully functional Pomodoro App that helps users manage their work time effectively.

**You have now built your very own Pomodoro App! You can customize it further and add more features as you like. Happy coding!**

