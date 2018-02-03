var db = require('../dbconnection');

var User = {
    getAllUsers: function (callback) {
        return db.query("SELECT * FROM user", callback);
    },
    getUserById: function (id, callback) {
        return db.query("SELECT * FROM user WHERE id=?", [id], callback);
    },
    getUsersInRange: function (min, max, callback) {
        return db.query("SELECT * FROM user WHERE rating BETWEEN ? AND ?", [min, max], callback);  
    },
    addUser: function (User, callback) {
        return db.query("INSERT INTO user(name, rating) VALUES(?,?)", [User.name, User.rating], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("DELETE FROM user WHERE id=?", [id], callback);
    },
    updateUser: function (User, callback) {
        return db.query("UPDATE user SET name=?, rating=? WHERE id=?", [User.name, User.rating, User.id], callback);
    }

};
module.exports = User;
