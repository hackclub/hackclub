---
name: 'Rolling Dice using Arduino and 7 Segment Display'
description: 'Create an electronic dice using 7 segment LED display for your next board game'
author: '@giridhar7632'
---

# Rolling Dice using Arduino and 7 Segment Display

Have you ever made a dice with electronics? In this workshop, we are going to make a virtual dice that displays a random number between 1 and 6. You can use your own project for your next board game.

We will learn about the 7 Segment Display and see how the Arduino 7 Segment Display Interface works.

Here you can find the whole working model.

![final circuit](https://cloud-9sltbj02f.vercel.app/1final_circuit.png)

## Prerequisites

Basic knowledge of programming. That is all you need!

## Setup

We are going to use Tinkercad's interactive circuit builder, which is amazing. It's like building an Arduino circuit in real life. With the expertise, you gain from building this circuit online, recreating it with physical components should be a breeze!

Go ahead and create an account in [tinkercad](https://tinkercad.com)

![Tinkercad](https://cloud-9sltbj02f.vercel.app/0tinkercad.png)

You will be redirected to `Dashboard`

Now click on `New circuit`

![new circuit]()

Just click on the name at the top left and rename your project

You will see something like this 👇 with all the components on the right side.

![Tinkercad new project](https://cloud-9sltbj02f.vercel.app/2project.png)

After setting up let's start tinkering.🚀

## Components

1) 7 Segment Display
2) An Arduino UNO board
3) Pushbutton
4) Resistors

#### 1) 7 Segment Display.

The first main part which we are going to use in our project is the 7 Segment Display. A 7 Segment Display is a simple device. It consists of 7 LEDs called arranged in Segments. Hence, the name 7 Segment Display. Each LED Segment is in the shape of a hexagon and all the 7 LEDs are arranged in an “8” like fashion so that it can display digits from 0 to 9.

![7 segment display](https://cloud-9sltbj02f.vercel.app/47_segment_dis.png)

The top five pins are ‘g’, ‘f’, ‘COM’, ‘a’, and ‘b’ while the bottom five pins are ‘e’, ‘d’, ‘COM’, ‘c’, and ‘dp’. Since it is a common anode display, the COM (common pin) is connected to the Common Collector Voltage.

![pin diagram](https://cloud-9sltbj02f.vercel.app/5pin_diag.jpeg)

Let us first take a look at the internal structure of a Common Anode 7 Segment Display i.e. how the LEDs are connected.

![LED's connection](https://cloud-9sltbj02f.vercel.app/7led_connections.png)

We can observe that the anodes of each individual are connected as one(to positive(+)) and for turning on the LEDs according to the number to be displayed the respective cathodes are connected to the negative(-) terminal.

To display digits from 0 to 9 on this 7 segment display, you need to activate certain segments for each digit. The following table indicates the list of segments you need to turn on to display a particular digit.

![truth table](https://cloud-9sltbj02f.vercel.app/6truthtable.png).

This table helps us while we are programming our Arduino.

#### 2) An Arduino UNO board.

The other part we are going to use in our project is Simple Arduino. This is the place where we are going to insert our codes needed to run our project. The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller.

![Arduino](https://cloud-krdvm0bjz.vercel.app/0arduino.png)

Further, if you’re interested in Arduino you can learn more from [here](https://en.wikipedia.org/wiki/Arduino_Uno)

#### 3)Push button.
We are going to use a push-button whenever we need to roll a dice. By pressing we will obtain a random number from 1 to 6.

![push button](https://cloud-krdvm0bjz.vercel.app/1pushbtn.png)

#### 4) Resistors.

In our project, we are going to use resistors having 220ohm resistance and are used when we are connecting our 7 Segment display to the Arduino board. 7 resistors are being used in this project.

![resistor](https://cloud-krdvm0bjz.vercel.app/2resistor.png)

## Building our circuit.

Here is the step by step process where you will find it easy to create this project on your own😊.

You will find the window as it appears like this when you open tinkercad.

![Tinkercad project](https://cloud-9sltbj02f.vercel.app/3windows.png)

First one: This is the logo of the tinkercad which we are going to use for our project.

Second one: It's the title of the project which we are going to give as `Electronic Dice`.

Third one: Those are some actions which we use during creating circuits such as undo/redo, delete, rotate, etc.

Fourth one: the code window button, the button for starting the simulation, and options to export and share your model.

Fifth one: On this window, you will find a huge variety of all components required for not only this but for any other projects, you can easily drag and drop them into your workspace.

Sixth one: Finally this is the workspace window onto which you are going to drag the components needed and connect them.

First select the components from basic to all, by default it will be selected as basic.

Let us start with dragging the Arduino board.

![draging](https://cloud-i27ey1nq6.vercel.app/0draggin_the_arduino.gif)

The next component is our 7 Segment display. You can get it by typing the name in the search box provided. After finding it just drag it from there to the workspace and place it beside the Arduino board. Also, drag a push-button and 7 resistors onto the screen. You will find them just by typing the name in the search box. Drag it and place it on the workspace.

So far our workspace will be looking like this.

![workspace](https://cloud-krdvm0bjz.vercel.app/3components.png)

Wow! you are doing great.

The resistance of resistors will be 1 kohm by default. The resistance of each resistor which we will be needed for our project is 220 ohm.
Let us see how to set the resistance of the resistor to 220 ohm.

After collecting all the seven resistors click on any one of the seven resisters and you will find the dialogue box which appears as it is shown below.

![changing resistance](https://cloud-krdvm0bjz.vercel.app/6changing_resistance.png)

The red tab which is highlighted in the figure is used to set the resistance value of your own and the yellow highlighted part which is a dropdown is used to set the resistance unit.

Now set the resistance value to 220 and the resistance unit in the dropdown as plain ohm. Now you are set for one of the seven resisters. Now repeat the same thing to all the other 6 resistors and also set the resistance value to 220 ohms.

The name field which appears when you select a component is ignorable. They are just for labeling purposes.

Excellent! You are all set with the components needed for our project.

Yes, the time has come to proceed further and give connections for our circuit.

## Wiring the circuit.

Place the seven resistors of 220-ohm resistance on the top of the digital side of the Arduino board. Each of the 7 resistors should be placed on the top of PIN 8,7,6,5,4,3,2 one by one.

Of the two ports which the resistor has, the port which is facing the Arduino Uno board is used to connect to the respective PIN. When you select the port of the resistor you will be seeing that a wire of green color is being created.

Drag the wire from the end of the resistor to the respective pin and drop it there. Now you will be seeing the connection is established between the resistor and the Arduino UNO board. Repeat the same thing to all the other six resistors and now the seven resistors are connected to the Arduino UNO board.

![resistors connected](https://cloud-krdvm0bjz.vercel.app/4ristors_connected.png)

Now connect terminal 1a of the push button to the ground which is represented as `gnd` on the digital side of the Arduino. Next, connect the terminal 2a to PIN 12 of the Arduino in the same way.

![button connected](https://cloud-krdvm0bjz.vercel.app/5step-1.png)

Yeah, now the time has come to connect the 7 segment display to the Arduino board.
You will find the port number of the seven-segment display when you take your mouse pointer near to the respective port
On the first step connect the `g` port of the seven segment display to the other end port of the resistor which is connected to the `5` pin of Arduino.

In the same way connect the port `f` of segment display to `6` pin of Arduino, `a` to `7`, `b` to `8`.

Connect the upper side common port to the `9` pin of the Arduino board directly without any resistor.

Yeah now coming to the lower side of the seven-segment display. In the same way, you connected the upper portion of the seven-segment display connects the lower ports `c` to `4`, `d` to `3`, `e` to `2`. The connections of the seven-segment display registers and Arduino board are completed now. Leave the common port and DP port on the lower side of the seven-segment display.

The final circuit after all the connection looks like this

![final circuit](https://cloud-6vthzzaru.vercel.app/1final.png)

Yay! All the connections are set and we are free to proceed further to code the Arduino.

![hurray](https://cloud-6vthzzaru.vercel.app/0hooray__2_.gif)

## Coding our Arduino.

As we saw earlier the code button was at the right side top corner of our tinkercad. Click on that and toggle from block code to text code. 

![text mode](https://cloud-krdvm0bjz.vercel.app/7text_mode.png)

We are now set to start coding. By default in the code window there will be some code written on it, go ahead and delete everything in the window.
Let's start coding which our circuit requires.

As we saw in the table earlier at the top, this group of code written at the bottom is based on that one. `1` means `ON` and `0` means `OFF`.

```c
int num[10][7]={ {0,0,0,1,0,0,0},
                {1,1,0,1,1,1,0},
                {0,0,1,0,1,0,0},
                {1,0,0,0,1,0,0},
                {1,1,0,0,0,1,0},
                {1,0,0,0,0,0,1},
                {0,0,0,0,0,1,1},
                {1,1,0,1,1,0,0},
                {0,0,0,0,0,0,0},
                {1,0,0,0,0,0,0}
          };
```

The LEDs are arranged in an  "8" shape and to display a digit certain LEDs should be turned on and turned off. This block of code does the thing we wanted to.

Now define some variables we need: 
`r_num`: random number
`roll`: the pin we use for rolling the dice
`state`: state of PIN 12

```c
long r_num;     
int roll = 12;            
bool state = true;
```

And now under this block of code here comes to the main parts considered as the head and body of our code.

```c
void setup()
{

}
void loop()
{

}
```

The `setup()` function will only run once, after each powerup or reset of the Arduino board. This function is called when a sketch starts.

After creating a `setup()` function, which initializes and sets the initial values, the `loop()` function does as its name suggests, loops consecutively some hundreds of times if required, allowing your program to change and respond. It loops repeatedly until the program either crashes or decidedly ends.

The `void` thing which we wrote is a return type i.e if our block of code does not require any value to return rather just printing something or initializing or giving values. You can learn more [here](https://en.wikipedia.org/wiki/Void_type)

Now coming to the first loop i.e, `setup()`, first of all, we are going to tell Arduino which pins are we using and the other one is to give commands of the pins which are connected to either any of the components i.e, what should the pin connected have to do.

```c
void setup()
{
pinMode(2,OUTPUT);
pinMode(3,OUTPUT);
pinMode(4,OUTPUT);
pinMode(5,OUTPUT);
pinMode(6,OUTPUT);
pinMode(7,OUTPUT);
pinMode(8,OUTPUT);
pinMode(9,OUTPUT);
pinMode(12,INPUT_PULLUP);

digitalWrite(2,HIGH);
digitalWrite(3,HIGH);
digitalWrite(4,HIGH);
digitalWrite(5,HIGH);
digitalWrite(6,HIGH);
digitalWrite(7,HIGH);
digitalWrite(8,HIGH);
digitalWrite(9,HIGH);

randomSeed(analogRead(0));

}
```

The function which is used to tell the Arduino which pin we are going to use is `pinMode(pinNumber, OUTPUT/INPUT)`. As in our circuit, we used 2 to 9 pins. We are going to declare them as above and as they are all giving output mentioned as "OUTPUT".

The `INPUT_PULLUP` is written to enable the internal pull-up resistor.

The next command we used is `digitalWrite(pinNumber,HIGH/LOW)`. If the pin has been configured as an OUTPUT with `pinMode()`, its voltage will be set to the corresponding value: 5V for HIGH, 0V (ground) for LOW.

[`randomSeed()`](https://www.arduino.cc/reference/en/language/functions/random-numbers/randomseed/) initializes the pseudo-random number generator, causing it to start at an arbitrary point in its random sequence.

You can find furthermore reference [here](https://www.arduino.cc/en/Tutorial/Foundations/DigitalPins).

The next block of code is written in `loop()`.

Add the following code:

```c
void setup()
{
  if(state)
 {
   r_num = random(1,7);
   for(int i=0;i<7;i++)
    {
      digitalWrite(i+2,num[r_num][i]);
    }
    state=false;
 }
}
```

If the state is `true` we will display a random number. The `random(1,7)` displays a random number between 1 and 6. Using `for` loop, we will make the required pins `ON` to display a number. Then we toggle the `state` to `false` to avoid forever loop.

Now you can see every time you start simulation, you get a random number displayed.

Let's add functionality to our button. When the button is clicked, we have to display a random number after toggling some numbers.

Add the following code:

```c
void setup()
{
  // previous code
  while(digitalRead(roll)==LOW)
  {
    for(int i=0;i<10;i++)
      {
      for(int j=0;j<7;j++)
        {
          digitalWrite(j+2,num[i][j]);
        }
      delay(50);
      }
  state=true;
  }
}
```

When push button is pressed, numbers form `0` to `9` toggles. For this we using two `for` loops to iterate through `num` matrix. The toggling will be very fast. So we add `delay` of `50` milliseconds. Very less but makes sense.

We turn the `state` to true for the displaying a single random number.

Now go ahead and hit the `run simulation` button.

We are all set to play a game related to dice.

In case you accidentally missed any one of the steps during writing the code and getting an error here's the final one.

The final code combining all the suggestions from the top looks like this.

```c
int num[10][7]={ {0,0,0,1,0,0,0},
                {1,1,0,1,1,1,0},
                {0,0,1,0,1,0,0},
                {1,0,0,0,1,0,0},
                {1,1,0,0,0,1,0},
                {1,0,0,0,0,0,1},
                {0,0,0,0,0,1,1},
                {1,1,0,1,1,0,0},
                {0,0,0,0,0,0,0},
                {1,0,0,0,0,0,0}
          };

long r_num;    
int roll = 12;           
bool state = true;

void setup()
{
pinMode(2,OUTPUT);
pinMode(3,OUTPUT);
pinMode(4,OUTPUT);
pinMode(5,OUTPUT);
pinMode(6,OUTPUT);
pinMode(7,OUTPUT);
pinMode(8,OUTPUT);
pinMode(9,OUTPUT);
pinMode(12,INPUT_PULLUP);

digitalWrite(2,HIGH);
digitalWrite(3,HIGH);
digitalWrite(4,HIGH);
digitalWrite(5,HIGH);
digitalWrite(6,HIGH);
digitalWrite(7,HIGH);
digitalWrite(8,HIGH);

digitalWrite(9,HIGH);

randomSeed(analogRead(0));

}

void loop()
{
  if(state)
  {
    r_num=random(1,6);
    for(int i=0;i<7;i++)
    {
      digitalWrite(i+2,num[r_num][i]);
    }
      //delay(1500);
    state=false;
  }

  while(digitalRead(roll)==LOW)
  {
    for(int i=0;i<10;i++)
    {
      for(int j=0;j<7;j++)
        {
          digitalWrite(j+2,num[i][j]);
        }
      delay(50);
    }
  state=true;
  }
}
```

Now you will find a random number being displayed whenever you press the push button(i.e rolling a dice).
That's it for this workshop, enjoy your next board game.

![enjoy](https://cloud-6vthzzaru.vercel.app/2enjoy.gif)

## Next Steps

Now that you know about 7 segment display, go wild with it. Here are some other projects to inspire you:

* [Simple Counter](https://www.tinkercad.com/things/jzkwgsMjMeA)
* [4 digit 7 segment LED display](https://www.tinkercad.com/things/27k65HnoDAQ)
* [Temperature display](https://www.tinkercad.com/things/hSFv990dO4v)

PS: I'm [@Giridhar](https://hackclub.slack.com/team/U013E6KE9UJ) on Slack!


