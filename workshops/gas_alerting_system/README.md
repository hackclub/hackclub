---
name: 'gas alerting system'
description: 'measuring the amount of gas in the air and giving the feed back described with 3 led, also the alarm will be turned n if there is any danger'
author: '@ahmed307'
---
# Gas Alerting System 

- Reference: [www.arduino.cc]()
- Reference: [www.tinkercad.com]()

## Materials 

- Arduino uno R3
Representing the micro controller ( atmega 328p-pu ) 
- MQ2 gas sensor
To sense the amount of smoke in the air 
- Bread board
To make the connection easier and sorted
- 3x LED ( R + G + Y )
To represent the feedback in three different colours
- 4x 220 ohm resistors
To decrease the current and saving the components from burning
- Piezo puzzer
TO generate the tunes making the alarm 
- Jumber wires 
To connect the components and transefer the current between them 

image (https://cloud-4zhglpsa0.vercel.app/materials.png )

# Let’s Get Started

## Step 1

>  making connectios

- Connect the power outlets
1- power up the arduino by the usb or the power port
2- connect the 5v port from the arduino to the (+) lines in the breadboard
3- connect any of the GND port from the arduino to the (-) lines in the bread board
- Connect the input
1- To power up the sensor connect the 5v pin to (+) and GND to (-) in the breadboard
2- Connect the (A1) pin from the sensor to the (A0) pin in the arduino 
- Connect the outputs
1- Connect all the GND end of all components to the (-) in the breadboard
2- Connect the anode from the piezo puzzer to the the digital pin (2) in the arduino 
3- Connect the anode of the red led to the digital pin (3) in the arduino 
4- Connect the anode of the yellow led to the digital pin (4) in the arduino
5- Connect the anode of the green led to the digital pin (5) in the arduino



**note: Use 220 ohm resistor with each led to reduce the current and save it from burning

ALL is shown in this schematic ( https://cloud-4zhglpsa0.vercel.app/schematic.pdf )

## Step 2 

> building the code

- Making integers 
It is recommended to define the variables to pins you used as shown : 
> int r=3; // red led pin
  int y=4; // yellow led pin 
  int g=5; // green led pin 
  int puz=2; //puzzer pin
- Defining the alarm function 
This functions controls the puzzer to make an alarm : 
> void puzz (){
    tone(puz, 5000); // works with 5000hz
    delay(250);
    noTone(puz);
    delay(500);
  }
- Defining the pins state 
In the setup part you will define that the required pins will work as outputs
> void setup(){
    Serial.begin(9600); // starting serial monitor to show the sensor readings 
    // for loop for a shorter code in defining pins
    for (int i=2; i<6; i++) { 
    pinMode (i, OUTPUT);
  }
}
- Taking readings 
Start the void loop and make the sensor start taking readings 
> void loop(){
   int x=analogRead(0);
   Serial.println(x); // printing the readings on the serial monitor
   delay(100);
- Output states 
Turn the green led on if the air is clean, yellow if there is alittle smoke, and red with alarm if there is any danger 
> // only green  
  if (x<25) {
     digitalWrite(g, 1);
     digitalWrite(y, 0);
     digitalWrite(r, 0);
   }
   // only yellow 
   else if ( x>24 && x< 45){
     digitalWrite(y, 1);
     digitalWrite(g, 0);
     digitalWrite(r, 0);
   }
   // only red with alarm 
   else if ( x > 44 ){
     digitalWrite(g, 0);
     digitalWrite(y, 0);
     digitalWrite(r, 1);
     puzz(); // calling the alarm function 
   }
}

Full code file ( https://cloud-4zhglpsa0.vercel.app/code.txt )

## Step 3

> uploading the code

- Using tinkercad
All you have to do is click " Start simulation " button
- Using a real Ardiun 
1- Open arduino IDE
2- Select the board type from ( Tools > Board )
3- Select the port from ( Tools > Port )
4- Upload from " Upload " Button. 

## Step 4 

>  watch the project working 

congrates..! you have made a gas detector and alerting system 

## Testing! 

This gif shows the work of the project in the three states:
 ( https://cloud-4zhglpsa0.vercel.app/gas_sensor_gif.gif ) 

This is a video from the workshop while making this project :
( https://hackclub.slack.com/files/U015JAES8HL/F01BNQ3AP44/gas_sensor_woekshop_video.mp4 )

