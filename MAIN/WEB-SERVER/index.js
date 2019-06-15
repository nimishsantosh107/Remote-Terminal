const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
var HOST_ID = null;
var CLIENT_ID = null;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//ROUTES
app.use('/',express.static(path.join(__dirname,'/views/public')));

//SOCKET 
io.on('connection',(socket)=>{
	socket.on('host', ()=>{
		if(HOST_ID!==null) {
			socket.emit('reject');
		}
		else {
			console.log(`HOST CONNECTED - ${socket.id}`);
			HOST_ID = socket.id;
		}
	});
	socket.on('client', ()=>{
		if(CLIENT_ID!==null) {
			socket.emit('reject');
		}
		else {
			console.log(`CLIENT CONNECTED - ${socket.id}`);
			CLIENT_ID = socket.id
		}
	});
	//INIT ENDS

//****************
	socket.on('init', ()=>{
		console.log('REQ INIT');
		io.sockets.connected[HOST_ID].emit('hostInit');
	});


	socket.on('link', (link)=>{
		console.log(link);
		io.sockets.connected[CLIENT_ID].emit('clientLink',link);
	});
//****************


	//DISCONNECTION
	socket.on('disconnect', ()=>{
		if(socket.id === HOST_ID){
			console.log('HOST DISCONNECTED');
			HOST_ID = null;
		} else if(socket.id === CLIENT_ID){
		 	console.log(`CLIENT DISCONNECTED`);
			CLIENT_ID = null;
		}
	});
});

server.listen(PORT,()=>{console.log(`SERVER UP ON ${PORT}`);});