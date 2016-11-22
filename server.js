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

app.get('/api/pictures', function (req, res) {
	var pictures = [
    {
      user: {
        username: 'edwindeleong',
        avatar: 'edwin.jpg'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'edwindeleong',
        avatar: 'edwin.jpg'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
      
    }
  ];

	setTimeout(function () {
		res.send(pictures);
	}, 2000)
	
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('La aplicación está escuchando en el puert0 3000');
})