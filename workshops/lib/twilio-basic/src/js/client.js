var Twilio = Twilio || {}

function twilioCallback(twilio) {
  var client = new twilio.RestClient(Twilio.ACCOUNT_SID, Twilio.AUTH_TOKEN)

  Twilio.sendMessage = function (number, message, callback) {
    Twilio._runWhenInitialized(function () {
      Twilio.log("Sending message '{0}' to '{1}'...", message, number)

      client.messages.create(
        {
          to: number,
          from: Twilio.PHONE_NUMBER,
          body: message
        },
        function (err, response) {
          if (err === null) {
            Twilio.log(
              "Sucessfully sent message '{0}' to '{1}'.",
              message,
              number
            )
            if (callback) {
              callback(response)
            }
          } else {
            Twilio.log(
              "ERROR: Could not sent message '{0}' to number '{1}' because '{2}'",
              message,
              number,
              err.message
            )
            if (callback) {
              callback(err)
            }
          }
        }
      )
    })
  }

  Twilio.callAndSay = function (number, message, callback) {
    Twilio._runWhenInitialized(function () {
      Twilio.log("Calling '{0}' and will say '{1}'...", number, message)
      var encodedMessage = encodeURIComponent(message)
      var twimletUrl =
        'http://twimlets.com/message?Message%5B0%5D=' + encodedMessage
      client.makeCall(
        {
          to: number,
          from: Twilio.PHONE_NUMBER,
          url: twimletUrl
        },
        function (err, response) {
          if (err === null) {
            Twilio.log(
              "Sucessfully called number '{0}' and about to say '{1}'",
              number,
              message
            )
            if (callback) {
              callback(response)
            }
          } else {
            Twilio.log(
              "ERROR: Could not call number '{0}' and say '{1}' because {2}",
              number,
              message,
              err.message
            )
            if (callback) {
              callback(err)
            }
          }
        }
      )
    })
  }

  Twilio.callAndPlay = function (number, mp3Url, callback) {
    9
    Twilio._runWhenInitialized(function () {
      Twilio.log("Calling '{0}' and will play '{1}'...", number, mp3Url)
      var encodedMp3Url = encodeURIComponent(mp3Url)
      var twimletUrl =
        'http://twimlets.com/message?Message%5B0%5D=' + encodedMp3Url
      client.makeCall(
        {
          to: number, // Any number Twilio can call
          from: Twilio.PHONE_NUMBER, // A number you bought from Twilio and can use for outbound communication
          url: twimletUrl // A URL that produces an XML document (TwiML) which contains instructions for the call
        },
        function (err, responseData) {
          if (err === null) {
            Twilio.log(
              "Sucessfully called number '{0}' and about to play the music file '{1}'",
              number,
              mp3Url
            )
            if (callback) {
              callback(response)
            }
          } else {
            Twilio.log(
              "ERROR: Could not call number '{0}' and play the music file '{1}' because {2}",
              number,
              mp3Url,
              err.message
            )
            if (callback) {
              callback(err)
            }
          }
        }
      )
    })
  }

  Twilio.listenForMessages = function (callback) {
    Twilio._runWhenInitialized(function () {
      dweetio.listen_for(Twilio._getStrippedNumber(), function (dweet) {
        var content = dweet.content
        Twilio._standardizePropertyCase(content)
        callback(content)
      })
    })
  }

  Twilio.getLatestMessage = function (callback) {
    Twilio._runWhenInitialized(function () {
      dweetio.get_latest_dweet_for(Twilio._getStrippedNumber(), function (
        err,
        dweets
      ) {
        var dweet = dweets[0] // Dweet is always an array of 1
        var content = dweet.content
        Twilio._standardizePropertyCase(content)
        callback(content)
      })
    })
  }

  Twilio.getAllMessages = function (callback) {
    Twilio._runWhenInitialized(function () {
      dweetio.get_all_dweets_for(Twilio._getStrippedNumber(), function (
        err,
        dweets
      ) {
        var messages = dweets.map(function (dweet) {
          var content = dweet.content
          Twilio._standardizePropertyCase(content)
          return content
        })
        callback(messages)
      })
    })
  }

  Twilio._getIncomingPhoneNumbers = function (callback) {
    client.incomingPhoneNumbers.list(function (err, data) {
      if (err === null) {
        callback(data.incomingPhoneNumbers)
      } else {
        throw 'Unable to get phone numbers resource because of ' + err.message
      }
    })
  }

  Twilio._ensureIncomingPhoneNumber = function () {
    Twilio._getIncomingPhoneNumbers(function (incomingPhoneNumbers) {
      if (incomingPhoneNumbers.length === 0) {
        Twilio._provisionNewNumber(function () {
          Twilio._setInitializationTrue()
        })
      } else {
        var phoneObject = incomingPhoneNumbers[0]
        console.log('Your Twilio phone number is ' + phoneObject.phoneNumber)
        Twilio._setNumber(phoneObject.phoneNumber)
        Twilio._setInitializationTrue()
      }
    })
  }

  Twilio._provisionNewNumber = function (callback) {
    var phoneRequirements = {
      voiceEnabled: 'true',
      smsEnabled: 'true',
      mmsEnabled: 'true'
    }
    client
      .availablePhoneNumbers('US')
      .local.list(phoneRequirements, function (err, numbers) {
        var phoneObject = numbers.availablePhoneNumbers[0]
        var number = phoneObject.phoneNumber
        var strippedNumber = Twilio._stripNumber(number)
        var dweetUrl = Twilio._buildDweetUrl(strippedNumber)
        client.incomingPhoneNumbers.create(
          {
            phoneNumber: phoneObject.phoneNumber,
            smsUrl: dweetUrl
          },
          function (err, purchasedNumber) {
            console.log(
              'Your Twilio phone number is ' + purchasedNumber.phoneNumber
            )
            Twilio._setNumber(purchasedNumber.phoneNumber)
            if (err !== null) {
              throw 'ERROR: Unable to purchase a numbeer'
            } else {
              callback()
            }
          }
        )
      })
  }

  Twilio._setNumber = function (number) {
    Twilio.PHONE_NUMBER = Twilio._stripNumber(number)
  }

  Twilio._initialize = function () {
    Twilio._ensureIncomingPhoneNumber()
  }

  Twilio._initialize()
}
