// const Square = require('./dist/SquareClass.js');
// var square = document.write('<script type="text/javascript" src="../src/dist/SquareClass.mjs"></script>')

// console.log(square);

function getNthDigitFromRight(numberVariable, nthdigit) {
    var n = Math.pow(10, nthdigit - 1);
    console.log("n:  " + n)

    var result = Math.floor(numberVariable / n) % 10;
    console.log("1st digit Result: " + result)
    // console.log("1st digit Result: " + result, "2nd digit Result: " + result);

    return result;
}

var socket = io();

// var square = new SquarecLASS(0, 0, 100);
// var square = new Square(0, 0, 100);
// Grid object setup
// var canvas = document.getElementById("canvas").toDataURL();
var hello = document.getElementById("hello").innerHTML;
console.log(hello);
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// var sqr = new Square(0, 0, 100, context);

var columnSize = canvas.scrollWidth / getNthDigitFromRight(canvas.scrollWidth, 3);
var rowSize = canvas.scrollHeight / getNthDigitFromRight(canvas.scrollHeight, 3);
var noOfRows = canvas.scrollWidth / columnSize;
var noOfColumns = canvas.scrollHeight / rowSize;

console.log("ColmunSize: " + columnSize + "\n rowSize: " + rowSize + "\n noOfRows: " + noOfRows + "\n noOfColumns: " + noOfColumns)
var testGrid = new Grid(noOfRows, noOfColumns);
var ball = new Ball(canvas);

//draw objects
testGrid.DrawMe();
// ball.DrawMe();
ball.update();
// var square = new Squareclass(0, 0, 100);

// socket.emit('sad', {
//     reason: 'its not my birthday',
// });
socket.emit('canvas', {
    dCanvas: canvas,
    dContext: context,
});

socket.on('connection', (data) => {
    socket.emit('canvas', {
        dCanvas: canvas,
    });
});

// var square;
socket.on('newPosition', (data) => {
    // ctx.clearRect(0, 0, 500, 500);
    // console.log(square.canvas.width);
    for (var i = 0; i < data.length; i++) {
        // testSquare.DrawMe
        // square = new Square(data[i].x, data[i].y, data[i].width, data[i].width);
        // square.DrawMe();
        // ctx.rect(data[i].x, data[i].y, data[i].width, data[i].width);
        // ctx.stroke();
    }
});