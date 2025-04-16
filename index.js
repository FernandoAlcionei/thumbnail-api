const express = require('express');
const app = express(),
  bodyParser = require('body-parser'),
  consign = require('consign'),
  http = require('http').Server(app),
  path = require('path')
  cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '500mb' }));

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(cors());

consign({ cwd : 'app' })
  .then('api')
	.then('routes')
  .into(app);

http.listen(3001, () => console.log('running: 3001'));
