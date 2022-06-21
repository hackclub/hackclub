# Intro to C Programming

This tutorial will teach you how to get started coding in `C` and build a project that will run 10x faster than your bloated python script 😂. In this tutorial, you'll be building a program in C which will teach you the basics of C and some of the commonly used functions and coding patterns.

## Setup

Before we get started, we have to make sure that we have all the tools installed. First of all, we need a compiler. A compiler is a piece of software that will convert our C code(which the computer cannot code) to a series of instructions that a computer can understand and execute. Common examples of C compilers are [`gcc`](https://gcc.gnu.org), [`clang`](https://clang.llvm.org), [`tcc`](https://bellard.org/tcc/), etc. In this tutorial, we will be using `clang`. You can install clang from [https://clang.llvm.org](https://clang.llvm.org)

To test your installation, run the following command

```shell
$ clang --version
Homebrew clang version 12.0.1
Target: x86_64-apple-darwin19.6.0
Thread model: posix
InstalledDir: /usr/local/opt/llvm@12/bin
$
```

> Note: The output for the above command would not be exactly the same on your computer. As long as you're getting some output and it's not an error, you should be good to go

## What we'll be building

We'll be building a small number-guessing game in C. If you follow this tutorial correctly, you'll end up with a program like so

```shell
$ ./guess

```

## Let's code

Now that we have our compiler installed, we can finally start writing some good old C code. Before we do that, we need to understand some basic things about C. (If you're already familiar with the basics, you may skip this section)

-   In C, the starting point of your code is inside of the `main` function and not the global scope.
-   There are a few basic types in C

    -   `int` - used to store a number
    -   `float` - used to store a decimal
    -   `char` - used to store a character
    -   `bool` - used to store `true` or `false`
    -   `double` - used for large numeric values that don't fall inside the categories of `int`s and `float`s

-   Wherever you see C code, you'll notice weird-looking types that have an asterisk in them like `char** ` or `void*`. These are what are known as pointers. Pointers are links to an address inside of your computer's memory. Generally, they are used to define an array of characters as `char *`. What this means is I want an array of characters which is essentially what a string is.

```
"hackclub" or {'h', 'a', 'c', k', 'c', 'l', 'u', 'b'}
```

Now that we are familiar with the basics, we can start coding. Create a file ending with `.c` and open it in your favorite text editor. Then, type the following piece of code in it.

```c
#include <stdio.h>

int main(){
	printf("hello, world!\n");

	return 0;
}
```

Let's understand what this code actually does. Firstly, it imports a file called `stdio.h` which contains all the declarations for important functions that we use whilst writing C code. This is what's known as the C standard library. Then, we have a function `main` which is the entry point of our program, and call the function `printf` . `printf` is defined in `stdio.h` and prints a piece of text to the console. `printf` does not automatically add new lines(`\n`) at the end of your strings so you have to add it yourselves.

Next, add the following piece of code inside the `main` function (replace the previously existing code inside the `main` function)

```c
int main(int argc, char** argv){
	srand(time(NULL));
	int i = (rand() % 100) + 1;
	printf("i :: %d\n", i);

	return 0;
}
```

and add this at the top of the file

```c
#include <time.h>
#include <stdlib.h>
#include <stdbool.h>
```

First of all, what's this `srand(time(NULL))`. If you try to generate a random function in C using `rand()`, it generates the same number, again and again, so we use the `srand` function to set a seed so that the numbers generated are different every time. we passed `time(NULL)` so that unique values are passed to `srand` every time.

You can compile the program with the following command

```shell
clang <filename>.c -o <output>
```

If you run the following, it will print a different number every time

```shell
$ ./guess
34
$ ./guess
39
$ ./guess
25
```

Next, add the following piece of code inside the main function

```c
bool guessed = false;
int input = 0;
while(!guessed){
	printf("input :: ");
	scanf("%d", &input);
	if(input == num)
		guessed = true;
	else{
		printf("sorry, that's not the correct answer\n");
	}
}
printf("you guessed it!\n");
```

and don't forget to include the header libraries

```c
#include <stdbool.h>
```

Firstly, we create an input variable to store the user's input and a guessed variable to store if the user has guessed the variable or not. Then we enter a while loop which is going to run until the user does not guess the number. We then use the `scanf` and pass in `%d` and use it to take an integer as an input(`%d` means an integer).  
Next, we use an if statement to check whether the number is equal to the input or not, and if it is, we exit the loop and show a success message.

That's it! You just wrote your first C program.
On compiling and running, we see

```shell
$ ./guess
input :: 14
sorry, that's not the correct answer
input :: 38
sorry, that's not the correct answer
input :: 23
sorry, that's not the correct answer
input :: 12
you guessed it!
```

Here's what the complete code looks like

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int main(){
	srand(time(NULL));

	bool guessed = false;
	int num = (rand() % 100) + 1;
	int input = 0;
	printf("%d\n", num);
	while(!guessed){
		printf("input :: ");
		scanf("%d", &input);
		if(input == num)
			guessed = true;
		else{
			printf("sorry, that's not the correct answer\n");
		}
	}
	printf("you guessed it!\n");

	return 0;
}
```
