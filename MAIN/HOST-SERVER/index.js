const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const ioc = require('socket.io-client');
const cmd = require('node-cmd');

const LINK = "https://terminal-share.herokuapp.com/"
const PORT = 2000

var app = express();
var server = http.Server(app);
app.use(bodyParser.json());

server.listen(PORT,()=>{
	console.log('HOST IS UP ON PORT 2000');
	var iocc = ioc(LINK);
	iocc.on('connect',()=>{
		console.log('CONNECTED TO MAIN');
		iocc.emit('host');

		iocc.on('reject', ()=>{console.log('HOST ALREADY CONNECTED');});
		//INIT ENDS

//****************
		iocc.on('hostInit',()=>{
			console.log('LOGIN');
			cmd.run('open -a Terminal.app /Users/nimish/Desktop//Projects/terminal-share/MAIN/HOST-SERVER/login.sh');
		});

		app.post('/link',(req,res)=>{
			var link = req.body.link;
			link = link.match(/(https).*/gi)[0];
			console.log(`RESPONSE: ${link}`);
			iocc.emit('link',link);
			res.status(200).send('ACK');
		});
//****************
		
		//DISCONNECTION
		iocc.on('disconnect',()=>{console.log('SERVER DISCONNECTED');});
	});
});