var db = require('../database.js');

exports.index = function(req, res) {
    res.render('index');
};

exports.users = function(req, res) {
    db.users.find(function(err, users) {
        if(err) {
          console.log(err);
          return;
        }

        res.json(users);
    });
};

exports.users.one = function(req, res) {
    var userid = db.ObjectId(req.params.id);

    db.users.findOne({'_id' : userid}, function(err, user) {
        if(err) {
          console.log(err);
          return;
        }

        res.json(user);
    });
};
