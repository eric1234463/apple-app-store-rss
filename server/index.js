const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/apps', async (req, res) => {
  const page = req.query.page || 1;
  const offset = page * 10;
  const result = await axios.default.get(`https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-free/all/${offset}/explicit.json`);
  return res.json(result.data.feed.results);
});

app.get('/api/suggestion_apps', async (req, res) => {
  const page = req.query.page || 1;
  const offset = page * 10;
  const result = await axios.default.get(`https://rss.itunes.apple.com/api/v1/hk/ios-apps/top-grossing/all/${offset}/explicit.json`);
  return res.json(result.data.feed.results);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
