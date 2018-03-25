const path = require('path')
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var morgan = require('morgan')

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var userRouter = require('./router/user')
var productRouter = require('./router/product')
var chatRouter = require('./router/chat')

const errorHandler = (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'))

app.use(function(req, res, next) {
  req.serverSocketIO = io;
  next();
});

io.on('connection', function(socket) {
    console.log('Client connected...');
    socket.on('join', function(data) {
        console.log(data);
    });
    socket.emit('hello', {hello: 'world'})
});


app.use('/public', express.static(path.join(__dirname, 'public')))

app.use("/chat", chatRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.get('/', function(req, res){
  res.send('hello world');
});

app.use(errorHandler)

server.listen(5555, () => {
  console.log('listen 5555');
});
