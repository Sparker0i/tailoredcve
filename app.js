var express = require('express');
var mongoose = require('mongoose');
var app = express();
var db = mongoose.connection;

db.on('error' , console.error.bind(console , 'Connection Error'));
db.once('open' , function() {

});

app.use(express.static(__dirname + '/template'));

var routes = require('./routes/router');
app.use('/' , routes);

app.use(function(req, res , next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err , req , res , next) {
    res.status(err.status || 500);
    res.json('error' , {
        message: err.message,
        error: {}
    });
});

app.listen(3000 , function() {
    console.log('Express app at port 3000');
});