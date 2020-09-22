// To see which phone number you can text to trigger the code
// in this example, simply click "Run with JS" in the Output
// Window. The phone number will be printed in the Console tab.

// When we get a message...
Twilio.listenForMessages(function (msg) {
  // search https://giphy.com/ for a GIF that matches what is texted to us...
  searchGIF(msg.body).then(function (gifURL) {
    // set the website's background to `url('gifURL')` (replacing gifURL with
    // the actual GIF's url).
    document.body.style.backgroundImage = "url('" + gifURL + "')"
  })
})

// The below code consists of two functions that make the above code work.
// You're not expected to know how it works, but you're welcome to check it out
// if you'd like!

// This function searches https://giphy.com/ for a GIF that matches searchQuery.
// This is a function that returns a special value called a Promise. We don't
// expect you to know how this works or what Promises are. All you need to worry
// about is the usage example below (notice how we have to use .then to get the
// GIF's URL):
//
// Log a kitten GIF's URL to the console:
//
//    searchGIF("kitten")
//      .then(function (gifURL) {
//        console.log(gifURL);
//      });
function searchGIF(searchQuery) {
  return fetch(giphyURL(searchQuery))
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      return data.data[0].images.original.url
    })
}

// This function creates a URL that we can use to search https://giphy.com/ for
// GIFs. We don't expect you to understand what's happening in this function.
function giphyURL(searchQuery) {
  // This is a special public key (like the Twilio auth token) provided by Giphy
  // that allows us to search their website
  var GIPHY_TOKEN = 'dc6zaTOxFJmzC'
  var encodedQuery = encodeURIComponent(searchQuery)

  return (
    'https://surrogate.hackedu.us/api.giphy.com/v1/gifs/search' +
    '?q=' +
    encodedQuery +
    '&api_key=' +
    GIPHY_TOKEN
  )
}
