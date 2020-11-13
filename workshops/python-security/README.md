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
The pbkdf2_hmac function's first parameter is the way we will hash the password. In our case, we will be using the sha256 method. The second parameter is the string we want to hash. In our case, it's the 'pwd' variable. We have to encode this to 'utf-8' before passing it into the hash function. The next parameter is the salt we want. A salt is a string specific to security systems and it makes it harder to brute force passwords. We use the 'b' character before the string to convert it to bytes. The final parameter in the hash function is the length of the derived key. This is unimportant for this workshop so I will not be going into what this derived key parameter does.
