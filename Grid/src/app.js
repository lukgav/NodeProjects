//require modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const jsdom  = require("jsdom");

const canvas = require('./dist/Canvas.js');
const app = express();//Set up paths

//Set up paths, views and handlebars
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
//handlebars views set up
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)
// Partials
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)


//Canvas object instantiation
var canvasEl = null;
var canvasOb = new canvas(canvasEl);

//JSDOM
const { JSDOM } = jsdom;

const htmlFile = "./templates/views/index.hbs";
var canvasEl = null;

const  dom = JSDOM
            .fromFile(htmlFile)
            .then(dom => {
                canvasEl  = dom.window.document.getElementById("grid");
            })
            .then(dom => {
                // console.log(canvasEl);
                canvasOb.canvasElement = canvasEl;
            })
            .then(dom => {
                canvasOb.DrawTest();
            });



// console.log(canvasEl);



app.get('', (req, res) =>{
    res.render('index', {
        title: 'Canvas Page',
        name: 'crabman'
    })
})

app.listen(3000, () =>{
    console.log('Server is on port 3000.');
})