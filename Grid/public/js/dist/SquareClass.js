class Square {
    // private _contgitext: CanvasRenderingContext2D;
    constructor(x, y, width, height, context) {
        this._sName = "Sour Face";
        // private _canvas: HTMLCanvasElement = document.getElementById('grid');
        this._xPos = 0;
        this._yPos = 0;
        this._width = 0;
        this._height = 0;
        this._sidesArray = ["left", "top", "right", "bottom"];
        this._cornerArray = ["topLeft", "topRight", "botleft", "botRight"];
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height;
        this.sName = "Sour Eyes";
        // console.log(canvas);
        // this._canvas = canvas;//document.getElementById('canvas') as HTMLCanvasElement;
        this.context = context;
        // this._canvas = lCanvas;
        // this.context = lContext;
    }
    DrawMe() {
        let strTest = "Drawing Square TEST";
        console.log(strTest);
        this.context.rect(this.xPos, this.yPos, this.width, this.height);
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
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get sides() {
        return this._sidesArray;
    }
    set sides(value) {
        this._sidesArray = value;
    }
    // get canvas(): HTMLCanvasElement {
    //     return this._canvas;
    // }
    // set canvas(value: HTMLCanvasElement) {
    //     this._canvas = value;
    // }
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
}
//#endregion
// //send to server side
// module.exports = Square;
//Send to client side
// var mySquare = new Square(0, 0, 100);
// window.onload = config;
// function config() {
//     square = new Square(0, 0, 100);
// }
//# sourceMappingURL=SquareClass.js.map