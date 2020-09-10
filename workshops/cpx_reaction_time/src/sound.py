from adafruit_circuitplayground import cp
from random import randint, choice
from time import sleep
colours = [(25, 0, 0), (0, 25, 0), (0, 0, 25)]

while True:
    while cp.switch:
        random = randint(1, 7)
        if random == 1:
            colour = choice(colours)
            cp.pixels[0] = colour
            cp.pixels[1] = colour
            cp.pixels[2] = colour
            cp.pixels[3] = colour
            cp.pixels[4] = colour
            timePassed = 0
            while cp.button_b == False:
                sleep(0.001)
                timePassed+=0.001
            cp.play_tone(262, 1) #plays a little sound when then reaction is registered
            print("Your reaction speed was " + str(timePassed) + " seconds.")
        else:
            cp.pixels[0] = choice(colours)
            cp.pixels[1] = choice(colours)
            cp.pixels[2] = choice(colours)
            cp.pixels[3] = choice(colours)
            cp.pixels[4] = choice(colours)
        sleep(2)
    if cp.switch == False:    
        finalColor = [0,0,0]
        cp.pixels[0] = finalColor
        cp.pixels[1] = finalColor
        cp.pixels[2] = finalColor
        cp.pixels[3] = finalColor
        cp.pixels[4] = finalColor