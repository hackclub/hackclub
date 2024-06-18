# Build electronics online with Wokwi

_or, A Guide to Submitting to The Bin_

Wokwi is a free-to-use arduino simulation that lets you design and program your own circuits. Bin uses Wokwi to let you experiment with your circuit, without the worry of blowing things up.

This assumes you already have a Wokwi project, but if you want to start from scratch, you can do so [here](https://wokwi.com).

## The editor

![](https://cloud-ppfypb9ug-hack-club-bot.vercel.app/7image8.png)

## Add some parts

We're going to start with adding your parts. You can do this by clicking the `+` button on the Circuit side of the editor.

![](https://cloud-ppfypb9ug-hack-club-bot.vercel.app/0image1.png)

Search for an LED and a resistor, and add them to your circuit

![](https://cloud-ppfypb9ug-hack-club-bot.vercel.app/1image2.png)

_Wokwi carries more sensors than what Bin supports currently. Bin will support these sensors in the near future!_

When you select the resistor, a menu will come up to set its value. Type 220 ohms.

![](https://cloud-ppfypb9ug-hack-club-bot.vercel.app/6image7.png)

_Curious why we use 220 ohms? [You can check this out!](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-led-series-resistor)_

## Wiring

We’ll be using pin 10 of the Arduino to control the LED.

1. Click on the straight leg of the LED. Connect it to pin 10. 
1. Click on the bent leg of the LED. Connect it to one end of the 220Ω resistor
1. Click on the other end of the 220Ω resistor. Connect it to GND (ground) of the Arduino.

![](https://cloud-ppfypb9ug-hack-club-bot.vercel.app/4image5.png)

## Code!

Now, we need to write some code to make the LED blink.

```cpp
#define LED 10

void setup() {
  pinMode(ledPin, OUTPUT);
  serial.begin(9600);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  serial.println("LED ON");
  delay(500);
  digitalWrite(ledPin, LOW);
  serial.println("LED OFF");
  delay(500);
}
```

## Press play!

Press play

![Pressing the play button](TODO)

_pressing the 'play' button_