//express module
var express = require('express');


//requiring members.json file
var members = require('./data/_members.json');

//membersList
var membersList = Object.keys(members).map((value) =>{
	return members[value];
});

//app, using the methods from express
var app = express();

//using the jade template engine
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

//using static files
app.use('/assets', express.static('assets'));

app.get('/', (req, res) =>{
	var path = req.path;
	res.locals.path = path;
	res.render('index');
});

app.get('/news', (req, res) =>{
	var path = req.path;
	res.locals.path = path;
	res.render('error');
});

app.get('/about', (req, res) =>{
	var path = req.path;
	res.locals.path = path;
	res.render('error');
});

app.get('/help',(req, res) =>{
	res.render('help', {members : membersList});
});

app.get('/help/view', (req, res) =>{
	res.render('profile');
});




//listening to localhost:3000
app.listen(3000, () =>{
	console.log('Listening to 127.0.0.1: 3000');
});