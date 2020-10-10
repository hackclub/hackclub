---
name: 'Tic Tac Toe'
description: 'Make the Classic Tic Tac Toe Game in Python'
author: '@Prithul0218'
---

Tic Tac Toe is a game that most of us have played when we were bored in class. It's also a classic coding challenge when learning a new programming language. As complicated as it may seem at first, it's actually rather easy to code taking less than 80 lines.

![GIF showing Tic Tac Toe game running in a terminal](https://cloud-hztfs3uyy.vercel.app/ezgif.com-gif-maker.gif)

In this workshop, we will make the Tic Tac Toe game in Python that you can play with a friend using the terminal.

## Getting started

We are going to use [repl.it](http://repl.it) for this project. Just go to [https://repl.it/languages/python3](https://repl.it/languages/python3) to start coding. It's that easy! Creating an account will ensure you don't lose your code but you can do it after we finish this project. Let's start coding!

### Printing the board

First we need a board to play the game of course. Let's draw on in the terminal! But wait, you can't really draw in the terminal. What we can do though is print horizontal lines with Hyphen `--` and vertical lines with pipes `|`.

```python
   |   |   
---|---|---
   |   |   
---|---|---
   |   |   
```

We are going to start by defining our main function. Let's name it TicTacToe. You can go ahead and draw a board with `print`. Don't forget to run the main function at the end.

```python
def TicTacToe():
	print("   |   |   ")
	print("---|---|---")
	print("   |   |   ")
	print("---|---|---")
	print("   |   |   ")

TicTacToe();
```

Great! We got our board printed in the terminal. Now we can save the board data in `board`. When a player chooses a  number on the board, we will change the corresponding number in `board` with the players sign - `"X"` or `"O"`.

```python
board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Now go ahead and print the box number with the values from `board` . Let's also put it into a function while we are at it. This will make printing the board easy later on.

```python
def TicTacToe():
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  def PrintBoard():
    print()
    print('', board[0], "|", board[1], "|", board[2])
    print("---|---|---")
    print('', board[3], "|", board[4], "|", board[5])
    print("---|---|---")
    print('', board[6], "|", board[7], "|", board[8])
    print()

  PrintBoard()

TicTacToe()
```

You should get something like this when you run the code:

![Showing printed board on a terminal](https://cloud-hztfs3uyy.vercel.app/untitled.png)

Awesome! We now have our board printed in the terminal. It's time to get actual inputs from the players!

### Getting input from the user

We have to take input from the players and keep it as simple as possible. The players can type any number from 1 to 9 to place their corresponding sign, cross `X` or nought `O` in the boxes. We are going to print a message asking for an input later in the main loop. For now, let's just create a function to get a valid number from the user. 

Any number outside 1 to 9 is not on the board. We can simply check it by converting the input to an `integer` and checking if it is within a range of 1 to 10. Range can be a bit confusing, it consists of numbers starting from the first number, to the number before the seoncd number. So `range(1, 5)` gives us 1 to 4, `range(50, 100)` gives 50 to 99 and so on.

```python
number = input()

if number not in range(1, 10):
  print("\nNumber not on board")
```

Any input that is not a number is also unacceptable.  So you can use `try...except` to see if there was any problem converting `number` to an `integer`. If the program fails to convert it to an `integer`, it's probably not a number and we can print an error. 

Like this:

```python
number = input()
try:
  number  = int(number)
  if number not in range(1, 10):
    print("\nNumber not on board")
		return
except ValueError:
    print("\nThat's not a number. Try again")
```

Let's now put it all into a function. We will also need a loop so that we can ask for an input again in case the previous one was invalid. So make a `while` loop and keep it running until you get a valid input from the user. Finally, `return` the valid number. It'll look something like this:

```python
def GetNumber():
  while True:
    number = input()
    try:
      number  = int(number)
      if number in range(1, 10):
        return number
      else:
        print("Number not on board")
    except ValueError:
      print("That's not a number. Try again")
      continue
```

You can now go ahead and run the function to see if it filters out invalid inputs properly.

![Code only taking values 1-9 as input on the terminal](https://cloud-hztfs3uyy.vercel.app/untitled_1.png)

### The main loop

Now comes the fun part! We are finally going to run the game. 

```python
end = False

while not end:
  PrintBoard()
  print("Choose a box Player X")
  n= GetNumber()
  board[n - 1] = "X"
	

	PrintBoard()
  print("Choose a box Player O")
  n= GetNumber()
  board[n - 1] = "O"
```

We need a loop to run the game, as there will be up to 9 turns (one for each box). So let's run a while loop as long as a variable is true. Name it something like `end`. The loop will run as long as `end` is `False`. We can later change `end` to `True` when a player wins or the match is a tie. In our loop, we first print the board and ask for an input from Player 1 or simply Player `X`. Then print the board again but this time with the sign placed into the board. Note that we have to reduce `GetNumber()` by one to for the index of `board[]`. Then we do the same thing for Player `O`.

Both players should now be able to place a sign in turns now. 

![Code taking input from both palyers](https://cloud-hztfs3uyy.vercel.app/untitled_2.png)

But, we never checked if a player has won or players have run out of moves. Let's now work on that next.

### Checking for win: Magic Square

This is the most exciting part of the game, we are gonna find out which player wins. There are 8 ways a player can win in this game, which are the straight lines in 3 vertical rows, 3 columns or 2 diagonal combinations. 

There are a few possible ways we could check for a win. One on of the most common trick is having an array of possible winning combinations, which as you can probably already guess, would be a long list of array with 8 combinations. Then cross checking it with our board to find a match. While it does work, it's neither effecient nor fun. 
What we are going to use is a [Magic Square](https://en.wikipedia.org/wiki/Magic_square) ✨. It's a square grid of numbers that when added up in rows or columns or diagonally, always sums up to a magic number. Which in our case is going to be 15. This photo from Wikipedia illustrates it nicely:

![https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Magicsquareexample.svg/1280px-Magicsquareexample.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Magicsquareexample.svg/1280px-Magicsquareexample.svg.png)

We can put all the integers in the square sequentially into an array, and sum up the values of cross and naughts in `board` to see if it sums up to 15. Whoever gets 15 first is the winner. 

More about the magic square algorithm is nicely explained here: [https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over](https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over)

### Checking for win: The code

So let's write the code for it. It's much easier than you might think. We will first need to add the magic square numbers into a variable. 

```python
MagicSquare = [4, 9, 2, 3, 5, 7, 8, 1, 6]
```

Now we can make a function for checking win that takes the player (`"X"` or `"O"`) as input and returns true if the player wins the game. 

```python
for x in range(9):
    for y in range(9):
      for z in range(9):
        if x != y and y != z and z != x:
          if board[x] == player and board[y] == player and board[z] == player:
            if MagicSquare[x] + MagicSquare[y] + MagicSquare[z] == 15:
              print("Player", player ,"wins!\n")
              return True
```

While we are at it, we can also do a simple check to see if the match is a tie by counting the number of cross or noughts placed on the baord. 

```python
for a in range(9):
    if board[a] == "X" or board[a] == "O":
      count += 1

		# If all boxes have been occupied by the players, it's a tie
    if count == 9:
      print("The game ends in a Tie\n")
      return True
```

Let's now put it in a function that we can easily call in our loop. Since this is pretty long , you can copy and paste this if you understand how it works.

```python
def CheckWin(player):
  count = 0

  for x in range(9):
    for y in range(9):
      for z in range(9):
        if x != y and y != z and z != x:
          if board[x] == player and board[y] == player and board[z] == player:
            if MagicSquare[x] + MagicSquare[y] + MagicSquare[z] == 15:
              print("Player", player ,"wins!\n")
              return True

  for a in range(9):
    if board[a] == "X" or board[a] == "O":
      count += 1
    if count == 9:
      print("The game ends in a Tie\n")
      return True
```

We are almost done. We still have one small change though. If you now try placing a sign into a box that's already occupied, our code will just overwrite the previous sign with the new one. This is not allowed in the game so let's fix it. 
It's convinent to have a function that we can just call when it's a player's turn, instead of writing the same code twice in a loop. So let's make a function for it.

```python
def Turn(player):
  placing_index= GetNumber() - 1
  if board[placing_index] == "X" or board[placing_index] == "O":
    print("\nBox already occupied. Try another one")
    Turn(player)
  else:
    board[placing_index] = player
```

Here we take a `player` character as input, which can either be `"X"` or `"O"`. Once we get a number from the player, we check if that number is already occupied in the board. If not then we just place it in the board, or give an error message otherwise.

Our main loop should now look much cleaner. 

```python
while not end:
  PrintBoard()
  end = CheckWin("O")
  if end == True:
    break
  print("Choose a box player X")
  Turn("X")
  
  PrintBoard()
  end = CheckWin("X")
  if end == True:
    break
  print("Choose a box player O")
  Turn("O")
```

***We are done!*** This is what your code should now look like:

```python
def TicTacToe():
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  end = False
  MagicSquare = [4, 9, 2, 3, 5, 7, 8, 1, 6]

  def PrintBoard():
    print()
    print('', board[0], "|", board[1], "|", board[2])
    print("---|---|---")
    print('', board[3], "|", board[4], "|", board[5])
    print("---|---|---")
    print('', board[6], "|", board[7], "|", board[8])
    print()

  def GetNumber():
    while True:
      number = input()
      try:
        number  = int(number)
        if number in range(1, 10):
          return number
        else:
          print("\nNumber not on board")
      except ValueError:
        print("\nThat's not a number. Try again")
        continue

  def Turn(player):
    placing_index = GetNumber() - 1
    if board[placing_index] == "X" or board[placing_index] == "O":
      print("\nBox already occupied. Try another one")
      Turn(player)
    else:
      board[placing_index] = player

  def CheckWin(player):
    count = 0

    for x in range(9):
      for y in range(9):
        for z in range(9):
          if x != y and y != z and z != x:
            if board[x] == player and board[y] == player and board[z] == player:
              if MagicSquare[x] + MagicSquare[y] + MagicSquare[z] == 15:
                print("Player", player ,"wins!\n")
                return True

    for a in range(9):
      if board[a] == "X" or board[a] == "O":
        count += 1
      if count == 9:
        print("The game ends in a Tie\n")
        return True

  while not end:
    PrintBoard()
    end = CheckWin("O")
    if end == True:
      break
    print("Choose a box player X")
    Turn("X")

    PrintBoard()
    end = CheckWin("X")
    if end == True:
      break
    print("Choose a box player O")
    Turn("O")


TicTacToe()
```

You should now be able to play Tic Tac Toe with a friend in the terminal! You can run my code [here](https://repl.it/@prithul0218/Tic-Tac-Toe).

## Hacking

Now you have control on this code. Go ahead and tinker with it to see if you can find ways to make it more fun. Here are some ideas:

- Change the first player between X and O each time player chooses to play again.
- Add a play again option. *(hint: use [recursion](https://www.geeksforgeeks.org/recursion/))* [demo](https://repl.it/@prithul0218/Tic-Tac-Toe-Play-Again-Demo).
- Add a score feature to record each players score across multiple games. [demo](https://repl.it/@prithul0218/Tic-Tac-Toe-Score-Demo).
- Code an AI second player with the minimax algorithm. I and [@A.N.M. Noor](https://hackclub.slack.com/team/U01BLNA1H9S) made one here: [https://repl.it/@prithul0218/Tic-Tac-Toe-minimax](https://repl.it/@prithul0218/Tic-Tac-Toe-minimax)

While it may look like a tiny game with only 9 boxes, there are 255168 possible game of the Tic Tac Toe excluding symmetrical outcomes. The first player wins in 131184 of these, the second player wins 77904 games and the remaining 46080 are drawn. That's a lot of ways to win. Make sure to be the first player for some extra chance of winning. ;)

Make sure to post your game in the `#ship` channel once you are done coding it

Enjoy playing it with your friends and happy hacking! :D
