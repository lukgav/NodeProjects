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

var Entity = () => {
    var self = {
        x: 250,
        y: 250,
        spdX: 0,
        spdY: 0,
        id: "",
    }
    self.update = () => {
        self.updatePosition();
    }
    self.updatePosition = () => {
        self.x += self.spdX;
        self.y += self.spdY;
    }
    return self;
}

var Player = (id) =>{

    var self = Entity();
    self.id = id;
    self.number =  "" + Math.floor(10 * Math.random()),
    self.pressing = {
        right: false,
        left: false,
        up: false,
        down: false,
    } 
    self.maxSpeed =  10;

    var abstract_update = self.update;
    self.update = () => {
        self.updateSpd();
        abstract_update();
    }

    self.updateSpd = () => {
        if(self.pressing.right){
            self.spdX = self.maxSpeed;
        } else if (self.pressing.left){
            self.spdX = -self.maxSpeed;
        } else{
            self.spdX = 0;
        }

        if (self.pressing.up) {
            self.spdY = -self.maxSpeed;
        }else if (self.pressing.down) {
            self.spdY = self.maxSpeed;
        }
        else{
            self.spdY = 0;
        }
    }
    Player.list[id] = self;
    return self;
}
Player.list = {};
Player.onConnect = (socket) => {
    var player = Player(socket.id);
    socket.on('keyPress', (data) => {
        if (data.inputId === 'right') {
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
}

Player.onDisconnect = (socket) => { 
    delete Player.list[socket.id];
}


Player.update = () => {
    var pack = [];
    for (var i in Player.list) {
        var player = Player.list[i];
        player.update();
        pack.push({
            x: player.x,
            y: player.y,
            number: player.number,
        });
    }
    return pack;
}


var Bullet = (angle) => {

    var self = Entity();
    self.id = Math.random();
    self.spdX = Math.cos(angle/180*Math.PI) * 10;
    self.spdY = Math.sin(angle/180*Math.PI) * 10;

    self.timer = 0;
    self.toRemove = false;

    var abstract_update = self.update;

    self.update = () => {
         if(self.timer++ > 100){
             self.toRemove = true;
         }
        abstract_update();
    }

    Bullet.list[self.id] = self;
    return self;
}
Bullet.list = {};

Bullet.update = () => {
    if(Math.random() < 0.3){
        Bullet(Math.random()*360);
    }

    var pack = [];
    for (var i in Bullet.list) {
        var bullet = Bullet.list[i];
        bullet.update();
        pack.push({
            x: bullet.x,
            y: bullet.y,
        });
    }
    return pack;
};
testIO.sockets.on('connection', (socket) =>{
    console.log('socket connection');

    //player variables
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    Player.onConnect(socket);

    socket.on('disconnect', () => {
        delete SOCKET_LIST[socket.id];
        Player.onDisconnect(socket);
    });
});

const loopInterval = 40;
setInterval( () => {
    var pack = {
        player: Player.update(),
        bullet: Bullet.update(),
    }

    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions', pack); 
    }
}, loopInterval);