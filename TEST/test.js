const express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

app.get('/',(req,res)=>{
	res.status(200).send('TEST IS ONLINE/MAIN DISABLED');
});

app.listen(PORT,()=>{console.log(`SERVER UP ON ${PORT}`);});