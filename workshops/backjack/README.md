---
name: 'Black jackgame'
description: 'Create your own blackjack game using C++'
author: '@chrisrama'
img: 'https://cloud-qtjz7o7jw.vercel.app/0screenshot_2020-12-30_at_00.57.54.png'
---

# Blackjack

Have you ever thought of creating a simple and smart Blackjack game using C++, well you have come to the right place. In this workshop, you will learn to create your own blackjack game while exploring how functions (especially void function) are used in C++ and why they are important.
 
 
[Live demo of how the game works](https://cloud-r2zxs3jci.vercel.app/0demo_live.gif)
 
 
Check out [the final code here](https://repl.it/@chrisrama/Blackjackgame).
 
## Getting started
 
This is a friendly workshop for beginner and advanced C++ programmers, as it will help you practice and understand how functions are used and manipulated in C++.
 
If you never play the blackjack game at all, or you want to know how to play it, don't worry, I have a [short video](https://youtu.be/eyoh-Ku9TCI) for you that explain exactly all the rules about the game. 
 
 
 + NOTE: it is very important to watch this video when doing this workshop, as the workshop is based entirely on the video’s explanation.
 
 
We are going to be using [repl.it](https://repl.it/) online IDE to create our game. If you don't have an account yet, go over to [repl.it](https://repl.it/signup) sign up page and create an account for yourself. 
 
## The first step
 
Now before we start, if you have created a new C++ project you will see that Repl.it has already prepared the things we need to get started but for this workshop, we will need some extra libraries, so I have created a project with everything you need to get started with, then you will need to fork to the project.
 
 + [Click here to view the project. ](https://repl.it/@chrisrama/Blackjack-Game) 
 
I will explain to you now a bit about what we have in the project so far. Let’s start with the header files.

 ```c++ 
#include <iostream>
#include <ctime>
#include <vector>
using namespace std;
```
+ Inside the project, I have included the c time library (` <ctime> ` ), this header file will be called when we need to generate random numbers which will be the card numbers for the players. For more about how to use the this` library, you can found it [Here](http://www.cplusplus.com/reference/ctime/)
+ I also called the vector library (` <vector> `), because we will be using vectors instead of arrays to keep all the player and the dealer’s cards.
+ We are not going to be using ` std:: ` to declare a string variable or output and input messages, instead we will be using ` using namespace std; ` to inform the program that we won't be using ` std:: ` rather a namespace.

 
 ```c++
 /* Declaration section: this will be used to declare variables and functions */ 

  void start_The_Game();                   /* declare start_The_Game function */
    int Pl_card1, Pl_card2, Pl_card_cont;      /* used to stored the card number for the player*/
    int Dl_card1, Dl_card2, Dl_card_cont;      /* used to stored the card number for the dealer*/
    int Tl_Pl_card,Tl_Dl_card;                 /*use to store the total number of card or player and dealer*/
```
 + Inside the **declaration section**, will be the section we will use to declare variables and functions. In this case, I have declared the first function ` start_The_Game() ` that will be called when we need to start the game. Don't worry if you don't see the use now but you will later.
 
+ For the first integer (short for int) variable declare with multiple variables with it, so when the game starts the player and the dealer (computer) will both be handed 2 cards, now we declare ` player card number one ` short for ` Pl_card1 ` that will be used to store the first card number of the player,  we use the `  _  ` (underscore sign) to show that there is a space in between; then ` player card number 2 ` short for ` Pl_card2 ` is used to store the second card.  

We then have ` Pl_card_cont ` or ` player card continuous ` which will be used to store the remaining card that will be drawn for the player as continuously.

+ We will then use the same method we use to declare the first cards for the player, but instead of ` Pl ` for ` Player `, we use ` Dl ` for ` Dealer `. After the dealer got those 2 cards, he will then be given multiple cards that will be represented by the ` Dl_card_cont ` variable.

+ Finally, we need a variable that will store the player's total card and the dealer's total card, which is used to find who has a blackjack. For ` Tl_Pl_card ` stands for ` total player card` and ` Tl_Dl_card ` stands for ` total dealer card `.

```c++
int main() {
   /*introduction to the game */
   cout << "\n           Blackjack Game      \n";                 /* the title of the game */
   cout << "\n++++++++++++++++++++++++++++++++\n";                /* line using ++ (plus sign) to separate the title from the body */
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the player to write their name */

}
```
Inside the main function is where all our code will run. So before the game starts we need to print the introduction to the game, so we will start by printing out the title of the game, plus a line underneath it using plus signs. 

```c++
  cout << "\n           Blackjack Game      \n";      /*the title of the game */
  cout << "\n++++++++++++++++++++++++++++++++\n";    /* line using ++ (plus sign) to separate the title from the body */
```
 We then use the `  \n  `(newline character) to tell the program to display a new line, either before or after the written words. For more about [creating a new line read it here](https://www.w3schools.com/cpp/cpp_new_lines.asp).
 
 We then welcome the player to the game followed by a new line using the ` \n `(newline character)  and ask if they should write their name.
 ```c++ 
   cout << "\n Welcome to the game.\n Enter your Name: \n";       /*instruct the player to write their name */

 ```
 What I call the **definition section** is where we will define every function declared, example we have the ` start_the_Game() ` function declared, we then going to write the definition and inside the body.

 
 ```c++
/* definition section: this section will be used to define all the declared function*/

void start_The_Game() {

   /* definition goes here */ 
    
}

```
 Now that you have everything set up, let’s start some hacking!!
 
 ![a cat gif typing a computer fast](https://cloud-c5sjja2wx.vercel.app/0giphy.gif)
 
 ## Getting started with the main function
 

 Now inside the **declaration section**, declare a string variable ` player1 `under the integer variable which will be used to stored the first player's name: 
 
 ```c++       
 
string player1;          		      /* this how it should look */

 ```
Inside the main function, we have asked the player for their name, let's then take their name using the ` getline() ` function which will take the whole line as the input, as we want the player's full name.

Inside  getline function we want to get the input and stored it inside ` player1 `, so we will use  ` cin `to get input and ` player1 ` together as ` getline(cin,player1) ` : 

 ```c++     
 
   getline(cin,player1);                                             /* this should be written under the last line inside the main function */

```

Below getline() function call ` start_The_Game() ` function that will be used to start the game. 

 ```c++

  start_The_Game();                                                  /* will be used to start the game after the player wrote their name */

```
Note:  it important that if you *declare* a function, you should then *give Definition to* and *Call* that function.

Right now ` start_The Game ` function cannot perform a task, so let give it a definition.


## Starting the game

Let now work inside the ` star_The_Game() ` function, inside this function, lets display again the introduction of the game but this time including the player's name :

```C++
/* Definition section: this section will be used to define all declared function*/

void start_The_Game() {  
   cout << "\n           Blackjack Game      \n";					 /* again print out the title to the game */
   cout << "\n++++++++++++++++++++++++++++++++\n";					 /* print out a line using plus sign */
   cout << "\n Welcome to the game.\n";							 /* print a welcome message */
   cout << "\n Player of this round is: " << player1 << "\n\n"; 			 /* print the name of player */
  }
 ``` 
In the last line, we print out the name of the player, which was stored inside the ` player1 ` variable when we asked for the input. In C++, the program will never write a new line for us, so we will print two new lines for ourselves using two ` \n `(newline character) after the player's name.
 
Note: In C++ when you write your code you are responsible for everything, you control everything that is displayed and happening, and so you need to pay attention to every little detail in the code.
 
As fast as C++ is, we want to take a break to show the player that the game has started instead of just printing out things too fast that the player won't understand are there in the game. 
We will then print the message ` "Please click enter to shuffle the card" ` followed by a new line using ` \n `(newline character).

```c++
cout << "Please click enter to shuffle the cards \n";                 /* so the player can be drawn with card together with the dealer */
```

To then wait for the player to click enter we should use `cin.get()` function to do pause the game until the enter button is click, we will write this under the last message : 

```c++
    cin.get(); 								 /* take a pause until enter button is click */
```

<details> 
 <summary>That was quick, let see how your code should look so far, click here to view the code </summary>
	
  ```C++
     #include <iostream>
     #include <ctime>
     #include <vector>
     using namespace std;
       /* Declaration section: This will be used to declare variables and function */
       
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

Now, this is the interesting part, we will need to draw/shuffle random cards (number) to the player and the dealer, we should then declare a function to do that.

Inside the **declaration section** under the ` start_The_Game() ` function declare ` Hit_Card1() ` as a void function:

```c++
void Hit_card1();								/* will be used to generate random card for the dealer and the player  */

```
We then should define/give definition to this function below in the **definition section**. Inside the ` Hit_Card1() ` function we will use a special function that will help us generate random numbers, which use the ` <ctime> ` library. The function is called  ` srand() ` :

```C++
void Hit_card1() {
  srand(time(0));          			/* generate random number using ctime library */
 }
```

Tips: For more about how the function of srand function do check out it [this article about it](https://www.tutorialspoint.com/rand-and-srand-in-c-cplusplus).

We will need to specify between what should the random number be generated and where the number be stored, so call out the variable that stores the first and second card number for the player which is ` Pl_card1 ` and ` Pl_card2 `. 

Now we can use the ` srand() ` function as ` rand() ` and instruct it to generate a number between 11 and 1(which is the card number) then divide it by 11  plus 1 to say in between. We use here instead the ` % ` (percentage sign) as our division sign : 

```c++ 
Pl_card1 = rand() % 11 + 1;         		  /* a random number between 11 and 1 will be store inside the player card one */
Pl_card2 = rand() % 11 + 1;         		  /* same for the player card two */
```
We now have a random number stored inside cards 1 and 2, we then need to have a copy of both numbers inside a vector which is very similar to an array.  So to do that, declare a vector that can receive only integers under the **declaration section** and identify it as ` player_card `  : 

```c++
 vector<int>player_card;						 /* this vector will be used to have a copy of all the card the player has */
```
Tips: you want to know why I prefer to use [vector instead of arrays here](https://www.tutorialspoint.com/advantages-of-vector-over-the-array-in-cplusplus) check out this article.

You can go ahead and declare a vector that will store the dealer card as ` dealer_card` which we will need it also:

```c++
 vector<int>dealer_card;                       		 /* declare under the player's vector and same the same purpose as the player card vector */
```
Now let go back inside the ` Hit_card1() ` function, we'll take the copy of random card numbers of the player and place it inside the vector ` player_card `:

```c++ 
player_card = {Pl_card1,Pl_card2};      			  /* a copy the card one and two of the player is kept inside the vector as list */

```

The random number from the variable ` Pl_card1 ` and ` Pl_card2 ` will be copied as a list inside the vector ` player_card ` respectively using a bracket.

We then will need to get the total card of the player(` Tl_Pl_card `)  by adding ` Pl_card1 ` to ` Pl_card2 ` :

```c++ 
Tl_Pl_card = Pl_card1 + Pl_card2;          /* this sum is place inside the Tl_Pl_card that will be use see if the layer has a bust or a blackjack */

```
<details>
	<summary>By now your  Hit_card1  function should look like this</summary>
	
	```c++
	void Hit_card1(){
          srand(time(0));
          Pl_card1 = rand() % 11 + 1;         
          Pl_card2 = rand()  % 11 + 1;  
          player_card = {Pl_card1,Pl_card2};
          Tl_Pl_card = Pl_card1 + Pl_card2;
  
           }
	```
	
</details>

Now we have drawn the card to the player, so let do the same for the dealer:

 + Call ` Dl_card1 ` equal to random number between 11 and 1,
 + Call ` Dl_card2 ` equal to random number between 11 and 1,
 + Call ` Dl_card_cont ` equal to a random number between 11 and 1( we will need this card at the of the workshop),
 + Store the copy of ` Dl_card1 ` and ` Dl_card2 ` inside the vector ` dealer_card ` respectively using bracket,
 + Get the total card for the dealer using the dealer card (` Dl_card1 ` and ` Dl_card2 `) and store it inside ` Tl_Dl_card `.
 
That you would then get this :

```c++

Dl_card1 = rand() % 11 + 1                   		  /*  get a random number between 11 and 1 for the dealer card 1*/
Dl_card2 = rand() % 11 + 1;                   		  /* get a random number between 11 and 1 for the dealer card 2 */
Dl_card_cont = rand()  % 11 + 1;			  /* get a random number between 11 and 1 for the dealer card 3 */
dealer_card = {Dl_card1,Dl_card2};          		   /* a copy the card one and two for the dealer is kept inside the vector as list */
Tl_Dl_card = Dl_card1 + Dl_card2;               	    /* store the sum of the first and the second card */

```
Now let create a variable that will be used to keep a record of the number of cards the player has; Inside the **declaration section** this variable will be an integer called ` num_of_PlayerCard ` :

```c++
int num_of_playerCard;									/* the number of cards the player will have */

```

Now we will call this variable inside the ` Hit_card1() ` function and give it the value of two, to keep a record that the player has been given 2 cards:

```c++
num_of_playerCard = 2;           					/* Now the player has 2 card */

```

<details>
	<summary> Let’s see if your function looks like mine now</summary>
 
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
	
Wooo!!, we just finished drawing our first cards now let's show the player what they have!!


![a unicorn showing his card to the other unicorn](https://cloud-djzhs5d55.vercel.app/0giphy-3.gif)


Go back  inside ` start_The_Game() ` function and call ` Hit_card1() ` function after ` cin.get() ` function:

```C++
    Hit_card1();                 /* by calling this function we then execute that everything inside its definition  can now run */
```

Now if the program runs, Hit_card1 will be called and the operation inside its definition will be executed. 

### Displaying the card of list from the vector


Now let print out to the player their card numbers  that is stored inside the vector ` player_card ` as a list : 
```c++  
cout << player1 << “, You have been dealt with [ " ;            /* message before the player's card */

```

 We should now print the two-card the player has, so to do that, we will create a ` Display_card ` void function inside the **declaration section** that will receive one parameter, as a vector of the list of cards from the player or the dealer.

```c++
 void Display_Card(vector<int>list_of_card);					
```

We will then go over to the **definition section** to define the ` Display_card ` function. Inside the ` Display_card() ` function we will use the for loop to print out each element in the list of card : 

```c++
void  Display_Card(vector<int>list_of_card){
   for (int i = 0; i < list_of_card.size(); i++){        
      cout << list_of_card[i] << " ";
    }
 }
```

 + In the for loop, we first initialise integer i to be equal to i.
 +  This means it will start at the first index inside the vector which is at position 0.
 +  Then while i is still smaller than the size of the list(number of elements inside the list) i will increment while we print the element at index(position) i plus space after each element.


Now that we have a definition, let go back inside the ` start_The_Game() ` function, on a new line, call ` Display_Card ` function with the parameter ` player_card ` which is where the player's list of card numbers is stored : 

```c++
  Display_Card(player_card);                             /* the numbers inside this list will be print out */
```

Then we need to display the total  number of card the player has which is inside the ` Tl_Pl_card ` variable (don't forget to tell the program to create a new line after the total) :
```c++ 
      
   cout << "] with a total of : " << Tl_Pl_card << " \n\n";      				  /*the card total card of the player will be print here */
   
```

On the dealer's side, we will only show one card which the dealer has because the player is allowed to know only one card of the dealer until the player or the dealer bust, in this case, we will print the first card of the dealer which is inside the variable ` Dl_card1 ` : 

```c++
 cout << "The Dealer is showing a " << Dl_card1 << " \n\n";    				   /* place it here */

```
Time for some thinking:

![A person thinking](https://cloud-m8wvf9mhv.vercel.app/0giphy-2.gif)
   
### Checking for a possible bust or blackjack 👀

[The rule](https://youtu.be/eyoh-Ku9TCI) of the game in this video tells us, if the player or the dealer has a total bigger than 21 then it a bust he loses,

If the total is 21 then he got blackjack and he a win, else the game goes on. We, therefore, need to check if one of the people in the game has a bust or a blackjack, that would like : 

If the total player card is bigger or equal to 21 or the total dealer card is bigger or equal to 21  then we must check for a bust or blackjack :

```C++
    if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {                 /* checking fo the person that has a bust or blackjack */
        
     }
```
We don't have a function that will check for a bust or a blackjack, so let declare it under the **declaration section** and call it has ` Hit_Bust_Check() ` void function:

```C++
void Hit_Bust_check();                /* will use to check if the player has a bust or blackjack */

```
We then going to create a function that will display the message to the player, if they have won or lose, we will then call these functions ` player_win() ` and ` player_loose() `. Don't worry if you don't understand these two function's purpose now, I will explain it soon ;) *wink*  : 

```c++
 void player_win();                        /* will be used to print the winning message to the player */
 void Player_Loose();                     /* will be used to print the message that the player lost */
```

Now go over the **definition section** and let give some definition to these functions : 

 First with ` Hit_bust_check() ` function, As the rule of the game, informs us :  
 
  + We first check if the total card of the player(` Tl_Pl_card `) is equal to 21 or the total card of dealer(` Tl_Dl_card `) is bigger than 21, then the player wins, so we call the function ` Player_win() `.
  + Else, if the total card of the dealer(` Tl_Dl_card `) is equal to 21 or the total card of the player(` Tl_Pl_card ` ) is bigger than 21 then the player loses, so we call the function ` player_loose `.
  + Else, if the total card of the player is bigger than the total card of the dealer then the player loses, so we call the function ` player_loose() `.
  + Else if all these conditions are not met then the player wins, so we call the function ` player_loose()`.
  
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

⚠️In other to understand fully what we just did, I recommend that you may watch this video from the beginning of this page that talks about how the Blackjack game works [check it out here](https://youtu.be/eyoh-Ku9TCI).

#### What to do when the player wins or loose 

As the rule of declaring a function says, we have to *define* and *Call* the function. We have only called and declare the function ` player_win() ` and ` player_loose() `, so let define them :

First ` player_win ` function, so what do print out when the player wins? 

  + First, we want to display the player's card and the dealer's card with their total.
  + Then print out that the player has won and the dealer has lost. 
  + Then ask if the player will like to restart the game or to quit the game.
 So let start to print the player's card with the total and the dealer's card with the total (don't forget to use ` display_playercard() ` to print a person's card numbers :
 
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
 
Then let print the message that the player has won the game :

 ```c++
   cout << player1 << " Win🔺 Congrats!! \n\n";                    
   
 ```
 
 Finally, we will ask the player if they would like to Restart or quit the game :
 
 ```c++    
  cout  << "Would you like '1' Restart  or '2' Quit PLAYING\n";         
  ```
  
  #### Would the player restart the game or quite the game
  
Now to get the answer from the player we will declare a new String variable that can store the answer from the player and call it inside the **declaration section** :
 
 ```c++
string answ;         				                                /* will be used to store the answer from the player
 ``` 
 
Then we will need a new function that will check if the player would like to restart or quit playing the game, we will name this function ` Continue_Playing() `:

 ```c++
 void Continue_Playing();   
 
 ```
 Now let go back inside the ` Player_win() ` function and get the line from the player then store the answer inside the ` answ ` variable :
 
 ```C++ 
  getline(cin,answ);                                                    /* getting the answer from the player */
 
 ```
Then call the function ` Continue_Playing() ` which we will define soon.

```c++
Continue_Playing();                                /* check if the player would like to restart or quit the game */
 
 ```
 Inside the **definition section**, let start to give definition to the function ` Continue_playing() ` :
 
 ```c++
 Continue_Playing() {
  
  }
  
``` 
We are done asking the player if they would like to restart playing or to quit playing, we will write a small program that checks the answer from the player :

 + If the answer from the player is " 1 " then we will start the game again, using the function ` Start_The_Game() `.
 + Else the player wants to stop playing, therefore we will just thank the player for playing and do nothing else.
 
```c++
  void Continue_Playing() { 
   if (answ == "1") {
      start_The_Game();                                      /*  this function will start again the game from the beginning  */
   }  else {
      cout << "\n\nThanks For playing\n\n";                /* this message will be display and nothing else will happen, the program will end */
   }
}

 ```
 
 Wait, when the game is will restart the list of cards is still inside the vector of the player and the dealer right?
 
 So we need to clear everything that is in the list, has the restart, to do this we will go over at the top of the ` start_The_Game() ` function and clear both vector so there is no card number inside when the game start :
 
 ```c++
 void start_The_Game() {
   player_card.clear();							 /* place it right at the beginning of this function */
   Dealer_card.clear();							
  
 ```
 
 Well done!! You doing great, let see your progress so far because we seem to be going from one function to the other while not finishing the other function :
 
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
     int  main()  { 
         cout << "\n           Blackjack Game      \n";
         cout << "\n++++++++++++++++++++++++++++++++\n";   
         cout << "\n Welcome to the game.\n Enter your player Name: \n";
         getline(cin,player1);   
	 start_The_Game();
       }
       /* Definition Section: this section will be used to Define all the Declare function*/
       
     void start_The_Game(){
        player_card.clear();							 
        Dealer_card.clear();	
        cout << "\n           Blackjack Game      \n";
        cout << "\n++++++++++++++++++++++++++++++++\n";
        cout << "\n Welcome to the game.\n";
        cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
        cout << "Please click enter to shuffle the cards \n";
        cin.get();  
        Hit_card1();                        
        cout << player1 << “, You have been Dealt with [ " ;
        Display_Card(player_card);
        cout << "] With a total of : " << Tl_Pl_card << " \n\n";
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
         Tl_Dl_card = Dl_card1 + Dl_card2;
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
               start_The_Game(); 
             } else {
                cout << "\n\nThanks For playing\n\n";
              }
        }
	
  ```
      
</details>

That a long way we have come; Now let us write the code for the function ` player_loose ` when the player loses:

  + First we will display the player card with the total player card and the dealer card with the total dealer card.
  + The print that the player has lost the game while the dealer wins the game
  + Then ask the player if they would like to restart or quit the game, remember to keep the answer inside the ` answ ` variable.
  + Lastly, call out the` Continue_playing ` function to check if the player would like to restart or quit the game.
  
 Then your code should look similar to this :
 
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

#### The game continue

 Now that we have checked if the player has a bust or a blackjack, then if both conditions are found to be false, we should continue with the game.
 
Go back inside the ` start_The_Game() ` function, we should add an else statement that will ask the player if he would like to hit/bust/stay. For each of this condition we will need to give it a function : 
 
 ```C++
 if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
           Hit_Bust_check();
     } else {                                 					   /* place it here */
           cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
	    
     }
```

As we ask the player for input, we will need to use the getline function and keep the answer inside the ` answ ` variable : 

```C++
else {                                  
           cout << "Would you like to '1' Hit or '2' Bust or '3' stay \n";
	   getline(cin, answ);                                                            /* place it here */   
     }
```

We will then declare a function inside the **declaration section** that will check if the player chooses 1 for hit, 2 for bust, and 3 for stay, called the ` check_Hit_Bust_Stay() ` function :

```C++
  void check_Hit_Bust_Stay();      

```

We then going to call this function inside the else statement of the ` start_The_Game() ` function :

```C++
else {                                  
            cout << "Would you like to '1' Hit or '2' Bust or '3'stay \n";
	    getline(cin, answ);                                                
	    check_Hit_Bust_Stay();                                      	        /* place it here */
     }
   
```

<details>
  <summary>Now we done with start_The_Game() function, check out your code and compare it to mine here</summary>
	 
```C++
void start_The_Game() {
      player_card.clear();							 
      Dealer_card.clear();
      cout << "\n           Blackjack Game      \n";
      cout << "\n++++++++++++++++++++++++++++++++\n";
      cout << "\n Welcome to the game.\n";
      cout << "\n Player of this round is: " << player1 << "\n\n"; //new start
      cout << "Please click enter to shuffle the cards \n";
      cin.get();            
      Hit_card1();                         //draw  card for the dealer and the player 
      cout << player1 << ",You have been Dealt with [ " ;
      Display_Card(player_card);
      cout << "] with a total of : " << Tl_Pl_card << " \n\n";
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


### Did the player hit or bust?

Then let define the function ` check_Hit_Bust_Stay() ` inside the **definition section**.

 + We will check first if the answer is equal to 1, hit, which means player ask for another card to be drawn, therefore we must call a function that will draw another random number which will be store inside the variable ` Pl_card_cont `  that store any card that the player will ask for.
	
```C++
 void check_Hit_Bust_Stay(){
   if (answ == "1") {
	
	}
     }
```

#### Drawing cards for the player continuously

 Now to draw a new card we can declare a new function inside **declaration section** that will perform the task called the ` Hit_Player_card() ` function :
 
 ```C++
 
void Hit_Player_card();                         

 ```
 We then should define this function inside **definition Section**.
 
 We will start of by calling the special function from ` <time> ` library called ` srand() ` function :
 
 ```C++
  void Hit_Player_card() {
     srand(time(0));                      
  }
 ```
 
 Now we will call the player card continue (` Pl_card_cont `) as we want to draw a card for the player and give it a value of random number between 11 and 1 : 
 
 ```C++ 
   Pl_card_cont = rand() % 11 + 1;
   
 ```
 
 Now we have to add this card inside the card list of the player, to do that we use a special object use to add an element inside a vector called ` .push_back() ` including the element you want to add : 
 
 ```C++
 player_card.push_back(Pl_card_cont);
 
 ```
 
 What does push back object does, is that it add the element at the end of the list inside the vector. 
 
Tips: You want to learn more methods to add elements inside a vector [check it out here](https://www.codegrepper.com/code-examples/cpp/adding+element+in+vector+c%2B%2B).
 
Now we also need to add this number inside the player card totals, to do that we will say ` Tl_Pl_card ` plus equal to ` Pl_card_cont ` this will automatically add it to the total :
 
 ```C++
 Tl_Pl_card += Pl_card_cont;
 
 ```
 
Finally remember that we a variable that store the number of cards for the player, so we will increment that number by 1 :

```C++
 num_of_playerCard++;        		

```
<details>
	<summary>  Now this is how your Hit_player_card function should look like : </summary>
	
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

Go back inside the ` check_Hit_Bust_Stay() ` function, then if the player's answer is 1, we should draw a card for the player by calling the ` Hit_Player_card() ` function :

```C++
if (answ == "1") {
	Hit_Player_card();                  
  }

```
Then we should print what card they have been given, which is store inside the ` Pl_card_cont ` variable, and print the player's total :

```C++
if (answ == "1") {
        Hit_Player_card();
     cout << "You have  been dealt a [" << Pl_card_cont;				/* place it here */
     cout << "] with  a total of : " << Tl_Pl_card << "\n\n";			/* place it here */
  }
  
```

Now that the player has a new card we need to check again if the player card total is bigger or equal to 21 or the dealer's card total is bigger or equal to 21 inside the if statement.

```c++
cout << "] with a total of : " << Tl_Pl_card << "\n\n";
   if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21){				  /* place it here */
   
   }
```

Then if one of the totals meets this condition we should call the ` Hit_Bust_check ` function which checks if the player has won or lost.

```C++
 if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21){				
       Hit_Bust_check();                       		                 	/* place it here */
   }
```
Now when this condition is not meet, we should again ask the player if they would like to hit/bust/Stay, then get the line from the player and store it inside the answer variable ` answ ` and again call this same function ` Hit_Bust_Stay() ` which will verify the answer from the player:

```C++
if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
        Hit_Bust_check();
     } else {										/* place it here */
        cout << "would you like to '1' Hit or '2' bust or '3' stay\n";                 	/* place it here */
        getline(cin, answ);								/* place it here */
        check_Hit_Bust_Stay();								/* place it here */
        }
```

Let say for example the player chooses 2, bust, then the player is saying that they are done taking more card and would like to check  if who they have won, therefore we will call the function ` Hit_Bust_check() ` :

```C++
if (answ == "1"){
     Hit_Player_card();        
     cout << "You have been dealt a [" << Pl_card_cont;
     cout << "] with a total of : " << Tl_Pl_card << "\n\n";
     
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

### The player stop picking up more card 

What if the player says stay, which means the player is done taking more card and ask the dealer to take cards up until the dealer's card is bigger than 16 :


  If you get confused about where we got this rule, check out this [Video](https://youtu.be/eyoh-Ku9TCI) that explains the rule of this game.
  
  Now as I say before we will need to create a function that performs the task when the player says stay, this function we can simply call it ` Player_Stay() `        function :
 
     ```C++ 
     void Player_Stay();
     
     ```
     
Now let give a definition, first, what would the function Player_stay do :

 + As the [video](https://youtu.be/eyoh-Ku9TCI) explains, when the dealer pulls back his card or says stay, the dealer should get a new card while the dealer's total is less than 16.
+ Now when the dealer card's total is bigger than 16,  we should then check if the dealer has a bust, then the player will win.
+ If the dealer does not have a bust, then we will check if the player card is bigger than the dealer's card and smaller than 21 then the player wins.
+ else the player loses and the dealer win

```C++
void Player_Stay() {
   while (Tl_Dl_card < 16) {
      
   }
 }
   
```
Now we need to create a function that gives the dealer a new card similar to the ` Hit_player_card ` function which gives a new card to the player. This function we will instead call it ` Hit_Dealer_card() ` :

```C++
void Hit_Dealer_card();

```

We will then give a definition similar to the ` Hit_Player_card() ` function, but with the dealer values:

```C++ 
void Hit_Dealer_card() {
    srand(time(0));
    Dl_card_cont = rand() % 11 + 1;
    dealer_card.push_back(Dl_card_cont);
    Tl_Dl_card += Dl_card_cont;
 }
 
```

For reference if you can't remember ` Hit_Player_card() ` or ` Hit_Dealer_card() ` does read here :
 + We call the special function from ` <time> ` library called ` srand() ` function use to generate random number
 + We call the dealer card continue(` Dl_card_cont `) as we want to draw a card for the dealer and give it a value of random number between 11 and 1.
  + We then have added this card inside the card list of the dealer, to do that we use a special object use to add an element inside a vector called ` .push_back() ` including the element you want to add.
 + We then need to add this number inside the dealer card totals, to do that we will say ` Tl_Dl_card ` plus or equal to ` Dl_card_cont ` this will automatically add it to the total.



 + Now that we did that, we need to call out ` Hit_Dealer card ` inside the` Player_Stay() ` function when the while loop is running :

```C++
   while (Tl_Dl_card < 16) {
      Hit_Dealer_card(); 				      /* place it here */
   }
```
 + Let write an if statement that checks if the total dealer card is bigger than 21 then it a bust for the dealer and the player win :
 
```C++
    if ( Tl_Dl_card > 21) {		
        player_win();
      }
```
 + So if the dealer's card is not a bust, then if the player card is bigger than the dealer's card and the player's card is smaller than 21 then the player win, so we will call the ` player_win() ` function :
 
```C++
   if ( Tl_Dl_card > 21) {
        player_win();
   } else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {						
        player_win();								/* place it here */
   }

```

 + Now if none of the condition is met, then the player loses, so we call the ` player_loose() ` function :

```C++
else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {
        player_win();
   } else {
      player_loose()
   }
```

<details>
<summary>Finally you final code for the function Hit_Dealer_Card() would look like this : </summary>
	
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

Let go back to the ` check_Hit_Bust_Stay() ` function and write the last else statement that calls out the ` Player_Stay() ` function :

```C++
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
    } else if (answ == "2") {
            Hit_Bust_check();
    } else {
         Player_Stay();						/* place it here */
     }
```
<details>
<summary>Well done!!! with have just finished with the function  check_Hit_Bust_Stay(), now let see what we have</summary>
	
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
<summary>You kind be thinking well how far we are Now, what I can say you can run your code and compare my code to yours</summary>

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
     int  main()  {    
          cout << "\n           Blackjack Game      \n";
          cout << "\n++++++++++++++++++++++++++++++++\n";   
          cout << "\n Welcome to the game.\n Enter your player Name: \n";
          getline(cin,player1);   
          start_The_Game();
       }
       /* Definition Section: this section will be used to Define all the Declare function*/
       
     void start_The_Game() {
          player_card.clear();							 
          Dealer_card.clear();
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
                start_The_Game(); 
               } else {
                    cout << "\n\nThanks For playing\n\n";
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
		       Hit_Dealer_card();
                     }
		     if ( Tl_Dl_card > 21) {				
      			  player_win();
 			  } else if (Tl_Pl_card > Tl_Dl_card && Tl_Pl_card <= 21) {
       					 player_win();
  		           } else {
    			      player_loose();
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

And you will see that we are done with almost everything, but why did I say almost everything? 

Because when you try to answer '3' for stay, you might get some weird dealer's card number showing respectively or the answer will be kind of contradiction to what the rule of the game is so we need one more function. 

How many lines of code is the last function again? five, so are we done? let's find out.

We will declare our last function as ` Check_player_3card() ` because the game allows the dealer to have 3 cards if the player has 3 cards or more and the player never asks for a stay, then we should give the dealer his third card :

```C++
void Check_Player_3card();                     

```
Now let define this function, but what will it do :

 + So we will check if the number of card of the player is bigger or equal to 3,
 + If it is bigger or equal to 3 then we will add the total card of the dealer plus the one dealer's card that we call inside ` Hit_Card1 ` in the beginning but never had placed it inside the dealer's total card or the list card for the dealer.
 + So now we will add it to the total of the dealer card and add it inside the list of the dealer card.
 + So because this function will be called many places and we want to call it one we will set the number of cards for the dealer to 0, so this if statement won't run if this function is called again.
 
 ```C++
 void Check_Player_3card(){
     if (num_of_playerCard >= 3){
        Tl_Dl_card += Dl_card_cont;
        dealer_card.push_back(Dl_card_cont);
        num_of_playerCard = 0;
     }   
}
```
Last but not least let call this function in :

 + Inside the ` Player_Stay() ` function before the while loop call ` Check_player_3card() ` function :
   ```c++
     Check_Player_3card(); 						/* place it here */
     while (Tl_Dl_card < 16) {
         Hit_Dealer_card();
      }
   ```
 + Inside the ` player_win() `  function call out  ` Check_player_3card() ` function :
    ```c++
      void player_win(){
          cout << "The Player hand : ";
          Display_Card(player_card);
          cout << " with a total of : " << Tl_Pl_card << "\n\n";
          Check_Player_3card();					        	/* place it here */
          cout <<"Dealer Hand : " ;
          Display_Card(dealer_card);
          cout << " with a total of : " << Tl_Dl_card << "\n\n";
          cout << player1 << " Win🔺 Congrats!! \n\n";
          cout  << "Would you like '1' Continue  or '2' Quit PLAYING\n";
          getline(cin,answ);
          Continue_Playing();       
        }
    ```
 + Inside the ` player_loose() `  function ,call out  the ` Check_player_3card() ` function : 
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
   + And last, inside the ` check_Hit_Bust_Stay() ` function before the if statement :
   
       ```c++
       cout << "The Dealer is Showing a " << Dl_card1 << " \n\n";
       Check_Player_3card();								/* place it here */
       if (Tl_Pl_card >= 21 || Tl_Dl_card >= 21 ) {
              Hit_Bust_check();
              }
	```
	
Well done you have just you now have levelled up, you can now run your game and see how your game looks likes, you just become a master card player 
 
 ![giving high five to a person](https://cloud-fcjpqc2js.vercel.app/0giphy.gif)
 
 <details>
<summary> check out here the final code how it should look like</summary>
 
 ```c++
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
	  void Check_Player_3card();
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
       
     void start_The_Game() {
        player_card.clear();							 
        Dealer_card.clear();
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
        Check_Player_3card();
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
           Check_Player_3card();
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
                start_The_Game(); 
               } else {
                    cout << "\n\nThanks For playing\n\n";
                 }
	    }
	void Player_Loose(){
           cout << "The Player hand : " ;
           Display_Card(player_card);
           cout << " with a total of : " << Tl_Pl_card << "\n\n";
           Check_Player_3card();
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
	          Check_Player_3card();
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
	    void Check_Player_3card(){
               if (num_of_playerCard >= 3){
                  Tl_Dl_card += Dl_card3;
                  Dealer_card.push_back(Dl_card3);
                  num_of_playerCard = 0;  
                 }   
              }
 ```
 </details>
 
# Challenges


Now go on and show everyone what you have made. Aren't they impress about it, well I have something in store for you to try out :
 
 + Give the player with a balance of 500 coins that will allow them to place a bet, then at the end of each round reward the player with double their bet if they win, or their balance minus the bet. Just like the video in the beginning of the workshop explain.
   
    [Check out my code here](https://repl.it/@chrisrama/blackjack-gameCoinBase#main.cpp).
  

 + Can you make a new option that allows the player to double their bet amount before the play says hit or bust. You know, if you, you'd want to get more money when you see that you are winning right? And if the player sees they are loosing and would like to decrease their bet amount, now add another option which allow the player to split their bet amount in half. Can you do this to your game?
    
    [Check out my example here](https://repl.it/@chrisrama/BlackjackgameDoubleSplit#main.cpp)


 + What if I keep forgetting how many win I have from the dealer, create and variable that keeps record of the number of the number of win of the player and the dealer. Then display the comparison of win after each round and when the game is over.
 
    [Check out my code here](https://repl.it/@chrisrama/Blackjack-game-Winner-review#main.cpp)

 + Now the difficult challenge, can you add multiple players inside the game, so more than 3 people can play together? Each player can player one after another at the same time. Do some research how you can do that, it can be fun right?


Are people impress now, add more feature you think can be cool for the game.

Note : All this change to the game does not affect. The original game, but only add few more functions and line.



