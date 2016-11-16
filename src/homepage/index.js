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
      likes: 10,
      liked: true
    },
    {
      user: {
        username: 'edwindeleong',
        avatar: 'edwin.jpg'
      },
      url: 'office.jpg',
      likes: 2,
      liked: true
    }
  ];

  empty(main).appendChild(template(pictures));
})
