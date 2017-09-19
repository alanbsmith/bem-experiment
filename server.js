require('dotenv').load();

const path = require('path');
const express = require('express');
const app = express();
const jsonServer = require('json-server');
const PORT = process.env.PORT || 8080;
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const request = require('request-json');
const newsRequestClient = request.createClient('https://newsapi.org/');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/v1/', jsonServer.router('db/db.json'));

app.get('/api/v1/articles', function(request, response) {
  const id = request.query.id;
  newsRequestClient.get(`v1/articles?source=${id}&apiKey=${NEWS_API_KEY}`, (err, res, body) => {
    response.send(body);
  });
});


app.use('*', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
