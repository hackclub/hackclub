# Pico-8 Action Game

## Why Pico?
I consider Pico to be *the best* way to introduce newcomers to coding because of just how fun it is to code in it. Unlike traditional game engines, Pico manages to preserve a traditional coding feel while also streamlining the whole game development process: you still write legitimate Lua code and implement all game systems (like animation, physics, and scenes) yourself. This is good in the long run because that means that beginners get to actually code their games from scratch, rather than gluing together a bunch of pre-made elements. At the same time, however, Pico makes implement graphics, tilemaps, and even music a breeze by including all of those tools into the same package. This means that there's no more need in teaching beginners multiple pieces of software and how to make them work together, as everything is already there: for example, displaying a sprite from a spritesheet is as simple as `spr(0)`!

## Setup
This workshop requires a copy of [Pico-8](https://www.lexaloffle.com/pico-8.php), which unfortunately costs $15. The good news is that Pico is DRM-free, which means that you can share one license with your whole club.

It is also strongly recommended that you download this wonderful cheatsheet:

![](assets/cheatsheet.png)

One common practice is to fullscreen it behind Pico, like so:

![](assets/pico_with_cheatsheet.png)

## Part 1: the early years
Tired of complex workflows and high-definition graphics? Well, the Pico-8 fantasy console is here to help. Through the course of this workshop you will make [this](demos/final.html) action game. Along the way you'll learn how to use the Pico console along with the basics of Lua scripting.

<iframe src="demos/final.html" width="100%" height="700px">
  <image src="assets/final.gif">
</iframe>

A couple of basic pieces of information about Pico: there are three modes.

 * The console mode

   ![](assets/console.gif)

   This is what you see on startup, and allows you to run a couple of basic commands. Don't worry too much about it for now.

 * The editor mode

   ![](assets/editor.png)

   This is where you make your game. The editor has multiple tabs that give you access to various bits of functionality. **You can get to it by pressing `Esc` from the console mode.**
 * The game mode

   ![](assets/game.png)

   This is where you can test your game. **You can get to it by pressing `Ctrl-R`. To get back to the editor, press `Esc` twice.**

### Code, oh my
Before making the actual game, a bit of theory.

![](assets/gameloop.png)

Every game has something called a gameloop, which is code that is called every frame. This gameloop is split into three parts: first, the game collects user input (is the right arrow pressed?). Then, the game updates some internal variables (move the player right). Finally, the game redraws the screen to reflect the new state.

In Pico, you can define that drawing phase by placing code in the following way:
```lua
function _draw()

 -- place code here!

end
```
Don't worry about what exactly is going on here, just understand that anything that goes in-between the `function` and `end` will be drawn onto the screen.

Side-not: in Pico, any line of code that begins with `--` is ignored, so it's useful for writing various comments about the code.

With that in mind, let's draw our ghosty pal.

```lua
function _draw()

 spr(1, 0, 0)

end
```
`spr` is what is called a function: some code that can be run at any point. We can also pass information into functions, which is what we're doing in this example. Concretely, `spr` accepts 3 pieces of information (in this order):
 * sprite number
 * x coordinate of the top-left corner
 * y coordinate of the top-left corner
`spr(1, 0, 0)` means to draw the first sprite in our spritesheet with its top left corner at `(0, 0)`.

  ![](assets/noclear.gif)

When you actually execute this (`Ctrl-R`), you may notice two things: that the square is in a weird place and that there's junk on the screen. In order to solve the screen issue, you need to clear the screen by adding a `cls()` to the top of your `_draw` function.

```lua
function _draw()

 cls() -- this clears the screen
 spr(1, 0, 0)

end
```
Now every frame will start from a blank screen.

The reason that the square is in the top-left corner is because coordinates actually work a little differently in Pico. As is drawn on the cheatshet, the y-axis  is actually flipped: this means that `(0, 0)` is actually the top-left corner. Remember this.

![](assets/coordinate_grid.png)

### Variables
Right now our "game" is a little boring, as the ghost isn't moving at all. The reason behind this is that we're always giving it the same coordinates. The solution? Variables.
Variables are essentially little boxes that allow you to store a value, like a number.
```lua
x = 3
```

Whenever Pico comes across a variable it replaces that variable with the value that is currently stored in it, so

```lua
x = 3
y = x -- y is now 3
```
turns into
```lua
x = 3
y = 3 -- y is now 3
```
Following the same principal, the following code will increment x by 1:
```lua
x = 3
x = x + 1 -- x is now 4
```
(turns into)
```lua
x = 3
x = 3 + 1 -- x is now 4
```
We can use this in our code by making an `x` variable and then changing it periodically.
```lua
x = 3

function _draw()
 cls()
 spr(1, x, 0)
end
```
Remember the game loop theory? Well, Pico provides another function for the update phase of the game-loop called `_update`. This function is run every loop before the `_draw` function, and so allows us to modify any variables we want. Let's modify the x variable so that the ghost moves to the right:
```lua
x = 0

function _update()
 x = x + 1 -- increment x by 1
end

function _draw()
 cls()
 spr(1, x, 0)
end
```

### Values
A value is anything that you can place into a variable. The most basic type is a number. As you saw earlier, there are also several operations that result in numbers:
```lua
3 + 3 -- 6, addition
3 - 3 -- 0, subtraction
3 * 3 -- 9, multiplication
3 / 3 -- 1, division
3 ^ 3 -- 27, to the power of
```
Whenever Pico comes across one of these operations, it replaces the operation with its result, so `3 + 3` becomes `6`.

The other important type is a boolean, which is just `true` or `false`. There are also operations that result in booleans:
```lua
4 == 4 -- true, equal to
4 ~= 4 -- false, not equal to

4 < 4 -- false, less than
4 <= 4 -- true, less than or equal to
4 > 4 -- false, greater than
4 >= 4 -- true, greater than or equal to

true and false -- false
true or false -- true
```
We can combine these to form complex logic expressions, like so:
```lua
4 != 4 or ((4 <= 5 or 3 != 3) and 3 <= 22) -- true
```

## User input
Before coding a solution to any problem, it's always way more useful to approach it from a high level. So here's a problem: how do we give the user the ability to control the square?
 * Well, we need to make it so that the ghost only moves when the user presses certain buttons.
 * We need to increment `x` when the user presses 'right' and decrement `x` when the user presses 'left'.
 * We need to modify the `_update` function so that it check if 'right' or 'left' were pressed and modifies x accordingly.
But how do we run some code only sometimes? Welcome the `if` statement.
```lua
if true then
 print(1)
end
```
If the boolean between the `if` and `then` is `true` then the up to `end` is run. Otherwise, Pico just skips the whole expression.

We can get that boolean with the `btn` function, which returns `true` or `false` depending on whether a button is pressed.

![](assets/keyboard.png)

`btn` accepts a number (0-6) that denotes a keyboard button. Knowing that, try to write an implementation. Once you're done you can check your solution against ours:



```lua
function _update()
 if btn(1) then
  x = x + 1
 end
end
```

Now, every frame, Pico checks if the right button is pressed, and if so increases the x. Here is the complete code with every direction added:

```lua
x = 0
y = 0

function _update()
 if btn(1) then -- right
  x = x + 1
 end
 if btn(0) then -- left
  x = x - 1
 end
 if btn(3) then -- up
  y = y + 1
 end
 if btn(2) then -- down
  y = y - 1
 end
end

function _draw()
 cls()
 spr(1, x, y)
end
```

### Borders
It is often important to restrict the player's movement - and again, this is best approached from a conceptual level. We need to...
 * Stop the user from going off-screen
 * Check if the user is off-screen and bring them back
 * In the `_update` function check if the user has gone off screen for every direction and if so set their appropriate coordinate to be the screen's edge
Once again, try to implement this yourself and then compare your solution with ours:

```lua
function _update()
 if x < 0 then
  x = 0
 end
 if y < 0 then
  y = 0
 end
 if x >= 127 then
  x = 127
 end
 if y >= 127 then
  y = 127
 end
end
```
There is a problem with this solution, however, which is that the ghost can actually go off-screen. The reason that this happens has to due with how coordinates in Pico work.

![](square_edge.gif)

Because the coordinates refer to the left hand corner checking the bottom or right edge of the screen isn't actually going to work. Instead, what you need to do is to draw an imaginary line that equals the edge minus the square size and check that instead:

![](square_edge_line.png)

Here is the updated code:

```lua
width = 10 -- notice the new variables
height = 10 -- these are important so that it's easier to change the square size later on

function _update()
 if x < 0 then
  x = 0
 end
 if y < 0 then
  y = 0
 end
 if x >= 127 - width then
  x = 127 - width
 end
 if y >= 127 - height then
  y = 127 - height
 end
end
```

## Part 2: the invasion
The issue with our current game is that it's still pretty boring, so let's add some danger for the player: falling raindrops. But the first issue that we'll encounter is that we currently don't have a good way to store multiple values. We could make multiple variables, like so:
```lua
raindrop1_x = 0
raindrop2_y = 0

raindrop1_x = 0
raindrop2_y = 0

raindrop1_x = 0
raindrop2_y = 0
```
but, as you can see, that takes up a lot of space and caps the amount of drops that we can create. In order to compactly store all of the drops we need a new value type: a table.

A table lets you store multiple values in one value (similar to a list or an array in other languages). While a regular variable can be thought of as a box, think of a table as a bag with a bunch of values in it. We can define a table like so:
```lua
t1 = {1, 2, 3}
t2 = {3, true, false, 32, 43}
t3 = {}
```
As you can see, a table can store any number of different value types. You create a table by putting them in curly brackets and separating them by commas. We can then access those variables by adding square brackets with the index of the value to the table name. Note that indices start at 1 in lua.
```lua
t1[1] -- 1
t1[2] = 3
t1[3] = t1[3] + 1
```




Now we're faced by another decision: how do we store coordinates? If we apply tables to our current variable setup, this is what we would get:
```lua
rain_x = {0, 3, 5, 6}
rain_y = {32, 43, 21, 32}
```
But this is also sub-optimal because there is no way to guarantee that the two tables will always have the same amount of values, which could lead to bugs. The solution is to use a table of coordinate pairs:
```lua
rain_coords = { {0, 32}, {3, 43}, {5, 21}, {6, 32} }
```

This 'table of tables' approach improves our code by keeping all information in one place. But before we implement that, let's first change it so that we use the same approach in our code: that means replacing `x` and `y` with a single `coords` variable, and `width` and `height` with a `size` variable. Try that now.

```lua
function _update()
 if coords[1] < 0 then
  coords[1] = 0
 end
 if coords[2] < 0 then
  coords[2] = 0
 end
 if coords[1] >= 127 - size[1] then
  coords[1] = 127 - size[1]
 end
 if coords[2] >= 127 - size[2] then
  coords[2] = 127 - size[2]
 end
end
```
Notice how `x` is indexed by `1` because it is the first element in a coordinate pair, and `y` is indexed by `2` because it is the second element.

Now let's add the raindrops. For now, let's say that we'll add one raindrop every single frame. We can use the `add` function, which takes in a table and the value to add to its end.
```lua
drops = {}
function _update()
  add(drops, { 0, 0 }) -- adds a coordinate pair with an x of 0 and a y of 0
  end
  ```
  If you run the program now you'll notice that nothing appears - that's because we need to actually display the drops that we add. But if you think about it, we can't just magically display the whole table, but instead need to call the `spr` function for every element in it. This is where the for loop comes in: it lets you execute a bit of code for every item in a list.

![](assets/for_loop.gif)

```lua
function _draw()
 -- for [variable name] in all([table name]) do
 for drop in all(drops) do
  spr(2, drop[1], drop[2])
 end
end
```

The for loop in this example goes through `drops` and for every value in that table sets `drop` equal to the value. Since in this case that value is a coordinate pair, we then use it to draw a raindrop sprite in that location. We call `spr` with `2` because our raindrop sprite has that value in our spritesheet.

![](assets/spritesheet_rain.png)

Here is what the code would do if drops were equal to `{{0, 0}, {1, 1}, {2, 2}}`:

```lua
drop = {0, 0}
spr(2, drop[1], drop[2])

drop = {1, 1}
spr(2, drop[1], drop[2])

drop = {2, 2}
spr(2, drop[1], drop[2])
```

### Let it rain
Moving raindrops uses a very similar technique to displaying them - this is because, again, we can't move an entire table and need to deal with its contents individually. Go ahead and write a loop in the `_update` function that moves all the drops downwards, and then compare your solution with ours:

```lua
rain_speed = 3

function _update()
 for drop in all(drops) do
  drop[2] = drop[2] + rain_speed
 end
end
```

It's worth setting the rain speed to a variable so that it's easier to change it later on. Unfortunately, our game still looks like this:

![](imperfect_rain.gif)

We can randomize the drops' starting location by using the `rnd` function, which returns a number from 0 up to but not including the one you give it.

```lua
-- add(rain, { 0, 0 }) turns into
add(rain, { rnd(128 - drop_size[1]), 0 })
```

The reason that we subtract `drop_size` is for the same reason that we subtracted the player's width from the width of the screen when we were preventing them from going off - that helps us account for the fact that the coordinates actually refer to the top left corner of the droplet. If we allowed it to spawn at 127 pixels then it would be almost entirely off-screen.

Another issue is that the droplets are spawning way too fast and we want a way to control that. The modulo operator (`%`) helps us out. It works by returning the remainder of dividing the two numbers passed to it.
```lua
10 % 7 -- 3
10 % 5 -- 0
105 % 10 -- 5
80 % 10 -- 0
```
This is useful because it can help is figure out if a number is a multiple of some other number: if `x` is indeed a multiple of `y` then `x % y` should equal `0`, because dividing them does not produce a remainder. We can use this concept to execute code periodically, for example every 10 frames.
```lua
frame = 0
rain_freq = 10
function _update()
  if frame % rain_freq == 0 then
    add(rain, { rnd(128 - drop_size[1]), 0 })
  end
  frame = frame + 1
end
```
Notice the new frame variable, which is important because it allows us to keep track of what the current frame is. As with rain speed, it is also a good idea to make rain frequency into a variable with `rain_freq`.

There is one final thing that we need to do with the rain. The problem is that currently the list of drops will grow infinitely large, which can cause considerable lag. The solution is to remove drops from it once they reach a certain point, such as the bottom edge of the screen. We can use the `del` function, which accepts a table and item to remove. Go ahead and try to use this to automatically remove drops from our `drops` table, and then check our solution:

```lua
function _update()
 for drop in all(drops) do
  drop[2] += rain_speed
  if drop[2] >= 128 then
    del(drops, drop)
  end
 end
end
```
