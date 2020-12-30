---
name: 'Black jackgame'
description: 'Create your own Blackjack Game Using C++'
author: '@chrisrama'
img: 'https://cloud-qtjz7o7jw.vercel.app/0screenshot_2020-12-30_at_00.57.54.png'
---

# blackjack

Have you ever thought How you could create a simple and smart BlackJack game using C++, well You have come to the right place. In this workshop, you will learn how to create your own blackjack game as well as explore the concept of using a function (especially Void Function) in C++ and how  functions are important.

[![live demo of How the game works](https://cloud-9dplxo8ym.vercel.app/0demo.gif)

## Getting started

This workshop is very friendly for a beginner or advanced c++ programmer, as it helps you practice and understand the use and manipulation of function in C++.

If you never play the blackjack game at all or want to know how to play it, don't worry, I have a video short [video](https://youtu.be/eyoh-Ku9TCI) for you that explain how exactly the game works. 

+ NOTE: it important to atch the full video so you understand how the game will be made

We are going to be using [repl.it](https://repl.it/~) online IDE to create our game. If you don't have an account yet go over to [repl. it](https://repl.it/signup) to create an account. To create a new C++ project in Repl.it just Clicks over [HERE](https://repl.it/new/cpp) and name your project to what you prefer.

## First step

Now before we start, if you have created a new project you will see that Repl. it has already prepared everything we need to get started, but for this workshop, we will need some extra libraries, so I have created a new project with everything we need to get started.
[Click Here](https://repl.it/@chrisrama/Blackjack-Game) to view the project and then fork the project to get started.

 ```c++ 
#include <iostream>
#include <ctime>
#include <vector>
using namespace std;
```
 + Inside the project you just fork, I have included the c time ` <ctime> ` library, this header file is called when you need to generate random numbers, in this case, will need it to generate the random card numbers for the players. For more on how how to use the ` <ctime> ` library, you can found it [Here](http://www.cplusplus.com/reference/ctime/)
 + I also called the vector (` <vector> `) library, because we will be using vector instead of arrays to store all the player and the dealer cards.
 + We are not going to be using ` std:: ` to declare a string variable or output and input message, we then will be using ` using namespace std; ` to inform the program that it won't be using ` std:: ` rather a namespace.
 
 ```c++
 /* Declaration section: This will be used to Declare variables and Functions */ 

  void start_The_Game();                   /* Declare start_The_Game function */
int Pl_card1, Pl_card2, Pl_card_cont;      /* used to stored the Card number for the player*/
int Dl_card1, Dl_card2, Dl_card_cont;      /* used to stored the Card number for the Daler*/
int Tl_Pl_card,Tl_Dl_card;                 /*Use to store the total number of card or player and dealer*/
```
 + Inside the **Declaration section**, will be the section  we will used to declare variables and functions, in this case, I have declared the first function ` start_The_Game() ` that will be called when we need to start the game. Don't worry if you don't see it used now but you will later.
 
+ For the first integer(short for int) variable declare with multiple variables in it, so when the game starts the player and the dealer(computer) will both will be handed 2 cards, now we declare ` Player card number one ` short for ` Pl_card1 ` that will be used to store the first card number of the player,  we use the ` _ ` (underscore sign) to show that there is a space; Then ` Player card number 2 ` short for ` Pl_card2 ` is use to store the second card.  
we then have ` Pl_card_cont ` or ` Player card continuous ` which will be used to store the remaining card that will be drawn for the player, therefore continuously.

+ For the Dealer card, we use the same method used to declare the first cards for the Player, but instead of ` Pl ` for ` Player ` we use ` Dl ` for ` Dealer `. The Dealer also has to receive 2 cards at first then ` Dl_card_cont `  will be used to store the remaining card that the Dealer will draw with.

+ finally we need a variable that will store the Player's total card and the Dealer's total card, that is use to find who has a blackjack. For ` Tl_Pl_card ` stands for ` Total Player Card` and ` Tl_Dl_card ` stands for ` total dealer card `.

```c++
int main() {
           /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                 /* title of the game */
   cout << "\n++++++++++++++++++++++++++++++++\n";                /* line using ++ (plus sign) to separate the title from the body */
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the user to Write their name */

}
```
Inside the main function is where all our code will run. So before the game starts we have to give an introduction to the game, so we will start by displaying the title of the game, plus a line under it using plus signs. 

```c++
  cout << "\n           Blackjack Game      \n";      /* title of the game */
  cout << "\n++++++++++++++++++++++++++++++++\n";    /* line using ++ (plus sign) to separate the title from the body */
```
 we then use the sign ` \n `(newline character) to tell the program to display a new line in this case we use ` \n ` (newline character) before and after the line. for more about [creating new line follow it here](https://www.w3schools.com/cpp/cpp_new_lines.asp).
 
 We then welcome the player to the game followed by a new line using ` \n `(newline character)  and ask them to write their name..
 ```c++ 
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the player to Write their name */

 ```
  The definition section is where we define our function, here is where we will define all the functions we will declare, example we have the ` start_the_Game() ` function that we call and inside its body is where the definition will go.
 ```c++
/* Definition Section: this section will be used to define all the Declare function*/

void start_The_Game() {

   /* definition goes here */ 
   
}

```
 Now that you have everything set, let start some hacking 
 
 ![a cat gif typing a computer fast](https://cloud-c5sjja2wx.vercel.app/0giphy.gif)
 
 ## Getting started with the main function
 
 Now inside the **Declaration section**, declare a string variable ` player1 ` which will be used to stored the first player's name: 
 ```c++
  /* Declaration section: This will be used to Declare variables and Function */ 

  void start_The_Game();                  
int Pl_card1, Pl_card2, Pl_card_cont;     
int Dl_card1, Dl_card2, Dl_card_cont;      
int Tl_Pl_card,Tl_Dl_card;                 
string player1;          		      /* place it here */

 ```
Now, inside the main function we have asked the user for their name, let's then take their name using the ` getline() ` function which will take the whole line from the user, because the player might give their surname too, so we want the full name as a full line.

Inside the getline function we want to ask for input and stored it inside the ` player1 ` which store the player name, so we will include ` cin ` and ` player1 ` as ` getline(cin,player1) `: 
 ```c++
 int main() {
   cout << "\n           Blackjack Game      \n";                
   cout << "\n++++++++++++++++++++++++++++++++\n";                
   cout << "\n Welcome to the game.\n Enter your Name: \n";       
   getline(cin,player1);                                             /* place it here */
}
```
Under getline() function call ` start_The_Game() ` function so the game can start. Note it important you *Declare* , *give Definition* and *Call* a function.
RIght now start_The Game function as not task to perfom so let give it a definition :
 ```c++
 int main() {
           /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                
   cout << "\n++++++++++++++++++++++++++++++++\n";                
   cout << "\n Welcome to the game.\n Enter your Name: \n";      
   getline(cin,player1);
   start_The_Game();                                       /* place it here */
}
```
## Starting the game

Let now work inside the ` star_The_Game() ` function, inside this function, let display again the introduction of the game but this time including the player's name :

```C++
/* Definition Section: this section will be used to define all the Declare function*/

void start_The_Game() {  
   cout << "\n           Blackjack Game      \n";					 /* place it here */
   cout << "\n++++++++++++++++++++++++++++++++\n";					 /* place it here */
   cout << "\n Welcome to the game.\n";							 /* place it here */
   cout << "\n Player of this round is: " << player1 << "\n\n"; 			 /* place it here */
  }
 ``` 
In the last line we display the name of the player's name after the message, which was stored inside the `player1` variable, from the main function, after displaying the player's name, the program does not write a new line for us, so we then again ask for two new lines after that message using two ` \n `(newline character).
 
In C++ when you write your code you are responsible for everything, you control everything that is displayed and happening, and so you need to pay attention to every little detail in the code.
 
As fast as C++ is, we want to take a break to show exactly that the game has started. 
we then will display to the player` "Please click enter to shuffle the card" ` follow by a new line using ` \n `. 
we Then going to wait for the player to click enter; to do that we will use the `cin.get()` function which just pauses the program and wait until the enter button is click, we then going to do this inside ` start_The_Game() ` function under our last code : 

```c++
cout << "Please click enter to shuffle the cards \n";
    cin.get(); 								 /* place it here */
```
<details> 
 <summary>Click here to see view how your code should look so far : </summary>
	
  ```C++
     #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
       /* Declaration section: This will be used to Declare variables and Function */
       
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
     /* Definition Section: this section will be used to define all the Declare function*/

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

### Generating random cards for the player and the dealer

To shuffle the card is another way of drawing a random card (number) for the player and the Dealer, we will need a function to do that.

Inside the **Declaration Section** under the ` start_The_Game() ` function declare `Hit_Card1()` as a void function:

```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
void Hit_card1();									/* place it here */
```
We then going to define/give definition to this function under the *Definition section*. Inside the ` Hit_Card1() ` function we will use a special function that will help us generate random number, which use the ` <ctime> ` library, called ` srand() ` function, to get random number :
```C++
void Hit_card1() {
  srand(time(0));          			/* place it here */
 
 }
```
tips: For more about how the function of srand function check out it [this article about it](https://www.tutorialspoint.com/rand-and-srand-in-c-cplusplus).

Under that line we will then draw random number for the first and second card for the player that will be between 11 and 1, so call out the variable that store the first and second card number which is ` Pl_card1 ` and ` Pl_card2 `: 
```c++ 
srand(time(0));
Pl_card1 =                  			 /* place it here */
Pl_card2 =                 			  /* place it here */
```
we will then call the random function using ` rand() ` and instruct it to find the number between 11 and 1 using ` % ` (percentage sign) as to show between 11 and 1 including a plus sign : 
```c++ 
srand(time(0));
Pl_card1 = rand() % 11 + 1;         		  /* place it here */
Pl_card2 = rand() % 11 + 1;         		  /* place it here */
```
We now have a Random number stored inside card 1 and 2, now that we have that we need to keep both numbers inside a vector which is very similar to an array. so to do that, let declare a vector that store these integers under the **declaration section** and identify it as ` player_card `  : 

```c++
//****
 vector<int>player_card;						 /* place it here */
```
tips: find out here why I prefare to use [vector instead of array here](https://www.tutorialspoint.com/advantages-of-vector-over-the-array-in-cplusplus).

You can go head and declare a vector that will store the dealer card as ` dealer_card` as we will need it later:
```c++
//*****
 vector<int>player_card;
 vector<int>delaer_card;                       		 /* place it here */
```
Now let go back inside the ` Hit_card1() ` function,let take a copy of random cards of the player and place it inside the vector ` player_card `:

```c++ 
void Hit_card1(){
srand(time(0));
Pl_card1 = rand() % 11 + 1;
Pl_card2 = rand() % 11 + 1;
player_card = {Pl_card1,Pl_card2};      			  /* place it here */
}
```

Here the number from the variable ` Pl_card1 ` and ` Pl_card2 ` will be store as a list inside the vector ` player_card ` respectively using  bracket.
we then going to get the total player card(` Tl_Pl_card `)  by adding ` Pl_card1 ` to ` Pl_card2 ` :

```c++ 
srand(time(0));
Pl_card1 = rand() 11 % 1;
Pl_card2 = rand() % 11 + 1;
player_card = {Pl_card1,Pl_card2};
Tl_Pl_card = Pl_card1 + Pl_card2;          /* place it here */

```

Now we done drawing the card for the player, so let do the same for the dealer:

 + call ` Dl_card1 ` equal to random number between 11 and 1
 + call ` Dl_card2 ` equal to random number between 11 and 1
 + call ` Dl_card_cont ` equal to random number between 11 and 1( we will need this card at the of the workshop)
 + store the copy of ` Dl_card1 ` 1 and ` Dl_card2 ` inside the vector ` dealer_card ` respectively using bracket 
 + get the total card for the dealer using the dealer card (` Dl_card1 ` and ` Dl_card2 `) and store it inside ` Tl_Dl_card ` 
this should look like this :

```c++
Tl_Pl_card = Pl_card1 + Pl_card2;
Dl_card1 = rand() % 11 + 1                   		  /* place it here */
Dl_card2 = rand() % 11 + 1;                   		  /* place it here */
Dl_card_cont = rand()  % 11 + 1;			  /* place it here */
dealer_card = {Dl_card1,Dl_card2};          		   /* place it here */
Tl_Dl_card = Dl_card1 + Dl_card2;               	    /* place it here */

```
Now that done, let create a variable that will be used to inform us of the number of cards of the player, inside the **Declaration section** this variable will be an integer called ` num_of_PlayerCard ` :

```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
int num_of_playerCard;									/* place it here */
```

Now we will call this variable inside the ` Hit_card1() ` function and give it the value of two, to keep a record that the player has been given 2 cards:

```c++
 
Tl_Dl_card = Dl_card1 + Dl_card2;
num_of_playerCard = 2;           					/* place it here */
```

<details>
	<summary> Let see if your function looks like mine now</summary>
 
 ```C++
 void Hit_card1(){
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
 ```
</details>
	
woooh!!, we just finished drawing our first cards now let's call it on the screen!!

![a unicorn shoing his card to the other unicorn](https://cloud-djzhs5d55.vercel.app/0giphy-3.gif)

Go over ` start_The_Game() ` function and call ` Hit_card1() ` function after ` cin.get() ` function:

```C++
     cin.get();  
	 Hit_card1();                 /* place it here */
```
Now if the program runs, Hit_card1 will be called and the operation inside its definition will be executed. 
Now let show the player their card that is stored inside the vector ` player_card ` as a list : 
```c++ 
       Hit_card1();  
cout << player1 << ",You have been Dealt with [ " ;            /* place it here */
```

### Dipslaying the list of card in the vector

After we have called the player's name and say what card there have been given/dealt, we can now display the two-card the player has, so to do that, we will create  ` Diplay_card ` inside the **Declaration section** that will receive one parameter which will be a vector of the list of cards from the player or the dealer.

```c++
 void Display_Card(vector<int>list_of_card);
```

we will then go over the **Definition section** to give definition to the ` Display_card ` function. Inside the ` Display_card() ` function we will use  for loop to display each element in the list of card : 

```c++
void  Display_Card(vector<int>list_of_card){
   for (int i = 0; i < list_of_card.size(); i++){        
      cout << list_of_card[i] << " ";
    }
 }
```

In the for loop, we first initialize integer i to be equal to 0, this means it will start on the first index inside the vector which is at position 0, then while i is still smaller than the size(number of element) inside the list of card the integer i will keep increasing while we display the element at index(position) i plus space after each element.


Now that we have a definition, let go back inside the ` start_The_Game() ` function where we left, on a new line after our last line, we will call ` Display_Card ` function with the parameter ` player_card ` which is where the player's list of card numbers is stored : 

```c++
 cout << player1 << ",You have been Dealt with [ " ;
  Display_Card(player_card);                             /* place it here */
```

then we need to display the total of card number the player has which is inside ` Tl_Pl_card ` variable  so we will display(don't forget to tell the program to create a new line after) :
```c++ 
       Display_Card(player_card);
   cout << "] With have a total of : " << Tl_Pl_card << " \n\n";      				  /* place it here */
   
```

we then will only show one card which the Dealer has as the player is only allow to know only one card until he or the dealer bust, in this case only the first card of the dealer which is inside the variable ` Dl_card1 ` : 
```c++
 cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
 cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";    				   /* place it here */

```
Time for some thinking:

![A person thinking](https://cloud-m8wvf9mhv.vercel.app/0giphy-2.gif)
   
### checking for a poosible bust or blackjack 👀

[The rule](https://youtu.be/eyoh-Ku9TCI) of the game in this video tells us, if the player or the dealer has a total bigger than 21 then it a bust he then loose if the total is 21 then he got blackjack and it a win, else the game goes on. we, therefore,we need to check if one of the people in the game has a bust or a blackjack, we will then say if the total player card is bigger or equal to 21 or the total dealer card is bigger or equal to 21  then we must check for a bust or blackjack :

```C++
 cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";
    if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {                 /* place it here */
        
     }
```
Now we don't have a function that will check for a bust or a blackjack, so let declare it under **declaration section** and call it has ` Hit_Bust_Check() ` void function:
```C++
 /* Declaration section: This will be used to Declare variables and Function */ 
         void Hit_Bust_check();                /* place it here */
```
we then going to create a function which will display the message to the user if they have won or lose, we will then call these functions ` player_win() ` and ` player_loose() `. Don't worry if you don't understand these two function's purpose I will explain it soon ;) *wink*  : 

```c++
/* Declaration section: This will be used to declare variables and Function */ 
     void Hit_Bust_check();
     void player_win();                        /* place it here */
     void Player_Loose();                     /* place it here */
```

Now go over the **Definition section** and let give some definition to these function  : 
 First Hit_bust_check() function, As the rule of the game inform us :  
  + we first check if the total card of the player(` Tl_Pl_card `) is equal to 21 or the total card of dealer(` Tl_Dl_card `) is bigger than 21 then the player win so we call the function ` Player_win() `
  + else if the total card dealer(` Tl_Dl_card `) is equal to 21 or total card of player(` Tl_Pl_card ` ) is bigger than 21 then the player loose so we call the function ` player_loose ` 
  + else if the total card of the player is bigger than the total card of the dealer then the player loose, so we call the function ` player_loose() `
  + else if all this condition are not meet then the player win, so we call the function ` player_loose()` 
  
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

⚠️In other to understand fully what we just did, I recommend that you may watch the video from the beginning of this page that talk about how Blackjack game work [check it Here](https://youtu.be/eyoh-Ku9TCI).

#### What to do when the player win or loose 

Now that we did  the rule of  declaring a function, we have to *give definition* and *Call* the function; we here only called and declare the function ` player_win() ` and ` player_loose() `, so let define them :

First player_win function, so what do we want when the player wins? 
  + first,, we want to display the player card and the dealer card with their total
  + then write out that the player has won a=while the dealer has loose 
  + the ask if the player will like to restart the game or to quit the game
 So let start to displaying the player card with their total and the dealer card with their total (don't forget to use ` display_playercard() ` to display a person's card numbers :
 
 ```c++
 void player_win() {
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
  #### Would Restarting the game or Quiting the game
  
 Now to get the answer from the player we will declare a new String variable that can store the answer from the player and call it ` answ ` inside the **Declaration section** :
 
 ```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
 string answ;         				                                /* place it here */
 ``` 
 
  then we will need a new function that will check if the player would like to restart or quit playing the game, we will name this function ` Continue_Playing() `
 ```c++
 /* Declaration section: This will be used to Declare variables and Function */ 
 string answ;
 void Continue_Playing();                                              /* place it here */
 
 ```
 Now let go back inside the ` Player_win() ` function and get the line from the player then store the answer inside the ` answ ` variable :
 
 ```C++ 
  cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";
  getline(cin,answ);                                                    /* place it here */
 
 ```
 then call the function ` Continue_Playing() ` which we will define it soon.

```c++
 getline(cin,answ);
 Continue_Playing();                                /* place it here */
 
 ```
 inside the **Definition section** let start to give definition to the function ` Continue_playing() ` :
 ```c++
 Continue_Playing() {
  
  }
  
``` 
now we just asked the player if they would like to restart playing or to quite playing we will write small program that check the answer from the player :
 + if the answer from the player is " 1 " then we will call the game to start using the function ` Start_The_Game() `
 + else the player wants to stop playing there we will just thank the player for playing and do nothing else.
 
```c++
  void Continue_Playing() { 
   if (answ == "1") {
      start_The_Game();                                      /*  this function will start again the game from the beginning  */
   }  else {
      cout << "\n\nThanks For playing\n\n";                /* this message will be display and nothing else will happen the program will end */
   }
}

 ```
 Well done, let see your progress so far because we seem to be going from one function to the other while not finishing the other function :
 
 <details>
    <summary> Check out your progress here</summary>
	
```C++
     #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
     /* Declaration section: This will be used to Declare variables and Function */ 
     
          void start_The_Game();  
          void Hit_card1();
	  void Display_Card(vector<int>list_of_card);
	  void Hit_Bust_check();
	  void player_win();
	  void Player_Loose(); 
	  void Continue_Playing()
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
       /* Definition Section: this section will be used to Define all the Declare function*/
       
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
      Dl_card1 = rand() % 11 + 1;
      Dl_card2 = rand()  % 11 + 1;
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
           cout  << "Would you like '1' Restart or '2' Quit PLAYING\n";
             getline(cin,answ);
            Continue_Playing();       
          }
      void Continue_Playing() { 
            if (answ == "1") {
             start_The_Game(); //then continue
             } else {
                cout << "\n\nThanks For playing\n\n";//then quite
              }
        }
  ```
      
</details>

That a long way we have come; Now lets write code for the function ` player_loose ` when the player lose:
  + First we will display the player card with total player card and the dealer card with total dealer card
  + The write out that the player has lose the game while the winner wins the game
  + then ask the player if the would like to restart or quit the game; remember to store the answer inside the ` answ ` variable 
  + Lastly call out ` Continue_playing ` function to check if the player would like to restart or quit the game.
 THen your code should look similar to this :
 
 ```C++ 
 void Player_Loose(){
      cout << "The Player hand : " ;
           Display_Card(player_card);
      cout << " with a total of : " << Tl_Pl_card << "\n\n";
      
      cout <<"Dealer Hand : "; 
            Display_Card(dealer_card);
      cout << " with a total of : " << Tl_Dl_card << "\n\n";
      cout << "The Dealer Win!!🔺 " << player1 << " Looses🔻 \n\n";  
      cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";
      getline(cin,answ);
      Continue_Playing();
 }
 
 ```
 
 </details>

#### The game continue

 Now that we have checked if the player has a bust or a blackjack, so if both conditions are found to be false then we should continue with the game.
 
 Going back inside the ` stat_The_Game() ` function, we should add an else statement that will ask the player if he would like to Hit/Bust/stay. for each of this condition we will need to write an function about it : 
 
 ```C++
 if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
       Hit_Bust_check();
     } else {                                 					  /* place it here */
            cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
	    
     }
```

Now we ask we ask the user for input we will use getline function and store the answer inside the answ variable: 

```C++
else {                                  
            cout << "Would you like to '1' Hit or '2' Bust or '3' stay \n";
	   getline(cin, answ);                                                /* place it here */
	   
     }
```

we will then declare a function inside the **Declaration section** that will check if the player chooses 1 for Hit, 2 for Bust, and 3 for stay called  ` check_Hit_Bust_Stay() ` function :

```C++
/* Declaration section: This will be used to Declare variables and Function */ 

  void check_Hit_Bust_Stay();             			         /* place it here */

```

we then going to call this function inside the else statement of the ` start_The_Game() ` function :

```C++
else {                                  
           cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
	    getline(cin, answ);                                                
	   check_Hit_Bust_Stay();                                              /* place it here */
     }
   
```
<details>
 <summary>Now we done with star_The_Game() function check out your code and compare to mine here</summary>
	 
```C++
void start_The_Game() {
    cout << "\n           Blackjack Game      \n";
    cout << "\n++++++++++++++++++++++++++++++++\n";
    cout << "\n Welcome to the game.\n";
    cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
    cout << "Please click enter to shuffle the cards \n";
       cin.get();            
        Hit_card1();                         // draw  card for the dealer and the player 
    cout << player1 << ",You have been Dealt with [ " ;
        Display_Card(player_card);
    cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
    cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";

    if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
      } else {
            cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
            getline(cin, answ);
            check_Hit_Bust_Stay();
     }
}

```

</details>

### Did the player Hit or bust?

Then let define the function ` check_Hit_Bust_Stay() ` inside the **Definition section**.

 + we will check first if the answer is equal to Hit which means PLayer ask for another card to be drawn, therefore we must a function that will draw another random number which will be store inside the variable ` Pl_card_cont ` (player card continues) that store any card that the player will ask for.
	
```C++
 void check_Hit_Bust_Stay(){
   if (answ == "1") {
	
	}
     }
```

#### Drawing card for the player continuously

 Now to draw a new card we can declare a new function inside **Declaration section** that will perform that task called the ` Hit_Player_card() ` function:
 
 ```C++
 /* Declaration section: This will be used to Declare variables and Function */ 
void Hit_Player_card();                                                      /* place it here */

 ```
 we then should give definition to this function inside **Definition Section** .
 we will start of by calling the special function from ` <time> ` library called ` srand() ` function :
 
 ```C++
  void Hit_Player_card() {
     srand(time(0));                       /* place it here */
  }
 ```
 
 Now we will call the player card continue as we want to draw a card for the player and give it value of random number between 11 and 1 : 
 
 ```C++
   srand(time(0));    
   Pl_card_cont = rand() 11 % 1;
   
 ```
 
 Now we got to add this card inside the list of card for the player, to do that we use a special object use to add an element inside a vector called ` .push_back() ` including the element you want to add : 
 
 ```C++
 Pl_card_cont = rand() 11 % 1;
 player_card.push_back(Pl_card_cont);				/* place it here */
 
 ```
 
 What push back object does it add the element at the end of the list inside the vector. 
 
 tips: You want to learn more method to add elements inside a vector [check it out here](https://www.codegrepper.com/code-examples/cpp/adding+element+in+vector+c%2B%2B).
 
Now we also need to add this number inside the player card totals, to do that we will say ` Tl_Pl_card ` plus equal to ` Pl_card_cont ` this will automatically add it to the total :
 
 ```C++
  player_card.push_back(Pl_card_cont);
 Tl_Pl_card += Pl_card_cont;						/* place it here */
 
 ```
 
finally remember that we a variable that store the number of cards for the player, so we let increment that number by 1

```C++
 Tl_Pl_card += Pl_card_cont;	
 num_of_playerCard++;        						/* place it here */

```
<details>
	<summary>  Now you your Hit_player_card() function should look like this : </summary>
	
```c++
void Hit_Player_card() {
    srand(time(0));
    Pl_card_cont = rand() % 11 + 1;
    player_card.push_back(Pl_card_cont);
     Tl_Pl_card += Pl_card_cont;
     num_of_playerCard++;
}
```
</details>

Go back inside the ` check_Hit_Bust_Stay() ` function, then if the player's answer is 1 then we should Draw a card for the player by calling ` Hit_Player_card() ` function :

```C++
if (answ == "1") {
	Hit_Player_card();                  /* place it here */
  }

```
Then we should tell the Player  what card they have been given,that is store inside ` Pl_card_cont ` variable :
```C++
if (answ == "1") {
        Hit_Player_card();
     cout << "You have Have been dealt a [" << Pl_card_cont;				/* place it here */
     cout << "] With have a total of : " << Tl_Pl_card << "\n\n";			/* place it here */
  }
  
```

Now that the Player has a new card we need to check again if the player card total is bigger or equal to 21 or the dealer's card total is bigger or equal to 21.

```c++
cout << "] With have a total of : " << Tl_Pl_card << "\n\n";
   if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21){				/* place it here */
   
   }
```
Then if one of the total meets this condition we should call the ` Hit_Bust_check ` function which checks if the player has won or lost.
```C++
 if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21){				
       Hit_Bust_check();                       			/* place it here */
   }
```
Now that when is that condition is not meet, we should then again ask the player if they would like to Hit/Bust/Stay, then get the line from the user and store it inside the answer variable ` answ ` while again you call this same function ` Hit_Bust_Stay() ` which will verify the answer from the player:

```C++
if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
     } else {										/* place it here */
     cout << "would you like to '1' Hit or '2' bust or '3' stay\n";                 	/* place it here */
     getline(cin, answ);								/* place it here */
     check_Hit_Bust_Stay();								/* place it here */
     }
```
Let say for example the player choose 2, Bust, then player is saying that they are done taking more card and would like to check with the dealer card if who has won, therefore we will call the function ` Hit_Bust_check() ` :
```C++
if (answ == "1"){
     Hit_Player_card();        
     cout << "You have Have been dealt a [" << Pl_card_cont;
     cout << "] With have a total of : " << Tl_Pl_card << "\n\n";
     
     if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
     } else {
     cout << "would you like to '1' Hit or '2' bust or '3' stay\n";
     getline(cin, answ);
     check_Hit_Bust_Stay();
     }
   } else if (answ == "2") {								/* place it here */
        Hit_Bust_check();								/* place it here */
   }
   
``` 

### the player give up picking up more card 

what if the player says Stay, which means the player is done taking more card and rather as the dealer to take a card up until the dealer's card is bigger than 16 :

  If you get confused about where we got this rule, check out the [Video](https://youtu.be/eyoh-Ku9TCI) that explains the rule of this game to understand the game better.
 Now as I say before we will need to create a function that performs the task when the player says stay, this function we can simply call it ` Player_Stay() `        function :
 
     ```C++
     /* Declaration section: This will be used to Declare variables and Function */ 
     void Player_Stay();
     ```
Now let give definition, first what would the FUnction stay do :

 + As the [video](https://youtu.be/eyoh-Ku9TCI) explains, when the dealer pulls back his card or says stay, the dealer should get a new card while the dealer total is less than 16.
+ now when the dealer card total is bigger than 16,  we should then check if the dealer as a bust then the player will win
+ if the dealer does not have a bust, then we will check if the player card is bigger than the dealer's card and smaller than 21 then the player win
+ else the player lose and the dealer win

```C++
void Player_Stay() {
   while (Tl_Dl_card < 16) {
      
   }
 }
   
```
Now we need to create a function that gives the dealer a new card similar to the ` Hit_player_card ` function which gives a new card to the player. This function we will instead call it ` Hit_Dealer_card() ` :

```C++
/* Declaration section: This will be used to Declare variables and Function */ 
void Hit_Dealer_card();
```
we will then give a definition similar to  ` Hit_Player_card() ` function:

```C++ 
void Hit_Dealer_card() {
    srand(time(0));
    Dl_card_cont = rand() % 11 + 1;
    dealer_card.push_back(Dl_card_cont);
     Tl_Dl_card += Dl_card_cont;
 }
 
```

For reference if you can't remember ` Hit_Player_card() ` or ` Hit_Dealer_card() ` does check out how we [draw the card for the player continuesly](#### Drawing card for the player continuously).

+ Now that we done that we need to call out ` Hit_Dealer card ` inside ` Player_Stay() ` function when while loop is running :

```C++
void Player_Stay() {
   while (Tl_Dl_card < 16) {
      Hit_Dealer_card(); 				/* place it here */
   }
 }
```
 + let write an if statement that check if the total dealer card is bigger than 21 then it a bust for the dealer and the play win :
 
```C++
while (Tl_Dl_card < 16) {
      Hit_Dealer_card(); 				
   }
    if ( Tl_Dl_card > 21) {				/* place it here */
        player_win();
   }
```
 + So if the dealer card is not a bust then if the player card is bigger than the dealer card and the player card is smaller than 21 then the player win
 
```C++
   if ( Tl_Dl_card > 21) {
        player_win();
   } else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {						
        player_win();								/* place it here */
   }

```

Now if now none of the condition is met, then the player lose, so we call ` player_loose() ` function :

```C++
else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {
        player_win();
   } else {
      player_loose()
   }
```
<details>
<summary>finally you final code for the function Hit_Dealer_Card() would look like this : </summary>
	
 ```C++
 void Player_Stay() {
   while (Tl_Dl_card < 16) {
      Hit_Dealer_card();
   }
   if ( Tl_Dl_card > 21) {
        player_win();
   } else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21){
        player_win();
   }  else {
       player_loose();
   }
}
```
 
</details>

Let go back to the function ` check_Hit_Bust_Stay() ` function and write the last else statement that calls out the ` Player_Stay() ` function.

```C++
 if (answ == "1"){
     Hit_Player_card();         //draw the player car
     cout << "You have Have been dealt a [" << Pl_card_cont;
     cout << "] With have a total of : " << Tl_Pl_card << "\n\n";
     
     if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
     } else {
     cout << "would you like to '1' Hit or '2' bust or '3' stay\n";
     getline(cin, answ);
     check_Hit_Bust_Stay();
     }
   } else if (answ == "2") {
        Hit_Bust_check();
   } else {
     Player_Stay();						/* place it here */
   }
```
<details>
<summary>Well done!!! with have just finished with the function  check_Hit_Bust_Stay()  , now let see what we have</summary>
	
```C++
void check_Hit_Bust_Stay(){
   if (answ == "1"){
     Hit_Player_card();         
     cout << "You have Have been dealt a [" << Pl_card_cont;
     cout << "] With have a total of : " << Tl_Pl_card << "\n\n";
     
     if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
     } else {
     cout << "would you like to '1' Hit or '2' bust or '3' stay\n";
     getline(cin, answ);
       Check_Player_3card();
     check_Hit_Bust_Stay();
     }
   } else if (answ == "2") {
        Hit_Bust_check();
   } else {
     Player_Stay();
   }
}
```

</details>

<details>
<summary>You kind be thinking well how far we are Now, What I can say you can run your code and compare my code to yours</summary>

```C++
   #include <iostream>
   #include <ctime>
   #include <vector>
     using namespace std;
     /* Declaration section: This will be used to Declare variables and Function */ 
          void start_The_Game();  
          void Hit_card1();
	  void Display_Card(vector<int>list_of_card);
	  void Hit_Bust_check();
	  void player_win();
	  void Continue_Playing();
	  void Player_Loose(); 
	  void check_Hit_Bust_Stay(); 
	  void Hit_Player_card();  
	  void Player_Stay();
	  void Hit_Dealer_card();
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
       /* Definition Section: this section will be used to Give definition to all the Declare function*/
       
     void start_The_Game(){
        cout << "\n           Blackjack Game      \n";
        cout << "\n++++++++++++++++++++++++++++++++\n";
        cout << "\n Welcome to the game.\n";
        cout << "\n Player of this round is: " << player1 << "\n\n"; 
        cout << "Please click enter to shuffle the cards \n";

    cin.get();  
            Hit_card1();                        
        cout << player1 << ",You have been Dealt with [ " ;
               Display_Card(player_card);
        cout << "] With have a total of : " << Tl_Pl_card << " \n\n";
        cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";

         if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
               Hit_Bust_check();
              } else {                                   			
           cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
           getline(cin, answ);
	   check_Hit_Bust_Stay();
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
           cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";
             getline(cin,answ);
            Continue_Playing();       
          }
	  void Continue_Playing() { 
             if (answ == "1") {
               start_The_Game(); //then continue
               } else {
                    cout << "\n\nThanks For playing\n\n";//then quite
                 }
	    }
	void Player_Loose(){
          cout << "The Player hand : " ;
          Display_Card(player_card);
          cout << " with a total of : " << Tl_Pl_card << "\n\n";
     
           cout <<"Dealer Hand : "; 
           Display_Card(dealer_card);
           cout << " with a total of : " << Tl_Dl_card << "\n\n";
           cout << "The Dealer Win!!🔺 " << player1 << " Looses🔻 \n\n";  
           cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";
           getline(cin,answ);
           Continue_Playing();
          }
	  void check_Hit_Bust_Stay(){
             if (answ == "1") {
	         Hit_Player_card();
		 cout << "You have Have been dealt a [" << Pl_card_cont;				
                 cout << "] With have a total of : " << Tl_Pl_card << "\n\n";
		 if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
                           Hit_Bust_check();
                    } else {										
                          cout << "would you like to '1' Hit or '2' bust or '3' stay\n";                 	
                          getline(cin, answ);								
                           check_Hit_Bust_Stay();								 
                         }
	         }  else if (answ == "2") {								
                         Hit_Bust_check();								
                       } else {
    			    Player_Stay();						
  			   }
             }
	   void Hit_Player_card() {
              srand(time(0));      
	      Pl_card_cont = rand() % 11 + 1;
             player_card.push_back(Pl_card_cont);
             Tl_Pl_card += Pl_card_cont;
               num_of_playerCard++;
             }
	     void Player_Stay() {
                  while (Tl_Dl_card < 16) {
		       Hit_Dealer_card()
                     }
		     if ( Tl_Dl_card > 21) {				
      			  player_win();
 			  } else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {
       					 player_win();
  				    } else {
    					  player_loose()
  					 }	
                   }

              void Hit_Dealer_card() {
                srand(time(0));
              Dl_card_cont = rand() % 11 + 1;
             dealer_card.push_back(Dl_card_cont);
             Tl_Dl_card += Dl_card_cont;
            }          
	    
```

</details>

And you will see that we are done with almost everything, Why did I say almost everything? because when you try to answer '3' stay, you might  get some weird dealer card number showing  respectively or the answer will be kind of contradiction to what the rule of the game is. 
How many lines of code is the last function again? five, so are we done? let's find out.

We will declare our last function as ` Check_player_3card() ` because the game allows the dealer to have 3 cards if the player has 3 cards or more and the player never asks for a stay, then we should give the dealer his third card :

```C++
/* Declaration section: This will be used to Declare variables and Function */ 
void Check_Player_3card();                      			 /* place it here */
```
Now let define this function, but what will it do :
 + So we will check if the number of card of the player is bigger or equal to 3
 + if it is bigger or equal to 3 then we will say the total of the dealer card plus the one dealer card that we call inside ` Hit_Card1 ` in the beginning but never had placed it inside the dealer the total card or the list card for the dealer.
 + so now we will add it to the total of the dealer card and add it inside the list of the dealer card
 + so because this function will be called many places and we want to call it one we will set the Number of cards for the dealer to 0, so this if statement won't run if this function is called again.
 
 ```C++
 void Check_Player_3card(){
     if (num_of_playerCard >= 3){
        Tl_Dl_card += Dl_card_cont;
        dealer_card.push_back(Dl_card_cont);
        num_of_playerCard = 0;
     }   
}
```
Last but not least let call this function :
 + Inside the ` Player_Stay() ` function before the while loop call ` Check_player_3card() ` function :
   ```c++
     Check_Player_3card(); 						/* place it here */
    while (Tl_Dl_card < 16) {
      Hit_Dealer_card();
      }
   }
   ```
 + Inside ` player_win() `  function call out  ` Check_player_3card() ` function :
    ```c++
      void player_win(){
          cout << "The Player hand : ";
          Display_Card(player_card);
          cout << " with a total of : " << Tl_Pl_card << "\n\n";
                   Check_Player_3card();						/* place it here */
          cout <<"Dealer Hand : " ;
          Display_Card(dealer_card);
          cout << " with a total of : " << Tl_Dl_card << "\n\n";
          cout << player1 << " Win🔺 Congrats!! \n\n";
          cout  << "Would you like '1' Continue  or '2' Quit PLAYING\n";
          getline(cin,answ);
          Continue_Playing();       
        }
    ```
 + Inside ` player_loose() `  function call out  ` Check_player_3card() ` function : 
     ```c++
     void player_loose(){
            cout << "The Player hand : " ;
            Display_Card(player_card);
           cout << " with a total of : " << Tl_Pl_card << "\n\n";
                  Check_Player_3card();							/* place it here */
           cout <<"Dealer Hand : "; 
           Display_Card(dealer_card);
           cout << " with a total of : " << Tl_Dl_card << "\n\n";
           cout << "The Dealer Win!!🔺 " << player1 << " Looses🔻 \n\n";
            cout  << "Would you like \'1\' Restart  or '2' Quit PLAYING\n";
            getline(cin,answ);
           Continue_Playing();
	}     
     ```
   + and last inside the ` check_Hit_Bust_Stay() ` function inside the first else statement
   
       ```c++
       if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
              Hit_Bust_check();
              } else {
             cout << "would you like to '1' Hit or '2' bust or '3' stay\n";
               getline(cin, answ);
           Check_Player_3card(); 							/* place it here */
             check_Hit_Bust_Stay();
          }
	```
Well done you have just you now have level up, you can now run your game and see how your game really looks likes, you just become a master card player 
 
 [![giving high five to a person](https://cloud-fcjpqc2js.vercel.app/0giphy.gif)
 
# Challenge 
Now go on and show everyone what you have made. Aren't them impress about this or you too,  well I have something store for you to try out :
 +  Make the game to  be able to take bet from the player which will reward the player coins if the won check out again that video about how the game work:
   struggling? try check out [my code](), I have added some function that accept number(money) from the user and double the player's bet if they win, or decrease their bet amount to the account if they loose
 + Can you make a new option that allow the player to double they amount before the play say hit or bust, someone just might wwant more money you know, or if the play chnage their mind and would like to decreae their bet amount, their could just slit the bet amount. Can you do this to your game 
 + What if I keep forgoting how much might score from the dealer, create and variable that keep record of the number of ein of the player and the dealer then after the player has win or loose and finish the game, so he can see his score compre to the dealer.
 + Add Multiple players inside the game, so more than 3 people can play together.

