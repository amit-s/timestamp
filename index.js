'use strict';

let express = require('express');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function(){
	console.log(`Now listening on port ${port}`);
});
