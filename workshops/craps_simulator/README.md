---
name: 'Craps Simulator Program'
description: 'Recreate Mad Libs!'
author: '@JakeGerber'
image : 'https://cloud-isbdai043.vercel.app/0screenshot__1441_.png'
---

# Create a Craps Simulator!

<img src="https://cloud-isbdai043.vercel.app/0screenshot__1441_.png" width="380" alt="Craps Simulator Example">

<img src="https://media.tenor.com/images/2801410c4dff2f169ebedddacb55dc70/tenor.gif" width="400" alt="Kirby Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Initial Statments

```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");
      
      while (true)
      {
        //The rest of the code we write will be here.
      }
  }
}
```
- We are creating a random object which allows us to get random numbers later in our program.
- The "balance" integer represents our money balance.
- We are welcoming the user to Craps.
- The rest of the code we will write will be contained within the while loop we created.

# Playing Again
## Creating Another While Loop
We are adding the play again at the beginning so the user can put in the money they want to bet.
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      while (true)
      {
          Console.WriteLine($"Your current balance is {balance} dollars.");
          bool playAgain = true;
          while (true)
          {
            #The code we are going to write.
          }
      }
  }
}
```
- We are writing the user's current balance.
- We are creating a "playAgain" boolean that will be utilized within the while loop.
- For the rest of the "Playing Again" section I will only be focussing on everything within the first while loop.

## User Input
```csharp
Console.WriteLine($"Your current balance is {balance} dollars.");
bool playAgain = true;
while (true)
{
    Console.Write($"Would you like to play? (Y/N): ");
    string userInput = Console.ReadLine();
    userInput = userInput.ToUpper();
}
```
- We are getting the user input and assigning that to the "userInput" string.
- The string is then uppercased so the user can input a lowercase "y" or "n" if they choose.

## Checking the Input
Console.WriteLine($"Your current balance is {balance} dollars.");
bool playAgain = true;
while (true)
{
  Console.Write($"Would you like to play? (Y/N): ");
  string userInput = Console.ReadLine();
  userInput = userInput.ToUpper();
  if (userInput == "Y")
  {
      if (balance <= 0)
      {
          Console.WriteLine("You do not have enough money to play.");
          playAgain = false;
      }
      break;
  }
  else if (userInput == "N")
  {
      playAgain = false;
      break;
  }
  else
  {
      Console.WriteLine("That's not a valid input");
  }
}
- If the "userInput" string is equal to "Y" then check if the userBalance is positive. If it is not, then let the user know they don't have enough money and set the "playAgain" boolean to false. Then in all cases break out of the while loop.
- If the "userInput" string is equal to "N" then set the "playAgain" boolean to false and break out of the while loop.
- Else the user did not input a valid input and the while loop repeats again.

## Finishing Statements
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");

      while (true)
      {
        Console.WriteLine($"Your current balance is {balance} dollars.");
        bool playAgain = true;
        while (true)
        {
            Console.Write($"Would you like to play? (Y/N): ");
            string userInput = Console.ReadLine();
            userInput = userInput.ToUpper();
            if (userInput == "Y")
            {
                if (balance <= 0)
                {
                    Console.WriteLine("You do not have enough money to play.");
                    playAgain = false;
                }
                break;
            }
            else if (userInput == "N")
            {
                playAgain = false;
                break;
            }
            else
            {
                Console.WriteLine("That's not a valid input");
            }
        }

          if (playAgain == false)
          {
              break;
          }
          int moneyDown = 0;
    }
  }
}
```
If the "playAgain" boolean is false, then we break out of the while loop.

# Money Down

## Initial Statements
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      while (true)
      {
          Console.WriteLine($"Your current balance is {balance} dollars.");
          bool playAgain = true;
          while (true)
          {
            //The code we just wrote.
          }
      }
      
      if (playAgain == false)
      {
          break;
      }
      
      int moneyDown = 0;
      while (true)
      {
       //The code we are going to write
      }
  }
}

```
- Create the "moneyDown" integer and set it to 0.
- Create a while loop. The rest of the code we will write in this section is within the while loop so we are going to focus on that for now.


## Try-Catch

```csharp
while (true)
{
    Console.Write($"How much money down (in dollars)?: ");
    try
    {
    }
    catch
    {
      Console.WriteLine("That's not a dollar amount.");
    }
 }
```
- Ask the user how much money they want to put down.
- Add the try-catch statement so our program will not break if the user puts in a bad input.

## Finishing the Try Statement

```csharp
while (true)
{
    Console.Write($"How much money down (in dollars)?: ");
    try
    {
        int userInput = int.Parse(Console.ReadLine());
        if (userInput > 0 && userInput <= balance)
        {
            moneyDown = userInput;
            break;
        }
        else
        {
            Console.WriteLine("Not a valid amount.");
        }
    }
    catch
    {
        Console.WriteLine("That's not a dollar amount.");
    }
 }
```
- Get the user input and parse it to an integer named "userInput".
- If the input is greater than 0 and less than or equal to the balance, then set the "moneyDown" integer to the input and break out of the while loop.
- Else tell the user it is not a valid amount, and the loop will run again.


# Rolling the Dice

## Initial Randomness
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");

      while (true)
      {
        //What we already wrote.
      }

      if (playAgain == false)
      {
          break;
      }
      int moneyDown = 0;

      while (true)
      {
        //What we already wrote.
      }


      int dice1 = random.Next(1, 7);
      int dice2 = random.Next(1, 7);
      int total = dice1 + dice2;
      int point = 0;
      Console.WriteLine($"You rolled out with a {dice1} and {dice2}!");
  }
}
```
- We are rolling two dice by giving them a random value.
- We are adding up both dice for the total.
- We are creating a "point" integer and setting it to 0.
- We are telling the user the values they rolled out with.

## First Roll
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");

      while (true)
      {
        //What we already wrote.
      }

      if (playAgain == false)
      {
          break;
      }
      int moneyDown = 0;

      while (true)
      {
        //What we already wrote.
      }


      int dice1 = random.Next(1, 7);
      int dice2 = random.Next(1, 7);
      int total = dice1 + dice2;
      int point = 0;
      Console.WriteLine($"You rolled out with a {dice1} and {dice2}!");
      
      if (total == 2 || total == 3 || total == 12)
      {
          Console.WriteLine("You Lose.");
          balance -= moneyDown;
      }
      else if (total == 7 || total == 11)
      {
          Console.WriteLine("You Win!");
          balance += moneyDown;
      }
      else
      {
      }
  }
}
```
- If the user's total is a 2, 3, or 12 on their roll out, they lose.
- If the usera total is a 7 or 11 on their roll out, they win.
- Else, they establish the point and the rules change, which we will code in a moment. We will be focusing on the else statement for the rest of the code.


## Establish the Point
```csharp
else
{
    point = total;
    Console.WriteLine($"The point is established as {point}");
}
```
- We are establishing the point as the total and letting the user know.

## Subsequent Rolls

```csharp
else
{
  point = total;
  Console.WriteLine($"The point is established as {point}");
  while (true)
  {
    dice1 = random.Next(1, 7);
    dice2 = random.Next(1, 7);
    total = dice1 + dice2;

    Console.WriteLine($"You rolled a {dice1} and {dice2}!");

    if (total == 7)
    {
        Console.WriteLine("You Lose!");
        balance -= moneyDown;
        break;
    }
    else if (total == point)
    {
        Console.WriteLine("You Win!");
        balance += moneyDown;
        break;
    }
  }
}
```
- The while loop will keep looping rolls until we win or lose.
- We do another roll and establish a total, and we let the player know the rolls.
- If the total is 7, then we lose and take the money put down from the user's balance, and then we break out of the while loop.
- If the total is equal to the point, then we win and add the money put down to the user's balance, and then we break out of the while loop.

# Final Code
```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");

      while (true)
      {
        Console.WriteLine($"Your current balance is {balance} dollars.");
        bool playAgain = true;
        while (true)
        {
            Console.Write($"Would you like to play? (Y/N): ");
            string userInput = Console.ReadLine();
            userInput = userInput.ToUpper();
            if (userInput == "Y")
            {
                if (balance <= 0)
                {
                    Console.WriteLine("You do not have enough money to play.");
                    playAgain = false;
                }
                break;
            }
            else if (userInput == "N")
            {
                playAgain = false;
                break;
            }
            else
            {
                Console.WriteLine("That's not a valid input");
            }
        }

          if (playAgain == false)
          {
              break;
          }
          int moneyDown = 0;

          while (true)
          {
              Console.Write($"How much money down (in dollars)?: ");
              try
              {
                  int userInput = int.Parse(Console.ReadLine());
                  if (userInput > 0 && userInput <= balance)
                  {
                      moneyDown = userInput;
                      break;
                  }
                  else
                  {
                      Console.WriteLine("Not a valid amount.");
                  }
              }
              catch
              {
                  Console.WriteLine("That's not a dollar amount.");
              }
          }


          int dice1 = random.Next(1, 7);
          int dice2 = random.Next(1, 7);
          int total = dice1 + dice2;
          int point = 0;
          Console.WriteLine($"You rolled out with a {dice1} and {dice2}!");

          if (total == 2 || total == 3 || total == 12)
          {
              Console.WriteLine("You Lose.");
              balance -= moneyDown;
          }
          else if (total == 7 || total == 11)
          {
              Console.WriteLine("You Win!");
              balance += moneyDown;
          }
          else
          {
              point = total;
              Console.WriteLine($"The point is established as {point}");
              while (true)
              {
                  dice1 = random.Next(1, 7);
                  dice2 = random.Next(1, 7);
                  total = dice1 + dice2;

                  Console.WriteLine($"You rolled a {dice1} and {dice2}!");

                  if (total == 7)
                  {
                      Console.WriteLine("You Lose!");
                      balance -= moneyDown;
                      break;
                  }
                  else if (total == point)
                  {
                      Console.WriteLine("You Win!");
                      balance += moneyDown;
                      break;
                  }
              }
          }
      }

  }
    
}
```

# More You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/Craps-Simulator#main.cs)
- [User Sets Balance](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-1#main.cs)
- [Calculate Win Rate](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-2#main.cs)
- [Simulate a Specific Number of Games](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-3#main.cs)
