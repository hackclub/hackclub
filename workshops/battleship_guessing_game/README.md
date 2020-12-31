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

# Initializing the Board
<img src="https://media4.giphy.com/media/oF5oUYTOhvFnO/200.gif" width="400" alt="Spongebob Gif">

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
- We are creating two [2D arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/multidimensional-arrays), an actual board and a board.
- The actual board is like the key, it will have the locations of the ships.
- The board is the user's board and is like a blank canvas.


# Ship Placement
<img src="https://media1.giphy.com/media/jUwpNzg9IcyrK/giphy.gif" width="400" alt="Homer Simpson Gif">

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
- Create a [random](https://docs.microsoft.com/en-us/dotnet/api/system.random?view=net-5.0) object.
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
- If "dir" equals 1, then get a random place on the board, and get the two spots after it.
- The randomness specifies that it will stay within the bounds of the array so it will not cause an error.

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
We are then creating variables to track the ship pieces, the hits, and the guesses.

# Guessing
<img src="https://media4.giphy.com/media/26tjZRQ4mAgj4L3TW/source.gif" width="400" alt="Simpsons Guessing Gif">

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
## Try-Catch
```csharp
while (true)
{
  try
  {
  }
  catch
  {
    Console.WriteLine("Bad input.");
  }
}
```
- This [try-catch](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch) block will catch and bad inputs that cause errors.
## User Input
```csharp
while (true)
{
  try
  {
    drawBoard(board);
    Console.Write("Enter a letter: ");
    string colLetter = Console.ReadLine();
    colLetter = colLetter.ToUpper();
    int row = 0;

    Console.Write("Enter a number: ");
    string rowInput = Console.ReadLine();
    int col = Int32.Parse(rowInput)-1;
  }
  catch
  {
    Console.WriteLine("Bad input.");
  }
}
```
- We are asking the user for a letter and making it upper case. This represents our column. We will convert it to a number in a moment.
- We are asking for a number and parsing it to an integer.

## Letter Input to Number
```csharp
while (true)
{
  try
  {
    drawBoard(board);
    Console.Write("Enter a letter: ");
    string colLetter = Console.ReadLine();
    colLetter = colLetter.ToUpper();
    int row = 0;

    Console.Write("Enter a number: ");
    string rowInput = Console.ReadLine();
    int col = Int32.Parse(rowInput)-1;
    
    if (colLetter == "A")
    {
        row = 0;
    }
    else if (colLetter == "B")
    {
        row = 1;
    }
    else if (colLetter == "C")
    {
        row = 2;
    }
    else if (colLetter == "D")
    {
        row = 3;
    }
    else if (colLetter == "E")
    {
        row = 4;
    }
    else if (colLetter == "F")
    {
        row = 5;
    }
  }
  catch
  {
    Console.WriteLine("Bad input.");
  }
}
```
We are assigning the letters to a a number. 
## Checking Guess
```csharp
while (true)
{
  try
  {
    drawBoard(board);
    Console.Write("Enter a letter: ");
    string colLetter = Console.ReadLine();
    colLetter = colLetter.ToUpper();
    int row = 0;

    Console.Write("Enter a number: ");
    string rowInput = Console.ReadLine();
    int col = Int32.Parse(rowInput)-1;

    if (colLetter == "A")
    {
        row = 0;
    }
    else if (colLetter == "B")
    {
        row = 1;
    }
    else if (colLetter == "C")
    {
        row = 2;
    }
    else if (colLetter == "D")
    {
        row = 3;
    }
    else if (colLetter == "E")
    {
        row = 4;
    }
    else if (colLetter == "F")
    {
        row = 5;
    }

    if (board[row, col] == '.')
    {
        guesses++;
        if (actualBoard[row, col] == 'X')
        {
            board[row, col] = 'X';
            //Console.WriteLine("Hit!");
            shipHits++;
            if (shipHits == shipPieces)
            {
                break;
            }
        }
        else
        {
            board[row, col] = 'O';
            //Console.WriteLine("Miss!");
        }
    }
  }
  catch
  {
      Console.WriteLine("Bad input.");
  }
}
```
- We are looking if the guess spot has not been guessed already. If not, we are checking if it is a hit or miss.
- Depending on if it is a hit or miss, we are updating the player's board. If it is a hit, we are incrementing the "shipHits" integer and comparing it to "shipPieces" to see if we sunk the battleship. If we did we break out of the while loop.

## Ending Statements
```csharp
while (true)
{
  try
  {
    drawBoard(board);
    Console.Write("Enter a letter: ");
    string colLetter = Console.ReadLine();
    colLetter = colLetter.ToUpper();
    int row = 0;

    Console.Write("Enter a number: ");
    string rowInput = Console.ReadLine();
    int col = Int32.Parse(rowInput)-1;

    if (colLetter == "A")
    {
        row = 0;
    }
    else if (colLetter == "B")
    {
        row = 1;
    }
    else if (colLetter == "C")
    {
        row = 2;
    }
    else if (colLetter == "D")
    {
        row = 3;
    }
    else if (colLetter == "E")
    {
        row = 4;
    }
    else if (colLetter == "F")
    {
        row = 5;
    }

    if (board[row, col] == '.')
    {
        guesses++;
        if (actualBoard[row, col] == 'X')
        {
            board[row, col] = 'X';
            //Console.WriteLine("Hit!");
            shipHits++;
            if (shipHits == shipPieces)
            {
                break;
            }
        }
        else
        {
            board[row, col] = 'O';
            //Console.WriteLine("Miss!");
        }
    }
  }
  catch
  {
      Console.WriteLine("Bad input.");
  }
}

drawBoard(board);
Console.WriteLine($"You won with {guesses} guesses!");
```
These last statements draw the final board and tell the user how many guesses it took them.

# Drawing the Board
<img src="https://media0.giphy.com/media/fX8mSey5xMn3Q5x4E9/giphy.gif" width="400" alt="Drawing Gif">

## Creating the Function
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    //Everything we already wrote.
  }
  
  public static void drawBoard(char[,] arr)
  {
  }
}
```
Create a new function and pass in a 2D character array.

## Top Numbers
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    //Everything we already wrote.
  }
  
  public static void drawBoard(char[,] arr)
  {
    Console.Clear();
    int asciiVal = 65;

    Console.Write(" \t");
    for (int i = 1; i < arr.GetLength(1) + 1; i++)
    {
        Console.Write($"{i}\t");
    }
    Console.WriteLine("\n");
  }
}
```
- The "asciiValue" integer is initialized and used later.
- We are then looping through and displaying the top numbers (1-6).

## The Rest
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    //Everything we already wrote.
  }
  
  public static void drawBoard(char[,] arr)
  {
    Console.Clear();
    int asciiVal = 65;

    Console.Write(" \t");
    for (int i = 1; i < arr.GetLength(1) + 1; i++)
    {
        Console.Write($"{i}\t");
    }
    Console.WriteLine("\n");
    
    for (int i = 0; i < arr.GetLength(0); i++)
    {
      Console.Write($"{(char)asciiVal}\t");
      for (int x = 0; x < arr.GetLength(1); x++)
      {
          Console.Write($"{arr[i, x]}\t");
      }
      Console.WriteLine();
      asciiVal++;
    }
  }
}
```
- We are then using the ascii value and incrementing it each loop time in order to display the letters.
- The for loop goes line by line to display the user's board.

# Final Code
<img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/45/1478516949-testify.gif" width="400" alt="Bart Simpson Gif">

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

      while (true)
      {
        try
        {
          drawBoard(board);
          Console.Write("Enter a letter: ");
          string colLetter = Console.ReadLine();
          colLetter = colLetter.ToUpper();
          int row = 0;

          Console.Write("Enter a number: ");
          string rowInput = Console.ReadLine();
          int col = Int32.Parse(rowInput)-1;

          if (colLetter == "A")
          {
              row = 0;
          }
          else if (colLetter == "B")
          {
              row = 1;
          }
          else if (colLetter == "C")
          {
              row = 2;
          }
          else if (colLetter == "D")
          {
              row = 3;
          }
          else if (colLetter == "E")
          {
              row = 4;
          }
          else if (colLetter == "F")
          {
              row = 5;
          }


          
              if (board[row, col] == '.')
              {
                  guesses++;
                  if (actualBoard[row, col] == 'X')
                  {
                      board[row, col] = 'X';
                      //Console.WriteLine("Hit!");
                      shipHits++;
                      if (shipHits == shipPieces)
                      {
                          break;
                      }
                  }
                  else
                  {
                      board[row, col] = 'O';
                      //Console.WriteLine("Miss!");
                  }
              }
          }
          catch
          {
              Console.WriteLine("Bad input.");
          }

      }

      drawBoard(board);
      Console.WriteLine($"You won with {guesses} guesses!");


  }

  public static void drawBoard(char[,] arr)
  {
      Console.Clear();
      int asciiVal = 65;

      Console.Write(" \t");
      for (int i = 1; i < arr.GetLength(1) + 1; i++)
      {
          Console.Write($"{i}\t");
      }
      Console.WriteLine("\n");

      for (int i = 0; i < arr.GetLength(0); i++)
      {
          Console.Write($"{(char)asciiVal}\t");
          for (int x = 0; x < arr.GetLength(1); x++)
          {
              Console.Write($"{arr[i, x]}\t");
          }
          Console.WriteLine();
          asciiVal++;
      }
  }
}
```

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Battleship-Workshop#main.cs)
- [Add More Ships](https://repl.it/@CosmicSnowman/Battleship-Workshop-Expanded-1#main.cs)
- [Add Color](https://repl.it/@CosmicSnowman/Battleship-Workshop-Expanded-2#main.cs)
- [Add the Option to Play Again](https://repl.it/@CosmicSnowman/Battleship-Workshop-Expanded-3#main.cs)
