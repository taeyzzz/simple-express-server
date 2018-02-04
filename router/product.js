var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
  const result = [
    {
      product: 'a'
    },
    {
      product: 'b'
    }
  ]
  res.json({ result: result });
});

router.post("/add",function(req,res){
  const name = req.body.name
  res.json({ product: name });
});

module.exports = router
