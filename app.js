
// require statements do just that, and then the js
// module is loaded into the var
var express = require('express'),
    routes = require('./routes'),
    handlebars = require('express-handlebars');

// create the actual engine
var app = express();

// set some params on the server
app.set('port', (process.env.PORT || 5000));
app.set('views', (__dirname + '/views')); // the directory for the views

// the rendering engine -
// in this case we specify that handlebars will be the core
// this means it will first render views/layouts/main.handlebars and
// actual request into the {{BODY}} part
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// get our statics from her - javascript and css
app.use(express.static(__dirname + '/public'));

// establish some routes
app.get('/', routes.index); // any GET request for '/'
app.get('/users', routes.users);
app.get('/users/:id', routes.users.one);

// start the server and log a bit
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
