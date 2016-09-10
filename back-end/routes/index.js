var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoUrl = 'mongodb://localhost:27017/students';
var Student = require('../models/students');
mongoose.connect(mongoUrl);

// var student = new Student({
// 	name: "Danny",
// 	gender: "Male"
// })

// student.save();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getStudents', function(req, res, next){
	Student.find({}, function(error, documents){
		if(error){
			res.json({message: "No students found"});
		}else{
			res.json(documents);
		}
	});
});

module.exports = router;
