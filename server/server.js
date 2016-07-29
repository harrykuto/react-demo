var express = require('express'),
  http = require('http'),
  path = require('path'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require( 'mongoose'),
  methodOverride = require('method-override');

var routes = require('./routes');
var app = express();
mongoose.connect('mongodb://localhost/HRM');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, my-header');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}

var port = process.env.PORT || 8088;
app.set('port', port);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '/')));

routes(app);

http.createServer(app).listen(port);
console.log('Frontend template is running on port ' + port);
