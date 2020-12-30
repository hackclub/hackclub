---
name: 'Mad Libs Program'
description: 'Recreate Mad Libs!'
author: '@JakeGerber'
image : 'https://cloud-qziue462l.vercel.app/0screenshot__1420_.png'
---

# Recreate Mad Libs!

<img src="https://cloud-qziue462l.vercel.app/0screenshot__1420_.png" width="380" alt="Mad Libs Example">

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
- If the "playAgain" boolean is false, then we break out of the while loop.
- We create a "moneyDown" integer and set it to 0.

# Money Down

