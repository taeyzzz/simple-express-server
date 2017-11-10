var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  console.log('listen port 5555');
  res.send('hello world');
});

app.post('/needresult', function(req, res){
  console.log('volk');
  console.log(req.body);
  const name = req.body.name
  const friend = req.body.friend
  res.status(200).json({name: name,friend:friend});
});

app.listen(5555);
