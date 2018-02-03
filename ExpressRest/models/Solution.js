var db = require('../dbconnection');

var Solution = {
    getAllSolutions: function (callback) {
        return db.query("SELECT * FROM solution", callback);
    },
    getSolutionsByUserId: function (id, callback) {
        return db.query("SELECT * FROM solution WHERE user_id=?", [id], callback);
    },
    getSolutionsByAssignmentId: function (id, callback) {
        return db.query("SELECT * FROM solution WHERE assignment_id=?", [id], callback);
    },
    getSolutionsInRange: function (min, max, callback) {
        return db.query("SELECT * FROM solution WHERE rating BETWEEN ? AND ?", [min, max], callback);  
    },
    addSolution: function (Solution, callback) {
        return db.query("INSERT INTO solution VALUES(?,?,?)", [Solution.rating, Solution.user_id, Solution.assignment_id], callback);
    },
    deleteSolution: function (user_id, assignment_id, callback) {
        return db.query("DELETE FROM solution WHERE user_id=? AND assignment_id=?", [user_id, assignment_id], callback);
    },
    updateSolution: function (Solution, callback) {
        return db.query("UPDATE solution, rating=? WHERE user_id=? AND assignment_id=?", [Solution.rating, Solution.user_id, Solution.assignment_id], callback);
    }

};
module.exports = Solution;
