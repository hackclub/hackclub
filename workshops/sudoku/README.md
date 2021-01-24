---
name: 'Sudoku'
description: 'Recreate Sudoku!'
author: '@JakeGerber'
image : 'https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png'
---

# Create Sudoku!

<img src="https://cloud-2m2ihwj5o.vercel.app/0screenshot__1443_.png" width="380" alt="Sudoku Example">

Sudoku is always a fun time. Instead of a pen and paper, let's make it ditgitally. Let's create the classic [Sudoku](https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/#:~:text=Sudoku%20is%20played%20on%20a,the%20row%2C%20column%20or%20square.) Game!

<img src="https://media2.giphy.com/media/xT5LMJiTmufKU0zQOI/source.gif" width="400" alt="Simpsons Sudoku Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE! No downloads necessary.

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initializing the Board
<img src="https://media3.giphy.com/media/XyaQAnihoZBU3GmFPl/200.gif" width="400" alt="Gravity Falls Start Gif">
We've got to initialize some things.

```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
  }
}
```
Your program should initially look like this!


```csharp
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
```
Here is an empty board I got off the internet as well as a solution (you can use any sudoku board but make sure it's solvable). Set the board to a [2D array](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/multidimensional-arrays).

# Places that Can Be Modified
<img src="https://i.pinimg.com/originals/67/6d/71/676d71d3de7eede22edfba82eb98d888.gif" width="400" alt="Spongebob Looking Gif">
But what places aren't filled in at the start? Well now we are going to deal with that.

```csharp
static void Main(string[] args)
{
    //What we just wrote would be here.

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
```
Create a new 2D array that keeps track of the places that can be modified. If the board has a 0, that means the spot can be modified.

# User Input
<img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/32/1470845049-computer-typing-gif.gif" width="400" alt="Typing Gif">
The user has to put in their response!

```csharp
static void Main(string[] args)
{
    //What we just wrote would be here.
    while (true)
    {
    }
}
```
Everything in the rest of this section is going to be in this while loop.

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
    //What we just wrote would be here.
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
Add this [try-catch](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch) statement to catch any errors. Without it, our program could just break.

## More User Input
```csharp
try
{
    Console.Write("Enter row and column: ");
    string userInput = Console.ReadLine();
    userRow = int.Parse(userInput[0].ToString());
    userCol = int.Parse(userInput[2].ToString());
}
```
This grabs the user input for rows and columns. The user inputs the row, a comma, and a column.

```csharp
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
```
This makes sure the user row and column is between and 1 and 9, and then we are making sure the place can be modified.

## Entering the Value
```csharp
while (true)
{
    #What we already wrote would be here.
    while (true)
    {
      //This contains the try-catch statement we just wrote.
    }
    
    //This is the new code.
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
try
{
    Console.Write("Enter a value: ");
    string userInput = Console.ReadLine();
    int input = int.Parse(userInput);
}
```
We are getting the user input and parsing it to an integer.

```csharp
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
```
We are making sure the input is between 0 and 9. This means it is within the board.

## Finishing Statements
<img src="https://media1.giphy.com/media/RKZ25EH1junlFIUjza/200.gif" width="400" alt="Finally Gif">

```csharp
while (true)
{
  ` //Everything we already wrote would be here.
    if (checkSolution(board))
    {
        Console.Clear();
        Console.WriteLine("You Won!");
        break;
    }
}
```
The final statments will call the "checkSolution" function that we will soon create to check the board. If the board is fully correct, the user wins and we break out of the while loop.

# Drawing the Board
<img src="https://media2.giphy.com/media/VhtSLWxOQOGdFfGTTa/source.gif" width="400" alt="Drawing Gif">
Imagine playing Sudoku blind. That would be bad. How about we don't do that.

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
We are going to focus on the "drawBoard" function for the rest of this section. This is where, you guessed it, we will be drawing the board.


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
We are going to be reading each value in each line, so it is a for loop within a for loop. This looks much more complicated than it is! The horizontal and vertical line integers will be used for spacing. Don't worry, it will make sense soon!

## Checking Each Value

```csharp
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
```

```csharp
for (int y = 0; y < board[x].Length; y++)
{
    verticalLine++;
    Console.Write(" ");
    if (canBeModified[x, y])
    {
    }
    else
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.Write($"{board[x][y]}");
    }
}
```
Increase the vertical line integer. Then, we have an if-else statement if the spot can be modified. If it can, we will write code for it in a moment, else, change the color to green and draw the board spot.


```csharp
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
```
If the board spot can be modified, set the color to red. If the board spot is 0, it is an empty space so draw a dot. Else, draw the actual board value.

```csharp
for (int y = 0; y < board[x].Length; y++)
{
    //What we just wrote.

    if (verticalLine == 3 && y != 8)
    {
        verticalLine = 0;
        Console.ForegroundColor = ConsoleColor.White;
        Console.Write(" |");
    }
}
```
This is just formatting. We want to draw a vertical line after every three values.

## Final Statements
You're just about done with this function!

```csharp
public static void drawBoard(int[][] board, bool[,] canBeModified)
{
  Console.Clear();
  int horizontalLine = 0;
  for (int x = 0; x < board.Length; x++)
  {
    //What we just wrote.
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
Let's create a way to check the board to see if everything is correct. Did the user win?

```csharp
public static bool checkSolution(int[][] board)
{
}
```
This function will be checking the board solution to see if our board is correct. It takes in a board 2D array.

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
}
```
Make a solved boolean and set it to true. We are then looping through every value in the 2D array, and we are checking the checkRows, checkCols, and checkSquare functions we will create in a moment. If any of these are false for any value, then the board is not solved.

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
If the solved boolean is true, then return true. Otherwise, return false.

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
}
```
We are checking every value in the row and incrementing timesAppeared for each time the guess is seen.

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
The guess is not seen once or the guess is 0, then return false. Else, return true.

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
We are checking every value in the column instead of the row, but besides that it is the same function.

# Check Square
```csharp
private static bool checkSquare(int[][] arrtest, int row, int col, int guess)
{
  int timesAppeared = 0;
  row = row - row % 3;
  col = col - col % 3;
}
```
The sudoku board is made up of nine 3x3 boxes. We are going to the row and column's respective 3x3 box. Also, we are creating a timesAppeared integer.

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
We are checking the 3x3 square to see how many times the guess appears. If it does not have one appearence or the guess is 0, then we return false. Else, return true.

# Final Code
<img src="https://media.tenor.com/images/565944c7d4cee0fbdaa50bc73bdbcf9a/tenor.gif" width="400" alt="Snoopy Gif">

You're done! Yay! Here is all the code we wrote.
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
