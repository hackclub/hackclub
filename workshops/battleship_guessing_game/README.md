---
name: 'Battleship Guessing Game'
description: 'Guess Where the Battleship Is!'
author: '@JakeGerber'
image : 'https://cloud-qb14h5sfw.vercel.app/0screenshot__1442_.png'
---

# Create a Battleship Guessing Game!

<img src="https://cloud-qb14h5sfw.vercel.app/0screenshot__1442_.png" width="380" alt="Battleship Guessing Example">

Guess where the opponent's Battleship is in the least guesses possible!

<img src="https://media.tenor.com/images/b9fa70678047d351c42397a375b222e9/tenor.gif" width="400" alt="Battleship Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initial Statments

<img src="https://media0.giphy.com/media/5zf2M4HgjjWszLd4a5/giphy.gif" width="400" alt="Let Us Begin Gif">

# Initializing the Board
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
      //1 person battleship game
      char[,] actualBoard = new char[6, 6];
      char[,] board = new char[6, 6];

      for (int i = 0; i < board.GetLength(0); i++)
      {
          for (int x = 0; x < board.GetLength(1); x++)
          {
              board[i, x] = '.';
              actualBoard[i, x] = '.';
          }
      }
  }
}
```
- We are creating two arrays, an actual board and a board.
- The actual board is like the key, it will have the locations of the ships.
- The board is the user's board and is like a blank canvas.


# Ship Placement
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    // The code we already wrote would be here.

      Random random = new Random();

      //horizontal vs vertical
      int dir = random.Next(0, 2);
  }
}
```
- Put this code right under where we initialized the board.
- Create a random object.
- Get a random number that is either a 0 or 1. This will represent is the ship will be vertical or horizontal.
## Horizontal
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    // The code we already wrote would be here.

      Random random = new Random();

      //horizontal vs vertical
      int dir = random.Next(0, 2);
      
      //vertical ship
      if (dir == 0)
      {
          int x = random.Next(0, 3);
          int y = random.Next(0, 6);

          actualBoard[x, y] = 'X';
          actualBoard[x + 1, y] = 'X';
          actualBoard[x + 2, y] = 'X';
      }
  }
}
```
- If "dir" equals 0, then get a random place on the board, and get the two spots after it.
- The randomness specifies that it will stay within the bounds of the array so it will not cause an error.

## Vertical
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    // The code we already wrote would be here.

      Random random = new Random();

      //horizontal vs vertical
      int dir = random.Next(0, 2);
      
      //vertical ship
      if (dir == 0)
      {
          int x = random.Next(0, 3);
          int y = random.Next(0, 6);

          actualBoard[x, y] = 'X';
          actualBoard[x + 1, y] = 'X';
          actualBoard[x + 2, y] = 'X';
      }
      //horizontal ship
      else if (dir == 1)
      {
          int x = random.Next(0, 6);
          int y = random.Next(0, 3);

          actualBoard[x, y] = 'X';
          actualBoard[x, y + 1] = 'X';
          actualBoard[x, y + 2] = 'X';
      }
  }
}
```

## Ending Statements
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    // The code we already wrote would be here.

      Random random = new Random();

      //horizontal vs vertical
      int dir = random.Next(0, 2);
      
      //vertical ship
      if (dir == 0)
      {
          int x = random.Next(0, 3);
          int y = random.Next(0, 6);

          actualBoard[x, y] = 'X';
          actualBoard[x + 1, y] = 'X';
          actualBoard[x + 2, y] = 'X';
      }
      //horizontal ship
      else if (dir == 1)
      {
          int x = random.Next(0, 6);
          int y = random.Next(0, 3);

          actualBoard[x, y] = 'X';
          actualBoard[x, y + 1] = 'X';
          actualBoard[x, y + 2] = 'X';
      }
      
      int shipPieces = 3;
      int shipHits = 0;
      int guesses = 0;
  }
}
```

# Guessing
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    //What we already wrote.
    
    while (true)
    {
    }
  }
}
```
- Add this while loop. We are going to focus on this for the rest of the "Guessing" section.
## User Input
## Checking
## Ending Statements

# Drawing the Board

# Final Code

# More You Can Create

