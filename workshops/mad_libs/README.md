---
name: 'Mad Libs'
description: 'Make a Mad Libs program in C#!'
author: '@JakeGerber'
img: 'https://cloud-qziue462l.vercel.app/0screenshot__1420_.png'
---

<img src="https://cloud-qziue462l.vercel.app/0screenshot__1420_.png" width="380" alt="Mad Libs Example">

Mad Libs is a fun game to play with friends (KEEP THE RESPONSES PG!), so let's create our own. Don't worry, I'll walk you through it, so you can become the world's second funniest person (I'm the first).

<img src="https://media.tenor.com/images/2801410c4dff2f169ebedddacb55dc70/tenor.gif" width="400" alt="Kirby Gif">

[Check out the demo and final code!](https://repl.it/@CosmicSnowman/Mad-Libs-Workshop#main.cs)

## Repl.it Setup

We're going to use [Repl.it](https://repl.it/~), a free, online code editor, to create the project. Get started by visiting [repl.it/languages/csharp](https://repl.it/languages/csharp).

<img src="https://cloud-7dbilwpvc.vercel.app/0screenshot__1402_.png" width="600" alt="C# Repl">

## Creating a New Text File

We're creating a new text file in order to put our Mad Libs prompt in. A text file is a file that you put text in...

Create a new file and name it `madlib.txt`. Put in your own prompt and surround the things that you want to ask the user with asterisks (\*).

<img src="https://cloud-7epyavre2.vercel.app/0screenshot__1403_.png" width="900" alt="Creating New Text File">

## Initial Statements

Next, add thse to the top of the `main.cs` file:

```csharp
using System;
using System.IO;
```

We need these import statements for some functions that we use from these libraries later on. `System.IO` allows us to read in files (you want custom prompts right?).

Everything that we will be writing from now on will be within the main function. Let's write a line to the console welcoming the user to Madlibs!

```csharp
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

## Reading the Text File

Let's read the text file. We gotta get the prompt out of there! This will be within our main function right after welcoming the user.

<img src="https://media1.tenor.com/images/dd8ffb18e3d4ac5f5b20ab19141e8fcd/tenor.gif?itemid=15407882" width="600" alt="Homer Reading Gif">

```csharp
while(true)
{
  string prompt = "";

  using (var sr = new StreamReader("madlib.txt"))
  {
    prompt = sr.ReadToEnd();
  }
}      
```

- Add a while loop that surrounds this code. It will be used later on in order to play again.
- Create an empty string named `prompt`. This may be surprising but it is used to hold the prompt. 
- The [using statement](https://docs.microsoft.com/en-us/dotnet/standard/io/how-to-read-text-from-a-file) reads the text file, and the contents of the file are set to the `prompt` string.
  - (Note: we haven't made this text file yet, but we will soon)

## Inserting the Words

Next, let's create a for loop to go through the `prompt` string. This better be a good prompt!

<img src="https://media3.giphy.com/media/Qz6KmDIRiQTfy/source.gif" width="600" alt="Snoopy Happy Gif">

### For Loop

Right after the `using` code block, add a for loop that goes through the entire `prompt` string length. This allows us to examine each character.

```csharp
while(true)
{
  //What we just wrote would be here.
  for(int i = 0; i < prompt.Length; i++)
  {
  }
}
```

### Checking Character

We gotta check each character to make sure it isn't an asterisk.

Add this code within the for loop we just created:

```csharp
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

- The if statement checks if the current character is an asterisk (\*). This would represent the start of the type of word the user has to enter in the space, such as an adjective, noun, etc.
- If it is an asterisk, create a `startingIndex` integer and set it to the current index i, then increment i to represent the character after the asterisk.
- Then create a `characterSpace` integer and set it to 2 to represent the two asterisks that surround the word. 
- Finally, create an empty string named `word`, which will represent the word within the asterisk.

### While Loop

Put this while loop within the if statement we created:

```csharp
if (prompt[i] == '*')
{
  //What we just wrote would be here.
  
  while(true)
  {
  }
}
```

We're going to be looping through the text file until the next asterisk.

Let's focus on what is inside of the while loop.

```csharp
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

- This if statement checks if the current character is not an asterisk (\*). Remember, every word is surrounded by two asterisks.
- If true, increment the `characterSpace`, add the letter to the `word` string, and increment `i`. This sets us up for the next time the while loop runs, where we want to check the next character.
- If false, break out of the while loop because you've gone through entire word surrounded by asterisks.

### Finishing Up

We have some final statements for this section.

<img src="https://media1.giphy.com/media/VEzlrMWk3F7uuFuRSq/giphy.gif" width="600" alt="Kermit Gif">

This code is right after the while loop we just wrote.

```csharp
if (prompt[i] == '*')
{
  #What we just wrote would be here.
  Console.Write($"{word}: ");
  string response = Console.ReadLine();
  Console.WriteLine();
}
```

- First, let's print the `word` string to ask what type of word is wanted using [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). This allows us to put variables surrounded by brackets directly into our output. 
- Then, let's get the user's response. This is done through reading the current line, which is where the user entered their text. Set this text to the `response` string. Let's create a line afterwards for spacing purposes.

Now, let's remove the `word` variable from our prompt and insert the user's response. So, if there is supposed to be an adjective in a current spot, then let's actually put the adjective there. Set the current index to right after the response we just inserted.

```csharp
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

## Printing the Prompt

Now, we gotta print the prompt to the screen. How else would the user see their final masterpiece?

This code goes under the for loop we just wrote.

```csharp
while(true)
{
  //All the code we wrote would be here.

  Console.WriteLine("---------------------------------------------------\n");
  Console.WriteLine(prompt);
  Console.WriteLine("\n---------------------------------------------------\n");
}
```

We are just printing lines to seperate the prompt for organization and then printing it.

## Play Again

Another one. Another one. Another one. Maybe another one. Alright final one. Maybe.

<img src="https://media3.giphy.com/media/xThuWcZzGnonnG3ayQ/source.gif" width="600" alt="Another One Gif">

### Asking the User to Play Again

The code we are writing is still within the large while loop.

Create a `playAgain` bool and set it to false. Also create another while loop. This will handle asking the player to play again.

```csharp
while(true)
{
  //Everything we wrote would be here.
  bool playAgain = false;
  while(true)
  {
  }
}
```

Inside the inner while loop, add:

```csharp
bool playAgain = false;
while(true)
{
  Console.WriteLine("Play again? (y/n)");
  string again = Console.ReadLine();
}
```

We are asking the user to play again, taking their input, and assigning the input to the `again` string.

Next, add:

```csharp
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

- If the `again` string is equal to `y`, set the `playAgain` to true and break out of the while loop. This means the user wants to play again.
- If it is equal to `n`, set the `playAgain` to false and break out of the while loop. This means the user does not want to play again
- Else tell the user to try again, and the while loop loops again. This is because we are going to ask the user to play again another time because their input was invalid.

## Actually Playing Again

That boolean must mean something! Oh wait, we're gonna deal with it right now.

Continue to focus on the while loop we were just writing.

```csharp
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

- If the `playAgain` bool is false, we break out of the while loop surrounding the entire program. 
- Else we go back to the start of the while loop around the program. This will start another game.

## Final Code

You are done! B) "You are all now incredibly funny people." -Master of funny himself.

Happy Hacking!

<details>

<summary> Final source code: </summary>

```csharp
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

## Hacking

Here are some ways to expand this code!

- [Randomly Picked Prompts](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-1#main.cs)
- [More Colors](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-2#main.cs)
- [Player System](https://repl.it/@CosmicSnowman/Mad-Libs-Expanded-3#main.cs)
