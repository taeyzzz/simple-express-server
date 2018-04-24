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

router.post("/send-message", (req, res) => {
  const userName = req.body.userName
  const inCommingTxt = req.body.messageTxt
  req.serverSocketIO.emit('update-chat-list', {
    data: {
      inCommingTxt,
      userName
    }
  })
  res.json({
    data: {
      inCommingTxt,
      userName
    }
  })
})


module.exports = router
