//Require modules
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
//Variabls from modules
//jsdom
class Canvas {
    constructor(pElement) {
        this._options = null;
        this._dom = null;
        this._element = null;
        this._element = pElement;
    }
    DrawTest() {
        if (this.canvasElement.getContext) {
            var ctx = this.canvasElement.getContext('2d');
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(10, 10, 55, 50);
        }
        else {
            alert("Your browser does not support the <canvas> element");
        }
    }
    //#region Property Accessors
    get dom() {
        return this._dom;
    }
    set dom(value) {
        this._dom = value;
    }
    get canvasElement() {
        return this._element;
    }
    set canvasElement(value) {
        this._element = value;
    }
}
module.exports = Canvas;
//# sourceMappingURL=Canvas.js.map