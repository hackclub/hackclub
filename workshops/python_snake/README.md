---
name: 'Snake Game'
description: 'Classic snake game recreated in Python'
author: '@kyryloren',
img: 'https://cloud-i254770eq.vercel.app/0snake.png'
---

Snake is a game that most of us have played on those old Nokia phones. It's also a classic coding challenge for learning a new programming language. As complicated as it may seem at first, it's rather easy to code and takes less than 50 lines.

![Snake game demo in repl.it](https://cloud-h8v6zt88z.vercel.app/0snakereplit.gif)

In this workshop, we will make the Snake game in Python that you can play using the terminal.

## Get started
We are going to use [repl.it](https://repl.it) for this project. Just go to https://repl.it/languages/python3 to start coding. It's that easy! Creating an account will ensure you don't lose your code but you can do it after we finish this project. Let's start coding!

### First of all, we have to import the necessary modules.
```
# Importing the external libraries we need for the game
 
import random
import curses
```

randint is a module that will allow us to give random positions to the fruits that will spawn on the map. Also, we import curses to enable the construction of user interface applications.

### After that, we can start to declare our variables.
```
s = curses.initscr()
curses.curs_set(0)
sh, sw = s.getmaxyx()
w = curses.newwin(sh, sw, 0, 0)
w.keypad(1)
w.timeout(100)
 
snk_x = sw/4
snk_y = sh/2
snake = [
   [snk_y, snk_x],
   [snk_y, snk_x-1],
   [snk_y, snk_x-2]
]
 
food = [sh/2, sw/2]
w.addch(int(food[0]), int(food[1]), curses.ACS_PI)
```

We have x and y snake's initial position: both are set in x= screen width/4 and screen height/2 for Y.

```
snake = [
   [snk_y, snk_x],
   [snk_y, snk_x-1],
   [snk_y, snk_x-2]
]
```

#### This should be the product:
```
import random
import curses
s = curses.initscr()
curses.curs_set(0)
sh, sw = s.getmaxyx()
w = curses.newwin(sh, sw, 0, 0)
w.keypad(1)
w.timeout(100)
snk_x = sw/4
snk_y = sh/2
snake = [
  [snk_y, snk_x],
  [snk_y, snk_x-1],
  [snk_y, snk_x-2]
]
food = [sh/2, sw/2]
w.addch(int(food[0]), int(food[1]), curses.ACS_PI)
```

Then we set the body parts to a list of x coordinates decreasing by 1 and then 2, so that each is left to the head either by 1 or 2.

Then we set the starting place of the food to the center of the screen with its x and y being half of the width and height respectively. We then add the food to the screen 

### Now let’s add the movement

```
key = curses.KEY_RIGHT
```

Tell your snake where it will move initially which is with the Right Key

```
while True:
   next_key = w.getch()
   key = key if next_key == -1 else next_key
```

Then have an infinite loop for every movement of the snake so we have the program sense the player has pressed the next key or nothing. 

```
if snake[0][0] in [0, sh] or snake[0][1]  in [0, sw] or snake[0] in snake[1:]:
    curses.endwin()
    quit()
```

Now we have to check to see if the person has lost the game so they could lose the game if the Y position is either at the top or the height of the screen or if the x position is either to the left or the width of the screen or you could lose if your snake is in itself. Any of these things happen, the window will quit.

```
new_head = [snake[0][0], snake[0][1]]
```

Now just insert the new head of our snake

```
if key == curses.KEY_DOWN:
    new_head[0] += 1
if key == curses.KEY_UP:
    new_head[0] -= 1
if key == curses.KEY_LEFT:
    new_head[1] -= 1
if key == curses.KEY_RIGHT:
    new_head[1] += 1

snake.insert(0, new_head)
```

Now to determine what the new head of the snake is going to be, we'll start by taking the old head of the snake. Go ahead and figure out what the actual key being clicked is. If it's a key down we got to take the Y position and add one to it. We've got up too so if it's up, we will go negative one. If it's left, we got to go to the negative one as well and if it's right we go positive one on the x-axis

#### This should be the product:
```
key = curses.KEY_RIGHT
while True:
  next_key = w.getch()
  key = key if next_key == -1 else next_key
  if snake[0][0] in [0, sh] or snake[0][1]  in [0, sw] or snake[0] in snake[1:]:
      curses.endwin()
      quit()
  new_head = [snake[0][0], snake[0][1]]
  if key == curses.KEY_DOWN:
      new_head[0] += 1
  if key == curses.KEY_UP:
      new_head[0] -= 1
  if key == curses.KEY_LEFT:
      new_head[1] -= 1
  if key == curses.KEY_RIGHT:
      new_head[1] += 1
  snake.insert(0, new_head)
```

### You should get something like this when you run the code:

![Head of the snake](https://cloud-1znswr25l.vercel.app/0image2.png)

### Now let’s work out the food
```
if snake[0] == food:
    food = None
    while food is None:
        nf = [
            random.randint(1, sh-1),
            random.randint(1, sw-1)
        ]
        food = nf if nf not in snake else None
    w.addch(food[0], food[1], curses.ACS_PI)
else:
    tail = snake.pop()
    w.addch(int(tail[0]), int(tail[1]), ' ')
```

Now determine whether or not the snake has run into the food. If it runs into the food you have to select a new piece of food so set food to None will create a new food from here. Then finally use Rand int.  You type minus one to the height and the width minus 1 which will be our new food location.

```
food = nf if nf not in snake else None
```

This needs to be a loop so now we're going to set food to a check to see if the food is nf if nf not in snake else not say it to None. So if it's None, it's gonna redo the loop like you want.

```
w.addch(food[0], food[1], curses.ACS_PI)
   else:
       tail = snake.pop()
       w.addch(int(tail[0]), int(tail[1]), ' ')
```

Now we're gonna go ahead and add that once the food has been selected we're gonna add it and then use curses.ACS_PI. From here we're handing the “else”: we got to get the tail of the snake so you pop that off and then add a space in place of where the tail piece was.

```
w.addch(int(snake[0][0]), int(snake[0][1]), curses.ACS_CKBOARD)
```

Finally, in case,  add the head of the snake to the screen using a CS CK board.

#### This should be the product:
```
if snake[0] == food:
    food = None
    while food is None:
        nf = [
            random.randint(1, sh-1),
            random.randint(1, sw-1)
        ]
        food = nf if nf not in snake else None
    w.addch(food[0], food[1], curses.ACS_PI)
else:
    tail = snake.pop()
    w.addch(int(tail[0]), int(tail[1]), ' ')
w.addch(int(snake[0][0]), int(snake[0][1]), curses.ACS_CKBOARD)
```
### You should get something like this when you run the code:

![The snake food near the the snake body](https://cloud-1l5hoiqcf.vercel.app/0image3.png)

**We are done!** This is what your code should now look like:

```
import random
import curses
s = curses.initscr()
curses.curs_set(0)
sh, sw = s.getmaxyx()
w = curses.newwin(sh, sw, 0, 0)
w.keypad(1)
w.timeout(100)
snk_x = sw/4
snk_y = sh/2
snake = [
  [snk_y, snk_x],
  [snk_y, snk_x-1],
  [snk_y, snk_x-2]
]
food = [sh/2, sw/2]
w.addch(int(food[0]), int(food[1]), curses.ACS_PI)
key = curses.KEY_RIGHT
while True:
  next_key = w.getch()
  key = key if next_key == -1 else next_key
  if snake[0][0] in [0, sh] or snake[0][1]  in [0, sw] or snake[0] in snake[1:]:
      curses.endwin()
      quit()
  new_head = [snake[0][0], snake[0][1]]
  if key == curses.KEY_DOWN:
      new_head[0] += 1
  if key == curses.KEY_UP:
      new_head[0] -= 1
  if key == curses.KEY_LEFT:
      new_head[1] -= 1
  if key == curses.KEY_RIGHT:
      new_head[1] += 1
  snake.insert(0, new_head)
  if snake[0] == food:
      food = None
      while food is None:
          nf = [
              random.randint(1, sh-1),
              random.randint(1, sw-1)
          ]
          food = nf if nf not in snake else None
      w.addch(food[0], food[1], curses.ACS_PI)
  else:
      tail = snake.pop()
      w.addch(int(tail[0]), int(tail[1]), ' ')
  w.addch(int(snake[0][0]), int(snake[0][1]), curses.ACS_CKBOARD)
```

You should now be able to play Snake in the terminal! You can run my code [here](https://repl.it/@kyryloorlov/Snake-Game).

## Hacking
Now you have control over this code. Go ahead and tinker with it to see if you can find ways to make it more fun. Here are some ideas:

- Add a play again option: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-Try-Again)
- Add colors to the snake: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-With-Colors)
- Create a score: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-With-Score)

Enjoy playing and getting those apples! Happy hacking!
