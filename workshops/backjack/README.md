---
name: 'Black jackgame'
description: 'Create Your own Blackjack Game Using C++'
author: '@chrisrama'
img:
---
# blackjack

Have you ever thought How you could create a simple and smart BlackJack game using C++, well You have come in the right place. In this workshop will how to create your own blackjack game as well as explore the concept of using function(expectially Void Function) in C++ and how it important.

## Getting started
This workshop is very friendly for beginner or advance c++ programmmer as it Help you practice and understand the use and manipulate Function in C++.
If you never play the blackjack game at all, or want to know how to play it, don't worry, I have a video short [video](https://youtu.be/eyoh-Ku9TCI) for you that explain how excalty the game work.

We going to be using repl.it code editor to create our game. If you don't have an account yet go over to [repl.it](https://repl.it/signup) to create an account. To create a new C++ project in Repl.it just Click over [HERE](https://repl.it/new/cpp) and name your project to what you prefer.

## First step

Now before we start, if you have Created a new project you will see that Repl.it has already prepared everything we need to get started, but for this workshop we will need more library than there is there, so I have created a new project with everything we need to get started. Click [Here](https://repl.it/@chrisrama/Blackjack-Game) to view the project and then fork the project to get started.
 ```c++ 
#include <iostream>
#include <ctime>
#include <vector>
using namespace std;
```
 + Inside the project you just fork, I have include the `<ctime>` library,this header file is called when you need to generate random, in this case will will need it to generate the random card numbers for the players. for more on how how to use `<ctime>` library you can Found it here at***
 + I also called the `<vector>` library, because we will use vector instead of arrays to store all the player and the dealer card.
 + We not going to be using `std::` to dealcre string Declare string variable or output and input message, we then use ``using namespace std;`` to inform the program that will won't be using `std::`.
 ```c++
 /* Declaration section: This will be used to Declare variables and Function */ 

  void start_The_Game();                   /* Declare start_The_Game function */
int Pl_card1, Pl_card2, Pl_card_cont;      /* used to stored the Card number for the player*/
int Dl_card1, Dl_card2, Dl_card_cont;      /* used to stored the Card number for the Daler*/
int Tl_Pl_card,Tl_Dl_card;                 /*Use to store the total number of card or player and dealer*/
```
 + In side the Declaration section, will be the section use to declare variables and function, in this case I have declare the first function ```start_The_Game()``` that will be call when we need to start the game. Don't worry if you dont see it use now but you will later.
 
+ For the first integer(short for int) variable declare with multiple variable in it,so when the game start the player and the dealer(computer) will both will be handed 2 card,now we declare `Player card number one` short for `Pl_card1` that will will be used to store the first card number of the player,  we suse the `_` underscore as to show that there is a space; Then `Player card number 2` short for ``Pl_card2`` use to store the second card.  
we then have `Pl_card_cont` or ` Player card continues` which will be used to store the remaining card that will be draw, therefore continues.

+ For the Dealer card, we use exalty the same method use used to declare the first cards fo the Player, nbut instead of `Pl for Player` we use `Dl` for `Dealer`. the Dealer also have to receive 2 card at first then `Dl_card_cont`  will be used to stored the remaining card that bthe Dealer will draw.

+ finaly we need a variblae that will store the Player 's toatal card and the Dealer's total card that will be used to find who has a blackjack. Therefore `Tl_Pl_card` stand for `Total Player Card` and `Tl_Dl_card` stand for `total dealer card`.

```c++
int main() {
           /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                 /* title of the game */
   cout << "\n++++++++++++++++++++++++++++++++\n";                /* line using ++ (plus sign) to separate the title from the body */
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the user to Write their name */

}
```
Inside the main function is where the code where all our code will ne run. so before the game start we have to give an introduction to the game, which will be to , so we will start of by displaying the title of the game, plus a line under it using The plus sign. 

```c++
  cout << "\n           Blackjack Game      \n";      /* title of the game */
  cout << "\n++++++++++++++++++++++++++++++++\n";    /* line using ++ (plus sign) to separate the title from the body */
```
 + we then use the sign `\n` to tell the program to diplay a new line in this case we use `\n` before and after the line. for more about ***
 we then welcome the player to the game follow by an new line using `\n`.
 
 ```c++ 
    cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the playerr to Write their name */

 ```
  We then welcome the player and ask them to write their name.
  
  
 ```c++
 /* Definition Section: this section will be used to Give definition to all the Declare function*/
void start_The_Game() {
   /* definition goes here */ 
}
```
The definition section is where, we give definiton/purporse to the funtion, here is where we will give definition to all the function we will declare, example we have `start_the_Game()` function that we call and inside it body is where the definition will go to. 
 
 Now that you have Everything set, let start some hack ***
 
 ## second Step
 
 Now inside the Declaration section, Declare a string variable `player1` which will be used to stored the first player name: 
 ```c++
  /* Declaration section: This will be used to Declare variables and Function */ 

  void start_The_Game();                   /* Declare start_The_Game function */
int Pl_card1, Pl_card2, Pl_card_cont;      /* used to stored the Card number for the player*/
int Dl_card1, Dl_card2, Dl_card_cont;      /* used to stored the Card number for the Daler*/
int Tl_Pl_card,Tl_Dl_card;                 /*Use to store the total number of card or player and dealer*/
string player1;
 ```
 Now let inside the main function we have ask the user for their name, now let take their name using `getline()` function wich will take the wholw line from the user, because the player might give their surname too, so we want the full sentences.

Inside the geline function we want to ask for input and stored it inside the `player1` which store the player name, so we will include `cin` and `player1` as ``getline(cin,player1)``: 
 ```c++
 int main() {
           /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                 /* title of the game */
   cout << "\n++++++++++++++++++++++++++++++++\n";                /* line using ++ (plus sign) to separate the title from the body */
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the user to Write their name */
   getline(cin,player1);
}
```
let work inside the `star_The_Game()` function, inside this function, let display again the intoduction to the game but this time including the player's name :

```C++
 cout << "\n           Blackjack Game      \n";
 cout << "\n++++++++++++++++++++++++++++++++\n";
 cout << "\n Welcome to the game.\n";
 cout << "\n Player of this round is: " << player1 << "\n\n"; 
 ``` 
 In the last line we display the name of the player after the message, which was stored inside the `player1` variable, from the main function, after displaying player name, the program does not write an new line for us, so we then again ask to for two new line after that message using two `\n`.
In C++ How you write your code is very important.
 

 + in the first line we tell the program to display the title of the game which wll be place at the center of the game using spaces.
 + what up with the \n at the end and beginning of the string ,well we us hat to tell the program to dislay a new Line before and after the line and so create a new line,there is more than one way to create a new like check it out *[Here]()******.
 + our second line we use the plus sign to create an line betwwen the title and the body of the game.
 + the third line we welcome the user and ask the Player to Enter they name. We will
 
# Challenge 

-Add Multipler player inside the game
