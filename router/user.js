var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
  const result = [
    {
      user: 'a'
    },
    {
      user: 'b'
    }
  ]
  res.json({ result: result });
});

router.post("/add",function(req,res){
  const name = req.body.name
  res.json({ user: name });
});

module.exports = router
