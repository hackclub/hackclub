---
name: 'Vigenere Cipher'
description: 'Make a cryptographic cipher with python'
author: '@polytroper'
group: 'experimental'
order: 11
begin: 'https://repl.it/@polytrope/vigenere-cipher-starter'
---

# Vigenere cipher

**ENCRYPTION**. That's a hot topic, right? Let's write a workshop about it to remain super relevant.

Cryptography works like this:

1.  You write a message—your **Plain Text**
2.  You "lock" your Plain Text with a key—your **Key Text**
3.  You need that key to "unlock" the result—your **Cipher Text**

Or, to put it another way:

`plaintext + keytext = ciphertext` _(encryption)_

`ciphertext - keytext = plaintext` _(decryption)_

But messages and passwords are made of _text_—how can you add and subtract strings of characters?

Simple: first you turn each character into a _number_.

[Click here to get started.]([https://repl.it/@polytrope/vigenere-cipher-starter)

## The Rotation Cipher

The Vigenere Cipher is an advanced version of the very simple **Rotation Cipher**.

A Rotation Cipher _rotates_ each character by _adding_ it to another character.

To make that happen, we assign every character in our alphabet a number. So `a`=0, `b`=1, `c`=2…

Now we can turn characters into numbers, add them together, and turn the result back into a character!

So if I rotate `s` by `k`, I get `c`:

![Rotating s by k to get c](/img/rotate_character.gif)

Let’s break down that process:

1.  First we get the number for `s`: 18
2.  Then we get the number for `k`: 10
3.  Then we add 10+18 to get 2
4.  Then we turn 2 back into a character: `c`

So `s+k=c`—simple as that.

But hang on, what’s up with step 3? Shouldn’t it be 10+18=28, not 2?

Oddly, in this world 28 _is_ 2—in the same way that on a clock, 15:00 is the same as 3:00pm.

This is called **Modular Math**, and it comes up a lot in cryptography. All it means is that numbers exist on a _circle_ instead of a _line_.

Since we have 26 characters, all our numbers are _modulo 26_. Once you hit 26, you go back to 0—so if b=1 and z=25, then `b+z=a`.

Ok, now let’s actually write some code. To start, your python script should look like [this](https://repl.it/@polytrope/vigenere-cipher-starter):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")
```

If you run your script, it should simply print out a list of the characters in our alphabet—which for now is just `a` through `z`.

## Coding Rotation

Let’s put this process into code.

First we’ll make a function called `encrypt_character`, which will start by taking a `plain` character and a `key` character and turning each into a number:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)
```

We use the function `characters.index` to turn a character into a number. `characters` is a string of every character in our alphabet, so `characters.index` will give us the position of a given character in that alphabet.

Let’s add a few more lines to finish up that function:

```python
def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher
```

Take a look at this line:
`cipher_code = (key_code + plain_code) % character_count`

We add our two characters together with `(key_code + plain_code)`
Then we use the _modulus_ operator, `%`, to loop back to zero when we hit `character_count` (which right now is 26).

Now take a look at this line:
`cipher = characters[cipher_code]`

We need to turn `cipher_code` back into a character. We can look up the character at that position in our character string with `characters[cipher_code]`.

Ok, let’s finish this up with some code to make use of our new function. Add these lines to the end of your script:

```python
# the rest of your script...

plaintext = "s"
keytext = "k"
ciphertext = encrypt_character(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

These lines simply call `encrypt_character` with a single-character message and key and print out the results.

Now if you run your script, it should encrypt `s` with `k` and give you `c`!

Your script should now look like [this](https://repl.it/@polytrope/vigenere-cipher-rotate-chars):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher

plaintext = "s"
keytext = "k"
ciphertext = encrypt_character(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Rotating Strings

Now let's rotate a whole `string` of characters by a single character:

![Rotating secretmessage by k to get combodwocckqo](/img/rotate_string.gif)

We’re going to add a new function called `encrypt`, right after `encrypt_character`. This function goes over every character in your message, and puts it through `encrypt_character`:

```python
# def encrypt_character + the rest of your script...

def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher

# the rest of your script...
```

Let’s quickly look at this line:
`for (plain_index, plain_character) in enumerate(plain):`

That `enumerate(plain)` bit takes our message—`plain`—and turns it into a list of pairs, where each pair is an _index_ and a _character_.

So if I were to do `enumerate("hello")`, I would get a list like this:

```python
[
	(0, 'h'),
	(1, 'e'),
	(2, 'l'),
	(3, 'l'),
	(4, 'o')
]
```

That `(plain_index, plain_character)` bit tells the loop to unpack each of those pairs into two separate variables called `plain_index` and `plain_character`.

So `for (plain_index, plain_character) in enumerate(plain):` will loop over every character in `plain` and give us that character plus its position in the string.

Ok, last thing. Just below our new function, change your `plaintext` value from `"s"` to `"secretmessage"`, and create your `ciphertext` with `encrypt` instead of `encrypt_character`:

```python
# def encrypt + the rest of your script...

plaintext = "secretmessage"
keytext = "k"
ciphertext = encrypt(plaintext, keytext)

# the rest of your script...
```

Now if you run your script it should turn “secret message” into “combodwocckqo”!

Your full script should now look like [this](https://repl.it/@polytrope/vigenere-cipher-rotate-strings):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher

def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher

plaintext = "secretmessage"
keytext = "k"
ciphertext = encrypt(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Rotating Strings with Strings

Now let's rotate a `string` by another `string`:

![Rotating “secretmessage” by “key” to get “ciabirwiqceeo”](/img/encrypt_string.gif)

_This_ is the full **Vigenere Cipher**!

The Rotation Cipher rotates every character in your message by the _same_ amount—the Vigenere Cipher matches every character in your message to a character in your password, so characters get rotated by different amounts.

To make this happen, we’re going to make a simple change to our `encrypt` function:

```python
def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Use the index of our plain character to get the corresponding key character
    key_index = plain_index % len(key)
    key_character = key[key_index]

    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key_character, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher
```

Look closer at these lines, where all the changes are:

```python
  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Use the index of our plain character to get the corresponding key character
    key_index = plain_index % len(key)
    key_character = key[key_index]

    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key_character, plain_character)
```

This line matches the position of our _plaintext_ character to a position in our _keytext_:
`key_index = plain_index % len(key)`

Since our plaintext is probably _longer_ than our keytext, we use the `%` (modulus) operator to loop back to zero once we go past the length of our key.

This line gets the character at `key_index`:
`key_character = key[key_index]`

And this line has been changed to pass `key_character` along to `encrypt_character`, instead of just `key`:
`cipher_character = encrypt_character(key_character, plain_character)`

Finally, change your `keytext` value near the bottom of your script to `"key"` (instead of `"k"`):

```python
# def encrypt + the rest of your script...

plaintext = "secretmessage"
keytext = "key"
ciphertext = encrypt(plaintext, keytext)

# the rest of your script...
```

Now if you run your script, it should encrypt “secretmessage” with “key” to get “ciabirwiqceeo”!

Your script should now look like [this](https://repl.it/@polytrope/vigenere-cipher-encrypt):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher

def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Use the index of our plain character to get the corresponding key character
    key_index = plain_index % len(key)
    key_character = key[key_index]

    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key_character, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher

plaintext = "secretmessage"
keytext = "key"
ciphertext = encrypt(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Decryption

Now let's subtract our `keytext` from our `ciphertext` to get our `plaintext`.

To make this happen, we _could_ write some new functions called `decrypt` and `decrypt_character`. However, they would do _almost the same thing_ as `encrypt` and `decrypt_character`—the only difference is that they would _subtract_ the key instead of _adding_ it.

There is a simpler way! Let’s take another look at these formulas from the top:

`plaintext + keytext = ciphertext` _(encryption)_

`ciphertext - keytext = plaintext` _(decryption)_

We can rewrite that second line like this:

`plaintext + keytext = ciphertext` _(encryption)_

`ciphertext + (-keytext) = plaintext` _(decryption)_

Now encryption and decryption are the _same_ process—decryption just means adding the _negative_ version of your key!

For each character, there is some other character where if you add them together you get 0. This is called the _inverse_ character.

So if b=1 in our alphabet, then its inverse is z=25 (because 1+25=0 on our wheel). By the same logic, if k=10 then its inverse is q=16:

![Inverting “k” to get “q”](/img/invert_character.gif)

To get the inverse of “key”, we just apply the same process to every character in our key:

![Inverting “key” to get “qwc”](/img/invert_string.gif)

So the inverse of “key” is “qwc”. If we use this key on “ciabirwiqceeo”, it turns back into “secretmessage”:

![Decrypting “ciabirwiqceeo” with “qwc” to get “secretmessage”](/img/decrypt_string.gif)

To make this happen in our code, we need two new functions. We’ll add them right after `encrypt`.

The first one is called `invert_character`. All it does is find the inverse of a given character:

```python
# def encrypt + the rest of your script...

def invert_character(character):
  # Turn our character into a number code
  character_code = characters.index(character)

  # Get the "opposite" character
  inverted_code = (character_count - character_code) % character_count
  inverted_character = characters[inverted_code]

  return inverted_character

# the rest of your script...
```

Let’s take a look at this line, where we find the “opposite” character code:
`inverted_code = (character_count - character_code) % character_count`

All we’re doing here is taking `character_count` (26) and _subtracting_ the `character_code`. So if we’re inverting b=1, we’d get 26-1, which is z=25.

We also include `% character_count`, just in case we’re inverting the letter a=0. In that case we’d get 26-0=26, which means we have to loop back to 0.

The second new function is called `invert`, which simply inverts every character in a given string:

```python
# def invert_character + the rest of your script...

def invert(text):
  # An empty string, which we'll fill with our inverted text
  inverted_text = ""

  # Loop over every character in text, invert it, and add it to our inverted text
  for character in text:
    inverted_text += invert_character(character)

  return inverted_text

# the rest of your script...
```

### Signaling Encrypted Messages

Ok, so now we can find the inverse of a key and use it to decrypt… but how do we know when we _need_ to invert a key? Somehow, our script needs to know whether it’s encrypting or decrypting a message.

There are many ways to do this, but I like this simple method: when I encrypt a message, I stick an exclamation point at the start. That way if my script gets a message like “!ciabirwiqceeo”, it can invert the key first to decrypt the message (instead of encrypting it twice).

To make this happen, we need to add a few lines near the end of your script, _before_ and _after_ the line where we create our `cipher text`.

We’ll also change our plaintext to `"!ciabirwiqceeo"`, so we have something to decrypt:

```python
# the rest of your script...

plaintext = "!ciabirwiqceeo"
keytext = "key"

# Is our message already encrypted?
encrypted = plaintext.startswith("!")

# If so, remove the first character from plaintext (!), and invert the key
if encrypted:
  plaintext = plaintext[1:]
  keytext = invert(keytext)

ciphertext = encrypt(plaintext, keytext)

# If not, stick a ! character to the beginning so we know it's already encrypted
if not encrypted:
  ciphertext = "!" + ciphertext

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

Let’s break these lines down a bit:

```python
# Is our message already encrypted?
encrypted = plaintext.startswith("!")

# If so, remove the first character from plaintext (!), and invert the key
if encrypted:
  plaintext = plaintext[1:]
  keytext = invert(keytext)
```

This line checks for that exclamation point, and stores whether it’s there in a variable called `encrypted`:
`encrypted = plaintext.startswith("!")`

If we find an exclamation point, we snip it off and invert our key:

```python
if encrypted:
  plaintext = plaintext[1:]
  keytext = invert(keytext)
```

That `plaintext[1:]` bit is a neat little trick for grabbing everything _after_ the first character. If it were `plaintext[:4]`, it would grab everything _up to_ the fourth character. And if it were `plaintext[1:4]`, it would grab everything _after_ the first character, _up to_ the fourth character. So this is just a convenient way to get parts of a string.

Finally we have this bit, which simply adds an exclamation point to the beginning of our message _after_ it has been encrypted:

```python
if not encrypted:
  ciphertext = "!" + ciphertext
```

Ok, now if you run your script you should see “!ciabirwiqceeo” decrypted to “secretmessage”!

Your script should now look like [this](https://repl.it/@polytrope/vigenere-cipher-decrypt):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher

def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Use the index of our plain character to get the corresponding key character
    key_index = plain_index % len(key)
    key_character = key[key_index]

    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key_character, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher

def invert_character(character):
  # Turn our character into a number code
  character_code = characters.index(character)

  # Get the "opposite" character
  inverted_code = (character_count - character_code) % character_count
  inverted_character = characters[inverted_code]

  return inverted_character

def invert(text):
  # An empty string, which we'll fill with our inverted text
  inverted_text = ""

  # Loop over every character in text, invert it, and add it to our inverted text
  for character in text:
    inverted_text += invert_character(character)

  return inverted_text

plaintext = "!ciabirwiqceeo"
keytext = "key"

# Is our message already encrypted?
encrypted = plaintext.startswith("!")

# If so, remove the first character from plaintext (!), and invert the key
if encrypted:
  plaintext = plaintext[1:]
  keytext = invert(keytext)

ciphertext = encrypt(plaintext, keytext)

# If not, stick a ! character to the beginning so we know it's already encrypted
if not encrypted:
  ciphertext = "!" + ciphertext

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Finishing Touches

We’re almost done. We just need a few finishing touches—like asking the user for their own message and password.

This is really simple. All we need to do is use the `input` function to set `plaintext` and `keytext`. All `input` does is ask the user to type something, and returns what they type.

So all you need to do is replace `"!ciabirwiqceeo"` and `"key"` with `input`:

```python
plaintext = input("Message: ")
keytext = input("Password: ")
```

Now your script will ask the user for a message and password of their own!

Let’s also put the bottom section of our script into a loop. This way it will ask for a message, ask for a password, return the result… and repeat.

Just above the line where we define our plaintext and keytext, add `while True:` and indent _everything_ after that. This will put that section of the code into an infinite loop:

```python
while True:
  plaintext = input("Message: ")
  keytext = input("Password: ")

  # Is our message already encrypted?
  encrypted = plaintext.startswith("!")

  # If so, remove the first character from plaintext (!), and invert the key
  if encrypted:
    plaintext = plaintext[1:]
    keytext = invert(keytext)

  ciphertext = encrypt(plaintext, keytext)

  # If not, stick a ! character to the beginning so we know it's already encrypted
  if not encrypted:
    ciphertext = "!" + ciphertext

  print("Output: " + ciphertext)
  print()
```

I also added a `print()` to the very end, which will add an extra line just after we print out the ciphertext and start the loop over again. This extra space just makes things look a little nicer.

Finally, let’s add more characters to our alphabet. Change the very top of your script to include every character on a standard keyboard in our `characters` variable, like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
characters += "1234567890"
characters += " !@#$%^&*()-_+=`~;:'[]{}|<>,./?"
characters += "\"\\"
```

### Escape Characters

A quick note about that last line:
`characters += "\"\\"`

`"` and `\` are a little tricky to work with in code. The `"` character has a special meaning here—specifically, it means the start and end of our string! So we can’t use `"` _directly_. Instead, we have to “escape” the special meaning of `"`, by putting a `\` in front of it.

This “escape character” (`\`) just tells the script that we actually want the `"` character—we don’t want to close the string.

Similarly, `\` _also_ has a special meaning inside a string—it’s our escape character! So to include _that_ we have to _escape the escape character_. This is why our last line looks like `"\"\\"`—first we add `"`, then we add `\`, but we have to escape them both.

Alright, that’s it! You now have a fully functional Vigenere Cipher!

Your script should now look like [this](https://repl.it/@polytrope/vigenere-cipher-input):

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz"
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
characters += "1234567890"
characters += " !@#$%^&*()-_+=`~;:'[]{}|<>,./?"
characters += "\"\\"

# How many characters we have
character_count = len(characters)

# List all our supported characters
print("Supported Characters:\n" + characters + "\n")

def encrypt_character(plain, key):
  # Turn plain character and key character into number codes. a=0, b=1...
  key_code = characters.index(key)
  plain_code = characters.index(plain)

  # Combine plain + key, and loop back to zero at character_count
  cipher_code = (key_code + plain_code) % character_count

  # Turn cipher_code back into a character
  cipher = characters[cipher_code]

  # Done. Return our ciphertext character
  return cipher

def encrypt(plain, key):
  # An empty string, which we'll fill with our ciphertext
  cipher = ""

  # Loop over every character in our plaintext
  for (plain_index, plain_character) in enumerate(plain):
    # Use the index of our plain character to get the corresponding key character
    key_index = plain_index % len(key)
    key_character = key[key_index]

    # Encrypt our plain character with our key character
    cipher_character = encrypt_character(key_character, plain_character)

    # Add our new cipher character to the end of our ciphertext
    cipher += cipher_character

  # Done. Return our full ciphertext
  return cipher

def invert_character(character):
  # Turn our character into a number code
  character_code = characters.index(character)

  # Get the "opposite" character
  inverted_code = (character_count - character_code) % character_count
  inverted_character = characters[inverted_code]

  return inverted_character

def invert(text):
  # An empty string, which we'll fill with our inverted text
  inverted_text = ""

  # Loop over every character in text, invert it, and add it to our inverted text
  for character in text:
    inverted_text += invert_character(character)

  return inverted_text

while True:
  plaintext = input("Message: ")
  keytext = input("Password: ")

  # Is our message already encrypted?
  encrypted = plaintext.startswith("!")

  # If so, remove the first character from plaintext (!), and invert the key
  if encrypted:
    plaintext = plaintext[1:]
    keytext = invert(keytext)

  ciphertext = encrypt(plaintext, keytext)

  # If not, stick a ! character to the beginning so we know it's already encrypted
  if not encrypted:
    ciphertext = "!" + ciphertext

  print("Output: " + ciphertext)
  print()
```

## Epilogue

Computing begins with cryptography.

I mean that literally—the first practical _computationally-universal_ computers were created for the sole purpose of breaking ciphers during World War II, by a grand team of visionaries like Alan Turing and John von Neumann.

In the 1920s, the German government began to secure their communications with an elaborate mechanical cipher machine called the Enigma. This machine had much in common with the Vigenere cipher you just wrote, and it was thought by many to be practically unbreakable.

![A German Enigma Machine](/img/enigma_machine.jpg)

In the early 1930s, Poland was increasingly threatened by the rise of the Nazis in Germany. Three Polish students named Marian Rejewski, Jerzy Różycki, and Henryk Zygalski developed a way to break the Enigma cipher and read German messages, including exact wiring diagrams of the machine—using only pencil and paper, _without ever seeing the machine itself._

Later in the decade, this team began to automate the message-cracking process with enormous electro-mechanical contraptions known as Cryptologic Bombas. These machines and techniques were later refined by Alan Turing to create the Cryptologic _Bombe_, a similar machine that relied on different cryptanalytical techniques.

![An American Bombe, built by the US Navy](/img/american_bombe.jpg)

In the 1940s, British codebreakers needed a more advanced machine to break a high-level Nazi code called the Lorenz Cipher. To meet this challenge, a British engineer named Tommy Flowers created a _programmable_ electronic machine called Colossus. This is considered by many to be the first _true_ computer (although a German machine called the Z1 may rightly hold that title).

![Colossus, the first programmable electronic digital computer](/img/colossus.jpg)

Effective cryptanalysis was undeniably decisive in _stopping the Nazis_. On the other hand, effective cryptography played a role in their rise.

Cryptography is such a powerful tool that for a time, the US government even [classified it as a munition](https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States). The duality of its use for good and evil makes cryptography a difficult, hotly-debated topic even today. Every few years, the discussion begins again when the FBI needs to [break into somebody's iPhone](https://en.wikipedia.org/wiki/FBI%E2%80%93Apple_encryption_dispute) (or whatever).

But of course, tools are neither good nor evil—that part is up to the user.
