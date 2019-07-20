const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
//Set up paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// define express config paths
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// app.get('', (req, res) => {
//     res.send('Hello Express!');
// })

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Sour',
        image: "/img/me.png",
        name: 'CrabMan'
    })
})

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