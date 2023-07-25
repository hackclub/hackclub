---
name: 'SparkleTilt PCB 3: Ordering a KiCAD design from JLCPCB'
description: 'Learn how to convert a board design into an actual order'
author: '@karmanyaahm'
img: 'https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/514.webp'
---

In this workshop, we will take a KiCAD PCB and order it through JLCPCB with assembly[^2].

If you're just jumping in, make sure you have your [DRC checked](../pcb_level_2/#design-rules-checker) from Part 2 of this workshop series.


Here are some component notes by [@camdan.me](https://hackclub.slack.com/team/U04J96SRS5B):
- The grant allows you to purchase anything from one of the allowed suppliers, including JLCPCB.
- One of JLCPCB's sister/partner companies, LCSC, stocks virtually every generic component you'd ever need, and all of them can be assembled.
- Keep in mind that JLCPCB charges a $3 fee for every "extended component" type that they assemble.
- You will not be able to get specialized components from Adafruit or similar companies through the grant.
- A complete library of JLCPCB/LCSC components is available at <https://jlcpcb.com/parts>.

## Install the Extension

Click on Plugin Manager on the KiCAD home page.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/111.webp)

Search for 'JLC'.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/122.webp)

Install 'Fabrication Toolkit' and apply changes.


## Assign Part Numbers

Open your schematic. Go to Bulk Edit fields.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/135.webp)

In the Field Editor window, click on 'Add Field' and add the field `LCSC`. It doesn't matter whether you have `Sim.*` or `Datasheet` fields or not.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/146.webp)

Then, search for your components at <https://jlcpcb.com/parts> and fill in the LCSC id.

For generic components, search for the Value and Footprint - `100nF 0805` - and check basic parts. You'll see a couple of different voltages, pick the lower (cheaper) one since we are only at 5V.

You don't *have* to necessarily specify the part number for generic components like 0805 resistors or capacitors, but I prefer to manually select it rather than leave it up to JLCPCB to decide.

The LCSC Part number (aka JLCPCB Part #) looks like `Cxxxx`.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/157.webp)

For more specific components, like the Atmega328P-AU, you should only have a couple of options and just pick the most popular one (Basic Part if possible).

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/168.webp)


Try doing this yourself before you look at my version below.

<details>
<summary>
This is what your table should look like, and then Apply and Save.
</summary>

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/179.webp)

Because A1 and J2 aren't real components - we only need their footprint and pin layout, not the component itself - they don't need an LCSC part number.
</details>
  
## Export files

Now, go back to the PCB view and sync it.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/110.webp)

Then, click on Tools > External Plugins > Fabrication Toolkit.


![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/211.webp)

Everything you need to order your board will now be in `your_kicad_project/production/`.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/312.webp)

Now, log in to <https://jlcpcb.com>. Go to <https://cart.jlcpcb.com/quote> and upload `gerber.zip` into "Add Gerber file".

You should see something like this:
![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/413.webp)

Tips:
- 5 is the minimum number of PCBs you can order.
- You can change your shipping option on the right 'Shipping Estimate' sidebar.
- Sometimes, reducing the PCB thickness from 1.6 to ~1.0 will reduce the weight of the package, and thus the shipping price without increasing manufacturing price.
- If your PCB will be handled a lot consider selecting 'LeadFree HASL' for its surface; excessive exposure to lead can be toxic.

Leave the 'High-spec options' at their defaults, and then, enable assembly. 
- You can choose to only assemble 2 boards out of 5, in which case the other 3 bare boards will be shipped to you. If you only want one PCB, this can save money on parts.
- You can only assemble one side in Economic PCB assembly.
- Standard PCB assembly with both sides is very expensive  (~$65) and will use up most of your grant money. Try to design PCBs that have components on one side and don't use any 'Standard Only' components. Or, solder the other side by hand.


![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/514.webp)
Then, on the Bill of Materials page, upload bom.csv and positions.csv from your production folder. 

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/716.webp)

- You can save a lot of money on Extended Parts in the long run (if you plan on making many PCBs) by buying them directly and soldering them yourself [^1]. For example, basically every project has a USB-C connector and header pins, so it makes sense to buy a bunch yourself and avoid the $3 extended part fee every time you buy a board from JLCPCB.
- Virtual Components (only used for their through holes) like the Arduino Nano and ICSP header can be ignored.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/817.webp)
When it prompts you about unselected parts, just click 'Do not place'.

Zoom into your components on the 'Component Placements' screen and rotate them to the correct orientation if they're wrong.


If you get all parts assembled, this board (just the microcontroller and PCB) ends up being around $33.
![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/918.webp)

With shipping, that's $45.

![](https://cloud-9ctvo6cbs-hack-club-bot.vercel.app/1019.webp)

### Footprints

[^1]: You might want to edit the footprints of components you are hand-soldering. For example, to hand solder the USB-C connector, make the pads longer and remove unused ones like SBUS.
[^2]: There are a million different ways to export your files and order with different manufacturers, but for simplicity, this workshop only focuses on one.