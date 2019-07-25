//require modules
const path = require('path');
const express = require('express');
const app = express();
const serve = require('http').Server(app);
const hbs = require('hbs');
const io = require('socket.io')(serve, { origins: '*:*' });

//require other JS files
//Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// define express config paths
app.use(express.static(publicDirectoryPath));
app.use(express.static('public'));
// app.set('view engine', 'hbs');
// app.set('views', viewsPath);
// hbs.registerPartials(partialsPath);
//initialise classes
const indexPath = (path.join(__dirname, '../public/index.html'));
app.get('', (req, res) =>{
    res.set('Content-Type', 'text/html');
    res.set('X-Content-Type-Options', 'sniff');

    res.sendFile(indexPath);
})
// app.get('/about', (req, res) => {
//     res.render('index', {
//         title: 'About Grids',
//     })
// })

// app.get('/grid', (req, res) => {
//     res.render('index', {
//         title: 'No Grids found here :(',
//     })
// })

serve.listen(3000, () => {
    console.log('Server is on port 3000.');
})

 
var SOCKET_LIST = {};
var socketTest;
io.sockets.on('connection', (socket) =>{
    console.log('socket connection');
    // square variables
    socket.x = 0;
    socket.y = 0;
    socket.id = Math.random();
    socket.width = 100;

    // SOCKET_LIST[socket.id] = socket;
    socketTest = socket;
    socket.on('sad', (data) =>{
        console.log('sad because no square is drawn...' + data.reason);
    })

});

const loopInterval = 1000/25;

setInterval(()=> {
    var pack = [];

    for (var i in SOCKET_LIST) {
        var socket = socketTest;
        // console.log(i);
        // console.log(socket.x);
        // console.log(socket.y);
        // console.log(socket.width);
        // console.log(socket.x);
        socket.emit('drawSquare', socket)

    }
}, loopInterval);