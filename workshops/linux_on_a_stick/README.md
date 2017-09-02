# Linux on a Stick (Portable Linux)

This tutorial is in beta; you have been warned.

Ever wished you could have your favorite programs on every computer you use?  Want your perfectly curated set of browser extentions no matter where you go?

Well now you can, with the power of shoving a full Linux distro onto a USB stick/external hardrive!

Disclaimer: USB flash drives have a limtied number of times they can be rewritten, and depending on the number cycles your device can handle, installing a full Linux distro may cause it to fail faster if you install and uninstall stuff/get updates a lot. Basically, ** make backups! ** People using external hard drives should be fine, as they are intended to be rewritten a lot.

Disclaimer 2: this will only work on computers that allow USB boot, so some chromebooks, and computers with a bios password may not allow you to boot from USB. Also, I am not responable for people freaking out when they see their computers have completey differnet OSes on them. (Live USB booting is not permenant and will not store anything on their computer unless make it).

## New to Linux? Read here:

Linux is a computery bit called the kernal which is what communcates what your software wants to do and tells it to your hardware hardware. Many operating systems based on Linux have been created, and the are commonly reffered to as  Linux distros, GNU/Linux, or just Linux. If you're not already familiar, Linux is like Windows or macOS, except all of the code is developed publicly and it's completely free. Linux is loved by developers, the most common OS on servers, and it is even what Android is based on.  Linux distros are generally free and open source, very secure against malware, and run super fast. Facebook runs on Linux. Google runs on Linux. Hopefully your code will too.

Also see here for a better explanation:
http://www.techrepublic.com/article/getting-up-to-speed-with-the-linux-desktop-operating-system/

Okay, now that those are out of the way time to get started:

# What even is a persistant Linux USB?

A persistant Linux USB is a normal Linux distro intalled normally to your USB drive. Unlike a live Linux USB, persistant USB drives will keep any changes you make. That means you can save documents, install programs, browser extentions, etc.  This is highly useful if you want to hav

# What you need:

First off you will need three things to make a persistant Linux USB:

- A computer you are the admin on, runnning Linux, Windows, etc.
- A USB drive big enough to install a distro of choice that you dont mind wiping.
- ISO image of the the distro I recommend an [ubuntu flavor](https://www.ubuntu.com/download/ubuntu-flavours) if you have a small flash drive < 16 gb, choose lubuntu, as it only take 3ish gb to install and is **insanely fast**. If you need to run on really slow computers, lubuntu, xubuntu, or Ubuntu MATE should work well. Otherwise, choose whatever ubuntu you wish. [Linux mint](https://www.linuxmint.com/download.php) is really good if you like windows 7's user interface.  (Xfce version for slow computers)
- A program to create live USBs that supports persistance (more on this later)
  
## Please note: you must get the 32 bit verison of distros to run on older 32 bit machines, but your RAM will be generally limited to under 4gb.

# Step One: Installing Your Distro To USB

## This tutorial also covers how to install to USB from Ubuntu later on.

In order to create your live USB drive install [Linux Live USB Creator (LiLi)](http://www.linuxliveusb.com) or the [Universal USB Installer](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)  

If you are on Ubuntu use [Unetbootin](https://unetbootin.github.io/)
  
For this part of this tutorial, I will be using Linux Live USB Creator, but the steps should be roughly the same for all of the above programs.

First, download your live USB maker of choice and the ISO you plan to use, and of course, plug your USB drive into your computer, and format it to FAT32.  (You can also format it to NTFS skip the step for going over 4gb of storage, but this may cause issues with  LiLi). 

Next open your program of choice, select the USB drive you intend to use **Be careful: DO NOT SELECT YOUR HARD DRIVE, that will wipe your computer** I also recomend removing all of your USB drives except for the one you are using, to avoid acidentally wiping important data. Select the iso file you downloaded ealier, and make sure to set as much persistant storage as you want.  At this moment you will only be able to set 4gb of storage, but that is normal, and is due to the FAT 32 filesystem.  We will fix this later.  Install the iso to your flash drive, and find something to do while it loads.  

Your config should look something like this:

![ignore the weird name of my flash drive, I did this like 50 times](http://imgur.com/a/jZ46Z)

Please note: if you are using Unetbootin on Windows, the program will apear unresponsive, and windows will tell you this. The installation should keep going, unless the program actually did crash. Just be patient, wait at least 20 minutes and the installation should finish.

# Step Two: Booting

Insert the USB Drive into the computer you want to boot onto (you must have acess to the BIOS) and set the BIOS to boot from the USB, and set it to legacy mode (unless it is so old it doesnt need one). You may also need to find a separate setting to boot from legacy mode as a primary. Most BIOSes can be acessed by pressing the f1,f2,f11,f10 or another one of the fkeys during startup.  (Google it for your computer if that doesnt work). After you are done in BIOS, exit saving changes, and wait for the computer to boot.  If you are greeted by a screen with boot options, and one of them is persistent, choose the option persistent.  If you do not see persistent, press f6 for more options and select persistent.  If that does not work, your computer may not be compatable, or you did something wrong.  If you see a screen that just says "try [name of your distro here]" then it will only take to a live boot version where nothing can be saved after you power down.

To make sure you did everything correctly, make a file somewhere, and then reboot, and see if it is still there.

If it is still there: [awsome](https://img.guggy.com/media/SESaPG90w2/animated/2/h/4vTqo9tWovbQvEy27jNDubQknDTgyLgVwkjLobJZb3HGKbVxf3xnLo9R4h7JGwdj2vTBeSaw2xmUSk24rxL7BWkLVXVhoxUV2orim8UptKGExckb6H9DYLSmgf5bmxvo1-06qAy9LCM9OR9oaiitEq/guggy.mp4)

# But wait there's more:
# (Optional) Step Three: Add More Than 4 GB of Storage

### You will need either a computer running Linux, or a Linux live USB (nonpersistant is fine) for this step. You can skip this if you used the NTFS file system ealier on.

The first thing to do is boot into a copy of Linux, other than the one on your new portable Linux drive, and then plug in your persistant USB. On the USB drive, there should be a file called casper-rw; delete it. **WARNING:** that is where your stored files go on the persistant drive, so backup anything on the portable drive before hand. Next open up (and download) the program GParted (or some alternative). Once in it, select your hard drive and right click on it.  You will see the option to unmount; choose it.

![What you should see (more or less.)](https://i.imgur.com/ViVyqsn.png)

After you unmount, right click again, and click resize. Then resize the partition on your persistant USB drive to the smallest possible size. Also make sure the partition has 0 mib preceeding it, so your new storage partiton can use all of the free space.

![Should look like this](https://i.imgur.com/blYp32b.png)

Now all we have to do is create a new casper-rw! We will do this by right clicking on the unallocated space and creating a new partition.  Set the file system to ext4, and then label it as casper-rw

Set the new partition to take up all the free space, create it, bam, we are done!
