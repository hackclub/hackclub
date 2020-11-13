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
