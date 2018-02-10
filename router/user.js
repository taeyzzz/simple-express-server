var express = require('express');
var nodeMailer = require('nodemailer');
var router = express.Router();


router.get("/",function(req,res, next){
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

router.post("/access_request", function(req,res, next){
  var transporter = nodeMailer.createTransport({
    service: 'Gmail',
      auth: {
          user: 'taeyzao@gmail.com', // Your email id
          pass: 'taeyzazao' // Your password
      },
      tls: {
        rejectUnauthorized: false
      }
  })
  let mailOptions = {
    from: '"Thanetpon kultontikorn" <taeyzao@gmail.com>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.text, // plain text body
    html: `<div style="background:red;">
            <h2>Displaying Colors</h2>
            <p>The w3-color classes can be used to add colors to any HTML element.</p>
            <a href="https://google.com">click me</a>
          </div>

          <div class="w3-container w3-red">
            <p>London is the capital city of England.</p>
          </div>`,
    attachments: [
       {
         path: 'uploads/picture.jpg'
       }
    ]

  };
  console.log('gonna send');
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      next(error)
      return
    }
    console.log('sent email');
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.json({ message: 'send email success'})
  });
});

module.exports = router
