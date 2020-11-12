const express = require('express');
const database = require("@replit/database")
const path = require('path');

const db = new database()
const app = express();
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('server started');
});

app.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname + '/new.html'));
});

app.post('/link', (req, res) => {

  key = '' + req.body.key;
  value = '' + req.body.value;
  console.log(21, key)

  db.set(key, value).then(() => {
    db.get(key).then(link => {
      console.log(22, link)
      res.send(path.join(__dirname + '/' + key))
    });
  });

});

app.get('/*', (req, res) => {

  let key = "" + req.originalUrl
  key = key.substring(1);

  console.log(11, key)

  db.get(key).then(link => {
    if (link != null) {
      console.log(12, link)
      res.redirect(link)
    }
    else {
      res.sendStatus(404)
    }
  });

});