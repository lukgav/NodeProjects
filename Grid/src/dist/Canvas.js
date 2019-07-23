//Require modules
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
//Variabls from modules
//jsdom
class Canvas {
    constructor() {
        this._element = null;
        this._element = null;
    }
    DrawTest() {
        if (this.element.getContext) {
            var ctx = this.element.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);
        }
        else {
            alert("Your browser does not support the <canvas> element");
        }
    }
    //#region Property Accessors
    get element() {
        return this._element;
    }
    set element(value) {
        this._element = value;
    }
}
module.exports = Canvas;
//# sourceMappingURL=Canvas.js.map