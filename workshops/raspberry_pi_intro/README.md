# Learning with Raspberry Pi

written by @Annlee Fores

---

## Introduction to Raspberry Pi

### **RASPBERRY PI**

> Credit card sized super cool mini PC

![](https://static.notion-static.com/be56e76c-7d59-406d-9194-184367521476/Untitled)

#### **What is Raspberry Pi?**

Raspberry Pi is an extremely sleek and tiny computer. It is about the size of a normal credit card and runs on Linux based operating system. This board can be thought of as a miniaturized version of the motherboard in your CPU. It might not offer the same powerful processing capabilities as a normal PC, but it gets the job done.

The Raspberry Pi is a full computer. It has a processor, graphics processor, and memory, just like a normal computer or laptop – it’s just a lot smaller. The Raspberry Pi can be used in any situation a computer could be used. This can be as simple as being used as your desktop computer. Other people use them as mini servers in their house, as media computers for their TV, or as tiny computers to power their fun projects. It could be the brains of a robot, control a vegetable garden, or even just blink a light. The Raspberry Pi can be manipulated to control and read electronic components using its GPIO pins by using python programming. The possibilities with Raspberry Pi are limited only by your imagination.

Just like how you need to hook up your CPU to a monitor, keyboard, mouse, and LAN. The Raspberry Pi also offers USB ports for interfacing keyboard and mouse, an HDMI (High Definition Multimedia Interface) port to connect a monitor/TV, 3.5mm audio jack with composite video output for using with old RCA television, Camera connector, display connector and an Ethernet port to gain internet access. It also has inbuilt Wi-Fi and Bluetooth.

The Raspberry Pi is powered by a 5v power supply. Just like you have a hard disk on normal computers, the raspberry pi uses an SD card that acts as the hard disk. The OS is loaded onto the SD card and plugged into the board. You can use various memory capacity SD cards: 8GB, 16GB, 32GB, etc.

Main attraction of Raspberry Pi compared to our normal PC is the availability of 40 GPIO pins.

#### **Story of Raspberry pi**

The Raspberry Pi came alive when the Raspberry Pi foundation based in UK thought of launching a cheap single-board computer to promote the learning of computer science in schools. But it became so popular that the Raspberry Pi was adopted by hobbyists and engineers. Raspberry Pi’s are often used to prototype IoT devices, entertainment equipment’s and robotics. One of the main reason for the growth of the Raspberry Pi, is its community support and resources.

As of now the Raspberry Pi foundation has sold more than 11 million Pi’s. Even the International Space Station have two Raspberry Pi's :)

![](https://static.notion-static.com/ce124e2e-80b9-4246-9165-35e850527a9c/Untitled)

### Specification and other details of Raspberry Pi

There are different versions of the Raspberry Pi available. Some of the are:

1. Raspberry Pi 3 (Model B)
1. Raspberry Pi Zero W
1. Raspberry Pi 2 (Model B)
1. Raspberry Pi model A+
1. Raspberry Pi Model B+

![](https://static.notion-static.com/6423e798-7a84-4ea4-b4a4-a3550baa33d4/Untitled)

Some of the main stream Raspberry Pi now available are the Raspberry Pi 3 and Pi Zero W. Raspberry Pi 3 is the powerful version of Raspberry Pi, offering a quad core processor, four USB ports, Wi-Fi, Bluetooth and other features.

#### **Raspberry Pi 3 specs:**

**Processor:** 1.2GHz quad-core ARM processor

**Memory:** 1GB

**Networking:** 10/100 Mbps Ethernet, 802.11n Wi-Fi (150 Mbps, 2.4 GHz)

**Connectivity:** HDMI out, analogue audio/video out (3.5 mm headphone hack), Bluetooth 4.1 (24 Mbps), 4× USB 2.0 in, micro USB power, 40-pin GPIO, Camera Module port (CSI), Display Module port (DSI), micro SD card slot

**Dimensions:** 86 × 56 × 17 mm

**Weight:** 45 g

![](https://static.notion-static.com/2d82892a-c312-4dd5-9f68-03d5432db58a/Untitled)

#### **Pi Zero W specs:**

**Processor:** 1GHz single-core ARM processor

**Memory:** 512MB

**Networking:** 802.11n Wi-Fi (150 Mbps, 2.4 GHz)

**Connectivity:** Mini HDMI out, Bluetooth 4.1 (24 Mbps), micro USB in, micro USB power, 40-pin GPIO, Camera Module port (CSI), micro SD card slot

**Dimensions:** 65 × 30 × 5 mm

**Weight:** 9 g

![](https://static.notion-static.com/d0ed1af6-d293-40e2-9886-ac759c1dcabc/Untitled)

### **Raspberry Pi Operating Systems**

Raspberry Pi supports a wide variety of Linux based Operating systems like Raspbian, Kodi, Ubuntu mate, Libre Elec, also an IoT version of Windows 10 known as Windows 10 IoT Core and some unofficial third party operating systems like Kali Linux, RTandroid, Flint OS, Retropie

Officially supported Operating systems can be downloaded from

[https://www.raspberrypi.org/](https://www.raspberrypi.org/)

![](https://static.notion-static.com/3363f7c1-872d-447e-8c16-91c22476b4c1/Untitled)

![](https://static.notion-static.com/2b4e437c-e14e-499c-a946-3209c68e416f/Untitled)

#### Raspberry Pi GPIO pinout

![](https://static.notion-static.com/c662d27f-ce91-43bd-b505-2c5b86a265ad/raspberry-pi-pinout.png)

Credits: [https://pinout.xyz](https://pinout.xyz)

For more information visit the official site of Raspberry Pi ([www.raspberrypi.org](http://www.raspberrypi.org)). They have lot of resources and materials to get you started 😊

## Which model of Raspberry Pi should I buy?

> Raspberry Pi 3 vs Pi zero W

So you have finally settled on to use a Raspberry Pi for your next project. But which model of Raspberry Pi should a beginner buy?

#### Raspberry Pi 3

Raspberry Pi 3 is the top end, Raspberry Pi available now. Packs in more power and capabilities compared to its predecessors. Has 4 USB ports, enough to connect all your peripherals. Ethernet port for wired internet connection. A normal HDMI port. 3.5mm audio/video composite out for audio and analogue video signal. 

All you need to do is to plug in all the cables you have lying around in your house no need to buy extra cables to make it work.

#### Pi Zero W

Pi zero W costs only $10 compared to the $35 price tag of the Raspberry Pi 3 and is capable of doing all the functions a normal Raspberry Pi can do. Except for the lack of 3 USB ports, Ethernet port, in-built audio out and processing power. 

The small size of Pi zero W makes it ideal for use in embedded projects. It packs in a decent amount of processing power delivered by the single core processor clocked at 1GHz. 

#### Verdict

Even though the Pi zero W costs less and has a decent performance the additional requirements like Mini HDMI converter, OTG cable, Mini camera cable and the need of USB hub makes it more or less cost up to $25 to fully function. In my opinion, beginners should consider buying the Raspberry Pi 3 as it is easy to use out of the box and has plenty of ports to connect your peripherals. Most of all the model should suit your project. If you are planning to make a project that has a low profile you should definitely consider the Pi zero W. 

In the end, it is your decision that matters. Decide what purpose you are gonna use your Raspberry Pi and arrive at a conclusion.

## Getting started with Raspberry Pi

#### **Things Needed:**

1. Raspberry Pi
1. Micro SD card (8 GB and above)
1. Keyboard
1. Mouse
1. Monitor
1. HDMI cable
1. 5V smartphone charger (2A)

#### How to use etcher to install operating systems onto the micro SDcard video tutorial

*Credits: [Raspberry Pi Foundation](http://www.raspberrypi.org) & MagPi team*

[](youtu.be/FoFruCqjDHU)

#### **Preparing the SD card**

You can download the latest version of Raspbian from [https://www.raspberrypi.org/downloads/](https://www.raspberrypi.org/downloads/)

To burn your image onto your SD card you will need a software called Etcher by Resin.io. Download Etcher from here [https://etcher.io/](https://etcher.io/)

![](https://static.notion-static.com/ed017bff-0769-416d-b720-323447e99d87/Screenshot_(516).png)

Using an SD card adapter connect the SD card to your computer.

![](https://static.notion-static.com/b9f1fdca-2286-43fb-95b3-6457ee566fa9/IMG_20170524_101528.jpg)

Using Etcher burn the downloaded raspbian image on to the SD card.

![](https://static.notion-static.com/458b13e9-6234-42cf-b717-1f18fd3aa8ea/Screenshot_(380).png)

Or you could use the NOOBS (New Out Of the Box) image given on the website. It is basically an installer which includes the Raspbian image. You can also sideload other operating systems using NOOBs. 

![](https://static.notion-static.com/ee1b399f-2508-47c3-b04b-e1fe0bc18a3e/noobs.png)

Just download the file given and extract the contents onto the micro SD card. Pop it inside the micro SD card slot on the Raspberry Pi. Boot it up and select the operating system you want to install. Wait for the OS to install and you are good to go. 

#### **Booting Up**

![](https://static.notion-static.com/57a58ee4-60c7-4ebf-860e-1951fae42fac/plug-in-website.gif)

Insert the micro SD card inside the Raspberry Pi. Connect the Raspberry Pi to a monitor using an HDMI cable. Connect a 5v adapter to the power port. 

![](https://static.notion-static.com/7813f517-52d1-492f-946f-af11be758e01/IMG_20171229_134618-01.jpeg)

![](https://static.notion-static.com/23edfaf3-d1c9-4d5e-b5ae-954fc31c4d96/IMG_20171229_135146-01.jpeg)

![](https://static.notion-static.com/fa479734-d3e2-4016-a05f-3bf48dbb20ac/IMG_20171229_135236-01.jpeg)

Power up the Pi you should see the two indicator LEDs blinking and Raspbian desktop booting into the Raspbian UI.

![](https://static.notion-static.com/252538fe-5aa4-4273-85c3-c5df15fcd5f9/Screenshot_(519).png)

Make your way through the Raspbian OS. Try out different softwares available in the Raspbian OS.

That’s it you have set up your Raspberry Pi. In the future updates more projects and tips will be added.

Default username & password for Raspberry Pi is `pi` & `raspberry` respectively.

---

# Projects

## Remote viewing with VNC on Raspberry Pi

![](https://static.notion-static.com/a13b9e22-e4a6-4659-8eb7-bda8c138f159/Thumbnail.png)

While building a project with Raspberry Pi it is not always easy to use a monitor with it to view or control. For this, there is a remote desktop viewing feature available on Rasbian OS. It basically lets you control or view your Raspbian desktop on a network-connected PC or smartphone. The application used is [RealVNC](https://www.realvnc.com/en/).

#### Setting Up VNC server on Raspberry Pi

- Raspberry Pi setup with monitor, keyboard & mouse
- A network connected PC or Smartphone
- RealVNC software for PC/Smartphone

Open the terminal available on Raspbian and type in

![](https://static.notion-static.com/a956efe4-ebf6-4231-af2e-c71280a0a808/Screenshot_2018-01-03-20-26-54-755_com.realvnc.viewer.android.png)

    sudo apt-get update

This command make sure's raspbian is up to date. Wait till the command is executed.

After it is done,type in the command given below.

    sudo raspi-config

This command opens this configuration window in the terminal.

![](https://static.notion-static.com/8dcecd72-ce01-4bee-b43f-8ebee82686df/Screenshot_2018-01-03-20-27-18-048_com.realvnc.viewer.android.png)

Using the arrow key get down to Interface options and click select using the arrow key and press enter.

![](https://static.notion-static.com/5bda8987-bec6-44e4-9fd4-b4f85bb13cc1/Screenshot_2018-01-03-20-27-25-949_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/486b3096-644c-40e2-9928-64cf6b854530/Screenshot_2018-01-03-20-27-43-061_com.realvnc.viewer.android.png)

Select VNC in the upcoming window and enable it and click finish.That's it you have enabled VNC in your Pi

![](https://static.notion-static.com/528362bc-288b-48d1-b522-402422c497a9/Screenshot_2018-01-03-20-30-58-660_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/eef14993-b606-4407-8156-01cb58300dfe/Screenshot_2018-01-03-20-31-07-812_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/341b44fe-93c4-41a1-91f0-1c8deae1afd7/Screenshot_2018-01-03-20-31-22-203_com.realvnc.viewer.android.png)

#### Setting up VNC viewer on the PC/Smartphone

Install VNC app from [playstore](https://play.google.com/store/apps/details?id=com.realvnc.viewer.android&hl=en). If you are using your PC go to this site to [download](https://www.realvnc.com/en/connect/download/viewer/) VNC viewer

*Note: Connect your PC/smartphone to the same network as that of the Pi*

Open VNC app and click the **+** icon and type the IP address of your Pi.

To find the IP address of your Pi follow the steps mentioned in this site

[https://www.raspberrypi.org/documentation/remote-access/ip-address.md](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

![](https://static.notion-static.com/dbd55400-eab8-4651-8e08-10caa02dc8be/Screenshot_2017-05-24-13-11-58-420_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/16e8eb5c-2bc1-481f-ae65-28e143f83728/Screenshot_2017-05-24-13-12-11-479_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/9508e4e8-0fc1-4cfc-bb79-3668f5c17965/Screenshot_2017-05-24-13-12-18-636_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/828727dc-b65e-4f39-a019-74d91ca1ff81/Screenshot_2017-05-24-13-12-35-328_com.realvnc.viewer.android.png)

Click connect and it will ask you whether you want to connect click continue and then type the username as `pi` and password as `raspberry` and click continue

![](https://static.notion-static.com/714d7688-5800-495a-832b-185d1c38f62a/Screenshot_2017-05-24-13-12-53-369_com.realvnc.viewer.android.png)

![](https://static.notion-static.com/7e6ef537-ebcc-4c42-bd7e-87adb42e5eca/Screenshot_2017-05-24-13-18-15-816_com.realvnc.viewer.android.png)

You will be welcomed with the wonderful UI of Raspbian.

In the same way you can also use the VNC viewer software available for PC.

## Simple IoT project with Raspberry Pi & Cayenne

Raspberry Pi with its new models has become an integral part of IoT projects. 

By IoT, it means a device connected to the internet that can be controlled and monitored through the internet. In this project, we are going to use a "drag and drop" IoT project builder platform known as [Cayenne](http://cayenne.mydevices.com). With this platform, we can read sensor data, control actuators etc. 

As a beginner step to the IoT project, we are going to control an LED using the Cayenne app (Cayenne can also be used through your PC's browser)

### Things Needed

- Raspberry Pi connected to the internet
- Breadboard
- An LED
- 220ohm resistor
- Female to male jumper wires

Turn on your Raspberry Pi and connect to your network.

Then download the Cayenne app from [play store](https://play.google.com/store/apps/details?id=com.mydevices.cayenne&hl=en) or use their [website](http://cayenne.mydevices.com). 

![](https://static.notion-static.com/504a11bb-af14-4c33-83c2-ceef8c3ca9a4/Screenshot_2018-01-03-21-04-21-956_com.mydevices.cayenne.png)

![](https://static.notion-static.com/3182fd0b-b97d-460c-a277-633d3b393c71/Screenshot_2018-01-03-21-05-44-678_com.mydevices.cayenne.png)

Create your free account.

Click the **+** on the right top side to add new devices. 

![](https://static.notion-static.com/c429edea-751a-4ebd-ba7a-ca1196ed4f5d/Screenshot_2018-01-03-21-05-48-382_com.mydevices.cayenne.png)

![](https://static.notion-static.com/2a75c19a-da4c-4b2e-9c99-477ead0f9c1a/Screenshot_2018-01-03-21-05-53-229_com.mydevices.cayenne.png)

Select Raspberry Pi icon

Follow the instructions above and search for your Raspberry Pi

(Don't forget to connect your phone to the same network as the Pi)

![](https://static.notion-static.com/d4bc4e82-2b1e-4767-bf32-6a226260540b/Screenshot_2018-01-03-21-06-04-534_com.mydevices.cayenne.png)

![](https://static.notion-static.com/ec0131c8-01c2-4fff-8c08-cba0dc7b61e3/Screenshot_2018-01-03-21-07-10-483_com.mydevices.cayenne.png)

It will automatically detect your Raspberry Pi otherwise type in the IP address of your Pi.

Select your Raspberry and click setup. This will then initialize the installation of required files on to the Raspberry Pi.

![](https://static.notion-static.com/82513b71-a93e-45d8-802d-8c3c539cd7d7/Screenshot_2018-01-03-21-07-17-368_com.mydevices.cayenne.png)

![](https://static.notion-static.com/b726c753-d25e-4c71-9063-5430f270a945/Screenshot_2018-01-03-21-07-22-652_com.mydevices.cayenne.png)

It will take 5 min or so to complete this setup. Once it is done select your device from the interface.

![](https://static.notion-static.com/b99c0105-58ce-4ae0-92a4-741916a1d131/Screenshot_2018-01-03-21-13-10-429_com.mydevices.cayenne.png)

![](https://static.notion-static.com/1a676502-499d-4777-8c4b-e549be704b06/Screenshot_2018-01-03-21-13-17-806_com.mydevices.cayenne.png)

![](https://static.notion-static.com/dd7b1e7d-3120-46b1-97b0-f6ab237a98b6/Screenshot_2018-01-03-21-13-27-756_com.mydevices.cayenne.png)

You can see various parameter on the screen, on the other tab you can see the state and details about GPIO's.

![](https://static.notion-static.com/17f46d4e-d3bd-473a-87ce-fe2fda0914be/circuit.png)

Connect your LED to your Raspberry Pi using a breadboard and two jumper wires. Follow the diagram. 

Positive end of the LED to the GPIO 17 of Raspberry Pi. Follow Raspberry Pi GPIO datasheets for clarification. 

The negative end to any of the GND available in the Raspberry Pi.

(Don't forget the resistor. Directly plugging the LED can sometimes damage it)

Click the + icon available on the top right section of the first tab and select light from the actuators and then light switch. 

![](https://static.notion-static.com/eebea64d-e729-4ceb-b7e4-065c7a2a9518/Screenshot_2018-01-03-21-13-37-461_com.mydevices.cayenne.png)

![](https://static.notion-static.com/b33f899e-3d9a-4b9e-bea6-58c79375c98b/Screenshot_2018-01-03-21-14-04-720_com.mydevices.cayenne.png)

- First field: Name it as light switch
- Second field: select your device as Raspberry Pi
- Third field: Select integrated GPIO
- Fourth filed: choose 11,  since we have connected our LED to GPIO 17  that is to pin 11.
- Enable Invert Logic
- Leave the other two fields as it is.
- Then click add button given below.

That's it, you have configured your Raspberry Pi. A button should appear on the interface. Now click that button you have created you should see the LED turning ON.

You have made your very first IoT project. Since it is easy to use Cayenne you can make you or own projects by hooking up different actuators and sensors.

You just need to have that maker mind and an urge to know how things work. If you have any doubt, Google your way. That's how real makers do it 😉

*Follow up projects and tutorials will be added in the future updates.*
