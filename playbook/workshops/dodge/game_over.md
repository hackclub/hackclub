# Game Over When Touching

Currently, when the player touches the enemy, nothing happens:

> ![](img/sq_8_enemy_go_back_to_top.gif)

However we want the message "Game Over" to appear when the player touches the
enemy:

> ![](img/sq_10_game_over.gif)

We can make a game over appear when the player touches the enemy with the
following code (new code highlighted in gray):

> ![](img/t10_js_bin.gif)

[![](img/open_in_js_bin.png)](http://jsbin.com/qiyuno/51/edit?js,output)

The highlighted gray lines above (reproduced below) are responsible for making
"Game Over" appear on the screen when the player touches the enemy:

```js
if (player.overlap(enemy)) {
  alert("Game Over");
}
```

## Understanding the Code

We can interpret the code as follows:

> **`if`** the **`player`** **`overlap`**s the **`enemy`**  
  then **`alert`** the message **`"Game Over"`**

## Adding the Code

**Pro-Tip**: Before writing anything, temporarily "comment out"
`enemy.position.y = enemy.position.y += 18;` Why? Try not doing this haha.

> ![](img/t10_comment_enemy_position.gif)

```
What is commenting out?

By adding those two slashes at the beginning of the line, you're telling the
computer to ignore anything after those slashes. This results in the line not
being ran.
```

> ![](img/t10_adding_the_code.gif)

## Done!

Yay! We made it! We have covered the bulk of the game.
Everything else is minor but important.

> ![](img/celebrate.gif)

Congratulations on finishing the game!

## Quick Fixes

You may notice that it's hard to replay the game because when the bullet hits
the player, it gets stuck in and endless cycle of `alert`'s. One quick way we
can fix this is to add this after the `alert` code:

```js
player.remove();
```

This will remove the player and end the seemingly endless cycle!

<!-- I did my best here. I want this to be shippable ASAP. -->

## Recap

- We learned how to show an alert
- We learned how to detect if a sprite is overlapping another sprite
- We learned how to remove a sprite

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
