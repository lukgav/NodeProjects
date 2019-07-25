const express = require('express');
const io = require('socket.io');
const path = require('path');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../client')

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) =>{
});

app.listen('8000', () => {
    console.log('Server runnning on port 8000');
});
