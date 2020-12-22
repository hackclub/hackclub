---
name: 'Black jackgame'
description: 'Create Your own Blackjack Game Using C++'
author: '@chrisrama'
---
# blackjack

Have you ever thought How you could create a simple and smart BlackJack game using, well You have come in the right place. You will How to use function(expectially Void Function) to it full potential.

## Getting started
This workshop is very friendly for beginner or advance c++ programmmer as it Help you practice and understand the use of Function in C++ and the manipulation of it.
We going to be using repl.it code editor to create our game. If you don't have an account yet go over to [repl.it](https://repl.it/signup) to create an account. To create a new C++ project in Repl.it just Click over [HERE](https://repl.it/languages/python3) and name your project to what you prefer.

## First step

Now Before we start, We see That Repl.it has already prepare for us the most important library ```iostream``` header file, But for this Game we will need to well generate random Number for all our Card;which ```iostream``` library doesn't support;and to make our code a bit simple, we will  not be using namespace ```Std::``` to declare a string variable or Given output  or an input . . Under ```Iostream``` Library we are going to call the Library that allow to generate Random number and inform the program that we are are not using ```std```
```C++
    #include <ctime>
    using namspace std;
```
  What did we just call Exaclty 
  
  
  -```ctime``` header file library will be use to help generate the random number using the program time. for ore about it you can Found it here at```link```
  
  -```using namespace std``` use it to tell the program that we will not be using std rather as a namespace which is just nothing.
  
  
Now that you have set evrything we need let to write some CODE!!!
![](git)

 
As I said in the beginning we will be using the ```void()``` Function  to create this gamae, so instead of writing a butch of code into the ```main()``` function that we won't be able to control, the void function will allow us to have control over the code, whcih we need the most when creating any kind of game.

Let Declare the first function inside the main function called ```Start_The_game``` which will be call when the game start.
```C++
   int  main() {
        void start_The_Game();   /* Declare  start_The_Game function */
        start_The_Game();         /* calling the function */
    }
```
WE playing the game we want TO Know who is playing, so We will create a Global variable that will store the user name which is accessible every where around the program. On top one
so we just declare our function using the type ```C++ Void ``` Which is used when you don't need to return '''''' but rather display ******** . for more about what function void do visit ******* .


It almost useless if we declare and call function without a definition. So fur Function definition will be written outside the ```C++ main ()``` function. as follow 
```C++ 
      int  main() 
      {
          void sart_The_Game();  /* Declare  start_The_Game function */
          start_The_Game();        /* calling the function */
      }
     
     void start_The_Game()       /* Giving a definition to the function to what it should do */
     {
     
     }
```
now we can give instriction/definition inside the  start_The_Game function should do. When we start the game what do we want to see first? That what we going to do. To display Text we will only use ```C++ cout << ```, why? Glad you ask, in the beginning of the program we told the program that we wont be using ```C++ std::``` to make our code easy and readable. We will be displaying the text as String therefore it impontant to 

```C++
     void start_The_Game()       \* Giving a definition to the function to what it should do */
     {
       cout << "\n          Blackjack Game      \n";                      /* Title of the game */
       cout << "\n+++++++++++++++++++++++++++++++\n";                      /* line using ++ (plus sign) to separate the title from the body */
       cout << "\n Welcome to the game.\n Enter your player Name: \n";      /*instruct the user to Write their name */
     }
```
Now we just wrote our introcduction but what does it say?
 + in the first line we tell the program to display the title of the game which wll be place at the center of the game using spaces.
 + what up with the \n at the end and beginning of the string ,well we us hat to tell the program to dislay a new Line before and after the line and so create a new line,there is more than one way to create a new like check it out *[Here]()******.
 + our second line we use the plus sign to create an line betwwen the title and the body of the game.
 + the third line we welcome the user and ask the Player to Enter they name. We will
 
# Challenge 

-Add Multipler player inside the game
