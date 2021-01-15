---
name: 'Shared Clipboard'
description: 'Sync clipboards across devices using Go'
author: '@quackduck'
img: 'https://cloud-crayumbmk.vercel.app/0screen_shot_2020-12-28_at_9.34.51_pm.jpg'
---


Sometimes you want to share stuff between computers. You email it to yourself and then you log on to the other computer and then you find that you forgot your email password and then you click "forgot password" and then you find the code and then you enter the code and then you make a new password and then you type in the new password and then you find the email and then you *finally* copy the text and get on your way.

It took you 10 minutes just to get text from one computer to the other.

Then, you wonder - "What if, what if I could directly copy it to the other computer? I'd save 9.95 minutes!"

In this workshop, we'll make a program that can share clipboards between computers, so you can copy on one and paste on the others.

*This workshop will take about an hour and 15 minutes to complete.*

## Requirements

You need:

- A Windows, macOS or Linux computer (you *could* also use Termux on an Android device but that might be hard)
- **Basic Go knowledge** (Get it from the official tour at [tour.golang.org](https://tour.golang.org) or from this ***excellent*** resource - [gobyexample.com](https://gobyexample.com))

*Note: unlike most workshops, this workshop will require you to download things and use a local development environment. Make sure you have access to a computer that allows you to do these things (most school-issued computers don't, sadly). This workshop is not recommended for beginners.*

![End of list.](https://media.giphy.com/media/j529ybb5ZxD9rLFi8a/giphy.gif)

## Setup

- Install the Go programming language so we can write our program.
   - Head over to [golang.org/doc/install](https://golang.org/doc/install) to install Go
- Install clipboard utilities so we can control the clipboard from code

(Just skip to instructions for your OS)

### Setup on macOS
(Psst! You can run this to install Go if you have [Homebrew](https://brew.sh/) installed: `brew install go`)

macOS already has clipboard utilities pre-installed! Try copying something (Here's some text: Hello, world!) and then running:
```shell
pbpaste
```
in your terminal.

macOS also has `pbcopy` for setting the clipboard

### Setup on Windows

Windows already has clipboard utilities pre-installed! Copy something and run this in a Powershell prompt:
```powershell
Get-Clipboard
```
or
```powershell
Set-Clipboard "guess what this does :)"
```

### Setup on Linux

Install at least one of [xclip](https://command-not-found.com/xclip), [xsel](https://command-not-found.com/xsel), [wl-clipboard](https://command-not-found.com/wl-copy)

Play around with the commands you installed!

### Setup on Android
Install the Termux app and Termux:API app from the Play Store. Then, install the Termux:API package from the command line (in Termux) using:

```shell
pkg install termux-api
```

## Building it!

Open up a new project in your favorite editor (I recommend [VS Code](https://code.visualstudio.com/download) or [GoLand](https://www.jetbrains.com/go/download/)).

Once you have a new project set up, make a new file titled `myclip.go` (you can name it whatever you want, really) and add in:

```go
package main

import (
    "bufio"
    "errors"
    "fmt"
    "io"
    "net"
    "os"
    "os/exec"
    "runtime"
    "strconv"
    "strings"
    "time"
)
```

These are all the Go packages we will be using in our program. Go complains about unused imports, so while testing code if you get an error about an unused import, just comment the import out. (Most IDEs will automatically import packages for you, so if your IDE does it, you don't need to stress about imports.)

- `bufio` handles reading and writing, which we'll need because we'll be writing and reading over the internet
- `errors` lets us make errors
- `fmt` helps with printing and formatting
- `io` is also related to reading and writing
- Guess what `net` does! It does internet stuff! Didn't see that coming, did you? We use it for accessing the internet and communicating.
- `os` does stuff related to arguments, files, running commands (we'll need to do this) and a whole lot of other os-related stuff.
- `os/exec` will let us run commands (it's part of the `os` package)
- We only use `runtime` for one thing: to find out what os the program is running on so that we can change the commands we run accordingly
- `strconv` let's us convert from strings to other types and from other types to strings
- `time` will let us stop the program for some time (we'll use it to wait between clipboard checks.)

