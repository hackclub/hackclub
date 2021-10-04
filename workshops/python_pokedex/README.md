---
name: 'Pokedex with Python'
description: 'Create a Pokemon Simulator with Python'
author: '@ryanchou-dev'
img: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9rZW1vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
---

Have you ever wanted to play a Pokemon game in your terminal? In this workshop, we'll learn about file and exception handling, random sampling, and code organization!

[Final code](https://github.com/ryanchou-dev/Pokemon_Game)

## Setting up

You can [install Python locally](https://www.python.org/downloads/) on your computer or use [repl.it](https://repl.it), a free, online IDE, to write the code for this project. Start a new Python file [here](https://repl.it/languages/python3).

Once you have your Python file open, let's import three libraries!

```py
import random as rand
import time
import sys
```

- `random` will allow us to sample random Pokemon names, tell us whether we caught a Pokemon or not, and give us randomized time between Pokemon appearances!

- `time` will help us delay the program between Pokemon spawns.

- `sys` will help us exit the program before all of the code executes.

Next, we need a list of all of the available Pokemon! Luckily, a GitHub user by the name of [@cervoise](https://github.com/cervoise) has a list of 721 Pokemon names. You can download the `.txt` file [here](https://github.com/cervoise/pentest-scripts/blob/master/password-cracking/wordlists/pokemon-list-en.txt). In repl.it, you can copy and paste the contents into a new file.

We can open a file with the `open()` function. The first required argument is the file name, I have the `.txt` file stored with the name `allpokemon.txt` in the same directory as the Python file. The second required argument refers to the permissions that we open it with. Since we only need to scrape its contents, we can use the permision "r", signifying "read".

Calling `readlines()` on a file object splits content on different lines as list elements.
```py
file = open('allpokemon.txt', 'r')
all_pokemon = file.readlines()
```

Now, we'll create an owned Pokemon list which keeps track of the Pokemon we caught.

```py
owned_pokemon = []
```

## Pokemon Catching 
Let's start having pokemon appear! We can force the user to enter a valid response by asking them again (possibly forever) whenever they don't give us the input we're expecting. Since we want a Pokemon to spawn when the loop starts, we can have the program print this information.

```py
while True:
    print('\nA pokemon has appeared!\n')
```

So, what Pokemon actually spawned? We can randomly choose a Pokemon by sampling our list of Pokemon with `random.choice()`. Once we select the appearing Pokemon, we should also `strip()` the name. This is because `readlines()` retains escape characters, so it would leave a newline after its name, which we don't want. To provide emphasis, we can also convert its entire name to uppercase with `.upper()` (optional).

Finally, we can tell the user which Pokemon has appeared before them.

```py
current_pokemon = rand.choice(all_pokemon).strip().upper()

# \n is an escape character which moves on to the next line. This helps the output stay organized. 
# Again, whether you want to include this is entirely up to you!
print("It's a", current_pokemon + '!\n\n')
```

Intuitively, the user might want to catch this Pokemon. So, we can set up another `while True:` loop to take care of that. We'll collect user input with `input()`. We'll also give the user three pokeballs to throw and a [33% chance to catch it](https://bulbapedia.bulbagarden.net/wiki/Catch_rate).

Notice that we make the input lowercase to avoid case-sensitivity.

```py
catches_left = 3
	while True:
		catch_state = input('Would you like to catch it? (y/n)')
		if catch_state.lower() == 'y' or catch_state.lower() == 'yes':
			pass
		elif catch_state.lower() == 'n' or catch_state.lower() == 'no':
			pass
		else:
			print('\nValid input is y, yes, n, or no')
```

Let's write some logic.

- If we don't have any more catches, we can break.
- We'll use `random.randint()` to get a random number. If it's less than or equal to 33 (33% chance), we can add it to our owned pokemon and break. If we can't catch it, we can subtract one from our catches.
- If the user doesn't want to catch it, we can break.

```py
while True:
	print('\nA pokemon has appeared!\n')

	current_pokemon = rand.choice(all_pokemon).strip().upper()

	# \n is an escape character which moves on to the next line. I feel like this helps the output stay organized. 
	# Again, whether you want to include this is entirely up to you!
	print("It's a", current_pokemon + '!\n\n')

	catches_left = 3

	while True:
		catch_state = input('Would you like to catch it? (y/n)')
		if catch_state.lower() == 'y' or catch_state.lower() == 'yes':
			# no more catches left:
			if catches_left <= 0:
				print('You weren\'t able to catch the pokemon. ')
				break
			else:
				catch = rand.randint(1, 100)
				if catch <= 33:
					owned_pokemon.append(current_pokemon)
					if owned_pokemon not in owned_pokemon:
						print('\n\nYou got a new Pokemon!\n\nAdding it to the pokedex...')
					break
				
				else:
					catches_left -= 1
					print('\nIt jumped out, try again!')

		elif catch_state.lower() == 'n' or catch_state.lower() == 'no':
			print('Bye', current_pokemon + '!')
			break

		else:
			print('\nValid input is y, yes, n, or no')
```

Lastly, we should give some options to the user (you can always add your own!).
- View owned Pokemon
- View Pokedex (unique Pokemon)
- Save file 
- Exit
- Quit Program

We can print out these options first,
```py
print('\n\nWould you like to see owned pokemon or your pokedex?\n')
print('O = Owned Pokemon')
print('P = Pokedex')
print('U = Update both to a file!')
print('N = Exit')
print('S = Exit Program\n')
```
and pull out our trusty while loop for inputs. (`sys.exit()` exits the program)
```py
while True:
	choice = input('Pick your choice!')
	if choice.lower() == 'o':
		pass
	if choice.lower() == 'p':
		pass
	if choice.lower() == 'u':
		pass
	if choice.lower() == 'n':
		break
	if choice.lower() == 's':
		sys.exit()
```
If the user wants to see their owned pokemon, we can print out the `owned_pokemon` list:
```py
if choice.lower() == 'o':
	print(owned_pokemon)
```
If the user wants to view their Pokedex (unique pokemon), we can plug the `owned_pokemon` into a set (which doesn't allow duplicate values.
```py
if choice.lower() == 'p':
	print(set(owned_pokemon))
```

## Save File Functionality

If the user wants to write to a save file, we can create the new files `owned_pokemon.txt` and `pokedex.txt` and write the contents from our created list to it. We'll use the set again for the Pokedex. We can create a new file by using the permission "w"; this creates a new file if it doesn't exist already. If it does, it wipes it's contents. 

Remember to close the file to save it!

```py
if choice.lower() == 'u':
	print('Working on it!')
	# create file
	owned_pokemon_file = open('owned_pokemon.txt', 'w')

	# for every caught pokemon
	for i in owned_pokemon:
		# write it to a file and split pokemon with new lines
		owned_pokemon_file.write(i + '\n')

	# close to save
	owned_pokemon_file.close()

	# same for pokedex
	pokedex_file = open('pokedex.txt', 'w')
	for i in set(owned_pokemon):
		pokedex_file.write(i + '\n')
	pokedex_file.close()
	
	print('\nDone! View them in your explorer tab.')
```

At this point, we just have to set up a random wait period to spawn a new Pokemon. We can use the function `time.sleep()`, with `rand.randint()` to delay the program for a varying amount of time.

```py
print('\n\nWait for a new pokemon...')
time.sleep(rand.randint(5, 10))
```

Lastly, we can implement save file functionality. Let's prompt the user for a save file before they start the game using a while loop.

If they don't, then we can start them off with an empty inventory and break.

If they do, we can ask them for `owned_pokemon.txt`, the file that we wrote in the "Save File" part of the program. We'll open the file with "r" (read) permissions, and read every item to our list (stripping it to remove escape characters). Once we finish, we can close the file and break. To avoid any exceptions, we can wrap the file opening with a `try: except:` to catch any errors. If the file doesn't exist, we encounter a `FileNotFoundError`, and we can tell the user to try again.

```py
while True:
	oldsave = input('Do you have a save file? (y/n)')
	if oldsave.lower().strip() == 'n':
		print('\nWelcome!')
		break
	elif oldsave.lower().strip() == 'y':
		print('\nWelcome back! Add your save file path below! (owned pokemon)')
		own_file = input()
		try:
			own_file_start = open(own_file, 'r')
			owned_pokemon = [pokemon.strip() for pokemon in own_file_start.readlines()]
			own_file_start.close()
			print('\nAll set!')
			break
		# file doesn't exist
		except FileNotFoundError:
			print('We had a problem processing your files, try again or start new!')
```

Done! Let's try running our program. Here's what happens when I run without a save file. I encountered a Toxicroak, and caught it on my second try.

![Text output from running the program](https://cloud-b0iio04zw-hack-club-bot.vercel.app/0log.jpg)

When I backed it up to a file, the Pokemon was transferred successfully!

![File output showing owned Pokmeon](https://cloud-b0iio04zw-hack-club-bot.vercel.app/1file.jpg)

You can view the [source code](https://github.com/ryanchou-dev/Pokemon_Game/) on GitHub!

Ways that you can hack this workshop are:
- Encrypt the saved file
- Different Pokeballs
- Shop

Happy Hacking!
