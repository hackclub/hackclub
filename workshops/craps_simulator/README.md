---
name: 'Craps Simulator'
description: 'Enter a parallel universe where gambling is legal and make a gambling simulator in C#'
author: '@JakeGerber'
img: 'https://cloud-isbdai043.vercel.app/0screenshot__1441_.png'
---

<img src="https://cloud-isbdai043.vercel.app/0screenshot__1441_.png" width="380" alt="Craps Simulator Example">

Close your eyes for a few seconds. Don't open them until I tell you.

...
<br>
...
<br>
...
<br>

Okay, open them. While your eyes were closed, I transported you to a parallel universe where gambling is legal. Oh and also you're now in a Vegas casino. Oh and also in this universe, Jeff Goldbum is the president of the United States, but nobody knows why. Yay!!! Now it's time to gamble with totally real money! And in this workshop, you're going to build a program that will allow you to do just that. (Minus the real money.)

<img src="https://www.pinnacle.com/Cms_Data/Contents/Guest/Media/betting-articles/casino/Craps/in-article-how-to-play-craps-2.jpg" width="400" alt="Craps Tutorial">

<img src="https://media4.giphy.com/media/l2Je4BuL5OnZaMrKM/200.gif" width="400" alt="Homer Simpson Betting Gif">

[Final Code](https://repl.it/@CosmicSnowman/Craps-Simulator#main.cs)

## Getting started

First, if you don't know what craps is, I recommend taking a few minutes to [read up about it](https://www.venetian.com/casino/table-games/craps-basic-rules.html). Otherwise, this workshop may be confusing! You don't need to fully understand how to play, you just need to be kind of aware of the rules.

We're going to use [Repl.it](https://repl.it/~), a free, online coding platform, to code the project. Get started by visiting [repl.it/languages/csharp](https://repl.it/languages/csharp).

That's right, we're going to code this project in C#! Don't worry if you've never written C# before—the code is super beginner-friendly, and as long as you've written code in most languages, you'll be able to pick it up pretty easily.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

## Setting up the project

<img src="https://media0.giphy.com/media/5zf2M4HgjjWszLd4a5/giphy.gif" width="400" alt="Let Us Begin Gif">

Let the coding begin! Let's start by setting up the project.

```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
    //The rest of the code will be written here.
  }
}
```

When you created your repl, repl.it should have added this code to start with. If you don't see this code, replace whatever's in your `main.cs` file with this. All the code for this project will be written in the `Main` function.

Now, let's add some initial statements.

```csharp
using System;

class MainClass
{
  static void Main(string[] args)
  {
      Random random = new Random();
      int balance = 10;

      Console.WriteLine("Welcome to Craps");
  }
}
```

- We are creating a [random](https://docs.microsoft.com/en-us/dotnet/api/system.random?view=net-5.0) object which allows us to get random numbers later in our program.
- The "balance" integer represents our money balance.
- We are welcoming the user to Craps.

```csharp
Random random = new Random();
int balance = 10;

Console.WriteLine("Welcome to Craps");

while (true)
{

}
```

Add this while loop. If you've written Python before, you may recognize `while (true)`. This is handy way of writing an infinite loop that will run all of the code inside it continuously.

*All of the code for the rest of this workshop will be written inside this while loop.*

## Starting the game

<img src="https://media4.giphy.com/media/GV3aYiEP8qbao/200.gif" width="400" alt="Another One Gif">

Because all of this code is in a `while (true)` loop, it will repeat infinitely after every game. So, although it may feel weird now, we're going to act as if the player is "playing again". To start, add the following code:

```csharp
while (true)
{
    Console.WriteLine($"Your current balance is {balance} dollars.");
    bool playAgain = true;
    while (true)
    {

    }
}
```

- We are writing the user's current balance.
- We are creating a "playAgain" boolean that will be utilized within the while loop, and setting its default value to `true`
- We're creating _another_ `while (true)` loop :o

### User Input

Let's add some basic user input by asking the user if they want to play.

```csharp
while (true)
{
  Console.WriteLine($"Your current balance is {balance} dollars.");
  bool playAgain = true;
  while (true)
  {
      Console.Write($"Would you like to play? (Y/N): ");
      string userInput = Console.ReadLine();
      userInput = userInput.ToUpper();
  }
}
```
- We are getting the user input and assigning that to the "userInput" string.
- The string is then uppercased so the user can input a lowercase "y" or "n" if they choose.

### Checking the input

<img src="https://thumbs.gfycat.com/PreciousJitteryDotterel-max-1mb.gif" width="400" alt="Panda Gif">

Take the user input and find out what it means!

```csharp
while (true)
{
    Console.Write($"Would you like to play? (Y/N): ");
    string userInput = Console.ReadLine();
    userInput = userInput.ToUpper();
    if (userInput == "Y")
    {
    }
    else if (userInput == "N")
    {
    }
    else
    {
      Console.WriteLine("That's not a valid input");
    }
}
```

Create an if-else statement for if the user input is "Y", "N", or something else. If it is something else then the input isn't valid.

```csharp
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
}
else
{
    Console.WriteLine("That's not a valid input");
}
```

For the user input of "Y", if the balance is less then or equal to 0, then the user does not have money to play the game. If this is so, let the user know and set the "playAgain" boolean to false. Then outside of the if statement, break out of the user input while loop.

```csharp
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
```

For the user input of "N", set the "playAgain" boolean to false and break out of the while loop. This means that the user does not want to play again, which is the same result if they do not have any money left to play.

### Finishing Statements

If the user doesn't want to bet their life savings then exit out of the while loop.

```csharp
while (true)
{
  // code that prints the user's balance and stuff
  while (true)
  {
    //Code we just wrote would be here.
  }

  if (playAgain == false)
  {
      break;
  }
}
```

Outside of the inner while loop, if the `playAgain` boolean is false, then we break out of the while loop for playing the game.

## Money Down

<img src="https://media0.giphy.com/media/Tex4wVhhs4iwKoV7YT/200_d.gif" width="400" alt="Money Gif">

Have the user put down the amount of money they want. 10 dollars, 100 dollars, 1 million dollars? As long as they have the money they can put it down.

### Initial Statements

```csharp
// Previous code

if (playAgain == false)
{
    break;
}

int moneyDown = 0;
while (true)
{
}
```
- After the if statement that checks if `playAgain` is false, create an integer called `moneyDown` and set it to 0. This will be used when asking the user how much money to put down.
- Create another `while true` loop. This will be where we ask the user how much money they want to put down.

### Try-Catch

```csharp
int moneyDown = 0;
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

- Ask the user how much money they want to put down. We will ask them for their input in a moment.
- Add the [try-catch](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch) statement so our program will not break if the user puts in a bad input. The catch portion will catch any errors and let the user know that they dod not put in a dollar amount.

### Finishing the Try Statement

```csharp
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
```
- Get the user input and parse it to an integer named "userInput". If there is an error then it will go the catch statement. Since it is in a while loop it will ask again.
- The user input needs to be greater than 0 and less than or equal to the balance. If is, then we need to set the "moneyDown" integer to the user input and break out of the while loop.
- If the user's input is not within their balance range, then let them know that their amount is not valid. Since this is in a while loop, it will ask them again for the money they want to put down.

## Rolling the Dice

<img src="https://i.pinimg.com/originals/3a/34/6b/3a346b536b6a6f5de274bbbff7908ec0.gif" width="400" alt="Rolling Dice Gif">

Here's the best part: rolling the dice (virtually).

### Initial Randomness

```csharp
while (true)
{
  // Block of code that starts with Console.Write($"How much money down (in dollars)?: ");
}

int dice1 = random.Next(1, 7);
int dice2 = random.Next(1, 7);
```

After the last `while (true)` loop, add two integer variables called `dice1` and `dice2`. These will be the variables for our dice.

*Note: the upper limit of [`random.Next()`](https://www.geeksforgeeks.org/c-sharp-random-next-method/) is excluded, so this dice will roll between 1 and 6.*

```csharp
int dice1 = random.Next(1, 7);
int dice2 = random.Next(1, 7);
int total = dice1 + dice2;
int point = 0;
Console.WriteLine($"You rolled out with a {dice1} and {dice2}!");
```

- Next, create an integer called `total` and set it to both of the dice values added together.
- Then, create an integer called `point` and set it 0. It represents our point, which is used later in the program. (This variable will make more sense later)
- Finally, let the player know what their rolls were!

### First Roll

```csharp      
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
```

In the game of craps, if the total in the first roll is 2, 3, or 12, they lose. Let the user know and take the money they put down away from their balance.

```csharp
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
```

In the game of craps, if the total in the first roll is 7 or 11, they win. Let the user know and add the money put down to their balance.

```csharp
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
}
```

Else, establish the point as the total in the first roll. Let the user know the point. The point is used in all the rolls after the first roll.

### Subsequent Rolls

<img src="https://media0.giphy.com/media/QBGYWFjnggIZ8fMjdt/200.gif" width="400" alt="Captain America Gif">

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
    }
}
```

After the code you just wrote in the `else` statement, add another `while (true)` loop. The code inside here will keep looping rolls until the user wins or loses. We're rolling the dice and calculating the total again and letting the user know the results.

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
    }
}
```

In craps, on rolls after the initial roll, the user loses if their dice add up to 7. Add an if statement to check this. If the user loses, we let them know, take their money down from their balance, and break out of the while loop.

```csharp
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
```

If the user's total equals the point, they win. If they win, we let them know, add the money down to their balance, and we break out the while loop. If their total does not equal the point or 7, then we keep rolling since we are in a while loop. 

## Final Code

<img src="https://media.tenor.com/images/2801410c4dff2f169ebedddacb55dc70/tenor.gif" width="400" alt="Kirby Gif">

You are done! Congrats! Have fun virtually gambling!

<details>

<summary> Final code: </summary>

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

</details>

## Hacking

The fun doesn't stop here. Here are a few waysa you can expand on this project:

- [User Sets Balance](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-1#main.cs)
- [Calculate Win Rate](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-2#main.cs)
- [Simulate a Specific Number of Games](https://repl.it/@CosmicSnowman/Craps-Simulator-Expanded-3#main.cs)

Happy hacking!
