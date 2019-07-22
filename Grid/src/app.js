//require modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
// const jsdom  = require("jsdom");
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

//require other JS files
const Square = require('./dist/SquareClass.js')

// const canvas = document.getElementById('grid');


//define vars from modules
const app = express();
const canvas = createCanvas(800, 600)
const ctx = canvas.getContext('2d');


ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Hello Canvas!', 50, 100)
ctx.save();


// const { JSDOM } = jsdom;
// const dom = new JSDOM("./templates/views/index.hbs");
// console.log(dom.window.document.querySelector("p").textContent);

//Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
// define express config paths
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//initialise classes
var sqr = new Square(20, 20, 10, 10);

// app.get('', (req, res) => {
//     res.send('Hello Express!');
// })

app.get('', (req, res) =>{
    res.render('index', {
        title: sqr.DrawMe(),
        image: "/img/me.png",
        name: 'CrabMan'
    })
})

console.log(sqr.sName)

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About Grids',
        video: "/img/warface.mp4",
    })
})

app.get('/grid', (req, res) =>{
    res.render('index', {
        title: 'No Grids found here :(',
    })
})

app.listen(3000, () =>{
    console.log('Server is on port 3000.');
})