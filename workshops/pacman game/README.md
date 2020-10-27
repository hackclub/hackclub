---
name: 'Pacman Game'
description: 'Simple Pacman game using python'
author: '@YashKalbande'
img: 'https://cloud-k9b5z9yni.vercel.app/1pac-man.png'
---

Pac-man is one of the most famous video game in the world. Pac-man is a yellow, disk-shaped, mainly feature-less character, who roams around a 2D environment collecting dots. The player has to collect all the dots in the room without being touched by any of the four enemy characters in the form of ghosts. We will create a Pac-Man game, where the user moves around a maze eating all the dots while being pursued by four ghosts. We will be using the Freegame library to build this game.

![pacman gif](https://cloud-k9b5z9yni.vercel.app/0pacman.gif)

## Setup
Begin a new Python file using your favorite text editor or go on [repl.it/languages/python3](https://www.repl.it/languages/python3) to start a new coding environment of Python3 to quick start our workshop.

Edit your new `main.py` with new modular imports:
```python3
from random import choice
from turtle import *
from freegames import floor, vector
```
The above code says import choice function from random module. Import every function from the turtle module. [floor](http://www.grantjenks.com/docs/freegames/api.html#freegames.floor), [vector](http://www.grantjenks.com/docs/freegames/api.html#freegames.vector) form freegames module.

Next, we’ll want to declare and initialise all of our global variables:
```
state = {'score': 0}
path = Turtle(visible=False)
writer = Turtle(visible=False)
aim = vector(5, 0)
pacman = vector(-40, -80)
ghosts = [
    [vector(-180, 160), vector(5, 0)],
    [vector(-180, -160), vector(0, 5)],
    [vector(100, 160), vector(0, -5)],
    [vector(100, -160), vector(-5, 0)],
]
```
__state__ variable will display the score of the game which starts on `zero`.__aim__ sets the movement direction of Pacman with (5,0). By default, we are moving the Pacman at speed of `5` toward the positive x-axis. We are also creating a couple of Turtles which we’ll use later:__path__ for drawing the game world and __writer__ for writing the score.

## Draw the Maze
Lets desgine the maze layout with an list called _tiles_ that contains our maze. In the array, a `0` represents a black wall, and a `1` represents a collectable dot or floor space. Our game world is `20X20`, so it may be easier for future hacking the Python list by creating a new line every 20th value.
```python3
tiles = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0,
    0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    
]
```
![maze](https://cloud-k9b5z9yni.vercel.app/2maze.png)
## Creating the Walls
Now it's time to put turtles to work. We will make a function __brick__ to draw squares, which will add up to create walls. 
```python3
def brick(x, y):
    path.up()
    path.goto(x, y)
    path.down()
    path.begin_fill()

    for count in range(4):
        path.forward(20)
        path.left(90)

    path.end_fill()
```
    
## Follow the Rules!
Everyone should follow the rules. So our Pacman also needs to follow basic physics rules. We'll need a function __offset__ for collision detection.
```python3
def offset(point):
    "Return offset of point in tiles."
    x = (floor(point.x, 20) + 200) / 20
    y = (180 - floor(point.y, 20)) / 20
    index = int(x + y * 20)
    return index
```
__valid__ function will ensure our Pacman doesn't wall through the walls and out in the real world :)

```python3
def valid(point):
    "Return True if a point is valid in tiles."
    index = offset(point)

    if tiles[index] == 0:
        return False

    index = offset(point + 19)

    if tiles[index] == 0:
        return False

    return point.x % 20 == 0 or point.y % 20 == 0
```

## Building the Game World

__world__ function will use to build the game world. Of course, you can choose your colors, but to start with we’re using the traditional black and blue environment of the 1980 version of Pac-man. That final color (path.dot) is assigned to our dots on the path. You’ll notice we’re taking advantage of the brick function we set up previously. Remember to be very careful about the indentation of each line - for example, make sure the `path.up()` is lined up exactly under the `if` syntax.
```python3
def world():
    Screen().bgcolor('black')
    path.color('blue')

    for index in range(len(tiles)):
        tile = tiles[index]

        if tile > 0:
            x = (index % 20) * 20 - 200
            y = 180 - (index // 20) * 20
            brick(x, y)

            if tile == 1:
                path.up()
                path.goto(x + 10, y + 10)
                path.dot(2, 'white')
    
    update()
```
This function sets the background of the screen to black, then uses the path turtle to draw a 20 pixel blue square for every tile with a value greater than zero. 
If a tile value equals 1, then we draw a white dot in the middle of the squares created by our brick function.

## Moving in the Game World
Our one major function, __move__, will be used to move both our Pac-man and our ghosts around the game
Then create a new function called move().
```python3
def move():
    writer.undo()
    writer.write(state['score'])
    clear()    
    if valid(pacman + aim):
        pacman.move(aim)

    index = offset(pacman)

    if tiles[index] == 1:
        tiles[index] = 2
        state['score'] += 1
        x = (index % 20) * 20 - 200
        y = 180 - (index // 20) * 20
        brick(x, y)

    up()
    goto(pacman.x + 10, pacman.y + 10)
    dot(20, 'yellow')

    for point, course in ghosts:
        if valid(point + course):
            point.move(course)
        else:
            options = [
                vector(5, 0),
                vector(-5, 0),
                vector(0, 5),
                vector(0, -5),
            ]
            plan = choice(options)
            course.x = plan.x
            course.y = plan.y

        up()
        goto(point.x + 10, point.y + 10)
        dot(20, 'red')

    update()

    for point, course in ghosts:
        if abs(pacman - point) < 20:
            return
    ontimer(move, 100)

```
In this function we’re drawing the scores first, then we’re checking if a movement is valid before allowing it. The second `if` statement is what controls the eating of dots. For further hacking, if you wanted to take things a step further and introduce an animation, sound effect, or other notification we would introduce it after brick(x,y). Try adding `print(“PAC-MAN”)` as an example.

## Giving Direction to Pacman
Movement is all well and good, but we’ll need to be able to change the direction of our Pac-man namely as up, down, right, left. We’ll start by seeing if that direction is valid, thanks to our previous function, then we’ll go ahead and switch the x and y accordingly.
```python3
def change(x, y):
    "Change Pacman aim if valid."
    if valid(pacman + vector(x, y)):
        aim.x = x
        aim.y = y
```

## The Final Step

And finally, we can get our game going. We’ll need to set a resolution, hide the Turtles, write the score, listen for keyboard presses (we’re using lambda for this) and update Pac-Man’s direction, monitor the up, down, left and right keys for our aim changes. We’ll then draw the world, start the move function and we’re done!

```python3
setup(420, 420, 370, 0)
hideturtle()
tracer(False)
writer.goto(160, 160)
writer.color('white')
writer.write(state['score'])
listen()
onkey(lambda: change(5, 0), 'Right')
onkey(lambda: change(-5, 0), 'Left')
onkey(lambda: change(0, 5), 'Up')
onkey(lambda: change(0, -5), 'Down')
world()
move()
done()
```

## Hacking

Our version of Pac-man is pretty basic, utilizing 2D vector graphics and Python’s turtle graphics to draw shapes and dots on our screen. This art style is very much in-line with the look and feel of the original incarnation of the game in the 1980s. If you want to take the game a step further you could introduce graphical sprites, add more details to Pac-man or ghosts like eyes, etc.
You can design end numbers of levels for Pac-man by doing changes in the `tiles` variable. Different color schemes, size, number of ghosts, etc.

Here are some examples to give you some ideas:

- [Easy Level](https://repl.it/@YashKalbande/Easy-Level#main.py)
- [Medium Level](https://repl.it/@YashKalbande/Medium-Level#main.py)
- [Hard Level](https://repl.it/@YashKalbande/Hard-Level#main.py)


