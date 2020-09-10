from adafruit_circuitplayground import cp
from random import randint, choice
from time import sleep
colours = [(25, 0, 0), (0, 25, 0), (0, 0, 25)]

while True:
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
        cp.play_tone(262, 1)
        print("Your reaction speed was " + str(timePassed) + " seconds.")
    else: # ↓ Not the most efficient method, can you think of a better one?
        c0 = choice(colours)
        c1 = choice(colours)
        c2 = choice(colours)
        c3 = choice(colours)
        c4 = choice(colours)
        while c0 == c1 == c2 == c3 == c4:
            c0 = choice(colours)
            c1 = choice(colours)
            c2 = choice(colours)
            c3 = choice(colours)
            c4 = choice(colours)
        cp.pixels[0] = c0
        cp.pixels[1] = c1
        cp.pixels[2] = c2
        cp.pixels[3] = c3
        cp.pixels[4] = c4
    sleep(2)