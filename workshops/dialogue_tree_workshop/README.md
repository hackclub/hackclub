---
name: 'Dialogue Tree'
description: 'Create your own dialogue tree system!'
author: '@JakeGerber'
image: 'https://cloud-74lq7ehps.vercel.app/0screenshot__1426_.png'
---

# Create a Dialogue Tree!

Have you ever played an RPG or text adventure game and thought that it would be cool to tell your own story? Now you can with this workshop! We will be creating a dialogue tree system with C#. It's pretty rad! B)

<img src="https://cloud-74lq7ehps.vercel.app/0screenshot__1426_.png" width="900" alt="Dialogue Tree Example">

<img src="https://cloud-8uexi5mju.vercel.app/01200px-dialog_tree_example.svg.png" width="900" alt="Dialogue Tree Visualization Example">

# Repl.it Setup
Let's begin!

We're going to use [Repl.it](https://repl.it/languages/c#) to create the project. It is an IDE which allows us to write our code online. No downloads necessary. Pretty convenient ey? 

Create a new repl and use C# as the language.

<img src="https://cloud-n5g94sz4o.vercel.app/0screenshot__1427_.png" width="600" alt="C# Repl">

For the rest of the project, we are going to be using the same file.

# File
```csharp
using System;

class MainClass {
  static void Main(string[] args)
  {
  }
}
```
Your file should look like this before we start adding things. Do not delete anything! Trust me. Don't be that person.

# Choice Class
Let's create a "Choice" [class](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/classes). Think of classes as blueprints, and by modifying the values in the blueprint, we can create objects. These objects will represent each of our choices, and we will link them together in order to create our dialogue tree.

<img src="https://media3.giphy.com/media/3og0Iwmv38WmJBrYvS/200.gif" width="380" alt="Cookie Monster Gif">

## Initial Variables
We're going to set up the program with some initial variables. Without them, a lot of what we will be doing won't work.
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
}
```
- Add the using statements to the top. These are needed to use certain functions later on. 
- Create an empty "Choice" class right below the "MainClass."


```csharp
public class Choice
{
    public string answer;
    public List<Choice> choices;
    public List<string> connectionStrings;
}
```
- Each "Choice" object to have a "answer" string that will be displayed when they are gone to on the dialogue tree.
- Each "Choice" object will also have a list of other connecting choices and a list of strings that will be displayed when the respective choice is chosen.
- Don't worry if this seems confusing! It will make more sense later on.

## Constructor
public class Choice
{
    public string answer;
    public List<Choice> choices;
    public List<string> connectionStrings;
    public Choice(string answer)
    {
    }
}
```
This [constructor](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors) takes in an "answer" string. It will be initialized to the "answer" string in a moment.

```csharp
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
Initialize the answer to the [constructor string](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this), initialize choices as an empty list, and initialize connectionStrings as an empty list. The "this" part means that it will set the "answer" string outside of the constructor to the constructor's "answer." That's all for this class!

# Connect Function
Let's create a function that connects two choices and gives them a connection string. How else would we know what the options from one choice to another are?
```csharp
class MainClass {
  static void Main(string[] args)
  {
  }
  public static bool Connect(Choice c1, Choice c2, string connection) 
  {
  }
}

//Connect function would be here.
```
- Add this function within the main class.
- This function takes in two choices and a connecting string.
- If there is no connection between the choices, a connection is created by adding the second choice and connection string to the first choice's lists.

```csharp
public static bool Connect(Choice c1, Choice c2, string connection) 
{
    if (c1.choices.Contains(c2))
    {
        return false;
    }
}
```
If the choice contains the other choice, meaning they are connected, then return false because there is nothing to connect. If it does not contain it, we will have to connect them.

```csharp
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
```

If there is no connection between the choices, a connection is created by adding the second choice and connection string to the first choice's list. We also want to add the connection string to the first choice's "connectionStrings" list. Then, return true.


# Creating the Connections
Let's fully create our dialogue tree in the main function before working further. This can be changed later, added to, and expanded upon, but let's set some blueprints down now.

<img src="https://i.makeagif.com/media/5-07-2014/7hQjSl.gif" width="380" alt="Patrick Gif">

```csharp
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
```
Copy this code into your main function. It creates choices and connects them together. Think of this as an example though. When you are done with writing all the code, feel free to get rid of it and create your own dialogue tree! Let's break it down.

```csharp
Choice choice1 = new Choice("You wonder into a cave.");
Choice choice2 = new Choice("You go further in.");
Choice choice3 = new Choice("You exit the cave and walk away.");
```
Create these three choices. Every choice has the connection string that displays when the choice is picked.

```csharp
Connect(choice1, choice2, "Explore.");
Connect(choice1, choice3, "Leave.");
```
The string in choice1 is displayed, and then the user is prompted with two choices: Explore or Leave. When a choice is picked, the connecting string is displayed. So, if the user picks Explore, the choice2 string of going further in is displayed. What we are doing here is creating choices and connecting them.

```csharp
Choice choice4 = new Choice("There is ancient text written on the wall!");
Choice choice5 = new Choice("The ground is full of bugs!");
Choice choice6 = new Choice("The spider scares you!");
```
We are expanding our dialogue tree with more choices.

```csharp
Connect(choice2, choice4, "You take out your flashlight.");
Connect(choice2, choice5, "You look at the ground.");
Connect(choice2, choice6, "You notice the spider.");
```
We are connecting the choices we just made just like what we've done before.

```csharp
Connect(choice4, choice3, "You will find the enterence with your flashlight.");
Connect(choice5, choice3, "You will run back to the enterence.");
Connect(choice6, choice3, "You will stumble across the enterence.");
```
We are connecting even more choices for our dialogue tree. Later on you will have a better understanding of how it works and can add more choices and connections to create your own dialogue tree.

# Going Through the Dialogue Tree
We need to start at the top of the dialogue tree and go down it. Please don't overthink it...

```csharp
static void Main(string[] args)
{ 

  //Connections would be here.

  Choice head = choice1;
}
```
Set a choice refrence called "head" and set it to choice1. This will be how we will track what choice we are on.

```csharp
Choice head = choice1;
while (true)
{
}
```
Add this [while loop](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while). This is where we will be running through the dialogue tree until we reach the end.

```csharp
while (true)
{
  Console.WriteLine($"{head.answer}");
  int count = 1;
} 
```
Add these two statements. We are writing the choice's string and setting an integer called "count" to 1.

```csharp
while (true)
{
  Console.WriteLine($"{head.answer}");
  int count = 1;
  if (head.choices.Count == 0)
  {
      break;
  }
}
```
If the current choice has no connections, meaning it is at the end of the dialogue tree, then break out of the while loop.

```csharp
    while (true)
    {
      //Code we already wrote would be here.
      
      for (int i = 0; i < head.choices.Count; i++)
      {
          Console.WriteLine($"{count}. {head.connectionStrings[i]}");
          count++;
      }
    }
```
Create a [for loop](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for) that will go through the choice's connections and print them out for the user. Then, increase the count, which shows the numbers of the choices.

# User Input

<img src="https://i.pinimg.com/originals/2c/dd/d1/2cddd1796354e90f4aab7fb1e48eafb4.gif" width="380" alt="Computer Gif">

The user has to be able to choose what option they want! Without it, what's the point of the dialogue tree?

```csharp
    while (true)
    {
     //Code we already wrote would be here
     
      while(true)
      {
        Console.Write("Choose your path: ");
      }
    }
```
Create a new while loop. This is where the user input will be. Also, write to the screen asking the user to choose their path.

```csharp
while(true)
{
  Console.Write("Choose your path: ");

  try
  {
  }
  catch (Exception)
  {
  }
}
```
Create an empty [try-catch](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/try-catch) statement. This will catch any errors that the user inputs such as invalid choices, which prevents our program from breaking.

```csharp
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
```


In the try part, we are taking in the user input and [parsing](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/how-to-convert-a-string-to-a-number) it into a string. Then we are setting the head to the input-1. Instead of the user inputting a zero for the first choice, they are inputting a one, so we need to account for this. In the catch, we are letting the user know that they inputted an invalid choice.


# Final Code
You are done! Now go and customize the tree with your own options and expand upon it (or don't but that would be really weird so go customize it)!

<img src="https://24.media.tumblr.com/tumblr_m72q5gpfZ91rps25mo1_500.gif" width="380" alt="Snoopy Gif">

Here is everything we wrote.
<img src="https://images.squarespace-cdn.com/content/v1/50cbdb88e4b07b9d0e8730e2/1543174618461-SV5S28UJH1774WGCYK4H/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/yay.gif" width="380" alt="Snoopy Gif">

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
