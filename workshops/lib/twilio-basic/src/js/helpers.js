var Twilio = Twilio || {}

Twilio.INITIALIZED = false
Twilio.queuedFns = []

Twilio._convertToCamelCase = function (string) {
  return string.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
    if (p2) {
      return p2.toUpperCase()
    } else {
      return p1.toLowerCase()
    }
  })
}

Twilio._stripNumber = function (number) {
  number = number.replace(/\D/g, '')
  if (number.length === 11) {
    number = number.slice(1, 11)
  }
  if (number.length !== 10) {
    throw "The phone number you entered: '" + number + "' is invalid!"
  }
  return number
}

Twilio._standardizePropertyCase = function (object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      var newKey = Twilio._convertToCamelCase(key)
      object[newKey] = object[key].toString()
      delete object[key]
    }
  }
}

Twilio._getStrippedNumber = function () {
  return Twilio._stripNumber(Twilio.PHONE_NUMBER)
}

Twilio._getDweetUrl = function () {
  return Twilio._buildDweetUrl(Twilio._getStrippedNumber())
}

Twilio._buildDweetUrl = function (number) {
  return 'https://dweet.io/dweet/for/' + number
}

Twilio._setInitializationTrue = function () {
  Twilio.INITIALIZED = true
  Twilio.queuedFns.forEach(function (fn) {
    fn()
  })
}

Twilio._getInitialization = function () {
  return Twilio.INITIALIZED
}

Twilio._runWhenInitialized = function (fn) {
  if (Twilio._getInitialization()) {
    fn()
  } else {
    Twilio.queuedFns.push(fn)
  }
}

Twilio.log = function (message) {
  var message = StringUtils.format.apply(this, arguments)
  console.log(message)
}
