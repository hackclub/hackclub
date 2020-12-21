---
name: Snake Game
description: The classic snake game recreated in Python
author: '@kyryloren',
img: 'https://cloud-i254770eq.vercel.app/0snake.png'
---

Snake is a game that most of us have played on those old Nokia phones. It's also a classic coding challenge for learning a new programming language. As complicated as it may seem at first, it's rather easy to code and takes less than 50 lines. Let's try to recreate this game in the terminal.

![Snake game demo in repl.it](https://cloud-h8v6zt88z.vercel.app/0snakereplit.gif)

## Get started
We are going to use [repl.it](https://repl.it) for this project. Just go to https://repl.it/languages/python3 to start coding. It's that easy! Creating an account will ensure you don't lose your code but you can do it after we finish this project. Let's start coding!

#### Declare dependencies
Today, we will be using the `random` and `curses` libraries. These should be imported at the top of the python file. These libraries are just python code that someone else wrote for us to use.

```python
import random
import curses
```

`randint` is a module that will allow us to give random positions to the fruits that will spawn on the map. `Curses` is how we will be handling the user interface and game mechanics.


#### Initialize the screen
Below our imports let's skip a line and start our game. First, we have to somehow declare that our terminal can be used as a user interface. We'll use the python curses library to set a cursor, screen width, and screen height.

```python
# Define the screen
s = curses.intscr()

# Set the cursor to 0 so it's invisible
curses.curs.set(0)

# Get the width and the height
sh, sw, = s.getmaxyx()

# Create a new window from the height and width at the top left corner
w = curses.newwin(sh, sw, 0, 0)
```

Great! We have defined the screen dimensions and set the cursor to be invisible in the top left corner. Let's move on to the snake logic. We'll be using these variables and definitions when creating the rest of the program.

#### Initialize the snake and food
Skip a line from the above code and let's define the snake and its position and food.

```python
# The snake's initial X position
snk_x = sw/4

# The snake's initial Y position
snk_y = sh/2

# Create the initial snake body parts
snake = [
    [snk_y, snk_x],
    [snk_y, snk_x - 1],
    [snk_y, snk_x - 2]
]

# Set the first food item at the center of the screen
food = [sh/2, sw/2]
```

Think of the snake as a group of blocks. The first block is the head. The head is at the initial `snk_x` and `snk_y` positions. This means that the the next body part has to be at 1 less X position than the head. The next body part is 2 less X from the head. The next 3 and so on. Each list item in the `snake` list is an initial body part position.

Let's add that food to the screen.

```python
# Add the food to the screen

w.addch(int(food[0]), int(food[1]), curses.ACS_PI)
```

In the above code, we use the food's X and Y positions as well as the ASCII PI character to set the first food. We are using PI symbol as the food.

Let's add the initial direction of the snake. We'll set it to go right.
```python
key = curses.KEY_RIGHT
```

#### Handle movement and game logic
We define an infinite loop for every movement that the snake makes. This is where we handle out game logic.

```python
# Infinite loop repeating every time the snake moves
while True:
    next_key = w.getch()
    key = key if next_key == -1 else next_key
```

The above code checks each next key. If the next key is equal to -1, we leave the `key` variable as is, otherwise we set the `key` variable to the `next_key` value.

Let's handle the person losing. How do we lose in snake?

```python
# Infinite loop repeating every time the snake moves
while True:
    next_key = w.getch()
    key = key if next_key == -1 else next_key

    # Handle snake losing
    if snake[0][0] in [0, sh] or snake[0][1]  in [0, sw] or snake[0] in snake[1:]:
        # Close the curses window and exit the program
        curses.endwin()
        quit()
```

In the above code, we define an if statement to check if:
- The Y position of the snake is outside the boundaries of the screen
- The X position of the snake is outside the boundaries of the screen
- The snake is in itself

If any of the above happen, we close the curses window and quit the program.

Now, let's determine the new head of the snake based on our movement

```python
while True:
    next_key = w.getch()
    key = key if next_key == -1 else next_key

    # Handle snake losing
    if snake[0][0] in [0, sh] or snake[0][1]  in [0, sw] or snake[0] in snake[1:]:
        # Close the curses window and exit the program
        curses.endwin()
        quit()

    new_head = [snake[0][0], snake[0][1]]

    # Player presses key down
    if key == curses.KEY_DOWN:
        new_head[0] += 1
    # Player presses key up
    if key == curses.KEY_UP:
        new_head[0] -= 1
    # Player presses key left
    if key == curses.KEY_LEFT:
        new_head[1] -= 1
    # Player presses key right
    if key == curses.KEY_RIGHT:
        new_head[1] += 1

    # Insert the new head of the snake
    snake.insert(0, new_head)
```

The code above is how we actually control the snake. We start by taking the old head of the snake and then checking for what key is being pressed. If key down is pressed, we take the snake's Y position and add 1 to it. If key up is pressed, we take the snake's Y position and subtract 1. If key left is pressed, we take the snake's X position and subtract 1. If key right is pressed, we take the snake's X position and add 1.

#### Handle food logic
Now let's the handle the snake running into the food. The following code should go into the `while True` statement, below the code above.

```python
# Check if the snake ran into the food
if snake[0] == food:
    # Since the snake ate the food, we need to set a new food position
    food = None
    while food is None:
        # Randomize the position of the new food
        nf = [
            random.randint(1, sh-1),
            random.randint(1, sw-1)
        ]
        # Set the new food is the new food is not in the snake
        food = nf if nf not in snake else None
    # Add the new food position to the screen
    w.addch(food[0], food[1], curses.ACS_PI)
else:
    # Handle snake not running into the food
    tail = snake.pop()
    w.addch(int(tail[0]), int(tail[1]), ' ')

w.addch(int(snake[0][0]), int(snake[0][1]), curses.ACS_CKBOARD)
```

In the above code, we check if the snake has ran into the food. If it has, we need to set a new food position and make the snake longer. We use the screen width and height dimensions to randomize coordinates for the new snake position. These random coordinates have a chance of landing right where the snake is. So to avoid that confusion we only set the new food if it's not on the snake. Otherwise, we just repeat the loop.

Finally, in any case, we're adding the head of the snake to the screen.

#### The final product:

![The snake food near the the snake body](https://cloud-1l5hoiqcf.vercel.app/0image3.png)

**We are done!** This is what your code should now look like:

```python
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

You should now be able to play Snake in the terminal! You can run the code at https://repl.it/@kyryloorlov/Snake-Game.

## Hacking
Now you have control over this code. Go ahead and tinker with it to see if you can find ways to make it more fun. Here are some ideas:

- Add a play again option: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-Try-Again)
- Add colors to the snake: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-With-Colors)
- Create a score: [Demo + Code](https://repl.it/@kyryloorlov/Snake-Game-With-Score)

Enjoy playing and getting those apples! Happy hacking!
