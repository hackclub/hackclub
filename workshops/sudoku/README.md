---
name: 'Sudoku'
description: 'Recreate Sudoku!'
author: '@JakeGerber'
image : 'https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png'
---

# Create Sudoku!

<img src="https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png" width="380" alt="Sudoku Example">

Guess where the opponent's Battleship is in the least guesses possible!

<img src="https://media.tenor.com/images/b9fa70678047d351c42397a375b222e9/tenor.gif" width="400" alt="Battleship Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initializing the Board
Here is an empty board I got off the internet as well as a solution.
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
      int[][] board = {
        
        new int[]{ 5, 3, 0, 0, 7, 0, 0, 0, 0 },
        new int[]{ 6, 0, 0, 1, 9, 5, 0, 0, 0 },
        new int[]{ 0, 9, 8, 0, 0, 0, 0, 6, 0 },
        new int[]{ 8, 0, 0, 0, 6, 0, 0, 0, 3 },
        new int[]{ 4, 0, 0, 8, 0, 3, 0, 0, 1 },
        new int[]{ 7, 0, 0, 0, 2, 0, 0, 0, 6 },
        new int[]{ 0, 6, 0, 0, 0, 0, 2, 8, 0 },
        new int[]{ 0, 0, 0, 4, 1, 9, 0, 0, 5 },
        new int[]{ 0, 0, 0, 0, 8, 0, 0, 7, 9 },
        

        /* Solved (change 0 to a 4)
        new int[]{ 5, 3, 0, 6, 7, 8, 9, 1, 2 },
        new int[]{ 6, 7, 2, 1, 9, 5, 3, 4, 8 },
        new int[]{ 1, 9, 8, 3, 4, 2, 5, 6, 7 },
        new int[]{ 8, 5, 9, 7, 6, 1, 4, 2, 3 },
        new int[]{ 4, 2, 6, 8, 5, 3, 7, 9, 1 },
        new int[]{ 7, 1, 3, 9, 2, 4, 8, 5, 6 },
        new int[]{ 9, 6, 1, 5, 3, 7, 2, 8, 4 },
        new int[]{ 2, 8, 7, 4, 1, 9, 6, 3, 5 },
        new int[]{ 3, 4, 5, 2, 8, 6, 1, 7, 9 },
        */
      };
  }
}
```
Set the board to a 2D array.

# Places that Can Be Modified
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
      int[][] board = {
        
        new int[]{ 5, 3, 0, 0, 7, 0, 0, 0, 0 },
        new int[]{ 6, 0, 0, 1, 9, 5, 0, 0, 0 },
        new int[]{ 0, 9, 8, 0, 0, 0, 0, 6, 0 },
        new int[]{ 8, 0, 0, 0, 6, 0, 0, 0, 3 },
        new int[]{ 4, 0, 0, 8, 0, 3, 0, 0, 1 },
        new int[]{ 7, 0, 0, 0, 2, 0, 0, 0, 6 },
        new int[]{ 0, 6, 0, 0, 0, 0, 2, 8, 0 },
        new int[]{ 0, 0, 0, 4, 1, 9, 0, 0, 5 },
        new int[]{ 0, 0, 0, 0, 8, 0, 0, 7, 9 },
        

        /* Solved (change 0 to a 4)
        new int[]{ 5, 3, 0, 6, 7, 8, 9, 1, 2 },
        new int[]{ 6, 7, 2, 1, 9, 5, 3, 4, 8 },
        new int[]{ 1, 9, 8, 3, 4, 2, 5, 6, 7 },
        new int[]{ 8, 5, 9, 7, 6, 1, 4, 2, 3 },
        new int[]{ 4, 2, 6, 8, 5, 3, 7, 9, 1 },
        new int[]{ 7, 1, 3, 9, 2, 4, 8, 5, 6 },
        new int[]{ 9, 6, 1, 5, 3, 7, 2, 8, 4 },
        new int[]{ 2, 8, 7, 4, 1, 9, 6, 3, 5 },
        new int[]{ 3, 4, 5, 2, 8, 6, 1, 7, 9 },
        */
      };

      bool[,] canBeModified = new bool[9, 9];


      for (int x = 0; x < board.Length; x++)
      {
          for (int y = 0; y < board[x].Length; y++)
          {
              if (board[x][y] == 0)
              {
                  canBeModified[x, y] = true;
              }
          }
      }
  }
}
```
- Create a new 2D array that keeps track of the places that can be modified.
- If the board has a 0, that means the spot can be modified.

# User Input
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
      int[][] board = {
        
        new int[]{ 5, 3, 0, 0, 7, 0, 0, 0, 0 },
        new int[]{ 6, 0, 0, 1, 9, 5, 0, 0, 0 },
        new int[]{ 0, 9, 8, 0, 0, 0, 0, 6, 0 },
        new int[]{ 8, 0, 0, 0, 6, 0, 0, 0, 3 },
        new int[]{ 4, 0, 0, 8, 0, 3, 0, 0, 1 },
        new int[]{ 7, 0, 0, 0, 2, 0, 0, 0, 6 },
        new int[]{ 0, 6, 0, 0, 0, 0, 2, 8, 0 },
        new int[]{ 0, 0, 0, 4, 1, 9, 0, 0, 5 },
        new int[]{ 0, 0, 0, 0, 8, 0, 0, 7, 9 },
        

        /* Solved (change 0 to a 4)
        new int[]{ 5, 3, 0, 6, 7, 8, 9, 1, 2 },
        new int[]{ 6, 7, 2, 1, 9, 5, 3, 4, 8 },
        new int[]{ 1, 9, 8, 3, 4, 2, 5, 6, 7 },
        new int[]{ 8, 5, 9, 7, 6, 1, 4, 2, 3 },
        new int[]{ 4, 2, 6, 8, 5, 3, 7, 9, 1 },
        new int[]{ 7, 1, 3, 9, 2, 4, 8, 5, 6 },
        new int[]{ 9, 6, 1, 5, 3, 7, 2, 8, 4 },
        new int[]{ 2, 8, 7, 4, 1, 9, 6, 3, 5 },
        new int[]{ 3, 4, 5, 2, 8, 6, 1, 7, 9 },
        */
      };

      bool[,] canBeModified = new bool[9, 9];


      for (int x = 0; x < board.Length; x++)
      {
          for (int y = 0; y < board[x].Length; y++)
          {
              if (board[x][y] == 0)
              {
                  canBeModified[x, y] = true;
              }
          }
      }

      while (true)
      {
      }
  }
}
```
We are going to focus on the while loop for the rest of the section.

## Setting Up Variables
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
}
```
We are calling the "drawBoard" function we will create later and some variables, along with setting the foreground color.

## Handling User Input for the Row and Column
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
    while (true)
    {
        try
        {
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
}
```

## More User Input
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
    while (true)
    {
        try
        {
            Console.Write("Enter row and column: ");
            string userInput = Console.ReadLine();
            userRow = int.Parse(userInput[0].ToString());
            userCol = int.Parse(userInput[2].ToString());
            if (userRow >= 1 && userRow <= 9 && userCol >= 1 && userCol <= 9 && canBeModified[userRow - 1, userCol - 1])
            {
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
}
```

## Entering Value
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
    while (true)
    {
        try
        {
            Console.Write("Enter row and column: ");
            string userInput = Console.ReadLine();
            userRow = int.Parse(userInput[0].ToString());
            userCol = int.Parse(userInput[2].ToString());
            if (userRow >= 1 && userRow <= 9 && userCol >= 1 && userCol <= 9 && canBeModified[userRow - 1, userCol - 1])
            {
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
    while (true)
    {
        try
        {
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
}
```

## Entering More Value
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
    while (true)
    {
        try
        {
            Console.Write("Enter row and column: ");
            string userInput = Console.ReadLine();
            userRow = int.Parse(userInput[0].ToString());
            userCol = int.Parse(userInput[2].ToString());
            if (userRow >= 1 && userRow <= 9 && userCol >= 1 && userCol <= 9 && canBeModified[userRow - 1, userCol - 1])
            {
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
    while (true)
    {
        try
        {
            Console.Write("Enter a value: ");
            string userInput = Console.ReadLine();
            int input = int.Parse(userInput);

            if (input >= 0 && input <= 9)
            {
                board[userRow - 1][userCol - 1] = input;
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
}
```

## Finishing Statements
```csharp
while (true)
{
    drawBoard(board, canBeModified);

    int userRow = 0;
    int userCol = 0;
    int val = 0;
    Console.ForegroundColor = ConsoleColor.White;
    while (true)
    {
        try
        {
            Console.Write("Enter row and column: ");
            string userInput = Console.ReadLine();
            userRow = int.Parse(userInput[0].ToString());
            userCol = int.Parse(userInput[2].ToString());
            if (userRow >= 1 && userRow <= 9 && userCol >= 1 && userCol <= 9 && canBeModified[userRow - 1, userCol - 1])
            {
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }
    while (true)
    {
        try
        {
            Console.Write("Enter a value: ");
            string userInput = Console.ReadLine();
            int input = int.Parse(userInput);

            if (input >= 0 && input <= 9)
            {
                board[userRow - 1][userCol - 1] = input;
                break;
            }
        }
        catch
        {
            Console.WriteLine("Not valid");
        }
    }

    if (checkSolution(board))
    {
        Console.Clear();
        Console.WriteLine("You Won!");
        break;
    }
}
```


# Drawing the Board
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
    //What we already wrote.
  }
  
  public static void drawBoard(int[][] board, bool[,] canBeModified)
  {
  }
}
```

## Setting Up the For Loops






# Check Rows

# Check Columns

# Check Square



