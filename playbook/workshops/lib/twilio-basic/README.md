# Twilio

_Questions, comments and critiques are welcome! Send your feedback
[here](https://docs.google.com/forms/d/1IxbiDtyP-UOx3hRGu3o2I-iVll95xQ6I_pW8JS3TZ2k/viewform?entry.1677546962=The+twilio+library)._

This folder houses our modified Twilio client library.

It also contains:

- The [signup instructions for Twilio](signup.md)
- The non-existant [api_documentation.md](api_documentation.md) for the
  twilio-basic api

Pull requests here are definitely welcome.

## Building the Library

Install dependencies for the build:

    $ npm install

And now just run `make` command to build the modified library. The output will
be in `dist/twilio-basic.min.js`.

    $ make
