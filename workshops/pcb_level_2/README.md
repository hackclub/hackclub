---
name: 'OnBoard Part 2: From Schematic to PCB in KiCAD'
description: ''
author: '@karmanyaahm'
img: ''
---

KiCAD version, maybe make an EasyEDA section later? I don't want to manually transfer my whole schematic and auto thing is not working.

In this workshop we will turn our schematic from Part 1 into an actual PCB.

<details>
<summary>Prerequisites</summary>
The rest of the workshop assumes you understand PCB Basics like:
1. Layers: describe 
2. Traces: describe
</details>


## Footprint assignment

Footprints are the exposed copper pads on the PCB for each component.

First, click on run footprint assignment tool.

![](0.png)

In the new window, under Footprint Filters, select the first one - "filters defined in symbol" - but deselect the other two to get good filtering.

![](0.1.png)

Now, you should have a window like this with some footprints autofilled, others empty.

![](0.2.png)

Some footprints, like the Arduino Nano outline, which is not a real component in this case, only have a few options. Double click on `Module:Arduino_Nano_WithMountingHoles` to select it.

![](0.3.png)

### Generics

0402, 0603, 0805, and 1206 are common sizes of small two terminal SMD components like resistors, capacitors, and diodes. 0805 is very common and still somewhat hand solderable, so we will use 0805 for all our components.

<a title="Zerodamage, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:SMT_sizes,_based_on_original_by_Zureks.svg"><img style="background-color: white;" width="256" alt="SMT sizes, based on original by Zureks" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/SMT_sizes%2C_based_on_original_by_Zureks.svg/256px-SMT_sizes%2C_based_on_original_by_Zureks.svg.png"></a>

To find our first capacitor, go to <https://jlcpcb.com/parts>. In this case, we will search for 100nF, our first capacitor.

![](0.4.png.png)

Then, select "Basic Parts" to find the parts that don't have the extended fee and we see that they do have 0805 available. So, we can select `Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder` for all our 100nF capacitors in KiCAD. You can similarly go through each capacitor and resistor value on JLCPCB Parts and find that they have 0805 versions available. So, all capacitors will be `Capacitor_SMD:C_0805_2012Metric_Pad1.18x1.45mm_HandSolder`, all LEDs will be `LED_SMD:LED_0805_2012Metric_Pad1.15x1.40mm_HandSolder`, and all resistors will be `Resistor_SMD:R_0805_2012Metric_Pad1.20x1.40mm_HandSolder`.

### Specific Components

If you look up the Diode `C35722`, you will get its LCSC page, which says the package is `SMC(DO-214AB)`.

![](0.5.png)

Going to the Datasheet also confirms this.

![](0.6.png)

Then, in KiCAD, after selecting the diode, we can search for the package. While there are no results for DO-214, SMC shows up and we can select `Diode_SMD:D_SMC_Handsoldering`.

![](0.7.png)

Doing the same with the Crystal will get you its package `SMD3225`, and footprint `Crystal:Crystal_SMD_3225-4Pin_3.2x2.5mm_HandSoldering`.

Similarly, for the ICSP header, you will get the right result by searching for 2.54mm (i.e. 0.1 inch pin spacing), and 2x03 (6 pins arranged in 2x3): `Connector_PinHeader_2.54mm:PinHeader_2x03_P2.54mm_Vertical`.

![](0.8.png)


### Other components

You might've noticed that in my original footprint assignment window had some components filled out already. This is because chips like the ATmega328P-AU only have one footprint - that's what the `AU` designates.

Others, like the switch, were found by searching for the part number `1187A` through the footprint window.

Lastly, some components like the USB-C Receptacle can be weird. While there are hundereds of different manufacturers of USB-C ports and receptacles, there are only a few common designs. However, there is no way to confirm which part uses which design, so in this case, I went backwards - first picking the KiCAD footprint that I liked, and then finding that part of JLCPCB, which happens to be the `7010ASV`.


---

Now that our footprints are all selected, we can move on to the PCB!
![](0.9.png)


## PCB

### Setup

![](1.png)

Click 'Open PCB in board editor' in the schematic view.

![](2.png)

In the PCB editor, click on 'Edit board setup'. This is where we will set the constraints of our PCB fab.

![](3.png)

<!-- can we add a toggle button for other fabs and add those settings for reference-->
Here I'm using JLCPCB's specifications, but every fab should have a document like this. Go to <https://jlcpcb.com/capabilities/pcb-capabilities> to find the latest specs, these might have changed since this guide was writen.

![](4.png)

Go to Design Rules > Constraints.

![](5.png)

And fill out these details.

![](6.png)

Then, in Design Rules > Pre-defined Sizes, specify how wide you want your traces, vias, and differential pairs will be. KiCAD will let you pick between the options here when designing your board. We will set a track width of 0.3mm for signal traces, 0.5mm for power traces, and 0.7mm diameter vias with a 0.3mm hole. For slow signals/short traces this doesn't matter as much, so we will pick 0.3mm/0.3mm/0.5mm.

Then, press OK to save and exit board setup.


### Set Up Components

![](7.png)



Now, in the board editor window, clicking on 'Update PCB with schematic' brings in all your components to the PCB page. If you make schematic changes, you can click on this to bring in your new parts. In the Update PCB window options, check Delete footprints and Replace footprints and click on Update PCB.

![](8.png)

Place them off to the side for now.


### Board Edges

![](9.png)

Now, to define the edges of our board, select the `Edge.Cuts` layer in the layer menu.

![](10.png)

You can use the shape tools to draw the outline of the board, or...

![](11.png)

you can go to File > Import > Graphics to import a custom SVG. You can pick whatever shape you like here.

> *Note*: In future workshops with this board, we will be adding more features such as an LED strip and accelerometer to make a level. Make sure your design will support the physical realities of being a level, such as having two points to balance on, which do not have any ports. Also, consider how your LEDs will physicall and aesthetically fit.  Make a rough paper sketch if that helps.  
> Of course, none of this applies to you if you are not building a level.

![](12.png)

By default, your drawing probably won't fit the Arduino Nano template.

![](13.png)

Delete the first import and go back to File > Import > Graphics. Play with the scale setting until your design snugly fits the Arduino Nano template (while leaving space for other components).

![](15.png)

Clean up the drawing to only leave the one continuous board shape.

![](14.png)

Double click the shape and set it up like the image above.
- Not Locked
- Not Filled Shape
- Line width: 0.6mm
- Line Style: Solid
- Layer: Edge.Cuts

### Components

> Note: Many of the choices in this section will depend upon your outline. Feel free to ask for help in [#onboard-help](https://k.malhotra.cc/todo.link).

![](17.a.png)
![](16.png)
After you position the Board Edge and Arduino Template, lock them in place to avoid accidentally moving it.

Then, start placing the major components: USB Port, ICs, Microcontroller, buttons, etc. 
![](17.png)
Rotate them to a position that'll make running traces convinient. For example, you want the D+ and D- pins of the USB controller to be facing the port, and the TX, RX pins to be facing your microcontroller. You can rotate things 90 degrees by pressing 'R' on your keyboard, or set a 45 degree offset by going to properties.

![](18.png)
![](19.png)
![](19.5.png)

This is how I roughly layed out the core components within the Arduino Nano footprint. Some large components like the reset switch and diode are outside the main nano footprint. The red pads indicate that these are all on the `F.Cu` layer. This is the front of the PCB. While a typical Nano design needs to be two sided (have components on both the front and back) to fit within that footprint, here, we will make a larger, one-sided board to keep assembly costs down.

> Note: This layout took several rounds of iteration between layout and trace routing to generate. It's absolutely fine to come back to rearrange your components if you find your layout doesn't work when routing traces - especially if this is your first complex board.

![](20.png)

While laying out your board, the 3D viewer is a very useful tool (especially if you are hand-soldering and need more space in between components). Use 'Alt+3' to open it.

![](21.png)
If some components are not visible, go back to your board design and double click the part to open properties.
![](22.png)

Make sure you're in properties for the whole component, not just one pad or silkscreen, and then open the '3D Models' tab. Click on the file browser for the 3D model line. These are the correct models:

- USB Connector: `${KICAD7_3DMODEL_DIR}/Connector_USB.3dshapes/USB_C_Receptacle_GCT_USB4105-xx-A_16P_TopMnt_Horizontal.wrl`
- CH340N: `${KICAD7_3DMODEL_DIR}/Package_SO.3dshapes/SOIC-8_3.9x4.9mm_P1.27mm.wrl`
- SW1: `${KICAD7_3DMODEL_DIR}/Button_Switch_SMD.3dshapes/SW_SPST_TL3342.wrl`

These may vary based on your version of KiCAD.

<!--put this somewhere else-->Also, you should have your schematic split screened with the PCB layout. Whenever you click on a component in one, it will be focused in the other, making it significatly easier to see what's going on.


### Routing

To route tracks



## Further Reading

1. https://eepower.com/resistor-guide/resistor-standards-and-codes/resistor-sizes-and-packages/#


//// TODO write

by [@camdan.me](https://hackclub.slack.com/team/U04J96SRS5B)

EasyEDA Layers:
Top/BottomLayer: The layers of copper on your PCB. The conductive traces on your board should live on these layers. Separate conductive traces can not cross each other on the same layer, you must use a via to connect two layers and not cross traces on the same side of the board.
Top/BottomSilkLayer: The printed (silkscreened) layers on your PCB. These are either white or black and must be monochrome (you can't have gradients, everything must be a clear line). Anything can go on these layers, they are simply printed.
Top/BottomPasteMaskLayer: This is the mask for the solder paste. Anything that will be soldered needs to have paste on it. You probably don't need to mess with this layer unless you know what you're doing, it should be automatically handled by your part footprints.
Top/BottomSolderMaskLayer: The is is the mask for the soldermask. The soldermask is the colored coating that goes on the board. By default, it covers everything except pads and is what gets printed on. Removing soldermask can be used to expose copper for cool effects.
Ratlines: These have no impact on the final production of your board, they are simply guides to tell you where you still need to draw traces.
BoardOutLine: This is the actual outline of how your board will be cut.
Multi-Layer: This holds, as the name suggests, multilayer elements such as vias or holes.
Document: This layer has information that will not be printed on the board and is only visible in EasyEDA. Think of it as comments in your code.Reminders:

    Make sure you draw your traces! You shouldn't have any ratlines on your board when you send it for production
    Remember separate conductive traces cannot touch each other
    You can use a combination of layers to design the look of your board
    You almost always want to have the traces of your board covered with soldermask, but it's typically ok to have other copper regions exposed, just remember it might tarnish
    JLCPCB engineers will review your design before production, if they spot any issues they'll send you an email to check in

Component notes:

    The grant allows you to purchase anything from one of the allowed suppliers, including JLCPCB
    One of JLCPCB's sister/partner companies, LCSC, stocks virtually every generic component you'd ever need, and all of them can be assembled
    Keep in mind that JLCPCB charges a $3 fee for every "extended component" type that they assemble
    You will not be able to get specialized components from Adafruit or similar companies through the grant
    A complete library of JLCPCB/LCSC components is available at https://jlcpcb.com/parts