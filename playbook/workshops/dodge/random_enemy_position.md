# Enemy - Random Position

Instead of having the enemy fall in the same place every time:

> ![](img/sq_8_enemy_go_back_to_top.gif)

We want it to to fall from a different place each time:

> ![](img/sq_9_random_enemy_position.gif)

We can make the enemy start at random x positions with the following code:

> ![](img/t9_enemy_random_x.gif)

[![](img/open_in_js_bin.png)](http://jsbin.com/qiyuno/51/edit?js,output)

The highlighted gray lines above (reproduced below) are responsible for making
the enemy spawn in a random position:

```js
enemy.position.x = random(300);
```

## Tinkering

I'm going to try changing the `300` to other numbers:

> ![](img/t9_tinkering.gif)

## Understanding the Code

`random(3)` outputs a number between `0` and `3`

`random(10)` outputs a number between `0` and `10`

`random(300)` outputs a number between `0 and 300`

Looking at the code:

```js
enemy.position.x = random(300);
```

Lets translate that!

> Set the **`enemy`**'s **`x`** **`position`** to a **`random`** number
  between **`0`** and **`300`**.

Why `300`? Because the width of the canvas is `300` and we want the enemy sprite
to be able to spawn anywhere in that region:

![](img/t1_canvas_dimensions.png)

<!-- Let's try playing around with the `random()` function in the console.

![](img/checkmark.png) Open up the "Console" tab in JS Bin:

> ![](img/t9_open_up_console.gif)

![](img/checkmark.png) Then type in `random(3);`
your keyboard.

> ![](img/t9_type_random_3.gif)

and press the `enter` key on your keyboard

> ![](img/t9_type_random_3_result.png)

-->

## Adding the Code

> ![](img/t9_adding_the_code.gif)

## Recap

- We learned how to create random numbers
- We learned how to set the position of a sprite to a number

## Next

| **[![](img/sq_10_game_over.gif)            <br> 10. Game Over]         (game_over.md)** |
| --------------------------------------------------------------------------------------- |

## Appendix

_This appendix is still being built! Is there something you have a question
about? Submit an issue requesting its addition
[here](https://github.com/hackedu/hackedu/issues)_

## Table of Contents

| **[![](img/sq_1_blank_canvas.png)          <br> 1.  Blank Canvas]      (blank_canvas.md)**          | **[![](img/sq_2_add_player_sprite.png)    <br> 2. Add Player Sprite]    (add_player_sprite.md)**    | **[![](img/sq_3_linear_player_movement.gif)  <br> 3. Linear Player Movement] (linear_player_movement.md)** |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **[![](img/sq_4_arrow_key_movement.gif)    <br> 4.  Arrow Key Movement](arrow_key_movement.md)**    | **[![](img/sq_5_player_image.gif)         <br> 5. Player Image]         (player_image.md)**         | **[![](img/sq_6_add_enemy_sprite.gif)        <br> 6. Add Enemy Sprite]       (add_enemy_sprite.md)**       |
| **[![](img/sq_7_linear_enemy_movement.gif) <br> 7.  Enemy Sprite Move] (linear_enemy_movement.md)** | **[![](img/sq_8_enemy_go_back_to_top.gif) <br> 8. Enemy Go Back to Top] (enemy_go_back_to_top.md)** | **[![](img/sq_9_random_enemy_position.gif)   <br> 9. Random Enemy Position]  (random_enemy_position.md)**  |
| **[![](img/sq_10_game_over.gif)            <br> 10. Game Over]         (game_over.md)**             |                                                                                                     | **[![](img/readme.png) <br> Back to the README.md](README.md)**                                            |
