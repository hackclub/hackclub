---
name: 'Sudoku'
description: 'Recreate Sudoku!'
author: '@JakeGerber'
image : 'https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png'
---

# Create Sudoku!

<img src="https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png" width="380" alt="Sudoku Example">

Create the classic [Sudoku](https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/#:~:text=Sudoku%20is%20played%20on%20a,the%20row%2C%20column%20or%20square.) Game!

<img src="https://media2.giphy.com/media/xT5LMJiTmufKU0zQOI/source.gif" width="400" alt="Simpsons Sudoku Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initializing the Board
<img src="https://media3.giphy.com/media/XyaQAnihoZBU3GmFPl/200.gif" width="400" alt="Gravity Falls Start Gif">

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
<img src="https://i.pinimg.com/originals/67/6d/71/676d71d3de7eede22edfba82eb98d888.gif" width="400" alt="Spongebob Looking Gif">

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
<img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/32/1470845049-computer-typing-gif.gif" width="400" alt="Typing Gif">

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
Add this try-catch statement to catch any errors.

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
This grabs the user input for rows and columns and makes sure it is between and 1 and 9, and then we are making sure the place can be modified.

## Entering the Value
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
Create another while loop and try-catch statement to catch for errors.

## More of Entering the Value
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
We are getting the value and making sure the input is between 0 and 9.

## Finishing Statements
<img src="https://media1.giphy.com/media/RKZ25EH1junlFIUjza/200.gif" width="400" alt="Finally Gif">

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
The final statments will call the "checkSolution" function that we will soon create to check the board.

# Drawing the Board
<img src="https://media2.giphy.com/media/VhtSLWxOQOGdFfGTTa/source.gif" width="400" alt="Drawing Gif">

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
We are going to focus on the "drawBoard" function for the rest of this section.


## Setting Up 
```csharp
public static void drawBoard(int[][] board, bool[,] canBeModified)
{
  Console.Clear();
  int horizontalLine = 0;
  for (int x = 0; x < board.Length; x++)
  {
      horizontalLine++;
      int verticalLine = 0; //adds line at every 3
      for (int y = 0; y < board[x].Length; y++)
      {
      }
  }
}
```
We are going to be reading each value in each line, so it is a for loop within a for loop.

## Checking Each Value

```csharp
public static void drawBoard(int[][] board, bool[,] canBeModified)
{
  Console.Clear();
  int horizontalLine = 0;
  for (int x = 0; x < board.Length; x++)
  {
      horizontalLine++;
      int verticalLine = 0; //adds line at every 3
      for (int y = 0; y < board[x].Length; y++)
      {
          verticalLine++;
          Console.Write(" ");
          if (canBeModified[x, y])
          {
              Console.ForegroundColor = ConsoleColor.DarkRed;
              if (board[x][y] == 0)
              {
                  Console.Write($".");
              }
              else
              {
                  Console.Write($"{board[x][y]}");
              }
          }
          else
          {
              Console.ForegroundColor = ConsoleColor.Green;
              Console.Write($"{board[x][y]}");
          }

          if (verticalLine == 3 && y != 8)
          {
              verticalLine = 0;
              Console.ForegroundColor = ConsoleColor.White;
              Console.Write(" |");
          }
      }
  }
}
```
- If the value is 0, then draw a dot, else draw the number.
- This is just formatting, it is not too important to know.

## Final Statements
```csharp
public static void drawBoard(int[][] board, bool[,] canBeModified)
{
  Console.Clear();
  int horizontalLine = 0;
  for (int x = 0; x < board.Length; x++)
  {
      horizontalLine++;
      int verticalLine = 0; //adds line at every 3
      for (int y = 0; y < board[x].Length; y++)
      {
          verticalLine++;
          Console.Write(" ");
          if (canBeModified[x, y])
          {
              Console.ForegroundColor = ConsoleColor.DarkRed;
              if (board[x][y] == 0)
              {
                  Console.Write($".");
              }
              else
              {
                  Console.Write($"{board[x][y]}");
              }
          }
          else
          {
              Console.ForegroundColor = ConsoleColor.Green;
              Console.Write($"{board[x][y]}");
          }

          if (verticalLine == 3 && y != 8)
          {
              verticalLine = 0;
              Console.ForegroundColor = ConsoleColor.White;
              Console.Write(" |");
          }
      }
      Console.WriteLine();
      if (horizontalLine == 3)
      {
          horizontalLine = 0;
          Console.ForegroundColor = ConsoleColor.White;
          Console.WriteLine("-------|-------|-------");
      }
  }
}
```
Every three lines there is going to be only the dashes and vertical dashes. This makes it look nicer.

# Check Solution
<img src="https://media1.tenor.com/images/c5eccc6319cfca596336e51a2b076e82/tenor.gif?itemid=13900813" width="400" alt="Looking Gif">

```csharp
public static bool checkSolution(int[][] board)
{
    bool solved = true;
    for (int x = 0; x < board.Length; x++)
    {
        for (int y = 0; y < board[x].Length; y++)
        {
            if (!checkCol(board, y, board[x][y]) || !checkRows(board, x, board[x][y]) || !checkSquare(board, x, y, board[x][y]))
            {
                solved = false;
            }
        }
    }

    if (solved == true)
    {
        return true;
    }
    return false;
}
```
-Add this function right under the one we just wrote.
- This function checks the row, column, and box of each value to make sure there is only one of the value.
- We are going to write the "checkRows", "checkCols", and "checkSquare" functions right now.
- They must all be true for the value to not cause the "solved" boolean to be false.


# Check Rows
```csharp
private static bool checkRows(int[][] arr, int col, int guess)
{
  int timesAppeared = 0;
  for (int row = 0; row < 9; row++)
  {
    if (arr[row][col] == guess)
    {
        timesAppeared++;
    }

  }

  if (timesAppeared != 1 || guess == 0)
  {
      return false;
  }

  return true;
}
```
This checks the row of the value and makes sure it is only there once. It also makes sure the value is not 0.

# Check Columns
```csharp
private static bool checkCols(int[][] arrtest, int row, int guess)
{
  int timesAppeared = 0;
  for (int col = 0; col < 9; col++)
  {
    if (arrtest[row][col] == guess)
    {
        timesAppeared++;
    }

  }

  if (timesAppeared != 1 || guess == 0)
  {
      return false;
  }

    return true;
}
```
This checks the column of the value and makes sure it is only there once. It also makes sure the value is not 0.

# Check Square
```csharp
private static bool checkSquare(int[][] arrtest, int row, int col, int guess)
{
  int timesAppeared = 0;
  row = row - row % 3;
  col = col - col % 3;

  for (int x = row; x < row + 3; x++)
  {
    for (int y = col; y < col + 3; y++)
    {
      if (arrtest[x][y] == guess)
      {
          timesAppeared++;
      }
    }
  }

  if (timesAppeared != 1 || guess == 0)
  {
      return false;
  }

  return true;
}
```
This checks the 3x3 square of the value and makes sure it is only there once. It also makes sure the value is not 0. There are 9 squares total, so the value falls in one of these 9. The mod part of the row and col give the square.

# Final Code
<img src="https://media.tenor.com/images/565944c7d4cee0fbdaa50bc73bdbcf9a/tenor.gif" width="400" alt="Snoopy Gif">

Here is all the code we wrote!
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

  }

  public static void drawBoard(int[][] board, bool[,] canBeModified)
  {
      Console.Clear();
      int horizontalLine = 0;
      for (int x = 0; x < board.Length; x++)
      {
          horizontalLine++;
          int verticalLine = 0; //adds line at every 3
          for (int y = 0; y < board[x].Length; y++)
          {
              verticalLine++;
              Console.Write(" ");
              if (canBeModified[x, y])
              {
                  Console.ForegroundColor = ConsoleColor.DarkRed;
                  if (board[x][y] == 0)
                  {
                      Console.Write($".");
                  }
                  else
                  {
                      Console.Write($"{board[x][y]}");
                  }
              }
              else
              {
                  Console.ForegroundColor = ConsoleColor.Green;
                  Console.Write($"{board[x][y]}");
              }

              if (verticalLine == 3 && y != 8)
              {
                  verticalLine = 0;
                  Console.ForegroundColor = ConsoleColor.White;
                  Console.Write(" |");
              }
          }
          Console.WriteLine();
          if (horizontalLine == 3)
          {
              horizontalLine = 0;
              Console.ForegroundColor = ConsoleColor.White;
              Console.WriteLine("-------|-------|-------");
          }
      }

  }

  public static bool checkSolution(int[][] board)
  {
      bool solved = true;
      for (int x = 0; x < board.Length; x++)
      {
          for (int y = 0; y < board[x].Length; y++)
          {
              if (!checkRows(board, y, board[x][y]) || !checkRows(board, x, board[x][y]) || !checkSquare(board, x, y, board[x][y]))
              {
                  solved = false;
              }
          }
      }

      if (solved == true)
      {
          return true;
      }
      return false;
  }

  private static bool checkRows(int[][] arr, int col, int guess)
  {
      int timesAppeared = 0;
      for (int row = 0; row < 9; row++)
      {
          if (arr[row][col] == guess)
          {
              timesAppeared++;
          }

      }

      if (timesAppeared != 1 || guess == 0)
      {
          return false;
      }

      return true;
  }

  private static bool checkCols(int[][] arrtest, int row, int guess)
  {
      int timesAppeared = 0;
      for (int col = 0; col < 9; col++)
      {
          if (arrtest[row][col] == guess)
          {
              timesAppeared++;
          }

      }

      if (timesAppeared != 1 || guess == 0)
      {
          return false;
      }

      return true;
  }

  private static bool checkSquare(int[][] arrtest, int row, int col, int guess)
  {
      int timesAppeared = 0;
      row = row - row % 3;
      col = col - col % 3;

      for (int x = row; x < row + 3; x++)
      {
          for (int y = col; y < col + 3; y++)
          {
              if (arrtest[x][y] == guess)
              {
                  timesAppeared++;
              }
          }
      }

      if (timesAppeared != 1 || guess == 0)
      {
          return false;
      }

      return true;
  }
    

}
```

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Sudoku-Workshop#main.cs)
- [Input Tracker](https://repl.it/@CosmicSnowman/Sudoku-Workshop-Expanded-1#main.cs)
- [Random Colors](https://repl.it/@CosmicSnowman/Sudoku-Workshop-Expanded-2#main.cs)
- [Limit the Inputs for Winning](https://repl.it/@CosmicSnowman/Sudoku-Workshop-Expanded-3#main.cs)
