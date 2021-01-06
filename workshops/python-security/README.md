# Python Security
In this workshop, we will be creating a secure python password saving system.

Final Code: https://repl.it/@nt998302/CalculatingSeveralData#ansi_codes.txt

## Getting Setup
To start, we will have to create a fresh **python** project in repl.it. You can name this anything  you want.

Once your project has been created, go directly to the **main.py** file. This is where we will be doing all our work. In this file, let's import the hashlib module from the built-in python library. This will allow us to hash and salt our passwords using a popular method called 'sha256'.

Let's initially ask the user whether they want to sign up or log in. To do so, we will be using python's built-in input method:
```py
choice = input('Are you\n(1) Signing Up\n(2) Signing In?: ')
```

Make sure to format the input similarly to how I am doing so it is clear and concise.
After getting the user's choice, let's recieve their password. This will be more of a temporary variable that we will use to hash the user's password:
```py
pwd = input("Password: ")
```

After we get the users password, let's replace the data in the 'pwd' variable with its hashed version. We are doing this as quick as possible so that the raw password string cannot be hacked.  To hash the password, we will be using the hashlib module:
```py
pwd = hashlib.pbkdf2_hmac('sha256', pwd.encode('utf-8'), b'salt', 100000)
```
Now, what is hashing? To understand hashing, you first need to know what encryption is. Every character on your keyboard (yes, look down at your keyboard) is assigned to an integer value, which is called an ASCII value. When someone encrypts a file, they will generally turn the characters held within a file into their ASCII values, and increment them in some way. So basically, if the character 'A' is in an encrypted file, it might look like 'C'. Of course, these files cannot be understood by humans after encryption, so people use decrypters to get encrypted files back into their normal ASCII form. Hashing is a form of encryption whose algorithm makes it so it cannot be undone, or decrypted. Therefore, the only way to compare hashes is to compare a hashed string with the base string, which is also hashed. If they match up, the strings are identical. Salting is an extra level of security that adds randomness to each password. It basically adds a unique string to the password that is hashed along with it. The only danger in using hashed passwords is that passwords can be brute forced. The brute force hacking method involves forcefully entering thousands of passwords to test if they are correct. Because of this, 2 factor authentication is extremely important in the new age of security.

![CreateNewFile]("https://cloud-68emkaq6o.vercel.app/0hash-plus-salt-1-1024x516.png")

Note that we are resetting the pwd variable so that the raw string password is deallocated from memory, and is therefore unhackable. The pbkdf2_hmac function's first parameter is the way we will hash the password. In our case, we will be using the sha256 method. The second parameter is the string we want to hash. In our case, it's the 'pwd' variable. We have to encode this to 'utf-8' before passing it into the hash function. The next parameter is the salt we want. A salt is a string specific to security systems and it makes it harder to brute force passwords. We use the 'b' character before the string to convert it to bytes. The final parameter in the hash function is the length of the derived key. This is unimportant for this workshop so I will not be going into what this derived key parameter does.

This pbkdf2_hmac function returns bytes, so we will convert these bytes to a string:
```py
pwd = pwd.hex()
```
After that, we will check for what to do based on the player's initial input, which we stored in the 'choice' variable. To do so, we will be using the flow control 'if' statement:
```py
if(choice == '1'):
```
Note that everything that you want the 'if' block to execute will have to be tabbed directly under the 'if' block. You will see what I mean in the next few steps.

If the player inputted 1 as their choice, we know that they want to sign up. Therefore, we would like to save their hashed password. Note that we are saving the _hashed_ password. Later on we can check this with the sign in password that the user enters to validate that the passwords are the same. To save the hased password to a file, we will type this:
```py
  results = open('save.dat', 'w')
  results.write(pwd)
  results.close()
  ```
To add a little flair at the end, we will add some colored text to confirm that the user successfully signed up. On the left side of repl.it, create a new file named "FColors.py".
![CreateNewFile](https://i.imgur.com/KV8rndQ.png)


Let's define some constant strings. To do so, we will type the following in the FColors.py file:
```py
RED   = '\u001b[31m'
GREEN = '\u001b[32m'
BLUE  = '\u001b[36m'
```
The codes in the strings are known as 'ansi escape codes', which allow us to bring color to the terminal! Back in main.py, add these lines to the end of your if statement:
```py
  print()
  print(FColor.BLUE + 'Sign Up Complete!')
```
Printing an ansi escape code will change the terminal text color to the color we print out. Make sure to import the FColors module at the top of main.py so we can access the constant color variables.

Your code right now should be formatted like this:
```py
import hashlib
import FColor

choice = input('Are you\n(1) Signing Up\n(2) Signing In?: ')
pwd = input("Password: ")

pwd = hashlib.pbkdf2_hmac('sha256', pwd.encode('utf-8'), b'salt', 100000)
pwd = pwd.hex()

if(choice == '1'):
  results = open('save.dat', 'w')
  results.write(pwd)
  results.close()
  print()
  print(FColor.BLUE + 'Sign Up Complete!')
```
Note the tabs that confine the **if** statement's execution code.


Now that we have created a system in which the user can save their hashed password to a file, we will create a system where the user can log in using the password they signed up with. To do so, we will create an **elif** statement under our if statement:
```py
elif(choice == '2'):
```
This **elif** block will only run if the user wants to sign in. Therefore, we want to try reading from a file, which we will initiate using a **try** block
```py
try:
```
Then we will open the file
```py
with open('save.dat', 'r') as file:
```
This will open the 'save.dat' file in reading mode and assign it to a variable called *file*. Now, let's iterate through each line in the *file* variable:
```py
for line in file:
```
Note that this for loop should only run once since we are only writing one line to it on user sign up. Let's strip each line of '\n' to get the pure text
```py
line = line.replace('\n', '')
```
This will replace every '\n', or newline, character with a blank character (''). After this, create an empty print statement to format a newline:
```py
print()
```
Now we will check whether or not the password the user initially inputted is the same as the one the user made an account with. To do so, we will compare the two variables with an if statement:
```py
if(hash_data == line):
    print(FColor.GREEN + "Correct Password")
```
Note that we are writing this with Green text to indicate a successful log in attempt. However, if the user fails to log in since the passwords do not match, we will let them know
```py
else:
    print(FColor.RED + f'Incorrect Password')
```
Then, to finish off our **try** block, we will make an **except** block. This will only run if we fail to open up the saved password file. 
```py
except:
    print(FColor.RED + "Couldn't read file 'save.dat'")
```
The final code should look like this:
```py
import hashlib
import FColor

choice = input('Are you\n(1) Signing Up\n(2) Signing In?: ')
pwd = input("Password: ")

pwd = hashlib.pbkdf2_hmac('sha256', pwd.encode('utf-8'), b'salt', 100000)
pwd = pwd.hex()

if(choice == '1'):
  results = open('save.dat', 'w')
  results.write(pwd)
  results.close()
  print()
  print(FColor.BLUE + 'Sign Up Complete!')

elif(choice == '2'):
  try:
    with open('save.dat', 'r') as file:
      for line in file:
        line = line.replace('\n', '')
        print()
        if(pwd == line):
          print(FColor.GREEN + "Correct Password")
        else:
          print(FColor.RED + f'Incorrect Password')
  except:
    print(FColor.RED + "Couldn't read file 'save.dat'")
```
Note the tabs; these confine statements to a certain block of code. Now, if you run your main.py code in repl.it, you will need to first sign up, and then sign in. Note that you will never see your raw password other than the time you type it in to sign up.

You have successfully created a secure password system! You can use this to create secure login pages and sign up pages without ever getting hacked! Check out these example uses of the password system you just created:

[This example prints out the hashed password in both byte format and string format for you to see and compare!](https://repl.it/@nt998302/Python-Secure-Password-Saver-with-pure-bytes#main.py)

[This example stores the hashed password using a different hash algorithm (md5) and a custom salt!](https://repl.it/@nt998302/Python-Secure-Password-Saver-with-md5-and-custom-salt#main.py)

[This example takes this workshop to the next level, using repl.it's database system, repldb. It stores the hashed passwords,  using the username as a key. Then, a user can sign into their account, but only with the correct password.](https://repl.it/@nt998302/PS-Ex-1#main.py)
