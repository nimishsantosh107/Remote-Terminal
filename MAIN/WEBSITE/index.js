const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

var app = express();
var server = http.Server(app);
app.use(bodyParser.json());

//ROUTES
app.use('/',express.static(path.join(__dirname,'/public')));

app.post('/link',(req,res)=>{
	var link = req.body.link;
	link = link.match(/(https).*/gi)[0];
	console.log(link);
	res.status(200).send('ACK');
});


server.listen(3000,()=>{console.log('SERVER IS UP ON PORT 3000');});