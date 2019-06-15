const sel = function (name){return document.querySelector(name);}
const reqButton = sel('#reqButton');

var socket = io();

socket.on('connect' , function(){
	console.log('CONNECTED TO SERVER');
	socket.emit('client');

	socket.on('reject', ()=>{console.log('CLIENT ALREADY CONNECTED');});
	//INIT ENDS

//****************
	reqButton.addEventListener('click',function () {
		console.log('EMITTING REQ');
		socket.emit('init');
	});

	socket.on('clientLink',(link)=>{
		console.log(`GOT: ${link}`);
		window.location.href = link;
	});
//****************

});

//DISCONNECTION
socket.on('disconnect', function(){console.log('DISCONNECTED FROM SERVER');});
