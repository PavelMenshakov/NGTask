var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var posts = require('./routes/post');

var mongoose = require('mongoose');


var db = mongoose.connect('mongodb://localhost:27017/'); 

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/posts', posts);

app.get('/api/auth', function(req, res) {
    var user = req.param('name'),
        users = {
            "user1" : "24c9e15e52afc47c225b757e7bee1f9d",
            "user2" : "7e58d63b60197ceb55a1c487989a3720",
            "user3" : "92877af70a45fd6a2ed7fe81e1236b78"
        };


    res.json(users[user] || false);
});

app.get('/api/users', function(req, res) {
    var user = req.param('name'),
        users = {
            "user1" : {
                "name": "user1",
                "email": "userone@epam.com",
                "birthday": "01-01-02",
                "age": 25
            },
            "user2" : {
                "name": "user2",
                "email": "usertwo@epam.com",
                "birthday": "01-01-02",
                "age": 19
            },
            "user3" : {
                "name": "user3",
                "email": "userthree@epam.com",
                "birthday": "01-01-02",
                "age": 29
            }
        };


    res.json(users[user] || false);
});


app.get('/api/tree',function(req,res){
    var data = {
        "name": "root",
        "children": [
            {
                "name": "Node 1",
                "opened": "true",
                "children": [
                    {
                        "name": "Subnode 1-1"
                    },
                    {
                        "name": "Subnode 1-2",
                        "opened": true,
                        "children": [
                            {
                                "name": "Subnode 1-2-1",
                                "opened": true,
                                "children": [
                                    {
                                        "name": "Subnode 1-2-1-1"
                                    },
                                    {
                                        "name": "Subnode 1-2-1-2"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Node 2",
                "children": [
                    {
                        "name": "Subnode 2-1",
                        "children": []
                    },
                    {
                        "name": "Subnode 2-2",
                        "opened": true,
                        "children": [
                            {
                                "name": "Subnode 2-2-1",
                                "children": [
                                    {
                                        "name": "Subnode 2-2-1-1",
                                        "children": []
                                    },
                                    {
                                        "name": "Subnode 2-2-1-2",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    res.json(data);
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function () {
    console.log('listening on port ' + 3000);	
});

module.exports = app;