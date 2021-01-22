---
name: Hack Club Badge Generator
description: Make a Hack Club Badge with your name and picture
author: '@Melvin-Thomas-Dev'
img: 'https://cloud-9wn2hv2iz.vercel.app/0template_-_copy.png'
---

# Hack Club Badge Generator.

Waiting for a chance to kick start your coding skills and make something cool and interesting?  Well then, you are in the right place!! 

We are all part of the hack club community and what better way to introduce yourself and the local hack club to which you belong, than with a stylish badge that will help you stand out from the crowd. In this workshop, we’ll teach you how to make a badge generator. It would be great if you had a basic knowledge of python but even if you don’t we have made this quite simple for you to easily pick up the concepts.

We will be making a badge generator wherein you can load your image and generate a badge with a beautiful template containing your name and hack club name as shown below.

![alt final_image](https://cloud-2s7kfdv88.vercel.app/0john_doe_badge.png)

Let's Look at how we will build this!
We will use this template image as our starting material

![alt template_image](https://cloud-9wn2hv2iz.vercel.app/0template_-_copy.png)

You can download the high quality image from [here](https://cloud-3a5mpac6q.vercel.app/0template.png).

First of all we will take your picture and then resize it so that it can fit inside the white rectangle in the template. For that we will first set the height for the image to be equal to the height of the white box (in our case it is 474px) and then calcuate the equivalent width for the image so that we do not loose the original ratio of the image. Once we have the image we will crop it to the required dimensions(474px X 474px) and then paste it in the white box. 
Now we add your Name and the name of your hack club to the badge. For that we get the input from you and then calculate a font size for the text so that it will fit perfectly for any name. Once we have have calculated the font size, we then create a label with your name on the center and then paste that to the badge. We do the same thing for your hack club name and then we save the image. Thats it. Your badge is ready

The font we have used for our badge is "gobold regular". You can download the font file from [here](https://cloud-p8pyhxmkf.vercel.app/0gobold_regular.otf). Download the template image and the font file and save it into a folder called "Hack club Badge Generator".

We will also need to install one python module called "Pillow". Pillow is a python module used to process images. To install pillow open your terminal/ command prompt and type in 
```python
pip install pillow
```
Once you have done these, you are set to start coding.

## So let's get coding

First of all let us create a file to write our code in. Create a file called "script.py" and open  it in a text editor of your choice.

We need to import Image and ImageDraw, ImageFont from pillow. These are used in various parts of our code.

```python
from PIL import Image, ImageDraw, ImageFont
```
Now we will open the template image

```python
template = Image.open('template.png')
```
This will create an image object which we will refer to using the name "template"

Now let's start making our badge. For that let us write a function called `generate_badge()`

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
```

What we did here is we opened your picture and then resized it. Make sure to copy a good looking picture of yours to the same folder and rename it to "image" (or you can change the `image.jpeg` part of the code and add the name of the image you have copied to the folder)
Now we know that the height is accurate. But the width is still not going to fit the box. So let's crop the image to the size of the white box.
Now let's crop the image from the center so that it fits perfectly inside the box

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))

    #NEW LINES OF CODE
    width, height = hacker_img.size
    left = (width - 474)/2
    top = (height - 474)/2
    right = (width + 474)/2
    bottom = (height + 474)/2
    hacker_img = hacker_img.crop((left, top, right, bottom))
```

We used the actual width and height of the image and then found 4 points with which we will crop the image. We cropped the image using `hacker_img.crop()`

Now we have the picture in the perfect size. Now we have to paste it inside the box. Let's do just that!

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
    width, height = hacker_img.size
    left = (width - 474)/2
    top = (height - 474)/2
    right = (width + 474)/2
    bottom = (height + 474)/2
    hacker_img = hacker_img.crop((left, top, right, bottom))

    #NEW LINES OF CODE
    template_copy = template.copy()
    position = (197, 320)
    template_copy.paste(hacker_img, position)
```

We created a copy of the template image so that we can reuse the image for any number of badges, and then pasted the picture inside the box.
`position = (197, 320)` is the position at which the picture should be pasted. The coordinates 197 and 320 are respectively the X and Y coordinates of the top left point of the box(in pixels).

### Time to print your name

Now we need to print your name and the name of your hack club. For that let us define 2 more functions `create_label()` and `get_fontsize()`.
`create_label()` function will create a transparent label with a text in the center.
`get_fontsize()` will calculate the font size depending on the text you enter.

Now let us pause the `generate_badge()` function for the time being and code the other 2 functions.

```python
def get_fontsize(image, txt,fraction=1.0):
    fontsize = 1  # starting font size
    # portion of image width you want text width to be
    img_fraction = float(fraction)
    font = ImageFont.truetype("Gobold Regular.otf", fontsize)
    while font.getsize(txt)[0] < img_fraction*image.size[0]:
        # iterate until the text size is just larger than the criteria
        fontsize += 1
        font = ImageFont.truetype("Gobold Regular.otf", fontsize)

    fontsize = 80 if fontsize>80 else fontsize
    if fontsize<35:
        fontsize = get_fontsize(image, txt, 1.4)
    return fontsize
```

What this function does is, it calculates the fontsize so that the width of the text (in this case your name and the hack club name) is approximately equal in width to the image we have pasted.
we start with fontsize = 1.
The `img_fraction` signifies the percentage of the image the text should cover. The default value is given as 1 so that the fontsize of the text we enter is such that  the width of the text is approximately equal to the width of the image we have pasted.
We define the font variable with the font to be used and the fontsize

`font = ImageFont.truetype("Gobold Regular.otf", fontsize)`

Next we increase the fontsize in steps of 1 until the width is just greater than the image width using a while loop. The `getsize()` function returns a tuple of the form (<width>, <height>). So `font.getsize[0]` refers to the width of the text.
Similarly the size function of an image returns a tuple of the same format. So  `image.size[0]` will give you the width of the image.
We multiply that with the image fraction so that we get the maximum width that our text can have.
Now we increase the fontsize until the width of the text is just greater than the maximum value. When the desired fontsize is reached, the while loop will be terminated. 
Now we just do some final adjustments so that the name doesn't look too big or too small. If the fontsize is greater than 80 we decrease it to 80. If the fontsize is smaller than 35, then we call the `get_fontsize()` function once again, but this time the fraction of image to fill is changed to 1.4.
After these final adjustments are done, the function returns the fontsize.

That's the whole of `get_fontsize()`.


Now let us code the `create_label()` function that creates a transparent label with some text in the center.

```python
def create_label(text, hacker_img):
    fontsize = get_fontsize(hacker_img, text)
    font = ImageFont.truetype('Gobold Regular.otf', size=fontsize)
    color = 'rgb(236,55,80)' # Red Color
    strip_width, strip_height = 669, 99
    text_label = Image.new("RGBA", (strip_width,strip_height), (0,0,0,0))
    draw = ImageDraw.Draw(text_label)
    text_width, text_height = draw.textsize(text, font)
    position = ((strip_width-text_width)/2,(strip_height-text_height)/2)
    draw.text(position, text, color, font=font)
    return text_label
```
First we get the fontsize by calling the `get_fontsize()` function. Then we sent the font to gobold regular.
The line `font = ImageFont.truetype('Gobold Regular.otf', size=fontsize)` sets the font and the fontsize. We set the color of the font to the hack club red color using `color = 'rgb(236,55,80)'`. 
Now we will create a transparent label and write the text to the center of the badge. `strip_width, strip_height = 669, 99` defines the width and height of the label we are creating.
Now we create the label using the `Image.new()` function. The 3 parameters we pass are
1. The color mode of the image - "RGBA"
2. The width and height of the image - (strip_width,strip_height)
3. The color of the image - (0,0,0,0)

The third parameter is where we set the transparency of the image.
(0,0,0) represents black color and the final 0 is the alpha value of the image. A transparent image will have alpha value equal to 0.
Hence by setting the color to (0,0,0,0) we have created a transparent label.

Now we create an ImageDraw object which will be used to draw the letters on the label. `draw = ImageDraw.Draw(text_label)` creates an ImageDraw object that can be used to draw on the text_label.

Now we need to write the name to  the center of the label. For that we first get the height and width of the text and then calculate the position at which we should draw the text.
Now we have the text to draw and the position to draw the  text. So we draw the text on the label using `draw.text(position, text, color, font=font)`. We pass in the text, the position, the color and the font. Once the label is ready the function returns the label.

Now we have both our functions `get_fontsize()` and `create_label()` ready. 
At this point your file should look something like this
```python
from PIL import Image, ImageDraw, ImageFont
template = Image.open('template.png')

def get_fontsize(image, txt,fraction=1.0):
    ...
    ...

def create_label(text, hacker_img):
    ...
    ...

def generate_badge():
    ...
    ...

```
Now let's get back to our main function `generate_badge()`.

We have the badge with the image pasted in the white box.
Now we need to add your name and the name of your hack club.

Let us create a label for your name first and paste it.

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
    width, height = hacker_img.size
    left = (width - 474)/2
    top = (height - 474)/2
    right = (width + 474)/2
    bottom = (height + 474)/2
    hacker_img = hacker_img.crop((left, top, right, bottom))
    template_copy = template.copy()
    position = (197, 320)
    template_copy.paste(hacker_img, position)

    # NEW LINES OF CODE
    name = input("Enter Your Name:").title()
    name_label = create_label(name, hacker_img)
    name_position = (103,873)
    template_copy.paste(name_label, name_position, name_label)
```

We got the name using the input function and then created the label using the `create_label()` function. Now we set the position at which the label is to be pasted and then we paste it like we did for our picture earlier. The `.title()` at the end of the input function is for converting the input value into title case( i.e. To make the first letter of each name uppercase). You might have noticed that we passed the name of the image 2 times when we were pasting the label. This is because the 2nd time, we passed it as a mask. The mask property is used to preserve the transparency of the label.

Now let us repeat the same for the name of the hack club.

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
    width, height = hacker_img.size
    left = (width - 474)/2
    top = (height - 474)/2
    right = (width + 474)/2
    bottom = (height + 474)/2
    hacker_img = hacker_img.crop((left, top, right, bottom))
    template_copy = template.copy()
    position = (197, 320)
    template_copy.paste(hacker_img, position)
    name = input("Enter Your Name:").title()
    name_label = create_label(name, hacker_img)
    name_position = (103,873)
    template_copy.paste(name_label, name_position, name_label)

    # NEW LINES OF CODE
    hc_name_abbr = input("Enter Hack Club Name: ").upper()
    hc_name = "Hack Club " + str(hc_name_abbr)
    hc_label = create_label(hc_name, hacker_img)
    name_position = (103,1011)
    template_copy.paste(hc_label, name_position, hc_label)

```
You dont need to enter the full name of your hack club you just need to enter the last part.If the name of your hack club is hack club MACE, you just need to input "mace" the suffix hack club is added by this line `hc_name = "Hack Club " + str(hc_name_abbr)`.
If you would like to have the hack club name in some other form, ou can achieve it by changing this line.

At this point we have added your picture, your name and the name of your hack club.
Now all we have to do is save the badge.
Let's go ahead and save the image.

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
    width, height = hacker_img.size
    left = (width - 474)/2
    top = (height - 474)/2
    right = (width + 474)/2
    bottom = (height + 474)/2
    hacker_img = hacker_img.crop((left, top, right, bottom))
    template_copy = template.copy()
    position = (197, 320)
    template_copy.paste(hacker_img, position)
    name = input("Enter Your Name:").title()
    name_label = create_label(name, hacker_img)
    name_position = (103,873)
    template_copy.paste(name_label, name_position, name_label)
    hc_name_abbr = input("Enter Hack Club Name: ").upper()
    hc_name = "Hack Club " + str(hc_name_abbr)
    hc_label = create_label(hc_name, hacker_img)
    name_position = (103,1011)
    template_copy.paste(hc_label, name_position, hc_label)

    # NEW LINES OF CODE
    template_copy.save(name + ' badge.png')
    print("Badge generated successfully")

```

Thats it. We have successfully created a badge and saved it.

Now all you have to do is call the function `generate_badge()` to generate your badge. Your file should look like this now
```python
from PIL import Image, ImageDraw, ImageFont
template = Image.open('template.png')

def get_fontsize(image, txt,fraction=1.0):
    ...
    ...

def create_label(text, hacker_img):
    ...
    ...

def generate_badge():
    ...
    ...

generate_badge()
```

Now we are all set. Open your terminal/command prompt and type in `python script.py`.
This will show you a prompt to input your name.After entering your name , enter the name of the hack club at the next prompt. At the end ,you should see an output that says "Badge generated successfully".
