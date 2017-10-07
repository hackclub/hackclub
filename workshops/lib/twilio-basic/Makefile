UGLIFY_BIN=./node_modules/uglify-js/bin/uglifyjs
TWILIO_BASIC_FILES=src/js/loader.js src/lib/dweet.min.js src/js/string_utils.js src/js/helpers.js src/js/client.js src/js/browserified_twilio.js
STORE_CREDENTIALS_FILES=src/js/util/store_credentials.js

.PHONY: test

all: twilio-basic.min.js store_credentials.min.js

twilio-basic.min.js:
	${UGLIFY_BIN} ${TWILIO_BASIC_FILES} > dist/twilio-basic.min.js

store_credentials.min.js:
	${UGLIFY_BIN} ${STORE_CREDENTIALS_FILES} > dist/store_credentials.min.js
