var express = require('express');

const User = require('../models/user');

var router = express.Router();

router.post("/create-user", function(req,res, next){
  const { name, department, age } = req.body
  const data = {
    name, department, age
  }
  User.create(data)
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.send(err)
    });
});

router.get("/get-user/:id", function(req,res, next){
  const id = req.params.id
  User.findById(id, (err, user) => {
    if(err) res.status(400)
    res.send(user)
  })
});

router.get("/list-user", function(req,res, next){
  User.find({}, (err, user) => {
    if(err) res.status(400)
    res.send(user)
  })
});

router.put("/user/:id", function(req,res, next){
  const id = req.params.id
  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if(err) res.status(400)
    res.send(user)
  })
});

router.delete("/user/:id", function(req,res, next){
  const id = req.params.id
  User.findByIdAndRemove(id, (err, user) => {
    if(err) res.status(400)
    res.send(user)
  })
});

module.exports = router
