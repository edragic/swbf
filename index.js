var express = require('express');

// Path to our public directory
var pub = __dirname + '/public';

// setup middleware
var app = express();
app.use(express.static(pub));

// Optional since express defaults to CWD/views
app.set('views', __dirname + '/views');
// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.set('view engine', 'jade');

app.get('/', function (req, res) { 
	res.render('index');
});

//because this is a silly local app right now.
app.use(function(err, req, res, next) {
	res.send(err.stack);
});

/* istanbul ignore next */
if (!module.parent) {
	app.listen(3002);
	console.log('Express started on port 3002');
}
