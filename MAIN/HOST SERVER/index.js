const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var server = http.Server(app);
app.use(bodyParser.json());



server.listen(2000,()=>{console.log('HOST IS UP ON POSR 2000');});