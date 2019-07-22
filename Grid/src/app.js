//require modules
const path = require('path');
const express = require('express');
const jsdom  = require("jsdom");
const { createCanvas, loadImage } = require('canvas');

//require other JS files
const canvas = require('./dist/Canvas.js')

//define vars from modules
const app = express();

//JSDOM
/* const { JSDOM } = jsdom;

const htmlFile = "./public/index.html";
var canvasElement = null;

const  dom = JSDOM
            .fromFile(htmlFile)
            .then(dom => {
                canvasElement  = dom.window.document.getElementById("grid");
            })
            .then(dom => {
                console.log(canvasElement);
            });

console.log(canvasElement); */

//Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');

app.get('', (req, res) =>{
    res.send({
        title: 'Canvas Page',
        name: 'crabman'
    })
})

app.listen(3000, () =>{
    console.log('Server is on port 3000.');
})