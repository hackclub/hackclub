---
name: 'Mad Libs Program'
description: 'Recreate Mad Libs!'
author: '@JakeGerber'
img : 'https://cloud-qziue462l.vercel.app/0screenshot__1420_.png'
---

<img src="https://cloud-qziue462l.vercel.app/0screenshot__1420_.png" width="380" alt="Mad Libs Example">

Mad Libs is a fun game to play with friends (KEEP THE RESPONSES PG!), so let's create our own. Don't worry, I'll walk you through it, so you can become the world's second funniest person (I'm the first).

<img src="https://media.tenor.com/images/2801410c4dff2f169ebedddacb55dc70/tenor.gif" width="400" alt="Kirby Gif">

[Check out the demo and final code!](https://repl.it/@CosmicSnowman/Mad-Libs-Workshop#main.cs)

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~), a free, online coding editor, to create the project. Get started by visiting [repl.it/languages/python3](https://repl.it/languages/python3).

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

## Creating a New Text File

We're creating a new text file in order to put our Mad Libs prompt in. A text file is a file that you put text in...

<img src="https://cloud-7epyavre2.vercel.app/0screenshot__1403_.png" width="900" alt="Creating New Text File">

Create a new file and name in `madlib.txt`. Put in your own prompt and have things that you want to ask the user surrounded by asterisks (\*).

## Initial Statements

We need initial statements! Add them!

```c#
using System;
using System.IO;
```
We need these import statements for some functions that we use from these libraries later on.


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
Everything that we will be writing from now on will be within the main function. Let's write a line to the console welcoming the user to Madlibs!

## Reading the Text File

Let's read the text file. We gotta get the prompt out of there!

<img src="https://media1.tenor.com/images/dd8ffb18e3d4ac5f5b20ab19141e8fcd/tenor.gif?itemid=15407882" width="600" alt="Homer Reading Gif">

```c#
while(true)
{
  string prompt = "";

  using (var sr = new StreamReader("madlib.txt"))
  {
    prompt = sr.ReadToEnd();
  }
}      
```
- The while loop that surrounds our program will be used later on in order to play again.
- Create an empty string named `prompt`.
- The [using statement](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-read-text-from-a-file) reads the text file, and the contents of the file are set to the `prompt` string.

## Inserting the Words

We are creating a for loop to go through the `prompt` string. This better be a good prompt!

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

### For Loop

```c#
while(true)
{
  //What we just wrote would be here.
  for(int i = 0; i < prompt.Length; i++)
  {
  }
}
```
Right under our using statement and still within the while loop, add this for loop. This for loop loops through each letter in the `prompt` string.

### Checking Character
We gotta check each character to make sure it isn't an asterisk.

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
This if statement checks if the current character is an asterisk (\*). If it is, create a `startingIndex` integer and set it to the current index i, then increment i. Then create a `characterSpace` integer and set it to 2 to represent the two asterisks that surround the word. Then create an empty string named `word`.

### While Loop

```c#
if (prompt[i] == '*')
{
  //What we just wrote would be here.
  
  while(true)
  {
  }
}
```
Add this while loop. We're going to be looping through the text file until the next asterisk.

```c#
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
```
This if statement checks if the current character is not an asterisk (\*). If true, increment the `characterSpace`, add the letter to the `word` string, and increment `i`. If false, break out of the while loop because you've went through entire word surrounded by asterisks.

### Finishing Up
We have some final statements for this section.

<img src="https://media1.giphy.com/media/VEzlrMWk3F7uuFuRSq/giphy.gif" width="600" alt="Kermit Gif">

```c#
if (prompt[i] == '*')
{
  #What we just wrote would be here.
  Console.Write($"{word}: ");
  string response = Console.ReadLine();
  Console.WriteLine();
}
```
First, let's print the `word` string to ask what type of word is wanted using [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). Then, let's get the user's response and set it to the `response` string and create a line for spacing purposes.

```c#
if (prompt[i] == '*')
{
  #What we just wrote would be here.
  Console.Write($"{word}: ");
  string response = Console.ReadLine();
  Console.WriteLine();

  prompt = prompt.Remove(startingIndex, characterSpace);
  prompt = prompt.Insert(startingIndex, response);
  i = startingIndex+response.Length-1;
}
```
Now, let's remove the `word` variable from our prompt and insert the user's response. Set the current index to right after the response we just inserted.

## Printing the Prompt
Now, we gotta print the prompt to the screen. How else would the user see their final masterpiece?

```c#
while(true)
{
  //All the code we wrote would be here.

  Console.WriteLine("---------------------------------------------------\n");
  Console.WriteLine(prompt);
  Console.WriteLine("\n---------------------------------------------------\n");
}
```
Add this code under the for loop we just wrote. We are just printing lines to seperate the prompt for organization and then printing it.

## Play Again
Another one. Another one. Another one. Maybe another one. Alright final one. Maybe.

<img src="https://media3.giphy.com/media/xThuWcZzGnonnG3ayQ/source.gif" width="600" alt="Another One Gif">

### Asking the User to Play Again

```c#
while(true)
{
  //Everything we wrote would be here.
  bool playAgain = false;
  while(true)
  {
  }
}
```
The code we are writing is still within the large while loop. Create a `playAgain` bool and set it to false.

```c#
bool playAgain = false;
while(true)
{
  Console.WriteLine("Play again? (y/n)");
  string again = Console.ReadLine();
}
```
We are taking the user's input and assigning it to the `again` string.

```c#
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
}
```
If the again string is equal to `y`, set the `playAgain` to true and break out of the while loop. If it is equal to `n`, set the `playAgain` to false and break out of the while loop. Else tell the user to try again, and the while loop loops again.

## Actually Playing Again
That boolean must mean something! Oh wait, we're gonna deal with it right now.

```c#
while(true)
{
  //Everything we wrote would be here.
  if (playAgain == false)
  {
    break;
  }
  else
  {
    Console.WriteLine("\n---------------------------------------------------\n");
  }
}
```
If the `playAgain` bool is false, then we break out of the while loop surrounding the entire program. Else we go back to the start of the while loop around the program.

## Final Code
You are done! B) "You are all now incredibly funny people." -Master of funny himself.

<details>

<summary> Final source code: </summary>

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
</details>

## More to Create

- [Randomly Picked Prompts](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-1#main.cs)
- [More Colors](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-2#main.cs)
- [Player System](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-3#main.cs)

