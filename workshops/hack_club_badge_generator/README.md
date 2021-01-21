---
name: Hack Club Badge Generator
description: Make a Hack Club Badge with your name and picture
author: '@Melvin-Thomas-Dev'
img: 'https://cloud-bb9ekgrcc.vercel.app/0image.png' ################################ TODO ###############################################
---

# Hack Club Badge Generator.

Waiting for a chance to kick start your coding skills and make something cool and interesting?  Well then, you are in the right place!! 

We are all part of the hack club community and what better way to introduce yourself and the local hack club to which you belong, than with a stylish badge that will help you stand out from the crowd. In this workshop, we’ll teach you how to make a badge generator. It would be great if you had a basic knowledge of python but even if you don’t we have made this quite simple for you to easily pick up the concepts.

We will be making a badge generator wherein you can load your image and generate a badge with a beautiful template containing your name and hack club name as shown below.

![alt final_image](https://cloud-2s7kfdv88.vercel.app/0john_doe_badge.png)

Lets Look at how we will buld this.
We will use this template image as our starting material

![alt template_image](https://cloud-9wn2hv2iz.vercel.app/0template_-_copy.png)

You can download the high quality image from [here](https://cloud-3a5mpac6q.vercel.app/0template.png).

First of all we will take your picture and then resize it so that it can fit the white rectangle in the template. For that we will first set a height for the image to be equal to the height of the white box (in our case it is 474px) and then calcuate the equivalent width for the image so that we do not loose the original ratio of the image. Once we have the image we will crop it to the required dimensions(474px X 474px) and then paste it in the white box. 
Now we add your Name and the name of your hack club to the badge. For that we get the input from you and then calculate a font size fo the text so that it will fit perfectly for any name. Once we have have calculated the font size, we then create a label with your name on the center and then paste that to the badge. We do the same thing for your hack club name and then we save the image. Thats it. Your badge is ready

The font we have used for our badge is "gobold regular". You can download the font file from [here](https://cloud-p8pyhxmkf.vercel.app/0gobold_regular.otf). Download the template image and the font file and save it into a folder called "Hack club Badge Generator".

We will also need to install one python module called "Pilow". Pillow is a python module used to process images. To install pillow open your terminal/ command prompt and type in 
```python
pip install pillow
```
Once you have done these, you are set to start coding.

## So let's get coding

First of all we need to import Image, ImageDraw, ImageFont from pillow

```python
from PIL import Image, ImageDraw, ImageFont
```
Now we will open the template image

```python
template = Image.open('template.png')
```
This will create an image object which we will refer to using the name "template"

Now lets start making our badge. For that let us write a function called `generate_badge()`

```python
def generate_badge():
    hacker_img = Image.open('image.jpeg')
    reqht = 474
    reqwd = int((hacker_img.width/hacker_img.height)*474)
    hacker_img = hacker_img.resize((reqwd, reqht))
```

What we did here is we opened your picture and then resized the picture.
Now we know that the height is accurate. But the widht is still not going to fit the box. So lets crop the image to the size of the white box.
Now lets crop the image from the center so that the picture fits perfectly in the box
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

Now we have the picture in the perfect size. Now we have to paste it inside the box. Let'd do just that

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

We created a copy of the template image so that we can reuse the image for any number of badges and then pasted the picture inside the box.
`position = (197, 320)` is the position at which the picture should be pasted. The coordinates 197 and 320 are respectively the X and Y coordinates of the top left point of the box(in pixels).

### Time to print your name

Now we need to print your name and the name of your hack club. For that let us define 2 more functions `create_label()` and `get_fontsize()`.
`create_label()` function will create a transparent label with a text in the middle
`get_fontsize()` will calculate the font size depending on the text you enter.

Now let us pause the `generate_badge()` function for the time being and code the other 2 functions.

```python
def get_fontsize(image, txt,fraction=1.0):
    fontsize = 1  # starting font size
    # portion of image width you want text width to be
    img_fraction = float(fraction)
    font = ImageFont.truetype("fonts/Gobold Regular.otf", fontsize)
    while font.getsize(txt)[0] < img_fraction*image.size[0]:
        # iterate until the text size is just larger than the criteria
        fontsize += 1
        font = ImageFont.truetype("fonts/Gobold Regular.otf", fontsize)

    # optionally de-increment to be sure it is less than criteria
    return fontsize
```

what this function does is it calculates the fontsize so that the text (in this case your name  and the hack club name) are approximately equal in wodth to the image we have pasted.
we start with fontsize = 1.
the `img_fraction` signifies the percentage of the image the text should cover. The default value is given to be 1 so the function returns the fontsize in which the text is to be written so that the twxt is approximately equal in width to the picture we have pasted.
we define the font variable with the font to be used and the fontsize
`font = ImageFont.truetype("fonts/Gobold Regular.otf", fontsize)`

next we increase the fontsize in steps of 1 untill the fontsize is greater than the image width in a while loop. The `getsize()` function returns a tuple of the form (<wudth>, <height>). So `font.getsize[0]` refers to the width of the text.
Similarly the size function of an image returns a tuple of the same format. So  `image.size[0]` will give you the width of the image.
We multiply that with the image fraction so that we get the maximum width that our text can have.
Now we increase the fontsize untill the widht of the text is just greater than the maximum value. When the desired fontsize is reached, the while lop will be terminated. and the function returns the fontsize.
That's the whole of `get_fontsie()`

Now let us code in the `create_label()` function that creates a transparent label with some text in the center.

```python
def create_label(text, hacker_img):
    fontsize = get_fontsize(hacker_img, text)
    #Optimizing fontsize so that it doesnt look too small or too large
    fontsize = 80 if fontsize>80 else fontsize
    print('font size',fontsize)
    (x, y) = (140,920)
    if fontsize<35:
        fontsize = get_fontsize(hacker_img, text, 1.4)
        print("After adjusting:", fontsize)
        (x, y) = (103, 873)
    font = ImageFont.truetype('fonts/Gobold Regular.otf', size=fontsize)
    #Setting text color
    color = 'rgb(236,55,80)' # Red Color
    #Width and height of new transparent label strip
    strip_width, strip_height = 669, 99
    #Creating the label
    text_label = Image.new("RGBA", (strip_width,strip_height), (0,0,0,0))
    #Creating a draw object
    draw = ImageDraw.Draw(text_label)
    #Getting the width and height of the text(hacker's text)
    text_width, text_height = draw.textsize(text, font)
    #setting position to center of the strip
    position = ((strip_width-text_width)/2,(strip_height-text_height)/2)
    #Drawing the text on the label
    draw.text(position, text, color, font=font)
    return text_label
```