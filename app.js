var express = require('express'),
    routes = require('./routes'),
    handlebars = require('express-handlebars');
var app = express();


app.set('port', (process.env.PORT || 5000));
app.set('views', (__dirname + '/views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
