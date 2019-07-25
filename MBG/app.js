const express = require('express');
//Set modules
const path = require('path');
const app = express();
const serv = require('http').Server(app);
const testIO = require('socket.io')(serv, {});



//set local variables
const publicDirectoryPath = path.join(__dirname, './client')
const port = '2000';

app.use(express.static(publicDirectoryPath));   
app.get('', (req, res) =>{
    res.get('index.html');
});
serv.listen(port, () => {
    console.log('Server runnning on port: ' + port);
});

var SOCKET_LIST = {};
testIO.sockets.on('connection', (socket) =>{
    console.log('socket connection');

    //player variables
    socket.id = Math.random();
    socket.x = 0;
    socket.y = 0;
    SOCKET_LIST[socket.id] = socket;

    socket.on('sad', (obj) =>{
        console.log('sad because ' + obj.reason);
    })

    socket.emit('serverMsg', {
        msg: 'hello socket',
    })
})

setInterval(()=>{
    for(var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.x++;
        socket.y++;
        socket.emit('newPosition'),{
            x:socket.x,
            y:socket.y
        }
    }
})