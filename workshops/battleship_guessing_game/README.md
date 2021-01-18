---
name: 'Battleship Guessing Game'
description: 'Guess Where the Battleship Is!'
author: '@JakeGerber'
image : 'https://cloud-qb14h5sfw.vercel.app/0screenshot__1442_.png'
---

# Create a Battleship Guessing Game!

<img src="https://cloud-qb14h5sfw.vercel.app/0screenshot__1442_.png" width="380" alt="Battleship Guessing Example">

Battleship is fun but the guessing portion is the best part right? Let's create a game where we have to guess where the opponent's ship is in the least guesses possible!

<img src="https://media.tenor.com/images/b9fa70678047d351c42397a375b222e9/tenor.gif" width="400" alt="Battleship Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE! No need for downloads.

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initializing the Board
<img src="https://media4.giphy.com/media/oF5oUYTOhvFnO/200.gif" width="400" alt="Spongebob Gif">

We need to initialize the board. This will make more sense as you write more. Let's begin.

```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
  }
}
```
Your program should initially look like this. If it doesn't then that means you deleted something!

```csharp
static void Main(string[] args)
{
  char[,] actualBoard = new char[6, 6];
  char[,] board = new char[6, 6];
}
```
Create two [2D arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/multidimensional-arrays) of characters. The actual board is the answer key, and the board is the user guessing board.

```csharp
static void Main(string[] args)
{
  //Previous code would be here.
  for (int i = 0; i < board.GetLength(0); i++)
  {
    for (int x = 0; x < board.GetLength(1); x++)
    {
        board[i, x] = '.';
        actualBoard[i, x] = '.';
    }
  }
}
```
We are just going through both arrays and making every single value a dot. This represents empty space (like the water in battleship).


```csharp
static void Main(string[] args)
{
  //Previous code would be here.
  for (int i = 0; i < board.GetLength(0); i++)
  {
    for (int x = 0; x < board.GetLength(1); x++)
    {
        board[i, x] = '.';
        actualBoard[i, x] = '.';
    }
  }
}
```

```csharp
static void Main(string[] args)
{
  //Previous code would be here.
  Random random = new Random();
}
```
We are creating a [random](https://docs.microsoft.com/en-us/dotnet/api/system.random?view=net-5.0) object that will allows us to get random values. This will be used for the random ship placement.


# Ship Placement
<img src="https://media1.giphy.com/media/jUwpNzg9IcyrK/giphy.gif" width="400" alt="Homer Simpson Gif">

But where is the ship going to be placed? Well dear reader, we're about to solve this mystery.

```csharp
static void Main(string[] args)
{
  // The code we already wrote would be here.

  //horizontal vs vertical
  int dir = random.Next(0, 2);
}
```
With our random object, we are getting a random number that is either a 0 or 1. This will represent if the ship will be vertical or horizontal.

## Horizontal
```csharp
  static void Main(string[] args)
  {
    // The code we already wrote would be here.
      
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
If "dir" equals 0, then get a random place on the board, and get the two spots after it. The randomness specifies that it will stay within the bounds of the array so it will not cause an error.

## Vertical
```csharp
static void Main(string[] args)
{
  // The code we already wrote would be here.

    //vertical ship
    if (dir == 0)
    {
      //Code we just wrote.
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
```
If "dir" equals 1, then get a random place on the board, and get the two spots after it. The randomness specifies that it will stay within the bounds of the array so it will not cause an error.

## Ending Statements
```csharp
static void Main(string[] args)
{
  // The code we already wrote would be here.

    int shipPieces = 3;
    int shipHits = 0;
    int guesses = 0;
}
```
We are then creating variables to track the ship pieces, the hits, and the guesses. They will be used when the user starts guessing.

# Guessing
<img src="https://media4.giphy.com/media/26tjZRQ4mAgj4L3TW/source.gif" width="400" alt="Simpsons Guessing Gif">

Guessing is the main part of this game. We should probably add that in now. I guess.

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
We DON'T want errors. They will BREAK our program. Let's catch those suckers up.

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
This [try-catch](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch) block will catch and bad inputs that cause errors. If there is a bad error, it lets the user know.

## User Input
Have the user type things in. The computer isn't a psychic!

```csharp
try
{
  drawBoard(board);
}
```
Call the drawboard function. We will write it later on so do not worry about it for now.

```csharp
try
{
  drawBoard(board);
  Console.Write("Enter a letter: ");
  string colLetter = Console.ReadLine();
  colLetter = colLetter.ToUpper();
  int row = 0;
}
```
Get the user input for the row letter and make it upper case. Also, create a row integer and set it to 0. We will use it in a moment.

```csharp
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
```
Get the user input for the column number and parse it into an integer. Also, the columns are ordered 1-6 so we subtract 1 from the input so it starts at the first index in the 2D array.

## Letter Input to Number
Letters can't be inputted in a 2D array. Let's convert them to numbers.

```csharp
try
{
  //What we just wrote is here.

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
```
We are assigning the letters to a a number. Don't overthink it! A-F is now 1-5 for the row integer.

## Checking Guess
Is the guess correct? Let's find out.

```csharp
try
{
  //Previous code would be here.
  if (board[row, col] == '.')
  {
      guesses++;
  }
}
```
Add an if statement that makes sure that the spot that the user guesses has not been guessed before. This is noted by the period. We also want to increment the guesses by one.

```csharp
if (board[row, col] == '.')
{
    guesses++;
    if (actualBoard[row, col] == 'X')
    {
    }
    else
    {
        board[row, col] = 'O';
        //Console.WriteLine("Miss!");
    }
}
```
Create an if statement that checks if the user guess is a hit, based on the actualboard key. We will write the code for the hit case in a moment. For the miss case, set the user's board guess spot to an "O" to represent a miss.

```csharp
if (actualBoard[row, col] == 'X')
{
    board[row, col] = 'X';
    //Console.WriteLine("Hit!");
    shipHits++;
}
```
If it is a hit, then set the user's board guess spot to an "X" to represent a hit. Also, increment the shipHits integer by one.

```csharp
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
```
If the ship hits are equal to the amount of ship pieces, then we want to break out of the while loop. This means that all the ships are taken down and the user wins.

## Ending Statements
```csharp
while (true)
{
  //Code we already wrote.
}
drawBoard(board);
Console.WriteLine($"You won with {guesses} guesses!");
```
These last statements draw the final board and tell the user how many guesses it took them. This is the last part of the main function.

# Drawing the Board
<img src="https://media0.giphy.com/media/fX8mSey5xMn3Q5x4E9/giphy.gif" width="400" alt="Drawing Gif">

The user needs to see the board! Let's draw it.

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
Create a new function and pass in a 2D character array. This will be where the board is drawn to the screen.

## Top Numbers
```csharp
public static void drawBoard(char[,] arr)
{
  Console.Clear();
  int asciiVal = 65;
}
```
Clear the console so we can redraw the board. Also create an integer of 65, the [ascii](https://en.wikipedia.org/wiki/ASCII) value for "A".

```csharp
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
```
We are just drawing the top row of numbers. This is mainly a lot of spacing. Don't look too deep into it. Lines such as \t create a tab, and \n creates a new line. 

```csharp
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
```
- The "asciiValue" integer is initialized and used later.
- We are then looping through and displaying the top numbers (1-6).

## The Rest
```csharp
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
```
Loop through the board that was passed in and draw the value, along with adding a tab afterwards to create spacing. Make sure to increment the ascii value after each row. This makes it go from A, to B, to C, etc.

# Final Code
<img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/45/1478516949-testify.gif" width="400" alt="Bart Simpson Gif">

I sunk your battleship! Wait, wrong line. I mean you've finished the workshop! That sounds better.

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
