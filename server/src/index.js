const express = require('express');
const redirect = require('./controllers/redirects.controller');
const url = require('./controllers/url.controller');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.use('/', redirect);
app.use('/api/url', url);


module.exports = app;