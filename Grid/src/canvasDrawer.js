
// // document.addEventListener('DOMContentLoaded', canvasDraw);


function canvasDraw() {
    var c = document.getElementById("grid");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(800, 600);
    ctx.stroke();
};

// window.onload = function () {
//     canvasDraw();
// }
module.exports = canvasDraw;