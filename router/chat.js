const path = require('path')
var express = require('express');
var router = express.Router();
let activeUser = []

router.post("/login",function(req,res){
  const userName = req.body.userName
  const date = req.body.date
  activeUser.push({
    userName,
    date
  })
  req.serverSocketIO.emit('new-active-user', {
    newUser: {
      userName,
      date
    }
  })
  res.json({ userList: activeUser });
});


module.exports = router
