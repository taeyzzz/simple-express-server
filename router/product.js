const path = require('path')
var express = require('express');
var router = express.Router();
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

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

router.post("/upload", upload.single('file'),function(req,res){;
  res.json({ message: 'upload success'})
});

module.exports = router
