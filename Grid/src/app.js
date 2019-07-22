//require modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const jsdom  = require("jsdom");
// const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

//require other JS files
const square = require('./dist/SquareClass.js')
const canvas = require('./dist/Canvas.js')

//define vars from modules
const app = express();

//#region JSDOM
const { JSDOM } = jsdom;
optionsJSDOM = 
{
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
}

const indexFile = "./templates/views/index.hbs";
var canvasElement = null;

const  dom = JSDOM
            .fromFile(indexFile)
            .then(dom => {
                canvasElement  = dom.window.document.getElementById("grid");
            })
            .then(dom => {
                console.log(canvasElement);
            });


console.log();
// #endregion
//#region Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//#endregion
//#region define express config paths
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//#endregion

//initialise classes
var sqr = new square(20, 20, 10, 10);
// var canvasScreen = new canvas(canvasElement);

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