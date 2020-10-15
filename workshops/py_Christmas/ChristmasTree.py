# Now we use the figures we have defined to create the CHRISTMAS TREE
from turtle import *
from Figures import *
from random import randint

speed(0)

bg = turtle.Screen()
bg.bgcolor("#99004D") #Setting back ground color

y = -100
width = 240

# Constructing the tree
box1(turtle, "#4F4553", -15, y - 40, 30, 40) #Stem of the tree


# Tree
while width > 20 :
    width = width - 20
    height = randint(20,30)
    x = 0 - width/2
    box1(turtle, "#05A167", x, y, width, height) # Box for the leaves of tree
    balls(turtle, "#fc045b", x, y, 5) # Decorative balls
    balls(turtle, "#fc045b", -x, y, 5) # Decorative balls
    y = y + height

#Star on the top 
star(turtle, "#e5f614", 0.4, y, 20)

#Christmas wishes
penup()
color("#ff59ac")
goto(-250, -250)
write("Merry Christmas !!!", font=("Calibri", 50, "bold"))

hideturtle()

turtle.done()