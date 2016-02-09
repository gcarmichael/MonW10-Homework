var express = require('express');
var menuRouter = express.Router();
var menu = require('./../models/menu');
var bodyParser = require('body-parser');
menuRouter.use(bodyParser.urlencoded({ extended: false }));

menuRouter.get('/', function(req, res){
  // INDEX
  res.render('menu/index', {menu: menu});
});

menuRouter.get('/new', function(req, res) {
  // NEW
  res.render('menu/new');
});

menuRouter.post('/', function(req, res) {
  // CREATE
  var newMeal = {};
  newMeal.name = req.body.name;
  newMeal.course = req.body.course;
  menu.meals.push(newMeal);
  res.redirect('/menu');
});

menuRouter.get('/:id', function(req, res){
  // SHOW
  res.render('menu/show', {meal: menu.meals[req.params.id-1], mealId: req.params.id});
});

menuRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.render("menu/edit", {meal: menu.meals[req.params.id-1], mealId: req.params.id});
});

menuRouter.post('/:id', function(req, res) {
  // UPDATE
  var meal = menu.meals[req.params.id-1];
  meal.name = req.body.name;
  meal.course = req.body.course;
  res.redirect('/menu');
});

menuRouter.post('/:id/delete', function(req, res) {
  // DELETE
  menu.meals.splice(req.params.id-1, 1);
  res.redirect('/menu')
});

module.exports = menuRouter;