const express = require('express')
const logger = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()

const { v4: uuidv4 } =  require('uuid');

var http = require('http').createServer(app)
var io = require('socket.io')(http)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// set port variable
app.set('port', process.env.PORT || 3030)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

app.get('/', (request, response) => {
    response.render('home');
})


// socket.io 

io.on('connection', (socket) => {
    console.log('A user connected')
    socket.broadcast.emit('user joined conversation');

    socket.on('disconnect', () => {
        socket.broadcast.emit('user left conversation');
        console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
})



// Server
http.listen(app.get('port'), err => {
    if (err) {
        console.log('Error in port');
    } else {
        console.log(`Port started at ${app.get('port')}`);
    }
})

