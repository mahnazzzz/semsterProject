var express = require('express');
var router = express.Router();
var Solution = require('../models/Solution');

router.get('/', function (req, res, next) {

    Solution.getAllSolutions(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
})
router.get('/user/:id?', function (req, res, next) {

    Solution.getSolutionsByUserId(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/assignment/:id?', function (req, res, next) {

    Solution.getSolutionsByAssignmentId(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.get('/range/:min?/:max?', function (req, res, next) {

    Solution.getSolutionsInRange(req.params.min, req.params.max, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/', function (req, res, next) {

    Solution.addSolution(req.body, function (err, count) {
        //console.log(req.body);
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});
router.delete('/', function (req, res, next) {

    Solution.deleteSolution(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.put('/', function (req, res, next) {

    Solution.updateSolution(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;