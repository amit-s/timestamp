'use strict';
let strftime = require('strftime');
let express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/css', express.static('public/css'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/:timestring', function(req,res){
	let timestring = req.params.timestring;	
	res.json(parseTime(timestring));
});

app.listen(app.get('port'), function(){
	console.log(`Now listening on port ${app.get('port')}`);
});


function parseTime(timestring){
	let pattern = /^\d+$/;

	if(pattern.test(timestring)){
		if((new Date(+timestring) == "Invalid Date")){
		return {unix: null, natural: null};
		}
		var date = new Date(+timestring);		
	}else{
		if((new Date(timestring) == "Invalid Date")){
		return {unix: null, natural: null};
		}
		var date = new Date(timestring);		
	}

	return {
		unix: strftime("%s", date),
		natural: strftime("%B %d, %Y", date)
	};	
}

