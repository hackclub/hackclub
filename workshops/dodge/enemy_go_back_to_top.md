# Enemy - Go Back To Top

We can make the enemy go back to the top of the screen when it hits the bottom
with the following code (new lines are highlighted in gray):

> ![](img/t8_enemy_go_back_to_top.gif)

<a href="http://jsbin.com/qiyuno/78/edit?js,output"
target="_blank">![](img/open_in_js_bin.png)</a>

The highlighted gray lines above (reproduced below) are responsible for making
the enemy sprite going back to the top of the screen:

```js
if (enemy.position.y > 500) {
  enemy.position.y = 0;
}
```

## Tinkering

> ![](img/t8_tinkering.gif)

![](img/checkmark.png) Try messing around with this number yourself and see what
you observe.

## Understanding the Code

Remember that these are the dimensions of the canvas:

![](img/t1_canvas_dimensions.png)

So if the sprite's `y` coordinate is greater than `500`, that means that it is
**_below_** the canvas:

![](img/t8_y_axis_greater_than_500.png)

Let's re-phrase this code:

```js
if (enemy.position.y > 500) {
  enemy.position.y = 0;
}
```

Into more understandable English:

> **`if`** the **`enemy`**'s **`y`** **`position`** is **`>`** than **`500`**
> then make the **`enemy`**'s **`y`** **`position`** **`=`** **`0`**

In short, this code moves the enemy back to `y = 0` (The top of the canvas) when
it is below the bottom of the canvas.

## Adding Our New Code

Lets add our new code in:

> ![](img/t8_add_code.gif)

## Recap

- We learned how to detect the boundaries of the game
- We learned how to more our sprites to the top of the game

## Next Up

| **[![](img/sq_9_random_enemy_position.gif)   <br> 9. Random Enemy Position]  (random_enemy_position.md)** |
| --------------------------------------------------------------------------------------------------------- |

## Appendix

_This appendix is still being built! Is there something you have a question
about? Submit an issue requesting its addition
[here](https://github.com/hackclub/hackclub/issues)._

## Table of Contents

| **[![](img/sq_1_blank_canvas.png)          <br> 1.  Blank Canvas]      (blank_canvas.md)**          | **[![](img/sq_2_add_player_sprite.png)    <br> 2. Add Player Sprite]    (add_player_sprite.md)**    | **[![](img/sq_3_linear_player_movement.gif)  <br> 3. Linear Player Movement] (linear_player_movement.md)** |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **[![](img/sq_4_arrow_key_movement.gif)    <br> 4.  Arrow Key Movement](arrow_key_movement.md)**    | **[![](img/sq_5_player_image.gif)         <br> 5. Player Image]         (player_image.md)**         | **[![](img/sq_6_add_enemy_sprite.gif)        <br> 6. Add Enemy Sprite]       (add_enemy_sprite.md)**       |
| **[![](img/sq_7_linear_enemy_movement.gif) <br> 7.  Enemy Sprite Move] (linear_enemy_movement.md)** | **[![](img/sq_8_enemy_go_back_to_top.gif) <br> 8. Enemy Go Back to Top] (enemy_go_back_to_top.md)** | **[![](img/sq_9_random_enemy_position.gif)   <br> 9. Random Enemy Position]  (random_enemy_position.md)**  |
| **[![](img/sq_10_game_over.gif)            <br> 10. Game Over]         (game_over.md)**             |                                                                                                     | **[![](img/readme.png) <br> Back to the README.md](README.md)**                                            |
