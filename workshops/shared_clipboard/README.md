---
name: 'Shared Clipboard'
description: 'Sync clipboards across devices, so you can copy from one and paste on another'
author: '@quackduck'
img: 'https://cloud-crayumbmk.vercel.app/0screen_shot_2020-12-28_at_9.34.51_pm.jpg'
---

Sometimes you want to share stuff between computers. You email it to yourself and then you log on to the other computer and then you find that you forgot your email password and then you click "forgot password" and then you find the code and then you enter the code and then you make a new password and then you type in the new password and then you find the email and then you *finally* copy the text and get on your way.

It took you 10 minutes just to get text from one computer to the other.

Then, you wonder - "What if, what if I could directly copy it to the other computer? I'd save 9.95 minutes!"

In this workshop, we'll make a program that can share clipboards between computers, so you can copy on one and paste on the others.

![Your mouth drops](https://media.giphy.com/media/L3QT1L99qG7M6gFRpM/giphy.gif)

*^ You when it actually works*

## Requirements

You need:

- A Windows, macOS or Linux computer (you *could* also use Termux on an Android device but that might be hard)
- **Basic Go knowledge** (Get it from the official tour at [tour.golang.org](https://tour.golang.org) or from this ***excellent*** resource - [gobyexample.com](https://gobyexample.com))

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
macOS has `pbcopy` for setting the clipboard

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

Open up your favorite editor, make a new file titled `myclip.go` (you can name it whatever you want, really) and add in

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

### Variables

Add this in:
```go
var (
    
)
```

We're just defining a few global variables so that we can change them easily later on.

We'll use `secondsBetweenChecksForClipChange` later on to decide the delay between checks for whether the clipboard changed. If it did change, we'll send the new one to the other devices connected over the internet.

Add in this inside the `var` brackets: 
```go
secondsBetweenChecksForClipChange = 1
```

`helpMsg` is one big long string that we'll print out if the user needs help. Add this in the brackets too:
```go
helpMsg = `myclip - Shared Clipboard
With myclip, you can copy from one device and paste on another.

Usage: myclip [--debug/-d] [ <address> | --help/-h ]
Examples:
   myclip                          # start a new clipboard
   myclip 192.168.86.24:53701      # join the clipboard at 192.168.86.24:53701
   myclip -d                       # start a new clipboard with debug output
   myclip -d 192.168.86.24:53701   # join the clipboard with debug output
Running just ` + "`myclip`" + ` will start a new clipboard.
It will also provide an address with which you can connect to the same clipboard with another device.`
```
In Go we can define multi-line strings using backticks.

We'll store client addresses in `listOfClients` so that we can send the clipboard to all of them:

```go
listOfClients = make([]*bufio.Writer, 0)
```

`localClipboard` will just hold the contents of the computer's clipboard.
```go
localClipboard string
```
`printDebugInfo` is a boolean we'll use to decide whether to print the details of what's happening. We'll change this boolean if the user uses the debug option.

```go
printDebugInfo = false
```

Because this is a CLI, and most CLIs print out their version when the `--version` option is used, we define `version`, which we'll print if the user uses the version option.
```go
version = "v1.0.0"
```

### The thing that starts everything

Our program will:
- Start a new clipboard and print an address (with which more computers can join) if no arguments are given.
- Join a clipboard if the address is given.
- Enable debug mode if the `--debug` option is given.
- Print out some help if the `--help` option is used.
- Print the version if the `--version` option is used.

The main function, literally:
``` go
func main() {
    
}
```
The main function is the function that Go will run when our program starts.

Add this in to the top of the function:
```go
if len(os.Args) > 3 {
    handleError(errors.New("too many arguments"))
    fmt.Println(helpMsg)
    return
}
```

`os.Args` is a slice (which is like an array but the length can change) that stores arguments supplied by the user on the command line.

<details>
<summary>What are arguments?</summary>

>To refresh your memory, an argument here is all the stuff you type after the command name:
>```shell
>ls myDir someFile lol
>```
>&nbsp; In this example, `myDir`, `someFile` and `lol` are the arguments to `ls`
</details>

Because the `--debug` option can be used with any other option, the max number of arguments we should get is 2. If we get more than 2, we'll print out an error and exit.

A quirk of Go is that `os.Args` has the path to the binary as the first element. This means that the first actual argument has the index 1 and not 0. When we do `len(os.Args)`, we're actually counting 1 extra. This means that `len(os.Args) > 3` will be true if there's more than 2 arguments.

This part just makes a new error that has the message "too many arguments" (lol as if that wasn't obvious):
```go
errors.New("too many arguments")
```

We'll be parsing a lot of options so to make our code neater, we'll define a function for parsing options. Add in this inside `main()`:
```go
if hasOption, _ := argsHaveOption("help", "h"); hasOption {
    fmt.Println(helpMsg)
    return
}
```
The syntax might look confusing. In Go, you can include one statement of code before the boolean check in an `if` block. You write the statement, end it with a semicolon (`;`) and then do the boolean check. See the underscore in `hasOption, _`? We use it to ignore the second return value of `argsHaveOption()`. In Go, functions can return multiple values.

Now Go might complain and give you errors at this point. This is because we haven't defined what the `argsHaveOption()` function does. We'll do this soon! The function will tell us whether the user has used some option by returning a boolean as the first return value. We'll check the boolean returned to see whether the user used the help option.

If the help option is given, we'll print `helpMsg`, which is the help text we wrote earlier.

Add in:
```go
if hasOption, _ := argsHaveOption("version", "v"); hasOption {
    fmt.Println(version)
    return
}
```
This just prints out the version variable if the version option is used (much like the help option code)

Add in:
```go
if hasOption, i := argsHaveOption("debug", "d"); hasOption {
    printDebugInfo = true
    os.Args = removeElemFromSlice(os.Args, i) // delete the debug option and run again
    main()
    return
}
```
When we'll write the `argsHaveOption()` function, we'll make sure it also returns a number with a boolean. This number will show where in the arguments the option was found. We'll use this index in another function (`removeElemFromSlice()`) which will delete the `i`th element from `os.Args`, essentially deleting the debug option and running the program again after making `printDebugInfo` true. We'll use this boolean in code later to decide whether to print detailed info.

Add in:
```go
if len(os.Args) == 2 { // has exactly one argument
    connectToServer(os.Args[1])
    return
}
```
Because of the quirk we discussed earlier, len(os.Args) will be 2 if there's one argument supplied. We'll use this argument as the address to connect to in another function. Don't worry if you see a lot of errors about undefined stuff.

Add in:
```go
makeServer() // if there's no arguments we should start a new clipboard
```
At this point the only remaining possibility is that the user has not given any arguments. This means that we should start up a new clipboard! The `makeServer()` function will make a server ("no way, *really??*") that will be the connecting point for more computers to join.

### Handle Errors
Let's make a function to handle errors:
```go
func handleError(err error) {
    if err == io.EOF {
        fmt.Println("Disconnected")
    } else {
        fmt.Fprintln(os.Stderr, "error: ["+err.Error()+"]")
    }
    return
}
```
if the error is an "EOF" ("End of File") error, we simply print "disconnected" (Because when a connection closes, that's the error that we'll handle), otherwise, we nicely format the error in brackets and output to stderr. It will look like this:
```
error: [the error message goes here]
```
`fmt.Fprintln()` takes in a writer and a message. It sends the message to the writer. The writer in this case is the stderr stream (`os.Stderr` is the stderr stream), so what we're doing is just writing the error to stderr.

### Check for options
Because this is going to be a CLI (Command Line Interface) app, we will need to parse options (for example, when you use `ls -l`, you're using the `-l` option). Add in:

```go
func argsHaveOption(long string, short string) (hasOption bool, foundAt int) {
    for i, arg := range os.Args {
        if arg == "--"+long || arg == "-"+short {
            return true, i
        }
    }
    return false, 0
}
```

![Wait wait wait.](https://media.tenor.com/images/b30c80d59700e5a1c577487775339b66/tenor.gif)

What does it do?

The purpose of the function is to let us check if an option was given.

The function takes in two strings and returns a true/false value and an integer.
The two strings are the two versions of the option - the short option and the long option. For example `grep -i` is the same as using `grep --ignore-case`. Here, `i` is the short version and `ignore-case` is the long one.

The function loops through the arguments and if the argument is either the long version or the short version, it returns true (to say: "yes, the option was found") and it also returns where it was found (the index) so that we can use it for the debug option (check `main()`!). If the loop finishes, which means the option wasn't found, it returns false and 0 because we have to return _something_.

Now, here we can test out the code in `main()` and see if option parsing and error printing works! Just comment out these lines:
```go
makeServer() // if there's no arguments we should start a new clipboard
```
```go
connectToServer(os.Args[1])
```
and replace them with print statements like:
```go
fmt.Println("Will make a server now!")
```
Add in more print statements wherever you want!

### Remove stuff from slices

```go
func removeElemFromSlice(slice []string, i int) []string {
    return append(slice[:i], slice[i+1:]...)
}
```

This function works by "reslicing". It takes in the slice to remove the element from as well as the index of the thing that needs to be removed.

The `slice[:i]` part makes a new slice with all the elements before the `i`'th element and the `slice[i+1:]` part makes a new slice with all the elements after the `i`'th element. The `append()` function takes in a slice and then it accepts any number of elements to be added to the slice. What we want to do here is to append all the elements of `slice[i+1:]` so we do something called "unpacking" with `...` to change the slice into arguments.

Here's an example:
suppose we have a slice that looks like this:
```go
ourSlice := []string{"elem0", "elem1", "elem2", "elem3", "elem4"}
```
 and we want to remove `elem2`. We'll use the function we just wrote up like so:
 ```go
 removeElemFromSlice(ourSlice, 2)
 ```

 and then inside the function:

`slice[:2]` will become `{"elem0", "elem1"}`

`slice[3:]` will become `{"elem3", "elem4"}`

when the `append()` function is called, it will be the same as this:
```go
append(slice[:2], "elem3", "elem4")
```
because we "unpacked" the second slice, the append function just gets raw, plain arguments.

You can see that when these are appended, the "elem2" element is completely gone.

**As if it was never there**

![Neveeerrrrrrr](https://media.giphy.com/media/xEpTspH9hGwHS/giphy.gif)

For more info on reslicing (and just slices in general), check out this nice hands-on site: [gobyexample.com/slices](https://gobyexample.com/slices)

Remember, this is the place we used this function:
```go
if hasOption, i := argsHaveOption("debug", "d"); hasOption {
    printDebugInfo = true
    os.Args = removeElemFromSlice(os.Args, i) // delete the debug option and run again
    main()
    return
}
```

When I was first writing this code, I just thought that clearing the element and setting it to empty would be enough. Turns out that we'd have to properly remove the whole thing because if we don't, `len(os.Args)` will be one more than it should be (the empty element is still *counted* as an element)

### Get the local IP address

```go
func getOutboundIP() net.IP {
    // https://stackoverflow.com/questions/23558425/how-do-i-get-the-local-ip-address-in-go/37382208#37382208
    conn, err := net.Dial("udp", "8.8.8.8:80") // address can be anything. Doesn't even have to exist
    if err != nil {
        handleError(err)
        return nil
    }
    defer conn.Close()
    localAddr := conn.LocalAddr().(*net.UDPAddr)
    return localAddr.IP
}
```
This function gets the computers local IP address with which other computers can connect (you can see how this is useful).

The way it works is by checking what IP address the computer would use to connect to the internet.

Check the stackoverflow link for more information.

### Make a server

```go
func makeServer() {
    
}
```

Add in:

```go
fmt.Println("Starting a new clipboard")
l, err := net.Listen("tcp4", "0.0.0.0:")
if err != nil {
    handleError(err)
    return
}
defer l.Close()
```
We just print out a message showing the user a new clipboard is being made.
Then we make a server (`l, err := net.Listen("tcp4", "0.0.0.0:")`). The `net.Listen()` takes in the protocol for communication, in this case: TCP, and the address at which it should listen for connections. The address should include the port but here we have not included the port. This means that Go just picks a port which is free on its own. The all zeros IP address tells Go to listen on all IP addresses belonging to the computer.

The `l` variable is a "Listener" which can be used to accept incoming connections.

To be able to sync clipboards, we need to be able to communicate between the devices. We'll do this through TCP sockets (which work over the internet). TCP is a protocol for communication, which means it's a ruleset that computers can follow to communicate.

As usual if we find an error, we handle it and then return.

If there is no error, we immediately "defer" the closing of the listener. This means that when the code finishes running, Go will close the listener.

```go
port := strconv.Itoa(l.Addr().(*net.TCPAddr).Port)
```
from the offical docs:

![docs showing that port is variable in the TCPAddr struct](https://cloud-43kwsiiyz.vercel.app/0image.png)

Let's go through that line step by step.  
`l.Addr()` is the address that the listener is listening on.  
`(*net.TCPAddr)` converts that address into a type called TCPAddr.  
`Port` is an int which shows the port number of the address.  
`strconv.Itoa()` just converts the int to a string. 

This just fetches the port that the server is listening on so that we can show this to the user and then the user can use it to connect to the server.

We then print the port formatted with the command and the IP. Add in:
```go
fmt.Println("Run", "`myclip", getOutboundIP().String()+":"+port+"`", "to join this clipboard")
fmt.Println()
```

Also add in:
```go
for {
    c, err := l.Accept()
    if err != nil {
        handleError(err)
        return
    }
    fmt.Println("Connected to a device")
    go handleClient(c)
}
```

`l.Accept()` waits until it gets a connection from a computer and when it does, it returns a `Conn` variable which we can use to communicate to that computer. As usual, we handle errors and print some info.

The `for` loop simply keeps getting connections forever and sends them to a different function which can then handle them. This is done in a new "goroutine" or thread so we can keep listening for more connections and handle the client at the same time.

Hint: A `for` loop in Go with nothing after it is the same as a `while (true)` loop in other languages.

More info about ports, TCP and how the internet works at [www.steves-internet-guide.com/tcpip-ports-sockets](http://www.steves-internet-guide.com/tcpip-ports-sockets/)

### Debug function
```go
func debug(a ...interface{}) {
    if printDebugInfo {
        fmt.Println("verbose:", a)
    }
}
```
This function takes any number of arguments (called a "vararg" function. The `...interface{}` lets it accept any number of variables of any type.), nicely formats them in brackets, and prints it out if `printDebugInfo` is `true`. We keep it false unless the user uses the debug option.

If we use the debug function the output will look like this:
```
verbose: [some message to be shown if in debug mode]
```

### Handle the client

```go
func handleClient(c net.Conn) {
	
}
```

Add in:
```go
w := bufio.NewWriter(c)
defer c.Close()
```
This makes a buffered writer that we can write strings to. It will send the strings to the connected computer.

Add in:
```go
listOfClients = append(listOfClients, w)
```
We need to keep a list of clients so we can send all of them the clipboard when we need to. We just append the writer to the `listOfClients` slice.

Add in:
```go
go monitorSentClips(bufio.NewReader(c))
```
Now we start another thread which will check for clipboards sent by the client. We input the connection's reader so that the function (`monitorSentClips()`) can get messages sent by the client.

Add in:
```go
monitorLocalClip(w)
```

Then we start another function that will check for changes to our own clipboard - the local clipboard - and send the clipboard if it has changed. We input the writer so that the function can send clipboards if necessary.

### Connect to server if we are the client

```go
func connectToServer(address string) {

}
```

```go
c, err := net.Dial("tcp4", address)
if err != nil {
    handleError(err)
    return
}
defer c.Close()
```
Now what if we are the client? If we are the client, we need to connect to the server using the address that the user gives us. `net.Dial()` connects to a server at `address`. `net.Dial()`, like the accept function, also returns a `Conn` variable. We'll use this variable to communicate with the server.

Remember, we get the address from this block of code in `main()`:
```go
if len(os.Args) == 2 { // has exactly one argument 
    connectToServer(os.Args[1])
    return
}
```

```go
fmt.Println("Connected to the clipboard")
go monitorSentClips(bufio.NewReader(c))
monitorLocalClip(bufio.NewWriter(c))
```
Then we check for changes to our own clipboard and also the clipboards sent by the server. This is a lot like the code for `handleClient()`.

### Check for changes to the local clipboard

```go
func monitorLocalClip(w *bufio.Writer) {
    for {
        localClipboard = getLocalClip()
        debug("clipboard changed so sending it. localClipboard =", localClipboard)
        err := sendClipboard(w, localClipboard)
        if err != nil {
            handleError(err)
            return
        }
        for localClipboard == getLocalClip() {
            time.Sleep(time.Second * time.Duration(secondsBetweenChecksForClipChange))
        }
    }
}
```
We get the local clipboard and send it. Then in the `for` loop while the clipboard remains the same as last time, we wait. 

(we check every second because we set `secondsBetweenChecksForClipChange` to 1 when declaring variables. You can change it!)

When it is no longer the same, we get out of that for loop (This one: `for localClipboard == getLocalClip()`) and then send the new clipboard to the client. (Remember that when calling this function we input the writer to the client).

We have ANOTHER function to send the clipboard to a writer.

At this point, you're like "omg so many functions it never ends" but in the end it's more readable, it's neater, it's easier to understand and it's easier to manage. A few minutes of looking at the entire source code will convince you of this.

### Check for sent clipboards
This is by far the largest function:
```go
func monitorSentClips(r *bufio.Reader) {
    var foreignClipboard string
    for {
        s, err := r.ReadString('\n')
        if err != nil {
            handleError(err)
            return
        }
        if s == "STARTCLIPBOARD\n" {
            for {
                s, err = r.ReadString('\n')
                if err != nil {
                    handleError(err)
                    return
                }
                if s == "ENDCLIPBOARD\n" {
                    foreignClipboard = strings.TrimSuffix(foreignClipboard, "\n")
                    break
                }
                foreignClipboard += s
            }
            setLocalClip(foreignClipboard)
            localClipboard = foreignClipboard // the local clipboard monitoring thread should still get that localClipboard is the same as the local clipboard.
            debug("rcvd:", foreignClipboard)
            for i, w := range listOfClients {
                if w != nil {
                    debug("Sending received clipboard to", w)
                    err := sendClipboard(w, foreignClipboard)
                    if err != nil {
                        listOfClients[i] = nil
                        fmt.Println("error when trying to send the clipboard to a device. Will not contact that device again.")
                        //handleError(err)
                    }
                }
            }
            foreignClipboard = ""
        }
    }
}
```

We define a string at the start to hold sent clipboards.

Then we have a huge `for` loop so that we can keep checking for sent clipboards. Inside this `for` loop is everything else. 

We read one line using the `ReadString()` function which takes in a character. How it works is that the function keeps reading until it hits that one character (we chose `"\n"` so we get each line separately) and then returns whatever it found till then *including that one character*. So it basically gives us the next line of input with a newline char at the end.

Then we check if this is the start of a clipboard by checking `if s == "STARTCLIPBOARD\n"`. 

We have yet another for loop that keeps reading more lines and keeps adding them to `foreignClipboard` so we get all of the sent clipboard *until* we find that `s == "ENDCLIPBOARD\n"`. When we see this, we remove the ending newline from `foreignClipboard` because `ReadString()` attaches an extra newline at the end of `s`

So now we have parsed the clipboard and we have it stored in `foreignClipboard`. We set the local clipboard to the sent one (so that both are synced. Our clipboard and the clipboard from far, far away are both the same now)

Then we print what we found if we should (`debug("rcvd:", foreignClipboard)`) and then we have ANOTHER `for` loop in which we send every client which is not `nil` the new clipboard. If we get an error while sending, we set the writer to `nil` so we don't contact him again. This is because we'll get an error after sending if the client simply disconnects (we obviously don't want to contact a client if it's already disconnected). And then when we're done wth sending the clipboard to everyone, we simply reset `foreignClipboard` to `""` so that we can continue getting more clipboards and then this whole cycle starts again!

One thing to note: if this is a client, `listOfClients` will just be empty (look at the source code to convince yourself of this). This means that nothing happens in that for loop if you're a client. When the clipboard is sent, the client will just set it's own clipboard and do nothing else. If it's a server, it'll send all the clients the clipboard as well as set it's own clipboard.

### Send the clipboard

The reason we have a seperate function for sending the clipboard is so both the server and the client can send clipboards to each other and we don't have to use duplicate code.

```go
func sendClipboard(w *bufio.Writer, clipboard string) error {
    var err error
    clipString := "STARTCLIPBOARD\n" + clipboard + "\nENDCLIPBOARD\n"
    if clipboard == "" {
        debug("was going to send empty string but skipping")
        return nil
    }
    debug("sent:", clipboard)
    _, err = w.WriteString(clipString)
    if err != nil {
        return err
    }
    err = w.Flush()
    return err
}
```
This function sends the clipboard to a writer and returns an error if anything goes wrong. We return the error so that we can check for clients that are unreachable and if they are, we can remove them from the list.

Sometimes the code gets an empty clipboard for some reason (I have no idea why. Please do tell me if you find out why. I'm **@Ishan** on Slack) so we have this in place to check if it is empty and to not send it if it is empty so that the other computers don't get their clipboards emptied (tongue twister, eh?):
```go
if clipboard == "" {
    debug("was going to send empty string but skipping")
    return nil
}
```

When we're sending the clipboard, we put "STARTCLIPBOARD" over it and "ENDCLIPBOARD" below it so that when we're parsing the clipboard the parser knows where one clipboard ends and where another starts (we'll be sending multiple clipboards because they can change, you know).

### Get the local clipboard

```go
func getLocalClip() string {
    var out []byte
    var err error
    var cmd *exec.Cmd
    if runtime.GOOS == "darwin" { // darwin means it's macOS
        cmd = exec.Command("pbpaste")
    } else if runtime.GOOS == "windows" {
        cmd = exec.Command("powershell.exe", "-command", "Get-Clipboard")
    } else {
        // Unix - check what's available
        if _, err := exec.LookPath("xclip"); err == nil {
            cmd = exec.Command("xclip", "-out", "-selection", "clipboard")
        } else if _, err := exec.LookPath("xsel"); err == nil {
            cmd = exec.Command("xsel", "--output", "--clipboard")
        } else if _, err := exec.LookPath("wl-paste"); err == nil {
            cmd = exec.Command("wl-paste", "--no-newline")
        } else if _, err := exec.LookPath("termux-clipboard-get"); err == nil {
            cmd = exec.Command("termux-clipboard-get")
        } else {
            handleError(errors.New("sorry, myclip won't work if you don't have xsel, xclip, wayland or Termux installed :("))
            os.Exit(2)
        }
    }
    if out, err = cmd.Output(); err != nil {
        handleError(err)
        return "An error occurred wile getting the local clipboard"
    }
    if runtime.GOOS == "windows" {
        return strings.TrimSuffix(string(out), "\r\n") // powershell's get-clipboard adds a windows newline to the end for some reason
    }
    return string(out)
}
```


We define some helper variables and then we check for different OSs because different OSs will have different commands for getting the clipboard. In Go, you can check the OS using the variable `runtime.GOOS`. 

The `exec.Command()` function lets you run commands found installed on the computer. (Like commands you can run in the terminal: ls, cd, etc.)

We set the `cmd` variable to whatever pre-installed command should be run.

For OSs which do not have clipboard utilities pre-installed we have to do a slightly more complicated thing. If the OS is not macOS or Windows, we use the `exec.LookPath()` function to see what's installed. (It returns the path to the binary we search for and an `error` variable)

We check for binaries. For each check we do, if the error is nil - which means that the command was found and can be used - we set `cmd` to the command we need to use to get the clipboard. 

For example, if we have `xclip` installed on a linux system, `exec.LookPath()` will return no error and so we'll use the command `xclip -out -selection clipboard` to get the clipboard.

If we don't find any of the utilities installed, we make a new error and shutdown the entire program. (`os.Exit(2)` will exit with status code 2) 

`cmd.Output()` then runs the command and returns the output as a slice of bytes (this will be the clipboard because that's what the command does). If we find that there is an error, we handle the error and then return "An error occurred wile getting the local clipboard" as the clipboard because if we have to return something, why not make it descriptive.

On Windows, the powershell command attaches a newline at the end of the clipboard for who knows what reason so we remove that. 

Then, we finally return the clipboard after converting the slice of bytes to a string! 

### Set the local clipboard
This part is very similar to the "Get the local clipboard" part
```go
func setLocalClip(s string) {
    var copyCmd *exec.Cmd
    if runtime.GOOS == "darwin" {
        copyCmd = exec.Command("pbcopy")
    } else if runtime.GOOS == "windows" {
        copyCmd = exec.Command("powershell.exe", "-command", "Set-Clipboard -Value "+"\""+s+"\"")
    } else {
        if _, err := exec.LookPath("xclip"); err == nil {
            copyCmd = exec.Command("xclip", "-in", "-selection", "clipboard")
        } else if _, err := exec.LookPath("xsel"); err == nil {
            copyCmd = exec.Command("xsel", "--input", "--clipboard")
        } else if _, err := exec.LookPath("wl-copy"); err == nil {
            copyCmd = exec.Command("wl-copy")
        } else if _, err := exec.LookPath("termux-clipboard-set"); err == nil {
            copyCmd = exec.Command("termux-clipboard-set")
        } else {
            handleError(errors.New("sorry, uniclip won't work if you don't have xsel, xclip, wayland or Termux:API installed :("))
            os.Exit(2)
        }
    }
    var in io.WriteCloser
    var err error
    in, err = copyCmd.StdinPipe()
    if err != nil {
        handleError(err)
        return
    }
    if err = copyCmd.Start(); err != nil {
        handleError(err)
        return
    }
    if _, err = in.Write([]byte(s)); err != nil {
        handleError(err)
        return
    }
    if err = in.Close(); err != nil {
        handleError(err)
        return
    }
    if err := copyCmd.Wait(); err != nil {
        handleError(err)
        return
    }
    return
}
```

This function takes in a string to set the clipboard to.

Just like the last part, we have a command variable and then we look for what's available and all that.

After that is the part that is different. The `in` variable let's us write to the input of the command. We start the command. Then, we convert the string to a byte slice and feed it into the command. The command then does our work for us and sets the computer's clipboard to the string we fed into it.

The command is like:

![I'm doing my part](https://media.giphy.com/media/YYfEjWVqZ6NDG/giphy.gif)

We wait for the command to complete its job and we close the writer and we're on our way!

## The End

Save your code!
Now let's see if it works:
```shell
go build myclip.go
./myclip --help
```
The help info should help you run and test it. You can also edit the help info by changing the variables!

Try out:
```shell
./myclip --debug
```
and follow the instructions it gives you.

Because this is a CLI, it is recommended to include a version option.

Try out:
```shell
./myclip --version
```

Check if the short forms work:
```shell
./myclip -v
```

Try it out with other devices you own or with your friend (you'll have to be connected to the same WiFi or local network)!

Tinker with the code! Mess around! Experiment!

Some things you could add in:

- Dashboard with clipboard history
- Use ngrok so you can share clipboards over the internet with anyone.
- Add in a web interface so people don't have to deal with CLI stuff
- Encrypted transmission of the clipboard

Some minor changes you could add:
- Follow [clig.dev](https://clig.dev) better
- Add in debug levels (`./myclip --debug 2`)

This workshop was based off my Uniclip project: [github.com/quackduck/uniclip](https://github.com/quackduck/uniclip)

Stuff other Hackclubbers made after following this workshop:

- Khushraj made [uniclip-ngrok.js](https://gist.github.com/KhushrajRathod/87035f73d6c2d69dbeb9704ad317d7f2)
  - It uses ngrok to share over the internet so anyone can share clipboards even if they're halfway across the world.
- Jason made [github.com/jasonappah/myclip-additions](https://github.com/jasonappah/myclip-additions)
   - It provides a web dashboard that can show your clipboard history.
- Sam made [clipboard-with-logs.go](https://gist.github.com/sampoder/f3555d873d3d569f7927801d9977d54a)

Jason and Khushraj demoe-ed their projects and you can watch [here](https://cloud-51eavoxvn.vercel.app/0zoom_1.mp4)

Sam demo-ed his [here](https://youtu.be/i4F_npU3UrI?t=1972)
## The full source code
It's pretty long

<details>
<summary>Click to show</summary>

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

var (
    secondsBetweenChecksForClipChange = 1
    helpMsg                           = `myclip - Shared Clipboard
With myclip, you can copy from one device and paste on another.

Usage: myclip [--debug/-d] [ <address> | --help/-h ]
Examples:
   myclip                          # start a new clipboard
   myclip 192.168.86.24:53701      # join the clipboard at 192.168.86.24:53701
   myclip -d                       # start a new clipboard with debug output
   myclip -d 192.168.86.24:53701   # join the clipboard with debug output
Running just ` + "`myclip`" + ` will start a new clipboard.
It will also provide an address with which you can connect to the same clipboard with another device.`
    listOfClients  = make([]*bufio.Writer, 0)
    localClipboard string
    printDebugInfo = false
    version        = "v1.0.0"
)

func main() {
    if len(os.Args) > 3 {
        handleError(errors.New("too many arguments"))
        fmt.Println(helpMsg)
        return
    }
    if hasOption, _ := argsHaveOption("help", "h"); hasOption {
        fmt.Println(helpMsg)
        return
    }
    if hasOption, i := argsHaveOption("debug", "d"); hasOption {
        printDebugInfo = true
        os.Args = removeElemFromSlice(os.Args, i) // delete the debug option and run again
        main()
        return
    }
    if hasOption, _ := argsHaveOption("version", "v"); hasOption {
        fmt.Println(version)
        return
    }
    if len(os.Args) == 2 { // has exactly one argument
        connectToServer(os.Args[1])
        return
    }
    makeServer() // if there's no arguments we should start a new clipboard
}

func handleError(err error) {
    if err == io.EOF {
        fmt.Println("Disconnected")
    } else {
        fmt.Fprintln(os.Stderr, "error: ["+err.Error()+"]")
    }
    return
}

func argsHaveOption(long string, short string) (hasOption bool, foundAt int) {
    for i, arg := range os.Args {
        if arg == "--"+long || arg == "-"+short {
            return true, i
        }
    }
    return false, 0
}

func removeElemFromSlice(slice []string, i int) []string {
    return append(slice[:i], slice[i+1:]...)
}

func getOutboundIP() net.IP {
    // https://stackoverflow.com/questions/23558425/how-do-i-get-the-local-ip-address-in-go/37382208#37382208
    conn, err := net.Dial("udp", "8.8.8.8:80") // address can be anything. Doesn't even have to exist
    if err != nil {
        handleError(err)
        return nil
    }
    defer conn.Close()
    localAddr := conn.LocalAddr().(*net.UDPAddr)
    return localAddr.IP
}

func makeServer() {
    fmt.Println("Starting a new clipboard")
    l, err := net.Listen("tcp4", "0.0.0.0:")
    if err != nil {
        handleError(err)
        return
    }
    defer l.Close()
    port := strconv.Itoa(l.Addr().(*net.TCPAddr).Port)
    fmt.Println("Run", "`myclip", getOutboundIP().String()+":"+port+"`", "to join this clipboard")
    fmt.Println()
    for {
        c, err := l.Accept()
        if err != nil {
            handleError(err)
            return
        }
        fmt.Println("Connected to a device")
        go handleClient(c)
    }
}

func debug(a ...interface{}) {
    if printDebugInfo {
        fmt.Println("verbose:", a)
    }
}

func handleClient(c net.Conn) {
    w := bufio.NewWriter(c)
    listOfClients = append(listOfClients, w)
    defer c.Close()
    go monitorSentClips(bufio.NewReader(c))
    monitorLocalClip(w)
}

func connectToServer(address string) {
    c, err := net.Dial("tcp4", address)
    if err != nil {
        handleError(err)
        return
    }
    defer c.Close()
    fmt.Println("Connected to the clipboard")
    go monitorSentClips(bufio.NewReader(c))
    monitorLocalClip(bufio.NewWriter(c))
}

func monitorLocalClip(w *bufio.Writer) {
    for {
        localClipboard = getLocalClip()
        debug("clipboard changed so sending it. localClipboard =", localClipboard)
        err := sendClipboard(w, localClipboard)
        if err != nil {
            handleError(err)
            return
        }
        for localClipboard == getLocalClip() {
            time.Sleep(time.Second * time.Duration(secondsBetweenChecksForClipChange))
        }
    }
}

func monitorSentClips(r *bufio.Reader) {
    var foreignClipboard string
    for {
        s, err := r.ReadString('\n')
        if err != nil {
            handleError(err)
            return
        }
        if s == "STARTCLIPBOARD\n" {
            for {
                s, err = r.ReadString('\n')
                if err != nil {
                    handleError(err)
                    return
                }
                if s == "ENDCLIPBOARD\n" {
                    foreignClipboard = strings.TrimSuffix(foreignClipboard, "\n")
                    break
                }
                foreignClipboard += s
            }
            setLocalClip(foreignClipboard)
            localClipboard = foreignClipboard // the local clipboard monitoring thread should still get that localClipboard is the same as the local clipboard.
            debug("rcvd:", foreignClipboard)
            for i, w := range listOfClients {
                if w != nil {
                    debug("Sending received clipboard to", w)
                    err := sendClipboard(w, foreignClipboard)
                    if err != nil {
                        listOfClients[i] = nil
                        fmt.Println("error when trying to send the clipboard to a device. Will not contact that device again.")
                        //handleError(err)
                    }
                }
            }
            foreignClipboard = ""
        }
    }
}

func sendClipboard(w *bufio.Writer, clipboard string) error {
    var err error
    clipString := "STARTCLIPBOARD\n" + clipboard + "\nENDCLIPBOARD\n"
    if clipboard == "" {
        debug("was going to send empty string but skipping")
        return nil
    }
    debug("sent:", clipboard)
    _, err = w.WriteString(clipString)
    if err != nil {
        return err
    }
    err = w.Flush()
    return err
}

func getLocalClip() string {
    var out []byte
    var err error
    var cmd *exec.Cmd
    if runtime.GOOS == "darwin" { // darwin means it's macOS
        cmd = exec.Command("pbpaste")
    } else if runtime.GOOS == "windows" {
        cmd = exec.Command("powershell.exe", "-command", "Get-Clipboard")
    } else {
        // Unix - check what's available
        if _, err := exec.LookPath("xclip"); err == nil {
            cmd = exec.Command("xclip", "-out", "-selection", "clipboard")
        } else if _, err := exec.LookPath("xsel"); err == nil {
            cmd = exec.Command("xsel", "--output", "--clipboard")
        } else if _, err := exec.LookPath("wl-paste"); err == nil {
            cmd = exec.Command("wl-paste", "--no-newline")
        } else if _, err := exec.LookPath("termux-clipboard-get"); err == nil {
            cmd = exec.Command("termux-clipboard-get")
        } else {
            handleError(errors.New("sorry, myclip won't work if you don't have xsel, xclip, wayland or Termux installed :("))
            os.Exit(2)
        }
    }
    if out, err = cmd.Output(); err != nil {
        handleError(err)
        return "An error occurred wile getting the local clipboard"
    }
    if runtime.GOOS == "windows" {
        return strings.TrimSuffix(string(out), "\r\n") // powershell's get-clipboard adds a windows newline to the end for some reason
    }
    return string(out)
}

func setLocalClip(s string) {
    var copyCmd *exec.Cmd
    if runtime.GOOS == "darwin" {
        copyCmd = exec.Command("pbcopy")
    } else if runtime.GOOS == "windows" {
        copyCmd = exec.Command("powershell.exe", "-command", "Set-Clipboard -Value "+"\""+s+"\"")
    } else {
        if _, err := exec.LookPath("xclip"); err == nil {
            copyCmd = exec.Command("xclip", "-in", "-selection", "clipboard")
        } else if _, err := exec.LookPath("xsel"); err == nil {
            copyCmd = exec.Command("xsel", "--input", "--clipboard")
        } else if _, err := exec.LookPath("wl-copy"); err == nil {
            copyCmd = exec.Command("wl-copy")
        } else if _, err := exec.LookPath("termux-clipboard-set"); err == nil {
            copyCmd = exec.Command("termux-clipboard-set")
        } else {
            handleError(errors.New("sorry, uniclip won't work if you don't have xsel, xclip, wayland or Termux:API installed :("))
            os.Exit(2)
        }
    }
    var in io.WriteCloser
    var err error
    in, err = copyCmd.StdinPipe()
    if err != nil {
        handleError(err)
        return
    }
    if err = copyCmd.Start(); err != nil {
        handleError(err)
        return
    }
    if _, err = in.Write([]byte(s)); err != nil {
        handleError(err)
        return
    }
    if err = in.Close(); err != nil {
        handleError(err)
        return
    }
    if err := copyCmd.Wait(); err != nil {
        handleError(err)
        return
    }
    return
}
```
</details>


