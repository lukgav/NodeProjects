//require modules
const path = require('path');
const express = require('express');
const app = express();
const serve = require('http').Server(app);
const hbs = require('hbs');
const io = require('socket.io')(serve, { origins: '*:*' });
// const Square = require('./dist/SquareClass.js');
//Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');
const distDirectoryPath = path.join(__dirname, './dist');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const indexPath = (path.join(__dirname, '../public/index.html'));
// define express config paths
app.use(express.static(publicDirectoryPath));
app.use(express.static(distDirectoryPath));
// app.use(express.static('public'));
app.get('', (req, res) =>{
    // res.setHeader("Content-Type", )
    res.setHeader("Content-Type", "text/html");
    // res.set('Content-Type', ['text/html', 'text/javascript', 'text/css']);
    res.set('X-Content-Type-Options', 'sniff');
    console.log(req.headers);
    res.sendFile(indexPath);
})

serve.listen(3000, () => {
    console.log('Server is on port 3000.');
})

var SOCKET_LIST = {};
var socketTest;
io.sockets.on('connection', (socket) =>{
    console.log('socket connection');
    // square variables
    socket.x = 20;
    socket.y = 30;
    socket.id = Math.random();
    socket.width = 10;
    // console.log(socket);
    var canvas;
    var ctx;
    var sqr;
    socket.on('canvas', (data) => {
        // canvas = data.dCanvas;
        context = data.dContext;
        // sqr = new Square(0, 0, 100, context);   
        // sqr.DrawMe();
        console.log(context);
        console.log('socket test');
    })
    // var sqr = new Square(0, 0, 100, context);


    SOCKET_LIST[socket.id] = socket;
    socketTest = socket;

    socket.on('sad', (data) =>{
        console.log('sad because no square is drawn...' + data.reason);
    })
});


const loopInterval = 100000/25;
setInterval(() => {
    var pack = [];
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        // socket.x++;
        // socket.y++;
        pack.push({
            x: socket.x,
            y: socket.y,
            width: socket.width,
        })
    }
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPosition', pack);
    }
}, loopInterval);