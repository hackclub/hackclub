# Dodge

_Questions, comments and critiques are welcome! Send your feedback
[here](https://docs.google.com/forms/d/1IxbiDtyP-UOx3hRGu3o2I-iVll95xQ6I_pW8JS3TZ2k/viewform?entry.1677546962=The+bullet+dodging+game)._

We are going to make a bullet dodging game:

[![](img/game_play.gif)](http://output.jsbin.com/dozoki/64)

![](img/checkmark.png) Go ahead and [play the game](http://output.jsbin.com/dozoki/64).

We're going to walk through how to build this game step by step. However, feel
free to glance at [the final code](http://jsbin.com/dozoki/63/edit?js,output).

## Some Quick Vocabulary

> ![](img/r_vocab1.png)

<!-- Editable Drawing in: https://docs.google.com/drawings/d/1Px_9MVqn2qv6ASDl7vxglR2lXVpHVaNsvT9lyrqWzmM/edit -->

The entire area on which everything lives is called the "canvas":

> ![](img/r_vocab2.png)

## How To Use This Tutorial

Use this tutorial in the most beneficial way to you! Don't feel that you have
to follow each of the steps very carefully and rigidly before you move
on. You could do anything including:

- Only looking at the code examples and not reading any of the explanations
- Copy the code from final code example and only looking at each section when
  you don't understand the final example code
- Meticulously following the directions of each section

## Steps

| **[![](img/sq_1_blank_canvas.png)          <br> 1.  Blank Canvas]      (blank_canvas.md)**          | **[![](img/sq_2_add_player_sprite.png)    <br> 2. Add Player Sprite]    (add_player_sprite.md)**    | **[![](img/sq_3_linear_player_movement.gif)  <br> 3. Linear Player Movement] (linear_player_movement.md)** |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **[![](img/sq_4_arrow_key_movement.gif)    <br> 4.  Arrow Key Movement](arrow_key_movement.md)**    | **[![](img/sq_5_player_image.gif)         <br> 5. Player Image]         (player_image.md)**         | **[![](img/sq_6_add_enemy_sprite.gif)        <br> 6. Add Enemy Sprite]       (add_enemy_sprite.md)**       |
| **[![](img/sq_7_linear_enemy_movement.gif) <br> 7.  Enemy Sprite Move] (linear_enemy_movement.md)** | **[![](img/sq_8_enemy_go_back_to_top.gif) <br> 8. Enemy Go Back to Top] (enemy_go_back_to_top.md)** | **[![](img/sq_9_random_enemy_position.gif)   <br> 9. Random Enemy Position]  (random_enemy_position.md)**  |
| **[![](img/sq_10_game_over.gif)            <br> 10. Game Over]         (game_over.md)**             |                                                                                                     |                                                                                                            |

## FAQ

### What library is this using?

We are using two libraries:

- The [p5js](http://p5js.org/) library
- The [p5.play](http://p5play.molleindustria.org/) library (a library for games built on top of p5.js)
