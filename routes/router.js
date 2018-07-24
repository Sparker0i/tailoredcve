var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/' , function(req , res , next) {
    return res.sendFile(path.join(__dirname + '/template/index.html'));
});

router.post('/' , function(req , res , next) {
    if (req.body.password !== req.body.confirmPassword) {
        var err = new Error('Passwords do not match');
        err.status = 400;
        return next(err);
    }
    
    if (req.body.email && req.body.password) {

    }
    else {
        var err = new Error('Some Field has been missed out');
        err.status = 400;
        return next(err);
    }
})

module.exports = router;