# Twilio

This folder houses our modified Twilio client library.

It also contains:

- The [signup instructions for Twilio](signup.md)
- The non-existant [api_documentation.md](api_documentation.md) for the
  twilio-basic api

Pull requests here are definitely welcome.

## Building the Library

Run the following command to build the modified library. The output will be in
`dist/twilio-basic.js`.

```
$ uglifyjs src/js/loader.js src/lib/dweet.min.js src/js/string_utils.js \
src/js/helpers.js src/js/client.js src/js/browserified_twilio.js -o \
dist/twilio-basic.js
```
