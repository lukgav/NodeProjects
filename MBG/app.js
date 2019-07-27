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

var PLAYER_LIST = {};
var SOCKET_LIST = {};

var Player = (id) =>{
    var self = {
        x: 250,
        y: 250,
        id: id,
        number: "" + Math.floor(10 * Math.random()),
        pressing: {
            right: false,
            left: false,
            up: false,
            down: false
        },
        maxSpeed: 2,

    }


    self.updatePosition = () => {
        if(self.pressing.right){
            self.x += self.maxSpeed;
        }
        if (self.pressing.left) {
            self.x -= self.maxSpeed;
        }
        if (self.pressing.up) {
            self.y -= self.maxSpeed;
        }
        if (self.pressing.down) {
            self.y += self.maxSpeed;
        }
    }

    return self;
}
 
testIO.sockets.on('connection', (socket) =>{
    console.log('socket connection');

    //player variables
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    var player = Player(socket.id);
    PLAYER_LIST[socket.id] = player;
    socket.on('keyPress', (data) =>{
        if(data.inputId === 'right'){
            player.pressing.right = data.state;
        } 
        else if (data.inputId === 'left') {
            player.pressing.left = data.state;
        } 
        else if (data.inputId === 'down') {
            player.pressing.down = data.state;
        } 
        else if (data.inputId === 'up') {
            player.pressing.up = data.state;
        } 
    });


    socket.on('disconnect', () => {
        delete SOCKET_LIST[socket.id];
        delete PLAYER_LIST[socket.id];
    })
})

const loopInterval = 10;
setInterval( () => {
    var pack = [];
    for(var i in PLAYER_LIST){
        var player = PLAYER_LIST[i];
        // player.x++;
        // player.y++;
        player.updatePosition();
        pack.push({
            x: player.x,
            y: player.y,
            number:player.number,
        })
    }
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPosition', pack); 
    }
}, loopInterval);