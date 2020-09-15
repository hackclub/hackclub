---
name: motion_sensor_alarm
description: Make a simple Arduino based motion triggered alarm
author: '@Chromico'
---

# Arduino based Motion sensor alarm


## Required components/parts

- Arduino UNO or Arduino UNO compatible boards
- USB Cable ( may vary )
- Breadboard
- Jumper Wires
- An LED ( whatever color you want )
- 330 ohm - 1K  1/4W Resistor
- 5V buzzer
- An HC-SR501 Motion sensor module

## Wiring diagram of the HC-SR501 sensor
![](https://cloud-dg5ajyg2z.vercel.app/wiring-sensor.jpg)

Note: If motion is detected then the digital output of the sensor will be a `HIGH` state. If no motion is detected then the digital output will be in a `LOW` state.

# Let’s Get Started

## 1. Install the Arduino IDE


Download the appropriate Arduino IDE for your machine from the [Arduino website](https://www.arduino.cc/en/Main/Software)

For some Arduino compatible boards that use the CH340G/C download these [drivers](http://www.wch.cn/downloads/CH341SER_EXE.html) to avoid any issues. 

## 2. Connect the components

Follow this wiring diagram below to see how the components should be connected

![](https://cloud-dg5ajyg2z.vercel.app/wiring-diagram.png)

Arduino UNO I/O connections:
`13` -> `Anode of LED ( the longer leg of the LED )`
`11` -> `Positive side of buzzer`
`12` -> `Output of HR-SR501 sensor`

## 3. Create new a sketch and paste this code 

```cpp
int led = 13;   // our LED pin
int motion_sensor = 12;  // the motion sensor pin
int buzzer = 11; // the buzzer pin


void setup() {
  // put your setup code here, to run once:
  pinMode(led, OUTPUT);  // set this as an output 
  pinMode(motion_sensor, INPUT); // set this as an input
  pinMode(buzzer, OUTPUT); // set this as an output 

  Serial.begin(9600);  // Initialize serial communication at a baud rate of 9600

}

void loop() {
  // put your main code here, to run repeatedly:

  int sensor_value = digitalRead(motion_sensor);

  if (sensor_value == 1) {    // what happens if motion is detected
    Serial.println("Intruder detected !"); // print out that an intruder was detected
    digitalWrite(led, HIGH);  // turn the LED on
    digitalWrite(buzzer, HIGH); // make the buzzer buzz in a sequence
    delay(50);
    digitalWrite(buzzer, LOW);
    delay(50);
  }else {      // what happens if no motion is detected
    Serial.println("No Intruder detected !"); // print out that no intruder was detected
    digitalWrite(buzzer, LOW); // the buzzer is off
    digitalWrite(led, LOW); // the LED is off
  }
}
```

## 4. Upload the code



First select your board in Tools > Board ( in this case Arduino Uno ) and then select your board's COM port in Tools > Port
After you've done that press this icon as shown in the image below to upload the program to the board

![](https://cloud-dg5ajyg2z.vercel.app/hw2.png)


## 5. See it in action

https://vimeo.com/457533338

You should also be getting this in your serial monitor which can access by going to Tools > Serial Monitor or Ctrl+Shift+M
![](https://cloud-dg5ajyg2z.vercel.app/hw1.png)

