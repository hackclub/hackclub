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
Note that we are resetting the pwd variable so that the raw string password is deallocated from memory, and is therefore unhackable. The pbkdf2_hmac function's first parameter is the way we will hash the password. In our case, we will be using the sha256 method. The second parameter is the string we want to hash. In our case, it's the 'pwd' variable. We have to encode this to 'utf-8' before passing it into the hash function. The next parameter is the salt we want. A salt is a string specific to security systems and it makes it harder to brute force passwords. We use the 'b' character before the string to convert it to bytes. The final parameter in the hash function is the length of the derived key. This is unimportant for this workshop so I will not be going into what this derived key parameter does.

This pbkdf2_hmac function returns bytes, so we will convert these bytes to a string:
```py
pwd = pwd.hex()
```
After that, we will check for what to do based on the player's initial input, which we stored in the 'choice' variable. To do so, we will be using the flow control 'if' statement:
```py
if(inp == '1'):
```
Note that everything that you want the 'if' block to execute will have to be tabbed directly under the 'if' block. You will see what I mean in the next few steps.

If the player inputted 1 as their choice, we know that they want to sign up. Therefore, we would like to save their hashed password. Note that we are saving the _hashed_ password. Later on we can check this with the sign in password that the user enters to validate that the passwords are the same. To save the hased password to a file, we will type this:
```py
  results = open('save.dat', 'w')
  results.write(pwd)
  results.close()
  ```
  To add a little flair at the end, we will add some colored text to confirm that the user successfully signed up. On the left side of repl.it, create a new file
  ![Create New File](https://gyazo.com/4154e8c624f13436b641de801b5aeec9)
