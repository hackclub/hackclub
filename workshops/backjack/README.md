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
Under getline() function call ` start_The_Game() ` function so the game can start. Note it important you ~Declare~ , ~give Defintion~ and ~Call~ a function.
 ```c++
 int main() {
           /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                
   cout << "\n++++++++++++++++++++++++++++++++\n";                
   cout << "\n Welcome to the game.\n Enter your Name: \n";      
   getline(cin,player1);
   start_The_Game();                      /* place it here */
}
```
Let now work inside the `star_The_Game()` function, inside this function, let display again the intoduction of the game but this time including the player's name :

```C++
 cout << "\n           Blackjack Game      \n";
 cout << "\n++++++++++++++++++++++++++++++++\n";
 cout << "\n Welcome to the game.\n";
 cout << "\n Player of this round is: " << player1 << "\n\n"; 
 ``` 
 In the last line we display the name of the player after the message, which was stored inside the `player1` variable, from the main function, after displaying player name, the program does not write an new line for us, so we then again ask to for two new line after that message using two `\n`.
 
In C++ when you write you code you are responsible over everything, you control everything that is display, and so you need to play attention to every little details in the code.
 
As fast as C++ is, we want to take a make a break to show excatly that the game has started. we then will display to the player to `"Please click enter to shuffle the card"` follow by a new line using `\n`. we Then going to wait for the player to click enter to do that we will use the `cin.get()` function which just pause the program and wait until Enter button is click, we then going to do this inside `start_The_Game()` function under our last code : 

```c++
cout << "Please click enter to shuffle the card \n";
    cin.get();
```
<details> 
 <summary> This is how your code shoud look so far: </summary>
	
  ```C++
     #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
         void start_The_Game();  
     int Pl_card1, Pl_card2, Pl_card3;     
     int Dl_card1, Dl_card2, Dl_card3;     
     int Tl_Pl_card,Tl_Dl_card;  
     string player1;           
	int  main() {    /*Introduction to the game */
         cout << "\n           Blackjack Game      \n";
         cout << "\n++++++++++++++++++++++++++++++++\n";   
         cout << "\n Welcome to the game.\n Enter your player Name: \n";
         getline(cin,player1);   
		 start_The_Game();
     }
	 void start_The_Game(){
     cout << "\n           Blackjack Game      \n";
     cout << "\n++++++++++++++++++++++++++++++++\n";
     cout << "\n Welcome to the game.\n";
     cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
     cout << "Please click enter to shuffle the cards \n";
     cin.get();  
 
     }
   ```
	
</details>

To shuffle the card is another way to draw random card (number) for the player and the Dealer, we will need a function to do that.

Inside the ~Declaration Section~ under the `start_The_Game()` function declare `Hit_Card1()` as a void function:

```c++
//decalrioj
void Hit_card1();
```
We then going to give definition to this function under the ~definition section~. Inside the `Hit_Card1()` fiunction we will use a special function that will help us generate random number, which is will use the `<time>` library, that use the time of the program, to get random number. :
```C++
void Hit_card1() {
 srand(time(0));          /* place it here */
 
 }
```
Under that line we will then draw drandom number for the first and sececond card for the player that will be betttwen 11 and 1, so call out the variable that store the frist and second card number whcih is ` Pl_card1 ` and ` Pl_card2 `: 
```c++ 
srand(time(0));
Pl_card1 =                   /* place it here */
Pl_card2 =                   /* place it here */
```
we will then call the random function using ` rand() ` and instruct it to find the number bettween 11 and 1 using ` % ` (percentage sign) as to show between 11 and 1 : 
```c++ 
srand(time(0));
Pl_card1 = 11 % 1;           /* place it here */
Pl_card2 = 11 % 1;           /* place it here */
```
We no have a Random number stored inside the card 1 and 2, now that we have that we need to keep both number inside a vector which is very simalar to a array. so to do that, let declare a vector that store these integer under the **declaration section** and indetify it as ` player_card `  : 
```c++
//****
 vector<int>player_card;
```
You can go head and declare a vector that will store the dealer card as ` dealer_card` we will need it later:
```c++
//*****
 vector<int>player_card;
 vector<int>delaer_card;       /* place it here */
```
Now let go back inside the ` Hit_card1() ` function,let take a copy of random cards for the player and place it inside the vector ` player_card `:
```c++ 
void Hit_card1(){
srand(time(0));
Pl_card1 = 11 % 1;
Pl_card2 = 11 % 1;
player_card = {Pl_card1,Pl_card2};        /* place it here */
}
```
Here the number from the variable ` Pl_card1 ` and ` Pl_card2 ` will be store as a list inside the vector ` player_card ` respectively using the bracket.
we then going to get the total player card(` Tl_Pl_card `  by adding ` Pl_card1 ` to ` Pl_card2 ` :
```c++ 
srand(time(0));
Pl_card1 = 11 % 1;
Pl_card2 = 11 % 1;
player_card = {Pl_card1,Pl_card2};
Tl_Pl_card = Pl_card1 + Pl_card2;          /* place it here */

```
Now we done drawing the card for the player, so let do the same for the dealer:
 + call ` Dl_card1 ` equal to random number between 11 and 1
 + call ` Dl_card2 ` equal to random number between 11 and 1
 + store the copy of ` Dl_card1 ` 1 and ` Dl_card2 ` inside the vector ` dealer_card ` respectively using bracket 
 + get the total card for the dealer using the dealer card (` Dl_card1 ` and ` Dl_card2 `) and store it inside ` Tl_Dl_card ` 
this should look like this :
```c++
Tl_Pl_card = Pl_card1 + Pl_card2;
Dl_card1 = 11 % 1;                    /* place it here */
Dl_card2 = 11 % 1;                    /* place it here */
dealer_card = {Dl_card1,Dl_card2};    /* place it here */
Tl_Dl_card = Dl_card1 + Dl_card2;     /* place it here */

```
Now that done let create a variable that will be use to inform us the number of card of the player, inside the ~declaraction section this variable will be an integer called ` num_of_PlayerCard `.
```c++
//comment here
int num_of_playerCard;
```
Now we will call this variable inside the ` Hit_card1() ` function and give it the value of two, to keep record that the player has been given 2 card :
```c++
 
Tl_Dl_card = Dl_card1 + Dl_card2;
num_of_playerCard = 2;           /* place it here */
```
woooh!!, we just finish to draw our first cards now let call it!!
![hit card on the table]()

Go over ` start_The_Game() ` function and call ` Hit_card1() ` function after ` cin.get() ` function:

```C++
     cin.get();  
	 Hit_card1();                 /* place it here */
```
Now if the program run, Hit_card1 will be called and the operation inside it definition will be executed. 
Now let show the player their card that is stored inside the vector ` player_card ` as a list : 
```c++ 
       Hit_card1();  
cout << player1 << ",You have been Dealt with [ " ;            /* place it here */
```
after we have called the player's name and say what card their have been given/dealt, we can now display the two card the player has, so to do that, we will create  ` Diplay_card ` inside the **Declaration section** that will receive one parameter which will be a vector of the list of card from the player or the dealer.
```c++
 void Display_Card(vector<int>list_of_card);
```
we will then go over the **Definition section** to give definition to ` Display_card ` function. Inside the Display_card we will use the for loop to display each element in the list of card : 
```c++
void  Display_Card(vector<int>list_of_card){
   for (int i = 0; i < list_of_card.size(); i++){        
      cout << list_of_card[i] << " ";
    }
 }
```
In the for loop , we first initialize integer i to be equal to 0,this means it will start on the first index inside the vectorwhich is at position 0, then while i is still smaller than the size(number of element) inside the list of card the integer i will kep increasing while we display the elmet at index(position) i plus a space after each element.

Now that we have a definition, let go back inside the ` start_The_Game() ` function where we left, on a new line after our last line, we will call ` Display_Card ` function with the parameter ` player_card ` which is where the player's list of card numbers is stored : 
```c++
 cout << player1 << ",You have been Dealt with [ " ;
  Display_Card(player_card);                           /* place it here */
```
then we need to ddiplay the total of card number the player has which is inside Tl_Pl_card variable  so we will write(dont't forget to tell the program to create a new line after only) :
```c++ 
       Display_Card(player_card);
   cout << "] With have a total of : " << Tl_Pl_card << " \n\n";        /* place it here */
   
```
we then will only show one card which the Dealer has as the player is only allow to know only one card until he or the dealer bust, in this case only the first card of the dealer which is iside the variable ` Dl_card1 ` : 
```c++
 cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
 cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";       /* place it here */

```
Time for some thinking:
![A person thinking]()
   
[The rule](https://youtu.be/eyoh-Ku9TCI) of the game tell us if the player or the dealer has a total bigger than 21 then it a bust he then loose if total is 21 then he got blackjack and it a win, else the game goes on. we therefore need to check if one of the person in the game has a bust or a black jack , we will then say if total player card is bigger or equal to 21 or total dealer card is bigger or equal to 21  then we must check for a bust or blackjack :
```C++
 cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";
    if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {                 /* place it here */
        
     }
```
Now we don't have a function that will check for a bust or a black jack, so let declare it under **declaration section** and call it has ` Hit_Bust_Check() ` void function:
```C++
 /* Declaration section: This will be used to Declare variables and Function */ 
         void Hit_Bust_check();                /* place it here */
```
we then going to create the function which will display the message to the user if their have won or loose, we ill then call these function ` player_win() ` and ` player_loose() `. Don't worry if you don't understannd these two function's purporse I will explain it soon ;) *wink*  : 
```c++
/* Declaration section: This will be used to Declare variables and Function */ 
     void Hit_Bust_check();
     void player_win();                        /* place it here */
     void Player_Loose();                     /* place it here */
```
Now go over the **Definition section** and let give some definition to these function  : 
First Hit_bust_check() function, As the rule of the game inform us :  
 + we first check if the total card of the player(` Tl_Pl_card `) is equal to 21 or the total card of dealer(` Tl_Dl_card `) is bigger than 21 then the player win so we call the function ` Player_win() `
 + else if the total card dealer(` Tl_Dl_card `) is equal to 21 or total card of player(` Tl_Pl_card ` ) is bigger than 21 then the player loose so we call the function ` player_loose ` 
 + else if the total card of the player is bigger than the total card of the dealer then the player loose, so we call the function ` player_loose() `
 + else if all thes condition are not meet then the player win, so we call the function ` player_loose()` 
 ```c++
 void  Hit_Bust_check(){  
      if (Tl_Pl_card == 21 || Tl_Dl_card > 21 ){
            player_win();
        } else if (Tl_Dl_card == 21 || Tl_Pl_card > 21 )  {
                Player_Loose();
         } else if (Tl_Pl_card > Tl_Dl_card){
              player_win();
          } else {
             Player_Loose();
          }
   } 
```
⚠️In other to understand fully what we just did, I recommend that you may watch the video at the beginning of this page that talk about how Blackjack game work [Here](https://youtu.be/eyoh-Ku9TCI).

Now that we done remember the rule when we declare a function, we have to *give definition* and *Call* the function; we here only called and declare the function ` player_win() ` and ` player_loose() ` , so let give definition to them :
first player_win function, so what do we want when the player win? 
 - first we want to display the player card and the dealer card with their total
 - then write out that the player has won a=while the dealer has loose 
 - the ask if the player will like to restart the game or to quit the game
 so let start to displaying the player card with their total and the dealer card with their total (don't forget to use ` display_playercard() ` to display a person's card numbers)
 ```c++
 void player_win(){
     cout << "The Player hand : ";
        Display_Card(player_card);
     cout << " with a total of : " << Tl_Pl_card << "\n\n";
  
     cout <<"Dealer Hand : " ;
        Display_Card(dealer_card);
     cout << " with a total of : " << Tl_Dl_card << "\n\n";
       
 }
 ```
 then let display that the player has won the game:
 ```c++
   cout <<"Dealer Hand : " ;
        Display_Card(dealer_card);
   cout << " with a total of : " << Tl_Dl_card << "\n\n";            
   cout << player1 << " Win🔺 Congrats!! \n\n";                    /* place it here */
   
 ```
 lastly we will ask the player if they would like to Restart or quit playing the game :
 ```c++
  cout << player1 << " Win🔺 Congrats!! \n\n";    
  cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";                /* place it here */
  
  ```
 Now to get the answer from the player we will declare a new String variable that can store the answer from the player and call it ` answ ` inside the **Declaration section**
 ```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
 string answ;         				          /* place it here */
 ``` 
  then we will need a new function that will check if the player would like to continue or quit playind, we will neame this function ` Continue_Playing() `
 ```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
 string answ;
 void Continue_Playing();                              /* place it here */
 
 ```
 Now let go back inside the ` Player_win() ` function and get the line from the player then store the answer inside the ` answ ` variable :
 ```C++ 
  cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";
  getline(cin,answ);                                                    /* place it here */
 
 ```
 then call the function ` Continue_Playing() ` which we will give a definition to it soon.

```c++
 getline(cin,answ);
 Continue_Playing();                      /* place it here */
 
 ```
 inside the **Definition section** let start to give definition to the function ` Continue_playing() ` :
 ```c++
 Continue_Playing() {
  
  }
  
``` 
now we just asked the player if they would like to restart playing or to quite playing we will write small program that check the answer from the player :
 + if the answer from the player is " 1 " then we will call the game to start using the function ` Start_The_Game() `
 + else the player want to stop playing there we will just thanks the player for playing and do nothing else.
 ```c++
  void Continue_Playing() { 
   if (answ == "1") {
      start_The_Game();                                   /* then continue */ this function will start again the game from the beginning 
   }  else {
      cout << "\n\nThanks For playing\n\n";                /* this message will be display and nothing else will happen */
   }
}

 ```
 Well done, let see your progress so far because we seem to be going from one function to the other while not finiishing other function :
 <details> 
 <summary> This is how your code shoud look so far: </summary>
	
  ```C++
      #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
          void start_The_Game();  
          void Hit_card1();
	  void Display_Card(vector<int>list_of_card);
	  void Hit_Bust_check();
	  void player_win();
	  void Player_Loose(); 
     int Pl_card1, Pl_card2, Pl_card3;     
     int Dl_card1, Dl_card2, Dl_card3;     
     int Tl_Pl_card,Tl_Dl_card;  
     string player1; 
     vector<int> player_card;
     vector<int> dealer_card;
      string answ;  
     int  main()  {    /*Introduction to the game */
         cout << "\n           Blackjack Game      \n";
         cout << "\n++++++++++++++++++++++++++++++++\n";   
         cout << "\n Welcome to the game.\n Enter your player Name: \n";
         getline(cin,player1);   
		 start_The_Game();
       }
     void start_The_Game(){
        cout << "\n           Blackjack Game      \n";
        cout << "\n++++++++++++++++++++++++++++++++\n";
        cout << "\n Welcome to the game.\n";
        cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
        cout << "Please click enter to shuffle the cards \n";
         cin.get();  
            Hit_card1();                        
        cout << player1 << ",You have been Dealt with [ " ;
               Display_Card(player_card);
        cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
        cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";

         if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
               Hit_Bust_check();
              }
 
      }
     void Hit_card1() {
      srand(time(0));
      Pl_card1 = rand() % 11 + 1;         
      Pl_card2 = rand()  % 11 + 1;  
      player_card = {Pl_card1,Pl_card2};
      Tl_Pl_card = Pl_card1 + Pl_card2;
      Dl_card1 = (rand() % 11) + 1;
      Dl_card2 = (rand()  % 11) + 1;
      Dl_card_cont = rand() % 11 + 1;
      dealer_card = {Dl_card1,Dl_card2};
      Tl_Dl_card = Dl_card1 + Dl_card2 ;
  
      num_of_playerCard = 2;
    }
    void  Display_Card(vector<int>list_of_card) { 
     for (int i = 0; i < list_of_card.size(); i++) {
      cout << list_of_card[i] << " ";
          }
     }
     void  Hit_Bust_check() {  
      if (Tl_Pl_card == 21 || Tl_Dl_card > 21) {
            player_win();
        } else if (Tl_Dl_card == 21 || Tl_Pl_card > 21 )  {
                Player_Loose();
         } else if (Tl_Pl_card > Tl_Dl_card) {
              player_win();
          } else {
              Player_Loose();
           } 
	 }
       void player_win(){
           cout << "The Player hand : ";
                 Display_Card(player_card);
           cout << " with a total of : " << Tl_Pl_card << "\n\n";
                
           cout <<"Dealer Hand : " ;
               Display_Card(dealer_card);
           cout << " with a total of : " << Tl_Dl_card << "\n\n";
           cout << player1 << " Win🔺 Congrats!! \n\n";
           cout  << "Would you like '1' Continue  or '2' Quit PLAYING\n";
             getline(cin,answ);
            Continue_Playing();       
     }
   ```
	
</details>

 <details>
    <summary> Check out your progress here</summary>
	
	```c++
     #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
          void start_The_Game();  
          void Hit_card1();
	  void Display_Card(vector<int>list_of_card);
	  void Hit_Bust_check();
	  void player_win();
	  void Player_Loose(); 
     int Pl_card1, Pl_card2, Pl_card3;     
     int Dl_card1, Dl_card2, Dl_card3;     
     int Tl_Pl_card,Tl_Dl_card;  
     string player1; 
     vector<int> player_card;
     vector<int> dealer_card;
      string answ;  
     int  main()  {    /*Introduction to the game */
         cout << "\n           Blackjack Game      \n";
         cout << "\n++++++++++++++++++++++++++++++++\n";   
         cout << "\n Welcome to the game.\n Enter your player Name: \n";
         getline(cin,player1);   
		 start_The_Game();
       }
     void start_The_Game(){
        cout << "\n           Blackjack Game      \n";
        cout << "\n++++++++++++++++++++++++++++++++\n";
        cout << "\n Welcome to the game.\n";
        cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
        cout << "Please click enter to shuffle the cards \n";
         cin.get();  
            Hit_card1();                        
        cout << player1 << ",You have been Dealt with [ " ;
               Display_Card(player_card);
        cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
        cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";

         if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
               Hit_Bust_check();
              }
 
      }
     void Hit_card1() {
      srand(time(0));
      Pl_card1 = rand() % 11 + 1;         
      Pl_card2 = rand()  % 11 + 1;  
      player_card = {Pl_card1,Pl_card2};
      Tl_Pl_card = Pl_card1 + Pl_card2;
      Dl_card1 = (rand() % 11) + 1;
      Dl_card2 = (rand()  % 11) + 1;
      Dl_card_cont = rand() % 11 + 1;
      dealer_card = {Dl_card1,Dl_card2};
      Tl_Dl_card = Dl_card1 + Dl_card2 ;
  
      num_of_playerCard = 2;
    }
    void  Display_Card(vector<int>list_of_card) { 
     for (int i = 0; i < list_of_card.size(); i++) {
      cout << list_of_card[i] << " ";
          }
     }
     void  Hit_Bust_check() {  
      if (Tl_Pl_card == 21 || Tl_Dl_card > 21) {
            player_win();
        } else if (Tl_Dl_card == 21 || Tl_Pl_card > 21 )  {
                Player_Loose();
         } else if (Tl_Pl_card > Tl_Dl_card) {
              player_win();
          } else {
              Player_Loose();
           }
       } 
       void player_win(){
           cout << "The Player hand : ";
                 Display_Card(player_card);
           cout << " with a total of : " << Tl_Pl_card << "\n\n";
                
           cout <<"Dealer Hand : " ;
               Display_Card(dealer_card);
           cout << " with a total of : " << Tl_Dl_card << "\n\n";
           cout << player1 << " Win🔺 Congrats!! \n\n";
           cout  << "Would you like '1' Continue  or '2' Quit PLAYING\n";
             getline(cin,answ);
            Continue_Playing();       
            }
         ```
      
</detailss>

That a long way we have come; Now let
+ in the first line we tell the program to display the title of the game which wll be place at the center of the game using spaces.
 + what up with the \n at the end and beginning of the string ,well we us hat to tell the program to dislay a new Line before and after the line and so create a new line,there is more than one way to create a new like check it out *[Here]()*.
 + our second line we use the plus sign to create an line betwwen the title and the body of the game.
 + the third line we welcome the user and ask the Player to Enter they name. We will
 
# Challenge 

+ Add Multipler player inside the game
