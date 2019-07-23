const express = require('express');

const canvasLibrary = require('canvas');
const canvas = new canvasLibrary(200, 200);
const canvasCtx = canvas.getContext('2d');

// Write "Awesome!"
canvasCtx.font = '30px Impact';
canvasCtx.rotate(0.1);
canvasCtx.fillText('Awesome!', 50, 100);

// Draw line under text
var text = canvasCtx.measureText('Awesome!');
canvasCtx.strokeStyle = 'rgba(0,0,0,0.5)';
canvasCtx.beginPath();
canvasCtx.lineTo(50, 102);
canvasCtx.lineTo(50 + text.width, 102);
canvasCtx.stroke();


// router.get('/show', function (req, res, next) {
//     res.setHeader('Content-Type', 'image/png');
//     canvas.pngStream().pipe(res);
// });