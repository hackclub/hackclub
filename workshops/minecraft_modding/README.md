---
name: 'Minecraft Mod'  
description: 'Make your first Minecraft mod using Forge and IntelliJ IDEA'  
author: '@KaiDevrim'  
---  
# Minecraft Modding Workshop by Kai  

Learning to mod Minecraft is a very simple process and can help anyone learn programming. Minecraft uses the Java language which albeit old, is still very popular and learning it is useful to know still. This Minecraft modding workshop will go from setting up IntelliJ IDEA to making an item, creative inventory tab, and a block. The result will look something like this:  

![The end result with an inventory tab and a few items](https://cloud-m4x2nuz66.vercel.app/image.png) 

Here is the [final code](https://github.com/KaiDevrim/PlayerEvolutions/tree/workshop). This workshop should take around an hour to complete but its fun the entire time.  

## Part 1: Setup  

Download the [Forge MDK for 1.15.2] (http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html)  

![Download the MDK](https://cloud-gwdhe1huj.vercel.app/image.png)  

After you download it, unzip it and start up IntelliJ IDEA (called IDEA from here on). If you want to delete some files you can, just keep the `gradle/`, `src/`, `build.gradle`, `gradle.properties`, `gradlew`, and `gradlew.bat` files. Put the files specificed in a new folder, prefereably somewhere easy to access like the Desktop or Documents folder. From there you want to click on `Open or Import` in IDEA and then navigate to your the folder you just created. Double-click on the `build.gradle` file and have it `Open as Project`.

![Open As Project](https://cloud-1ijkxbdqk.vercel.app/image.png)  

Once IDEA has opened the project go to your side bar and click on the `Gradle` tab. 
Open the list and open `Tasks` from there. 
Now go into `fg_runs` and double-click on `genIntelliJRuns`. 
Wait for it build and everything, this may take some time so go think of some mod ideas while its building.

By the way if you are using Eclipse for some reason use the Eclipse one instead of IntelliJRuns.  

<details open>
<summary> Eclipse Users: </summary>
<br />
If you are using Eclipse then the previous section does not apply to you. To start off, download the forge MDK and unzip to a new folder, put it anywhere you like, I will put mine on the Desktop. Open a new terminal window by pressing your "search" button (cmd+space on mac or windows key on windows) and type in "terminal". From here you want to type `cd` then your directory that you put it in. For me I am going to type `cd Desktop/MinecraftMod.`From here type in `gradlew eclipse`. This will generate the files for you. Wait until it says `BUILD SUCCESSFUL`. Open up Eclipse and click on `File`. Then select `Open Projects from Directory`. Select the folder where your Forge MDK and gradlew build is. For me this is Desktop/TestMod. 
</details>

![Click on Gradle on the side](https://cloud-beqpbpts3.vercel.app/image.png)  

![Gradle Project -> Tasks -> fg_runs -> genIntelliJRuns](https://cloud-hfo336o3s.vercel.app/image.png)  

`Gradle` is the name of the build system we are using, it is what turns our Java code into something the compiler understands. `Tasks` is a directory of all the build actions we can use, so if we wanted to change the way the compiler saw our program then we change which build action or `Task`. `fg_runs` is the Forge specfic build action set and contains all the build actions for our program. 

Finally we have `genIntellijRuns`, this is the build action we have chose while the other items we disussed were just directories of different buld actions. The `genIntellijRuns` tells the compiler and the program itself that it needs to go through Forge before going through the compiler. This also sets us up with our development environment with the mod automically loaded in and a test version of Minecraft is loaded when you run the program from your IDE.

Once it has been built, it should say `BUILD SUCCESSFUL` in the Build tab at the bottom. 
Open `src/main/java/com/` and delete the example folder as we will create the files ourselves. 

![Delete `src/main/java.com/`](https://cloud-nl8ibjque.vercel.app/0image.png)

If you want, you can delete the `test` folder in `src/`. 
Now within `src/main/java`:
- make a new package called `com` 
- then under com make a new package and type your name (not the mod name), 
- then under `com/username/` make a new package with the name of your mod in all lowercase with no space. 
- Mine is like this `com/devrim/kaimod`. 
- I will be using kaimod as my mod name, name it whatever you like. 
- Inside of your mod name package make a new class file with the same name as the mod. 

Now I will provide some code and explain each part of it and have the user change where it is necessary. This code will be typed in the kaimod.java file you just created. `/src/main/java/com/devrim/kaimod/kaimod.java`.

Above the `public class modname` 
- add a line that has `@MOD("modname")`. 
- This means that this is your mod id. 

Within your public class modname add a line of code like this: 
- `private static final Logger LOGGER = LogManager.getLogger();`. 
- Using IDEA press `Alt + Enter` to import the correct import. 

This line of code just means to make a `private static` object that cannot be edited based on Logger called LOGGER which is from the `LogManager.getLogger` method. 

Now under that make a new method with the same name as your class like `public modname() { }`. Within in your brackets add these 3 lines:  

```java
FMLJavaModLoadingContext.get().getModEventBus().addListener(this::setup);  
FMLJavaModLoadingContext.get().getModEventBus().addListener(this::doClientStuff);  
MinecraftForge.EVENT_BUS.register(this);  
```

This just is telling forge to initialize a mod basically and add it to Minecraft. You may see some errors but that's because we haven't made some of the needed methods. Under the method not the class add these two methods:  

`private void setup (final FMLCommonSetupEvent event) { }`  
`private void doClientStuff(final FMLClientSetupEvent event) { }`  

What we just made is a very stripped-down version of the example file mod that Forge gives us. Since all we need to do in this workshop is make an item and a block that is all the java we need for the mod to load within Minecraft. 

We do have one more file to edit. Go to your `src/main/resources/META-INF/` directory and open the `mods.toml` file. You may see a lot of words but that's ok. I would suggest deleting the comments and going through the file on your own and adding information for your mod. 

Currently all we need to edit for it to get up and running is the `modID=""` line. Make sure this is the same as what you used in the `@MOD` line from before in your `/src/main/java/com/name/modname. Now you should have the setup complete. 

`modID=kaimod`

In order to build and run Minecraft to test the mod click on the build menu at the top and choose runClient. Then press `Shift-F10` or the triangle play button.  
  
![The mods.toml file](https://cloud-7jo0eyznj.vercel.app/image.png)
# Part 2: Setting up the Registry! 

Making your first item is annoying to setup but easy once you understand. 

The first step is to make a registry handler.

A Registry Handler is what Forge [describes as](https://mcforge.readthedocs.io/en/latest/concepts/registries/) making objects known to the game. We are telling Minecraft that there are new elements like blocks, items, sounds, resources and we need to load them in also. Without making a Registry Handler then Minecraft would not know what or how to load in the new resources.

To create one just make a new package in `src/main/java/com/name/modname/` called `util`. Inside of `util` add a new class called `RegistryHandler`.
![](https://cloud-48raigcjl.vercel.app/0image.png)
![](https://cloud-1eh2dnafi.vercel.app/0image.png)

A class in Java is a blueprint that allows you to create new objects. 
For more information about classes [read here](https://www.w3schools.com/java/java_classes.asp)

Within that RegistryHandler add this line of code: 
```java
public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, modname.MOD_ID);
```

Remember to replace modname.MOD_ID to whatever your package name is. For example, com.devrim.kaimod.

Basically what it does is make a new `ITEMS` variable that is not able to be changed and based on the Forge implementation of Item Registries. Also remember to replace `modname.MOD_ID` to whatever the package is, like `com.devrim.kaimod`, modname would be kaimod.

The `<>` syntax in this code also means that it is a `generic` type in Java and can be as `of Type`. Since we are not changing the type in this Registry Handler class we can keep it as the default type, `<>`.

Now you may run into an error in our code, that is because we need to make a `MOD_ID` string in the main mod class. Head back over to `modname.java` and add this line of code to just make a `MOD_ID` variable. 
```java
public static final String MOD_ID ="";
```

Within the string, change the "" to the modid you are using.  

Now we need to make an `init` function to initialize the creation of our items. Go to your `RegistryHandler.java` and add these lines

```java
public static void init() {
    ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
}
```

Essentially, we are just adding our item to the Forge registry.

To finish off registering our items, go back into your main class, `modname.java` and before the `MinecraftForge.EventBus` line add this to make sure your registry is loaded into the game. `RegistryHandler.init();`. 

# Part 3: Coding your first item! 

The boring registry stuff is out of the way, and now because of that we can add items to the game. 

Go into the `RegistryHandler.java` class and add this final line of code,
```java
public static final RegistryObject<Item> ITEMNAME = ITEMS.register("itemname", ItemBase::new);
``` 
This is going to be your item so put a creative name in, make sure it is all caps for the first `ITEMNAME` instance and no spaces. The second one must be lowercase and no spaces.

For example the first `ITEMNAME` is `KAIMOND` and the second `itemname` is `kaimond`.

Now you might get an error and that's because we need to setup an `ItemBase` class. This is very simple to setup. Start by making a package in your modname directory called `items`. Inside of that package make a new class called `ItemBase`. 

For me is would be `/src/main/java/com/devrim/kaimod/items/ItemBase.java`

Making the `ItemBase` class is very simple and even simpler if you are using IDEA. 
- First add `extends Item` at the end of the class name. 
- Then you may see an error, click on `create constructor matching super`. 
- In those new lines find the ItemBase method and remove the `Properties properties` part because we will make our own for this. 
- Now within the `super()` remove properties and add this line, `new Item.Properties().group(modname.TAB)` 
- now there is going to be an error, that is because we haven't made a TAB for our item yet. 

The final code for this should be:
```java
package com.devrim.kaimod.items;

import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import com.devrim.kaimod.KaiMod;

public class ItemBase extends Item {

    public ItemBase() {
        super(new Item.Properties().group(kaimod.TAB));
    }
}
```
Remember to replace `kaimod` with the name of your mod. 

A tab in Minecraft is where you will find the item in creative mode. To fix the error go back into your main class, `modname.java` and add this snippet in your modname function.
```java 
public static final ItemGroup TAB = new ItemGroup("modNameItems") { 
        @Override 
        public ItemStack createIcon() { 
            return new ItemStack(RegistryHandler.ITEM.get()); 
        } 
    }; 
```

![](https://cloud-2scubjums.vercel.app/0image.png)

Replace `modNameItems` with a name with no spaces of what you want the Creative mode tab to be called. Also replace `item` in `RegistryHandler.item.get` with what you called your item in all caps in the `RegistryHandler` class. 

# Part 4: Making Item Textures 

This part is annoying but requires little coding. 
- Close up your java folder and open up the `resources` folder. 
- Within resources make a new directory called `assets`. 
- Within assets make new directory with the name of your mod. 
- Inside of that directory make 4 directories, we will use some of them later when making our block. 
- `blockstates`, `lang`, `models`, `textures`. 
- Now in the `models` directory create two more directories, 
- one called `block`, and another called `item`. 
- Now go back to the `textures` directory and create two directories inside of that. 
- One called `blocks` and one called `items`.  

Now we need to make a few json files. 
- Go back to your lang folder (/src/main/resources/assets/modname/lang) and make a new file called `en_US.json`. 
- Within that file make a pair of brackets and inside of them write this line, `"item.modname.itemname": "MyItem"` replacing modname with your modname and itemname with the name of your item in registry handler in the parenthesis. 
- Also, MyItem should be any name you want as this is the display name for your item.  

In the same file add a comma to the end of the string and add a new line with the following, `"itemGroup.modNameItems": "Kai Mod"` replacing modNameItems with what you called your tab and Kai Mod with what you want the tab to be called. 

Example of mine:
```java
{
  "item.kaimod.ruby": "Ruby",
  "block.kaimod.ruby_block": "Block of Ruby",
  "itemGroup.kaimod": "Kai Mod"
}
```

Now go into the `models/item` directory and make an itemname.json file. Make sure it is the same name for the item you want to use. Within that file just copy and paste this code to tell Forge that the item has only one layer basically. 

``` 
{ 
  "parent": "item/generated", 
  "textures": { 
    "layer0": "modname:items/item" 
  } 
} 
```
Remember to replace modname and item of course. 

It is time to add the texture for the item. The following image is an example image. You can right click it an download or save image.

![](https://cloud-qpr3fyvd6.vercel.app/myitem.png). 
![](https://cloud-4yiycp755.vercel.app/0image.png)

You can make your own item image in paint the only requirements are:
- Needs to be 16x16 pixels
- Filename must be the same as the itemname, exactly
- It must be a .png file

Place the png file in the `textures/items` directory. 

Now run Minecraft using Shift-F10 or the triangle play button and see your item in Minecraft! 

# Part 5: Making your first block! 

Making your first block is actually very simple now that we have most of the files and registries made.  

To get started go back to your `src/main/java/com/username/modname/util` folder and open the `RegistryHandler.java` file. Inside of that we are going to just use the same methods from before but change them up a little. 

- Duplicate the DeferredRegister line at the start and change the `<Item>` to `<Block>` 
- Rename `ITEMS` to `BLOCKS` in both cases. 
- Now, duplicate the `ITEMS.register` line and change `ITEMS` to `BLOCKS`. 
- Now duplicate the `RegistryObject<Item>` line and change `Item` to, you guessed it, Block. 
- Now create a name for the variable, I am calling mine MYBLOCK. 
- Now change the `ITEMS` part to `BLOCKS` and put a lowercase version of your block name. 
- Also change Itembase to the `MYBLOCK::new`. 

One more thing, make another RegistryObject like last time, but keep it as an `<Item>`. Change the name to something like `MY_BLOCK_ITEM`. Then make it equal to `ITEMS.register("myblock", () -> new BlockItemBase(MY_BLOCK.get()));`. 

My code looks like:
```java
package tech.devrim.playerevolutions.util;

import...

public class RegistryHandler {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, KaiMod.MOD_ID);
    public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, KaiMod.MOD_ID);

    public static void init() {
        ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
        BLOCKS.register(FMLJavaModLoadingContext.get().getModEventBus());
    }

    //Items
    public static final RegistryObject<Item> RUBY = ITEMS.register("ruby", ItemBase::new);

    // Blocks
    public static final RegistryObject<Block> RUBY_BLOCK = BLOCKS.register("ruby_block", RubyBlock::new);

    //Block Items
    public static final RegistryObject<Item> RUBY_BLOCK_ITEM = ITEMS.register("ruby_block", () -> new BlockItemBase(RUBY_BLOCK.get()));
}
```

Remember to replace KaiMod with your ModName. Also replace `RUBY`, `RUBY_BLOCK`, and `RUBY_BLOCK` item with the names you made. 

Now within your modname directory, make a new directory called `blocks`. Now make two classes, one called `BlockItemBase`, and another with your block name. Inside the `BlockItemBase.java` file copy and paste this snippet as we are just adding it to our mod's tab. 

```java 
public class BlockItemBase extends BlockItem { 
    public BlockItemBase(Block block) { 
        super(block, new Item.Properties().group(kaimod.TAB)); 
    } 
} 
```
Change kaimod to the name of your mod. 

Now open your block class and this is where we set the properties of the item! At the end of the class name, make sure it extends Block. Now make a method inside of your class with the same name, make it public as well. Within the method write 
``` java
super(Block.Properties.create() 
    ); 
```
Within the parenthesis of .create write Material. then your IDE should list all the Materials in the game. 

![](https://cloud-ghi874id6.vercel.app/0image.png). 

This just means what type of block it is. I set mine to `Material.IRON`. 
Now after the parenthesis put down a period and there should be a lot of different methods available. For the sake of simplicity, I will just make it only minable with a pickaxe. You can do that by setting `.harvestTool(ToolType.Pickaxe)`.  

That is all for coding our block now onto getting it in our game. 

# Part 6: Block Textures 

Making our block have a texture is easy. We already did most of the hard work in the items part. 

- The first step is to add onto the `en_US.json` file in `src/main/resources/assets/modname/lang`. 
- Very simply add this line and replaces kaimod, myblock, MyBlock with your names. `"block.kaimod.myblock": "MyBlock"`. 
- Now in your `blockstates` folder make a json file with your block as the title. 
- Inside of it add this (we are currently in /src/main/resources/assets/modname/blockstates: 
``` 

{ 
  "variants": { 
    "": { "model": "modname:block/blockname" } 
  } 
} 
```
Now for the next json, go into `/src/main/resources/assets/modname/models/block` and add a the same json name as the previous one. Then add this to the json: 
``` 
{ 
  "parent": "block/cube_all", 
  "textures": { 
    "all": "modname:blocks/blockname" 
  } 
} 
```
Now for the final json, go into `/src/main/resources/assets/modname/models/item` and make another file with the same name and add this: 

``` 
{ 
  "parent": "modname:block/blockname" 
} 
```
Remember to replace modname and blockname. Now make a 16x16 png texture, I will be using a simple texture as an example. Place that png under `textures/blocks`. Make sure it has the same name you have been using for the file names. 
![Simple green/red texture](https://cloud-lhwjz30iu.vercel.app/myblock.png)
Now you have finished making your first mod. Go start it and have fun. 

# Extra Demos
## [First Demo Link](https://github.com/devrimtech/PlayerEvolutions/tree/hackable-demo-1)
![](https://cloud-kl251xoy7.vercel.app/0image.png)

## [Second Demo Link](https://github.com/devrimtech/PlayerEvolutions/tree/hackable-demo-2)
![](https://cloud-cf16uvc03.vercel.app/0image.png)

## [Third Demo Link](https://github.com/devrimtech/PlayerEvolutions/tree/hackable-demo-3)
![](https://cloud-rhvv52dfm.vercel.app/0image.png)
