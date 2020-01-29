const mysql = require('mysql');
const express = require('express');
const app = express();
var cors = require('cors')
const mysqlConn= require('./config/conn');
const client = require('./route/client');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
// api routes
 app.use('/', require('./route/client'));
 app.use('/', require('./route/artisan'));
 app.use('/', require('./route/admin'));
 app.use('/', require('./route/categories'));
 app.use('/', require('./route/login'));
 app.use('/', require('./route/uploadPics'));
 app.use('/', require('./route/uploadDocs'));
 app.use('/', require('./route/uploadVideo'));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
