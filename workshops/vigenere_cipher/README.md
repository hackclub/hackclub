---
name: 'Vigenere Cipher'
description: 'Make a cryptographic cipher'
author: '@polytroper'
group: 'experimental'
order: 10
begin: 'https://repl.it/@polytrope/vigenere-cipher-starter'
---

# Vigenere cipher

**ENCRYPTION**. That's a hot topic, right? Let's write a workshop about it to remain super relevant.

Cryptography works like this:

1.  You write a message—your **Plain Text**
2.  You "lock" your Plain Text with a key—your **Key Text**
3.  You need that key to "unlock" the result—your **Cipher Text**

Or, to sum it up with an equation:

`plaintext + keytext = ciphertext` _(encryption)_
`ciphertext - keytext = plaintext` _(decryption)_

Click here to get started.

## The Rotation Cipher

The Vigenere Cipher is an advanced version of the very simple **Rotation Cipher**.

A Rotation Cipher _rotates_ each letter of the alphabet:

Let's start by rotating a single character by another single character.

Your script should now look like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz "

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

plaintext = "p"
keytext = "k"
ciphertext = encrypt_character(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Rotating Strings

Now let's rotate a whole `string` of characters by a single character.

Your script should now look like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz "

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

plaintext = "hello world"
keytext = "k"
ciphertext = encrypt(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Rotating Strings with Strings

Now let's rotate a `string` by another `string`.

Your script should now look like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz "

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

plaintext = "hello world"
keytext = "test"
ciphertext = encrypt(plaintext, keytext)

print("Message: " + plaintext)
print("Password: " + keytext)
print("Output: " + ciphertext)
```

## Decryption

Now let's subtract our `keytext` from our `ciphertext` to get our `plaintext`

Your script should now look like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz "

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

plaintext = "! icdgdngjpv"
keytext = "test"

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

## Taking Input

Now let's ask the user for their own message and key!

Your script should now look like this:

```python
# The set of characters we support
characters = "abcdefghijklmnopqrstuvwxyz "
characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
characters += "1234567890"
characters += "!@#$%^&*()-_+=`~;:'[]{}|<>,./?"
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

The history of computing is deeply tied up with encryption.

![A photo of the cryptologic bombe]()

Alan Turing, etc.

![]

Importance of computer security, but also responsibility etc.
