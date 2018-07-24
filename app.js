var express = require('express');
var mongoose = require('mongoose');
var app = express();

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

var UserSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password : {
        type: String,
        required: true
    },
    passwordConf : {
        type: String,
        required: true
    }
});

var User = mongoose.model('User' , UserSchema);
module.exports = User;