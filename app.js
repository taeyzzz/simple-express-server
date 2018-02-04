var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

var userRouter = require('./router/user')
var productRouter = require('./router/product')

app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/user",userRouter);
app.use("/product",productRouter);


app.get('/', function(req, res){
  res.send('hello world');
});


app.listen(5555, () => {
  console.log('listen 5555');
});
