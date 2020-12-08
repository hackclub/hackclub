---
name: 'Dialogue Tree'
description: 'Create your own dialogue tree system!'
author: '@JakeGerber'
image: 'https://cloud-74lq7ehps.vercel.app/0screenshot__1426_.png'
---

# Create a Dialogue Tree!

<img src="https://cloud-74lq7ehps.vercel.app/0screenshot__1426_.png" width="900" alt="Dialogue Tree Example">

<img src="https://cloud-8uexi5mju.vercel.app/01200px-dialog_tree_example.svg.png" width="900" alt="Dialogue Tree Visualization Example">

<img src="https://media3.giphy.com/media/3og0IOH10QFIdLBpZK/200.gif" width="380" alt="Knight Talking Gif">

# Repl.it Setup
Let's begin!

We're going to use [Repl.it](https://repl.it/~) to create the project. It is an IDE which allows us to write our code online. No downloads necessary.

Create a new repl and use C# as the language.

<img src="https://cloud-n5g94sz4o.vercel.app/0screenshot__1427_.png" width="600" alt="C# Repl">

# Choice Class
Let's create a "Choice" [class](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/classes). These objects will represent each of our choices, and we will link them together in order to create our dialogue tree.

<img src="https://media3.giphy.com/media/3og0Iwmv38WmJBrYvS/200.gif" width="380" alt="Cookie Monster Gif">

## Initial Variables
```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  {
  }
}

public class Choice
{
    public string answer;
    public List<Choice> choices;
    public List<string> connectionStrings;
}
```
- Add the using statements at the top.
- Add the "Choice" class under the main class. 
- Each "Choice" object to have a "answer" string that will be displayed when they are gone to on the dialogue tree.
- Each "Choice" object will also have a list of other connecting choices and a list of strings that will be displayed when the respective choice is chosen.
- Don't worry if this seems confusing! It will make more sense later on.

## Constructor
```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  {
  }
}

public class Choice
{
    public string answer;
    public List<Choice> choices;
    public List<string> connectionStrings;
    public Choice(string answer)
    {
        this.answer = answer;
        choices = new List<Choice>();
        connectionStrings = new List<string>();
    }
}
```
This [constructor](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors) takes in an "answer" string and initializes the variables.

# Connect Function
Let's create a function that connects two choices and gives them a connection string.
```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  {
  }
  public static bool Connect(Choice c1, Choice c2, string connection) 
  {
      if (c1.choices.Contains(c2))
      {
          return false;
      }

      c1.choices.Add(c2);
      c1.connectionStrings.Add(connection);
      return true;
  }
}
#Our "Choice" class would be under this class.
```
- This function goes in the main class but after the main function.
- This function takes in two choices and a connecting string.
- If there is no connection between the choices, a connection is created by adding the second choice and connection string to the first choice's lists.

# Creating the Connections
Let's fully create our dialogue tree in the main function before working further. This can be changed later, added to, and expanded upon, but let's set some blueprints down now.

<img src="https://i.makeagif.com/media/5-07-2014/7hQjSl.gif" width="380" alt="Patrick Gif">

```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  {
    Choice choice1 = new Choice("You wonder into a cave.");
    Choice choice2 = new Choice("You go further in.");
    Choice choice3 = new Choice("You exit the cave and walk away.");

    Connect(choice1, choice2, "Explore.");
    Connect(choice1, choice3, "Leave.");

    Choice choice4 = new Choice("There is ancient text written on the wall!");
    Choice choice5 = new Choice("The ground is full of bugs!");
    Choice choice6 = new Choice("The spider scares you!");

    Connect(choice2, choice4, "You take out your flashlight.");
    Connect(choice2, choice5, "You look at the ground.");
    Connect(choice2, choice6, "You notice the spider.");


    Connect(choice4, choice3, "You will find the enterence with your flashlight.");
    Connect(choice5, choice3, "You will run back to the enterence.");
    Connect(choice6, choice3, "You will stumble across the enterence.");
    }
}
```
Copy this code into your main function. It creates choices and connects them together.

# Going Through the Dialogue Tree

```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  { 
    #Connections Here
    Choice head = choice1;

    while (true)
    {
      Console.WriteLine($"{head.answer}");
      int count = 1;
      if (head.choices.Count == 0)
      {
          break;
      }
      for (int i = 0; i < head.choices.Count; i++)
      {
          Console.WriteLine($"{count}. {head.connectionStrings[i]}");
          count++;
      }
    }
  }
}
```
- After the connections we made and still within the main function, we are creating a while loop that will go through the dialogue tree. When there are no more choices it will break out.
- Also, if there are choices we are listing what they are.
- The "head" variable allows us to keep track of where we are in the tree.

# User Input

<img src="https://i.pinimg.com/originals/2c/dd/d1/2cddd1796354e90f4aab7fb1e48eafb4.gif" width="380" alt="Computer Gif">

```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  { 
    #Connections Here
    Choice head = choice1;

    while (true)
    {
      Console.WriteLine($"{head.answer}");
      int count = 1;
      if (head.choices.Count == 0)
      {
          break;
      }
      for (int i = 0; i < head.choices.Count; i++)
      {
          Console.WriteLine($"{count}. {head.connectionStrings[i]}");
          count++;
      }
      
      while(true)
      {
        Console.Write("Choose your path: ");

        try
        {
            int input = int.Parse(Console.ReadLine());
            head = head.choices[input - 1];
            break;
        }
        catch (Exception)
        {

            Console.WriteLine("That's not a valid choice.");
        }
      }
    }
  }
}
```
Right under what we just wrote, we are adding a while loop that we break out of once the user input's an acceptable option. Instead of the user inputting a zero for the first choice, they are inputting a one.

# Final Code
Here is everything that we wrote!

<img src="https://24.media.tumblr.com/tumblr_m72q5gpfZ91rps25mo1_500.gif" width="380" alt="Snoopy Gif">

```csharp
using System;
using System.Collections.Generic;
using System.Text;

class MainClass {
  static void Main(string[] args)
  {
    Choice choice1 = new Choice("You wonder into a cave.");
    Choice choice2 = new Choice("You go further in.");
    Choice choice3 = new Choice("You exit the cave and walk away.");

    Connect(choice1, choice2, "Explore.");
    Connect(choice1, choice3, "Leave.");

    Choice choice4 = new Choice("There is ancient text written on the wall!");
    Choice choice5 = new Choice("The ground is full of bugs!");
    Choice choice6 = new Choice("The spider scares you!");

    Connect(choice2, choice4, "You take out your flashlight.");
    Connect(choice2, choice5, "You look at the ground.");
    Connect(choice2, choice6, "You notice the spider.");


    Connect(choice4, choice3, "You will find the enterence with your flashlight.");
    Connect(choice5, choice3, "You will run back to the enterence.");
    Connect(choice6, choice3, "You will stumble across the enterence.");


    Choice head = choice1;

    while (true)
    {
      Console.WriteLine($"{head.answer}");
      int count = 1;
      if (head.choices.Count == 0)
      {
          break;
      }
      for (int i = 0; i < head.choices.Count; i++)
      {
          Console.WriteLine($"{count}. {head.connectionStrings[i]}");
          count++;
      }
      
      while(true)
      {
        Console.Write("Choose your path: ");

        try
        {
            int input = int.Parse(Console.ReadLine());
            head = head.choices[input - 1];
            break;
        }
        catch (Exception)
        {

            Console.WriteLine("That's not a valid choice.");
        }
      }

    }

  }

  public static bool Connect(Choice c1, Choice c2, string connection) 
  {
      if (c1.choices.Contains(c2))
      {
          return false;
      }

      c1.choices.Add(c2);
      c1.connectionStrings.Add(connection);
      return true;
  }
}

public class Choice
{
    public string answer;
    public List<Choice> choices;
    public List<string> connectionStrings;
    public Choice(string answer)
    {
        this.answer = answer;
        choices = new List<Choice>();
        connectionStrings = new List<string>();
    }
}
```

# More that You Can Create
- [Original Program](https://repl.it/@CosmicSnowman/DialogueTree#main.cs)
- [Make Certain Paths Hidden](https://repl.it/@CosmicSnowman/Dialogue-Tree-Expanded-1#main.cs)
- [Add Color to the Text](https://repl.it/@CosmicSnowman/Dialogue-Tree-Expanded-2#main.cs)
- [Add a Bravery Value to Restrict Paths](https://repl.it/@CosmicSnowman/Dialogue-Tree-Expanded-3#main.cs)
