function loadDate() {
  var currentDate = new Date();
  var dateString = currentDate.toString()
                     .split(" ")
                     .splice(0, 4)
                     .join(" ");

  $("#date").text(dateString);
}

function loadWeather() {
  var weather = $("#weather");
  var url = "https://api.forecast.io/forecast/";
  var apiKey = "9f393b3649ff07769b75d4b7bc75fcd3";

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
  }

  function error() {
    alert("Unable to retrieve your location for weather");
  }

  navigator.geolocation.getCurrentPosition(success, error);

  weather.text("fetching weather...");
}

function loadNews() {
  var news = $("#news");
  var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
  var apiKey = "83781e51c30e4a3bb7cc2b0ffde70d8c";

  $.getJSON(url + apiKey, function(data) {
    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });

    news.html(titles.join("<br><br>"));
  });

  news.text("fetching news...");
}

loadDate();
loadWeather();
loadNews();
