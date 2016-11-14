var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('index', { title: 'Mardwingram' });
})

app.get('/signup', function (req, res) {
	res.render('index', { title: 'Mardwingram - Signup' });
})

app.get('/signin', function (req, res) {
	res.render('index', { title: 'Mardwingram - Signin' });
})

app.listen(3000, function (err) {
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('La aplicación está escuchando en el puert0 3000');
})