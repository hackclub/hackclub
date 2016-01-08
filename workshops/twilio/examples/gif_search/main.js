var GIPHY_TOKEN="dc6zaTOxFJmzC";

function giphyURL(searchQuery) {
  var encodedQuery = encodeURIComponent(searchQuery);

  return "http://api.giphy.com/v1/gifs/search?q=" + encodedQuery +
    "&api_key=" + GIPHY_TOKEN;
}

function searchGIF(searchQuery) {
  return fetch(giphyURL(msg.body))
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      return data[0].images.original.url;
    });
}

Twilio.listenForMessages(function (msg) {
  fetch(giphyURL(msg.body))
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      Twilio.sendMessage(msg.from, data.data[0].images.original.url);
    });
});
