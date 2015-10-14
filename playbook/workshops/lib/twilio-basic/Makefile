UGLIFY_BIN=./node_modules/uglify-js/bin/uglifyjs
FILES=src/js/loader.js src/lib/dweet.min.js src/js/string_utils.js src/js/helpers.js src/js/client.js src/js/browserified_twilio.js

.PHONY: test

build:
	${UGLIFY_BIN} ${FILES} > dist/twilio-basic.min.js
