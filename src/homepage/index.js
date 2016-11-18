var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
	title('Mardwingram');
  var main = document.getElementById('main-container');

 var pictures = [
    {
      user: {
        username: 'edwindeleong',
        avatar: 'edwin.jpg'
      },
      url: 'office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
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

  empty(main).appendChild(template(pictures));
})
