class Square {
    // private _contgitext: CanvasRenderingContext2D;
    constructor(x, y, length) {
        this._sName = "Sour Face";
        // private _canvas: HTMLCanvasElement = document.getElementById('grid');
        this._xPos = 0;
        this._yPos = 0;
        this._length = 0;
        this._sidesArray = ["left", "top", "right", "bottom"];
        this._cornerArray = ["topLeft", "topRight", "botleft", "botRight"];
        this.xPos = x;
        this.yPos = y;
        this.length = length;
        this.sName = "Sour Eyes";
        this._canvas = document.getElementById('canvas');
        this.context = this._canvas.getContext("2d");
        // this._canvas = lCanvas;
        // this.context = lContext;
    }
    DrawMe() {
        let strTest = "Drawing Square TEST";
        console.log(strTest);
        this.context.rect(this.xPos, this.yPos, this.length, this.length);
        this.context.stroke();
        return strTest;
    }
    //#region Property Accessors
    get sName() {
        return this._sName;
    }
    set sName(value) {
        this._sName = value;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(value) {
        this._xPos = value;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(value) {
        this._yPos = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
    get sides() {
        return this._sidesArray;
    }
    set sides(value) {
        this._sidesArray = value;
    }
    get corners() {
        return this._cornerArray;
    }
    set corners(value) {
        this._cornerArray = value;
    }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
}
//#endregion
//send to server side
// module.exports = Square;
//Send to client side
// var mySquare = new Square(0, 0, 100);
// window.onload = config;
// function config() {
//     square = new Square(0, 0, 100);
// }
//# sourceMappingURL=SquareClass.js.map