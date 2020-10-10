---
name:'Convert Text to speech.'
description:'We will convert text to speech using python.'
author: '@bezlin6mechminerz'
---

## Final Output.

<img width="1440" alt="Screenshot 2020-09-19 at 12 43 28 PM" src="https://cloud-amkazzxks.vercel.app/93708256-6181ad80-fb52-11ea-9c6b-f1d7534c5520.png">

So we will be converting text to speech using python today.

View a [live demo](https://repl.it/@bezlin/tts#voice.mp3)

View the [final code](https://repl.it/@bezlin/tts#main.py) .

This workshop will take 15 minutes.

You can hear the voice made using the python code [here.](https://repl.it/@bezlin/tts#voice.mp3)

## Getting startted

![vedio](https://cloud-1h9458u6z.vercel.app/54_blog_image_13.gif)

We will use python to develop the text to speech code.

### Setting up the environment for Converting text to speech

[Repl.it](https://repl.it) is a simple yet powerful online IDE, Editor, Compiler, Interpreter, and REPL. Code, compile, run, and host in 50+ programming languages. So it is super awesome.

To get started, go to [repl](https://repl.it/languages/Python). Your coding environment will be ready in a few seconds!
<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-o8q46nkko.vercel.app/screenshot_2020-09-25_at_9.23.06_pm.png">

## Step 2: Get started to code

To convert text to speech we need to import a new Library/API. There are several APIs available to convert text to speech in python. One such APIs is the Google Text to Speech API commonly known as the gTTS API. gTTS is a very easy to use tool which converts the text entered, into audio which can be saved as an mp3 file.
The gTTS API supports several languages including English, Hindi, Tamil, French, German, and many more. The speech can be delivered in any one of the two available audio speeds, fast or slow. However, as of the latest update, it is not possible to change the voice of the generated audio.

For getting this module you need to install the gtts package. Don't worry if you are using repl.it.In repl.it it will be automatically installed when you run the code.
But if you are using another platform you need to install the packages via terminal

To install the gTTS API, open terminal/cmd and write

`pip install gTTS`

Now we are all set to write the code.

## Lets code

We need to import the module we installed.

```python
from gtts import gTTS
```

We are just importing the modules in this line.

```python
mytext = str(input("Enter the text you want to convert :-"))
```

In this line, we need to pass the string which we need to convert to speech. Here mytext is a variable that holds our text. When the code runs it will ask for users input to enter a text.

<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-mvq9zgpof.vercel.app/0screenshot_2020-10-10_at_11.06.28_am.png">

```python
language = str(input("Enter the language code for example 'en' for English :-"))
```

In this line, we are assigning the language to the variable language. Gtts API supports multiple languages but here we are going with English. Every language has its short forms for English it is en. For getting other language code google. So we are declaring the language variable as 'en'. So the text will be converted in the language specified. When the code runs it will ask for users input to enter a language.

<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-8uqrl4ft9.vercel.app/0screenshot_2020-10-10_at_11.07.12_am.png">

```python
myobj = gTTS(text=mytext, lang=language, slow=False)
```

Here in this line we are declaring another variable 'myobg' and we are giving it the value as calling the module we imported and the gtts is a function here. It takes 3 arguments one is the text. Here we have declared our text in a variable before we need to give it here. Then the language. We also assigned a variable and collected which language we want we also need to specify the variable name here. Then comes the speed you want slow = False means the voice will be faster. Slow=True means the voice will be slow.

```python
myobj.save("voice.mp3")
```

So before the above code, the text is converted to the voice but we need to save it right? To save it, the gtts module itself has a save function. the variable we converted to voice .save that's it And also give a name for the file which will be saved here it is voice.mp3.Hope you got it.

```python
print("Converted")
```

We have converted the text to speech and saved it but for fun lets also print converted at the end of the code. So we can make sure the conversion has completed.

<img width="1440" alt="Screenshot 2020-09-18 at 5 39 06 PM" src="https://cloud-94jt398a9.vercel.app/0screenshot_2020-10-10_at_11.07.31_am.png">

## Run it

![ezgif com-gif-to-mp4](https://cloud-5m2nwfs8r.vercel.app/ezgif.com-video-to-gif-4.gif)

## Play it

You may have noticed a new file generated after the code has finished running. If not see the folder menu where your main.py file is present you will notice the .mp3 file there. That's the generated file click on it then a small player appears then play it.

## Hacking away!

Now you know how to convert. Try it with other languages and have fun .Try to make a help part in your codes which says the whole help as voice .its pretty cool right?. Ellaborate it and bring more features.

I am attaching the [Gtts](https://gtts.readthedocs.io/en/latest/) documentation take a look. Also if you are new to [python](https://www.python.org/doc/) take a look at python documentation too.

# Tried by different hackers

[Anupriya_Shaji](https://repl.it/@Anupriya567/LostDevotedContent#main.py)

[Kk_Haridev](https://repl.it/@DandaThor/haridev#voice.mp3)

[Aswin_Prakash](https://repl.it/@AswinPrakash/texttospeechpy#main.py)

[Bezlin_Johnson](https://repl.it/@bezlin/tts#main.py)

## Advantages of gtts

#### Custom Chatbots

#### Help assistant

#### Blind people

![made_it](https://cloud-a58thexdk.vercel.app/tenor.gif)

Yes, You made it.
