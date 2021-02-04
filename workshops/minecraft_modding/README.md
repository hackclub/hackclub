---
name: 'Minecraft Mod'
description: 'Make your first Minecraft mod using Forge and IntelliJ IDEA'
author: '@KaiDevrim'
img: 'https://cloud-m4x2nuz66.vercel.app/image.png'
---  

Learning to mod Minecraft is a very simple process and can help anyone learn programming. Minecraft uses the Java language which albeit old, is still very popular and learning it is still useful. This Minecraft modding workshop will go from setting up IntelliJ IDEA to making an item, creative inventory tab, and a block. The result will look something like this:  

![The end result with an inventory tab and a few items](https://cloud-m4x2nuz66.vercel.app/image.png) 

Here is the [final code](https://github.com/KaiDevrim/PlayerEvolutions/tree/workshop). This workshop should take around an hour to complete but its fun the entire time.

*Note: unlike most workshops, this workshop requires a local development environment. You need to use a computer that you're allowed to install things on. If you're using a school-issued computer or a Chromebook, this workshop may not work for you.*

*For the sake of simplicity, this workshop will assume you're using IntelliJ to code your project.*

## Part 1: Setup  

Download the [Forge MDK for 1.15.2](http://files.minecraftforge.net/maven/net/minecraftforge/forge/index_1.15.2.html).

![Download the MDK](https://cloud-gwdhe1huj.vercel.app/image.png)

*Note: When you click on "Mdk", you will be taken to a very sketchy-looking page with a bunch of ads. Your computer will be fine, but DO NOT click on anything on the page! Wait 5 seconds, then a button that says "Skip" will appear at the top right. Click the "Skip" button to download the Forge MDK. Sadly, navigating spam and adware is normal in the Minecraft world. It's not a big deal, but it's something you should be aware of and navigate through carefully if you choose to continue mod or plugin development.*

Next, make sure you have Intellij IDEA installed. If you don't, [download it here](https://www.jetbrains.com/idea/download/) first (the community edition is fine).

Once the Forge MDK and IntelliJ IDEA (called IDEA from here on) are installed, start up IDEA. Once it's started up, click on `Open or Import`. Find the Forge MDK folder (usually called `forge`) and select the file inside it called `build.gradle`. When prompted, choose `Open as Project`.

![Open As Project](https://cloud-1ijkxbdqk.vercel.app/image.png)  

Once IDEA has opened the project:

1. Click on the tab called `Gradle` at the top right corner. This will look like a super thin tab, and the `Gradle` label will be 90 degrees sideways. You will see a section pop out of the right of IntelliJ. <br>
![Click on Gradle on the side](https://cloud-beqpbpts3.vercel.app/image.png) <br>
2. Open the folder called `Tasks`
3. Open the folder called `fg_runs`
4. Double-click on `genIntelliJRuns` <br>

![Gradle Project -> Tasks -> fg_runs -> genIntelliJRuns](https://cloud-hfo336o3s.vercel.app/image.png) <br>

`Gradle` is the name of the build system we are using. It is what turns our Java code into something the compiler understands. `Tasks` is a directory of all the build actions we can use, so if we wanted to change the way the compiler saw our program then we change which build action or Task. `fg_runs` is the Forge specfic build action set and contains all the build actions for our program. 

`genIntellijRuns` tells the compiler and the program itself that it needs to go through Forge before going through the compiler. This also sets us up with our development environment with the mod automically loaded in and a test version of Minecraft is loaded when you run the program from your IDE.

Once it has been built, it should say `BUILD SUCCESSFUL` in the Build tab at the bottom.

Open `src/main/java/com` and delete the example folder—we will create the files ourselves. If you instead see a package name, like `com.examplemod.something`, instead of a `com` folder, delete that package.

![Delete `src/main/java.com/`](https://cloud-nl8ibjque.vercel.app/0image.png)

If you want, you can also delete the `test` folder in `src/`.

Now, within `src/main/java`, make a new package. Packages usually follow the format `com.yourusername.projectname`.

- Right-click on the `java` folder
- Click on `New`
- Click on `Package` (about 5 options down)
- In the `package name` field, type `com.yourusername.projectname`. For example, I typed `com.devrim.kaimod`. If you're looking for a project name, `PlayerEvolutions` will do. <br>
![creating a package](https://cloud-2zewl9cgd.vercel.app/0screen_shot_2021-02-03_at_5.56.37_pm.png)

Inside your new package, create a new Class by right-clicking on the package, clicking `New`, and selecting `Java Class`. Name the file the same thing as the project name you defined when you created your package. For example, if your package was `com.yourusername.playerevolutions`, you should name the file `PlayerEvolutions`. Since I called my project name `kaimod`, I called my class name `KaiMod`.

A class in Java is a blueprint that allows you to create new objects. For more information about classes [read here](https://www.w3schools.com/java/java_classes.asp)

IntelliJ should automatically open the Java class. If it doesn't, open it by double-clicking it.

Just above the `public class modname` line, add:

```java
@MOD("ModName")
public class ModName {

}
```

Replace "ModName" with your mod name. This will be your mod ID. As you type it, IntelliJ will give you an option to import something from Forge. Hit enter to import it.

Once this happens, here's what your Java file should look like:

```java
package com.yourusername.projectname;

import net.minecraftforge.fml.common.Mod;

@Mod("ModName")
public class ModName {

}
```

When given the option to import an interface, hit enter to import it. If `@Mod` is still red, move your cursor on top of it and type `Alt + Enter` to import it.

Inside the class (in between the curly braces), add:

```java
@Mod("ModName")
public class ModName {
  private static final Logger LOGGER = LogManager.getLogger();
  public static final String MOD_ID = "ModName";
}
```

Make sure "ModName" matches what's inside `@Mod("ModName")` exactly.

Move your cursor onto `Logger` and `LogManager`, then type `Alt + Enter` on your keyboard to import the packages. Once you do this, two `import` statements should be added to the top of the file.

Make sure these are the import statements:

```java
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
```

If the import statements are these:

```java
import java.util.logging.Logger;
import java.util.logging.LogManager;
```

❌ that is incorrect. Delete those lines and replace them with the two that include `org.apache`.

A Logger is just a method that makes it easy to log things to the console. You don't really need to know the specifics of what it does if you don't already know what it is.

Under that line, add a [constructor](https://www.w3schools.com/java/java_constructors.asp), like so:

```java
public ModName {

}
```

Inside the constructor, add:

```java
FMLJavaModLoadingContext.get().getModEventBus().addListener(this::setup);  
FMLJavaModLoadingContext.get().getModEventBus().addListener(this::doClientStuff);  
MinecraftForge.EVENT_BUS.register(this);  
```

Hit `Alt + Enter` to import `FMLJavaModLoadingContext`, as well as `MinecraftForge`, if it isn't already imported. For now, you'll see errors on `setup` and `doClientStuff`. This is because we're referencing some methods that we haven't written yet. Once we write those methods, those errors will go away.

So let's define those methods! After the constructor, add:

```java
public ModName {
  // ...code we just wrote
}

private void setup (final FMLCommonSetupEvent event) {

}
private void doClientStuff(final FMLClientSetupEvent event) {

}
```

Make sure to import `FMLCommonSetupEvent` and `FMLClientSetupEvent`.

What we just made is a very stripped-down version of the example file mod that Forge gives us. Since all we need to do in this workshop is make an item and a block, that is all the Java we need for the mod to load within Minecraft.

<details>

<summary>Here's what your class should look like so far:</summary>

```java
package com.yourname.projectname;

import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.event.lifecycle.FMLClientSetupEvent;
import net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Mod("ModName")
public class ModName {
    private static final Logger LOGGER = LogManager.getLogger();
    public static final String MOD_ID = "ModName";

    public ModWorkshop() {
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::setup);
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::doClientStuff);
        MinecraftForge.EVENT_BUS.register(this);
    }

    private void setup (final FMLCommonSetupEvent event) {

    }
    private void doClientStuff(final FMLClientSetupEvent event) {

    }
}
```

</details>

We do have one more file to edit. Go to your `src/main/resources/META-INF/` directory and open the `mods.toml` file. This file contains the metadata for your mod. You won't need to edit most of the file, but we do need to edit one thing.

Find the line that starts with `modID`. Replace `examplemod` with what you put inside the `@Mod` interface in your Java class. This is case-sensitive, so make sure it looks exactly the same!

For example, here's what I did:

`modID="kaimod"`

In order to build and run Minecraft to test the mod, click on the build menu at the top and choose `runClient`. Then press `Shift-F10` or the triangle play button.

![The build menu](https://cloud-1w8zg60d9.vercel.app/0screen_shot_2021-02-03_at_6.35.14_pm.png)

## Part 2: Setting up the Registry!

That was a lot of setup—but the good news is that now we can actually start writing the mod!

Making your first item is annoying to setup but easy once you understand. 

The first step is to make a registry handler.

A Registry Handler is what Forge [describes as](https://mcforge.readthedocs.io/en/latest/concepts/registries/) making objects known to the game. We are telling Minecraft that there are new elements like blocks, items, sounds, resources and we need to load them in. Without this, Minecraft would not know what to load or how to load in the new resources.

To create one, make a new package in `src/main/java/com/name/modname/` called `util`.

![creating the new package](https://cloud-48raigcjl.vercel.app/0image.png)

Inside of `util`, create a new class called `RegistryHandler`.

![creating the registryhandler class](https://cloud-1eh2dnafi.vercel.app/0image.png)

Inside the `RegistryHandler` class, add:

```java
public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, ModName.MOD_ID);
```

Import any statements that aren't imported. Replace `ModName` with the name of the class you created in the setup step and import it.

The `<>` syntax in this code also means that it is a `generic` type in Java and can be as `of Type`. Since we are not changing the type in this Registry Handler class we can keep it as the default type, `<>`.

Next, create a method called `init()` to initialize the creation of our items. Under the line you just added, add:

```java
public static void init() {
    ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
}
```

(Make sure to import `FMLJavaModLoadingContext`)

Essentially, we are just adding our item to the Forge registry.

To finish off registering our items, go back into your main class, `ModName.java` and before the `MinecraftForge.EventBus` line add this to make sure your registry is loaded into the game:

```java
RegistryHandler.init();
```

Make sure to import your `RegistryHandler` class.

<details>

<summary>Not sure where to add this line?</summary>

```java
@Mod("ModWorkshop")
public class ModWorkshop {
    private static final Logger LOGGER = LogManager.getLogger();
    public static final String MOD_ID = "ModWorkshop";

    public ModWorkshop() {
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::setup);
        FMLJavaModLoadingContext.get().getModEventBus().addListener(this::doClientStuff);
        RegistryHandler.init(); // here
        MinecraftForge.EVENT_BUS.register(this);
    }
```

</details>

## Part 3: Coding your first item! 

The boring registry stuff is out of the way. Now, we can start the fun part: adding items to the game.

Go into the `RegistryHandler.java` class. Inside the class, but after the `init()` method, add:

```java
public static final RegistryObject<Item> ITEMNAME = ITEMS.register("itemname", ItemBase::new);
```

Use `Alt + Enter` to import `RegistryObject`. You'll get an error on `ItemBase` because that is referencing a class that we haven't created yet.

Replace "itemname" and `ITEMNAME` with a creative name. Make sure you keep the correct cases (whatever you replace `ITEMNAME` with must be in all caps, and whatever you replace "itemname" with must be all lowercase with no spaces). This is the name that will appear in the game!

For example, my first `ITEMNAME` is `KAIMOND` and the second `itemname` is `kaimond`.

<details>

<summary> Here's what your RegisteryHandler class should look like so far: </summary>

```java
package com.username.projectname.util;

import com.username.projectname.ModName;
import com.username.projectname.items.ItemBase;
import net.minecraft.block.Block;
import net.minecraft.item.Item;
import net.minecraftforge.fml.RegistryObject;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class RegistryHandler {
    public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, ModWorkshop.MOD_ID);
    public static void init() {
        ITEMS.register(FMLJavaModLoadingContext.get().getModEventBus());
    }
    public static final RegistryObject<Item> ITEMNAME = ITEMS.register("itemname", ItemBase::new);
}

```

</details>

Now, let's fix that `ItemBase` error by creating our `ItemBase` class.

- Right-click on `com.username.projectname` and create a new Package called `items`.
- Once you create that package, right-click on it and create a new Java Class. Call it `ItemBase`.

Once, you're inside the `ItemBase` class:

- First add `extends Item` at the end of the class name.
  ```java
  public class ItemBase extends Item {
  
  }
  ```
- Import `Item` from `net.minecraft.item.Item`.
- Once you do this, you will see an error. Click on the red light bulb (you may have to hover near the left of the line to see it). Then click "Create constructor matching super". <br>
  ![create constructor matching super](https://cloud-5kx4ewe3h.vercel.app/0screen_shot_2021-02-03_at_7.05.57_pm.png)
- IntelliJ should automatically add a few new lines of code:
  ```java
  public class ItemBase extends Item {
      public ItemBase(Properties properties) {
          super(properties);
      }
  }
  ```
- Inside the parentheses of the `ItemBase` constructor, remove `Properties properties`.
- Within the `super()` method, remove `properties` and add this line:
  ```java
  super(new Item.Properties().group(modname.TAB)
  ```
- You will see an error because we haven't made a TAB for our item yet.

Once you've done this, here's what the whole `ItemBase` class should look like:

```java
package com.devrim.kaimod.items;

import net.minecraft.item.Item;
import net.minecraft.item.ItemGroup;
import com.devrim.kaimod.KaiMod;

public class ItemBase extends Item {

    public ItemBase() {
        super(new Item.Properties().group(ModName.TAB));
    }
}
```

A tab in Minecraft is where you will find the item in creative mode. To fix the error, go back into your main class, `ModName.java`, and add this snippet at the bottom of the class:

```java 
public static final ItemGroup TAB = new ItemGroup("modNameItems") { 
    @Override 
    public ItemStack createIcon() { 
        return new ItemStack(RegistryHandler.ITEM.get()); 
    } 
};
```

![screenshot showing where to put this function](https://cloud-2scubjums.vercel.app/0image.png)

Import anything you need to import.

You'll need to replace some things:

- Replace "modNameItems" with the name (no spaces) of what you want the Creative Mode tab to be called.
- Replace `ITEM` with the all-caps `ITEMNAME` you added in the `RegistryHandler` class. Import when IntelliJ prompts you to import.

# Part 4: Making Item Textures 

This part is annoying—pay close attention.

- Close up the `java` folder and open up the `resources` folder.
- Within the `resouces` folder, make a new Directory called `assets`.
- Within `assets`, make new directory called the name of your mod (same case as earlier, styled as ModName)
- Inside of that directory make 4 directories (we will use some of them later when making our block):
  - `blockstates`, `lang`, `models`, `textures`.
  - By default, IntelliJ will try to nest all directories. In order to make these 4 separate directories, you'll have to right-click on the `ModName` folder at the top of Intellij:
    ![the top directory](https://cloud-pq71piq4o.vercel.app/0screen_shot_2021-02-03_at_7.24.24_pm.png)
- Inside the `models` directory, create two more directories: 
  - one called `block`, and another called `item`.
  - Similar to before, in order to prevent IntelliJ from nesting the directories, you'll have to right-click on `models` at the top of IntelliJ to create a new directory.
- Insides the `textures` directory, create two directories inside:
  - one called `blocks` and one called `items`.
  
Here's what your `resources` folder should look like after you've done all of this:

![resources folder complete](https://cloud-4lbi6x898.vercel.app/0screen_shot_2021-02-03_at_7.28.08_pm.png)

Now we need to make a few json files.

Still within the `resources` folder, right-click on the `lang` folder (/src/main/resources/assets/modname/lang) and make a new file called `en_US.json`.

Inside the `en_US.json` file, add a pair of curly braces:

```json
{
}
```

Inside the curly braces, add:

```json
{
  "item.modname.itemname": "MyItem"
}
```

- Replace `modname` with the lowercase `modname` that you chose near the beginning of the workshop. Replace `itemname` with the name of your item that you chose and put in the `RegistryHandler` in the parentheses.
- Replace "MyItem" with whatever you want.

At the end of "MyItem", add a comma followed by a new line. Then, add:

```json
{
  "item.modname.itemname": "MyItem"
  "block.kaimod.modNameItems": "Kai Mod"
}
```

- Replace `modNameItems` with what you called your `TAB`
- Replace "Kai Mod" with what you want the tab to be called

Example of mine:

```json
{
  "item.kaimod.ruby": "Ruby",
  "block.kaimod.ruby_block": "Block of Ruby",
  "itemGroup.kaimod": "Kai Mod"
}
```

Next, find the `models/item` directory and create a new file called `itemname.json`, replacing "itemname" with the all-lowercase name of the item that you defined above.

Inside that fine, add:

```json
{ 
  "parent": "item/generated", 
  "textures": { 
    "layer0": "modname:items/item" 
  } 
} 
```

All this is doing is telling Forge that the item only has one layer.

Remember to replace `modname` and `item` of course.

Next, let's add the texture for the item. Right-click and save this image:

![tiny image texture example](https://cloud-qpr3fyvd6.vercel.app/myitem.png)

to use as an example.

Place the png file in the `textures/items` directory.

For future items, you can design your own item image in Paint or whatever program you want. The only requirements are:

- Needs to be 16x16 pixels
- Filename must be the same as the itemname, exactly
- It must be a .png file

Now run Minecraft using Shift-F10 or the triangle play button and see your item in Minecraft!

# Part 5: Making your first block! 

Making your first block is actually very simple now that we have most of the files and registries made.  

To get started go back to your `src/main/java/com/username/modname/util` folder and open the `RegistryHandler.java` file. Inside of that we are going to just use the same methods from before but change them up a little.

First, copy the line that has `DeferredRegister` in it and paste it right under. Replace `<Item>` with `<Block>`, and both instances of `ITEMS` with `BLOCKS`.

```java
public static final DeferredRegister<Item> ITEMS = new DeferredRegister<>(ForgeRegistries.ITEMS, KaiMod.MOD_ID);
public static final DeferredRegister<Block> BLOCKS = new DeferredRegister<>(ForgeRegistries.BLOCKS, KaiMod.MOD_ID);
```

When you import `Block`, make sure you're importing the one from Minecraft, not from anywhere else.

Next, copy the line that contains `RegistryObject<Item>` and paste it right under.

- Replace `Item` with `Block`.
- Rename the variable from `ITEMNAME`, or whatever name you gave the item, to `BLOCKNAME`, or whatever name you want to give your block.
- Replace `ITEMS.register` with `BLOCKS.register`.
- Replace `ItemBase` with `BlockName`

Finally, create another `RegistryObject<Item>`, like so:

```java
public static final RegistryObject<Item> MY_BLOCK_ITEM = ITEMS.register("ruby_block", () -> new BlockItemBase(MY_BLOCK.get()));
```

One more thing, make another RegistryObject like last time, but keep it as an `<Item>`. Change the name to something like `MY_BLOCK_ITEM`. Then make it equal to `ITEMS.register("myblock", () -> new BlockItemBase(MY_BLOCK.get()));`. 

My code looks like:

```java
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

Remember to replace `KaiMod` with your `ModName`. Also replace `RUBY`, `RUBY_BLOCK`, and `RUBY_BLOCK` item with the names you made.

Now, within your `modname` directory, make a new directory called `blocks`.

Inside the `blocks` directory, make two classes, one called `BlockItemBase`, and another with your block name. Inside the `BlockItemBase.java` file copy and paste this snippet as we are just adding it to our mod's tab.

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
