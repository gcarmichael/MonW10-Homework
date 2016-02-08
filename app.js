var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

var menu = require('./models/menu');
var menuRouter = require('./controllers/menuRouter');

// Application settings
app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(expressLayouts);
app.use('/menu', menuRouter);
app.use(express.static(__dirname + '/public'));
// links express to directory for static files (e.g. CSS)

app.get('/', function(req, res){
  res.render('index', {welcome: "Welcome to our Menu!"});
});

app.listen('3000', function(){
  console.log('Running on port 3000');
});