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
  res.render('menu/show', {meal: menu.meals[req.params.id-1]});
});

menuRouter.get('/:id/edit', function(req, res) {
  // EDIT
  res.send("menu/edit" + menu.meals[req.params.id-1].name);
});

menuRouter.post('/:id', function(req, res) {
  // UPDATE
  res.send("menu/update" + menu.meals[req.params.id-1].name);
});

menuRouter.post('/:id', function(req, res) {
  // DELETE
  res.send("menu/delete" + menu.meals[req.params.id-1].name);
});

module.exports = menuRouter;