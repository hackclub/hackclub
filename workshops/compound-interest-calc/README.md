---
name: 'Interest Calculator'
description: 'This is a compound interest calculator made using Python'
author: '@iamsid47'
img: https://cloud-5rp4f2rjj.vercel.app/0cic_-__main.png
---

Hi everyone! In this workshop, we are gonna build an **interest calculator!**

This will be a command-line calculator that will ask for inputs, do the math for us, and then give us the calculated output.

You can out this project on Repl.it by clicking [this](https://repl.it/@iamsid47/comp-int#main.py) link.

## Let's Get Started!

![Create a repl](https://cloud-giasrdstj.vercel.app/3cic_-_repl.png)

So, let's head over to [Repl.it](https://repl.it) and create a new *repl*. Choose Python as the language and the name of your project.

First, we will be printing up some stuff and then we'll slowly move towards the logic. Now there are two types of interests that we are going to calculate. The first one will be  simple interest calculation and the other will be compound interest calculation. Now, when we calculate compound interest, some specific terms need to know and understand. This can include things like *monthly investment, interest on investment, principal, etc.* Thus, be sure to understand these terms first and later move over to the project.

Let's first import the `matplotlib` library so that we can generate a bar graph using the data we receive in the compound interest calculation.

```
import matplotlib.pyplot as plt
```

Next, let's print something cool to start with to enhance the user's experience.

```python
print("Howdy!")
print("This is Compy ;) A compound interest calculator.")
```
**Tip**: You can also add in some other custom messages of your choice at the start of the program or in the middle of it.


After this, we create a *function* named `comp` and inside this function, we print some questions regarding how many years he will be saving for, monthly investments, etc. Since this is an integer, we'll define it in our code.

We also want to create two empty lists so that we will be able to data in them which will help us in generating the graph.

```python
def comp():
    lis_yr = []
    lis_final = []
    
    print("How many years will you be saving?")
    years = int(input("Enter Years:  ")))
```

Next, we ask the user for the money he is currently having in his account. Here, the answer can be in decimal places as well. Thus to capture this, we will use `float`.

```python
print("How much money is currently in your account?")
    principal = float(input('Enter current amount in account:  '))
```

After this, we ask the user how much money is he planning to invest monthly.

```python
print("How much money do you plan in investing?")
    monthly_invest = float(input('Enter amount:  '))   
```
We will also ask him the interest he will be getting on this investment. Now, this is gonna be in percentage. But to make it a bit easy, we ask for a decimal input instead.

```python
print("What do you estimate will be your yearly interest of this investment?")
interest = float(input('Enter interest in decimal numbers: (10% = 0.1):  '))

#just a blank print
print(' ')
```
Next, let's get into the **logic** now!

So, we are actually asking for monthly investment. Thus we need to multiply it by 12 first to make it yearly. After this, we just define the `final_amount` equal to zero at the start of everything.

Along with this, we also need to take care of the problem that the time the program asks the user regarding the **time** he/she/they wish to invest, we will be required to add **+1** to this input so that when we append it forward that to the empty lists which we made previously, won't give the user an output which is one year less.

```python
    monthly_invest = monthly_invest * 12
    final_amount = 0
    for n in range(1,years+1):
        lis_yr.append(n)
    for i in range(0, years):
        if final_amount == 0:
            final_amount = principal
        final_amount = (final_amount + monthly_invest) * (1 + interest)
        lis_final.append(round(final_amount,2))
```
We here (above) define the range (which is gonna be the number of years the user enters) and add in a conditional. Here, we also need to define the formula for calculating the value the user is seeking. And lastly, we just `print` this and output the calculated value to the user.

Now, we print both the lists and create a graph using that data. We also add a title and define the *X* axis and the *Y* axis.

```python
    print(lis_final)
    print(lis_yr)
    plt.barh(lis_yr,lis_final)
    plt.title("Your Yearly Growth Graph")
    plt.xlabel('Balance Growth')
    plt.ylabel('Time in Years')
    for i in range(0,years):
        plt.text( x=lis_final[i]+0.5,y=lis_yr[i],s = lis_final[i])
    plt.show()
```

Let's move over and create another function named `simple_interest`.

Here, the formula is to take the *principal value, the time, and the rate of interest* and then multiply these and divide the value by **100**.
Thus,

```python
def simple_interest(): 
    
    p = int(input("What is the principal amount: "))
    t = int(input("What is the time period(in Years):  "))
    r = int(input("What is the rate of intrest"))

    si = (p * t * r)/100
      
    print('The Simple Interest is: ', si) 
```
Now we create a while loop so that the user can exit or keep on calculating as per their needs.

```python
while True:
    print("1.Compound Interest")
    print("2.Simple Interest")
    print("3.Exit")
    choice = int(input("Tell me what you have to calculate(1/2/3) :"))

```
Next, we add in the conditionals for the choices.

```python
# choice 1
if(choice == 1):
        comp()
        ans = input("Do you want to calculate something else (y/n)").upper()
        if (ans == 'Y'):
            continue
        elif(ans == 'N'):
            print("Okay Byee!")
            break
        else:
            print("Sorry Wrong Choice")
            break
```

In the first choice, we will calculate the compound interest. If the answer is *Y* then continue or break the loop. We do the same for **simple interest** as well

```python
elif(choice == 2):
        simple_interest()
        ans = input("Do you want to calculate something else (y/n)").upper()
        if (ans == 'Y'):
            continue
        elif(ans == 'N'):
            print("Okay Byee!")
            break
        else:
            print("Sorry Wrong Choice")
            break
```

Lastly, we need a choice where the user can choose to exit. Thus:

```python
elif(choice == 3):
 print("Okay Byeee!")
   break
else:
 print("Sorry you have selected the wrong option, Try again")
```

## Voila! You did it!

![you did it](https://media.giphy.com/media/fHo4wMUPwVFzmQn4UU/giphy.gif)

You just built your own compound interest calculator! 

## Hack It ;)

Furthermore, you can add some deeper values to this calculator. For example, *taxation, exemption of taxes, donations, non-profit work, sources of investment, return on investment* and just a lot more. There are a lot of variations to this calculator as for each country the taxation rules are different and so are for the interest calculation.

You can also host this calculator and make your own API for it. Later on, if you are on a project which requires a compound interest calculation, you can use this tool!

It is also possible to make an app using this. The only tweak will be that instead of just a single country's calculator. You can make a single calculator for all the countries and define the changes automatically when the user selects a country!

## Demos

I made a [version](https://repl.it/@iamsid47/comp-int-demo1#main.py) in which I tweaked the code and made a GUI version of the compound interest calculator. It first asks the basic requirements like the investment, the principal, etc, and then when we click the calculate button, it calculates it for us.

This is another [example](https://repl.it/@iamsid47/simple-int-demo2#main.py) of how you can change the GUI of the code. Here, I did not use the previous version's code, rather I made a different GUI completely.

Here in this [version](https://repl.it/@iamsid47/compint-demo3#index.html) I actually put up my Python code on a website (using Repl.it's **Embed Code** feature) which gives you an iframe that you can add to your website.
