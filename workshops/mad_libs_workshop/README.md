---
name: 'Mad Libs Program'
description: 'Recreate Mad Libs!'
author: '@JakeGerber'
---

# Recreate Mad Libs!

<img src="https://cloud-9ppbnfui6.vercel.app/0screenshot__1400_.png" width="380" alt="Mad Libs Example">

<img src="https://media.tenor.com/images/2801410c4dff2f169ebedddacb55dc70/tenor.gif" width="400" alt="Kirby Gif">

# Repl.it Setup

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an online IDE!

Create a new repl and use C# as the language.

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

# Creating a New Text File

We're creating a new text file in order to put our Mad Libs prompt in.

<img src="https://cloud-7epyavre2.vercel.app/0screenshot__1403_.png" width="600" alt="Creating New Text File">

- Create a new file and name in "madlibs.txt".
- Put in your own prompt and have things that you want to ask the user surrounded by asterisks (*).

# Initial Statements

Add these statements to print to the console that this is Mad Libs!

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {
    Console.WriteLine("Welcome To Madlibs!\n");
    Console.WriteLine("---------------------------------------------------\n");
  }
}
```

# Reading the File

Let's read the file.

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {    
    Console.WriteLine("Welcome To Madlibs!\n");
    Console.WriteLine("---------------------------------------------------\n");
    while(true)
    {
      string prompt = "";

      using (var sr = new StreamReader("madlib.txt"))
      {
        prompt = sr.ReadToEnd();
      }
    }
  }
}         
```
- The while statement is used later in the program in order to play again.
- Make an empty string named "prompt".
- The using statement reads the text file, and the contents of the file are set to the "prompt" string.

# Inserting the Words

We are creating a for loop to go through the string.

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {
    #Initial printing to console.
    while(true)
    {
      #What we already wrote.
      for(int i = 0; i < prompt.Length; i++)
      {

        if (prompt[i] == '*')
        {
          int startingIndex = i; 
          i++;
          int characterSpace = 2;
          string word = "";
          while(true)
          {
            if (prompt[i] != '*')
            {
              characterSpace++;
              word += prompt[i];
              i++;
            }
            else
            {
              break;
            }
          }
          Console.Write($"{word}: ");
          string response = Console.ReadLine();
          Console.WriteLine();

          prompt = prompt.Remove(startingIndex, characterSpace);
          prompt = prompt.Insert(startingIndex, response);
          i = startingIndex+response.Length-1;
        }
      }
    }
  }
}
```
Let's break it down.

## For Loop

```c#
for(int i = 0; i < prompt.Length; i++)
{
}
```

This for loop loops through each letter in the prompt.

## Checking Character

```c#
for(int i = 0; i < prompt.Length; i++)
{
  if (prompt[i] == '*')
  {
    int startingIndex = i; 
    i++;
    int characterSpace = 2;
    string word = "";
  }
}
```
- This if statement checks if the current character is an asterisk (*).
- If it is, create a "startingIndex" integer and set it to the current index i, then increment i.
- Then create a "characterSpace" integer and set it to 2 to represent the two asterisks surround the word.
- Then create an empty "word string".

## While Loop

```c#
if (prompt[i] == '*')
{
  #What we already wrote.
  while(true)
  {
    if (prompt[i] != '*')
    {
      characterSpace++;
      word += prompt[i];
      i++;
    }
    else
    {
      break;
    }
  }
}
```
- This if statement checks if the current character is not an asterisk (*).
- If true, increment the "characterSpace", add the letter to the "word" string, and increment "i".
- If not true, break out of the while loop because you've went through entire word in asterisks.

## Finishing Up

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

```c#
if (prompt[i] == '*')
{
  #What we already wrote.
  Console.Write($"{word}: ");
  string response = Console.ReadLine();
  Console.WriteLine();

  prompt = prompt.Remove(startingIndex, characterSpace);
  prompt = prompt.Insert(startingIndex, response);
  i = startingIndex+response.Length-1;
}
```
- First, let's print the "word" string to ask what type of word is wanted using [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). 
- Then, let's get the user's response and set it to the "response" string.
- Now, let's remove the "word" variable from our prompt and insert the user's response.
- Set the current index to right after the response we just inserted.

# Printing the Prompt

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {
    while(true)
    {
      #What we wrote.
      Console.WriteLine("---------------------------------------------------\n");
      Console.WriteLine(prompt);
      Console.WriteLine("\n---------------------------------------------------\n");
    }
  }
}
```
We are just printing lines to seperate the prompt for organization and then printing it.

# Play Again

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {
    while(true)
    {
      bool playAgain = false;
      while(true)
      {
        Console.WriteLine("Play again? (y/n)");
        string again = Console.ReadLine();
        if (again == "y")
        {
          playAgain = true;
          break;
        }
        else if (again == "n")
        {
          playAgain = false;
          break;
        }
        else
        {
          Console.WriteLine("Not a valid response. Try again.");
        }
      }

      if (playAgain == false)
      {
        break;
      }
      else
      {
        Console.WriteLine("\n---------------------------------------------------\n");
      }
    }
  }
}
```
Let's break it down.

## CONTINUE

```c#
bool playAgain = false;
while(true)
{
  Console.WriteLine("Play again? (y/n)");
  string again = Console.ReadLine();
  if (again == "y")
  {
    playAgain = true;
    break;
  }
  else if (again == "n")
  {
    playAgain = false;
    break;
  }
  else
  {
    Console.WriteLine("Not a valid response. Try again.");
  }
}
```
- Create a "playAgain" bool and set it to false.
- We are taking the user's input and assigning it to the "again" string.
- If it is equal to "y", set the "playAgain" to true and break out of the while loop.
- If it is equal to "n", set the "playAgain" to false and break out of the while loop.
- Else tell the user to try again, and the while loop loops again.


```c#
#What we just wrote.
if (playAgain == false)
{
  break;
}
else
{
  Console.WriteLine("\n---------------------------------------------------\n");
}
```
- If the "playAgain" bool is false, then we break out of the while loop surrounding the entire program.
- Else we go back to the start of the program.

# Final Code

```c#
using System;
using System.IO;

class Program
{
  public static void Main()
  {
    Console.WriteLine("Welcome To Madlibs!\n");
    Console.WriteLine("---------------------------------------------------\n");
    while(true)
    {
      string prompt = "";

      using (var sr = new StreamReader("madlib.txt"))
      {
        prompt = sr.ReadToEnd();
      }
    
      for(int i = 0; i < prompt.Length; i++)
      {

        if (prompt[i] == '*')
        {
          int startingIndex = i; 
          i++;
          int characterSpace = 2;
          string word = "";
          while(true)
          {
            if (prompt[i] != '*')
            {
              characterSpace++;
              word += prompt[i];
              i++;
            }
            else
            {
              break;
            }
          }
          Console.Write($"{word}: ");
          string response = Console.ReadLine();
          Console.WriteLine();

          prompt = prompt.Remove(startingIndex, characterSpace);
          prompt = prompt.Insert(startingIndex, response);
          i = startingIndex+response.Length-1;
        }

      }
      Console.WriteLine("---------------------------------------------------\n");
      Console.WriteLine(prompt);
      Console.WriteLine("\n---------------------------------------------------\n");
      bool playAgain = false;
      while(true)
      {
        Console.WriteLine("Play again? (y/n)");
        string again = Console.ReadLine();
        if (again == "y")
        {
          playAgain = true;
          break;
        }
        else if (again == "n")
        {
          playAgain = false;
          break;
        }
        else
        {
          Console.WriteLine("Not a valid response. Try again.");
        }
      }

      if (playAgain == false)
      {
        break;
      }
      else
      {
        Console.WriteLine("\n---------------------------------------------------\n");
      }
    }
  }
}
```

# More to Create + Source Code
- [Original Program](https://repl.it/@CosmicSnowman/Mad-Libs-Workshop#main.cs)
- [Randomly Picked Prompts](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-1#main.cs)
- [More Colors](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-2#main.cs)
- [Player System](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-3#main.cs)

