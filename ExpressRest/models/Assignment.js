var db = require('../dbconnection');

var Assignment = {
    getAllAssignments: function (callback) {
        return db.query("SELECT * FROM assignment", callback);
    },
    getAssignmentById: function (id, callback) {
        return db.query("SELECT * FROM assignment WHERE id = ?", [id], callback);
    },
    getAssignmentsInRange: function (min, max, callback) {
        return db.query("SELECT * FROM assignment WHERE rating BETWEEN ? AND ?", [min, max], callback);  
    },
    addAssignment: function (Assignment, callback) {
        return db.query("INSERT INTO assignment VALUES(?)", [Assignment.rating], callback);
    },
    deleteAssignment: function (id, callback) {
        return db.query("DELETE FROM assignment WHERE id=?", [id], callback);
    },
    updateAssignment: function (id, Assignment, callback) {
        return db.query("UPDATE assignment rating=? WHERE id=?", [Assignment.rating, id], callback);
    }

};
module.exports = Assignment;
