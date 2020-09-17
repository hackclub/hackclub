# Figma for Beginners

**Figma is a vector graphics editor and prototyping tool that can be used for making most of the digital designs. Its the best in what it does and knowing the basics is all that you need to get going!**

![Intro image](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/A4_-_3.png)
image source: unsplash

This workshop is conducted for the ones who are not yet familiar with figma, and this workshop will provide them with the basics to create their first design in figma, be it a UI or a LOGO or a digital poster, any design they wish. 


> You don't have to be an artist to be a designer!
> And you definitely **don't** have to be a designer to use **FIGMA**!!

---

# Lets get started!

Assuming you have already setup your figma account, lets get started with the basics.

For this workshop, I am using figma in windows!

## Create a new file:

Use the `+` icon on the top left corner on the figma window to create a new figma file.

You can rename your file from the top bar which will initially named 'untitled'.

![Rename File](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/rename_file.gif)

Renaming



> Knowing your workspace:

- The blank space at the center of your screen is your **canvas**, where all your work will be done.
- On the Top left you can see the **tools** panel.
- The panel at the left side of your canvas is the **layers** panel, which shows everything that we add or create in your canvas.
- Right side of the canvas is the **options** panel, which snows different customizable properties respective to what tool you have selected.

---

## Create a new Frame:

Frames are an important part of designing in figma. A frame acts as a parent to all the objects you add inside that frame. An element inside it becomes the child. And hence the frame can influence any child objects that you place in it.

You can create a frame using the **Frame tool (F)**. After selecting the frame tool, you can either
choose different presets from the panel at the right side, or you can just drag your mouse on the canvas to create a custom frame.

![Frame](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/frame.gif)

Creating a frame

Choosing the right frame size is important for your design, specially when you are designing to prototype.

---

You can zoom in and out on the canvas using `ctrl + scroll` or by using `+` and `-` keys.

You can pan around the canvas using Hand tool (H). Holding down `space` will temporarily switch your pointer to hand tool.

---

The **Move tool (V)** is the tool that we will use the most. You can move and select the objects on your canvas using it.

- The **design tab** in the options panel lets you change all the *properties* of an object.
- At the top there are different *alignment* options.
- Below that there is  **x** and **y** values which can be used to change *coordinates* of an object
- The **w** and **h** values can be changed to alter the *dimensions* of an object.
- Also the angle and corner-radiuses can be changed from the options given here.
- You can add **Fills** to give a **solid color** or **gradient** to your object, you can add **strokes** and different **effects** from the section below. You can even add an image as a fill.
- You can import an image just by draging and droping it to your canvas. Figma also supports copy-pasting your image from web.

Every image you add to figma is imported as a fill to a shape.

---

## Playing with vectors:

Every shape you create in figma is a vector. You can make **rectangles** , **ellipses**, **polygons** directly using the tools. Rectangle tool has a dropdown toolbar which encloses other shape tools.

Using `shift` key while drawing shapes will give you shape with same width and height i.e, you can make **squares** using rectangle tool and **circles** using ellipse tool

![rectangle](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/rect.gif)

Using rectangle tool

![square](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/square.gif)

Using shift key with rectangle tool to makes a square

---

**Pen tool (P)** can be used to draw a vector, you can add fills and strokes to it.

![pen tool](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/pen_shape.gif)

Using Pen tool

---

Best thing about Figma is that it has a **vector editing** mode which gets toggled when you double click a vector. Here, the **pen tool** can be used to add joints to the existing vector and also you can add curves using **bend tool** and make custom vectors.

![edit vector](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/vector_edit.gif)

Editing a vector

![bend tool](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/vec_bend.gif)

Using bend tool

---

**Boolean operations** like union, intersection, subtraction etc. could be used to make different vector shapes as you desire. Boolean operation menu appear at the top bar when you select multiple elements.

![intersect](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/bool1.gif)

Intersect selection

![Exclude](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/bool2.gif)

Exclude selection

![Substract](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/bool4.gif)

Subtract selection

Use `shift` key to select multiple elements in the canvas

---

An element can be scaled by dragging one of its corners. Use `shift` key to scale the element while maintaining its ratio. But while scaling a text or more than one elements, then this method could sometimes mess things up. So in that case use **Scale tool (K)** to perfectly scale your designs.

![text resizing 1](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/text_resize_eror.gif)

![Text resizing 2](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/text_resize.gif)

And in some cases like in circles, you might want to scale the circle keeping its **center** fixed. To do so hold `alt` key while scaling.

---

Making a duplicate is an important trick to know, you can do that by simply pressing `ctrl + d`  and a duplicate of your selection will appear above itself. Another method to do so is to hold  `alt` key and drag your element, which will let you swiftly move a copy of an item to your destination.

![duplicate](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/dupe.gif)

Once you duplicate an item and move it to a position, figma will remember the movement and next time when you press `ctrl + d` the duplicate will be placed respective to your last movement.

![duplicate 2](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/dupli_dup.gif)

---

You can group multiple elements by selecting them and pressing `ctrl+g`

---

## What is a Component!

Component is a very important part in figma when you have multiple contents of the same type, like chats, Logos, background-designs etc. Make it a component before duplicating it and moving to another design. This will make the first element as the parent and the others as its child elements. All the characteristics of these elements can be changed at the same time by just changing the parent element, rather than selecting each and every copy of that element! 

 You can make an element into a component by selecting it and then clicking the component button at the top bar or use `ctrl + K` 

![component](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/Sequence_02.gif)

A child can be made independent of future component changes by selecting the '**Detach instance**' option in the right-click menu.

---

## Text formatting:

You can find all the text formatting options in the design tab where font type, size, color, alignment, spacing etc can be changed.

![text formating](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/text_1.gif)

A text can be converted to a **vector** by using '**flatten**' option in the right-click menu!

This will help you in making custom changes to fonts by making it a vector and editing it using the vector editing tools!

---

## What to design:

When you start designing, the first thing that you need is an idea or a purpose. And sometimes its hard to make something from scratch, right?! You might be needing some inspiration to pump up our creativity!

You can get inspired from other designers by checking [figma community](https://www.figma.com/community), [dribble](https://dribbble.com), [behance](https://www.behance.net) or any other medias where you can find creative content. 

![community](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/Untitled.png)

Figma Community

But if you are super-creative, then get started right away!!

---

## Plugins Plugins Plugins!!

Plugins are add-ons that will help you design quickly and effortlessly!! Figma plugins can help you import media and icons, create random vector designs, add dummy content reels, edit your image, create 3D designs and a lots of other stuff!

Figma community tab lets you add **plugins** to your figma account, which can be called using the plugins menu when you `right click` on your canvas.
There are a lot of plugins available such as material icons, iconify, Unsplash, remove bg, vectary 3d and much much more!

![plugin1](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/Untitled%201.png)

![plugin2](Figma%20for%20Beginners%20afae43e5319241d2921fc06a5e4897cd/Untitled%202.png)

Figma saves your work automatically in the cloud. 

---

## Export your Work:

You can export your designs by selecting them and heading to the options panel where at the bottom you can find an 'export' button. Add (+) an export, choose file type (jpg, png, svg,pdf) and choose export quality (1x, 2x, etc..) and press export. You can also view your export preview down below!

---

## PROTOYPING with figma:

Figma is packed with live prototyping tool that lets you present a working model of your design, let it be a website or an app. Figma prototyping is simple but very powerful when use use it right!
The prototype tab provides you different options. Play with them!!

---

# Surprise!!!

Hack Club is providing every hack clubber with a free figma-pro subscription!
Contact your club leaders for more info.

---

> Now, the power of figma have been passed down to you!  
> Use it creatively!!

# Design, Collaborate and share.
Keep Hacking!
