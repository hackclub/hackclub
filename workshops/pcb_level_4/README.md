---
name: 'OnBoard Part 3: Adding Peripherals'
description: ''
author: '@karmanyaahm'
img: ''
---

In this workshop we will add an accelerometer and LEDs to our microcontroller board.
3. LEDs: WS2812B or equivalent. The size is dictated by your PCB design, you could get the original 5x5mm WS2812, or 3.5x3.5mm WS2812-MINI, or 2x2mm WS2812-2020 or an equivalent clone.



by [@camdan.me](https://hackclub.slack.com/team/U04J96SRS5B)

Component notes:

    The grant allows you to purchase anything from one of the allowed suppliers, including JLCPCB
    One of JLCPCB's sister/partner companies, LCSC, stocks virtually every generic component you'd ever need, and all of them can be assembled
    Keep in mind that JLCPCB charges a $3 fee for every "extended component" type that they assemble
    You will not be able to get specialized components from Adafruit or similar companies through the grant
    A complete library of JLCPCB/LCSC components is available at https://jlcpcb.com/parts


## Part selection

We need:
- An accelerometer/attitude sensor
- Neopixels 
- Battery charger
### The voltage dillema

- So our ATmega328P is perfectly happy running at any voltage between 2.7V and 5V. 
- Lithium batteries supply between 3.4V and 4.2V (need BOD).
- Most cheap accelerometers run between 1.8V and 3.6V, but need two way communication with the MCU, so they must match.
- Neopixels run from 3.3V to 5V and communicate at .7VDD or there are 2.7V variants.

So, we want the ATmega328P to run at a higher voltage for Neopixels, but a lower voltage for the accelerometer.


- Option 1: Run MCU and Accelerometer at 3.3V w/ LDO, level shift for LEDs or find 2.7v variants.
    - More components
- Option 2: Run MCU and Accelerometer at 3.3V w/ voltage divider (5 to 3.5 turns into 3.5 to 2.45 ), level shift for LEDs.
    - 2.45 is iffy for MCU
- Option 3: Run Accelerometer at low voltage w/ voltage divider (5 to 3.5 turns into 3.5 to 2.45) - level shift accelerometer.
    - Microcontroller gets to run at a high voltage which is good for clock stability, peripherals?
- LDO neopixels to a lower voltage:
  - nope too much wasted power

1. def need a cutoff
2. what if I get an integrated BMIC/PMIC? Cost?

How expensive is a level shifter for 2 i2c channels? Sparkfun uses 2 resistors and a BSS138 / channel - an equivalent N channel 50V mosfet is under 10c
http://cdn.sparkfun.com/tutorialimages/BD-LogicLevelConverter/an97055.pdf

The lowest possible supply voltage VDD1 depends on the threshold voltage VGS(th) of the MOS-FET’s. With a
threshold voltage of about 1 Volt below the lowest VDD1, the level shifter circuit will operate properly. If for
example the lowest VDD1 is 3 Volt, a threshold voltage VGS(th) of maximum 2 Volt is allowed.
The requirements for the most important characteristics of the MOS-FET’s, used as bi-directional level shifter in
an I
2 C-bus system with max. 6V and min. 2.7V levels, are listed below. The values are intended as an indication
and may be adapted for other supply voltages, other logic levels and/or other applications.
Type : N-channel enhancement mode MOS-FET.
Gate threshold voltage : V GS(th) min. 0.1V max. 2V
On resistance : RDS(on) max. 100 Ohm @ I D
= 3mA, VGS
= 2.5V
Input capacitance : Ciss max. 100 pF @ VDS = 1V, VGS = 0V
Switching times : t on t off max. 50 ns.
Allowed drain current : I D 10 mA or higher

All the ones on JLCPCB are kinda bad tbh. but tbh AO3400A ought to be fine. The individual MOSFETs are fine, it's just the extended part fee that'll sting.
I could hopefully just run the bus slower.

oh wait nvm can't use voltage divider to power stuff smh

so LDO it is
now the question is:
do I ldo both mcu and accel -  shifter between
or ldo only accel

If I'm lowering the microcontroller and want it to be at a standard voltage I have to do 3.3v. which with say 3.45 after cutoff is leaving a lot on the table.

If i'm lowering just the 


Ok so LDO to 3.3v;  XC6206P332MR

accellerometer - LIS3DH - 3.3v

ok so battery charger TP4057 (smaller basic part by JLCPCB with LEDs)


so with my design LEDs haev to either be through hole or 3535
im feeling smd cuz its easier to resolder if they break
ugh i so want the 6 pin ones cuz if they break
but
cheap ones 12e-mini are like $4 cheaper for the minimum order, and with the extended fee, this is really gonna start hurting soon
ppl can trivially swap it out if they want
the more expensive 13b-mini is also 2.7v tho, so no level shifter needed


WS2812E-MINI-X1

but do i really need all of them to be 2.7 when a 10c mosfet could level shift for me
timing concerns on the mosfet - tho, capacitance and stuff

hmm ya neopixels r very temp humiditiv sensitive 
tht feels more and more attractive


OOH HOW ABOUT REVERSE MOUNT THEYC AN ALSO BE ASSEMDLE ON ONE LAYER
how about we make spots for side lights too just cuz

ok using either reverse mount or the tiny ones is a w regardless of how you're getting it manufactured cuz even tho you need standard standard one side is cheaper than two side
and any other led would require two side


SK6812SIDE-A-RVS (from JLC, on back) and in parallel SK6812-E (from adafruit), optional to hand solder